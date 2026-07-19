import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Top Henderson REALTOR | Dr. Jan Duffy - Henderson Real Estate Expert | Henderson Homes',
  description:
    "Dr. Jan Duffy is Henderson's #1 REALTOR specializing in Green Valley, Anthem, Stephanie Ranch & Whitney Ranch. Expert HOA navigation, school district strategy, golf communities & corporate relocation. Call (702) 500-1064 for Henderson real estate expertise.",
  keywords:
    'Henderson REALTOR, top Henderson realtor, Dr. Jan Duffy, Henderson real estate expert, Green Valley realtor, Anthem realtor, Stephanie Ranch realtor, Whitney Ranch realtor, Henderson HOA expert, Henderson school district, golf course communities Henderson',
  openGraph: {
    title:
      'Top Henderson REALTOR | Dr. Jan Duffy - Henderson Real Estate Expert',
    description:
      "Henderson's premier real estate expert specializing in Green Valley, Anthem, Stephanie Ranch & Whitney Ranch. Expert HOA navigation, school districts & golf communities.",
    url: 'https://searchforhomesinhenderson.com/featured-agents',
    siteName: 'Henderson Homes - Dr. Jan Duffy',
    type: 'website',
    locale: 'en_US',
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
    title: 'Top Henderson REALTOR | Dr. Jan Duffy',
    description:
      "Henderson's premier real estate expert with specialized knowledge of all neighborhoods and communities.",
    images: [
      'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
    ],
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com/featured-agents',
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Henderson',
    'geo.position': '36.0397;-115.0498',
    ICBM: '36.0397, -115.0498',
  },
}

export default function FeaturedAgentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
