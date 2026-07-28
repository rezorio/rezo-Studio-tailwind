<script setup lang="ts">
import ComponentPalette from '@/components/playground/ComponentPalette.vue'
import PageCanvas from '@/components/playground/PageCanvas.vue'
import { usePageCanvas } from '@/composables/usePageCanvas'

const { slotCount, isEmpty, clearSlots } = usePageCanvas()
</script>

<template>
  <div class="mx-auto max-w-[90rem]">
    <header class="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-xs font-semibold tracking-[0.14em] text-accent uppercase">Playground</p>
        <h1 class="mt-2 font-display text-3xl font-semibold tracking-tight text-studio-950 sm:text-4xl">
          Page canvas
        </h1>
        <p class="mt-2 max-w-xl text-sm leading-relaxed text-studio-600 sm:text-base">
          Compose a real page from catalog sections. Click to add, reorder on the canvas, and
          see how patterns work together.
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <span
          class="inline-flex items-center rounded-lg border border-studio-200 bg-studio-50 px-2.5 py-1.5 text-xs font-medium tabular-nums text-studio-600"
        >
          {{ slotCount }} {{ slotCount === 1 ? 'section' : 'sections' }}
        </span>
        <button
          type="button"
          class="inline-flex h-9 items-center rounded-lg border border-studio-200 bg-surface px-3 text-sm font-medium text-studio-700 transition hover:border-studio-300 hover:bg-studio-50 hover:text-studio-950 disabled:cursor-not-allowed disabled:opacity-40"
          :disabled="isEmpty"
          @click="clearSlots"
        >
          Clear page
        </button>
      </div>
    </header>

    <div
      class="flex flex-col gap-4 lg:grid lg:grid-cols-[17.5rem_minmax(0,1fr)] lg:items-start lg:gap-6"
    >
      <aside
        class="flex max-h-[min(24rem,70dvh)] flex-col overflow-hidden rounded-xl border border-studio-200/90 bg-surface/80 lg:sticky lg:top-4 lg:max-h-[calc(100dvh-6.5rem)]"
      >
        <ComponentPalette />
      </aside>

      <PageCanvas />
    </div>
  </div>
</template>
