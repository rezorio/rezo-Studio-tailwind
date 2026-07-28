<script setup lang="ts">
import { computed, ref } from 'vue'

/**
 * Slide peek carousel — horizontal track with neighboring slides visible at the edges.
 */
const slides = [
  {
    tag: 'Workflow',
    title: 'Compose in minutes',
    body: 'Stack hero, nav, and CTA sections without leaving the catalog.',
    gradient: 'from-accent/25 via-accent/10 to-transparent',
  },
  {
    tag: 'Handoff',
    title: 'Preview then paste',
    body: 'Live preview and highlighted source stay paired for every variant.',
    gradient: 'from-[#5ec4ff]/25 via-[#5ec4ff]/10 to-transparent',
  },
  {
    tag: 'Systems',
    title: 'Tokens built in',
    body: 'Studio typography and accent colors keep demos cohesive out of the box.',
    gradient: 'from-[#7dd3c0]/25 via-[#7dd3c0]/10 to-transparent',
  },
]

const active = ref(0)

const trackOffset = computed(() => `translateX(calc(-${active.value * 78}% + ${active.value === 0 ? '0%' : '11%'}))`)

function prev() {
  active.value = (active.value - 1 + slides.length) % slides.length
}

function next() {
  active.value = (active.value + 1) % slides.length
}

function goTo(index: number) {
  active.value = index
}
</script>

<template>
  <div class="-mx-6 -my-6 overflow-hidden bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <div class="mb-6 flex items-end justify-between gap-4">
      <div>
        <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Showcase</p>
        <h3 class="mt-1 font-display text-lg font-semibold text-studio-950">Slide peek</h3>
      </div>
      <div class="flex items-center gap-2">
        <button
          type="button"
          class="inline-flex size-9 items-center justify-center rounded-full border border-studio-200 bg-white text-studio-600 transition hover:border-accent/40 hover:text-accent"
          aria-label="Previous slide"
          @click="prev"
        >
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="m15 18-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          class="inline-flex size-9 items-center justify-center rounded-full border border-studio-200 bg-white text-studio-600 transition hover:border-accent/40 hover:text-accent"
          aria-label="Next slide"
          @click="next"
        >
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="m9 18 6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>

    <div class="relative overflow-hidden">
      <div
        class="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        :style="{ transform: trackOffset }"
      >
        <article
          v-for="(slide, index) in slides"
          :key="slide.title"
          class="w-[70%] shrink-0 rounded-2xl border border-studio-200 bg-white p-6 shadow-[0_8px_24px_rgba(20,31,28,0.06)] transition-[opacity,transform] duration-500"
          :class="
            index === active
              ? 'scale-100 opacity-100'
              : 'scale-[0.97] opacity-55'
          "
          :aria-hidden="index !== active"
        >
          <div
            class="mb-5 h-28 rounded-xl bg-gradient-to-br"
            :class="slide.gradient"
            aria-hidden="true"
          />
          <p class="text-xs font-semibold tracking-[0.14em] text-accent uppercase">{{ slide.tag }}</p>
          <h4 class="mt-2 font-display text-xl font-semibold tracking-tight text-studio-950">
            {{ slide.title }}
          </h4>
          <p class="mt-2 text-sm leading-relaxed text-studio-600">{{ slide.body }}</p>
        </article>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-center gap-2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        type="button"
        class="h-1.5 rounded-full transition-all duration-300"
        :class="index === active ? 'w-8 bg-accent' : 'w-1.5 bg-studio-300 hover:bg-studio-400'"
        :aria-label="`Go to slide ${index + 1}`"
        @click="goTo(index)"
      />
    </div>
  </div>
</template>
