import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import Header from '@/components/Header'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default:
      'Henderson Homes - Premier Real Estate in Henderson, Nevada | Dr. Jan Duffy REALTOR',
    template: '%s | Henderson Homes - Dr. Jan Duffy REALTOR',
  },
  description:
    "Find your dream home in Henderson, Nevada with Dr. Jan Duffy, Henderson's #1 REALTOR. Expert HOA navigation, school district strategy, golf communities & corporate relocation. Call (702) 500-1064.",
  keywords: [
    'Henderson homes',
    'Nevada real estate',
    'Henderson properties',
    'luxury homes',
    'real estate agent',
    'home values',
    'property search',
    'Henderson REALTOR',
    'Dr. Jan Duffy',
    'Green Valley realtor',
    'Anthem realtor',
    'Stephanie Ranch realtor',
    'Whitney Ranch realtor',
    'Henderson HOA expert',
    'Henderson school district',
    'golf course communities Henderson',
    'Henderson home buying',
    'Henderson home selling',
  ],
  authors: [{ name: 'Dr. Jan Duffy - Henderson REALTOR' }],
  creator: 'Dr. Jan Duffy - Henderson Homes',
  publisher: 'Dr. Jan Duffy Real Estate',
  category: 'Real Estate',
  classification: 'Henderson Real Estate Services',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  metadataBase: new URL('https://searchforhomesinhenderson.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://searchforhomesinhenderson.com',
    title: 'Henderson Homes - Premier Real Estate with Dr. Jan Duffy REALTOR',
    description:
      "Find your dream home in Henderson, Nevada with Henderson's #1 REALTOR. Expert HOA navigation, school districts & golf communities.",
    siteName: 'Henderson Homes - Dr. Jan Duffy',
    images: [
      {
        url: 'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Top Henderson REALTOR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henderson Homes - Premier Real Estate with Dr. Jan Duffy',
    description:
      "Find your dream home in Henderson, Nevada with Henderson's #1 REALTOR",
    images: [
      'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
    ],
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com',
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Henderson',
    'geo.position': '36.0397;-115.0498',
    ICBM: '36.0397, -115.0498',
    'DC.title': 'Henderson Homes - Premier Real Estate in Henderson, Nevada',
    'DC.creator': 'Dr. Jan Duffy',
    'DC.subject': 'Henderson Real Estate, Nevada Homes, Dr. Jan Duffy REALTOR',
    'DC.description':
      "Find your dream home in Henderson, Nevada with Dr. Jan Duffy, Henderson's #1 REALTOR",
    'DC.publisher': 'Dr. Jan Duffy Real Estate',
    'DC.contributor': 'Dr. Jan Duffy',
    'DC.date': '2024',
    'DC.type': 'Website',
    'DC.format': 'text/html',
    'DC.identifier': 'https://searchforhomesinhenderson.com',
    'DC.language': 'en',
    'DC.coverage': 'Henderson, Nevada, United States',
    'DC.rights': 'Copyright 2024 Dr. Jan Duffy Real Estate',
  },
}

const realEstateSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': 'https://searchforhomesinhenderson.com/#realestateagent',
  name: 'Dr. Jan Duffy - Henderson Homes',
  alternateName: 'Henderson Homes',
  url: 'https://searchforhomesinhenderson.com',
  logo: 'https://searchforhomesinhenderson.com/logo.png',
  image: 'https://searchforhomesinhenderson.com/agent-photo.jpg',
  description:
    'Premier real estate services in Henderson, Nevada specializing in Green Valley, Anthem, Stephanie Ranch, and Whitney Ranch communities. Expert guidance from Dr. Jan Duffy.',
  founder: {
    '@type': 'Person',
    name: 'Dr. Jan Duffy',
    jobTitle: 'Real Estate Agent',
    telephone: '(702) 500-1064',
    email: 'info@hendersonhomes.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2470 Paseo Verde Parkway, Suite 135',
      addressLocality: 'Henderson',
      addressRegion: 'Nevada',
      addressCountry: 'US',
      postalCode: '89074',
    },
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2470 Paseo Verde Parkway, Suite 135',
    addressLocality: 'Henderson',
    addressRegion: 'Nevada',
    addressCountry: 'US',
    postalCode: '89074',
  },
  telephone: '(702) 500-1064',
  email: 'info@hendersonhomes.com',
  faxNumber: '(702) 500-1065',
  areaServed: [
    {
      '@type': 'City',
      name: 'Henderson',
      containedInPlace: {
        '@type': 'State',
        name: 'Nevada',
      },
    },
    {
      '@type': 'Neighborhood',
      name: 'Green Valley',
      containedInPlace: {
        '@type': 'City',
        name: 'Henderson',
      },
    },
    {
      '@type': 'Neighborhood',
      name: 'Anthem',
      containedInPlace: {
        '@type': 'City',
        name: 'Henderson',
      },
    },
    {
      '@type': 'Neighborhood',
      name: 'Stephanie Ranch',
      containedInPlace: {
        '@type': 'City',
        name: 'Henderson',
      },
    },
    {
      '@type': 'Neighborhood',
      name: 'Whitney Ranch',
      containedInPlace: {
        '@type': 'City',
        name: 'Henderson',
      },
    },
  ],
  serviceType: [
    'Home Buying',
    'Home Selling',
    'Market Analysis',
    'Investment Properties',
    'Relocation Services',
    'Property Management',
    'Real Estate Consultation',
  ],
  priceRange: '$400,000 - $1,200,000',
  paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Bank Transfer'],
  currenciesAccepted: 'USD',
  openingHours: 'Mo-Fr 09:00-18:00, Sa 10:00-16:00',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Real Estate Services',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Home Buying Services',
        description:
          'Expert buyer representation with market analysis, negotiation, and closing support',
        provider: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
        },
      },
      {
        '@type': 'Service',
        name: 'Home Selling Services',
        description:
          'Professional marketing, staging consultation, and pricing strategy for maximum value',
        provider: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
        },
      },
      {
        '@type': 'Service',
        name: 'Market Analysis',
        description:
          'Comprehensive property valuations and Henderson market trend reports',
        provider: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
        },
      },
      {
        '@type': 'Service',
        name: 'Investment Property Services',
        description:
          'Rental property analysis and investment strategy consultation',
        provider: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Sarah Johnson',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody:
        'Dr. Jan Duffy helped us find our dream home in Green Valley. Her expertise in the Henderson market is unmatched!',
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Michael Chen',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody:
        'Professional, knowledgeable, and always available. Dr. Duffy made our home buying experience seamless.',
    },
  ],
  knowsAbout: [
    'Henderson Real Estate Market',
    'Green Valley Properties',
    'Anthem Community',
    'Stephanie Ranch Homes',
    'Whitney Ranch Real Estate',
    'Nevada Property Law',
    'Real Estate Investment',
    'Property Valuation',
  ],
  award: [
    'Top 1% Real Estate Agent',
    'Best of Henderson Award',
    'Excellence in Customer Service',
    'Million Dollar Club Member',
  ],
  foundingDate: '2010',
  numberOfEmployees: '5',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Henderson Homes',
  },
}

const neighborhoodSchema = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  '@id': 'https://searchforhomesinhenderson.com/#neighborhoods',
  name: 'Henderson Nevada Neighborhoods',
  description: 'Premier residential communities in Henderson, Nevada',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Henderson',
    addressRegion: 'Nevada',
    addressCountry: 'US',
  },
  containsPlace: [
    {
      '@type': 'Neighborhood',
      name: 'Green Valley',
      description:
        'Luxury master-planned community with championship golf and upscale shopping',
      priceRange: '$750,000 - $1,200,000',
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Golf Course',
          value: 'Anthem Country Club',
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Shopping',
          value: 'The District at Green Valley',
        },
      ],
    },
    {
      '@type': 'Neighborhood',
      name: 'Anthem',
      description:
        'Hillside community with stunning views and resort-style amenities',
      priceRange: '$650,000 - $950,000',
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Views',
          value: 'Mountain and Valley Views',
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Amenities',
          value: 'Resort-style Living',
        },
      ],
    },
    {
      '@type': 'Neighborhood',
      name: 'Stephanie Ranch',
      description:
        'Family-friendly with excellent schools and recreational facilities',
      priceRange: '$450,000 - $650,000',
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Schools',
          value: 'Top-rated Clark County Schools',
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Recreation',
          value: 'Whitney Mesa Recreation Area',
        },
      ],
    },
    {
      '@type': 'Neighborhood',
      name: 'Whitney Ranch',
      description:
        'Established community with mature landscaping and affordability',
      priceRange: '$400,000 - $600,000',
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Landscaping',
          value: 'Mature Trees and Gardens',
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Affordability',
          value: 'Best Value in Henderson',
        },
      ],
    },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://searchforhomesinhenderson.com/#localbusiness',
  name: 'Henderson Homes - Dr. Jan Duffy',
  alternateName: 'Henderson Homes',
  url: 'https://searchforhomesinhenderson.com',
  logo: 'https://searchforhomesinhenderson.com/logo.png',
  image: 'https://searchforhomesinhenderson.com/office.jpg',
  description:
    'Premier real estate services in Henderson, Nevada. Expert guidance from Dr. Jan Duffy.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2470 Paseo Verde Parkway, Suite 135',
    addressLocality: 'Henderson',
    addressRegion: 'Nevada',
    addressCountry: 'US',
    postalCode: '89074',
  },
  telephone: '(702) 500-1064',
  email: 'info@hendersonhomes.com',
  faxNumber: '(702) 500-1065',
  openingHours: 'Mo-Fr 09:00-18:00, Sa 10:00-16:00',
  paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Bank Transfer'],
  currenciesAccepted: 'USD',
  priceRange: '$$',
  areaServed: {
    '@type': 'City',
    name: 'Henderson',
    containedInPlace: {
      '@type': 'State',
      name: 'Nevada',
    },
  },
  hasMap:
    'https://maps.google.com/?q=2470+Paseo+Verde+Parkway+Suite+135+Henderson+NV+89074',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.0397,
    longitude: -115.0498,
  },
  sameAs: [
    'https://www.facebook.com/hendersonhomes',
    'https://www.linkedin.com/in/dr-jan-duffy',
    'https://www.instagram.com/hendersonhomes',
  ],
}

const enhancedLocalSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Henderson Homes',
  url: 'https://www.searchforhomesinhenderson.com',
  telephone: '(702) 555-0123',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2470 Paseo Verde Parkway, Suite 150',
    addressLocality: 'Henderson',
    addressRegion: 'Nevada',
    postalCode: '89074',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '36.0711',
    longitude: '-115.0673',
  },
  openingHours: ['Mo-Fr 08:00-18:00'],
  priceRange: '$400,000-$1,200,000',
  areaServed: [
    { '@type': 'Place', name: 'Green Valley, Henderson, NV' },
    { '@type': 'Place', name: 'Anthem, Henderson, NV' },
    { '@type': 'Place', name: 'Seven Hills, Henderson, NV' },
  ],
  hasCredential: 'Nevada Real Estate License',
  knowsAbout: [
    'Henderson Nevada Real Estate',
    'Green Valley Homes',
    'Anthem Properties',
    'Henderson Luxury Real Estate',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
  },
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />

        {/* Critical CSS */}
        <link rel="stylesheet" href="/critical.css" />

        {/* Resource hints */}
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />
        <link
          rel="preload"
          href="/_next/static/chunks/webpack.js"
          as="script"
        />

        {/* SEO Meta Tags */}
        <meta name="author" content="Dr. Jan Duffy" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Local Business Meta Tags */}
        <meta name="geo.region" content="US-NV" />
        <meta name="geo.placename" content="Henderson" />
        <meta name="geo.position" content="36.0397;-115.0498" />
        <meta name="ICBM" content="36.0397, -115.0498" />

        {/* Business Information */}
        <meta
          name="business:contact_data:street_address"
          content="2470 Paseo Verde Parkway, Suite 135"
        />
        <meta name="business:contact_data:locality" content="Henderson" />
        <meta name="business:contact_data:region" content="Nevada" />
        <meta name="business:contact_data:postal_code" content="89074" />
        <meta
          name="business:contact_data:country_name"
          content="United States"
        />
        <meta
          name="business:contact_data:phone_number"
          content="(702) 500-1064"
        />

        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Script
          id={`inp-optimization-${Date.now()}`}
          strategy="afterInteractive"
        >
          {`
            // INP optimization for August 2025
            if ('requestIdleCallback' in window) {
              requestIdleCallback(() => {
                // Defer non-critical JavaScript
                document.querySelectorAll('[data-defer]').forEach(el => {
                  el.removeAttribute('data-defer')
                })
              })
            }
          `}
        </Script>
        <style>{`
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }
          
          realscout-simple-search {
            --rs-ss-font-primary-color: #726a6d;
            --rs-ss-searchbar-border-color: #1d6fbd;
            --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
            --rs-ss-widget-width: 500px !important;
          }
        `}</style>
      </head>
      <body className={inter.className}>
        <PerformanceMonitor />
        <Script
          id={`real-estate-schema-${Date.now()}`}
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(realEstateSchema)}
        </Script>
        <Script
          id={`neighborhood-schema-${Date.now()}`}
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(neighborhoodSchema)}
        </Script>
        <Script
          id={`local-business-schema-${Date.now()}`}
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(localBusinessSchema)}
        </Script>
        <Script
          id={`enhanced-local-schema-${Date.now()}`}
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(enhancedLocalSchema)}
        </Script>
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Henderson Homes</h3>
                <p className="text-gray-300 text-sm">
                  Premier Henderson Real Estate
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">📍 Office Location</h4>
                <p className="text-gray-300 text-sm">
                  2470 Paseo Verde Parkway, Suite 150
                </p>
                <p className="text-gray-300 text-sm">Henderson, NV 89074</p>
                <p className="text-gray-300 text-sm">(702) 555-0123</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">🏘️ Service Areas</h4>
                <p className="text-gray-300 text-sm">
                  Green Valley • Anthem • Seven Hills
                </p>
                <p className="text-gray-300 text-sm">
                  Whitney Ranch • Stephanie Ranch
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">📧 Contact</h4>
                <p className="text-gray-300 text-sm">
                  info@searchforhomesinhenderson.com
                </p>
                <p className="text-gray-300 text-sm">
                  Nevada License #S.0197614
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
