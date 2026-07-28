<script setup lang="ts">
import { computed } from 'vue'
import { useCatalogStats } from '@/composables/useCatalogStats'
import { useCountUp } from '@/composables/useCountUp'

const { categoryCount, componentCount, templateCount } = useCatalogStats()

const categories = useCountUp(categoryCount.value)
const components = useCountUp(componentCount.value)
const templates = useCountUp(templateCount.value)
const copyReady = useCountUp(100, 900)

const stats = computed(() => [
  {
    label: 'Categories',
    value: categories.value,
    suffix: '',
    detail: 'Heroes, nav, cards & more',
  },
  {
    label: 'Components',
    value: components.value,
    suffix: '+',
    detail: 'Live previews with source',
  },
  {
    label: 'Full templates',
    value: templates.value,
    suffix: '',
    detail: 'End-to-end page layouts',
  },
  {
    label: 'Copy-ready',
    value: copyReady.value,
    suffix: '%',
    detail: 'Vue + Tailwind markup',
  },
])
</script>

<template>
  <section class="home-fade-up mt-8" style="--home-delay: 400ms" aria-label="Catalog stats">
    <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
      <div
        v-for="(stat, index) in stats"
        :key="stat.label"
        class="home-stat-card group relative overflow-hidden rounded-2xl border border-studio-200/80 bg-surface/90 p-5 backdrop-blur-sm transition hover:border-accent/35 hover:shadow-[0_8px_30px_rgba(26,122,102,0.12)]"
        :style="{ '--home-delay': `${480 + index * 60}ms` }"
      >
        <div
          class="pointer-events-none absolute -top-6 -right-6 size-20 rounded-full bg-accent/5 transition group-hover:bg-accent/10"
          aria-hidden="true"
        />
        <p class="text-xs font-semibold tracking-wide text-studio-500 uppercase">
          {{ stat.label }}
        </p>
        <p class="mt-2 font-display text-3xl font-bold tracking-tight text-studio-950 sm:text-4xl">
          <span class="tabular-nums">{{ stat.value }}</span>
          <span v-if="stat.suffix" class="text-accent">{{ stat.suffix }}</span>
        </p>
        <p class="mt-1 text-xs leading-relaxed text-studio-500">
          {{ stat.detail }}
        </p>
      </div>
    </div>
  </section>
</template>
