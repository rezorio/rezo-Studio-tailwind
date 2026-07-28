<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import SearchResultsPanel from '@/components/layout/search/SearchResultsPanel.vue'
import { useComponentSearch } from '@/composables/useComponentSearch'

const props = withDefaults(
  defineProps<{
    autofocus?: boolean
  }>(),
  {
    autofocus: false,
  },
)

const emit = defineEmits<{
  close: []
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const rootRef = ref<HTMLElement | null>(null)

const {
  query,
  activeIndex,
  items,
  hasQuery,
  showPanel,
  open,
  close,
  setQuery,
  moveActive,
  goTo,
  selectActive,
} = useComponentSearch()

function onInput(event: Event): void {
  const target = event.target as HTMLInputElement
  setQuery(target.value)
}

function onKeydown(event: KeyboardEvent): void {
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      open()
      moveActive(1)
      break
    case 'ArrowUp':
      event.preventDefault()
      open()
      moveActive(-1)
      break
    case 'Enter':
      if (showPanel.value && items.value.length > 0) {
        event.preventDefault()
        void selectActive()
        emit('close')
      }
      break
    case 'Escape':
      event.preventDefault()
      if (showPanel.value) {
        close()
      } else {
        emit('close')
      }
      break
  }
}

function onDocumentPointerDown(event: PointerEvent): void {
  const root = rootRef.value
  if (!root) return
  if (event.target instanceof Node && !root.contains(event.target)) {
    close()
  }
}

async function onSelect(item: Parameters<typeof goTo>[0]): Promise<void> {
  await goTo(item)
  emit('close')
}

watch(
  () => props.autofocus,
  (value) => {
    if (value) {
      inputRef.value?.focus()
    }
  },
)

onMounted(() => {
  document.addEventListener('pointerdown', onDocumentPointerDown)
  if (props.autofocus) {
    inputRef.value?.focus()
  }
})

onUnmounted(() => {
  document.removeEventListener('pointerdown', onDocumentPointerDown)
})

defineExpose({
  focus: () => inputRef.value?.focus(),
})
</script>

<template>
  <div ref="rootRef" class="relative w-full">
    <label class="relative block">
      <span class="sr-only">Search components</span>
      <svg
        class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-studio-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" stroke-linecap="round" />
      </svg>
      <input
        ref="inputRef"
        :value="query"
        type="search"
        placeholder="Search components…"
        autocomplete="off"
        autocorrect="off"
        spellcheck="false"
        role="combobox"
        aria-autocomplete="list"
        :aria-expanded="showPanel"
        aria-controls="catalog-search-results"
        class="h-9 w-full rounded-lg border border-studio-200 bg-studio-50/80 pr-3 pl-9 text-sm leading-none text-studio-900 placeholder:text-studio-400 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
        @input="onInput"
        @focus="open"
        @keydown="onKeydown"
      />
    </label>

    <div id="catalog-search-results">
      <SearchResultsPanel
        v-if="showPanel"
        :items="items"
        :active-index="activeIndex"
        :has-query="hasQuery"
        @select="onSelect"
      />
    </div>
  </div>
</template>
