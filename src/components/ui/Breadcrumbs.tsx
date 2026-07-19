import Link from 'next/link'

export default function Breadcrumbs() {
  return (
    <nav className="bg-gray-50 py-4 border-b">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <Link
              href="/neighborhoods"
              className="hover:text-blue-600 transition-colors"
            >
              Neighborhoods
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Green Valley</span>
          </li>
        </ol>
      </div>
    </nav>
  )
}
