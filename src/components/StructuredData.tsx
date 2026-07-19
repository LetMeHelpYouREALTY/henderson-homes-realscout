export interface StructuredDataProps {
  type: 'RealEstateAgent' | 'RealEstateListing' | 'LocalBusiness' | 'WebPage'
  data: Record<string, unknown>
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseData),
      }}
    />
  )
}

// Predefined structured data for common pages
export const realEstateAgentData = {
  name: 'Dr. Jan Duffy',
  jobTitle: 'REALTOR',
  description:
    'Expert Henderson, Nevada real estate agent specializing in residential properties',
  url: 'https://searchforhomesinhenderson.com',
  telephone: '+1-702-500-1064',
  email: 'jan@hendersonhomes.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Henderson',
    addressLocality: 'Henderson',
    addressRegion: 'NV',
    postalCode: '89000',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.0397,
    longitude: -115.0498,
  },
  areaServed: {
    '@type': 'City',
    name: 'Henderson',
    addressRegion: 'NV',
    addressCountry: 'US',
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 36.0397,
      longitude: -115.0498,
    },
    geoRadius: '50000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Henderson Real Estate Listings',
    description: 'Homes for sale in Henderson, Nevada',
  },
  sameAs: [
    'https://www.facebook.com/hendersonhomes',
    'https://www.linkedin.com/in/dr-jan-duffy',
  ],
}

export const localBusinessData = {
  name: 'Dr. Jan Duffy Real Estate',
  description: 'Premier real estate services in Henderson, Nevada',
  url: 'https://searchforhomesinhenderson.com',
  telephone: '+1-702-500-1064',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Henderson',
    addressLocality: 'Henderson',
    addressRegion: 'NV',
    postalCode: '89000',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.0397,
    longitude: -115.0498,
  },
  areaServed: 'Henderson, Nevada',
  serviceType: 'Real Estate Services',
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-17:00',
}

export const webPageData = (pageData: {
  name: string
  description: string
  url: string
  mainEntity?: Record<string, unknown>
}) => ({
  name: pageData.name,
  description: pageData.description,
  url: pageData.url,
  mainEntity: pageData.mainEntity,
  publisher: {
    '@type': 'Organization',
    name: 'Dr. Jan Duffy Real Estate',
    url: 'https://searchforhomesinhenderson.com',
  },
  author: {
    '@type': 'Person',
    name: 'Dr. Jan Duffy',
    jobTitle: 'REALTOR',
    worksFor: {
      '@type': 'Organization',
      name: 'Dr. Jan Duffy Real Estate',
    },
  },
})
