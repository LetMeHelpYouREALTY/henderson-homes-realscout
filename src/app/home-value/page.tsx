'use client'

import StructuredData, { webPageData } from '@/components/StructuredData'
import { useEffect, useRef } from 'react'

export default function HomeValuePage() {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load RealScout script
    const script = document.createElement('script')
    script.src =
      'https://em.realscout.com/widgets/realscout-web-components.umd.js'
    script.type = 'module'

    script.onload = () => {
      // Create the widget element after script loads
      if (widgetRef.current) {
        const widget = document.createElement('realscout-home-value')
        widget.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
        widgetRef.current.appendChild(widget)
      }
    }

    document.head.appendChild(script)

    // Cleanup
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <StructuredData
        type="WebPage"
        data={webPageData({
          name: 'Henderson Home Value Estimator',
          description:
            'Get instant home value estimates for Henderson, Nevada properties with our comprehensive valuation tool',
          url: 'https://searchforhomesinhenderson.com/home-value',
          mainEntity: {
            '@type': 'Service',
            name: 'Home Value Estimation',
            description:
              'Professional home value estimation for Henderson, Nevada properties',
            provider: {
              '@type': 'RealEstateAgent',
              name: 'Dr. Jan Duffy',
              jobTitle: 'REALTOR',
            },
          },
        })}
      />
      <main className="min-h-screen">
        {/* Hero Section with H1 */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Henderson Home Value Estimator
            </h1>
            <p className="text-xl text-green-100 max-w-4xl mx-auto mb-8">
              Discover your property's current market value with our
              comprehensive home valuation tool. Get instant estimates based on
              recent sales, market trends, and neighborhood data.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              ✓ Free • Instant • Accurate Market Data
            </div>
          </div>
        </section>

        {/* Value Factors Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Factors Affecting Your Henderson Home Value
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-4">🏠</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Property Features
                </h3>
                <p className="text-gray-600 text-sm">
                  Square footage, bedrooms, bathrooms, lot size, and unique
                  amenities
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Location & Neighborhood
                </h3>
                <p className="text-gray-600 text-sm">
                  School districts, proximity to amenities, neighborhood
                  desirability
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Market Conditions
                </h3>
                <p className="text-gray-600 text-sm">
                  Current inventory, buyer demand, interest rates, seasonal
                  trends
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Property Condition
                </h3>
                <p className="text-gray-600 text-sm">
                  Age, updates, maintenance, curb appeal, energy efficiency
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Home Value Calculator CTA */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Get Your Free Home Valuation
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our advanced algorithm analyzes recent sales, market trends, and
                property characteristics to provide an accurate estimate of your
                Henderson home's value.
              </p>
              <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Enter Your Address
                </h3>
                <input
                  type="text"
                  placeholder="123 Main St, Henderson, NV"
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="button"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Get My Home Value
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  No registration required • Instant results
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Henderson Market Insights */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Henderson Real Estate Market Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Current Market Trends
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Median Home Price</span>
                    <span className="font-semibold text-green-600">
                      $625,000
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price per Sq Ft</span>
                    <span className="font-semibold">$285</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">YoY Price Change</span>
                    <span className="font-semibold text-green-600">+5.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Days on Market</span>
                    <span className="font-semibold">28 days</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Henderson Neighborhoods
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Green Valley</span>
                    <span className="font-semibold">$750K-$1.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Anthem</span>
                    <span className="font-semibold">$650K-$950K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stephanie Ranch</span>
                    <span className="font-semibold">$450K-$650K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Whitney Ranch</span>
                    <span className="font-semibold">$400K-$600K</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Choose Henderson?
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Top-rated school districts</li>
                  <li>• Family-friendly communities</li>
                  <li>• Close to Las Vegas amenities</li>
                  <li>• Year-round outdoor activities</li>
                  <li>• Growing job market</li>
                  <li>• Safe neighborhoods</li>
                  <li>• Master-planned communities</li>
                  <li>• Excellent healthcare facilities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Home Value Widget */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Get Your Free Home Value Estimate
              </h2>
              <p className="text-center text-lg mb-8 text-gray-600">
                Use our advanced home value widget to get an instant estimate of
                your Henderson property's current market value.
              </p>

              <div className="bg-white rounded-lg shadow-lg p-8">
                {/* RealScout Script */}
                <script
                  src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
                  type="module"
                />

                {/* RealScout Home Value Widget Styling */}
                <style>
                  {`
                  realscout-home-value {
                    --rs-hvw-background-color: #ffffff;
                    --rs-hvw-title-color: #000000;
                    --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
                    --rs-hvw-primary-button-text-color: #ffffff;
                    --rs-hvw-primary-button-color: rgb(35, 93, 137);
                    --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
                    --rs-hvw-secondary-button-color: #ffffff;
                    --rs-hvw-widget-width: auto;
                  }
                `}
                </style>

                {/* RealScout Home Value Widget */}
                <div ref={widgetRef} />

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    This widget provides instant home value estimates based on
                    current market data and recent sales in your area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Appraisal CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Professional Appraisal?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              While our online estimator provides a great starting point, a
              professional appraisal offers the most accurate valuation for
              selling, refinancing, or insurance purposes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-3">
                  When You Need a Professional Appraisal:
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Selling your home</li>
                  <li>• Refinancing your mortgage</li>
                  <li>• Removing PMI insurance</li>
                  <li>• Estate planning</li>
                  <li>• Divorce proceedings</li>
                  <li>• Tax assessments</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-3">
                  Our Professional Services:
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Licensed appraisers</li>
                  <li>• Comprehensive market analysis</li>
                  <li>• Detailed property inspection</li>
                  <li>• Fast turnaround times</li>
                  <li>• Lender-approved reports</li>
                  <li>• Expert consultation</li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Professional Appraisal
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
