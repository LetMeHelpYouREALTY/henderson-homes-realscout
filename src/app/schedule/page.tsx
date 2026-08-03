import { CalendlyInline } from '@/components/CalendlyInline'
import StructuredData, { webPageData } from '@/components/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Schedule a Consultation | Henderson Real Estate Experts',
  description:
    'Book a free consultation with a Henderson, NV real estate expert. Pick a time that works for you — buyer consultation, listing consultation, or a property showing.',
}

export default function SchedulePage() {
  return (
    <>
      <StructuredData
        type="WebPage"
        data={webPageData({
          name: 'Schedule a Consultation',
          description:
            'Book a free consultation with a Henderson, NV real estate expert.',
          url: 'https://searchforhomesinhenderson.com/schedule',
          mainEntity: {
            '@type': 'ScheduleAction',
            name: 'Schedule a Real Estate Consultation',
          },
        })}
      />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule Your Henderson Real Estate Consultation
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pick a time below — buyer consultation, listing consultation, or a
              property showing. No pressure, just straight answers.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <CalendlyInline eventSlug="buyer-consultation-30-min" />
          </div>
        </section>
      </main>
    </>
  )
}
