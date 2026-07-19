import type { Metadata } from 'next'
import StructuredData, { webPageData } from '@/components/StructuredData'
import HyperLocalSeoSection from '@/components/neighborhoods/HyperLocalSeoSection'

export const metadata: Metadata = {
  title:
    'Henderson Nevada Neighborhoods Guide - Best Communities & Areas | Dr. Jan Duffy REALTOR',
  description:
    'Explore Henderson NV neighborhoods including Green Valley, Anthem, Stephanie Ranch, and Whitney Ranch with Dr. Jan Duffy. Find the perfect community with schools, amenities, and home prices. Call (702) 500-1064.',
  keywords: [
    'Henderson neighborhoods',
    'Green Valley Henderson',
    'Anthem community',
    'Henderson communities',
    'best neighborhoods Henderson Nevada',
    'Henderson REALTOR',
    'Dr. Jan Duffy',
    'Green Valley homes',
    'Anthem homes',
    'Stephanie Ranch homes',
    'Whitney Ranch homes',
    'Henderson school districts',
  ],
  authors: [{ name: 'Dr. Jan Duffy - Henderson REALTOR' }],
  creator: 'Dr. Jan Duffy - Henderson Homes',
  publisher: 'Dr. Jan Duffy Real Estate',
  category: 'Real Estate',
  classification: 'Henderson Neighborhoods Guide',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  openGraph: {
    title:
      'Henderson Nevada Neighborhoods Guide - Best Communities & Areas | Dr. Jan Duffy REALTOR',
    description:
      "Discover the best neighborhoods and communities in Henderson, Nevada with Dr. Jan Duffy's expert guidance",
    url: 'https://searchforhomesinhenderson.com/neighborhoods',
    siteName: 'Henderson Homes - Dr. Jan Duffy',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Henderson Neighborhoods Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henderson Nevada Neighborhoods Guide | Dr. Jan Duffy REALTOR',
    description:
      'Discover the best neighborhoods and communities in Henderson, Nevada',
    images: [
      'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
    ],
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com/neighborhoods',
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Henderson',
    'geo.position': '36.0397;-115.0498',
    ICBM: '36.0397, -115.0498',
    'DC.title': 'Henderson Nevada Neighborhoods Guide',
    'DC.creator': 'Dr. Jan Duffy',
    'DC.subject': 'Henderson Neighborhoods, Nevada Communities',
    'DC.description':
      'Comprehensive guide to Henderson, Nevada neighborhoods and communities',
    'DC.publisher': 'Dr. Jan Duffy Real Estate',
    'DC.contributor': 'Dr. Jan Duffy',
    'DC.date': '2024',
    'DC.type': 'Guide',
    'DC.format': 'text/html',
    'DC.identifier': 'https://searchforhomesinhenderson.com/neighborhoods',
    'DC.language': 'en',
    'DC.coverage': 'Henderson, Nevada, United States',
    'DC.rights': 'Copyright 2024 Dr. Jan Duffy Real Estate',
  },
}

export default function NeighborhoodsPage() {
  return (
    <>
      <StructuredData
        type="WebPage"
        data={webPageData({
          name: 'Henderson Nevada Neighborhoods Guide',
          description:
            'Explore Henderson neighborhoods including Green Valley, Anthem, Stephanie Ranch, and Whitney Ranch with expert guidance',
          url: 'https://searchforhomesinhenderson.com/neighborhoods',
          mainEntity: {
            '@type': 'ItemList',
            name: 'Henderson Neighborhoods',
            description:
              'Guide to Henderson, Nevada neighborhoods and communities',
            itemListElement: [
              {
                '@type': 'Place',
                name: 'Green Valley',
                description:
                  'Luxury master-planned community with championship golf',
              },
              {
                '@type': 'Place',
                name: 'Anthem',
                description:
                  'Hillside community with stunning views and amenities',
              },
              {
                '@type': 'Place',
                name: 'Stephanie Ranch',
                description: 'Family-friendly with excellent schools',
              },
              {
                '@type': 'Place',
                name: 'Whitney Ranch',
                description: 'Established community with mature landscaping',
              },
            ],
          },
        })}
      />
      <main className="min-h-screen">
        {/* Hero Section with H1 */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Henderson Neighborhoods Guide
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-8">
              Discover Henderson's premier residential communities and find the
              perfect neighborhood for your lifestyle. From luxury
              master-planned communities to family-friendly areas with excellent
              schools.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              🏘️ 15+ Communities • Top Schools • Family-Friendly • Luxury Living
            </div>
          </div>
        </section>

        {/* Featured Neighborhoods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Premier Henderson Neighborhoods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Green Valley */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    <a
                      href="/neighborhoods/green-valley"
                      className="hover:underline"
                    >
                      Green Valley
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Henderson's premier master-planned community featuring
                    championship golf courses, upscale shopping at The District,
                    and luxury homes with resort-style amenities.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Home Prices:</span>
                      <span className="font-semibold text-green-600">
                        $750K - $1.2M
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Schools:</span>
                      <span className="font-semibold">A+ Rated</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amenities:</span>
                      <span className="font-semibold">
                        Golf, Shopping, Parks
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a
                      href="/neighborhoods/green-valley"
                      className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      View Green Valley Homes & Market Analysis →
                    </a>
                    <a
                      href="/home-value"
                      className="block text-sm text-green-600 hover:underline font-medium"
                    >
                      Get Green Valley Home Value Estimate
                    </a>
                  </div>
                </div>
              </div>

              {/* Anthem */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Anthem
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Hillside community offering stunning mountain views,
                    resort-style amenities, and a tight-knit neighborhood feel
                    with excellent schools and recreational facilities.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Home Prices:</span>
                      <span className="font-semibold text-blue-600">
                        $650K - $950K
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Schools:</span>
                      <span className="font-semibold">A+ Rated</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amenities:</span>
                      <span className="font-semibold">
                        Views, Parks, Trails
                      </span>
                    </div>
                  </div>
                  <a
                    href="/search"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Anthem Homes
                  </a>
                </div>
              </div>

              {/* Stephanie Ranch */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Stephanie Ranch
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Family-friendly community known for excellent schools, safe
                    neighborhoods, and recreational facilities. Perfect for
                    growing families seeking quality education and community.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Home Prices:</span>
                      <span className="font-semibold text-purple-600">
                        $450K - $650K
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Schools:</span>
                      <span className="font-semibold">A+ Rated</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amenities:</span>
                      <span className="font-semibold">
                        Schools, Parks, Rec Center
                      </span>
                    </div>
                  </div>
                  <a
                    href="/search"
                    className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    View Stephanie Ranch Homes
                  </a>
                </div>
              </div>

              {/* Whitney Ranch */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Whitney Ranch
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Established community with mature landscaping,
                    affordability, and convenient access to shopping and dining.
                    Great value for first-time homebuyers and families.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Home Prices:</span>
                      <span className="font-semibold text-orange-600">
                        $400K - $600K
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Schools:</span>
                      <span className="font-semibold">A Rated</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amenities:</span>
                      <span className="font-semibold">
                        Shopping, Dining, Parks
                      </span>
                    </div>
                  </div>
                  <a
                    href="/search"
                    className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    View Whitney Ranch Homes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Neighborhood Comparison Guide
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left">Neighborhood</th>
                    <th className="p-4 text-center">Price Range</th>
                    <th className="p-4 text-center">School Rating</th>
                    <th className="p-4 text-center">Family Score</th>
                    <th className="p-4 text-center">Luxury Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Green Valley</td>
                    <td className="p-4 text-center">$750K - $1.2M</td>
                    <td className="p-4 text-center">A+</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Anthem</td>
                    <td className="p-4 text-center">$650K - $950K</td>
                    <td className="p-4 text-center">A+</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Stephanie Ranch</td>
                    <td className="p-4 text-center">$450K - $650K</td>
                    <td className="p-4 text-center">A+</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Whitney Ranch</td>
                    <td className="p-4 text-center">$400K - $600K</td>
                    <td className="p-4 text-center">A</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Choose Henderson */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Why Choose Henderson, Nevada?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Award-Winning City
                </h3>
                <p className="text-gray-600">
                  Consistently ranked among America's safest and most livable
                  cities with excellent municipal services and infrastructure.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Top-Rated Schools
                </h3>
                <p className="text-gray-600">
                  Access to Clark County's highest-performing schools with
                  excellent student-teacher ratios and academic programs.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Quality of Life
                </h3>
                <p className="text-gray-600">
                  Beautiful communities with golf courses, parks, and
                  resort-style amenities throughout the city.
                </p>
              </div>
            </div>
          </div>
        </section>

        <HyperLocalSeoSection
          neighborhoodName="Henderson Neighborhoods"
          faq={[
            {
              question: 'Which Henderson neighborhoods are most in demand?',
              answer:
                'Buyer demand is strongest in established, amenity-rich areas including Green Valley, Anthem, Stephanie Ranch, and Whitney Ranch, with demand varying by budget segment.',
            },
            {
              question: 'How should I compare neighborhoods before buying?',
              answer:
                'Compare each area by commute, school zones, HOA structure, lot sizes, and recent sold prices, then tour top choices in the same week for cleaner decision-making.',
            },
            {
              question:
                'Can I get hyper-local market data before making an offer?',
              answer:
                'Yes. We provide neighborhood-level sold comps, active inventory trends, and days-on-market context so offers are grounded in current conditions.',
            },
            {
              question:
                'What is the fastest way to start a neighborhood search?',
              answer:
                'Begin with a targeted consultation and live listing setup so you receive alerts for matching homes in your preferred Henderson neighborhoods.',
            },
          ]}
        />

        {/* CTA Section */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Perfect Henderson Neighborhood?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our local experts can help you explore these communities and find
              the perfect home that matches your lifestyle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/search"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Search All Neighborhoods
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Expert Guidance
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
