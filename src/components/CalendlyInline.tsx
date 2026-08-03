'use client'

import Script from 'next/script'

interface CalendlyInlineProps {
  readonly eventSlug: string
  readonly utm?: Record<string, string>
  readonly minHeight?: number
}

const CALENDLY_BASE_URL = 'https://calendly.com/drjanduffy'

function buildSchedulingUrl(eventSlug: string, utm?: Record<string, string>) {
  const url = new URL(`${CALENDLY_BASE_URL}/${eventSlug}`)
  for (const [key, value] of Object.entries(utm ?? {})) {
    url.searchParams.set(key, value)
  }
  return url.toString()
}

/**
 * Full inline scheduler, reserved for the dedicated /schedule page only.
 * minHeight is set up front so the reserved layout space prevents CLS
 * while Calendly's iframe loads — see calendly-vercel-integration-2026.md.
 */
export function CalendlyInline({
  eventSlug,
  utm,
  minHeight = 700,
}: CalendlyInlineProps) {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <div
        className="calendly-inline-widget w-full"
        data-url={buildSchedulingUrl(eventSlug, utm)}
        style={{ minWidth: '320px', height: `${minHeight}px` }}
      />
    </>
  )
}
