import MobileNav from './MobileNav'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Henderson Homes
            </h1>
            <div className="flex items-center space-x-2 text-blue-600 font-semibold">
              <span>📞</span>
              <a
                href="tel:7025001064"
                className="hover:text-blue-800 transition-colors"
              >
                (702) 500-1064
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden space-x-6 md:flex">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="/search" className="text-gray-600 hover:text-gray-900">
              Search Homes
            </a>
            <a href="/home-value" className="text-gray-600 hover:text-gray-900">
              Home Value
            </a>
            <div className="relative group">
              <a
                href="/neighborhoods"
                className="text-gray-600 hover:text-gray-900 flex items-center"
              >
                Neighborhoods
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a
                    href="/neighborhoods"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    All Neighborhoods
                  </a>
                  <a
                    href="/neighborhoods/green-valley"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Green Valley
                  </a>
                  <a
                    href="/neighborhoods"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Anthem
                  </a>
                  <a
                    href="/neighborhoods"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Seven Hills
                  </a>
                  <a
                    href="/neighborhoods"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Whitney Ranch
                  </a>
                  <a
                    href="/neighborhoods"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Stephanie Ranch
                  </a>
                </div>
              </div>
            </div>
            <a href="/blog" className="text-gray-600 hover:text-gray-900">
              Market Insights
            </a>
            <a href="/faq" className="text-gray-600 hover:text-gray-900">
              FAQ
            </a>
            <a
              href="/hyperlocal-demo"
              className="text-gray-600 hover:text-gray-900"
            >
              Live Listings
            </a>
            <a
              href="/featured-agents"
              className="text-gray-600 hover:text-gray-900"
            >
              Featured Agents
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>

          {/* Client Component for Mobile Navigation */}
          <MobileNav>
            <NavigationItems />
          </MobileNav>
        </nav>
      </div>
    </header>
  )
}

// Navigation Items Component (Server Component)
function NavigationItems() {
  return (
    <div className="space-y-2">
      <a
        href="/"
        className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
      >
        Home
      </a>
      <a
        href="/search"
        className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
      >
        Search Homes
      </a>
      <a
        href="/home-value"
        className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
      >
        Home Value
      </a>
      <div className="py-3 px-4">
        <div className="text-gray-600 font-medium mb-3">Neighborhoods</div>
        <div className="space-y-2">
          <a
            href="/neighborhoods"
            className="block py-2 pl-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            All Neighborhoods
          </a>
          <a
            href="/neighborhoods/green-valley"
            className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            Green Valley
          </a>
          <a
            href="/neighborhoods"
            className="block py-2 pl-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            Anthem
          </a>
          <a
            href="/neighborhoods"
            className="block py-2 pl-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            Seven Hills
          </a>
          <a
            href="/neighborhoods"
            className="block py-2 pl-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            Whitney Ranch
          </a>
          <a
            href="/neighborhoods"
            className="block py-2 pl-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            Stephanie Ranch
          </a>
        </div>
      </div>
      <a
        href="/blog"
        className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
      >
        Market Insights
      </a>
      <a
        href="/hyperlocal-demo"
        className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
      >
        Live Listings
      </a>
      <a
        href="/faq"
        className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
      >
        FAQ
      </a>
      <a
        href="/featured-agents"
        className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
      >
        Featured Agents
      </a>
      <a
        href="/contact"
        className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
      >
        Contact
      </a>
    </div>
  )
}
