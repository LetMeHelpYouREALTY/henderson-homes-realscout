import Breadcrumbs from '@/components/ui/Breadcrumbs'
import type { Metadata } from 'next'
import Link from 'next/link'
import NearbyNeighborhoods from '@/components/neighborhoods/NearbyNeighborhoods'
import NeighborhoodBreadcrumbSchema from '@/components/neighborhoods/NeighborhoodBreadcrumbSchema'
import HyperLocalSeoSection from '@/components/neighborhoods/HyperLocalSeoSection'
import RealScoutListings from '@/components/neighborhoods/RealScoutListings'

export const metadata: Metadata = {
  title:
    'Whitney Ranch Henderson Homes for Sale | Live MLS Listings & Buyer Guide',
  description:
    'View current Whitney Ranch Henderson homes for sale with live MLS data. Complete buyer guide: HOA fees ($60-100/month), schools, shopping distances, and neighborhood insights.',
  keywords:
    'Whitney Ranch Henderson homes for sale, Whitney Ranch MLS listings, Henderson real estate, Whitney Ranch family homes',
  alternates: {
    canonical: '/neighborhoods/whitney-ranch',
  },
  openGraph: {
    title: 'Whitney Ranch Henderson Homes for Sale | Live MLS Listings',
    description:
      'Explore Whitney Ranch Henderson homes for sale with market stats, neighborhood comparisons, and buyer-focused local insights.',
    url: 'https://searchforhomesinhenderson.com/neighborhoods/whitney-ranch',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whitney Ranch Henderson Homes for Sale',
    description:
      'Live Whitney Ranch listings with local market guidance for Henderson home buyers.',
  },
}

export default function WhitneyRanchPage() {
  return (
    <>
      <NeighborhoodBreadcrumbSchema
        neighborhoodName="Whitney Ranch"
        neighborhoodPath="/neighborhoods/whitney-ranch"
      />
      <main>
        <Breadcrumbs />

        {/* Hero with Hyper-Local Data */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Whitney Ranch Henderson Homes for Sale
              </h1>
              <p className="text-xl mb-8">
                Live MLS listings • Family-friendly community • Mature
                landscaping • Parks and recreation • Whitney Elementary (8/10
                rating)
              </p>

              <div className="grid md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">$400K-$600K</div>
                  <div className="text-sm">Current Prices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">28 days</div>
                  <div className="text-sm">Avg. Days on Market</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">$60-100</div>
                  <div className="text-sm">Monthly HOA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">0.4 mi</div>
                  <div className="text-sm">To Whitney Elementary</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE MLS LISTINGS - REALSCOUT INTEGRATION */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RealScoutListings neighborhood="Whitney Ranch" />
            </div>
          </div>
        </section>

        {/* Quick Market Stats */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8 text-blue-800">
                Whitney Ranch Market Snapshot (Last 30 Days)
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">Homes Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$480K</div>
                  <div className="text-sm text-gray-600">Median Sale Price</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">28</div>
                  <div className="text-sm text-gray-600">
                    Avg. Days on Market
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">75%</div>
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
                Whitney Ranch Monthly Living Costs (Beyond Mortgage)
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">
                    🏡 HOA Fees by Sub-Community
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Whitney Ranch North:</span>
                      <span className="font-semibold bg-blue-100 px-2 py-1 rounded">
                        $90-100/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Whitney Ranch South:</span>
                      <span className="font-semibold bg-blue-100 px-2 py-1 rounded">
                        $80-90/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Whitney Ranch East:</span>
                      <span className="font-semibold bg-blue-100 px-2 py-1 rounded">
                        $70-80/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Whitney Ranch West:</span>
                      <span className="font-semibold bg-blue-100 px-2 py-1 rounded">
                        $60-75/month
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 rounded">
                    <p className="text-sm text-blue-800">
                      <strong>HOA includes:</strong> Landscaping, community
                      pools, playgrounds, maintenance of common areas, and
                      neighborhood events
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-green-800">
                    💡 Monthly Utilities & Services
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>NV Energy (summer avg):</span>
                      <span className="font-semibold bg-green-100 px-2 py-1 rounded">
                        $130-200
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>NV Energy (winter avg):</span>
                      <span className="font-semibold bg-green-100 px-2 py-1 rounded">
                        $55-90
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Southwest Gas:</span>
                      <span className="font-semibold bg-green-100 px-2 py-1 rounded">
                        $20-35
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Water/Sewer (Henderson):</span>
                      <span className="font-semibold bg-green-100 px-2 py-1 rounded">
                        $35-55
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Waste Management:</span>
                      <span className="font-semibold bg-green-100 px-2 py-1 rounded">
                        $18-28
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 rounded">
                    <p className="text-sm text-green-800">
                      <strong>Energy saving tip:</strong> Whitney Ranch homes
                      benefit from mature landscaping and established trees,
                      providing natural shade and reducing summer cooling costs
                      by 10-15%.
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
                Whitney Ranch School Information for Home Buyers
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">
                    🎓 Liberty High School
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>GreatSchools Rating:</strong> 9/10
                    </p>
                    <p>
                      <strong>Enrollment:</strong> ~2,200 students
                    </p>
                    <p>
                      <strong>SAT Average:</strong> 1,220 (above NV average of
                      1,100)
                    </p>
                    <p>
                      <strong>Graduation Rate:</strong> 96%
                    </p>
                    <p>
                      <strong>AP Classes:</strong> 30+ Advanced Placement
                      courses
                    </p>
                    <p>
                      <strong>Notable Programs:</strong> IB Program, Engineering
                      Academy, Performing Arts
                    </p>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <p className="text-xs text-blue-800">
                      <strong>Attendance Zone:</strong> Most Whitney Ranch homes
                      attend Liberty High. Always verify school boundaries
                      before purchasing.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">
                    🏫 Elementary Schools
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold">Whitney Elementary</p>
                      <p>Rating: 8/10 • Enrollment: 650</p>
                      <p className="text-xs text-gray-600">
                        Good school with strong community support
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Burkholder Middle School</p>
                      <p>Rating: 8/10 • Enrollment: 1,200</p>
                      <p className="text-xs text-gray-600">
                        Strong STEM and arts programs
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Bob Miller Middle School</p>
                      <p>Rating: 8/10 • Enrollment: 1,100</p>
                      <p className="text-xs text-gray-600">
                        Excellent special education support
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <p className="text-xs text-blue-800">
                      <strong>Pro tip:</strong> Whitney Elementary is a good
                      school with available enrollment. Contact the school
                      directly about enrollment if buying mid-school year.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">
                    🎒 Private School Access
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold">
                        Faith Lutheran Middle/High
                      </p>
                      <p>18 minutes • Tuition: ~$12K/year</p>
                      <p className="text-xs text-gray-600">
                        Strong college prep program
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">The Meadows School</p>
                      <p>22 minutes • Tuition: ~$25K/year</p>
                      <p className="text-xs text-gray-600">
                        Elite prep school, grades K-12
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Henderson International</p>
                      <p>20 minutes • Tuition: ~$8K/year</p>
                      <p className="text-xs text-gray-600">
                        International Baccalaureate program
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="text-xs text-green-800">
                      <strong>Carpool networks:</strong> Active parent groups
                      coordinate carpools to most private schools from Whitney
                      Ranch.
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
                Whitney Ranch Shopping & Dining: Exact Walking & Driving Times
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                    🛍️ Local Shopping Centers
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">
                        Distance from Whitney Ranch Neighborhoods:
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Whitney Ranch North:</span>
                          <span className="font-medium">
                            0.6-0.9 mi (12-min walk)
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Whitney Ranch South:</span>
                          <span className="font-medium">
                            0.9-1.3 mi (18-min walk)
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Whitney Ranch East:</span>
                          <span className="font-medium">
                            1.1-1.6 mi (22-min walk)
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Whitney Ranch West:</span>
                          <span className="font-medium">
                            0.7-1.1 mi (14-min walk)
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
                          <p>• Smith's Food & Drug</p>
                          <p>• Target</p>
                          <p>• Home Depot</p>
                          <p>• Starbucks</p>
                          <p>• Local restaurants</p>
                        </div>
                        <div className="space-y-1">
                          <p>• Fast food options</p>
                          <p>• Coffee shops</p>
                          <p>• Family dining</p>
                          <p>• Pizza places</p>
                          <p>• Convenience stores</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-green-600">
                    🛒 Daily Necessities
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">
                        Grocery & Essentials:
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Smith's (Whitney & Horizon Ridge)</span>
                          <span className="font-medium">1.0 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Target (Henderson)</span>
                          <span className="font-medium">1.5 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Costco (Henderson)</span>
                          <span className="font-medium">3.0 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Home Depot</span>
                          <span className="font-medium">1.8 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Walgreens (Whitney)</span>
                          <span className="font-medium">1.1 mi</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">Healthcare:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Henderson Hospital:</span>
                          <span className="font-medium">3.5 mi (10 min)</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Whitney Medical Group:</span>
                          <span className="font-medium">2.0 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Urgent Care (Horizon Ridge):</span>
                          <span className="font-medium">2.8 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>CVS Pharmacy:</span>
                          <span className="font-medium">1.4 mi</span>
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
          currentSlug="whitney-ranch"
          currentName="Whitney Ranch"
        />

        <HyperLocalSeoSection
          neighborhoodName="Whitney Ranch"
          faq={[
            {
              question: 'What attracts buyers to Whitney Ranch?',
              answer:
                'Whitney Ranch is popular for attainable pricing, mature landscaping, practical floor plans, and access to major Henderson retail corridors.',
            },
            {
              question: 'What is the expected price range in Whitney Ranch?',
              answer:
                'Most Whitney Ranch homes trade in a broad range around the low-$400Ks to low-$600Ks depending on condition, updates, and location within the community.',
            },
            {
              question: 'Are there HOA-managed sections in Whitney Ranch?',
              answer:
                'Yes, several sections include HOA coverage for common area upkeep and neighborhood standards, with dues varying by section.',
            },
            {
              question:
                'What should first-time buyers know before touring Whitney Ranch?',
              answer:
                'Review HOA details, recent comparable sales, and any major system upgrades in each home to make better apples-to-apples comparisons.',
            },
          ]}
        />

        {/* Contact CTA with Local Focus */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Buy in Whitney Ranch Henderson?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our Whitney Ranch specialists know every sub-community, HOA
              detail, and market trend. Get expert guidance from agents who live
              and work in Henderson.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Schedule Whitney Ranch Home Tour
              </Link>
              <Link
                href="/featured-agents"
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Meet Our Whitney Ranch Experts
              </Link>
            </div>
            <p className="text-sm mt-6 opacity-90">
              Licensed Henderson realtors • 15+ years Whitney Ranch experience •
              Local residents
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
