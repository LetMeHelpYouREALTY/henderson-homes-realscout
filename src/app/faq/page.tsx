'use client'

import { useId } from 'react'

export default function FAQPage() {
  const faqId = useId()

  return (
    <main className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Henderson Real Estate FAQ
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get answers to the most common questions about buying, selling, and
            investing in Henderson, Nevada real estate.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Home Buying Questions */}
            <div itemScope itemType="https://schema.org/Question">
              <h2
                itemProp="name"
                className="text-2xl font-bold mb-6 text-gray-800"
              >
                Home Buying in Henderson
              </h2>
              <div
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <div itemProp="text" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">
                      What's the average home price in Henderson Nevada?
                    </h3>
                    <p className="text-gray-600">
                      Henderson home prices range from $400K in Whitney Ranch to
                      $1.2M+ in Green Valley, with most properties between
                      $500K-$800K. Our licensed Henderson REALTOR provides
                      current market analysis for all Henderson neighborhoods.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">
                      Which Henderson neighborhood is best for families?
                    </h3>
                    <p className="text-gray-600">
                      Stephanie Ranch and Whitney Ranch offer excellent schools,
                      family amenities, and more affordable pricing. Green
                      Valley provides luxury family living with top-rated
                      schools and resort-style communities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">
                      How do I get pre-approved for a mortgage in Henderson?
                    </h3>
                    <p className="text-gray-600">
                      Start by contacting local lenders who understand the
                      Nevada market. We recommend getting pre-approved before
                      house hunting to know your budget and show sellers you're
                      a serious buyer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Neighborhood Questions */}
            <div itemScope itemType="https://schema.org/Question">
              <h2
                itemProp="name"
                className="text-2xl font-bold mb-6 text-gray-800"
              >
                Henderson Neighborhoods & Communities
              </h2>
              <div
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <div itemProp="text" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">
                      What are the best schools in Henderson?
                    </h3>
                    <p className="text-gray-600">
                      Henderson has excellent schools including Green Valley
                      High School, Coronado High School, and various elementary
                      schools in the Clark County School District. Many families
                      choose specific neighborhoods based on school ratings and
                      programs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">
                      Are there golf course communities in Henderson?
                    </h3>
                    <p className="text-gray-600">
                      Yes! Green Valley and Anthem feature beautiful golf course
                      communities. These areas offer luxury living with access
                      to championship golf courses, clubhouses, and resort-style
                      amenities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">
                      What's the difference between Green Valley and Anthem?
                    </h3>
                    <p className="text-gray-600">
                      Green Valley is more established with mature landscaping
                      and closer to shopping/dining. Anthem is newer with modern
                      homes, larger lots, and a more suburban feel. Both offer
                      excellent amenities and family-friendly environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Market & Investment Questions */}
            <div itemScope itemType="https://schema.org/Question">
              <h2
                itemProp="name"
                className="text-2xl font-bold mb-6 text-gray-800"
              >
                Market Trends & Investment
              </h2>
              <div
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <div itemProp="text" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">
                      Is Henderson a good place to invest in real estate?
                    </h3>
                    <p className="text-gray-600">
                      Absolutely! Henderson has strong appreciation rates,
                      growing population, and diverse property types. The city's
                      proximity to Las Vegas, excellent schools, and quality of
                      life make it attractive to both residents and investors.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">
                      What's the current market trend in Henderson?
                    </h3>
                    <p className="text-gray-600">
                      Henderson's market shows steady growth with increasing
                      demand for family homes. Inventory varies by neighborhood,
                      but well-maintained properties in good locations typically
                      sell quickly at fair market value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Selling Questions */}
            <div itemScope itemType="https://schema.org/Question">
              <h2
                itemProp="name"
                className="text-2xl font-bold mb-6 text-gray-800"
              >
                Selling Your Henderson Home
              </h2>
              <div
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <div itemProp="text" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">
                      How do I get an accurate home value estimate?
                    </h3>
                    <p className="text-gray-600">
                      Contact us for a comprehensive market analysis using
                      recent comparable sales, current market conditions, and
                      your home's unique features. Online estimates can be
                      inaccurate - we provide professional valuations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">
                      What improvements increase home value in Henderson?
                    </h3>
                    <p className="text-gray-600">
                      Kitchen updates, bathroom renovations, and outdoor living
                      spaces add the most value. Energy-efficient upgrades and
                      modern finishes also appeal to Henderson buyers. We can
                      recommend cost-effective improvements for your specific
                      property.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our Henderson real estate experts are here to help with any specific
            questions about buying, selling, or investing in Henderson
            properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Expert Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
