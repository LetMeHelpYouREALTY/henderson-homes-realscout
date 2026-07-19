'use client'

import { useState, useEffect } from 'react'
import type {
  MarketData,
  MarketInsight,
} from '@/services/marketInsightsService'

interface MarketInsightsWidgetProps {
  className?: string
  showInsights?: boolean
  showStats?: boolean
}

export default function MarketInsightsWidget({
  className = '',
  showInsights = true,
  showStats = true,
}: MarketInsightsWidgetProps) {
  const [marketData, setMarketData] = useState<MarketData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/market-insights')
        if (!response.ok) {
          throw new Error('Failed to fetch market insights')
        }
        const data = await response.json()
        setMarketData(data)
        setError(null)
      } catch (err) {
        setError('Failed to load market insights')
        console.error('Error fetching market data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMarketData()
  }, [])

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

  if (error || !marketData) {
    return (
      <div
        className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}
      >
        <p className="text-red-600 text-sm">
          Unable to load market insights. Please try again later.
        </p>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800">
          📊 Live Market Insights
        </h3>
        <div className="text-xs text-gray-500">
          Updated: {new Date(marketData.lastUpdated).toLocaleDateString()}
        </div>
      </div>

      {/* Market Statistics */}
      {showStats && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-sm font-medium text-blue-800">
              🏢 Condo Market
            </div>
            <div className="text-lg font-bold text-blue-900">
              {marketData.marketStats.condoInventory}
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-sm font-medium text-green-800">
              💰 Price Trends
            </div>
            <div className="text-lg font-bold text-green-900">
              {marketData.marketStats.priceChange}
            </div>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg">
            <div className="text-sm font-medium text-orange-800">
              📋 Contract Status
            </div>
            <div className="text-lg font-bold text-orange-900">
              {marketData.marketStats.contractFallThrough}
            </div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <div className="text-sm font-medium text-purple-800">
              💡 Down Payment Reality
            </div>
            <div className="text-lg font-bold text-purple-900">
              {marketData.marketStats.downPaymentMyth}
            </div>
          </div>
        </div>
      )}

      {/* Latest Insights */}
      {showInsights && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            Latest Market Intelligence
          </h4>
          {marketData.insights.slice(0, 3).map((insight) => (
            <MarketInsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      )}

      {/* Source Attribution */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Data provided by Simplifying the Market</span>
          <a
            href="https://www.simplifyingthemarket.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            View Source →
          </a>
        </div>
      </div>
    </div>
  )
}

function MarketInsightCard({ insight }: { insight: MarketInsight }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="flex items-start gap-4">
        {/* Image */}
        {insight.imageUrl && (
          <div className="flex-shrink-0">
            <img
              src={insight.imageUrl}
              alt={insight.title}
              className="w-20 h-20 object-cover rounded-lg"
              onError={(e) => {
                // Hide image on error
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h5 className="font-medium text-gray-800 mb-2 line-clamp-2">
            {insight.title}
          </h5>
          <p className="text-sm text-gray-600 line-clamp-3 mb-3">
            {insight.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">
              {new Date(insight.publishedAt).toLocaleDateString()}
            </span>
            <a
              href={insight.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
