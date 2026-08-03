'use client'

import { Button, type ButtonProps } from '@/components/ui/button'
import Script from 'next/script'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

interface CalendlyPopupButtonProps extends Omit<ButtonProps, 'onClick'> {
  readonly eventSlug: string
  readonly utm?: Record<string, string>
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
 * Popup CTA for content pages. Loads Calendly's widget script lazily
 * (only once this component mounts) so pages without a scheduling CTA
 * never pay the script cost — see calendly-vercel-integration-2026.md.
 */
export function CalendlyPopupButton({
  eventSlug,
  utm,
  children,
  ...buttonProps
}: CalendlyPopupButtonProps) {
  const handleClick = () => {
    window.Calendly?.initPopupWidget({
      url: buildSchedulingUrl(eventSlug, utm),
    })
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <Button {...buttonProps} onClick={handleClick}>
        {children}
      </Button>
    </>
  )
}
