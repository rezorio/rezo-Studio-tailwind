<script setup lang="ts">
import { computed } from 'vue'
import { getCategoryById } from '@/registry'
import { playgroundSlotProps } from '@/registry/playground'
import { usePageCanvas } from '@/composables/usePageCanvas'
import type { CanvasSlot } from '@/types/playground'

const props = defineProps<{
  item: CanvasSlot
  index: number
  total: number
}>()

const emit = defineEmits<{
  remove: [id: string]
  move: [id: string, direction: -1 | 1]
}>()

const {
  getResolvedComponent,
  isSlotLoading,
  getSlotError,
  getSlotMeta,
} = usePageCanvas()

const meta = computed(() => getSlotMeta(props.item.categoryId, props.item.componentId))
const categoryName = computed(
  () => getCategoryById(props.item.categoryId)?.name ?? props.item.categoryId,
)
const resolved = computed(() =>
  getResolvedComponent(props.item.categoryId, props.item.componentId),
)
const loading = computed(() => isSlotLoading(props.item.categoryId, props.item.componentId))
const error = computed(() => getSlotError(props.item.categoryId, props.item.componentId))
const bindProps = computed(() => playgroundSlotProps(props.item.categoryId))

const canMoveUp = computed(() => props.index > 0)
const canMoveDown = computed(() => props.index < props.total - 1)
</script>

<template>
  <div class="group/slot relative">
    <!-- Hover chrome: label + reorder / remove -->
    <div
      class="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-2 px-3 py-2 opacity-0 transition group-hover/slot:pointer-events-auto group-hover/slot:opacity-100 group-focus-within/slot:pointer-events-auto group-focus-within/slot:opacity-100"
    >
      <div
        class="inline-flex max-w-[70%] items-center gap-2 rounded-lg border border-studio-200/90 bg-white/95 px-2.5 py-1 shadow-sm backdrop-blur-sm"
      >
        <span class="font-mono text-[10px] tabular-nums text-studio-400">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
        <span class="truncate text-xs font-medium text-studio-800">
          {{ meta?.name ?? item.componentId }}
        </span>
        <span class="hidden truncate text-[10px] text-studio-400 sm:inline">
          {{ categoryName }}
        </span>
      </div>

      <div
        class="inline-flex items-center gap-0.5 rounded-lg border border-studio-200/90 bg-white/95 p-0.5 shadow-sm backdrop-blur-sm"
      >
        <button
          type="button"
          class="inline-flex size-7 items-center justify-center rounded-md text-studio-600 transition hover:bg-studio-100 hover:text-studio-950 disabled:cursor-not-allowed disabled:opacity-30"
          :disabled="!canMoveUp"
          aria-label="Move section up"
          @click="emit('move', item.id, -1)"
        >
          <svg class="size-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 12V4M4.5 7.5 8 4l3.5 3.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          class="inline-flex size-7 items-center justify-center rounded-md text-studio-600 transition hover:bg-studio-100 hover:text-studio-950 disabled:cursor-not-allowed disabled:opacity-30"
          :disabled="!canMoveDown"
          aria-label="Move section down"
          @click="emit('move', item.id, 1)"
        >
          <svg class="size-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 4v8M4.5 8.5 8 12l3.5-3.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          class="inline-flex size-7 items-center justify-center rounded-md text-studio-600 transition hover:bg-red-50 hover:text-red-600"
          aria-label="Remove section"
          @click="emit('remove', item.id)"
        >
          <svg class="size-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-if="loading && !resolved"
      class="flex min-h-32 items-center justify-center bg-studio-50 text-sm text-studio-500"
    >
      Loading…
    </div>
    <div
      v-else-if="error"
      class="flex min-h-24 items-center justify-center bg-red-50 px-4 text-sm text-red-700"
    >
      {{ error }}
    </div>
    <!-- Neutralize catalog breakout margins (TemplatePageShell only resets direct children) -->
    <div v-else-if="resolved" class="[&>*]:mx-0 [&>*]:my-0">
      <component :is="resolved" v-bind="bindProps" />
    </div>
  </div>
</template>
