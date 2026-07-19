'use client'

import { useEffect, useState } from 'react'
import {
  realScoutService,
  type NeighborhoodData,
  type RealScoutListing,
} from '@/services/realScoutService'
import { PropertyImage } from '@/components/ui/OptimizedImage'

interface RealScoutListingsProps {
  neighborhood: string
  className?: string
}

export default function RealScoutListings({
  neighborhood,
  className = '',
}: RealScoutListingsProps) {
  const [data, setData] = useState<NeighborhoodData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const neighborhoodData =
          await realScoutService.getNeighborhoodData(neighborhood)
        setData(neighborhoodData)
        setError(null)
      } catch (err) {
        setError('Failed to load neighborhood data')
        console.error('Error fetching neighborhood data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [neighborhood])

  if (loading) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: fixed-count static skeleton placeholders, never reordered.
              <div key={i} className="space-y-3">
                <div className="h-48 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div
        className={`bg-red-50 border border-red-200 rounded-lg p-6 ${className}`}
      >
        <p className="text-red-600 text-center">
          Unable to load neighborhood listings. Please try again later.
        </p>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      {/* Header with Market Stats */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Current {data.name} Homes for Sale
        </h2>

        {/* Market Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">
              {data.marketStats.totalListings}
            </div>
            <div className="text-sm text-blue-800">Active Listings</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">
              ${(data.marketStats.averagePrice / 1000).toFixed(0)}K
            </div>
            <div className="text-sm text-green-800">Avg. Price</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-lg font-bold text-purple-600">
              ${(data.marketStats.medianPrice / 1000).toFixed(0)}K
            </div>
            <div className="text-sm text-purple-800">Median Price</div>
          </div>
          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <div className="text-lg font-bold text-orange-600">
              {data.marketStats.averageDaysOnMarket}
            </div>
            <div className="text-sm text-orange-800">Avg. DOM</div>
          </div>
        </div>

        {/* Price Range */}
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-lg font-semibold text-gray-800">
            Price Range: ${(data.marketStats.priceRange.min / 1000).toFixed(0)}K
            - ${(data.marketStats.priceRange.max / 1000).toFixed(0)}K
          </div>
          <div className="text-sm text-gray-600 mt-1">
            Last updated: {new Date(data.lastUpdated).toLocaleDateString()} •
            Next update: {new Date(data.nextUpdate).toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.currentListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      {/* RealScout Widget Integration */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          View All {data.name} Listings on RealScout
        </h3>
        <p className="text-gray-600 text-center mb-4">
          Access the complete MLS database with advanced search and filtering
          options
        </p>

        {/* RealScout Widget */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            listing-status="For Sale"
            property-types="SFR,MF"
            price-min={String(data.marketStats.priceRange.min)}
            price-max={String(data.marketStats.priceRange.max)}
          />
        </div>
      </div>
    </div>
  )
}

function ListingCard({ listing }: { listing: RealScoutListing }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Property Image */}
      <div className="relative h-48 bg-gray-100">
        <PropertyImage
          src={listing.imageUrl}
          alt={`${listing.beds} bed, ${listing.baths} bath home in ${listing.neighborhood}`}
          width={400}
          height={300}
          className="w-full h-full"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
          {listing.propertyType}
        </div>
        <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs">
          {listing.daysOnMarket} days
        </div>
      </div>

      {/* Property Details */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
          {listing.address}
        </h3>

        <div className="text-2xl font-bold text-blue-600 mb-3">
          ${listing.price.toLocaleString()}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <span>{listing.beds} beds</span>
          <span>{listing.baths} baths</span>
          <span>{listing.sqft.toLocaleString()} sq ft</span>
        </div>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {listing.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-3">
          {listing.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button
          type="button"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          onClick={() => {
            // Open RealScout listing in new tab
            window.open(
              'https://em.realscout.com/widgets/realscout-web-components.umd.js',
              '_blank'
            )
          }}
        >
          View Details
        </button>
      </div>
    </div>
  )
}
