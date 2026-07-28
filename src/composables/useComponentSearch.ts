import { computed, ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  categoryHref,
  componentHref,
  searchCatalog,
  type CatalogCategoryHit,
  type CatalogSearchHit,
} from '@/registry/search'

export type SearchSelectable =
  | { kind: 'component'; hit: CatalogSearchHit }
  | { kind: 'category'; hit: CatalogCategoryHit }

export function useComponentSearch(limit = 8) {
  const router = useRouter()
  const query: Ref<string> = ref('')
  const isOpen: Ref<boolean> = ref(false)
  const activeIndex: Ref<number> = ref(-1)

  const result = computed(() => searchCatalog(query.value, limit))

  const items = computed<SearchSelectable[]>(() => {
    const next: SearchSelectable[] = [
      ...result.value.components.map((hit) => ({ kind: 'component' as const, hit })),
      ...result.value.categories.map((hit) => ({ kind: 'category' as const, hit })),
    ]
    return next
  })

  const hasQuery = computed(() => query.value.trim().length > 0)
  const hasResults = computed(() => items.value.length > 0)
  const showPanel = computed(() => isOpen.value && hasQuery.value)

  function open(): void {
    isOpen.value = true
  }

  function close(): void {
    isOpen.value = false
    activeIndex.value = -1
  }

  function setQuery(value: string): void {
    query.value = value
    activeIndex.value = value.trim() ? 0 : -1
    if (value.trim()) {
      isOpen.value = true
    }
  }

  function clear(): void {
    query.value = ''
    activeIndex.value = -1
  }

  function moveActive(delta: number): void {
    if (!showPanel.value || items.value.length === 0) return
    const count = items.value.length
    if (activeIndex.value < 0) {
      activeIndex.value = delta > 0 ? 0 : count - 1
      return
    }
    activeIndex.value = (activeIndex.value + delta + count) % count
  }

  function hrefFor(item: SearchSelectable): string {
    if (item.kind === 'component') {
      return componentHref(item.hit.categoryId, item.hit.component.id)
    }
    return categoryHref(item.hit.category.id)
  }

  async function goTo(item: SearchSelectable): Promise<void> {
    const href = hrefFor(item)
    close()
    clear()
    await router.push(href)
  }

  async function selectActive(): Promise<void> {
    if (!showPanel.value) return
    const item = items.value[activeIndex.value]
    if (!item) return
    await goTo(item)
  }

  return {
    query,
    isOpen,
    activeIndex,
    result,
    items,
    hasQuery,
    hasResults,
    showPanel,
    open,
    close,
    setQuery,
    clear,
    moveActive,
    hrefFor,
    goTo,
    selectActive,
  }
}
