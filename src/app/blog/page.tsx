import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Henderson Real Estate Market News & Insights | Henderson Homes Blog',
  description:
    'Stay informed with the latest Henderson Nevada real estate market trends, home buying tips, and local housing insights from industry experts.',
  keywords:
    'Henderson real estate market, Nevada housing trends, Henderson home buying tips, real estate market insights, Henderson housing market',
  openGraph: {
    title: 'Henderson Real Estate Market Insights & News',
    description:
      'Latest market trends and insights for Henderson homebuyers and sellers',
    url: 'https://searchforhomesinhenderson.com/blog',
    siteName: 'Henderson Homes Blog',
    type: 'article',
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com/blog',
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section with H1 */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Henderson Real Estate Market Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest market trends, home buying tips, and
              insights that matter to Henderson homebuyers and sellers.
            </p>
          </header>

          {/* RSS Feed Content */}
          <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Latest Market Updates & Insights
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-600 mb-2">
                📊 <strong>Real-time market data</strong> from industry experts
                at Simplifying the Market
              </p>
            </div>
            <iframe
              src="https://www.simplifyingthemarket.com/en/?a=956758-ef2edda2f940e018328655620ea05f18"
              scrolling="yes"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              height="1200px"
              width="100%"
              allowFullScreen
              className="w-full border-0 rounded"
              title="Real Estate Market Insights"
            />
          </section>

          {/* Value Proposition Section */}
          <section className="bg-blue-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-blue-800 text-center">
              How These Market Insights Help Henderson Buyers & Sellers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  🏠 For Buyers
                </h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Understand current Henderson market conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Learn optimal timing for purchases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Get insights on financing and rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Track inventory levels in your target areas</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  💰 For Sellers
                </h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Track Henderson home value trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Understand buyer behavior patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Optimize listing timing and pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Monitor competition in your neighborhood</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Local Market Context */}
          <section className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              Henderson-Specific Market Context
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-blue-600">
                  🏘️ Green Valley
                </h3>
                <p className="text-sm text-gray-600">
                  Luxury market segment with high-end amenities and premium
                  pricing
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-blue-600">
                  🏔️ Anthem
                </h3>
                <p className="text-sm text-gray-600">
                  Hillside properties with views, golf access, and resort-style
                  living
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-blue-600">
                  👨‍👩‍👧‍👦 Family Areas
                </h3>
                <p className="text-sm text-gray-600">
                  Stephanie Ranch and Whitney Ranch offer excellent schools and
                  affordability
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-blue-600 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Apply These Insights?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Let our Henderson experts help you navigate the market with
              confidence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://drjanduffy.realscout.com/onboarding"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Expert Consultation
              </a>
              <a
                href="http://drjanduffy.realscout.com/onboarding"
                className="inline-block bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Search Henderson Homes
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
