<script setup lang="ts">
import { ref } from 'vue'

/**
 * Soft pill buttons — muted background fills for tags, filters, and chips.
 */
const tags = ['Design', 'Engineering', 'Product', 'Marketing'] as const
const active = ref<string>('Design')

function toggle(tag: string): void {
  active.value = tag
}
</script>

<template>
  <div class="-mx-6 -my-6 bg-white px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16">
    <div class="mx-auto max-w-lg text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Filters</p>
      <h3 class="mt-2 font-display text-xl font-semibold tracking-tight text-studio-950">
        Soft pills
      </h3>
      <p class="mt-2 text-sm text-studio-600">
        Gentle background fills — great for filter chips and category pickers.
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-2">
        <button
          v-for="tag in tags"
          :key="tag"
          type="button"
          class="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
          :class="
            active === tag
              ? 'bg-accent text-white shadow-[0_4px_12px_rgba(26,122,102,0.25)]'
              : 'bg-studio-100 text-studio-600 hover:bg-studio-200/80 hover:text-studio-900'
          "
          :aria-pressed="active === tag"
          @click="toggle(tag)"
        >
          {{ tag }}
        </button>
      </div>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          class="inline-flex items-center gap-1.5 rounded-full bg-accent-muted/70 px-3.5 py-1.5 text-xs font-semibold text-accent transition hover:bg-accent-muted"
        >
          <span class="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Live
        </button>
        <button
          type="button"
          class="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1.5 text-xs font-semibold text-amber-700 transition hover:bg-amber-100"
        >
          Beta
        </button>
        <button
          type="button"
          class="inline-flex items-center gap-1.5 rounded-full bg-studio-100 px-3.5 py-1.5 text-xs font-semibold text-studio-500 transition hover:bg-studio-200/80"
        >
          Archived
        </button>
      </div>
    </div>
  </div>
</template>
