import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Live Henderson Property Listings | Henderson Homes',
  description:
    'Browse real-time MLS listings in Henderson, Nevada. View live property data, market analysis, and neighborhood insights with our advanced real estate technology.',
}

export default function HyperlocalDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
