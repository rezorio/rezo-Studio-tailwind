<script setup lang="ts">
import { categories } from '@/registry'

const marqueeItems = categories.flatMap((category) =>
  category.components.map((component) => `${category.name} · ${component.name}`),
)
</script>

<template>
  <section class="home-fade-up mt-14 overflow-hidden" style="--home-delay: 1400ms" aria-hidden="true">
    <div class="home-marquee-mask relative rounded-2xl border border-studio-200/70 bg-studio-100/50 py-4">
      <div class="home-marquee-track flex w-max gap-6">
        <span
          v-for="(label, index) in [...marqueeItems, ...marqueeItems]"
          :key="`${label}-${index}`"
          class="shrink-0 rounded-full border border-studio-200/80 bg-surface/90 px-4 py-1.5 text-xs font-medium text-studio-600"
        >
          {{ label }}
        </span>
      </div>
    </div>
  </section>
</template>
