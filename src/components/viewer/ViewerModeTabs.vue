<script setup lang="ts">
import type { ViewerMode } from '@/types/component-viewer'

defineProps<{
  modelValue: ViewerMode
}>()

const emit = defineEmits<{
  'update:modelValue': [mode: ViewerMode]
}>()

const tabs: { id: ViewerMode; label: string }[] = [
  { id: 'preview', label: 'Preview' },
  { id: 'code', label: 'Code' },
]
</script>

<template>
  <div
    class="inline-flex rounded-lg border border-studio-200 bg-studio-50 p-0.5"
    role="tablist"
    aria-label="View mode"
  >
    <button
      v-for="tab in tabs"
      :key="tab.id"
      type="button"
      role="tab"
      :aria-selected="modelValue === tab.id"
      class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors"
      :class="
        modelValue === tab.id
          ? 'bg-surface text-studio-950 shadow-sm'
          : 'text-studio-600 hover:text-studio-900'
      "
      @click="emit('update:modelValue', tab.id)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>
