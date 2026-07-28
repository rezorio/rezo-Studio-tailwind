<script setup lang="ts">
import { ref } from 'vue'

/**
 * Thumbnail gallery — large stage with a selectable strip of preview tiles below.
 */
const items = [
  {
    id: 'atlas',
    label: 'Atlas dashboard',
    caption: 'Metric overview with live status rail',
    gradient: 'from-studio-800 via-studio-700 to-accent/40',
  },
  {
    id: 'ledger',
    label: 'Ledger index',
    caption: 'Numbered columns and editorial hierarchy',
    gradient: 'from-[#2d403c] via-studio-600 to-[#7dd3c0]/50',
  },
  {
    id: 'beacon',
    label: 'Beacon pulse',
    caption: 'Dark stage with concentric action rings',
    gradient: 'from-studio-950 via-accent/30 to-studio-800',
  },
  {
    id: 'drift',
    label: 'Drift contact',
    caption: 'Underline inputs with floating labels',
    gradient: 'from-accent/30 via-white to-studio-100',
  },
]

const active = ref(0)

function select(index: number) {
  active.value = index
}
</script>

<template>
  <div class="-mx-6 -my-6 bg-white px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <div class="mx-auto max-w-lg">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Gallery</p>
      <h3 class="mt-1 font-display text-lg font-semibold text-studio-950">Thumb strip</h3>

      <!-- Main stage -->
      <div
        class="relative mt-6 overflow-hidden rounded-2xl border border-studio-200 bg-studio-50 shadow-[0_12px_32px_rgba(20,31,28,0.08)]"
      >
        <div
          v-for="(item, index) in items"
          :key="item.id"
          class="transition-opacity duration-500"
          :class="index === active ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0'"
          :aria-hidden="index !== active"
        >
          <div
            class="flex aspect-[16/10] items-end bg-gradient-to-br p-6"
            :class="item.gradient"
          >
            <div class="w-full rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <p class="text-xs font-semibold tracking-wide text-white/80 uppercase">{{ item.label }}</p>
              <p class="mt-1 text-sm text-white/90">{{ item.caption }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Thumbnail strip -->
      <div
        class="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Gallery thumbnails"
      >
        <button
          v-for="(item, index) in items"
          :key="item.id"
          type="button"
          role="tab"
          class="group relative w-20 shrink-0 overflow-hidden rounded-lg border-2 transition"
          :class="
            index === active
              ? 'border-accent shadow-[0_0_0_3px_rgba(26,122,102,0.15)]'
              : 'border-studio-200 hover:border-studio-300'
          "
          :aria-selected="index === active"
          :aria-label="item.label"
          @click="select(index)"
        >
          <div
            class="aspect-[4/3] bg-gradient-to-br transition group-hover:brightness-110"
            :class="item.gradient"
          />
          <span
            class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-studio-950/70 to-transparent px-1.5 py-1.5 text-left text-[9px] font-semibold text-white"
          >
            {{ item.label.split(' ')[0] }}
          </span>
        </button>
      </div>

      <p class="mt-4 text-center text-sm text-studio-500">
        <span class="font-semibold text-studio-800">{{ items[active].label }}</span>
        — {{ items[active].caption }}
      </p>
    </div>
  </div>
</template>
