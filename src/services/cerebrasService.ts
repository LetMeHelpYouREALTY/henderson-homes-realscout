// Re-exports the shared Cerebras drafting service — canonical implementation
// lives in @drjanduffy/cerebras-service (github.com/DrJanDuffy/cerebras-service)
// so all portfolio sites share one source of truth instead of a per-repo copy.
export {
  CerebrasService,
  cerebrasService,
  CEREBRAS_DEFAULT_MODEL,
} from '@drjanduffy/cerebras-service'
export type {
  CerebrasDraftOptions,
  CerebrasDraftResult,
} from '@drjanduffy/cerebras-service'
