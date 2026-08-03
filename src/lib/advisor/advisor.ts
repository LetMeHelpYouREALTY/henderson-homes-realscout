// advisor.ts — typed wrapper around the Anthropic advisor tool (beta).
// Validates the executor+advisor pair BEFORE calling the API so a bad combo
// fails loudly here instead of costing a round-trip + a 400.
//
//   import { runAdvisor } from '@/lib/advisor/advisor';
//   const res = await runAdvisor({ prompt: 'Build X', executor: 'sonnet-5', advisor: 'opus-4-8' });
//
// Requires Node 18+ (global fetch). No npm dependencies.

import { type ModelId, isValidPair } from './advisorPairs'

const API_URL = 'https://api.anthropic.com/v1/messages'
const BETA_HEADER = 'advisor-tool-2026-03-01'

// Verified-valid defaults: Sonnet 5 executor + Opus 4.8 advisor keeps the advisor
// at Opus (not Fable/Mythos) so there is no 30-day-retention exposure.
export const DEFAULT_EXECUTOR = 'claude-sonnet-5'
export const DEFAULT_ADVISOR = 'claude-opus-4-8'

export interface AnthropicMessage {
  role: 'user' | 'assistant'
  content: string | unknown
}

export interface RunAdvisorOptions {
  prompt?: string
  messages?: AnthropicMessage[]
  executor?: string
  advisor?: string
  maxTokens?: number
  apiKey?: string
  /** Set true to permit a Fable/Mythos advisor (30-day retention, no ZDR). */
  allowRetentionRisk?: boolean
}

export interface RunAdvisorResult {
  text: string
  executor: ModelId
  advisor: ModelId
  usage: unknown
  raw: unknown
}

export async function runAdvisor(
  opts: RunAdvisorOptions = {}
): Promise<RunAdvisorResult> {
  const {
    prompt,
    messages,
    executor = DEFAULT_EXECUTOR,
    advisor = DEFAULT_ADVISOR,
    maxTokens = 4096,
    apiKey = process.env.ANTHROPIC_API_KEY,
    allowRetentionRisk = false,
  } = opts

  // 1. Validate the pair first — this is the whole point of the wrapper.
  const check = isValidPair(executor, advisor)
  if (!check.valid || !check.executor || !check.advisor) {
    throw new Error(`Invalid advisor pair: ${check.reason}`)
  }
  // 2. Retention guard: block Fable/Mythos advisors unless explicitly opted in.
  if (check.retentionRisk && !allowRetentionRisk) {
    throw new Error(
      `Advisor "${check.advisor}" carries 30-day retention (no ZDR). Refusing by default — never route client PII / flagged work here. Pass allowRetentionRisk:true only for non-confidential work.`
    )
  }
  if (!apiKey) {
    throw new Error('Missing ANTHROPIC_API_KEY (env var or apiKey option).')
  }

  // 3. Build the message list.
  const msgs: AnthropicMessage[] | null =
    messages ?? (prompt ? [{ role: 'user', content: prompt }] : null)
  if (!msgs)
    throw new Error('Provide either `prompt` (string) or `messages` (array).')

  // 4. Call the API with the validated (canonical) model ids.
  const body = {
    model: check.executor,
    max_tokens: maxTokens,
    tools: [
      { type: 'advisor_20260301', name: 'advisor', model: check.advisor },
    ],
    messages: msgs,
  }

  const resp = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-beta': BETA_HEADER,
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = (await resp.json()) as {
    content?: Array<{ type: string; text?: string }>
    usage?: unknown
    error?: { type: string; message: string }
  }

  if (!resp.ok) {
    const detail = data?.error
      ? `${data.error.type}: ${data.error.message}`
      : JSON.stringify(data)
    throw new Error(`API ${resp.status} — ${detail}`)
  }

  const text = Array.isArray(data.content)
    ? data.content
        .filter((b) => b.type === 'text')
        .map((b) => b.text ?? '')
        .join('')
    : ''

  return {
    text,
    executor: check.executor,
    advisor: check.advisor,
    usage: data.usage,
    raw: data,
  }
}
