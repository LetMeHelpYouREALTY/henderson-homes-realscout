import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin | Henderson Homes',
  description: 'Administrative dashboard for Henderson Real Estate',
}

// Basic authentication check - in production, implement proper auth
function isAuthenticated(): boolean {
  // TODO: Implement proper authentication (JWT, session, etc.)
  // For now, this is a placeholder that always returns false
  // You should implement proper authentication here
  return false
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if user is authenticated
  if (!isAuthenticated()) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              🔒 Admin Access Required
            </h1>
            <p className="text-gray-600 mb-6">
              This area is restricted to authorized personnel only.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
              <p className="font-semibold mb-2">
                ⚠️ Authentication Not Implemented
              </p>
              <p>
                To access the admin dashboard, you need to implement proper
                authentication. Contact your developer to set up secure access.
              </p>
            </div>
            <a
              href="/"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    )
  }

  return <div className="admin-layout">{children}</div>
}
