import type { CanvasSlot, PlaygroundSectionCategoryId } from '@/types/playground'

/** Page-flow bands — lower inserts above higher (nav → hero → body → footer). */
const SECTION_BAND: Record<PlaygroundSectionCategoryId, number> = {
  navigation: 0,
  hero: 1,
  cards: 2,
  list: 2,
  carousel: 2,
  cta: 2,
  forms: 2,
  booking: 2,
  calendar: 2,
  footers: 3,
}

export function sectionBand(categoryId: string): number {
  return SECTION_BAND[categoryId as PlaygroundSectionCategoryId] ?? 2
}

/**
 * Index to insert a new section so the stack stays in natural page order
 * instead of always appending at the bottom.
 */
export function insertIndexForSection(
  slots: readonly CanvasSlot[],
  categoryId: string,
): number {
  const band = sectionBand(categoryId)
  let index = slots.length
  for (let i = 0; i < slots.length; i++) {
    if (sectionBand(slots[i].categoryId) > band) {
      index = i
      break
    }
  }
  return index
}
