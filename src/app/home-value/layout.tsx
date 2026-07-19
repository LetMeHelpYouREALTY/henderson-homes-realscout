import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Henderson Home Value Estimator - What is My Home Worth? | Dr. Jan Duffy REALTOR',
  description:
    'Get an instant home value estimate for your Henderson, Nevada property with Dr. Jan Duffy. Free online valuation tool with local market data and recent comparable sales. Call (702) 500-1064.',
  keywords: [
    'Henderson home value',
    'home worth Henderson',
    'property value Nevada',
    'home valuation Henderson',
    'real estate appraisal',
    'Henderson REALTOR',
    'Dr. Jan Duffy',
    'Henderson property value',
    'Green Valley home value',
    'Anthem home value',
    'Stephanie Ranch home value',
    'Whitney Ranch home value',
  ],
  authors: [{ name: 'Dr. Jan Duffy - Henderson REALTOR' }],
  creator: 'Dr. Jan Duffy - Henderson Homes',
  publisher: 'Dr. Jan Duffy Real Estate',
  category: 'Real Estate',
  classification: 'Henderson Home Valuation',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  openGraph: {
    title:
      'Henderson Home Value Estimator - Free Property Valuation | Dr. Jan Duffy REALTOR',
    description:
      "Discover what your Henderson home is worth with our instant valuation tool and Dr. Jan Duffy's expert guidance",
    url: 'https://searchforhomesinhenderson.com/home-value',
    siteName: 'Henderson Homes - Dr. Jan Duffy',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Henderson Home Value Estimator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henderson Home Value Estimator | Dr. Jan Duffy REALTOR',
    description:
      'Discover what your Henderson home is worth with our instant valuation tool',
    images: [
      'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
    ],
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com/home-value',
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Henderson',
    'geo.position': '36.0397;-115.0498',
    ICBM: '36.0397, -115.0498',
    'DC.title': 'Henderson Home Value Estimator',
    'DC.creator': 'Dr. Jan Duffy',
    'DC.subject': 'Henderson Home Valuation, Nevada Property Value',
    'DC.description':
      'Free home value estimator for Henderson, Nevada properties',
    'DC.publisher': 'Dr. Jan Duffy Real Estate',
    'DC.contributor': 'Dr. Jan Duffy',
    'DC.date': '2024',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://searchforhomesinhenderson.com/home-value',
    'DC.language': 'en',
    'DC.coverage': 'Henderson, Nevada, United States',
    'DC.rights': 'Copyright 2024 Dr. Jan Duffy Real Estate',
  },
}

export default function HomeValueLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
