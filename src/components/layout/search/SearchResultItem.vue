<script setup lang="ts">
import type { SearchSelectable } from '@/composables/useComponentSearch'

defineProps<{
  item: SearchSelectable
  active: boolean
}>()

defineEmits<{
  select: []
}>()
</script>

<template>
  <li role="option" :aria-selected="active">
    <button
      type="button"
      class="flex w-full flex-col gap-0.5 rounded-lg px-3 py-2 text-left transition-colors"
      :class="
        active
          ? 'bg-accent-muted text-accent'
          : 'text-studio-800 hover:bg-studio-100 hover:text-studio-950'
      "
      @mousedown.prevent
      @click="$emit('select')"
    >
      <template v-if="item.kind === 'component'">
        <span class="flex items-center justify-between gap-2">
          <span class="truncate text-sm font-medium">{{ item.hit.component.name }}</span>
          <span class="shrink-0 text-[11px] font-medium tracking-wide text-studio-500 uppercase">
            {{ item.hit.categoryName }}
          </span>
        </span>
        <span class="line-clamp-1 text-xs text-studio-500">
          {{ item.hit.component.description }}
        </span>
      </template>

      <template v-else>
        <span class="flex items-center justify-between gap-2">
          <span class="truncate text-sm font-medium">{{ item.hit.category.name }}</span>
          <span class="shrink-0 text-[11px] font-medium tracking-wide text-studio-500 uppercase">
            Category
          </span>
        </span>
        <span class="line-clamp-1 text-xs text-studio-500">
          {{ item.hit.category.description }}
        </span>
      </template>
    </button>
  </li>
</template>
