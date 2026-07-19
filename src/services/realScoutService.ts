interface RealScoutListing {
  id: string
  address: string
  price: number
  beds: number
  baths: number
  sqft: number
  lotSize: number
  propertyType: string
  status: string
  daysOnMarket: number
  imageUrl: string
  description: string
  features: string[]
  neighborhood: string
  lastUpdated: string
}

interface NeighborhoodData {
  name: string
  currentListings: RealScoutListing[]
  marketStats: {
    totalListings: number
    averagePrice: number
    medianPrice: number
    averageDaysOnMarket: number
    priceRange: {
      min: number
      max: number
    }
    propertyTypes: Record<string, number>
  }
  lastUpdated: string
  nextUpdate: string
}

class RealScoutService {
  private cache: Map<string, NeighborhoodData> = new Map()
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

  /**
   * Fetch neighborhood data from RealScout
   * Updates once per day to avoid rate limiting
   */
  async getNeighborhoodData(neighborhood: string): Promise<NeighborhoodData> {
    const cacheKey = `neighborhood-${neighborhood.toLowerCase()}`
    const cached = this.cache.get(cacheKey)

    // Check if cache is still valid
    if (cached && this.isCacheValid(cached.lastUpdated)) {
      return cached
    }

    try {
      // Fetch fresh data from RealScout
      const data = await this.fetchRealScoutData(neighborhood)

      // Cache the new data
      this.cache.set(cacheKey, data)

      return data
    } catch (error) {
      console.error(`Error fetching RealScout data for ${neighborhood}:`, error)

      // Return cached data if available, even if expired
      if (cached) {
        return cached
      }

      // Return fallback data
      return this.getFallbackData(neighborhood)
    }
  }

  /**
   * Fetch data from RealScout API
   * This simulates the RealScout feed data
   */
  private async fetchRealScoutData(
    neighborhood: string
  ): Promise<NeighborhoodData> {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Generate realistic data based on neighborhood
    const listings = this.generateRealisticListings(neighborhood)
    const marketStats = this.calculateMarketStats(listings)

    return {
      name: neighborhood,
      currentListings: listings,
      marketStats,
      lastUpdated: new Date().toISOString(),
      nextUpdate: new Date(Date.now() + this.CACHE_DURATION).toISOString(),
    }
  }

  /**
   * Generate realistic listings based on neighborhood characteristics
   */
  private generateRealisticListings(neighborhood: string): RealScoutListing[] {
    const baseData = this.getNeighborhoodBaseData(neighborhood)
    const listings: RealScoutListing[] = []

    // Generate 8-15 listings per neighborhood
    const listingCount = Math.floor(Math.random() * 8) + 8

    for (let i = 0; i < listingCount; i++) {
      const price = this.generatePrice(baseData.priceRange)
      const sqft = this.generateSquareFootage(price, baseData.priceRange)
      const beds = this.generateBedrooms(price, baseData.priceRange)
      const baths = this.generateBathrooms(beds)

      listings.push({
        id: `rs-${neighborhood.toLowerCase()}-${i + 1}`,
        address: this.generateAddress(neighborhood, i + 1),
        price,
        beds,
        baths,
        sqft,
        lotSize: this.generateLotSize(sqft, baseData.lotSizes),
        propertyType: this.generatePropertyType(price, baseData.priceRange),
        status: 'For Sale',
        daysOnMarket: Math.floor(Math.random() * 45) + 1,
        imageUrl: this.generateImageUrl(neighborhood, i + 1),
        description: this.generateDescription(neighborhood, beds, baths, sqft),
        features: this.generateFeatures(price, baseData.priceRange),
        neighborhood,
        lastUpdated: new Date().toISOString(),
      })
    }

    // Sort by price
    return listings.sort((a, b) => a.price - b.price)
  }

  /**
   * Get base data for each neighborhood
   */
  private getNeighborhoodBaseData(neighborhood: string) {
    const data = {
      greenValley: {
        priceRange: { min: 750000, max: 1200000 },
        lotSizes: { min: 5000, max: 15000 },
        luxury: true,
      },
      anthem: {
        priceRange: { min: 650000, max: 950000 },
        lotSizes: { min: 6000, max: 20000 },
        luxury: true,
      },
      stephanieRanch: {
        priceRange: { min: 450000, max: 650000 },
        lotSizes: { min: 4000, max: 12000 },
        luxury: false,
      },
      whitneyRanch: {
        priceRange: { min: 400000, max: 600000 },
        lotSizes: { min: 3500, max: 10000 },
        luxury: false,
      },
    }

    return (
      data[neighborhood.toLowerCase() as keyof typeof data] || data.greenValley
    )
  }

  /**
   * Generate realistic price based on neighborhood
   */
  private generatePrice(range: { min: number; max: number }): number {
    const variance = 0.15 // 15% variance
    const basePrice = (range.min + range.max) / 2
    const adjustment = (Math.random() - 0.5) * variance * basePrice
    return Math.round(basePrice + adjustment)
  }

  /**
   * Generate square footage based on price
   */
  private generateSquareFootage(
    price: number,
    range: { min: number; max: number }
  ): number {
    const pricePerSqft = (price / (range.min + range.max)) * 2 * 200 // Adjust for realistic ratio
    const baseSqft = price / pricePerSqft
    const variance = 0.2 // 20% variance
    const adjustment = (Math.random() - 0.5) * variance * baseSqft
    return Math.round(baseSqft + adjustment)
  }

  /**
   * Generate realistic bedroom count
   */
  private generateBedrooms(
    price: number,
    range: { min: number; max: number }
  ): number {
    if (price > 800000) {
      return Math.random() > 0.3 ? 4 : 5 // 70% chance of 4 beds, 30% chance of 5
    }
    if (price > 600000) {
      return Math.random() > 0.4 ? 3 : 4 // 60% chance of 3 beds, 40% chance of 4
    }
    return Math.random() > 0.5 ? 3 : 4 // 50% chance of 3 beds, 50% chance of 4
  }

  /**
   * Generate bathroom count based on bedrooms
   */
  private generateBathrooms(beds: number): number {
    if (beds >= 4) {
      return Math.random() > 0.3 ? 3 : 4 // 70% chance of 3 baths, 30% chance of 4
    }
    return Math.random() > 0.4 ? 2 : 3 // 60% chance of 2 baths, 40% chance of 4
  }

  /**
   * Generate lot size based on square footage
   */
  private generateLotSize(
    sqft: number,
    range: { min: number; max: number }
  ): number {
    const ratio = sqft / 2000 // Assume 2000 sqft = 5000 sqft lot
    const baseLotSize = ratio * 5000
    const variance = 0.3 // 30% variance
    const adjustment = (Math.random() - 0.5) * variance * baseLotSize
    return Math.round(baseLotSize + adjustment)
  }

  /**
   * Generate property type based on price
   */
  private generatePropertyType(
    price: number,
    range: { min: number; max: number }
  ): string {
    if (price > 800000) {
      return Math.random() > 0.1 ? 'SFR' : 'MF' // 90% SFR, 10% MF
    }
    return Math.random() > 0.2 ? 'SFR' : 'MF' // 80% SFR, 20% MF
  }

  /**
   * Generate realistic address
   */
  private generateAddress(neighborhood: string, index: number): string {
    const streets = [
      'Paseo Verde',
      'Green Valley',
      'Valley View',
      'Mountain Vista',
      'Sunset Ridge',
    ]
    const street = streets[index % streets.length]
    const number = Math.floor(Math.random() * 9000) + 1000
    return `${number} ${street} Pkwy, Henderson, NV 89074`
  }

  /**
   * Generate image URL (placeholder for now)
   */
  private generateImageUrl(neighborhood: string, index: number): string {
    return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center&auto=format&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }

  /**
   * Generate property description
   */
  private generateDescription(
    neighborhood: string,
    beds: number,
    baths: number,
    sqft: number
  ): string {
    const descriptions = [
      `Beautiful ${beds}-bedroom, ${baths}-bathroom home in prestigious ${neighborhood}.`,
      `Stunning ${sqft.toLocaleString()} sq ft property featuring ${beds} bedrooms and ${baths} bathrooms.`,
      `Luxurious ${neighborhood} residence with ${beds} bedrooms, ${baths} bathrooms, and ${sqft.toLocaleString()} sq ft.`,
      `Exceptional ${neighborhood} home offering ${beds} bedrooms, ${baths} bathrooms, and ${sqft.toLocaleString()} sq ft of living space.`,
    ]
    return descriptions[Math.floor(Math.random() * descriptions.length)]
  }

  /**
   * Generate property features
   */
  private generateFeatures(
    price: number,
    range: { min: number; max: number }
  ): string[] {
    const baseFeatures = ['Central Air', 'Garage', 'Updated Kitchen']
    const luxuryFeatures = [
      'Golf Course View',
      'Pool',
      'Gourmet Kitchen',
      'Master Suite',
      'Walk-in Closet',
    ]
    const standardFeatures = ['Fenced Yard', 'Storage', 'Laundry Room']

    const features = [...baseFeatures]

    if (price > 800000) {
      features.push(
        ...luxuryFeatures.slice(0, Math.floor(Math.random() * 3) + 2)
      )
    } else {
      features.push(
        ...standardFeatures.slice(0, Math.floor(Math.random() * 2) + 1)
      )
    }

    return features
  }

  /**
   * Calculate market statistics from listings
   */
  private calculateMarketStats(
    listings: RealScoutListing[]
  ): NeighborhoodData['marketStats'] {
    if (listings.length === 0) {
      return {
        totalListings: 0,
        averagePrice: 0,
        medianPrice: 0,
        averageDaysOnMarket: 0,
        priceRange: { min: 0, max: 0 },
        propertyTypes: {},
      }
    }

    const prices = listings.map((l) => l.price).sort((a, b) => a - b)
    const propertyTypes = listings.reduce(
      (acc, listing) => {
        acc[listing.propertyType] = (acc[listing.propertyType] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )

    return {
      totalListings: listings.length,
      averagePrice: Math.round(
        prices.reduce((a, b) => a + b, 0) / prices.length
      ),
      medianPrice: prices[Math.floor(prices.length / 2)],
      averageDaysOnMarket: Math.round(
        listings.reduce((a, b) => a + b.daysOnMarket, 0) / listings.length
      ),
      priceRange: {
        min: Math.min(...prices),
        max: Math.max(...prices),
      },
      propertyTypes,
    }
  }

  /**
   * Check if cached data is still valid
   */
  private isCacheValid(lastUpdated: string): boolean {
    const lastUpdateTime = new Date(lastUpdated).getTime()
    const currentTime = Date.now()
    return currentTime - lastUpdateTime < this.CACHE_DURATION
  }

  /**
   * Get fallback data when API fails
   */
  private getFallbackData(neighborhood: string): NeighborhoodData {
    return {
      name: neighborhood,
      currentListings: [],
      marketStats: {
        totalListings: 0,
        averagePrice: 0,
        medianPrice: 0,
        averageDaysOnMarket: 0,
        priceRange: { min: 0, max: 0 },
        propertyTypes: {},
      },
      lastUpdated: new Date().toISOString(),
      nextUpdate: new Date(Date.now() + this.CACHE_DURATION).toISOString(),
    }
  }

  /**
   * Clear cache (useful for testing or manual refresh)
   */
  clearCache(): void {
    this.cache.clear()
  }

  /**
   * Get cache status for debugging
   */
  getCacheStatus(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    }
  }
}

export const realScoutService = new RealScoutService()
export type { RealScoutListing, NeighborhoodData }
