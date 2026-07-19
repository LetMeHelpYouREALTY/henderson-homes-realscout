import { RealScoutWidget } from '@/components/RealScoutWidget'
import { Button } from '@/components/ui/button'

export default function ListingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Property Listings
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Browse all available properties in Henderson, Nevada. Use our advanced
          search to find your perfect home.
        </p>
        <div className="mt-6">
          <Button variant="outline" size="lg">
            Advanced Search
          </Button>
        </div>
      </div>

      <RealScoutWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
        listingStatus="For Sale"
        propertyTypes="SFR,MF"
        priceMin={400000}
        priceMax={1000000}
        className="rounded-lg shadow-lg"
      />
    </div>
  )
}
