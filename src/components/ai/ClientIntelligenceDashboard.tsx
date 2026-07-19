'use client'

import { useState, useEffect } from 'react'
import {
  aiClientIntelligenceService,
  type ClientProfile,
  type LeadScore,
  type PredictiveInsights,
} from '@/services/aiClientIntelligence'

interface ClientIntelligenceDashboardProps {
  className?: string
}

export default function ClientIntelligenceDashboard({
  className = '',
}: ClientIntelligenceDashboardProps) {
  const [clients, setClients] = useState<ClientProfile[]>([])
  const [selectedClient, setSelectedClient] = useState<ClientProfile | null>(
    null
  )
  const [leadScore, setLeadScore] = useState<LeadScore | null>(null)
  const [predictions, setPredictions] = useState<PredictiveInsights | null>(
    null
  )
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<
    'overview' | 'clients' | 'analytics' | 'automation'
  >('overview')

  // Mock market data for demonstration
  const mockMarketData = {
    localInventory: 23,
    priceTrends: 4.2,
    marketConditions: 'buyer' as const,
    competitionLevel: 'medium' as const,
  }

  useEffect(() => {
    loadDemoClients()
  }, [])

  const loadDemoClients = async () => {
    setLoading(true)
    try {
      // Create demo client profiles
      const demoClients = await Promise.all([
        aiClientIntelligenceService.createClientProfile({
          email: 'john.smith@email.com',
          firstName: 'John',
          lastName: 'Smith',
          phone: '(702) 555-0101',
          location: {
            latitude: 36.0711,
            longitude: -115.0673,
            neighborhood: 'Green Valley',
            zipCode: '89074',
          },
          preferences: {
            priceRange: [600000, 900000],
            propertyTypes: ['Single Family'],
            bedrooms: [3, 4],
            bathrooms: [2, 3],
            mustHaves: ['Solar Panels', 'Large Backyard'],
            dealBreakers: ['HOA > $200', 'No Garage'],
          },
          behavior: {
            searchFrequency: 5,
            propertyViews: 12,
            contactActions: 3,
            lastActivity: new Date(),
            engagementScore: 85,
          },
          marketContext: {
            localInventory: 23,
            priceTrends: 4.2,
            marketConditions: 'buyer',
            competitionLevel: 'medium',
          },
        }),
        aiClientIntelligenceService.createClientProfile({
          email: 'sarah.johnson@email.com',
          firstName: 'Sarah',
          lastName: 'Johnson',
          phone: '(702) 555-0102',
          location: {
            latitude: 36.0897,
            longitude: -115.0589,
            neighborhood: 'Anthem',
            zipCode: '89052',
          },
          preferences: {
            priceRange: [800000, 1200000],
            propertyTypes: ['Single Family'],
            bedrooms: [4, 5],
            bathrooms: [3, 4],
            mustHaves: ['Mountain Views', 'Golf Course Access'],
            dealBreakers: ['Small Lot', 'No Pool'],
          },
          behavior: {
            searchFrequency: 3,
            propertyViews: 8,
            contactActions: 1,
            lastActivity: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
            engagementScore: 45,
          },
          marketContext: {
            localInventory: 15,
            priceTrends: 6.8,
            marketConditions: 'seller',
            competitionLevel: 'low',
          },
        }),
        aiClientIntelligenceService.createClientProfile({
          email: 'mike.davis@email.com',
          firstName: 'Mike',
          lastName: 'Davis',
          phone: '(702) 555-0103',
          location: {
            latitude: 36.0822,
            longitude: -115.0514,
            neighborhood: 'Seven Hills',
            zipCode: '89052',
          },
          preferences: {
            priceRange: [1000000, 1500000],
            propertyTypes: ['Single Family'],
            bedrooms: [5, 6],
            bathrooms: [4, 5],
            mustHaves: ['Chef Kitchen', 'Home Theater', 'Wine Cellar'],
            dealBreakers: ['No Mountain Views', 'Small Garage'],
          },
          behavior: {
            searchFrequency: 8,
            propertyViews: 25,
            contactActions: 5,
            lastActivity: new Date(),
            engagementScore: 95,
          },
          marketContext: {
            localInventory: 8,
            priceTrends: 8.5,
            marketConditions: 'seller',
            competitionLevel: 'low',
          },
        }),
      ])

      setClients(demoClients)
      if (demoClients.length > 0) {
        setSelectedClient(demoClients[0])
        await loadClientIntelligence(demoClients[0].id)
      }
    } catch (error) {
      console.error('Error loading demo clients:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadClientIntelligence = async (clientId: string) => {
    try {
      const [score, insights] = await Promise.all([
        aiClientIntelligenceService.scoreLead(clientId, mockMarketData),
        aiClientIntelligenceService.predictClientNeeds(clientId),
      ])
      setLeadScore(score)
      setPredictions(insights)
    } catch (error) {
      console.error('Error loading client intelligence:', error)
    }
  }

  const handleClientSelect = async (client: ClientProfile) => {
    setSelectedClient(client)
    await loadClientIntelligence(client.id)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'immediate':
        return 'bg-red-100 text-red-800'
      case 'high':
        return 'bg-orange-100 text-orange-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'immediate':
        return 'bg-red-500'
      case 'high':
        return 'bg-orange-500'
      case 'medium':
        return 'bg-yellow-500'
      case 'low':
        return 'bg-green-500'
      default:
        return 'bg-gray-500'
    }
  }

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 rounded-t-lg">
        <h2 className="text-2xl font-bold mb-2">
          AI-Powered Client Intelligence
        </h2>
        <p className="text-blue-100">
          Hyperlocal lead scoring • Predictive analytics • Automated
          personalization
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'clients', label: 'Client Profiles', icon: '👥' },
            { id: 'analytics', label: 'AI Analytics', icon: '🤖' },
            { id: 'automation', label: 'Automation', icon: '⚡' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {clients.length}
                </div>
                <div className="text-sm text-blue-800">Active Clients</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {
                    clients.filter((c) => c.followUpPriority === 'immediate')
                      .length
                  }
                </div>
                <div className="text-sm text-green-800">
                  Immediate Follow-up
                </div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  {
                    clients.filter((c) => c.behavior.engagementScore > 80)
                      .length
                  }
                </div>
                <div className="text-sm text-orange-800">High Engagement</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {clients.filter((c) => c.aiScore > 70).length}
                </div>
                <div className="text-sm text-purple-800">AI Hot Leads</div>
              </div>
            </div>

            {/* Top Clients */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">
                Top AI-Scored Clients
              </h3>
              <div className="space-y-3">
                {clients
                  .sort((a, b) => b.aiScore - a.aiScore)
                  .slice(0, 3)
                  .map((client) => (
                    <div
                      key={client.id}
                      className="flex items-center justify-between bg-white p-3 rounded-lg"
                    >
                      <div>
                        <div className="font-medium">
                          {client.firstName} {client.lastName}
                        </div>
                        <div className="text-sm text-gray-600">
                          {client.location.neighborhood}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(client.followUpPriority)}`}
                        >
                          {client.followUpPriority}
                        </div>
                        <div className="text-lg font-bold text-blue-600">
                          {client.aiScore}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="space-y-6">
            {/* Client List */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Client Profiles</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {clients.map((client) => (
                    <div
                      key={client.id}
                      onClick={() => handleClientSelect(client)}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedClient?.id === client.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">
                            {client.firstName} {client.lastName}
                          </div>
                          <div className="text-sm text-gray-600">
                            {client.email}
                          </div>
                          <div className="text-sm text-gray-600">
                            {client.location.neighborhood}
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`inline-block w-3 h-3 rounded-full ${getUrgencyColor(client.followUpPriority)}`}
                          ></div>
                          <div className="text-sm text-gray-600 mt-1">
                            {client.followUpPriority}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Details */}
              {selectedClient && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Client Details</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium text-gray-700">Contact</div>
                      <div className="text-sm">
                        {selectedClient.firstName} {selectedClient.lastName}
                      </div>
                      <div className="text-sm text-gray-600">
                        {selectedClient.email}
                      </div>
                      {selectedClient.phone && (
                        <div className="text-sm text-gray-600">
                          {selectedClient.phone}
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="font-medium text-gray-700">Location</div>
                      <div className="text-sm">
                        {selectedClient.location.neighborhood},{' '}
                        {selectedClient.location.zipCode}
                      </div>
                    </div>

                    <div>
                      <div className="font-medium text-gray-700">
                        Preferences
                      </div>
                      <div className="text-sm">
                        $
                        {selectedClient.preferences.priceRange[0].toLocaleString()}{' '}
                        - $
                        {selectedClient.preferences.priceRange[1].toLocaleString()}
                      </div>
                      <div className="text-sm">
                        {selectedClient.preferences.bedrooms.join(', ')} beds,{' '}
                        {selectedClient.preferences.bathrooms.join(', ')} baths
                      </div>
                    </div>

                    <div>
                      <div className="font-medium text-gray-700">AI Score</div>
                      <div className="text-2xl font-bold text-blue-600">
                        {selectedClient.aiScore}
                      </div>
                      <div className="text-sm text-gray-600">
                        Next Action: {selectedClient.nextBestAction}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && selectedClient && (
          <div className="space-y-6">
            {/* Lead Score */}
            {leadScore && (
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">AI Lead Score</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {leadScore.overall}/100
                    </div>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(leadScore.urgency)}`}
                    >
                      {leadScore.urgency} priority
                    </div>
                  </div>

                  <div className="space-y-3">
                    {Object.entries(leadScore.factors).map(
                      ([factor, score]) => (
                        <div
                          key={factor}
                          className="flex items-center justify-between"
                        >
                          <div className="text-sm font-medium text-gray-700 capitalize">
                            {factor.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${score}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium w-8">
                              {score}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Insights */}
                <div className="mt-6">
                  <h4 className="font-medium text-gray-700 mb-3">
                    AI Insights
                  </h4>
                  <div className="space-y-2">
                    {leadScore.insights.map((insight, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">💡</span>
                        <span className="text-sm text-gray-700">{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mt-6">
                  <h4 className="font-medium text-gray-700 mb-3">
                    AI Recommendations
                  </h4>
                  <div className="space-y-2">
                    {leadScore.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span className="text-sm text-gray-700">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Predictive Insights */}
            {predictions && (
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Predictive Analytics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Next Best Action
                    </div>
                    <div className="text-lg font-semibold text-blue-600">
                      {predictions.nextBestAction}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Predicted Timeline
                    </div>
                    <div className="text-lg font-semibold text-green-600">
                      {predictions.predictedTimeline}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Confidence
                    </div>
                    <div className="text-lg font-semibold text-purple-600">
                      {predictions.confidence}%
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">
                      Key Factors
                    </h4>
                    <div className="space-y-2">
                      {predictions.keyFactors.map((factor, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">🔍</span>
                          <span className="text-sm text-gray-700">
                            {factor}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">
                      Market Opportunities
                    </h4>
                    <div className="space-y-2">
                      {predictions.marketOpportunities.map(
                        (opportunity, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <span className="text-green-500 mt-1">🎯</span>
                            <span className="text-sm text-gray-700">
                              {opportunity}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'automation' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">
                Automation Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-lg">🤖</span>
                    </div>
                    <div>
                      <div className="font-medium">AI Lead Scoring</div>
                      <div className="text-sm text-gray-600">
                        Automatic lead prioritization
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-lg">📊</span>
                    </div>
                    <div>
                      <div className="font-medium">Predictive Analytics</div>
                      <div className="text-sm text-gray-600">
                        Client needs forecasting
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-lg">⚡</span>
                    </div>
                    <div>
                      <div className="font-medium">Smart Follow-ups</div>
                      <div className="text-sm text-gray-600">
                        Automated communication
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-lg">🎯</span>
                    </div>
                    <div>
                      <div className="font-medium">Personalized Content</div>
                      <div className="text-sm text-gray-600">
                        Dynamic recommendations
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-lg">📱</span>
                    </div>
                    <div>
                      <div className="font-medium">Multi-Channel</div>
                      <div className="text-sm text-gray-600">
                        Email, SMS, push notifications
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 text-lg">📈</span>
                    </div>
                    <div>
                      <div className="font-medium">Performance Tracking</div>
                      <div className="text-sm text-gray-600">
                        ROI and conversion metrics
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Automation Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600">✅</span>
                    <span className="font-medium">AI Lead Scoring</span>
                  </div>
                  <span className="text-sm text-green-600">Active</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600">✅</span>
                    <span className="font-medium">Predictive Analytics</span>
                  </div>
                  <span className="text-sm text-green-600">Active</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-yellow-600">🔄</span>
                    <span className="font-medium">Automated Follow-ups</span>
                  </div>
                  <span className="text-sm text-yellow-600">Configuring</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600">⏳</span>
                    <span className="font-medium">
                      Multi-Channel Integration
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">Pending</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
