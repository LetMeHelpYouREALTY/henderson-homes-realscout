import HyperLocalSeoSection from '@/components/neighborhoods/HyperLocalSeoSection'
import NearbyNeighborhoods from '@/components/neighborhoods/NearbyNeighborhoods'
import NeighborhoodBreadcrumbSchema from '@/components/neighborhoods/NeighborhoodBreadcrumbSchema'
import RealScoutListings from '@/components/neighborhoods/RealScoutListings'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Seven Hills Henderson Homes for Sale | Live MLS Listings & Buyer Guide',
  description:
    'View current Seven Hills Henderson homes for sale with live MLS data. Complete buyer guide: HOA fees ($120-180/month), schools, shopping distances, and neighborhood insights.',
  keywords:
    'Seven Hills Henderson homes for sale, Seven Hills MLS listings, Henderson real estate, Seven Hills luxury homes',
  alternates: {
    canonical: '/neighborhoods/seven-hills',
  },
  openGraph: {
    title: 'Seven Hills Henderson Homes for Sale | Live MLS Listings',
    description:
      'Browse Seven Hills Henderson listings with local market data, school-zone context, and neighborhood-level buyer insights.',
    url: 'https://searchforhomesinhenderson.com/neighborhoods/seven-hills',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seven Hills Henderson Homes for Sale',
    description:
      'Live Seven Hills listings and hyper-local buyer guidance for Henderson, Nevada.',
  },
}

export default function SevenHillsPage() {
  return (
    <>
      <NeighborhoodBreadcrumbSchema
        neighborhoodName="Seven Hills"
        neighborhoodPath="/neighborhoods/seven-hills"
      />
      <main>
        <Breadcrumbs />

        {/* Hero with Hyper-Local Data */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Seven Hills Henderson Homes for Sale
              </h1>
              <p className="text-xl mb-8">
                Live MLS listings • Luxury community • Golf course views •
                Upscale amenities • Seven Hills Elementary (9/10 rating)
              </p>

              <div className="grid md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">$800K-$1.5M</div>
                  <div className="text-sm">Current Prices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">45 days</div>
                  <div className="text-sm">Avg. Days on Market</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">$120-180</div>
                  <div className="text-sm">Monthly HOA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">0.3 mi</div>
                  <div className="text-sm">To Seven Hills Elementary</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE MLS LISTINGS - REALSCOUT INTEGRATION */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RealScoutListings neighborhood="Seven Hills" />
            </div>
          </div>
        </section>

        {/* Quick Market Stats */}
        <section className="py-12 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8 text-purple-800">
                Seven Hills Market Snapshot (Last 30 Days)
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">8</div>
                  <div className="text-sm text-gray-600">Homes Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">
                    $1.1M
                  </div>
                  <div className="text-sm text-gray-600">Median Sale Price</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">45</div>
                  <div className="text-sm text-gray-600">
                    Avg. Days on Market
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">85%</div>
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
                Seven Hills Monthly Living Costs (Beyond Mortgage)
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-purple-800">
                    🏡 HOA Fees by Sub-Community
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Seven Hills North:</span>
                      <span className="font-semibold bg-purple-100 px-2 py-1 rounded">
                        $160-180/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Seven Hills South:</span>
                      <span className="font-semibold bg-purple-100 px-2 py-1 rounded">
                        $140-160/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Seven Hills East:</span>
                      <span className="font-semibold bg-purple-100 px-2 py-1 rounded">
                        $130-150/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Seven Hills West:</span>
                      <span className="font-semibold bg-purple-100 px-2 py-1 rounded">
                        $120-140/month
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-purple-100 rounded">
                    <p className="text-sm text-purple-800">
                      <strong>HOA includes:</strong> Golf course access,
                      clubhouse, pools, tennis courts, fitness center, security,
                      and landscaping
                    </p>
                  </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-indigo-800">
                    💡 Monthly Utilities & Services
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>NV Energy (summer avg):</span>
                      <span className="font-semibold bg-indigo-100 px-2 py-1 rounded">
                        $180-280
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>NV Energy (winter avg):</span>
                      <span className="font-semibold bg-indigo-100 px-2 py-1 rounded">
                        $80-140
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Southwest Gas:</span>
                      <span className="font-semibold bg-indigo-100 px-2 py-1 rounded">
                        $30-50
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Water/Sewer (Henderson):</span>
                      <span className="font-semibold bg-indigo-100 px-2 py-1 rounded">
                        $45-70
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Waste Management:</span>
                      <span className="font-semibold bg-indigo-100 px-2 py-1 rounded">
                        $25-35
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-indigo-100 rounded">
                    <p className="text-sm text-indigo-800">
                      <strong>Luxury feature:</strong> Seven Hills homes feature
                      premium energy-efficient systems and smart home
                      technology, reducing utility costs by 15-20% compared to
                      standard homes.
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
                Seven Hills School Information for Home Buyers
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">
                    🎓 Coronado High School
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>GreatSchools Rating:</strong> 9/10
                    </p>
                    <p>
                      <strong>Enrollment:</strong> ~2,500 students
                    </p>
                    <p>
                      <strong>SAT Average:</strong> 1,280 (above NV average of
                      1,100)
                    </p>
                    <p>
                      <strong>Graduation Rate:</strong> 97%
                    </p>
                    <p>
                      <strong>AP Classes:</strong> 35+ Advanced Placement
                      courses
                    </p>
                    <p>
                      <strong>Notable Programs:</strong> IB Program, Engineering
                      Academy, Performing Arts, Golf Team
                    </p>
                  </div>
                  <div className="mt-4 p-3 bg-purple-50 rounded">
                    <p className="text-xs text-purple-800">
                      <strong>Attendance Zone:</strong> Most Seven Hills homes
                      attend Coronado High. Always verify school boundaries
                      before purchasing.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">
                    🏫 Elementary Schools
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold">Seven Hills Elementary</p>
                      <p>Rating: 9/10 • Enrollment: 580</p>
                      <p className="text-xs text-gray-600">
                        Public school campus. Check current CCSD and Nevada state data for school ratings.
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
                  <div className="mt-4 p-3 bg-purple-50 rounded">
                    <p className="text-xs text-purple-800">
                      <strong>Pro tip:</strong> Seven Hills Elementary is a
                      school with limited enrollment. Contact the
                      school directly about enrollment if buying mid-school
                      year.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600">
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
                      <p>18 minutes • Tuition: ~$25K/year</p>
                      <p className="text-xs text-gray-600">
                        Elite prep school, grades K-12
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Henderson International</p>
                      <p>16 minutes • Tuition: ~$8K/year</p>
                      <p className="text-xs text-gray-600">
                        International Baccalaureate program
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-indigo-50 rounded">
                    <p className="text-xs text-indigo-800">
                      <strong>Carpool networks:</strong> Active parent groups
                      coordinate carpools to most private schools from Seven
                      Hills.
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
                Seven Hills Shopping & Dining: Exact Walking & Driving Times
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                    🛍️ Local Shopping Centers
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">
                        Distance from Seven Hills Neighborhoods:
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Seven Hills North:</span>
                          <span className="font-medium">
                            0.8-1.2 mi (16-min walk)
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Seven Hills South:</span>
                          <span className="font-medium">
                            1.2-1.6 mi (24-min walk)
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Seven Hills East:</span>
                          <span className="font-medium">
                            1.0-1.4 mi (20-min walk)
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Seven Hills West:</span>
                          <span className="font-medium">
                            0.9-1.3 mi (18-min walk)
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
                          <p>• Upscale restaurants</p>
                        </div>
                        <div className="space-y-1">
                          <p>• Fine dining options</p>
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
                  <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
                    🛒 Daily Necessities
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">
                        Grocery & Essentials:
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Smith's (Seven Hills & Horizon Ridge)</span>
                          <span className="font-medium">1.2 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Target (Henderson)</span>
                          <span className="font-medium">1.8 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Costco (Henderson)</span>
                          <span className="font-medium">3.5 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Home Depot</span>
                          <span className="font-medium">2.2 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Walgreens (Seven Hills)</span>
                          <span className="font-medium">1.4 mi</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">Healthcare:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Henderson Hospital:</span>
                          <span className="font-medium">4.0 mi (12 min)</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Seven Hills Medical Group:</span>
                          <span className="font-medium">2.5 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Urgent Care (Horizon Ridge):</span>
                          <span className="font-medium">3.2 mi</span>
                        </li>
                        <li className="flex justify-between">
                          <span>CVS Pharmacy:</span>
                          <span className="font-medium">1.6 mi</span>
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
          currentSlug="seven-hills"
          currentName="Seven Hills"
        />

        <HyperLocalSeoSection
          neighborhoodName="Seven Hills"
          faq={[
            {
              question: 'What types of homes are common in Seven Hills?',
              answer:
                'Seven Hills features luxury single-family homes, golf-adjacent properties, and gated options with elevated valley views and larger footprints.',
            },
            {
              question: 'Is Seven Hills a good fit for move-up buyers?',
              answer:
                'Yes. Many buyers target Seven Hills for upgraded finishes, strong curb appeal, and access to premium neighborhood amenities.',
            },
            {
              question: 'Do Seven Hills properties usually have HOA fees?',
              answer:
                'Most communities include HOA dues that vary by sub-area and may cover private neighborhood maintenance, landscaping, and common amenity upkeep.',
            },
            {
              question:
                'How do I compare Seven Hills with nearby neighborhoods?',
              answer:
                'A side-by-side tour and recent comparable sales review is the fastest way to evaluate value, lifestyle fit, and inventory differences.',
            },
          ]}
        />

        {/* Contact CTA with Local Focus */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Buy in Seven Hills Henderson?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our Seven Hills specialists know every sub-community, HOA detail,
              and market trend. Get expert guidance from agents who live and
              work in Henderson.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Schedule Seven Hills Home Tour
              </Link>
              <Link
                href="/featured-agents"
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Meet Our Seven Hills Experts
              </Link>
            </div>
            <p className="text-sm mt-6 opacity-90">
              Licensed Henderson realtors • 15+ years Seven Hills experience •
              Local residents
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
