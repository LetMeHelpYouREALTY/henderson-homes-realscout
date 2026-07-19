// Follow Up Boss API Service for real-time property data
// This service integrates with FUB to provide live market data for the hyperlocal platform

export interface FUBProperty {
  id: string
  address: string
  city: string
  state: string
  zip: string
  price: number
  bedrooms: number
  bathrooms: number
  squareFeet: number
  propertyType: string
  status: 'Active' | 'Pending' | 'Sold' | 'Expired'
  listDate: string
  soldDate?: string
  soldPrice?: number
  daysOnMarket: number
  latitude: number
  longitude: number
  neighborhood: string
  schoolDistrict: string
  hoaFees?: number
  lotSize?: number
  yearBuilt?: number
  features: string[]
  images: string[]
  description: string
  agentId: string
  agentName: string
  officeId: string
  officeName: string
}

export interface FUBMarketData {
  totalProperties: number
  averagePrice: number
  averagePricePerSqFt: number
  averageDaysOnMarket: number
  priceRange: {
    min: number
    max: number
    median: number
  }
  inventoryByStatus: {
    active: number
    pending: number
    sold: number
    expired: number
  }
  priceTrends: {
    last30Days: number
    last90Days: number
    last6Months: number
    last12Months: number
  }
  marketConditions: 'buyer' | 'seller' | 'balanced'
}

export interface FUBFilters {
  city?: string
  neighborhood?: string
  priceMin?: number
  priceMax?: number
  bedrooms?: number
  bathrooms?: number
  propertyType?: string
  status?: string
  radiusMiles?: number
  centerLat?: number
  centerLng?: number
}

export class FUBApiService {
  private apiKey: string
  private baseUrl: string
  private cache: Map<string, { data: FUBProperty[]; timestamp: number }> =
    new Map()
  private cacheTTL = 15 * 60 * 1000 // 15 minutes

  constructor() {
    this.apiKey =
      process.env.FUB_API_KEY || 'fka_0N4mnNW7Q94BLjEMKvoC0Lz9bYtIH0dU5c'
    this.baseUrl = 'https://api.followupboss.com/v1'
  }

  // Get properties with advanced filtering
  async getProperties(filters: FUBFilters = {}): Promise<FUBProperty[]> {
    const cacheKey = `properties-${JSON.stringify(filters)}`
    const cached = this.cache.get(cacheKey)

    if (cached && Date.now() - cached.timestamp < this.cacheTTL) {
      return cached.data
    }

    try {
      const properties = await this.fetchPropertiesFromFUB(filters)

      // Cache the results
      this.cache.set(cacheKey, {
        data: properties,
        timestamp: Date.now(),
      })

      return properties
    } catch (error) {
      console.error('Error fetching properties from FUB:', error)
      return []
    }
  }

  // Get market data for a specific area
  async getMarketData(filters: FUBFilters): Promise<FUBMarketData> {
    const properties = await this.getProperties(filters)

    if (properties.length === 0) {
      return this.getDefaultMarketData()
    }

    const prices = properties.map((p) => p.price).filter((p) => p > 0)
    const soldProperties = properties.filter((p) => p.status === 'Sold')
    const activeProperties = properties.filter((p) => p.status === 'Active')

    const averagePrice =
      prices.length > 0 ? prices.reduce((a, b) => a + b, 0) / prices.length : 0
    const averagePricePerSqFt =
      properties
        .filter((p) => p.price > 0 && p.squareFeet > 0)
        .reduce((sum, p) => sum + p.price / p.squareFeet, 0) /
      properties.filter((p) => p.price > 0 && p.squareFeet > 0).length

    const averageDaysOnMarket =
      activeProperties.length > 0
        ? activeProperties.reduce((sum, p) => sum + p.daysOnMarket, 0) /
          activeProperties.length
        : 0

    // Calculate price trends (simplified - in real implementation, you'd compare historical data)
    const priceTrends = this.calculatePriceTrends(properties)

    return {
      totalProperties: properties.length,
      averagePrice: Math.round(averagePrice),
      averagePricePerSqFt: Math.round(averagePricePerSqFt),
      averageDaysOnMarket: Math.round(averageDaysOnMarket),
      priceRange: {
        min: Math.min(...prices),
        max: Math.max(...prices),
        median: this.calculateMedian(prices),
      },
      inventoryByStatus: {
        active: activeProperties.length,
        pending: properties.filter((p) => p.status === 'Pending').length,
        sold: soldProperties.length,
        expired: properties.filter((p) => p.status === 'Expired').length,
      },
      priceTrends,
      marketConditions: this.determineMarketConditions(properties, priceTrends),
    }
  }

  // Get properties within a specific geographic radius
  async getPropertiesInRadius(
    centerLat: number,
    centerLng: number,
    radiusMiles: number,
    additionalFilters: Partial<FUBFilters> = {}
  ): Promise<FUBProperty[]> {
    const allProperties = await this.getProperties(additionalFilters)

    return allProperties.filter((property) => {
      if (!property.latitude || !property.longitude) return false

      const distance = this.calculateDistance(
        centerLat,
        centerLng,
        property.latitude,
        property.longitude
      )

      return distance <= radiusMiles
    })
  }

  // Get recent sales for market comps
  async getRecentSales(
    filters: FUBFilters,
    daysBack = 90
  ): Promise<FUBProperty[]> {
    const properties = await this.getProperties(filters)
    const cutoffDate = new Date()
    cutoffDate.setDate(cutoffDate.getDate() - daysBack)

    return properties
      .filter((p) => p.status === 'Sold' && p.soldDate)
      .filter((p) => {
        // Type guard: ensure soldDate exists before creating Date object
        if (!p.soldDate) return false
        return new Date(p.soldDate) >= cutoffDate
      })
      .sort((a, b) => {
        // Type guard: ensure soldDate exists before creating Date object
        if (!a.soldDate || !b.soldDate) return 0
        return new Date(b.soldDate).getTime() - new Date(a.soldDate).getTime()
      })
  }

  // Get market trends for predictive analysis
  async getMarketTrends(
    filters: FUBFilters,
    timeframes: number[] = [30, 90, 180, 365]
  ): Promise<Record<number, { priceChange: number; confidence: number }>> {
    const trends: Record<number, { priceChange: number; confidence: number }> =
      {}

    for (const days of timeframes) {
      const recentSales = await this.getRecentSales(filters, days)
      const olderSales = await this.getRecentSales(filters, days * 2)

      if (recentSales.length > 0 && olderSales.length > 0) {
        const recentAvg =
          recentSales.reduce((sum, p) => sum + (p.soldPrice || 0), 0) /
          recentSales.length
        const olderAvg =
          olderSales.reduce((sum, p) => sum + (p.soldPrice || 0), 0) /
          olderSales.length

        const priceChange =
          olderAvg > 0 ? ((recentAvg - olderAvg) / olderAvg) * 100 : 0
        const confidence = Math.min(95, Math.max(50, recentSales.length * 5)) // Confidence based on data points

        trends[days] = {
          priceChange: Math.round(priceChange * 100) / 100,
          confidence,
        }
      }
    }

    return trends
  }

  // Private methods
  private async fetchPropertiesFromFUB(
    filters: FUBFilters
  ): Promise<FUBProperty[]> {
    // TODO: Implement actual FUB API calls
    // For now, return sophisticated mock data that matches FUB structure

    const mockProperties: FUBProperty[] = [
      {
        id: '1',
        address: '123 Green Valley Parkway',
        city: 'Henderson',
        state: 'NV',
        zip: '89074',
        price: 750000,
        bedrooms: 4,
        bathrooms: 3,
        squareFeet: 2500,
        propertyType: 'Single Family',
        status: 'Sold',
        listDate: '2024-01-15',
        soldDate: '2024-02-01',
        soldPrice: 745000,
        daysOnMarket: 17,
        latitude: 36.0711,
        longitude: -115.0673,
        neighborhood: 'Green Valley',
        schoolDistrict: 'CCSD',
        hoaFees: 150,
        lotSize: 6000,
        yearBuilt: 2010,
        features: [
          'Solar Panels',
          'Granite Countertops',
          'Stainless Appliances',
        ],
        images: ['https://example.com/image1.jpg'],
        description: 'Beautiful Green Valley home with mountain views',
        agentId: 'agent123',
        agentName: 'Dr. Jan Duffy',
        officeId: 'office456',
        officeName: 'Henderson Homes',
      },
      {
        id: '2',
        address: '456 Anthem Hills Drive',
        city: 'Henderson',
        state: 'NV',
        zip: '89052',
        price: 680000,
        bedrooms: 3,
        bathrooms: 2.5,
        squareFeet: 2200,
        propertyType: 'Single Family',
        status: 'Active',
        listDate: '2024-03-01',
        soldDate: undefined,
        soldPrice: undefined,
        daysOnMarket: 25,
        latitude: 36.0897,
        longitude: -115.0589,
        neighborhood: 'Anthem',
        schoolDistrict: 'CCSD',
        hoaFees: 120,
        lotSize: 5500,
        yearBuilt: 2012,
        features: ['Mountain Views', 'Open Floor Plan', 'Large Backyard'],
        images: ['https://example.com/image2.jpg'],
        description: 'Stunning Anthem home with panoramic views',
        agentId: 'agent123',
        agentName: 'Dr. Jan Duffy',
        officeId: 'office456',
        officeName: 'Henderson Homes',
      },
      {
        id: '3',
        address: '789 Seven Hills Blvd',
        city: 'Henderson',
        state: 'NV',
        zip: '89052',
        price: 1200000,
        bedrooms: 5,
        bathrooms: 4.5,
        squareFeet: 3800,
        propertyType: 'Single Family',
        status: 'Active',
        listDate: '2024-02-15',
        soldDate: undefined,
        soldPrice: undefined,
        daysOnMarket: 42,
        latitude: 36.0822,
        longitude: -115.0514,
        neighborhood: 'Seven Hills',
        schoolDistrict: 'CCSD',
        hoaFees: 200,
        lotSize: 8000,
        yearBuilt: 2015,
        features: ['Golf Course View', "Chef's Kitchen", 'Home Theater'],
        images: ['https://example.com/image3.jpg'],
        description: 'Luxury Seven Hills estate with golf course views',
        agentId: 'agent123',
        agentName: 'Dr. Jan Duffy',
        officeId: 'office456',
        officeName: 'Henderson Homes',
      },
    ]

    // Apply filters
    let filtered = mockProperties

    if (filters.city) {
      filtered = filtered.filter((p) =>
        p.city.toLowerCase().includes(filters.city?.toLowerCase() || '')
      )
    }

    if (filters.neighborhood) {
      filtered = filtered.filter((p) =>
        p.neighborhood
          .toLowerCase()
          .includes(filters.neighborhood?.toLowerCase() || '')
      )
    }

    if (filters.priceMin) {
      filtered = filtered.filter((p) => p.price >= (filters.priceMin || 0))
    }

    if (filters.priceMax) {
      filtered = filtered.filter(
        (p) => p.price <= (filters.priceMax || Number.POSITIVE_INFINITY)
      )
    }

    if (filters.bedrooms) {
      filtered = filtered.filter((p) => p.bedrooms >= (filters.bedrooms || 0))
    }

    if (filters.bathrooms) {
      filtered = filtered.filter((p) => p.bathrooms >= (filters.bathrooms || 0))
    }

    if (filters.propertyType) {
      filtered = filtered.filter((p) => p.propertyType === filters.propertyType)
    }

    if (filters.status) {
      filtered = filtered.filter((p) => p.status === filters.status)
    }

    // Apply geographic radius filter if specified
    if (filters.radiusMiles && filters.centerLat && filters.centerLng) {
      filtered = filtered.filter((property) => {
        const distance = this.calculateDistance(
          filters.centerLat || 0,
          filters.centerLng || 0,
          property.latitude,
          property.longitude
        )
        return distance <= (filters.radiusMiles || 0)
      })
    }

    return filtered
  }

  private calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 3959 // Earth's radius in miles
    const dLat = ((lat2 - lat1) * Math.PI) / 180
    const dLon = ((lon2 - lon1) * Math.PI) / 180
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  private calculateMedian(numbers: number[]): number {
    if (numbers.length === 0) return 0
    const sorted = numbers.sort((a, b) => a - b)
    const middle = Math.floor(sorted.length / 2)
    return sorted.length % 2 === 0
      ? (sorted[middle - 1] + sorted[middle]) / 2
      : sorted[middle]
  }

  private calculatePriceTrends(properties: FUBProperty[]): {
    last30Days: number
    last90Days: number
    last6Months: number
    last12Months: number
  } {
    // Simplified price trend calculation
    // In real implementation, you'd compare historical data points
    return {
      last30Days: 2.5,
      last90Days: 4.2,
      last6Months: 6.8,
      last12Months: 8.5,
    }
  }

  private determineMarketConditions(
    properties: FUBProperty[],
    priceTrends: {
      last30Days: number
      last90Days: number
      last6Months: number
      last12Months: number
    }
  ): 'buyer' | 'seller' | 'balanced' {
    const activeInventory = properties.filter(
      (p) => p.status === 'Active'
    ).length
    const avgDaysOnMarket =
      properties
        .filter((p) => p.status === 'Active')
        .reduce((sum, p) => sum + p.daysOnMarket, 0) /
      properties.filter((p) => p.status === 'Active').length

    // Market conditions logic based on inventory and days on market
    if (activeInventory < 10 && avgDaysOnMarket < 20) return 'seller'
    if (activeInventory > 25 && avgDaysOnMarket > 45) return 'buyer'
    return 'balanced'
  }

  private getDefaultMarketData(): FUBMarketData {
    return {
      totalProperties: 0,
      averagePrice: 0,
      averagePricePerSqFt: 0,
      averageDaysOnMarket: 0,
      priceRange: { min: 0, max: 0, median: 0 },
      inventoryByStatus: { active: 0, pending: 0, sold: 0, expired: 0 },
      priceTrends: {
        last30Days: 0,
        last90Days: 0,
        last6Months: 0,
        last12Months: 0,
      },
      marketConditions: 'balanced',
    }
  }
}

// Export singleton instance
export const fubApiService = new FUBApiService()
