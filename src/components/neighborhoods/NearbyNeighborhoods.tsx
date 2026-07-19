import Link from 'next/link'

type NeighborhoodLink = {
  slug: string
  name: string
  summary: string
  priceRange: string
}

const NEIGHBORHOOD_LINKS: NeighborhoodLink[] = [
  {
    slug: 'green-valley',
    name: 'Green Valley',
    summary:
      'Master-planned community with luxury homes, shopping access, and golf options.',
    priceRange: '$750K - $1.2M',
  },
  {
    slug: 'seven-hills',
    name: 'Seven Hills',
    summary:
      'Upscale hillside community known for golf-adjacent homes and scenic elevation.',
    priceRange: '$800K - $1.5M',
  },
  {
    slug: 'stephanie-ranch',
    name: 'Stephanie Ranch',
    summary:
      'Family-oriented area with practical floor plans and strong day-to-day convenience.',
    priceRange: '$450K - $650K',
  },
  {
    slug: 'whitney-ranch',
    name: 'Whitney Ranch',
    summary:
      'Established neighborhood with value-driven pricing and mature landscaping.',
    priceRange: '$400K - $600K',
  },
]

type NearbyNeighborhoodsProps = {
  currentSlug: string
  currentName: string
}

export default function NearbyNeighborhoods({
  currentSlug,
  currentName,
}: NearbyNeighborhoodsProps) {
  const nearby = NEIGHBORHOOD_LINKS.filter((item) => item.slug !== currentSlug)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Compare {currentName} to Nearby Henderson Neighborhoods
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {nearby.map((item) => (
              <Link
                key={item.slug}
                href={`/neighborhoods/${item.slug}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-blue-700">
                  {item.name} Henderson
                </h3>
                <p className="text-gray-600 mb-4">{item.summary}</p>
                <div className="text-sm text-gray-500 mb-3">
                  Price Range: {item.priceRange}
                </div>
                <span className="text-blue-600 group-hover:underline font-medium">
                  Compare {item.name} vs {currentName} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
