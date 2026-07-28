import { computed } from 'vue'
import { categories } from '@/registry'

export function useCatalogStats() {
  const categoryCount = computed(() => categories.length)

  const componentCount = computed(() =>
    categories.reduce((sum, category) => sum + category.components.length, 0),
  )

  const templateCount = computed(
    () => categories.find((c) => c.id === 'template')?.components.length ?? 0,
  )

  const featuredCategories = computed(() =>
    categories.map((category) => ({
      ...category,
      previewNames: category.components.slice(0, 3).map((c) => c.name),
    })),
  )

  return {
    categoryCount,
    componentCount,
    templateCount,
    featuredCategories,
  }
}
