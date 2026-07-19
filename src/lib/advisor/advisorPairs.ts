// advisorPairs.ts — advisor-tool executor→advisor compatibility (verified 2026-07-06)
// Source: https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool
// Rule: advisor must be >= executor in capability, and must be Sonnet 4.6 or better.
// No dependencies.

// Canonical model IDs.
export const MODELS = {
  HAIKU_4_5: 'claude-haiku-4-5-20251001',
  SONNET_4_6: 'claude-sonnet-4-6',
  SONNET_5: 'claude-sonnet-5',
  OPUS_4_6: 'claude-opus-4-6',
  OPUS_4_7: 'claude-opus-4-7',
  OPUS_4_8: 'claude-opus-4-8',
  FABLE_5: 'claude-fable-5',
  MYTHOS_5: 'claude-mythos-5',
} as const

export type ModelId = (typeof MODELS)[keyof typeof MODELS]

export interface PairResult {
  valid: boolean
  executor: ModelId | null
  advisor: ModelId | null
  reason: string
  retentionRisk: boolean
}

// Aliases people actually type -> canonical id. Keeps callers forgiving.
const ALIASES: Record<string, ModelId> = {
  'claude-haiku-4-5': MODELS.HAIKU_4_5,
  'haiku-4-5': MODELS.HAIKU_4_5,
  haiku: MODELS.HAIKU_4_5,
  'sonnet-4-6': MODELS.SONNET_4_6,
  'sonnet-5': MODELS.SONNET_5,
  sonnet: MODELS.SONNET_5,
  'opus-4-6': MODELS.OPUS_4_6,
  'opus-4-7': MODELS.OPUS_4_7,
  'opus-4-8': MODELS.OPUS_4_8,
  opus: MODELS.OPUS_4_8,
  'fable-5': MODELS.FABLE_5,
  fable: MODELS.FABLE_5,
  'mythos-5': MODELS.MYTHOS_5,
  mythos: MODELS.MYTHOS_5,
}

// The verified table: executor -> list of allowed advisor ids.
export const TABLE: Partial<Record<ModelId, ModelId[]>> = {
  [MODELS.HAIKU_4_5]: [
    MODELS.FABLE_5,
    MODELS.MYTHOS_5,
    MODELS.OPUS_4_8,
    MODELS.OPUS_4_7,
    MODELS.OPUS_4_6,
    MODELS.SONNET_4_6,
  ],
  [MODELS.SONNET_4_6]: [
    MODELS.FABLE_5,
    MODELS.MYTHOS_5,
    MODELS.OPUS_4_8,
    MODELS.OPUS_4_7,
    MODELS.OPUS_4_6,
    MODELS.SONNET_4_6,
  ],
  [MODELS.SONNET_5]: [
    MODELS.FABLE_5,
    MODELS.MYTHOS_5,
    MODELS.OPUS_4_8,
    MODELS.OPUS_4_7,
  ],
  [MODELS.OPUS_4_6]: [
    MODELS.FABLE_5,
    MODELS.MYTHOS_5,
    MODELS.OPUS_4_8,
    MODELS.OPUS_4_7,
    MODELS.OPUS_4_6,
  ],
  [MODELS.OPUS_4_7]: [
    MODELS.FABLE_5,
    MODELS.MYTHOS_5,
    MODELS.OPUS_4_8,
    MODELS.OPUS_4_7,
  ],
  [MODELS.OPUS_4_8]: [
    MODELS.FABLE_5,
    MODELS.MYTHOS_5,
    MODELS.OPUS_4_8,
    MODELS.OPUS_4_7,
  ],
  [MODELS.FABLE_5]: [MODELS.FABLE_5],
  [MODELS.MYTHOS_5]: [MODELS.MYTHOS_5],
}

// Advisors that pull the run into 30-day retention (no ZDR). Keep advisor out of
// this set for any client PII / flagged work (see ~/.claude/CLAUDE.md).
export const RETENTION_RISK_ADVISORS: ReadonlySet<ModelId> = new Set([
  MODELS.FABLE_5,
  MODELS.MYTHOS_5,
])

const ALL_IDS: ModelId[] = Object.values(MODELS)

// Resolve an alias or raw id to a canonical id, or null if unknown.
export function normalize(model: string): ModelId | null {
  if (typeof model !== 'string') return null
  const m = model.trim()
  if ((ALL_IDS as string[]).includes(m)) return m as ModelId
  const alias = ALIASES[m.toLowerCase()]
  return alias ?? null
}

// List valid advisor ids for an executor. Returns [] if executor is unknown.
export function advisorsFor(executor: string): ModelId[] {
  const e = normalize(executor)
  return e && TABLE[e] ? [...(TABLE[e] as ModelId[])] : []
}

// Validate an executor+advisor pair.
export function isValidPair(executor: string, advisor: string): PairResult {
  const e = normalize(executor)
  const a = normalize(advisor)

  if (!e || !TABLE[e]) {
    return {
      valid: false,
      executor: e,
      advisor: a,
      retentionRisk: false,
      reason: `Unknown or non-executor model: "${executor}". Valid executors: ${Object.keys(TABLE).join(', ')}`,
    }
  }
  if (!a) {
    return {
      valid: false,
      executor: e,
      advisor: a,
      retentionRisk: false,
      reason: `Unknown advisor model: "${advisor}".`,
    }
  }

  const retentionRisk = RETENTION_RISK_ADVISORS.has(a)
  const allowed = TABLE[e] as ModelId[]
  if (!allowed.includes(a)) {
    return {
      valid: false,
      executor: e,
      advisor: a,
      retentionRisk,
      reason: `"${a}" is not a valid advisor for executor "${e}". Allowed advisors: ${allowed.join(', ')}`,
    }
  }
  return { valid: true, executor: e, advisor: a, retentionRisk, reason: 'OK' }
}
