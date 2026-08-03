import { createHmac, timingSafeEqual } from 'node:crypto'
import { config } from '@/lib/config'
import { APIError, logError } from '@/lib/errors'
import { type NextRequest, NextResponse } from 'next/server'

// Calendly signs webhooks as `Calendly-Webhook-Signature: t=<timestamp>,v1=<hmac>`
// computed over `${timestamp}.${rawBody}` with the org's webhook signing key.
// https://developer.calendly.com/api-docs/webhook-signatures
function verifySignature(rawBody: string, header: string | null): boolean {
  if (!config.calendly.webhookSigningKey || !header) return false

  const parts = Object.fromEntries(
    header.split(',').map((part) => part.split('=') as [string, string])
  )
  const timestamp = parts.t
  const signature = parts.v1
  if (!timestamp || !signature) return false

  const expected = createHmac('sha256', config.calendly.webhookSigningKey)
    .update(`${timestamp}.${rawBody}`)
    .digest('hex')

  const expectedBuf = Buffer.from(expected, 'hex')
  const signatureBuf = Buffer.from(signature, 'hex')
  if (expectedBuf.length !== signatureBuf.length) return false

  return timingSafeEqual(expectedBuf, signatureBuf)
}

interface CalendlyInvitee {
  name: string
  email: string
  text_reminder_number?: string | null
  questions_and_answers?: { question: string; answer: string }[]
}

interface CalendlyWebhookPayload {
  event: 'invitee.created' | 'invitee.canceled'
  payload: {
    email: string
    name: string
    text_reminder_number?: string | null
    questions_and_answers?: { question: string; answer: string }[]
    event_type: { name: string; slug: string }
    scheduled_event: { start_time: string; name: string }
    cancellation?: { reason: string | null; canceled_by: string }
  }
}

async function upsertFubContact(
  invitee: CalendlyInvitee,
  tags: string[],
  note: string
) {
  const [firstName, ...rest] = invitee.name.trim().split(' ')
  const lastName = rest.join(' ') || firstName

  const contactData = {
    people: [
      {
        firstName,
        lastName,
        emails: [{ value: invitee.email, type: 'work' }],
        phones: invitee.text_reminder_number
          ? [{ value: invitee.text_reminder_number, type: 'mobile' }]
          : [],
        tags,
        source: 'Calendly',
        customFields: {
          Message: note,
          Location: 'Henderson, Nevada',
        },
      },
    ],
  }

  const response = await fetch(`${config.followUpBoss.apiUrl}/people`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.followUpBoss.apiKey}:`).toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new APIError(
      `Follow Up Boss contact upsert failed: ${errorText}`,
      response.status,
      'FUB_UPSERT_FAILED'
    )
  }
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text()

  if (!config.followUpBoss.apiKey) {
    logError(
      new APIError(
        'Follow Up Boss API key not configured',
        503,
        'CONFIG_MISSING'
      ),
      { endpoint: '/api/calendly-webhook' }
    )
    return NextResponse.json(
      { error: 'Service temporarily unavailable' },
      { status: 503 }
    )
  }

  if (
    !verifySignature(rawBody, request.headers.get('Calendly-Webhook-Signature'))
  ) {
    logError(
      new APIError('Invalid Calendly webhook signature', 401, 'BAD_SIGNATURE'),
      {
        endpoint: '/api/calendly-webhook',
      }
    )
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  let body: CalendlyWebhookPayload
  try {
    body = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  try {
    const { event, payload } = body
    const invitee: CalendlyInvitee = {
      name: payload.name,
      email: payload.email,
      text_reminder_number: payload.text_reminder_number,
      questions_and_answers: payload.questions_and_answers,
    }

    if (event === 'invitee.created') {
      await upsertFubContact(
        invitee,
        [payload.event_type.name, 'Calendly Booking', 'Henderson Real Estate'],
        `Booked "${payload.event_type.name}" for ${payload.scheduled_event.start_time}`
      )
    } else if (event === 'invitee.canceled') {
      // A reschedule fires both invitee.canceled and invitee.created for the
      // new time — model this as a state transition, not a duplicate lead.
      await upsertFubContact(
        invitee,
        [payload.event_type.name, 'Calendly Canceled', 'Henderson Real Estate'],
        `Canceled "${payload.event_type.name}" (${payload.cancellation?.reason ?? 'no reason given'})`
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    logError(error, {
      endpoint: '/api/calendly-webhook',
      method: 'POST',
      context: 'Calendly webhook handler',
    })
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
