'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  fubApiService,
  type FUBProperty,
  type FUBMarketData,
} from '@/services/fubApiService'

interface FUBIntegrationDemoProps {
  className?: string
}

export default function FUBIntegrationDemo({
  className = '',
}: FUBIntegrationDemoProps) {
  const [properties, setProperties] = useState<FUBProperty[]>([])
  const [marketData, setMarketData] = useState<FUBMarketData | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedNeighborhood, setSelectedNeighborhood] =
    useState('Green Valley')

  const neighborhoods = [
    'Green Valley',
    'Anthem',
    'Seven Hills',
    'Whitney Ranch',
    'Stephanie Ranch',
  ]

  const loadFUBData = useCallback(async () => {
    try {
      setLoading(true)

      // Load properties for selected neighborhood
      const filters = {
        city: 'Henderson',
        neighborhood: selectedNeighborhood,
        status: 'Active',
      }

      const [propertiesData, marketDataResult] = await Promise.all([
        fubApiService.getProperties(filters),
        fubApiService.getMarketData(filters),
      ])

      setProperties(propertiesData)
      setMarketData(marketDataResult)
    } catch (error) {
      console.error('Error loading FUB data:', error)
    } finally {
      setLoading(false)
    }
  }, [selectedNeighborhood])

  useEffect(() => {
    loadFUBData()
  }, [loadFUBData])

  if (loading) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-4/6" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Follow Up Boss API Integration Demo
        </h3>
        <p className="text-gray-600 text-sm">
          Real-time property data from FUB • Live market analysis • 15-minute
          cache refresh
        </p>
      </div>

      {/* Neighborhood Selector */}
      <div className="mb-6">
        <label
          htmlFor="neighborhood-select"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Select Neighborhood
        </label>
        <select
          id="neighborhood-select"
          value={selectedNeighborhood}
          onChange={(e) => setSelectedNeighborhood(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          aria-label="Select neighborhood for property search"
        >
          {neighborhoods.map((neighborhood) => (
            <option key={neighborhood} value={neighborhood}>
              {neighborhood}
            </option>
          ))}
        </select>
      </div>

      {/* Market Data Overview */}
      {marketData && (
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-blue-900 mb-3">
            {selectedNeighborhood} Market Overview
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {marketData.totalProperties}
              </div>
              <div className="text-xs text-gray-600">Total Properties</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                ${(marketData.averagePrice / 1000).toFixed(0)}K
              </div>
              <div className="text-xs text-gray-600">Avg Price</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                ${marketData.averagePricePerSqFt}
              </div>
              <div className="text-xs text-gray-600">Price/Sq Ft</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {marketData.averageDaysOnMarket}
              </div>
              <div className="text-xs text-gray-600">Days on Market</div>
            </div>
          </div>

          {/* Market Conditions */}
          <div className="mt-3 pt-3 border-t border-blue-200">
            <div className="text-xs text-blue-800">
              <div className="font-medium mb-1">Market Conditions:</div>
              <div className="flex items-center justify-between">
                <span>Current Market:</span>
                <span
                  className={`font-medium px-2 py-1 rounded text-xs ${
                    marketData.marketConditions === 'seller'
                      ? 'bg-red-100 text-red-800'
                      : marketData.marketConditions === 'buyer'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {marketData.marketConditions.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Price Range:</span>
                <span className="font-medium">
                  ${(marketData.priceRange.min / 1000).toFixed(0)}K - $
                  {(marketData.priceRange.max / 1000).toFixed(0)}K
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Properties List */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">
          Active Properties in {selectedNeighborhood}
        </h4>
        {properties.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No active properties found in {selectedNeighborhood}.
          </p>
        ) : (
          <div className="space-y-3">
            {properties.slice(0, 5).map((property) => (
              <div
                key={property.id}
                className="border border-gray-200 rounded-lg p-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">
                      {property.address}
                    </div>
                    <div className="text-sm text-gray-600">
                      {property.bedrooms} bed, {property.bathrooms} bath •{' '}
                      {property.squareFeet.toLocaleString()} sq ft
                    </div>
                    <div className="text-xs text-gray-500">
                      {property.neighborhood} • {property.propertyType}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">
                      ${property.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {property.daysOnMarket} days on market
                    </div>
                  </div>
                </div>

                {/* Property Features */}
                {property.features.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <div className="text-xs text-gray-600">
                      Features: {property.features.slice(0, 3).join(', ')}
                      {property.features.length > 3 &&
                        ` +${property.features.length - 3} more`}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* API Status */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            <span className="text-gray-600">FUB API Connected</span>
          </div>
          <div className="text-gray-500">
            Cache: 15 min • Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  )
}
