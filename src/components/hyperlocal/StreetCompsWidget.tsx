'use client'

import { useState, useEffect } from 'react'

interface StreetCompsWidgetProps {
  address: string
  neighborhood: string
  className?: string
}

// Mock data generator for demo purposes
function generateDynamicData(address: string, neighborhood: string) {
  // Use address hash to generate consistent but varied data
  let addressHash = 0
  for (let i = 0; i < address.length; i++) {
    addressHash =
      ((addressHash << 5) - addressHash + address.charCodeAt(i)) & 0xffffffff
  }

  const seed = addressHash % 1000

  // Generate varied comps based on address
  const comps = Array.from({ length: Math.max(1, (seed % 5) + 1) }, (_, i) => {
    const basePrice = 400000 + (seed % 300000) + i * 25000
    const sqft = 1500 + (seed % 1000) + i * 100
    const bedrooms = 3 + (seed % 2)
    const bathrooms = 2 + (seed % 2)

    return {
      id: `comp-${addressHash}-${i}`,
      address: `${100 + (seed % 200) + i * 50} ${neighborhood} ${['Street', 'Avenue', 'Drive', 'Way'][seed % 4]}`,
      salePrice: basePrice,
      saleDate: new Date(
        Date.now() - (seed % 90) * 24 * 60 * 60 * 1000
      ).toISOString(),
      sqft,
      bedrooms,
      bathrooms,
      distance: 50 + (seed % 450) + i * 100,
    }
  })

  // Generate varied market data
  const marketData = {
    pricePerSqft: 200 + (seed % 150),
    daysOnMarket: 15 + (seed % 45),
    priceChange: -5 + (seed % 20),
  }

  // Generate varied walkability scores
  const walkabilityData = {
    overall: 60 + (seed % 40),
    categories: {
      shopping: {
        score: 30 + (seed % 40),
        nearby: ['The District', 'Target'],
        distance: 300 + (seed % 700),
      },
      dining: {
        score: 25 + (seed % 35),
        nearby: ['Yard House', 'Brio'],
        distance: 400 + (seed % 800),
      },
      parks: {
        score: 15 + (seed % 25),
        nearby: ['Green Valley Ranch'],
        distance: 800 + (seed % 1200),
      },
      schools: {
        score: 70 + (seed % 30),
        nearby: ['Green Valley High'],
        distance: 600 + (seed % 1000),
      },
      transit: {
        score: 60 + (seed % 40),
        nearby: ['RTC Bus Routes'],
        distance: 800 + (seed % 1200),
      },
      healthcare: {
        score: 5 + (seed % 15),
        nearby: ['Henderson Hospital'],
        distance: 1500 + (seed % 1500),
      },
    },
  }

  // Generate varied micro-market pricing
  const microMarketData = {
    blockLevel: {
      averagePrice: 450000 + (seed % 200000),
      pricePerSqft: 220 + (seed % 100),
      priceVariation: -8 + (seed % 16),
      compCount: 2 + (seed % 4),
    },
    streetLevel: {
      averagePrice: 480000 + (seed % 250000),
      pricePerSqft: 250 + (seed % 120),
      streetPremium: 2 + (seed % 8),
      compCount: 3 + (seed % 5),
    },
    neighborhoodLevel: {
      marketTrend: ['rising', 'stable', 'declining'][seed % 3] as
        | 'rising'
        | 'stable'
        | 'declining',
      daysOnMarket: 20 + (seed % 40),
      inventoryLevel: ['low', 'medium', 'high'][seed % 3] as
        | 'low'
        | 'medium'
        | 'high',
    },
    seasonalAdjustments: {
      spring: -2 + (seed % 6),
      summer: 1 + (seed % 5),
      fall: -1 + (seed % 4),
      winter: -3 + (seed % 6),
    },
  }

  // Generate varied predictive trends
  const predictiveData = {
    shortTerm: {
      next30Days: { priceChange: 1 + (seed % 4), confidence: 75 + (seed % 20) },
      next90Days: { priceChange: 2 + (seed % 6), confidence: 70 + (seed % 25) },
    },
    mediumTerm: {
      next6Months: {
        priceChange: 4 + (seed % 8),
        confidence: 65 + (seed % 30),
      },
      next12Months: {
        priceChange: 6 + (seed % 10),
        confidence: 60 + (seed % 35),
        marketConditions: ['buyer', 'seller', 'balanced'][seed % 3] as
          | 'buyer'
          | 'seller'
          | 'balanced',
      },
    },
    longTerm: {
      next2Years: {
        priceChange: 8 + (seed % 15),
        confidence: 55 + (seed % 40),
      },
    },
    opportunities: {
      expectedReturn: 12 + (seed % 8),
      timing: ['immediate', 'within 6 months', 'wait for better prices'][
        seed % 3
      ],
      strategy: [
        'Focus on premium properties',
        'Target value opportunities',
        'Consider new construction',
      ][seed % 3],
    },
    riskFactors: {
      high: [
        'Interest rate volatility',
        'Economic recession risk',
        'Supply chain disruptions',
      ].slice(0, 2),
      medium: [
        'Local market saturation',
        'Regulatory changes',
        'Environmental factors',
      ].slice(0, 2),
    },
  }

  return {
    comps,
    marketData,
    walkabilityData,
    microMarketData,
    predictiveData,
  }
}

// Define types for the generated data
interface GeneratedData {
  comps: Array<{
    id: string
    address: string
    salePrice: number
    saleDate: string
    sqft: number
    bedrooms: number
    bathrooms: number
    distance: number
  }>
  marketData: {
    pricePerSqft: number
    daysOnMarket: number
    priceChange: number
  }
  walkabilityData: {
    overall: number
    categories: Record<
      string,
      { score: number; nearby: string[]; distance: number }
    >
  }
  microMarketData: {
    blockLevel: {
      averagePrice: number
      pricePerSqft: number
      priceVariation: number
      compCount: number
    }
    streetLevel: {
      averagePrice: number
      pricePerSqft: number
      streetPremium: number
      compCount: number
    }
    neighborhoodLevel: {
      marketTrend: 'rising' | 'stable' | 'declining'
      daysOnMarket: number
      inventoryLevel: 'low' | 'medium' | 'high'
    }
    seasonalAdjustments: {
      spring: number
      summer: number
      fall: number
      winter: number
    }
  }
  predictiveData: {
    shortTerm: {
      next30Days: { priceChange: number; confidence: number }
      next90Days: { priceChange: number; confidence: number }
    }
    mediumTerm: {
      next6Months: { priceChange: number; confidence: number }
      next12Months: {
        priceChange: number
        confidence: number
        marketConditions: 'buyer' | 'seller' | 'balanced'
      }
    }
    longTerm: { next2Years: { priceChange: number; confidence: number } }
    opportunities: { expectedReturn: number; timing: string; strategy: string }
    riskFactors: { high: string[]; medium: string[] }
  }
}

export default function StreetCompsWidget({
  address,
  neighborhood,
  className = '',
}: StreetCompsWidgetProps) {
  const [data, setData] = useState<GeneratedData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(
      () => {
        const dynamicData = generateDynamicData(address, neighborhood)
        setData(dynamicData)
        setLoading(false)
      },
      500 + Math.random() * 1000
    ) // Random delay between 500ms-1500ms

    return () => clearTimeout(timer)
  }, [address, neighborhood])

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

  if (!data) return null

  const {
    comps,
    marketData,
    walkabilityData,
    microMarketData,
    predictiveData,
  } = data

  const avgPrice =
    comps.length > 0
      ? comps.reduce((sum: number, comp) => sum + comp.salePrice, 0) /
        comps.length
      : 0

  const avgPricePerSqft =
    comps.length > 0
      ? comps.reduce(
          (sum: number, comp) => sum + comp.salePrice / comp.sqft,
          0
        ) / comps.length
      : 0

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Street-Level Market Analysis
        </h3>
        <p className="text-gray-600 text-sm">
          Recent sales within 500m of {address} •{' '}
          {neighborhood.replace(/([A-Z])/g, ' $1')}
        </p>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{comps.length}</div>
          <div className="text-xs text-gray-600">Recent Sales</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">
            ${(avgPrice / 1000).toFixed(0)}K
          </div>
          <div className="text-xs text-gray-600">Avg Sale Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">
            ${avgPricePerSqft.toFixed(0)}
          </div>
          <div className="text-xs text-gray-600">Price/Sq Ft</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">
            {walkabilityData.overall}
          </div>
          <div className="text-xs text-gray-600">Walk Score</div>
        </div>
      </div>

      {/* Micro-Market Pricing Analysis */}
      <div className="bg-purple-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-purple-900 mb-3">
          Micro-Market Pricing Analysis
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded p-3">
            <div className="font-medium text-purple-700 mb-2">
              Block Level (500m)
            </div>
            <div className="space-y-1 text-xs">
              <div>
                Avg Price: $
                {microMarketData.blockLevel.averagePrice.toLocaleString()}
              </div>
              <div>Price/Sq Ft: ${microMarketData.blockLevel.pricePerSqft}</div>
              <div>Variation: {microMarketData.blockLevel.priceVariation}%</div>
              <div>Comps: {microMarketData.blockLevel.compCount}</div>
            </div>
          </div>
          <div className="bg-white rounded p-3">
            <div className="font-medium text-purple-700 mb-2">Street Level</div>
            <div className="space-y-1 text-xs">
              <div>
                Avg Price: $
                {microMarketData.streetLevel.averagePrice.toLocaleString()}
              </div>
              <div>
                Price/Sq Ft: ${microMarketData.streetLevel.pricePerSqft}
              </div>
              <div>
                Street Premium: +{microMarketData.streetLevel.streetPremium}%
              </div>
              <div>Comps: {microMarketData.streetLevel.compCount}</div>
            </div>
          </div>
          <div className="bg-white rounded p-3">
            <div className="font-medium text-purple-700 mb-2">Neighborhood</div>
            <div className="space-y-1 text-xs">
              <div>
                Trend:{' '}
                <span
                  className={`font-medium ${
                    microMarketData.neighborhoodLevel.marketTrend === 'rising'
                      ? 'text-green-600'
                      : microMarketData.neighborhoodLevel.marketTrend ===
                          'declining'
                        ? 'text-red-600'
                        : 'text-blue-600'
                  }`}
                >
                  {microMarketData.neighborhoodLevel.marketTrend}
                </span>
              </div>
              <div>
                Days on Market: {microMarketData.neighborhoodLevel.daysOnMarket}
              </div>
              <div>
                Inventory:{' '}
                <span
                  className={`font-medium ${
                    microMarketData.neighborhoodLevel.inventoryLevel === 'low'
                      ? 'text-red-600'
                      : microMarketData.neighborhoodLevel.inventoryLevel ===
                          'high'
                        ? 'text-green-600'
                        : 'text-yellow-600'
                  }`}
                >
                  {microMarketData.neighborhoodLevel.inventoryLevel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Seasonal Adjustments */}
        <div className="mt-3 pt-3 border-t border-purple-200">
          <div className="text-xs text-purple-800">
            <div className="font-medium mb-2">Seasonal Adjustments:</div>
            <div className="grid grid-cols-4 gap-2">
              <div className="text-center">
                <div className="font-medium">Spring</div>
                <div
                  className={
                    microMarketData.seasonalAdjustments.spring > 0
                      ? 'text-green-600'
                      : 'text-gray-600'
                  }
                >
                  {microMarketData.seasonalAdjustments.spring > 0 ? '+' : ''}
                  {microMarketData.seasonalAdjustments.spring}%
                </div>
              </div>
              <div className="text-center">
                <div className="font-medium">Summer</div>
                <div
                  className={
                    microMarketData.seasonalAdjustments.summer > 0
                      ? 'text-green-600'
                      : 'text-gray-600'
                  }
                >
                  {microMarketData.seasonalAdjustments.summer > 0 ? '+' : ''}
                  {microMarketData.seasonalAdjustments.summer}%
                </div>
              </div>
              <div className="text-center">
                <div className="font-medium">Fall</div>
                <div
                  className={
                    microMarketData.seasonalAdjustments.fall > 0
                      ? 'text-green-600'
                      : 'text-gray-600'
                  }
                >
                  {microMarketData.seasonalAdjustments.fall > 0 ? '+' : ''}
                  {microMarketData.seasonalAdjustments.fall}%
                </div>
              </div>
              <div className="text-center">
                <div className="font-medium">Winter</div>
                <div
                  className={
                    microMarketData.seasonalAdjustments.winter > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }
                >
                  {microMarketData.seasonalAdjustments.winter > 0 ? '+' : ''}
                  {microMarketData.seasonalAdjustments.winter}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Predictive Market Trends */}
      <div className="bg-indigo-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-indigo-900 mb-3">
          Predictive Market Trends (ML-Powered)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded p-3">
            <div className="font-medium text-indigo-700 mb-2">
              Short Term (30-90 days)
            </div>
            <div className="space-y-1 text-xs">
              <div>
                30 days: +{predictiveData.shortTerm.next30Days.priceChange}% (
                {predictiveData.shortTerm.next30Days.confidence}% confidence)
              </div>
              <div>
                90 days: +{predictiveData.shortTerm.next90Days.priceChange}% (
                {predictiveData.shortTerm.next90Days.confidence}% confidence)
              </div>
            </div>
          </div>
          <div className="bg-white rounded p-3">
            <div className="font-medium text-indigo-700 mb-2">
              Medium Term (6-12 months)
            </div>
            <div className="space-y-1 text-xs">
              <div>
                6 months: +{predictiveData.mediumTerm.next6Months.priceChange}%
                ({predictiveData.mediumTerm.next6Months.confidence}% confidence)
              </div>
              <div>
                12 months: +{predictiveData.mediumTerm.next12Months.priceChange}
                % ({predictiveData.mediumTerm.next12Months.confidence}%
                confidence)
              </div>
              <div>
                Market:{' '}
                <span
                  className={`font-medium ${
                    predictiveData.mediumTerm.next12Months.marketConditions ===
                    'seller'
                      ? 'text-red-600'
                      : predictiveData.mediumTerm.next12Months
                            .marketConditions === 'buyer'
                        ? 'text-green-600'
                        : 'text-blue-600'
                  }`}
                >
                  {predictiveData.mediumTerm.next12Months.marketConditions}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded p-3">
            <div className="font-medium text-indigo-700 mb-2">
              Long Term (2 years)
            </div>
            <div className="space-y-1 text-xs">
              <div>
                2 years: +{predictiveData.longTerm.next2Years.priceChange}% (
                {predictiveData.longTerm.next2Years.confidence}% confidence)
              </div>
              <div>
                Expected Return: {predictiveData.opportunities.expectedReturn}%
              </div>
              <div>
                Timing:{' '}
                <span className="font-medium text-indigo-600">
                  {predictiveData.opportunities.timing}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Factors */}
        <div className="mt-3 pt-3 border-t border-indigo-200">
          <div className="text-xs text-indigo-800">
            <div className="font-medium mb-2">Key Market Factors:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <div className="font-medium text-red-600">High Risk:</div>
                <div className="text-xs">
                  {predictiveData.riskFactors.high.join(', ')}
                </div>
              </div>
              <div>
                <div className="font-medium text-green-600">Opportunities:</div>
                <div className="text-xs">
                  {predictiveData.opportunities.strategy}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Walkability Score */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-blue-900 mb-3">
          Advanced Walkability Analysis
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <div className="bg-white rounded p-2">
            <div className="font-medium text-blue-700">Shopping</div>
            <div className="text-xs text-gray-600">
              {walkabilityData.categories.shopping.score}/40 •{' '}
              {walkabilityData.categories.shopping.distance}m
            </div>
          </div>
          <div className="bg-white rounded p-2">
            <div className="font-medium text-green-700">Dining</div>
            <div className="text-xs text-gray-600">
              {walkabilityData.categories.dining.score}/30 •{' '}
              {walkabilityData.categories.dining.distance}m
            </div>
          </div>
          <div className="bg-white rounded p-2">
            <div className="font-medium text-purple-700">Parks</div>
            <div className="text-xs text-gray-600">
              {walkabilityData.categories.parks.score}/20 •{' '}
              {walkabilityData.categories.parks.distance}m
            </div>
          </div>
          <div className="bg-white rounded p-2">
            <div className="font-medium text-orange-700">Schools</div>
            <div className="text-xs text-gray-600">
              {walkabilityData.categories.schools.score}/100 •{' '}
              {walkabilityData.categories.schools.distance}m
            </div>
          </div>
          <div className="bg-white rounded p-2">
            <div className="font-medium text-red-700">Transit</div>
            <div className="text-xs text-gray-600">
              {walkabilityData.categories.transit.score}/100 •{' '}
              {walkabilityData.categories.transit.distance}m
            </div>
          </div>
          <div className="bg-white rounded p-2">
            <div className="font-medium text-indigo-700">Healthcare</div>
            <div className="text-xs text-gray-600">
              {walkabilityData.categories.healthcare.score}/10 •{' '}
              {walkabilityData.categories.healthcare.distance}m
            </div>
          </div>
        </div>

        {/* Walkability Insights */}
        <div className="mt-3 pt-3 border-t border-blue-200">
          <div className="text-xs text-blue-800">
            <div className="font-medium mb-1">Key Insights:</div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-1">•</span>
              <span>Excellent shopping access within 0.5 miles</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-1">•</span>
              <span>Multiple dining options within walking distance</span>
            </div>
          </div>
        </div>
      </div>

      {/* School Zone Information */}
      <div className="bg-green-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-green-900 mb-3">
          School Zone Analysis
        </h4>
        <div className="space-y-3">
          <div className="bg-white rounded p-3">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium text-green-800">
                  Green Valley High School
                </div>
                <div className="text-xs text-gray-600">
                  high • CCSD • Rating: 8/10
                </div>
                <div className="text-xs text-gray-500">
                  IB Program, Robotics
                </div>
              </div>
              <div className="text-right text-sm">
                <div className="font-medium text-green-700">15 min walk</div>
                <div className="text-gray-500">3 min drive</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded p-3">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium text-green-800">
                  Estes McDoniel Elementary
                </div>
                <div className="text-xs text-gray-600">
                  elementary • CCSD • Rating: 9/10
                </div>
                <div className="text-xs text-gray-500">
                  STEM Focus, Gifted Program
                </div>
              </div>
              <div className="text-right text-sm">
                <div className="font-medium text-green-700">8 min walk</div>
                <div className="text-gray-500">2 min drive</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Trends */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-blue-900 mb-2">
          Local Market Trends
        </h4>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-blue-700">Price/Sq Ft:</span>
            <span className="ml-2 font-medium">${marketData.pricePerSqft}</span>
          </div>
          <div>
            <span className="text-blue-700">Days on Market:</span>
            <span className="ml-2 font-medium">{marketData.daysOnMarket}</span>
          </div>
          <div>
            <span className="text-blue-700">Price Change:</span>
            <span
              className={`ml-2 font-medium ${marketData.priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}
            >
              {marketData.priceChange >= 0 ? '+' : ''}
              {marketData.priceChange}%
            </span>
          </div>
        </div>
      </div>

      {/* Street Comps */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">
          Recent Sales Nearby
        </h4>
        {comps.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No recent sales found in this area.
          </p>
        ) : (
          <div className="space-y-3">
            {comps.map((comp) => (
              <div
                key={comp.id}
                className="border border-gray-200 rounded-lg p-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">
                      {comp.address}
                    </div>
                    <div className="text-sm text-gray-600">
                      {comp.bedrooms} bed, {comp.bathrooms} bath •{' '}
                      {comp.sqft.toLocaleString()} sq ft
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">
                      ${comp.salePrice.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {comp.distance}m away •{' '}
                      {new Date(comp.saleDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Local Insights */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Local Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="font-medium text-gray-900 mb-1">Walkability</div>
            <div className="text-gray-600">
              {walkabilityData.overall >= 80
                ? 'Excellent'
                : walkabilityData.overall >= 60
                  ? 'Good'
                  : walkabilityData.overall >= 40
                    ? 'Fair'
                    : 'Poor'}{' '}
              walking access to amenities
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="font-medium text-gray-900 mb-1">
              Market Activity
            </div>
            <div className="text-gray-600">
              {comps.length} recent sales indicate{' '}
              {comps.length >= 3 ? 'active' : 'moderate'} market activity
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
