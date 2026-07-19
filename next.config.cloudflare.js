/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Cloudflare optimizations
  output: 'standalone',
  poweredByHeader: false,
  compress: true,

  // Turbopack config (was experimental.turbo pre-v16)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Disable in-memory ISR caching; Cloudflare's edge cache handles this instead.
  // (was experimental.isrMemoryCacheSize pre-14.1, now a top-level option)
  cacheMaxMemorySize: 0,

  // Performance optimizations for Cloudflare
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    optimizeCss: true,
    // Cloudflare-specific optimizations
    workerThreads: false, // Cloudflare handles threading
    cpus: 1, // Single CPU for Cloudflare Workers
  },

  // Image optimization for Cloudflare
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    minimumCacheTTL: 31536000, // 1 year - Cloudflare will handle this
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Cloudflare-specific image settings
    loader: 'default',
    path: '/_next/image',
  },

  // Bundle optimization for Cloudflare
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Webpack optimizations for Cloudflare
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Production optimizations for Cloudflare
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          // Cloudflare-specific chunking
          cloudflare: {
            test: /[\\/]node_modules[\\/](@cloudflare|wrangler)[\\/]/,
            name: 'cloudflare',
            chunks: 'all',
            priority: 10,
          },
        },
      }

      // Cloudflare Worker compatibility
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }

    return config
  },

  // Cloudflare-specific headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Cloudflare-specific headers
          {
            key: 'CF-Cache-Status',
            value: 'DYNAMIC',
          },
          {
            key: 'CF-RAY',
            value: 'cloudflare-ray-id',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=31536000',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'no-cache',
          },
        ],
      },
    ]
  },

  // Cloudflare-specific redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Cloudflare-specific redirects
      {
        source: '/cdn-cgi/(.*)',
        destination: '/404',
        permanent: false,
      },
    ]
  },

  // Cloudflare-specific rewrites
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/robots.txt',
      },
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
      },
      // Cloudflare-specific rewrites
      {
        source: '/_cloudflare/(.*)',
        destination: '/api/cloudflare/$1',
      },
    ]
  },

  // Cloudflare-specific environment variables
  env: {
    CLOUDFLARE_ENABLED: 'true',
    CLOUDFLARE_ZONE_ID: process.env.CLOUDFLARE_ZONE_ID,
    CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID,
  },
}

module.exports = nextConfig
