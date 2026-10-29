import HyperLocalSeoSection from '@/components/neighborhoods/HyperLocalSeoSection'
import NearbyNeighborhoods from '@/components/neighborhoods/NearbyNeighborhoods'
import NeighborhoodBreadcrumbSchema from '@/components/neighborhoods/NeighborhoodBreadcrumbSchema'
import RealScoutListings from '@/components/neighborhoods/RealScoutListings'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Anthem Henderson Homes for Sale | Live MLS Listings & Buyer Guide',
  description:
    'View current Anthem Henderson homes for sale with live MLS data. Buyer guide includes HOA ranges, schools, commute access, and neighborhood market insights.',
  keywords:
    'Anthem Henderson homes for sale, Anthem MLS listings, Henderson real estate, Anthem Country Club homes',
  alternates: {
    canonical: '/neighborhoods/anthem',
  },
  openGraph: {
    title: 'Anthem Henderson Homes for Sale | Live MLS Listings',
    description:
      'Browse live Anthem Henderson homes for sale with market snapshots, community insights, and local buyer guidance.',
    url: 'https://searchforhomesinhenderson.com/neighborhoods/anthem',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthem Henderson Homes for Sale',
    description:
      'Live Anthem listings with neighborhood-level buyer insights in Henderson, Nevada.',
  },
}

export default function AnthemPage() {
  return (
    <>
      <NeighborhoodBreadcrumbSchema
        neighborhoodName="Anthem"
        neighborhoodPath="/neighborhoods/anthem"
      />
      <main>
        <Breadcrumbs />

        <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Anthem Henderson Homes for Sale
              </h1>
              <p className="text-xl mb-8">
                Live MLS listings • Elevated hillside community • Golf and
                country club access • Parks and trails • Nearby public schools
              </p>

              <div className="grid md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">$650K-$950K</div>
                  <div className="text-sm">Current Prices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">26 days</div>
                  <div className="text-sm">Avg. Days on Market</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">$110-190</div>
                  <div className="text-sm">Monthly HOA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">0.7 mi</div>
                  <div className="text-sm">To Anthem Amenities</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RealScoutListings neighborhood="Anthem" />
            </div>
          </div>
        </section>

        <section className="py-12 bg-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8 text-indigo-800">
                Anthem Market Snapshot (Last 30 Days)
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">18</div>
                  <div className="text-sm text-gray-600">Homes Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">
                    $780K
                  </div>
                  <div className="text-sm text-gray-600">Median Sale Price</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">26</div>
                  <div className="text-sm text-gray-600">
                    Avg. Days on Market
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">82%</div>
                  <div className="text-sm text-gray-600">Sold Above List</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Anthem Monthly Living Costs (Beyond Mortgage)
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-indigo-800">
                    HOA Ranges by Anthem Areas
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Anthem Country Club:</span>
                      <span className="font-semibold">$170-220/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Anthem Highlands:</span>
                      <span className="font-semibold">$120-160/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sun City Anthem-adjacent:</span>
                      <span className="font-semibold">$110-145/month</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">
                    Utilities & Services
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>NV Energy (summer):</span>
                      <span className="font-semibold">$170-270</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NV Energy (winter):</span>
                      <span className="font-semibold">$70-120</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Water/Sewer:</span>
                      <span className="font-semibold">$45-65</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Waste Management:</span>
                      <span className="font-semibold">$22-34</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Anthem Schools and Lifestyle Access
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                    Public School Zones
                  </h3>
                  <p className="text-sm text-gray-700">
                    Anthem buyers often compare zoning for Coronado, Liberty,
                    and Del Webb school-adjacent areas. Always verify current
                    boundaries directly before purchase.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                    Recreation & Parks
                  </h3>
                  <p className="text-sm text-gray-700">
                    The Anthem area offers trail systems, neighborhood parks,
                    and country-club style amenities depending on section and
                    HOA coverage.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                    Commute & Access
                  </h3>
                  <p className="text-sm text-gray-700">
                    Anthem provides efficient access to major Henderson retail
                    corridors and freeway routes while retaining a quieter
                    hillside residential feel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NearbyNeighborhoods currentSlug="anthem" currentName="Anthem" />

        <HyperLocalSeoSection
          neighborhoodName="Anthem"
          faq={[
            {
              question: 'What is the typical Anthem Henderson price range?',
              answer:
                'Many Anthem homes fall between the mid-$600Ks and upper-$900Ks, with premium properties in select areas exceeding that range.',
            },
            {
              question: 'Is Anthem a good option for move-up buyers?',
              answer:
                'Yes. Anthem is often chosen for larger homes, elevated views, and amenity-driven communities with a strong neighborhood identity.',
            },
            {
              question: 'Are HOA fees common in Anthem?',
              answer:
                'Yes. HOA structures are common and vary by section, with dues often supporting common area maintenance, parks, and community facilities.',
            },
            {
              question:
                'Can I compare Anthem with nearby Henderson neighborhoods?',
              answer:
                'Absolutely. We can map Anthem against Green Valley, Seven Hills, Stephanie Ranch, and Whitney Ranch using recent comps and lifestyle factors.',
            },
          ]}
        />

        <section className="py-16 bg-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Buy in Anthem Henderson?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get local Anthem guidance with live inventory support, pricing
              strategy, and neighborhood-level expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-indigo-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Schedule Anthem Home Tour
              </Link>
              <Link
                href="/featured-agents"
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Meet Our Anthem Experts
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
