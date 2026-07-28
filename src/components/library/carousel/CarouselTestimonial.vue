<script setup lang="ts">
import { ref } from 'vue'

/**
 * Testimonial carousel — quote slides with prev/next controls.
 */
const quotes = [
  {
    text: 'We shipped our landing page in an afternoon. The patterns just drop in.',
    author: 'Maya Chen',
    role: 'Design lead, Northline',
  },
  {
    text: 'Preview and code stay in sync — no more hunting for the right variant.',
    author: 'James Okonkwo',
    role: 'Frontend engineer',
  },
  {
    text: 'The studio tokens made our handoff feel cohesive from day one.',
    author: 'Sofia Reyes',
    role: 'Product designer',
  },
]

const index = ref(0)

function prev() {
  index.value = (index.value - 1 + quotes.length) % quotes.length
}

function next() {
  index.value = (index.value + 1) % quotes.length
}
</script>

<template>
  <div class="-mx-6 -my-6 bg-white px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16">
    <div class="mx-auto max-w-xl text-center">
      <svg
        class="mx-auto size-8 text-accent/50"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Z"
        />
      </svg>

      <blockquote class="mt-6">
        <p class="font-display text-xl font-medium leading-relaxed text-studio-950 sm:text-2xl">
          “{{ quotes[index].text }}”
        </p>
        <footer class="mt-6">
          <cite class="not-italic">
            <span class="text-sm font-semibold text-studio-800">{{ quotes[index].author }}</span>
            <span class="mt-0.5 block text-sm text-studio-500">{{ quotes[index].role }}</span>
          </cite>
        </footer>
      </blockquote>

      <div class="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          class="inline-flex size-10 items-center justify-center rounded-full border border-studio-200 bg-white text-studio-600 transition hover:border-accent/40 hover:text-accent"
          aria-label="Previous quote"
          @click="prev"
        >
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="m15 18-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <span class="min-w-[3rem] text-sm font-medium tabular-nums text-studio-500">
          {{ index + 1 }} / {{ quotes.length }}
        </span>
        <button
          type="button"
          class="inline-flex size-10 items-center justify-center rounded-full border border-studio-200 bg-white text-studio-600 transition hover:border-accent/40 hover:text-accent"
          aria-label="Next quote"
          @click="next"
        >
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="m9 18 6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
