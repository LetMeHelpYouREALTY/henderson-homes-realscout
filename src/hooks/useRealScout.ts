'use client'

import { useEffect, useState } from 'react'

export function useRealScout() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const existingScript = document.querySelector(
      'script[src*="realscout-web-components"]'
    )

    if (existingScript) {
      setIsLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src =
      'https://em.realscout.com/widgets/realscout-web-components.umd.js'
    script.type = 'module'
    script.async = true

    script.onload = () => {
      setIsLoaded(true)
      setError(null)
    }

    script.onerror = () => {
      setError('Failed to load RealScout widget')
      setIsLoaded(false)
    }

    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return { isLoaded, error }
}
