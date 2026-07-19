// Modern error handling utilities for the Henderson Real Estate platform

export class ConfigurationError extends Error {
  constructor(
    message: string,
    public readonly missingVars?: string[]
  ) {
    super(message)
    this.name = 'ConfigurationError'
  }
}

export class APIError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 500,
    public readonly code?: string
  ) {
    super(message)
    this.name = 'APIError'
  }
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public readonly field?: string
  ) {
    super(message)
    this.name = 'ValidationError'
  }
}

// Type-safe error handling utilities
export const isError = (error: unknown): error is Error => {
  return error instanceof Error
}

export const getErrorMessage = (error: unknown): string => {
  if (isError(error)) {
    return error.message
  }
  if (typeof error === 'string') {
    return error
  }
  return 'An unknown error occurred'
}

export const createSafeError = (error: unknown): Error => {
  if (isError(error)) {
    return error
  }
  return new Error(getErrorMessage(error))
}

// Error logging with structured data
export const logError = (
  error: unknown,
  context?: Record<string, unknown>
): void => {
  const errorMessage = getErrorMessage(error)
  const errorData = {
    message: errorMessage,
    name: isError(error) ? error.name : 'UnknownError',
    stack: isError(error) ? error.stack : undefined,
    context,
    timestamp: new Date().toISOString(),
  }

  if (process.env.NODE_ENV === 'development') {
    console.error('Error Details:', errorData)
  } else {
    // In production, log to structured logging service
    console.error('Error:', errorMessage, context)
  }
}
