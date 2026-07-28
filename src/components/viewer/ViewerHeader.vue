<script setup lang="ts">
import ViewerModeTabs from '@/components/viewer/ViewerModeTabs.vue'
import CopyCodeButton from '@/components/viewer/CopyCodeButton.vue'
import type { ViewerMode } from '@/types/component-viewer'

defineProps<{
  title: string
  description?: string
  code: string
  mode: ViewerMode
}>()

const emit = defineEmits<{
  'update:mode': [mode: ViewerMode]
}>()
</script>

<template>
  <div
    class="flex flex-col gap-3 border-b border-studio-200/80 bg-surface/90 px-4 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:px-5"
  >
    <div class="min-w-0">
      <h3 class="font-display text-base font-semibold tracking-tight text-studio-950">
        {{ title }}
      </h3>
      <p v-if="description" class="mt-0.5 text-sm leading-relaxed text-studio-600">
        {{ description }}
      </p>
    </div>

    <div class="flex shrink-0 flex-wrap items-center gap-2">
      <ViewerModeTabs :model-value="mode" @update:model-value="emit('update:mode', $event)" />
      <CopyCodeButton :code="code" />
    </div>
  </div>
</template>
