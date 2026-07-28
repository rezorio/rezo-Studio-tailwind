import { computed, ref, watch, type Component } from 'vue'
import { getPlaygroundComponent } from '@/registry/playground'
import {
  PLAYGROUND_STORAGE_KEY,
  type CanvasSlot,
} from '@/types/playground'
import { insertIndexForSection } from '@/utils/playgroundOrder'

function createSlotId(): string {
  return `slot-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

function readStoredSlots(): CanvasSlot[] {
  try {
    const raw = localStorage.getItem(PLAYGROUND_STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (item): item is CanvasSlot =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as CanvasSlot).id === 'string' &&
        typeof (item as CanvasSlot).categoryId === 'string' &&
        typeof (item as CanvasSlot).componentId === 'string',
    )
  } catch {
    return []
  }
}

const slots = ref<CanvasSlot[]>(readStoredSlots())

watch(
  slots,
  (value) => {
    try {
      localStorage.setItem(PLAYGROUND_STORAGE_KEY, JSON.stringify(value))
    } catch {
      /* quota / private mode — ignore */
    }
  },
  { deep: true },
)

/** Cache resolved Vue SFCs so reordering does not re-fetch. */
const componentCache = new Map<string, Component>()
/** Bumped when the cache gains an entry so consumers re-read. */
const cacheVersion = ref(0)
const loadingKeys = ref(new Set<string>())
const errorByKey = ref(new Map<string, string>())

function cacheKey(categoryId: string, componentId: string): string {
  return `${categoryId}:${componentId}`
}

async function ensureLoaded(categoryId: string, componentId: string): Promise<void> {
  const key = cacheKey(categoryId, componentId)
  if (componentCache.has(key) || loadingKeys.value.has(key)) return

  const meta = getPlaygroundComponent(categoryId, componentId)
  if (!meta) {
    errorByKey.value = new Map(errorByKey.value).set(key, 'Component not found')
    return
  }

  const nextLoading = new Set(loadingKeys.value)
  nextLoading.add(key)
  loadingKeys.value = nextLoading

  try {
    const loaded = await meta.load()
    componentCache.set(key, loaded.component)
    cacheVersion.value += 1
    const nextErrors = new Map(errorByKey.value)
    nextErrors.delete(key)
    errorByKey.value = nextErrors
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load'
    errorByKey.value = new Map(errorByKey.value).set(key, message)
  } finally {
    const done = new Set(loadingKeys.value)
    done.delete(key)
    loadingKeys.value = done
  }
}

watch(
  slots,
  (list) => {
    for (const slot of list) {
      void ensureLoaded(slot.categoryId, slot.componentId)
    }
  },
  { immediate: true, deep: true },
)

export function usePageCanvas() {
  const slotCount = computed(() => slots.value.length)
  const isEmpty = computed(() => slots.value.length === 0)

  function addComponent(categoryId: string, componentId: string): void {
    if (!getPlaygroundComponent(categoryId, componentId)) return
    const next: CanvasSlot = {
      id: createSlotId(),
      categoryId,
      componentId,
    }
    const at = insertIndexForSection(slots.value, categoryId)
    const copy = [...slots.value]
    copy.splice(at, 0, next)
    slots.value = copy
  }

  function removeSlot(slotId: string): void {
    slots.value = slots.value.filter((slot) => slot.id !== slotId)
  }

  function moveSlot(slotId: string, direction: -1 | 1): void {
    const index = slots.value.findIndex((slot) => slot.id === slotId)
    if (index < 0) return
    const target = index + direction
    if (target < 0 || target >= slots.value.length) return
    const next = [...slots.value]
    const [item] = next.splice(index, 1)
    next.splice(target, 0, item)
    slots.value = next
  }

  function clearSlots(): void {
    slots.value = []
  }

  function getResolvedComponent(categoryId: string, componentId: string): Component | null {
    void cacheVersion.value
    return componentCache.get(cacheKey(categoryId, componentId)) ?? null
  }

  function isSlotLoading(categoryId: string, componentId: string): boolean {
    return loadingKeys.value.has(cacheKey(categoryId, componentId))
  }

  function getSlotError(categoryId: string, componentId: string): string | null {
    return errorByKey.value.get(cacheKey(categoryId, componentId)) ?? null
  }

  function getSlotMeta(categoryId: string, componentId: string) {
    return getPlaygroundComponent(categoryId, componentId)
  }

  return {
    slots,
    slotCount,
    isEmpty,
    addComponent,
    removeSlot,
    moveSlot,
    clearSlots,
    getResolvedComponent,
    isSlotLoading,
    getSlotError,
    getSlotMeta,
  }
}
