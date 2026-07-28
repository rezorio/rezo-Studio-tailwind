<script setup lang="ts">
import TemplatePageShell from '@/components/library/template/TemplatePageShell.vue'
import CanvasSlot from '@/components/playground/CanvasSlot.vue'
import { usePageCanvas } from '@/composables/usePageCanvas'
import { sectionBand } from '@/utils/playgroundOrder'

const { slots, isEmpty, removeSlot, moveSlot } = usePageCanvas()

/** Nav sits above following heroes so float headers overlay instead of pushing content down. */
function slotLayerClass(categoryId: string): string {
  const band = sectionBand(categoryId)
  if (band === 0) return 'relative z-30'
  if (band === 1) return 'relative z-10'
  return 'relative z-0'
}
</script>

<template>
  <div
    class="relative min-h-[28rem] overflow-x-clip rounded-xl border border-studio-200/90 bg-white shadow-[0_8px_32px_rgba(20,31,28,0.06)]"
  >
    <div
      v-if="isEmpty"
      class="flex min-h-[28rem] flex-col items-center justify-center gap-3 px-6 py-16 text-center"
    >
      <div
        class="flex size-12 items-center justify-center rounded-2xl border border-dashed border-studio-300 bg-studio-50 text-studio-400"
        aria-hidden="true"
      >
        <svg class="size-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M5 12h14"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div>
        <p class="font-display text-lg font-semibold tracking-tight text-studio-950">
          Empty canvas
        </p>
        <p class="mt-1 max-w-sm text-sm leading-relaxed text-studio-500">
          Click sections in the palette to build a page — nav, hero, mid sections, then footer.
        </p>
      </div>
    </div>

    <!-- Match catalog PreviewPanel padding so TemplatePageShell breakout works -->
    <div v-else class="p-6 sm:p-8">
      <TemplatePageShell>
        <div
          v-for="(slot, index) in slots"
          :key="slot.id"
          :class="slotLayerClass(slot.categoryId)"
        >
          <CanvasSlot
            :item="slot"
            :index="index"
            :total="slots.length"
            @remove="removeSlot"
            @move="moveSlot"
          />
        </div>
      </TemplatePageShell>
    </div>
  </div>
</template>
