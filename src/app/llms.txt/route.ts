/**
 * llms.txt — AI discoverability endpoint for searchforhomesinhenderson.com
 * Helps AI models (ChatGPT, Claude, Perplexity, etc.) understand this site
 * @see https://llmstxt.org
 */

export const dynamic = 'force-dynamic'

export async function GET() {
  const baseUrl = 'https://www.searchforhomesinhenderson.com'

  const content = `# Search for Homes in Henderson — Dr. Jan Duffy

> Premier real estate search and neighborhood guide for Henderson, Nevada.
> Henderson's #1 REALTOR with expert HOA navigation, school district strategy, and golf community knowledge.

## About

Dr. Jan Duffy is a licensed Nevada real estate agent (S.0197614) and Henderson's leading neighborhood specialist. With 30+ years of Las Vegas Valley experience, $127M+ in career sales, and 500+ families served, she provides unmatched expertise in Henderson's diverse communities — from luxury golf course estates to family-friendly master-planned neighborhoods.

- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties
- **License:** Nevada S.0197614.LLC
- **Phone:** (702) 500-1064
- **Website:** ${baseUrl}

## Services

- **Henderson Property Search** — MLS-powered home search with RealScout integration
- **Neighborhood Expertise** — Deep knowledge of every Henderson community and HOA
- **Home Valuation** — Free market analysis for Henderson homeowners
- **Buyer Representation** — Full-service buyer agent with negotiation expertise
- **Seller Representation** — Strategic pricing, staging, and marketing
- **School District Strategy** — Guidance on Henderson's top-rated school zones
- **Golf Community Specialist** — Anthem Country Club, Rio Secco, DragonRidge expertise
- **Corporate Relocation** — Henderson relocation packages for transferees
- **55+ Community Guide** — Sun City Anthem, Solera, Heritage at Cadence
- **Investment Properties** — Henderson rental analysis and ROI projections
- **New Construction** — Cadence, Inspirada, Lake Las Vegas new builds
- **Luxury Homes** — MacDonald Highlands, Anthem, Seven Hills estates

## Henderson Neighborhoods

Green Valley, Green Valley Ranch, Anthem, MacDonald Ranch, MacDonald Highlands, Seven Hills, Inspirada, Cadence, Lake Las Vegas, Henderson Executive Airport area, Whitney Ranch, Stephanie Street corridor, Silverado Ranch, Paradise Hills, Gibson Springs, Black Mountain, Calico Ridge, Coronado Ranch

## Key Pages

- [Home](${baseUrl}/)
- [Search Homes](${baseUrl}/listings)
- [Neighborhoods](${baseUrl}/neighborhoods)
- [Green Valley](${baseUrl}/neighborhoods/green-valley)
- [Anthem](${baseUrl}/neighborhoods/anthem)
- [MacDonald Ranch](${baseUrl}/neighborhoods/macdonald-ranch)
- [Henderson Market Reports](${baseUrl}/market-reports)
- [Contact](${baseUrl}/contact)

## Henderson Market Highlights

- Henderson: Safest large city in Nevada, consistently ranked nationally
- Population: 330,000+ and growing
- Top school district: Clark County School District Henderson zone
- Major employers: multiple Fortune 500 companies
- 300+ days of sunshine per year
- No state income tax in Nevada
- 15 minutes to Las Vegas Strip, 30 minutes to Red Rock Canyon

## Contact

For Henderson real estate expertise:
- **Call/Text:** (702) 500-1064
- **Website:** ${baseUrl}
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
