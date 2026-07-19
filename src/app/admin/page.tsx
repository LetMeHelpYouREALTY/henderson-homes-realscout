import type { Metadata } from 'next'
import ClientIntelligenceDashboard from '@/components/ai/ClientIntelligenceDashboard'
import FUBIntegrationDemo from '@/components/hyperlocal/FUBIntegrationDemo'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Henderson Homes',
  description: 'Lead management and client intelligence dashboard',
}

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <section className="py-8 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">🚀 Admin Dashboard</h1>
            <p className="text-lg opacity-90">
              Lead management • Client intelligence • Market analytics
            </p>
          </div>
        </div>
      </section>

      {/* AI Client Intelligence Dashboard */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                🤖 AI-Powered Client Intelligence
              </h2>
              <p className="text-gray-600">
                Machine learning algorithms that automatically score leads,
                predict client needs, and create personalized experiences.
              </p>
            </div>
            <ClientIntelligenceDashboard />
          </div>
        </div>
      </section>

      {/* Follow Up Boss Integration */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                📊 Follow Up Boss Integration
              </h2>
              <p className="text-gray-600">
                Manage leads, track interactions, and automate follow-ups.
              </p>
            </div>
            <FUBIntegrationDemo />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  📈 View Analytics
                </h3>
                <p className="text-blue-700 mb-4">
                  Check lead performance and conversion metrics
                </p>
                <button
                  type="button"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Open Analytics
                </button>
              </div>

              <div className="bg-green-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-3 text-green-800">
                  👥 Manage Leads
                </h3>
                <p className="text-green-700 mb-4">
                  Review and update lead information
                </p>
                <button
                  type="button"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  Manage Leads
                </button>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-3 text-purple-800">
                  ⚙️ Settings
                </h3>
                <p className="text-purple-700 mb-4">
                  Configure integrations and preferences
                </p>
                <button
                  type="button"
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                >
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
