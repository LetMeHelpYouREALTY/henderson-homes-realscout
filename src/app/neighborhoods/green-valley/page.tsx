import Breadcrumbs from '@/components/ui/Breadcrumbs'
import type { Metadata } from 'next'
import Link from 'next/link'
import NearbyNeighborhoods from '@/components/neighborhoods/NearbyNeighborhoods'
import NeighborhoodBreadcrumbSchema from '@/components/neighborhoods/NeighborhoodBreadcrumbSchema'
import HyperLocalSeoSection from '@/components/neighborhoods/HyperLocalSeoSection'
import RealScoutListings from '@/components/neighborhoods/RealScoutListings'

export const metadata: Metadata = {
  title:
    'Green Valley Henderson Homes for Sale | Live MLS Listings & Buyer Guide',
  description:
    'View current Green Valley Henderson homes for sale with live MLS data. Complete buyer guide: HOA fees ($120-180/month), schools, shopping distances, and neighborhood insights.',
  keywords:
    'Green Valley Henderson homes for sale, Green Valley MLS listings, Henderson real estate, Green Valley Ranch homes',
  alternates: {
    canonical: '/neighborhoods/green-valley',
  },
  openGraph: {
    title: 'Green Valley Henderson Homes for Sale | Live MLS Listings',
    description:
      'Explore live Green Valley Henderson homes for sale, local market trends, HOA details, school insights, and buyer guidance.',
    url: 'https://searchforhomesinhenderson.com/neighborhoods/green-valley',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Valley Henderson Homes for Sale',
    description:
      'Live Green Valley listings, neighborhood insights, and local buyer guidance in Henderson, Nevada.',
  },
}

export default function GreenValleyPage() {
  return (
    <>
      <NeighborhoodBreadcrumbSchema
        neighborhoodName="Green Valley"
        neighborhoodPath="/neighborhoods/green-valley"
      />
      <main>
        <Breadcrumbs />

        {/* Hero with Hyper-Local Data */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Green Valley Henderson Homes for Sale
              </h1>
              <p className="text-xl mb-8">
                Live MLS listings • Master-planned luxury community • The
                District shopping • Green Valley High School (8/10 rating)
              </p>

              <div className="grid md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">$750K-$1.2M</div>
                  <div className="text-sm">Current Prices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">18 days</div>
                  <div className="text-sm">Avg. Days on Market</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">$120-180</div>
                  <div className="text-sm">Monthly HOA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">0.3 mi</div>
                  <div className="text-sm">To The District</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE MLS LISTINGS - REALSCOUT INTEGRATION */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RealScoutListings neighborhood="Green Valley" />
            </div>
          </div>
        </section>

        {/* Quick Market Stats */}
        <section className="py-12 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8 text-green-800">
                Green Valley Market Snapshot (Last 30 Days)
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">23</div>
                  <div className="text-sm text-gray-600">Homes Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">$850K</div>
                  <div className="text-sm text-gray-600">Median Sale Price</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">18</div>
                  <div className="text-sm text-gray-600">
                    Avg. Days on Market
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">87%</div>
                  <div className="text-sm text-gray-600">Sold Above List</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hyper-Local Living Costs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Green Valley Monthly Living Costs (Beyond Mortgage)
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-green-800">
                    🏡 HOA Fees by Sub-Community
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Green Valley Ranch (Resort area):</span>
                      <span className="font-semibold bg-green-100 px-2 py-1 rounded">
                        $180-220/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Legacy Golf Club homes:</span>
                      <span className="font-semibold bg-green-100 px-2 py-1 rounded">
                        $150-180/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>The Fountains (gated):</span>
                      <span className="font-semibold bg-green-100 px-2 py-1 rounded">
                        $160-200/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Green Valley North:</span>
                      <span className="font-semibold bg-green-100 px-2 py-1 rounded">
                        $120-150/month
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 rounded">
                    <p className="text-sm text-green-800">
                      <strong>HOA includes:</strong> Landscaping, community
                      pools, fitness centers, security patrols, maintenance of
                      common areas, and resort amenities (where applicable)
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">
                    💡 Monthly Utilities & Services
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>NV Energy (summer avg):</span>
                      <span className="font-semibold bg-blue-100 px-2 py-1 rounded">
                        $180-280
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>NV Energy (winter avg):</span>
                      <span className="font-semibold bg-blue-100 px-2 py-1 rounded">
                        $80-120
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Southwest Gas:</span>
                      <span className="font-semibold bg-blue-100 px-2 py-1 rounded">
                        $25-45
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Water/Sewer (Henderson):</span>
                      <span className="font-semibold bg-blue-100 px-2 py-1 rounded">
                        $45-65
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Waste Management:</span>
                      <span className="font-semibold bg-blue-100 px-2 py-1 rounded">
                        $25-35
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 rounded">
                    <p className="text-sm text-blue-800">
                      <strong>Energy saving tip:</strong> Homes with solar
                      panels average $40-60/month lower electric bills. Many
                      Green Valley homes have solar already installed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* School Zones - Hyper-Specific */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Green Valley School Information for Home Buyers
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">
                    🎓 Green Valley High School
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>GreatSchools Rating:</strong> 8/10
                    </p>
                    <p>
                      <strong>Enrollment:</strong> ~2,800 students
                    </p>
                    <p>
                      <strong>SAT Average:</strong> 1,180 (above NV average of
                      1,100)
                    </p>
                    <p>
                      <strong>Graduation Rate:</strong> 94%
                    </p>
                    <p>
                      <strong>AP Classes:</strong> 25+ Advanced Placement
                      courses
                    </p>
                    <p>
                      <strong>Notable Programs:</strong> IB Program, Robotics,
                      Theater Arts
                    </p>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <p className="text-xs text-blue-800">
                      <strong>Attendance Zone:</strong> Most Green Valley homes
                      south of Sunset Rd. Always verify school boundaries before
                      purchasing as they can change.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">
                    🏫 Elementary Schools
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold">Estes McDoniel Elementary</p>
                      <p>Rating: 9/10 • Enrollment: 680</p>
                      <p className="text-xs text-gray-600">
                        Often has waitlists for mid-year transfers
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Harriet Treem Elementary</p>
                      <p>Rating: 8/10 • Enrollment: 720</p>
                      <p className="text-xs text-gray-600">
                        Strong STEM and arts programs
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Jim Thorpe Elementary</p>
                      <p>Rating: 8/10 • Enrollment: 650</p>
                      <p className="text-xs text-gray-600">
                        Excellent special education support
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="text-xs text-green-800">
                      <strong>Pro tip:</strong> Contact schools directly about
                      enrollment if buying mid-school year. Some schools have
                      waiting lists.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">
                    🎒 Private School Access
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold">
                        Faith Lutheran Middle/High
                      </p>
                      <p>8 minutes • Tuition: ~$12K/year</p>
                      <p className="text-xs text-gray-600">
                        Strong college prep program
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">The Meadows School</p>
                      <p>15 minutes • Tuition: ~$25K/year</p>
                      <p className="text-xs text-gray-600">
                        Elite prep school, grades K-12
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Henderson International</p>
                      <p>12 minutes • Tuition: ~$8K/year</p>
                      <p className="text-xs text-gray-600">
                        International Baccalaureate program
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-purple-50 rounded">
                    <p className="text-xs text-purple-800">
                      <strong>Carpool networks:</strong> Active parent groups
                      coordinate carpools to most private schools from Green
                      Valley.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shopping & Dining with Exact Distances */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Green Valley Shopping & Dining: Exact Walking & Driving Times
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-green-600">
                    🛍️ The District at Green Valley Ranch
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">
                        Distance from Green Valley Neighborhoods:
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Green Valley Ranch homes:</span>
                          <span className="font-medium">
                            0.2-0.5 mi (5-min walk)
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Legacy Golf Club area:</span>
                          <span className="font-medium">
                            0.8 mi (3-min drive)
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Green Valley North:</span>
                          <span className="font-medium">
                            1.2 mi (5-min drive)
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>The Fountains:</span>
                          <span className="font-medium">
                            0.6 mi (2-min drive)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">
                        Popular Stores & Restaurants:
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="space-y-1">
                          <p>• Whole Foods Market</p>
                          <p>• REI Co-op</p>
                          <p>• Williams Sonoma</p>
                          <p>• Victoria's Secret</p>
                          <p>• Anthropologie</p>
                        </div>
                        <div className="space-y-1">
                          <p>• Yard House (sports bar)</p>
                          <p>• Brio Italian Grille</p>
                          <p>• Claim Jumper</p>
                          <p>• Blue Moon Asian Cuisine</p>
                          <p>• Lucille's BBQ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                    🛒 Daily Necessities
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">
                        Grocery & Essentials:
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Whole Foods (The District)</span>
                          <span className="font-medium">0.3-1.2 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Smith's (Sunset & Green Valley)</span>
                          <span className="font-medium">1.5 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Target (Henderson)</span>
                          <span className="font-medium">2.1 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Costco (Henderson)</span>
                          <span className="font-medium">3.2 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Home Depot</span>
                          <span className="font-medium">2.8 mi</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">Healthcare:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Henderson Hospital:</span>
                          <span className="font-medium">2.8 mi (8 min)</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Green Valley Medical Group:</span>
                          <span className="font-medium">1.1 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Urgent Care (Sunset):</span>
                          <span className="font-medium">1.8 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>CVS Pharmacy:</span>
                          <span className="font-medium">0.9 mi</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NearbyNeighborhoods
          currentSlug="green-valley"
          currentName="Green Valley"
        />

        <HyperLocalSeoSection
          neighborhoodName="Green Valley"
          faq={[
            {
              question: 'What is the typical home price range in Green Valley?',
              answer:
                'Most Green Valley resale homes fall between the high $700Ks and low $1.2M range, with pricing varying by sub-community, lot size, and property updates.',
            },
            {
              question: 'How competitive is Green Valley for buyers?',
              answer:
                'Well-presented homes in desirable pockets often move quickly. Buyers should monitor new listings daily and be pre-approved before touring.',
            },
            {
              question: 'Are HOA communities common in Green Valley?',
              answer:
                'Yes, many Green Valley neighborhoods include HOA governance with monthly dues that generally support landscaping, common areas, and neighborhood amenities.',
            },
            {
              question: 'Can I schedule a Green Valley area tour?',
              answer:
                'Yes. We can set up a neighborhood tour with active listings, recent comps, and school-zone context so you can compare options efficiently.',
            },
          ]}
        />

        {/* Contact CTA with Local Focus */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Buy in Green Valley Henderson?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our Green Valley specialists know every sub-community, HOA detail,
              and market trend. Get expert guidance from agents who live and
              work in Henderson.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Schedule Green Valley Home Tour
              </Link>
              <Link
                href="/featured-agents"
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Meet Our Green Valley Experts
              </Link>
            </div>
            <p className="text-sm mt-6 opacity-90">
              Licensed Henderson realtors • 15+ years Green Valley experience •
              Local residents
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
