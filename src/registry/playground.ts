import { categories, getComponentById } from '@/registry'
import {
  PLAYGROUND_SECTION_CATEGORY_IDS,
  type PlaygroundSectionCategoryId,
} from '@/types/playground'
import type { Category, ComponentItem } from '@/registry/types'

const sectionIdSet = new Set<string>(PLAYGROUND_SECTION_CATEGORY_IDS)

export function isPlaygroundSectionCategory(id: string): boolean {
  return sectionIdSet.has(id)
}

/** Categories shown in the playground palette (page-section patterns only). */
export function getPlaygroundCategories(): Category[] {
  return categories.filter((category) => isPlaygroundSectionCategory(category.id))
}

export function getPlaygroundComponent(
  categoryId: string,
  componentId: string,
): ComponentItem | undefined {
  if (!isPlaygroundSectionCategory(categoryId)) return undefined
  return getComponentById(categoryId, componentId)
}

/** Nav variants accept `embedded` so their catalog preview stubs stay hidden. */
export function playgroundSlotProps(categoryId: string): Record<string, unknown> {
  if (categoryId === 'navigation') {
    return { embedded: true }
  }
  return {}
}

export function isPlaygroundSectionCategoryId(
  id: string,
): id is PlaygroundSectionCategoryId {
  return isPlaygroundSectionCategory(id)
}
