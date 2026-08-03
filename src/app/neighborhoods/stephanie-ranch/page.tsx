import HyperLocalSeoSection from '@/components/neighborhoods/HyperLocalSeoSection'
import NearbyNeighborhoods from '@/components/neighborhoods/NearbyNeighborhoods'
import NeighborhoodBreadcrumbSchema from '@/components/neighborhoods/NeighborhoodBreadcrumbSchema'
import RealScoutListings from '@/components/neighborhoods/RealScoutListings'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Stephanie Ranch Henderson Homes for Sale | Live MLS Listings & Buyer Guide',
  description:
    'View current Stephanie Ranch Henderson homes for sale with live MLS data. Complete buyer guide: HOA fees ($80-120/month), schools, shopping distances, and neighborhood insights.',
  keywords:
    'Stephanie Ranch Henderson homes for sale, Stephanie Ranch MLS listings, Henderson real estate, Stephanie Ranch family homes',
  alternates: {
    canonical: '/neighborhoods/stephanie-ranch',
  },
  openGraph: {
    title: 'Stephanie Ranch Henderson Homes for Sale | Live MLS Listings',
    description:
      'Find Stephanie Ranch Henderson homes for sale with local buyer guidance, neighborhood comparisons, and market insights.',
    url: 'https://searchforhomesinhenderson.com/neighborhoods/stephanie-ranch',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stephanie Ranch Henderson Homes for Sale',
    description:
      'Live Stephanie Ranch listings, local market context, and neighborhood-level buyer tips.',
  },
}

export default function StephanieRanchPage() {
  return (
    <>
      <NeighborhoodBreadcrumbSchema
        neighborhoodName="Stephanie Ranch"
        neighborhoodPath="/neighborhoods/stephanie-ranch"
      />
      <main>
        <Breadcrumbs />

        {/* Hero with Hyper-Local Data */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Stephanie Ranch Henderson Homes for Sale
              </h1>
              <p className="text-xl mb-8">
                Live MLS listings • Parks and recreation • Stephanie Elementary
                • Clark County School District
              </p>

              <div className="grid md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">$450K-$650K</div>
                  <div className="text-sm">Current Prices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">25 days</div>
                  <div className="text-sm">Avg. Days on Market</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">$80-120</div>
                  <div className="text-sm">Monthly HOA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">0.3 mi</div>
                  <div className="text-sm">To Stephanie Elementary</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE MLS LISTINGS - REALSCOUT INTEGRATION */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RealScoutListings neighborhood="Stephanie Ranch" />
            </div>
          </div>
        </section>

        {/* Quick Market Stats */}
        <section className="py-12 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8 text-orange-800">
                Stephanie Ranch Market Snapshot (Last 30 Days)
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">15</div>
                  <div className="text-sm text-gray-600">Homes Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">
                    $520K
                  </div>
                  <div className="text-sm text-gray-600">Median Sale Price</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">25</div>
                  <div className="text-sm text-gray-600">
                    Avg. Days on Market
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">78%</div>
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
                Stephanie Ranch Monthly Living Costs (Beyond Mortgage)
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-orange-800">
                    🏡 HOA Fees by Sub-Community
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Stephanie Ranch North:</span>
                      <span className="font-semibold bg-orange-100 px-2 py-1 rounded">
                        $100-120/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Stephanie Ranch South:</span>
                      <span className="font-semibold bg-orange-100 px-2 py-1 rounded">
                        $90-110/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Stephanie Ranch East:</span>
                      <span className="font-semibold bg-orange-100 px-2 py-1 rounded">
                        $80-100/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Stephanie Ranch West:</span>
                      <span className="font-semibold bg-orange-100 px-2 py-1 rounded">
                        $85-105/month
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-orange-100 rounded">
                    <p className="text-sm text-orange-800">
                      <strong>HOA includes:</strong> Landscaping, community
                      pools, playgrounds, maintenance of common areas, and
                      neighborhood events
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
                        $140-220
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>NV Energy (winter avg):</span>
                      <span className="font-semibold bg-blue-100 px-2 py-1 rounded">
                        $60-100
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Southwest Gas:</span>
                      <span className="font-semibold bg-blue-100 px-2 py-1 rounded">
                        $20-40
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Water/Sewer (Henderson):</span>
                      <span className="font-semibold bg-blue-100 px-2 py-1 rounded">
                        $40-60
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Waste Management:</span>
                      <span className="font-semibold bg-blue-100 px-2 py-1 rounded">
                        $20-30
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 rounded">
                    <p className="text-sm text-blue-800">
                      <strong>Energy saving tip:</strong> Stephanie Ranch homes
                      are newer construction with modern insulation and
                      energy-efficient features, keeping utility costs lower
                      than older communities.
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
                Stephanie Ranch School Information for Home Buyers
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
                      <strong>Attendance Zone:</strong> Most Stephanie Ranch
                      homes attend Liberty High. Always verify school boundaries
                      before purchasing.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-orange-600">
                    🏫 Elementary Schools
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold">Stephanie Elementary</p>
                      <p>Rating: 9/10 • Enrollment: 680</p>
                      <p className="text-xs text-gray-600">
                        Strong community support
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
                        Special education support available
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 rounded">
                    <p className="text-xs text-orange-800">
                      <strong>Pro tip:</strong> Stephanie Elementary often has
                      waiting lists. Contact the school directly about
                      enrollment.
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
                      <p>15 minutes • Tuition: ~$12K/year</p>
                      <p className="text-xs text-gray-600">
                        Strong college prep program
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">The Meadows School</p>
                      <p>20 minutes • Tuition: ~$25K/year</p>
                      <p className="text-xs text-gray-600">
                        Elite prep school, grades K-12
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Henderson International</p>
                      <p>18 minutes • Tuition: ~$8K/year</p>
                      <p className="text-xs text-gray-600">
                        International Baccalaureate program
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="text-xs text-green-800">
                      <strong>Carpool networks:</strong> Active parent groups
                      coordinate carpools to most private schools from Stephanie
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
                Stephanie Ranch Shopping & Dining: Exact Walking & Driving Times
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-orange-600">
                    🛍️ Local Shopping Centers
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">
                        Distance from Stephanie Ranch Neighborhoods:
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Stephanie Ranch North:</span>
                          <span className="font-medium">
                            0.5-0.8 mi (10-min walk)
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Stephanie Ranch South:</span>
                          <span className="font-medium">
                            0.8-1.2 mi (15-min walk)
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Stephanie Ranch East:</span>
                          <span className="font-medium">
                            1.0-1.5 mi (20-min walk)
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Stephanie Ranch West:</span>
                          <span className="font-medium">
                            0.6-1.0 mi (12-min walk)
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
                          <span>Smith's (Stephanie & Horizon Ridge)</span>
                          <span className="font-medium">0.8 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Target (Henderson)</span>
                          <span className="font-medium">1.2 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Costco (Henderson)</span>
                          <span className="font-medium">2.8 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Home Depot</span>
                          <span className="font-medium">1.5 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Walgreens (Stephanie)</span>
                          <span className="font-medium">0.9 mi</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">Healthcare:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Henderson Hospital:</span>
                          <span className="font-medium">3.2 mi (8 min)</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Stephanie Medical Group:</span>
                          <span className="font-medium">1.8 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Urgent Care (Horizon Ridge):</span>
                          <span className="font-medium">2.5 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>CVS Pharmacy:</span>
                          <span className="font-medium">1.2 mi</span>
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
          currentSlug="stephanie-ranch"
          currentName="Stephanie Ranch"
        />

        <HyperLocalSeoSection
          neighborhoodName="Stephanie Ranch"
          faq={[
            {
              question: 'What amenities does Stephanie Ranch offer?',
              answer:
                'Stephanie Ranch offers neighborhood parks, residential streets, and convenient access to Clark County schools and daily services.',
            },
            {
              question: 'What budget is typical for homes in Stephanie Ranch?',
              answer:
                'Many active listings and recent sales cluster from the mid-$400Ks through the mid-$600Ks, depending on upgrades, lot size, and floor plan.',
            },
            {
              question: 'How quickly do homes go pending in Stephanie Ranch?',
              answer:
                'Move-in ready homes can attract strong attention, so reviewing recent comps and setting a clear offer strategy is important.',
            },
            {
              question:
                'Can I compare Stephanie Ranch against nearby neighborhoods?',
              answer:
                'Yes. We can build a side-by-side comparison for Stephanie Ranch, Green Valley, and Whitney Ranch based on pricing, HOA ranges, and lifestyle fit.',
            },
          ]}
        />

        {/* Contact CTA with Local Focus */}
        <section className="py-16 bg-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Buy in Stephanie Ranch Henderson?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our Stephanie Ranch specialists know every sub-community, HOA
              detail, and market trend. Get expert guidance from agents who live
              and work in Henderson.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-orange-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Schedule Stephanie Ranch Home Tour
              </Link>
              <Link
                href="/featured-agents"
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Meet Our Stephanie Ranch Experts
              </Link>
            </div>
            <p className="text-sm mt-6 opacity-90">
              Licensed Henderson realtors • 15+ years Stephanie Ranch experience
              • Local residents
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
