import { RealScoutWidget } from '@/components/RealScoutWidget'
import type { Metadata } from 'next'
import StructuredData, { webPageData } from '@/components/StructuredData'

export const metadata: Metadata = {
  title:
    'Advanced Property Search - Find Homes in Henderson, Nevada | Dr. Jan Duffy REALTOR',
  description:
    'Use our advanced search tools to find the perfect home in Henderson, NV with Dr. Jan Duffy. Filter by price, bedrooms, bathrooms, property type, and neighborhood to discover your ideal property. Call (702) 500-1064.',
  keywords: [
    'Henderson property search',
    'Nevada home search',
    'advanced real estate search',
    'Henderson homes for sale',
    'property finder Henderson',
    'Henderson REALTOR',
    'Dr. Jan Duffy',
    'Green Valley homes',
    'Anthem homes',
    'Stephanie Ranch homes',
    'Whitney Ranch homes',
    'Henderson MLS search',
  ],
  authors: [{ name: 'Dr. Jan Duffy - Henderson REALTOR' }],
  creator: 'Dr. Jan Duffy - Henderson Homes',
  publisher: 'Dr. Jan Duffy Real Estate',
  category: 'Real Estate',
  classification: 'Henderson Property Search',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  openGraph: {
    title:
      'Advanced Property Search - Find Homes in Henderson, Nevada | Dr. Jan Duffy REALTOR',
    description:
      "Find your perfect home in Henderson with our advanced search tools and Dr. Jan Duffy's expert guidance",
    url: 'https://searchforhomesinhenderson.com/search',
    siteName: 'Henderson Homes - Dr. Jan Duffy',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Henderson Property Search',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Property Search - Henderson Homes | Dr. Jan Duffy',
    description:
      'Find your perfect home in Henderson with our advanced search tools',
    images: [
      'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
    ],
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com/search',
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Henderson',
    'geo.position': '36.0397;-115.0498',
    ICBM: '36.0397, -115.0498',
    'DC.title': 'Advanced Property Search - Henderson Homes',
    'DC.creator': 'Dr. Jan Duffy',
    'DC.subject': 'Henderson Property Search, Nevada Real Estate',
    'DC.description':
      'Advanced property search tools for Henderson, Nevada real estate',
    'DC.publisher': 'Dr. Jan Duffy Real Estate',
    'DC.contributor': 'Dr. Jan Duffy',
    'DC.date': '2024',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://searchforhomesinhenderson.com/search',
    'DC.language': 'en',
    'DC.coverage': 'Henderson, Nevada, United States',
    'DC.rights': 'Copyright 2024 Dr. Jan Duffy Real Estate',
  },
}

export default function AdvancedSearchPage() {
  return (
    <>
      <StructuredData
        type="WebPage"
        data={webPageData({
          name: 'Advanced Property Search - Henderson, Nevada',
          description:
            'Find your perfect home in Henderson with our advanced search tools and expert guidance',
          url: 'https://searchforhomesinhenderson.com/search',
          mainEntity: {
            '@type': 'Service',
            name: 'Property Search',
            description:
              'Advanced real estate search tools for Henderson, Nevada properties',
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
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Property Search in Henderson, Nevada
            </h1>
            <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-8">
              Discover your dream home with our comprehensive search tools.
              Filter through hundreds of properties in Henderson's most
              desirable neighborhoods with precision and ease.
            </p>
            <div className="text-sm text-blue-100">
              Search • Filter • Compare • Find Your Perfect Home
            </div>
          </div>
        </section>

        {/* Search Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Why Use Our Advanced Search?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Precise Filtering
                </h3>
                <p className="text-gray-600">
                  Search by price range, bedrooms, bathrooms, square footage,
                  lot size, and property type
                </p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Real-Time Updates
                </h3>
                <p className="text-gray-600">
                  Access the latest MLS listings with real-time price changes
                  and availability
                </p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Neighborhood Insights
                </h3>
                <p className="text-gray-600">
                  Explore Henderson communities with school ratings, amenities,
                  and local market data
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Search Widget */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
              Search Henderson Properties
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
              <RealScoutWidget
                sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
                listingStatus="For Sale"
                propertyTypes="SFR,MF,CONDO"
                priceMin={300000}
                priceMax={1000000}
                className="w-full"
                title="Advanced Property Search"
                description="Use our comprehensive search tools to find your perfect Henderson home"
              />
            </div>
          </div>
        </section>

        {/* Search Tips Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Expert Search Tips for Henderson
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Start Broad, Then Narrow
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Begin with your preferred neighborhoods</li>
                  <li>• Set a realistic price range first</li>
                  <li>• Add specific features gradually</li>
                  <li>• Save searches for future reference</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Consider Market Timing
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Spring and fall typically have more inventory</li>
                  <li>• New listings appear on Thursdays</li>
                  <li>• Price reductions often happen on Mondays</li>
                  <li>• Set up alerts for new properties</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood Guide */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Popular Henderson Neighborhoods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Green Valley
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Luxury master-planned community with championship golf and
                  upscale shopping
                </p>
                <p className="text-sm font-semibold text-green-600">
                  $750K - $1.2M
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Anthem
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Hillside community with stunning views and resort-style
                  amenities
                </p>
                <p className="text-sm font-semibold text-blue-600">
                  $650K - $950K
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Stephanie Ranch
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Family-friendly with excellent schools and recreational
                  facilities
                </p>
                <p className="text-sm font-semibold text-purple-600">
                  $450K - $650K
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Whitney Ranch
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Established community with mature landscaping and
                  affordability
                </p>
                <p className="text-sm font-semibold text-orange-600">
                  $400K - $600K
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Finding Your Perfect Home?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our Henderson real estate experts are here to help you navigate
              the market and find the home that's right for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Expert Help
              </a>
              <a
                href="/home-value"
                className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Home Value
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
