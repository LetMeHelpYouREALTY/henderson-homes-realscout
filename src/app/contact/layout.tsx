import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Contact Henderson Homes - Real Estate Experts in Nevada | Dr. Jan Duffy REALTOR',
  description:
    "Contact Dr. Jan Duffy, Henderson's #1 REALTOR for buying, selling, or property valuation services. Local expert helping you navigate the Nevada housing market. Call (702) 500-1064.",
  keywords: [
    'contact Henderson realtor',
    'Nevada real estate agent',
    'Henderson home buying',
    'real estate consultation',
    'Henderson REALTOR',
    'Dr. Jan Duffy',
    'Green Valley realtor',
    'Anthem realtor',
    'Stephanie Ranch realtor',
    'Whitney Ranch realtor',
  ],
  authors: [{ name: 'Dr. Jan Duffy - Henderson REALTOR' }],
  creator: 'Dr. Jan Duffy - Henderson Homes',
  publisher: 'Dr. Jan Duffy Real Estate',
  category: 'Real Estate',
  classification: 'Henderson Real Estate Contact',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  openGraph: {
    title:
      'Contact Henderson Homes - Real Estate Experts in Nevada | Dr. Jan Duffy REALTOR',
    description:
      "Get in touch with Dr. Jan Duffy, Henderson's premier real estate expert",
    url: 'https://searchforhomesinhenderson.com/contact',
    siteName: 'Henderson Homes - Dr. Jan Duffy',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Contact Henderson Homes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Henderson Homes | Dr. Jan Duffy REALTOR',
    description: "Get in touch with Henderson's premier real estate expert",
    images: [
      'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
    ],
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com/contact',
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Henderson',
    'geo.position': '36.0397;-115.0498',
    ICBM: '36.0397, -115.0498',
    'DC.title': 'Contact Henderson Homes - Real Estate Experts',
    'DC.creator': 'Dr. Jan Duffy',
    'DC.subject': 'Henderson Real Estate Contact, Nevada Real Estate',
    'DC.description':
      "Contact Henderson's premier real estate expert for buying, selling, and property services",
    'DC.publisher': 'Dr. Jan Duffy Real Estate',
    'DC.contributor': 'Dr. Jan Duffy',
    'DC.date': '2024',
    'DC.type': 'Contact',
    'DC.format': 'text/html',
    'DC.identifier': 'https://searchforhomesinhenderson.com/contact',
    'DC.language': 'en',
    'DC.coverage': 'Henderson, Nevada, United States',
    'DC.rights': 'Copyright 2024 Dr. Jan Duffy Real Estate',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
