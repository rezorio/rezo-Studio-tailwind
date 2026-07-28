<script setup lang="ts">
import SearchResultItem from '@/components/layout/search/SearchResultItem.vue'
import type { SearchSelectable } from '@/composables/useComponentSearch'

defineProps<{
  items: SearchSelectable[]
  activeIndex: number
  hasQuery: boolean
}>()

const emit = defineEmits<{
  select: [item: SearchSelectable]
}>()
</script>

<template>
  <div
    class="absolute top-full right-0 left-0 z-50 mt-2 overflow-hidden rounded-xl border border-studio-200/90 bg-surface-elevated shadow-[0_12px_40px_rgba(20,31,28,0.12)]"
    role="listbox"
    aria-label="Search results"
  >
    <ul v-if="items.length > 0" class="m-0 max-h-80 list-none overflow-y-auto p-2">
      <SearchResultItem
        v-for="(item, index) in items"
        :key="
          item.kind === 'component'
            ? `component-${item.hit.categoryId}-${item.hit.component.id}`
            : `category-${item.hit.category.id}`
        "
        :item="item"
        :active="index === activeIndex"
        @select="emit('select', item)"
      />
    </ul>

    <p v-else-if="hasQuery" class="m-0 px-4 py-6 text-center text-sm text-studio-500">
      No components match your search.
    </p>
  </div>
</template>
