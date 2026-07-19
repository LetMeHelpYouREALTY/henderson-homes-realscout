import Script from 'next/script'

type NeighborhoodBreadcrumbSchemaProps = {
  neighborhoodName: string
  neighborhoodPath: string
}

export default function NeighborhoodBreadcrumbSchema({
  neighborhoodName,
  neighborhoodPath,
}: NeighborhoodBreadcrumbSchemaProps) {
  const baseUrl = 'https://searchforhomesinhenderson.com'
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Henderson Neighborhoods',
        item: `${baseUrl}/neighborhoods`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: neighborhoodName,
        item: `${baseUrl}${neighborhoodPath}`,
      },
    ],
  }

  return (
    <Script
      id={`breadcrumb-schema-${neighborhoodPath.replace(/\//g, '-')}`}
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(breadcrumbData)}
    </Script>
  )
}
