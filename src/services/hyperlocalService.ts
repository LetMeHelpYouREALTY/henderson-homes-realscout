import type {
  HendersonHyperlocalData,
  GeoScope,
  StreetComps,
  WalkabilityScore,
  SchoolZone,
  MicroMarketPricing,
  PredictiveMarketTrends,
} from '@/types/hyperlocal'
import { fubApiService, type FUBProperty } from './fubApiService'

// Property data interface
export interface PropertyData {
  id: string
  address: string
  salePrice: number
  saleDate: string
  sqft: number
  bedrooms: number
  bathrooms: number
  latitude: number
  longitude: number
  distance?: number
}

// Henderson hyperlocal data configuration
export const HENDERSON_HYPERLOCAL_DATA: HendersonHyperlocalData = {
  neighborhoods: {
    greenValley: {
      center: [36.0711, -115.0673],
      radiusMeters: 2000,
      preferSameStreet: true,
    },
    anthem: {
      center: [36.0897, -115.0589],
      radiusMeters: 1500,
      preferSameStreet: true,
    },
    sevenHills: {
      center: [36.0822, -115.0514],
      radiusMeters: 1200,
      preferSameStreet: true,
    },
    whitneyRanch: {
      center: [36.0639, -115.0847],
      radiusMeters: 1800,
      preferSameStreet: true,
    },
    stephanieRanch: {
      center: [36.0567, -115.0923],
      radiusMeters: 1600,
      preferSameStreet: true,
    },
  },
  schoolDistricts: {
    ccsd: {
      center: [36.0711, -115.0673],
      radiusMeters: 5000,
    },
    private: [
      {
        center: [36.0711, -115.0673], // Faith Lutheran
        radiusMeters: 3000,
      },
      {
        center: [36.0897, -115.0589], // The Meadows School
        radiusMeters: 4000,
      },
    ],
  },
  amenities: {
    shopping: [
      {
        center: [36.0711, -115.0673], // The District
        radiusMeters: 500,
      },
      {
        center: [36.0639, -115.0847], // Target area
        radiusMeters: 800,
      },
    ],
    dining: [
      {
        center: [36.0711, -115.0673], // The District restaurants
        radiusMeters: 500,
      },
    ],
    parks: [
      {
        center: [36.0711, -115.0673], // Green Valley Ranch
        radiusMeters: 1000,
      },
    ],
    golf: [
      {
        center: [36.0711, -115.0673], // Legacy Golf Club
        radiusMeters: 800,
      },
    ],
    healthcare: [
      {
        center: [36.0711, -115.0673], // Henderson Hospital area
        radiusMeters: 2000,
      },
    ],
    transit: [
      {
        center: [36.0711, -115.0673], // RTC bus routes
        radiusMeters: 1000,
      },
    ],
  },
}

// Enhanced school zone data for Henderson
export const HENDERSON_SCHOOL_DATA: Record<string, SchoolZone[]> = {
  greenValley: [
    {
      name: 'Green Valley High School',
      type: 'high',
      district: 'CCSD',
      rating: 8,
      enrollment: 2800,
      boundary: [
        [36.07, -115.066],
        [36.072, -115.068],
      ],
      distance: 0,
      walkTime: 15,
      driveTime: 3,
      specialPrograms: ['IB Program', 'Robotics', 'Theater Arts'],
      testScores: { math: 85, reading: 82, science: 88 },
    },
    {
      name: 'Estes McDoniel Elementary',
      type: 'elementary',
      district: 'CCSD',
      rating: 9,
      enrollment: 680,
      boundary: [
        [36.069, -115.065],
        [36.071, -115.067],
      ],
      distance: 0,
      walkTime: 8,
      driveTime: 2,
      specialPrograms: ['STEM Focus', 'Gifted Program'],
      testScores: { math: 92, reading: 89, science: 90 },
    },
  ],
  anthem: [
    {
      name: 'Anthem Elementary',
      type: 'elementary',
      district: 'CCSD',
      rating: 9,
      enrollment: 720,
      boundary: [
        [36.088, -115.057],
        [36.09, -115.059],
      ],
      distance: 0,
      walkTime: 10,
      driveTime: 2,
      specialPrograms: ['Arts Integration', 'Environmental Science'],
      testScores: { math: 90, reading: 88, science: 91 },
    },
  ],
}

// Convert FUB property to PropertyData
function convertFUBToPropertyData(
  fubProperty: FUBProperty,
  distance?: number
): PropertyData {
  return {
    id: fubProperty.id,
    address: fubProperty.address,
    salePrice: fubProperty.soldPrice || fubProperty.price,
    saleDate: fubProperty.soldDate || fubProperty.listDate,
    sqft: fubProperty.squareFeet,
    bedrooms: fubProperty.bedrooms,
    bathrooms: fubProperty.bathrooms,
    latitude: fubProperty.latitude,
    longitude: fubProperty.longitude,
    distance,
  }
}

// Calculate distance between two points using Haversine formula
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371e3 // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180
  const φ2 = (lat2 * Math.PI) / 180
  const Δφ = ((lat2 - lat1) * Math.PI) / 180
  const Δλ = ((lon2 - lon1) * Math.PI) / 180

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c
}

// Check if a point is within a geographic scope
export function isWithinScope(
  point: [number, number],
  scope: GeoScope
): boolean {
  const [lat, lng] = point
  const [centerLat, centerLng] = scope.center
  const distance = calculateDistance(lat, lng, centerLat, centerLng)
  return distance <= scope.radiusMeters
}

// Get properties within a specific scope
export async function getPropertiesInScope(
  scope: GeoScope,
  propertyData: PropertyData[]
): Promise<PropertyData[]> {
  return propertyData.filter((property) => {
    if (!property.latitude || !property.longitude) return false
    return isWithinScope([property.latitude, property.longitude], scope)
  })
}

// Enhanced walkability scoring service
export class WalkabilityService {
  private cache: Map<string, WalkabilityScore> = new Map()
  private cacheTTL = 24 * 60 * 60 * 1000 // 24 hours

  async getWalkabilityScore(
    address: string,
    scope: GeoScope
  ): Promise<WalkabilityScore> {
    const cacheKey = `walkability-${address}`
    const cached = this.cache.get(cacheKey)

    if (cached && Date.now() < this.cacheTTL) {
      return cached
    }

    try {
      const score = await this.calculateWalkabilityScore(address, scope)
      this.cache.set(cacheKey, score)
      return score
    } catch (error) {
      console.error('Error calculating walkability score:', error)
      return this.getDefaultWalkabilityScore()
    }
  }

  private async calculateWalkabilityScore(
    address: string,
    scope: GeoScope
  ): Promise<WalkabilityScore> {
    // TODO: Integrate with real APIs (Google Places, OpenStreetMap)
    // For now, calculate based on amenity proximity

    const [lat, lng] = scope.center
    const amenities = HENDERSON_HYPERLOCAL_DATA.amenities

    // Calculate scores for each category
    const shoppingScore = this.calculateCategoryScore(
      amenities.shopping,
      scope,
      40
    )
    const diningScore = this.calculateCategoryScore(amenities.dining, scope, 30)
    const parksScore = this.calculateCategoryScore(amenities.parks, scope, 20)
    const healthcareScore = this.calculateCategoryScore(
      amenities.healthcare,
      scope,
      10
    )

    const overall = Math.min(
      100,
      shoppingScore + diningScore + parksScore + healthcareScore
    )

    return {
      overall,
      categories: {
        shopping: {
          score: shoppingScore,
          nearby: ['The District', 'Target'],
          distance: 500,
        },
        dining: {
          score: diningScore,
          nearby: ['Yard House', 'Brio'],
          distance: 500,
        },
        parks: {
          score: parksScore,
          nearby: ['Green Valley Ranch'],
          distance: 1000,
        },
        schools: { score: 85, nearby: ['Green Valley High'], distance: 800 },
        transit: { score: 70, nearby: ['RTC Bus Routes'], distance: 1000 },
        healthcare: {
          score: healthcareScore,
          nearby: ['Henderson Hospital'],
          distance: 2000,
        },
      },
      insights: [
        'Excellent shopping access within 0.5 miles',
        'Multiple dining options within walking distance',
        'Good school access with high ratings',
        'Healthcare facilities within 2 miles',
      ],
      recommendations: [
        'Consider solar panels for energy efficiency',
        'HOA fees include community amenities',
        'Check school boundaries before purchase',
        'Verify flood zone status',
      ],
    }
  }

  private calculateCategoryScore(
    amenities: GeoScope[],
    scope: GeoScope,
    maxScore: number
  ): number {
    let score = 0
    for (const amenity of amenities) {
      const distance = calculateDistance(
        scope.center[0],
        scope.center[1],
        amenity.center[0],
        amenity.center[1]
      )

      if (distance <= 500) score += maxScore * 0.8
      else if (distance <= 1000) score += maxScore * 0.6
      else if (distance <= 2000) score += maxScore * 0.4
    }
    return Math.min(maxScore, score)
  }

  private getDefaultWalkabilityScore(): WalkabilityScore {
    return {
      overall: 50,
      categories: {
        shopping: { score: 40, nearby: [], distance: 1000 },
        dining: { score: 30, nearby: [], distance: 1200 },
        parks: { score: 20, nearby: [], distance: 1500 },
        schools: { score: 60, nearby: [], distance: 1000 },
        transit: { score: 50, nearby: [], distance: 1500 },
        healthcare: { score: 40, nearby: [], distance: 2000 },
      },
      insights: ['Moderate walkability score'],
      recommendations: [
        'Consider proximity to amenities when choosing location',
      ],
    }
  }
}

// Advanced market intelligence service
export class MarketIntelligenceService {
  private cache: Map<string, MicroMarketPricing> = new Map()
  private cacheTTL = 6 * 60 * 60 * 1000 // 6 hours

  async getMicroMarketPricing(
    address: string,
    scope: GeoScope
  ): Promise<MicroMarketPricing> {
    const cacheKey = `micro-market-${address}`
    const cached = this.cache.get(cacheKey)

    if (cached && Date.now() < this.cacheTTL) {
      return cached
    }

    try {
      const pricing = await this.calculateMicroMarketPricing(address, scope)
      this.cache.set(cacheKey, pricing)
      return pricing
    } catch (error) {
      console.error('Error calculating micro-market pricing:', error)
      return this.getDefaultMicroMarketPricing()
    }
  }

  async getPredictiveTrends(
    address: string,
    scope: GeoScope
  ): Promise<PredictiveMarketTrends> {
    // TODO: Integrate with ML models trained on Henderson market data
    // For now, return sophisticated mock data based on your 15+ years experience

    return {
      shortTerm: {
        next30Days: {
          priceChange: 2.5,
          confidence: 85,
          factors: [
            'Spring buying season approaching',
            'Low inventory in Green Valley',
            'Interest rates stabilizing',
            'Local job market growth',
          ],
        },
        next90Days: {
          priceChange: 4.2,
          confidence: 78,
          factors: [
            'Peak Henderson market season',
            'New development announcements',
            'School year planning',
            'Tourism recovery impact',
          ],
        },
      },
      mediumTerm: {
        next6Months: {
          priceChange: 6.8,
          confidence: 72,
          factors: [
            'Henderson economic growth',
            'Infrastructure improvements',
            'Population migration trends',
            'Climate change considerations',
          ],
          marketConditions: 'seller',
        },
        next12Months: {
          priceChange: 8.5,
          confidence: 68,
          factors: [
            'Long-term Henderson development',
            'Regional economic expansion',
            'Housing supply constraints',
            'Quality of life factors',
          ],
          marketConditions: 'seller',
        },
      },
      longTerm: {
        next2Years: {
          priceChange: 12.3,
          confidence: 65,
          factors: [
            'Henderson becoming premier suburb',
            'Tech company relocations',
            'Climate migration patterns',
            'Infrastructure investments',
          ],
          economicFactors: [
            'Nevada tax advantages',
            'Remote work adoption',
            'Healthcare industry growth',
          ],
          developmentFactors: [
            'Green Valley expansion',
            'New shopping districts',
            'Transportation improvements',
          ],
        },
      },
      riskFactors: {
        high: [
          'Interest rate volatility',
          'Economic recession risk',
          'Climate change impacts',
        ],
        medium: [
          'Supply chain disruptions',
          'Regulatory changes',
          'Market saturation',
        ],
        low: [
          'Local political changes',
          'Natural disaster risk',
          'Technology disruption',
        ],
      },
      opportunities: {
        timing: 'immediate',
        strategy: [
          'Focus on Green Valley premium properties',
          'Target properties near planned developments',
          'Consider properties with solar potential',
          'Look for properties in high-rated school zones',
        ],
        expectedReturn: 15.2, // percentage over 2 years
      },
    }
  }

  private async calculateMicroMarketPricing(
    address: string,
    scope: GeoScope
  ): Promise<MicroMarketPricing> {
    // TODO: Integrate with real MLS data and FUB API
    // For now, calculate sophisticated mock data

    const basePrice = 750000
    const basePricePerSqft = 300

    // Calculate seasonal adjustments based on Henderson market patterns
    const now = new Date()
    const month = now.getMonth()
    const seasonalAdjustments = this.calculateSeasonalAdjustments(month)

    // Calculate block-level variations (500m radius)
    const blockVariation = Math.random() * 0.15 - 0.075 // ±7.5%
    const blockPrice = basePrice * (1 + blockVariation)

    // Calculate street-level premium (same street properties)
    const streetPremium = Math.random() * 0.1 + 0.05 // 5-15% premium

    // Calculate neighborhood trends based on Henderson market data
    const marketTrend = this.determineMarketTrend(scope)

    return {
      blockLevel: {
        averagePrice: Math.round(blockPrice),
        pricePerSqft: Math.round(basePricePerSqft * (1 + blockVariation)),
        priceVariation: Math.round(blockVariation * 100 * 100) / 100,
        compCount: Math.floor(Math.random() * 8) + 3, // 3-10 comps
        lastUpdated: new Date().toISOString(),
      },
      streetLevel: {
        averagePrice: Math.round(blockPrice * (1 + streetPremium)),
        pricePerSqft: Math.round(basePricePerSqft * (1 + streetPremium)),
        priceVariation: Math.round(streetPremium * 100 * 100) / 100,
        compCount: Math.floor(Math.random() * 5) + 2, // 2-6 comps
        streetPremium: Math.round(streetPremium * 100 * 100) / 100,
      },
      neighborhoodLevel: {
        averagePrice: Math.round(basePrice),
        pricePerSqft: basePricePerSqft,
        marketTrend,
        daysOnMarket: Math.floor(Math.random() * 20) + 15, // 15-35 days
        inventoryLevel: this.determineInventoryLevel(scope),
      },
      seasonalAdjustments,
    }
  }

  private calculateSeasonalAdjustments(month: number): {
    spring: number
    summer: number
    fall: number
    winter: number
  } {
    // Henderson market seasonal patterns based on your experience
    return {
      spring: month >= 2 && month <= 4 ? 3.5 : 0, // March-May: +3.5%
      summer: month >= 5 && month <= 7 ? 2.0 : 0, // June-August: +2.0%
      fall: month >= 8 && month <= 10 ? 1.5 : 0, // September-November: +1.5%
      winter: month === 11 || month <= 1 ? -1.0 : 0, // December-February: -1.0%
    }
  }

  private determineMarketTrend(
    scope: GeoScope
  ): 'rising' | 'stable' | 'declining' {
    // Henderson market analysis based on your 15+ years experience
    const trends: Record<string, 'rising' | 'stable' | 'declining'> = {
      greenValley: 'rising',
      anthem: 'stable',
      sevenHills: 'rising',
      whitneyRanch: 'stable',
      stephanieRanch: 'rising',
    }

    // Find which neighborhood this scope belongs to
    for (const [neighborhood, data] of Object.entries(
      HENDERSON_HYPERLOCAL_DATA.neighborhoods
    )) {
      if (isWithinScope(scope.center, data)) {
        return trends[neighborhood] || 'stable'
      }
    }

    return 'stable'
  }

  private determineInventoryLevel(scope: GeoScope): 'low' | 'medium' | 'high' {
    // Henderson inventory analysis
    const inventoryLevels: Record<string, 'low' | 'medium' | 'high'> = {
      greenValley: 'low', // High demand, low supply
      anthem: 'medium', // Balanced market
      sevenHills: 'low', // Luxury market, limited inventory
      whitneyRanch: 'medium', // Family market, steady supply
      stephanieRanch: 'low', // Premium market, low inventory
    }

    for (const [neighborhood, data] of Object.entries(
      HENDERSON_HYPERLOCAL_DATA.neighborhoods
    )) {
      if (isWithinScope(scope.center, data)) {
        return inventoryLevels[neighborhood] || 'medium'
      }
    }

    return 'medium'
  }

  private getDefaultMicroMarketPricing(): MicroMarketPricing {
    return {
      blockLevel: {
        averagePrice: 750000,
        pricePerSqft: 300,
        priceVariation: 0,
        compCount: 0,
        lastUpdated: new Date().toISOString(),
      },
      streetLevel: {
        averagePrice: 750000,
        pricePerSqft: 300,
        priceVariation: 0,
        compCount: 0,
        streetPremium: 0,
      },
      neighborhoodLevel: {
        averagePrice: 750000,
        pricePerSqft: 300,
        marketTrend: 'stable',
        daysOnMarket: 25,
        inventoryLevel: 'medium',
      },
      seasonalAdjustments: {
        spring: 0,
        summer: 0,
        fall: 0,
        winter: 0,
      },
    }
  }
}

// Street-level market comps service with FUB integration
export class StreetCompsService {
  private cache: Map<string, { data: PropertyData[]; timestamp: number }> =
    new Map()
  private cacheTTL = 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds

  async getStreetComps(
    address: string,
    scope: StreetComps['geoScope']
  ): Promise<PropertyData[]> {
    const cacheKey = `street-comps-${address}-${scope.radiusMeters}`
    const cached = this.cache.get(cacheKey)

    if (cached && Date.now() - cached.timestamp < this.cacheTTL) {
      return cached.data
    }

    try {
      // Use FUB API for real property data
      const comps = await this.fetchStreetCompsFromFUB(address, scope)

      this.cache.set(cacheKey, {
        data: comps,
        timestamp: Date.now(),
      })

      return comps
    } catch (error) {
      console.error('Error fetching street comps:', error)
      return []
    }
  }

  private async fetchStreetCompsFromFUB(
    address: string,
    scope: StreetComps['geoScope']
  ): Promise<PropertyData[]> {
    try {
      // Convert scope to FUB filters
      const filters = {
        city: 'Henderson',
        radiusMiles: scope.radiusMeters / 1609.34, // Convert meters to miles
        centerLat: scope.center[0],
        centerLng: scope.center[1],
        status: 'Sold',
      }

      // Get properties from FUB API
      const fubProperties = await fubApiService.getProperties(filters)

      // Convert to PropertyData format and calculate distances
      const comps: PropertyData[] = fubProperties.map((fubProp) => {
        const distance = calculateDistance(
          scope.center[0],
          scope.center[1],
          fubProp.latitude,
          fubProp.longitude
        )
        return convertFUBToPropertyData(fubProp, distance)
      })

      // Sort by distance and limit to scope radius
      return comps
        .filter((comp) => comp.distance && comp.distance <= scope.radiusMeters)
        .sort((a, b) => (a.distance || 0) - (b.distance || 0))
        .slice(0, 10) // Limit to top 10 closest comps
    } catch (error) {
      console.error('Error fetching from FUB API:', error)
      // Fallback to mock data if FUB API fails
      return this.getMockStreetComps(address, scope)
    }
  }

  private getMockStreetComps(
    address: string,
    scope: StreetComps['geoScope']
  ): PropertyData[] {
    // Fallback mock data if FUB API is unavailable
    return [
      {
        id: '1',
        address: '123 Main St',
        salePrice: 750000,
        saleDate: '2024-01-15',
        sqft: 2500,
        bedrooms: 4,
        bathrooms: 3,
        latitude: scope.center[0] + 0.001,
        longitude: scope.center[1] + 0.001,
        distance: 150, // meters
      },
      {
        id: '2',
        address: '456 Main St',
        salePrice: 780000,
        saleDate: '2024-02-01',
        sqft: 2600,
        bedrooms: 4,
        bathrooms: 3.5,
        latitude: scope.center[0] + 0.002,
        longitude: scope.center[1] + 0.002,
        distance: 300, // meters
      },
    ]
  }

  // Get walkability score for an address
  getWalkabilityScore(address: string, scope: GeoScope): number {
    // TODO: Integrate with walkability APIs
    // For now, return a score based on proximity to amenities
    const amenities = HENDERSON_HYPERLOCAL_DATA.amenities
    let score = 50 // Base score

    // Boost score based on nearby amenities
    if (scope.radiusMeters <= 500) score += 30
    if (scope.radiusMeters <= 1000) score += 20

    return Math.min(score, 100)
  }

  // Get local market trends from FUB API
  async getLocalMarketTrends(scope: GeoScope): Promise<{
    pricePerSqft: number
    daysOnMarket: number
    priceChange: number
  }> {
    try {
      const filters = {
        city: 'Henderson',
        radiusMiles: scope.radiusMeters / 1609.34,
        centerLat: scope.center[0],
        centerLng: scope.center[1],
      }

      const marketData = await fubApiService.getMarketData(filters)

      return {
        pricePerSqft: marketData.averagePricePerSqFt,
        daysOnMarket: marketData.averageDaysOnMarket,
        priceChange: marketData.priceTrends.last90Days,
      }
    } catch (error) {
      console.error('Error fetching market trends from FUB:', error)
      // Fallback to default values
      return {
        pricePerSqft: 300,
        daysOnMarket: 18,
        priceChange: 2.5, // percentage
      }
    }
  }
}

// Export singleton instances
export const streetCompsService = new StreetCompsService()
export const walkabilityService = new WalkabilityService()
export const marketIntelligenceService = new MarketIntelligenceService()
