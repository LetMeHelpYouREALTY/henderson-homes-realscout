import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Green Valley Henderson Homes for Sale | Live MLS Listings & Buyer Guide | Dr. Jan Duffy',
  description:
    'View current Green Valley Henderson homes for sale with live MLS data. Complete buyer guide: HOA fees ($120-180/month), schools, shopping distances, and neighborhood insights. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'Green Valley Henderson homes for sale',
    'Green Valley MLS listings',
    'Henderson real estate',
    'Green Valley Ranch homes',
    'Green Valley Henderson NV',
    'Green Valley realtor',
    'Dr. Jan Duffy Green Valley',
    'Green Valley HOA fees',
    'Green Valley schools',
    'The District shopping Henderson',
    'Green Valley High School',
    'Green Valley market analysis',
  ],
  authors: [{ name: 'Dr. Jan Duffy - Henderson REALTOR' }],
  creator: 'Dr. Jan Duffy - Henderson Homes',
  publisher: 'Dr. Jan Duffy Real Estate',
  category: 'Real Estate',
  classification: 'Green Valley Henderson Real Estate',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  openGraph: {
    title:
      'Green Valley Henderson Homes for Sale | Live MLS Listings & Buyer Guide',
    description:
      'View current Green Valley Henderson homes for sale with live MLS data. Complete buyer guide with HOA fees, schools, and neighborhood insights.',
    url: 'https://searchforhomesinhenderson.com/neighborhoods/green-valley',
    siteName: 'Henderson Homes - Dr. Jan Duffy',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
        width: 1200,
        height: 630,
        alt: 'Green Valley Henderson Homes for Sale - Dr. Jan Duffy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Valley Henderson Homes for Sale | Dr. Jan Duffy',
    description:
      'Live MLS listings and complete buyer guide for Green Valley Henderson',
    images: [
      'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
    ],
  },
  alternates: {
    canonical:
      'https://searchforhomesinhenderson.com/neighborhoods/green-valley',
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Green Valley, Henderson',
    'geo.position': '36.0397;-115.0498',
    ICBM: '36.0397, -115.0498',
  },
}

export default function GreenValleyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
