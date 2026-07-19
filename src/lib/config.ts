// Secure configuration management
// This file centralizes all environment variable access
import { ConfigurationError, logError } from './errors'

// Type-safe environment variable access
const getEnvVar = (key: string, fallback?: string): string | undefined => {
  const value = process.env[key]
  return value || fallback
}

const getEnvVarRequired = (key: string): string => {
  const value = process.env[key]
  if (!value) {
    throw new ConfigurationError(
      `Missing required environment variable: ${key}`,
      [key]
    )
  }
  return value
}

const getEnvVarNumber = (key: string, fallback: number): number => {
  const value = process.env[key]
  if (!value) return fallback

  const parsed = Number.parseInt(value, 10)
  return Number.isNaN(parsed) ? fallback : parsed
}

export const config = {
  // Follow Up Boss API
  followUpBoss: {
    apiKey: getEnvVar('FOLLOW_UP_BOSS_API_KEY'),
    apiUrl: 'https://api.followupboss.com/v1',
  },

  // RealScout API
  realScout: {
    apiKey: getEnvVar('REALSCOUT_API_KEY'),
    agentId: getEnvVar('REALSCOUT_AGENT_ID'),
  },

  // Security
  security: {
    jwtSecret: getEnvVar('JWT_SECRET', 'fallback-secret-change-in-production'),
    encryptionKey: getEnvVar('ENCRYPTION_KEY'),
    rateLimitMax: getEnvVarNumber('RATE_LIMIT_MAX_REQUESTS', 100),
    rateLimitWindow: getEnvVarNumber('RATE_LIMIT_WINDOW_MS', 900000),
  },

  // External Services
  external: {
    googleMapsApiKey: getEnvVar('GOOGLE_MAPS_API_KEY'),
    googleAnalyticsId: getEnvVar('GOOGLE_ANALYTICS_ID'),
  },

  // Environment
  env: getEnvVar('NODE_ENV', 'development'),
  isProduction: getEnvVar('NODE_ENV') === 'production',
  isDevelopment: getEnvVar('NODE_ENV') === 'development',

  // Validation
  validate() {
    const required = ['FOLLOW_UP_BOSS_API_KEY']
    const missing = required.filter((key) => !process.env[key])

    if (missing.length > 0) {
      throw new ConfigurationError(
        `Missing required environment variables: ${missing.join(', ')}`,
        missing
      )
    }
  },
} as const

// Validate configuration on import
// Only validate at runtime, not during build
if (config.isProduction && typeof window === 'undefined') {
  try {
    config.validate()
  } catch (error) {
    // Log error but don't crash the build
    logError(error, { context: 'Configuration validation', phase: 'import' })
  }
}
