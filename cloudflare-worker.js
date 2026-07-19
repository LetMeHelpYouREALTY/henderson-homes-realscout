// Cloudflare Worker for SEO and Performance Optimization
// Add this to your Cloudflare Workers dashboard

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const response = await fetch(request)

  // Clone response to modify headers
  const newResponse = new Response(response.body, response)

  // Add SEO and Performance headers
  newResponse.headers.set(
    'X-Robots-Tag',
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
  )
  newResponse.headers.set('X-Content-Type-Options', 'nosniff')
  newResponse.headers.set('X-Frame-Options', 'DENY')
  newResponse.headers.set('X-XSS-Protection', '1; mode=block')
  newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  newResponse.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  )
  newResponse.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )

  // SEO-specific headers for different content types
  if (url.pathname.startsWith('/neighborhoods/')) {
    newResponse.headers.set(
      'X-Robots-Tag',
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1, archive'
    )
    newResponse.headers.set('Link', '</neighborhoods>; rel="canonical"')
  }

  if (url.pathname === '/home-value') {
    newResponse.headers.set(
      'X-Robots-Tag',
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    )
    newResponse.headers.set('Link', '</home-value>; rel="canonical"')
  }

  if (url.pathname === '/search') {
    newResponse.headers.set(
      'X-Robots-Tag',
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    )
    newResponse.headers.set('Link', '</search>; rel="canonical"')
  }

  // Cache optimization headers
  if (
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.startsWith('/images/')
  ) {
    newResponse.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    )
    newResponse.headers.set('CDN-Cache-Control', 'public, max-age=31536000')
  }

  if (url.pathname.startsWith('/api/')) {
    newResponse.headers.set(
      'Cache-Control',
      'no-cache, no-store, must-revalidate'
    )
    newResponse.headers.set('CDN-Cache-Control', 'no-cache')
  }

  // RealScout widget optimization
  if (
    url.pathname.includes('realscout') ||
    url.hostname.includes('realscout')
  ) {
    newResponse.headers.set('Cache-Control', 'public, max-age=1800')
    newResponse.headers.set('CDN-Cache-Control', 'public, max-age=1800')
  }

  // Mobile optimization
  const userAgent = request.headers.get('User-Agent') || ''
  if (
    userAgent.includes('Mobile') ||
    userAgent.includes('Android') ||
    userAgent.includes('iPhone')
  ) {
    newResponse.headers.set('Vary', 'User-Agent')
    newResponse.headers.set('X-Mobile-Optimized', 'true')
  }

  // Geographic optimization for US users
  const country = request.headers.get('CF-IPCountry')
  if (country === 'US') {
    newResponse.headers.set('X-US-Optimized', 'true')
    newResponse.headers.set('Cache-Control', 'public, max-age=86400')
  }

  // Bot detection and optimization
  if (isBot(userAgent)) {
    newResponse.headers.set('X-Bot-Detected', 'true')
    newResponse.headers.set('Cache-Control', 'public, max-age=1800')
  }

  return newResponse
}

function isBot(userAgent) {
  const botPatterns = [
    'bot',
    'crawler',
    'spider',
    'scraper',
    'googlebot',
    'bingbot',
    'slurp',
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'whatsapp',
    'telegrambot',
    'discordbot',
    'slackbot',
  ]

  return botPatterns.some((pattern) =>
    userAgent.toLowerCase().includes(pattern.toLowerCase())
  )
}

// Add event listener for scheduled tasks (SEO monitoring)
addEventListener('scheduled', (event) => {
  event.waitUntil(handleScheduledEvent(event))
})

async function handleScheduledEvent(event) {
  // Daily SEO health check
  if (event.cron === '0 6 * * *') {
    await performSEOHealthCheck()
  }

  // Weekly performance audit
  if (event.cron === '0 8 * * 1') {
    await performPerformanceAudit()
  }
}

async function performSEOHealthCheck() {
  const urls = [
    'https://searchforhomesinhenderson.com/',
    'https://searchforhomesinhenderson.com/neighborhoods',
    'https://searchforhomesinhenderson.com/home-value',
    'https://searchforhomesinhenderson.com/search',
    'https://searchforhomesinhenderson.com/faq',
  ]

  for (const url of urls) {
    try {
      const response = await fetch(url)
      const html = await response.text()

      // Check for critical SEO elements
      const checks = {
        hasTitle: html.includes('<title>'),
        hasMetaDescription: html.includes('name="description"'),
        hasH1: html.includes('<h1'),
        hasCanonical: html.includes('rel="canonical"'),
        hasSchema: html.includes('application/ld+json'),
        hasOpenGraph: html.includes('property="og:'),
        hasTwitterCard: html.includes('name="twitter:'),
        hasStructuredData: html.includes('itemtype="'),
        hasAltText: html.includes('alt="'),
        hasInternalLinks: html.includes('href="/'),
      }

      // Log results for monitoring
      console.log(`SEO Health Check for ${url}:`, checks)
    } catch (error) {
      console.error(`SEO Health Check failed for ${url}:`, error)
    }
  }
}

async function performPerformanceAudit() {
  const urls = [
    'https://searchforhomesinhenderson.com/',
    'https://searchforhomesinhenderson.com/neighborhoods/green-valley',
  ]

  for (const url of urls) {
    try {
      const startTime = Date.now()
      const response = await fetch(url)
      const loadTime = Date.now() - startTime

      console.log(`Performance Audit for ${url}: ${loadTime}ms`)

      // Check response size
      const contentLength = response.headers.get('content-length')
      if (contentLength) {
        console.log(`Content Length: ${contentLength} bytes`)
      }
    } catch (error) {
      console.error(`Performance Audit failed for ${url}:`, error)
    }
  }
}
