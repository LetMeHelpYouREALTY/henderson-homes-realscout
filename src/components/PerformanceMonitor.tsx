'use client'

import { useEffect } from 'react'

// TypeScript declarations for global functions
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params: Record<string, unknown>
    ) => void
  }
}

// Performance entry interfaces
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput?: boolean
  value?: number
}

interface InteractionEntry extends PerformanceEntry {
  processingStart?: number
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Core Web Vitals monitoring
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // LCP (Largest Contentful Paint)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          if (lastEntry) {
            console.log('LCP:', lastEntry.startTime)
            // Send to analytics service if available
            if (typeof window.gtag === 'function') {
              window.gtag('event', 'LCP', {
                value: Math.round(lastEntry.startTime),
                event_category: 'Web Vitals',
                event_label: window.location.pathname,
              })
            }
          }
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          for (const entry of entries) {
            const fidEntry = entry as FirstInputEntry
            if (
              fidEntry.processingStart !== undefined &&
              fidEntry.startTime !== undefined
            ) {
              const fid = fidEntry.processingStart - fidEntry.startTime
              console.log('FID:', fid)
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'FID', {
                  value: Math.round(fid),
                  event_category: 'Web Vitals',
                  event_label: window.location.pathname,
                })
              }
            }
          }
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // CLS (Cumulative Layout Shift)
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          const entries = list.getEntries()
          for (const entry of entries) {
            const layoutShiftEntry = entry as LayoutShiftEntry
            if (
              !layoutShiftEntry.hadRecentInput &&
              layoutShiftEntry.value !== undefined
            ) {
              clsValue += layoutShiftEntry.value
            }
          }
          console.log('CLS:', clsValue)
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'CLS', {
              value: Math.round(clsValue * 1000) / 1000,
              event_category: 'Web Vitals',
              event_label: window.location.pathname,
            })
          }
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        // INP (Interaction to Next Paint)
        const inpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          for (const entry of entries) {
            const interactionEntry = entry as InteractionEntry
            if (
              interactionEntry.processingStart !== undefined &&
              interactionEntry.startTime !== undefined
            ) {
              const inp =
                interactionEntry.processingStart - interactionEntry.startTime
              console.log('INP:', inp)
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'INP', {
                  value: Math.round(inp),
                  event_category: 'Web Vitals',
                  event_label: window.location.pathname,
                })
              }
            }
          }
        })
        inpObserver.observe({ entryTypes: ['interaction'] })

        // Cleanup
        return () => {
          lcpObserver.disconnect()
          fidObserver.disconnect()
          clsObserver.disconnect()
          inpObserver.disconnect()
        }
      } catch (error) {
        console.warn('Performance monitoring failed:', error)
      }
    }
  }, [])

  return null
}
