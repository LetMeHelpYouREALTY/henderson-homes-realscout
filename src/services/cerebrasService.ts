// Cerebras Cloud inference service for high-volume, low-latency text drafting.
//
// Scope: this wraps the official @cerebras/cerebras_cloud_sdk client only.
// Cerebras output is a draft input, never a finished artifact — per the
// project's operating rules, anything it produces must pass a Claude
// review + the Fair Housing gate (fair_housing_scan) before it reaches a
// client-facing page, email, or listing. Never pass client PII or deal
// specifics through this service.
//
// Model IDs on Cerebras Cloud move; verify against `GET /v1/models`
// before hardcoding a different default than CEREBRAS_DEFAULT_MODEL below.

import Cerebras from '@cerebras/cerebras_cloud_sdk'

const CEREBRAS_DEFAULT_MODEL = 'gpt-oss-120b'

export interface CerebrasDraftOptions {
  model?: string
  maxCompletionTokens?: number
  temperature?: number
}

export interface CerebrasDraftResult {
  text: string
  model: string
}

export class CerebrasService {
  private client: Cerebras | null

  constructor() {
    const apiKey = process.env.CEREBRAS_API_KEY
    this.client = apiKey ? new Cerebras({ apiKey }) : null
  }

  get isConfigured(): boolean {
    return this.client !== null
  }

  // Generates a single draft completion from a prompt. Returns null (rather
  // than throwing) on missing config or API failure so callers can fall back
  // without a request-time crash.
  async generateDraft(
    prompt: string,
    options: CerebrasDraftOptions = {}
  ): Promise<CerebrasDraftResult | null> {
    if (!this.client) {
      console.error(
        'CerebrasService: CEREBRAS_API_KEY is not set; skipping draft generation'
      )
      return null
    }

    const model =
      options.model ?? process.env.CEREBRAS_MODEL ?? CEREBRAS_DEFAULT_MODEL

    try {
      const completion = await this.client.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model,
        stream: false,
        max_completion_tokens: options.maxCompletionTokens,
        temperature: options.temperature,
      })

      if ('error' in completion) {
        console.error(
          'CerebrasService: API returned an error',
          completion.error
        )
        return null
      }

      if (completion.object !== 'chat.completion') {
        console.error('CerebrasService: unexpected response shape', completion)
        return null
      }

      const text = completion.choices[0]?.message?.content

      if (!text) {
        console.error('CerebrasService: empty completion returned', { model })
        return null
      }

      return { text, model }
    } catch (error) {
      console.error('CerebrasService: draft generation failed', error)
      return null
    }
  }
}

// Export singleton instance
export const cerebrasService = new CerebrasService()
