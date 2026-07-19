import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Henderson Real Estate FAQ - Common Questions Answered | Dr. Jan Duffy REALTOR',
  description:
    'Get answers to frequently asked questions about Henderson, Nevada real estate. Expert insights on home buying, selling, neighborhoods, schools, and market trends. Call (702) 500-1064.',
  keywords: [
    'Henderson real estate FAQ',
    'Henderson home buying questions',
    'Henderson neighborhoods guide',
    'Henderson schools real estate',
    'Henderson market trends',
    'Green Valley vs Anthem',
    'Henderson investment properties',
    'Henderson home values',
    'Dr. Jan Duffy Henderson',
    'Henderson REALTOR FAQ',
  ],
  authors: [{ name: 'Dr. Jan Duffy - Henderson REALTOR' }],
  creator: 'Dr. Jan Duffy - Henderson Homes',
  publisher: 'Dr. Jan Duffy Real Estate',
  category: 'Real Estate',
  classification: 'Henderson Real Estate FAQ',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'Henderson Real Estate FAQ - Expert Answers to Common Questions',
    description:
      'Comprehensive FAQ covering Henderson home buying, selling, neighborhoods, schools, and market insights',
    url: 'https://searchforhomesinhenderson.com/faq',
    siteName: 'Henderson Homes - Dr. Jan Duffy',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Henderson Real Estate FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henderson Real Estate FAQ | Dr. Jan Duffy REALTOR',
    description: 'Expert answers to common Henderson real estate questions',
    images: [
      'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
    ],
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com/faq',
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Henderson',
    'geo.position': '36.0397;-115.0498',
    ICBM: '36.0397, -115.0498',
    'DC.title': 'Henderson Real Estate FAQ',
    'DC.creator': 'Dr. Jan Duffy',
    'DC.subject': 'Henderson Real Estate FAQ, Nevada Real Estate Questions',
    'DC.description':
      'Comprehensive FAQ covering all aspects of Henderson, Nevada real estate',
    'DC.publisher': 'Dr. Jan Duffy Real Estate',
    'DC.contributor': 'Dr. Jan Duffy',
    'DC.date': '2024',
    'DC.type': 'FAQ',
    'DC.format': 'text/html',
    'DC.identifier': 'https://searchforhomesinhenderson.com/faq',
    'DC.language': 'en',
    'DC.coverage': 'Henderson, Nevada, United States',
    'DC.rights': 'Copyright 2024 Dr. Jan Duffy Real Estate',
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}
