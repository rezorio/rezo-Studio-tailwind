/** One placed section on the page canvas (persisted). */
export interface CanvasSlot {
  /** Unique instance id so the same component can appear more than once. */
  id: string
  categoryId: string
  componentId: string
}

/** Categories that read as full-width page sections in a composed layout. */
export const PLAYGROUND_SECTION_CATEGORY_IDS = [
  'navigation',
  'hero',
  'cards',
  'cta',
  'forms',
  'footers',
  'list',
  'carousel',
  'booking',
  'calendar',
] as const

export type PlaygroundSectionCategoryId =
  (typeof PLAYGROUND_SECTION_CATEGORY_IDS)[number]

export const PLAYGROUND_STORAGE_KEY = 'rezo-studio-playground-slots'
