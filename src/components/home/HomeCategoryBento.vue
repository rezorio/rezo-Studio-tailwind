<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCatalogStats } from '@/composables/useCatalogStats'

const { featuredCategories, categoryCount } = useCatalogStats()

const categoryMeta: Record<string, { accent: string; featured?: boolean }> = {
  template: {
    accent: 'from-accent/20 to-accent/5',
    featured: true,
  },
  hero: { accent: 'from-[#5ec4ff]/20 to-transparent' },
  navigation: { accent: 'from-studio-300/30 to-transparent' },
  cards: { accent: 'from-[#f0c674]/20 to-transparent' },
  cta: { accent: 'from-accent/25 to-transparent' },
  forms: { accent: 'from-[#7dd3c0]/20 to-transparent' },
  footers: { accent: 'from-studio-400/20 to-transparent' },
  buttons: { accent: 'from-accent/30 to-transparent' },
  carousel: { accent: 'from-[#5ec4ff]/25 to-transparent' },
  modals: { accent: 'from-studio-300/35 to-transparent' },
}
</script>

<template>
  <section class="mt-14" aria-labelledby="explore-heading">
    <div class="home-fade-up mb-6 flex flex-wrap items-end justify-between gap-4" style="--home-delay: 560ms">
      <div>
        <p class="text-xs font-semibold tracking-widest text-accent uppercase">Explore the catalog</p>
        <h2
          id="explore-heading"
          class="mt-1 font-display text-2xl font-bold tracking-tight text-studio-950 sm:text-3xl"
        >
          {{ categoryCount }} sections. Dozens of patterns.
        </h2>
        <p class="mt-2 max-w-xl text-sm leading-relaxed text-studio-600 sm:text-base">
          Every category ships multiple variants — preview live, then copy the exact Vue source.
        </p>
      </div>
    </div>

    <ul class="home-bento m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="(category, index) in featuredCategories"
        :key="category.id"
        class="home-fade-up"
        :class="categoryMeta[category.id]?.featured ? 'sm:col-span-2 lg:col-span-2' : ''"
        :style="{ '--home-delay': `${620 + index * 70}ms` }"
      >
        <RouterLink
          :to="{ name: 'category', params: { id: category.id } }"
          class="home-bento-card group relative flex h-full min-h-[9.5rem] flex-col overflow-hidden rounded-2xl border border-studio-200/90 bg-surface/90 p-5 no-underline transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_rgba(26,122,102,0.14)]"
        >
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-br opacity-80 transition group-hover:opacity-100"
            :class="categoryMeta[category.id]?.accent ?? 'from-accent/10 to-transparent'"
            aria-hidden="true"
          />

          <div class="relative flex flex-1 flex-col">
            <div class="flex items-start justify-between gap-3">
              <div>
                <span
                  v-if="categoryMeta[category.id]?.featured"
                  class="mb-2 inline-block rounded-md bg-accent/15 px-2 py-0.5 text-[10px] font-bold tracking-wide text-accent uppercase"
                >
                  Start here
                </span>
                <h3
                  class="font-display text-lg font-semibold text-studio-950 transition group-hover:text-accent sm:text-xl"
                >
                  {{ category.name }}
                </h3>
              </div>
              <span
                class="shrink-0 rounded-full border border-studio-200 bg-surface/80 px-2.5 py-1 text-xs font-semibold text-studio-600"
              >
                {{ category.components.length }}
              </span>
            </div>

            <p class="relative mt-2 flex-1 text-sm leading-relaxed text-studio-600">
              {{ category.description }}
            </p>

            <div class="relative mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="name in category.previewNames"
                :key="name"
                class="rounded-md bg-studio-100/80 px-2 py-0.5 text-[11px] font-medium text-studio-600"
              >
                {{ name }}
              </span>
              <span
                v-if="category.components.length > 3"
                class="rounded-md px-2 py-0.5 text-[11px] font-medium text-studio-400"
              >
                +{{ category.components.length - 3 }} more
              </span>
            </div>

            <span
              class="relative mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent opacity-0 transition group-hover:opacity-100"
            >
              View all
              <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
