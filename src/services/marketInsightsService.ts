export interface MarketInsight {
  id: string
  title: string
  description: string
  link: string
  publishedAt: string
  category: string
  content: string
  imageUrl?: string
}

export interface MarketData {
  lastUpdated: string
  insights: MarketInsight[]
  marketStats: {
    condoInventory: string
    priceChange: string
    contractFallThrough: string
    downPaymentMyth: string
  }
}

class MarketInsightsService {
  private readonly RSS_URL =
    'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18'
  private readonly CACHE_DURATION = 1000 * 60 * 60 * 4 // 4 hours

  private cache: {
    data: MarketData | null
    timestamp: number
  } = { data: null, timestamp: 0 }

  async getMarketInsights(): Promise<MarketData> {
    // Check cache first
    if (
      this.cache.data &&
      Date.now() - this.cache.timestamp < this.CACHE_DURATION
    ) {
      return this.cache.data
    }

    try {
      const response = await fetch(this.RSS_URL, {
        next: { revalidate: 14400 }, // 4 hours
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; HendersonHomes/1.0)',
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch RSS feed: ${response.status}`)
      }

      const xmlText = await response.text()
      const insights = this.parseRSSFeed(xmlText)

      const marketData: MarketData = {
        lastUpdated: new Date().toISOString(),
        insights: insights.slice(0, 5), // Get latest 5 insights
        marketStats: this.extractMarketStats(insights),
      }

      // Update cache
      this.cache = {
        data: marketData,
        timestamp: Date.now(),
      }

      return marketData
    } catch (error) {
      console.error('Error fetching market insights:', error)

      // Return fallback data if RSS fails
      return this.getFallbackData()
    }
  }

  private parseRSSFeed(xmlText: string): MarketInsight[] {
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml')

    const items = xmlDoc.querySelectorAll('item')
    const insights: MarketInsight[] = []

    items.forEach((item, index) => {
      const title = item.querySelector('title')?.textContent || ''
      const description = item.querySelector('description')?.textContent || ''
      const link = item.querySelector('link')?.textContent || ''
      const pubDate = item.querySelector('pubDate')?.textContent || ''
      const category =
        item.querySelector('category')?.textContent || 'Market Insights'

      // Extract image from various RSS image fields
      const imageUrl = this.extractImageUrl(item, description)

      insights.push({
        id: `insight-${index}`,
        title: this.cleanText(title),
        description: this.cleanText(description),
        link,
        publishedAt: pubDate,
        category,
        content: this.cleanText(description),
        imageUrl,
      })
    })

    return insights
  }

  private extractImageUrl(
    item: Element,
    description: string
  ): string | undefined {
    // Try to find image in various RSS image fields
    const mediaContent = item.querySelector('media\\:content, content')
    const mediaThumbnail = item.querySelector('media\\:thumbnail, thumbnail')
    const enclosure = item.querySelector('enclosure')

    // Check for media:content with image type
    if (mediaContent) {
      const type = mediaContent.getAttribute('type') || ''
      if (type.startsWith('image/')) {
        const url = mediaContent.getAttribute('url')
        if (url) return url
      }
    }

    // Check for media:thumbnail
    if (mediaThumbnail) {
      const url = mediaThumbnail.getAttribute('url')
      if (url) return url
    }

    // Check for enclosure with image type
    if (enclosure) {
      const type = enclosure.getAttribute('type') || ''
      if (type.startsWith('image/')) {
        const url = enclosure.getAttribute('url')
        if (url) return url
      }
    }

    // Try to extract image from description HTML
    const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i)
    if (imgMatch) {
      return imgMatch[1]
    }

    // Try to find image in content:encoded if available
    const contentEncoded = item.querySelector('content\\:encoded, content')
    if (contentEncoded?.textContent) {
      const imgMatch = contentEncoded.textContent.match(
        /<img[^>]+src=["']([^"']+)["'][^>]*>/i
      )
      if (imgMatch) {
        return imgMatch[1]
      }
    }

    return undefined
  }

  private extractMarketStats(
    insights: MarketInsight[]
  ): MarketData['marketStats'] {
    // Extract key market statistics from the latest insights
    const latestContent = insights[0]?.content || ''

    return {
      condoInventory: this.extractCondoInventory(latestContent),
      priceChange: this.extractPriceChange(latestContent),
      contractFallThrough: this.extractContractFallThrough(latestContent),
      downPaymentMyth: this.extractDownPaymentMyth(latestContent),
    }
  }

  private extractCondoInventory(content: string): string {
    const match = content.match(/(\d{1,3}(?:,\d{3})*)\s*condos?\s*for\s*sale/i)
    return match
      ? `${match[1]} condos available nationally`
      : '194,000 condos available nationally'
  }

  private extractPriceChange(content: string): string {
    const match = content.match(
      /prices?\s*(?:dipped|dropped|decreased)\s*([\d.]+)%/i
    )
    return match
      ? `Prices down ${match[1]}% from last year`
      : 'Prices down 1.3% from last year'
  }

  private extractContractFallThrough(content: string): string {
    const match = content.match(
      /(\d{1,2})%\s*of\s*pending\s*sales?\s*fell\s*through/i
    )
    return match
      ? `${match[1]}% of contracts falling through`
      : '15% of contracts falling through'
  }

  private extractDownPaymentMyth(content: string): string {
    const match = content.match(
      /(\d{1,2})%\s*think\s*they\s*need\s*at\s*least\s*(\d{1,2})%/i
    )
    return match
      ? `${match[1]}% think they need ${match[2]}% down`
      : '70% think they need 10% down'
  }

  private cleanText(text: string): string {
    return text
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&[^;]+;/g, ' ') // Replace HTML entities
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim()
  }

  private getFallbackData(): MarketData {
    return {
      lastUpdated: new Date().toISOString(),
      insights: [
        {
          id: 'fallback-1',
          title: 'Condo Market Offers Buyer Opportunities',
          description:
            'With 194,000 condos available nationally, buyers have more choices and negotiating power.',
          link: 'https://www.simplifyingthemarket.com',
          publishedAt: new Date().toISOString(),
          category: 'Market Insights',
          content:
            'Condo inventory is at the second highest level in three years, giving buyers more options and less competition.',
          imageUrl:
            'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center',
        },
      ],
      marketStats: {
        condoInventory: '194,000 condos available nationally',
        priceChange: 'Prices down 1.3% from last year',
        contractFallThrough: '15% of contracts falling through',
        downPaymentMyth: '70% think they need 10% down',
      },
    }
  }
}

export const marketInsightsService = new MarketInsightsService()
