import Script from 'next/script'

type HyperLocalSeoSectionProps = {
  neighborhoodName: string
  faq: Array<{
    question: string
    answer: string
  }>
}

const BUSINESS_NAME = 'Dr. Jan Duffy Real Estate'
const BUSINESS_PHONE = '(702) 500-1064'
const BUSINESS_PHONE_TEL = '+17025001064'
const BUSINESS_ADDRESS_LINE_1 = '2470 Paseo Verde Parkway, Suite 135'
const BUSINESS_ADDRESS_LINE_2 = 'Henderson, NV 89074'
const BUSINESS_MAP_URL =
  'https://maps.google.com/?q=2470+Paseo+Verde+Parkway+Suite+135+Henderson+NV+89074'
const BUSINESS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=2470+Paseo+Verde+Parkway+Suite+135+Henderson+NV+89074'
const BUSINESS_REVIEWS_URL =
  'https://www.google.com/search?q=Dr.+Jan+Duffy+Real+Estate+Henderson+reviews'

export default function HyperLocalSeoSection({
  neighborhoodName,
  faq,
}: HyperLocalSeoSectionProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <Script
        id={`faq-schema-${neighborhoodName.toLowerCase().replace(/\s+/g, '-')}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="py-14 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Local Contact for {neighborhoodName} Real Estate
            </h2>
            <p className="text-slate-200 mb-8">
              Speak directly with a Henderson local specialist for homes in{' '}
              {neighborhoodName}. Get current market guidance, showing support,
              and neighborhood-level insight.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Business Details</h3>
                <p className="font-semibold">{BUSINESS_NAME}</p>
                <p>{BUSINESS_ADDRESS_LINE_1}</p>
                <p>{BUSINESS_ADDRESS_LINE_2}</p>
                <p className="mt-2">
                  Phone:{' '}
                  <a className="underline" href={`tel:${BUSINESS_PHONE_TEL}`}>
                    {BUSINESS_PHONE}
                  </a>
                </p>
                <p className="mt-2 text-slate-300">
                  Hours: Mon-Fri 9:00 AM-6:00 PM, Sat 10:00 AM-4:00 PM
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Quick Actions</h3>
                <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                  <a
                    href={`tel:${BUSINESS_PHONE_TEL}`}
                    className="inline-block bg-emerald-500 text-slate-900 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href={BUSINESS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-slate-900 px-5 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                  >
                    Directions
                  </a>
                  <a
                    href={BUSINESS_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-white px-5 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
                  >
                    View Google Reviews
                  </a>
                </div>
                <p className="text-slate-300 mt-4 text-sm">
                  Need an office visit? Use the map and directions links to
                  navigate to our Henderson location.
                </p>
              </div>
            </div>

            <iframe
              title={`${BUSINESS_NAME} office map`}
              src={`${BUSINESS_MAP_URL}&output=embed`}
              loading="lazy"
              className="w-full h-72 rounded-xl border border-slate-700"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-5">
                {neighborhoodName} Buyer FAQs
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {faq.map((item) => (
                  <div
                    key={item.question}
                    className="bg-slate-800 rounded-xl p-5"
                  >
                    <h4 className="font-semibold mb-2">{item.question}</h4>
                    <p className="text-slate-200 text-sm">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
