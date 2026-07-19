import { NextResponse } from 'next/server'

const RSS_URL =
  'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18'

export async function GET() {
  try {
    const response = await fetch(RSS_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; HendersonHomes/1.0)',
      },
      next: { revalidate: 14400 }, // 4 hours
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status}`)
    }

    const xmlText = await response.text()
    const insights = parseRSSFeed(xmlText)

    const marketData = {
      lastUpdated: new Date().toISOString(),
      insights: insights.slice(0, 5), // Get latest 5 insights
      marketStats: extractMarketStats(insights),
    }

    return NextResponse.json(marketData)
  } catch (error) {
    console.error('Error fetching market insights:', error)

    // Return fallback data if RSS fails
    const fallbackData = {
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

    return NextResponse.json(fallbackData)
  }
}

function parseRSSFeed(xmlText: string) {
  // Simple XML parsing for RSS feed
  const items = xmlText.match(/<item>([\s\S]*?)<\/item>/g) || []

  return items.map((item, index) => {
    const title = extractTag(item, 'title')
    const description = extractTag(item, 'description')
    const link = extractTag(item, 'link')
    const pubDate = extractTag(item, 'pubDate')
    const category = extractTag(item, 'category') || 'Market Insights'

    // Extract image from various RSS image fields
    const imageUrl = extractImageUrl(item, description)

    return {
      id: `insight-${index}`,
      title: cleanText(title),
      description: cleanText(description),
      link,
      publishedAt: pubDate,
      category,
      content: cleanText(description),
      imageUrl,
    }
  })
}

function extractImageUrl(
  item: string,
  description: string
): string | undefined {
  // Try to find image in various RSS image fields
  const mediaContentMatch = item.match(
    /<media:content[^>]+type="image\/[^"]+"[^>]+url="([^"]+)"[^>]*>/i
  )
  if (mediaContentMatch) {
    return mediaContentMatch[1]
  }

  const mediaThumbnailMatch = item.match(
    /<media:thumbnail[^>]+url="([^"]+)"[^>]*>/i
  )
  if (mediaThumbnailMatch) {
    return mediaThumbnailMatch[1]
  }

  const enclosureMatch = item.match(
    /<enclosure[^>]+type="image\/[^"]+"[^>]+url="([^"]+)"[^>]*>/i
  )
  if (enclosureMatch) {
    return enclosureMatch[1]
  }

  // Try to extract image from description HTML
  const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i)
  if (imgMatch) {
    return imgMatch[1]
  }

  // Try to find image in content:encoded if available
  const contentEncoded = extractTag(item, 'content:encoded')
  if (contentEncoded) {
    const imgMatch = contentEncoded.match(
      /<img[^>]+src=["']([^"']+)["'][^>]*>/i
    )
    if (imgMatch) {
      return imgMatch[1]
    }
  }

  return undefined
}

function extractTag(xml: string, tagName: string): string {
  const regex = new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`)
  const match = xml.match(regex)
  return match ? match[1] : ''
}

function extractMarketStats(insights: Array<{ content: string }>) {
  const latestContent = insights[0]?.content || ''

  return {
    condoInventory: extractCondoInventory(latestContent),
    priceChange: extractPriceChange(latestContent),
    contractFallThrough: extractContractFallThrough(latestContent),
    downPaymentMyth: extractDownPaymentMyth(latestContent),
  }
}

function extractCondoInventory(content: string): string {
  const match = content.match(/(\d{1,3}(?:,\d{3})*)\s*condos?\s*for\s*sale/i)
  return match
    ? `${match[1]} condos available nationally`
    : '194,000 condos available nationally'
}

function extractPriceChange(content: string): string {
  const match = content.match(
    /prices?\s*(?:dipped|dropped|decreased)\s*([\d.]+)%/i
  )
  return match
    ? `Prices down ${match[1]}% from last year`
    : 'Prices down 1.3% from last year'
}

function extractContractFallThrough(content: string): string {
  const match = content.match(
    /(\d{1,2})%\s*of\s*pending\s*sales?\s*fell\s*through/i
  )
  return match
    ? `${match[1]}% of contracts falling through`
    : '15% of contracts falling through'
}

function extractDownPaymentMyth(content: string): string {
  const match = content.match(
    /(\d{1,2})%\s*think\s*they\s*need\s*at\s*least\s*(\d{1,2})%/i
  )
  return match
    ? `${match[1]}% think they need ${match[2]}% down`
    : '70% think they need 10% down'
}

function cleanText(text: string): string {
  return text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&[^;]+;/g, ' ') // Replace HTML entities
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim()
}
