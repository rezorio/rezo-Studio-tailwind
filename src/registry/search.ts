import { categories } from '@/registry'
import type { Category, ComponentItem } from '@/registry/types'

export interface CatalogSearchHit {
  categoryId: string
  categoryName: string
  component: ComponentItem
  /** Lower is better. */
  score: number
}

export interface CatalogCategoryHit {
  category: Category
  score: number
}

export interface CatalogSearchResult {
  components: CatalogSearchHit[]
  categories: CatalogCategoryHit[]
}

function normalize(value: string): string {
  return value.trim().toLowerCase()
}

function scoreMatch(haystack: string, needle: string): number | null {
  const text = normalize(haystack)
  if (!needle || !text) return null
  if (text === needle) return 0
  if (text.startsWith(needle)) return 1
  if (text.includes(needle)) return 2

  const tokens = needle.split(/\s+/).filter(Boolean)
  if (tokens.length > 1 && tokens.every((token) => text.includes(token))) {
    return 3
  }

  return null
}

function bestScore(...scores: Array<number | null>): number | null {
  const valid = scores.filter((score): score is number => score !== null)
  if (valid.length === 0) return null
  return Math.min(...valid)
}

/**
 * Search the registry by component / category name, id, and description.
 */
export function searchCatalog(rawQuery: string, limit = 8): CatalogSearchResult {
  const query = normalize(rawQuery)
  if (!query) {
    return { components: [], categories: [] }
  }

  const components: CatalogSearchHit[] = []
  const categoryHits: CatalogCategoryHit[] = []

  for (const category of categories) {
    const categoryScore = bestScore(
      scoreMatch(category.name, query),
      scoreMatch(category.id, query),
      scoreMatch(category.description, query),
    )

    if (categoryScore !== null) {
      categoryHits.push({ category, score: categoryScore })
    }

    for (const component of category.components) {
      const score = bestScore(
        scoreMatch(component.name, query),
        scoreMatch(component.id, query),
        scoreMatch(component.description, query),
        scoreMatch(category.name, query),
        scoreMatch(category.id, query),
      )

      if (score !== null) {
        components.push({
          categoryId: category.id,
          categoryName: category.name,
          component,
          score,
        })
      }
    }
  }

  components.sort((a, b) => {
    if (a.score !== b.score) return a.score - b.score
    return a.component.name.localeCompare(b.component.name)
  })

  categoryHits.sort((a, b) => {
    if (a.score !== b.score) return a.score - b.score
    return a.category.name.localeCompare(b.category.name)
  })

  return {
    components: components.slice(0, limit),
    categories: categoryHits.slice(0, Math.min(4, limit)),
  }
}

export function componentHref(categoryId: string, componentId: string): string {
  return `/category/${categoryId}#${componentId}`
}

export function categoryHref(categoryId: string): string {
  return `/category/${categoryId}`
}
