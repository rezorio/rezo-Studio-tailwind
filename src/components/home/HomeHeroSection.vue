<script setup lang="ts">
import { RouterLink } from 'vue-router'

const techStack = ['Vue 3', 'TypeScript', 'Tailwind CSS v4', 'Vite 8']
</script>

<template>
  <section
    class="home-hero relative -mx-4 overflow-hidden rounded-2xl border border-studio-200/60 bg-studio-950 px-6 py-14 sm:-mx-6 sm:px-10 sm:py-20 lg:-mx-10 lg:rounded-3xl lg:py-24"
    aria-labelledby="home-hero-heading"
  >
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="home-orb home-orb-a absolute -top-24 -right-16 size-72 rounded-full bg-accent/30 blur-3xl"
      />
      <div
        class="home-orb home-orb-b absolute -bottom-32 -left-20 size-96 rounded-full bg-[#5ec4ff]/20 blur-3xl"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(45,212,191,0.18),transparent_55%)]"
      />
    </div>

    <div class="relative mx-auto max-w-5xl">
      <p
        class="home-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-accent uppercase backdrop-blur-sm"
        style="--home-delay: 0ms"
      >
        <span class="home-pulse-dot size-1.5 rounded-full bg-accent" aria-hidden="true" />
        Component catalog &amp; design system
      </p>

      <h1
        id="home-hero-heading"
        class="home-fade-up font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]"
        style="--home-delay: 80ms"
      >
        Everything you need to
        <span
          class="mt-1 block bg-[linear-gradient(105deg,#7dd3c0_0%,#2dd4bf_45%,#5ec4ff_100%)] bg-clip-text text-transparent"
        >
          ship polished interfaces
        </span>
      </h1>

      <p
        class="home-fade-up mt-6 max-w-2xl text-base leading-relaxed text-studio-300 sm:text-lg"
        style="--home-delay: 160ms"
      >
        A curated library of production-ready Vue sections — heroes, navigation, cards, forms,
        CTAs, footers, and full-page templates. Live previews with copy-paste source for every
        pattern.
      </p>

      <div
        class="home-fade-up mt-8 flex flex-wrap items-center gap-3"
        style="--home-delay: 240ms"
      >
        <RouterLink
          :to="{ name: 'category', params: { id: 'template' } }"
          class="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white no-underline shadow-[0_12px_40px_rgba(26,122,102,0.45)] transition hover:bg-accent-hover hover:shadow-[0_16px_48px_rgba(26,122,102,0.55)]"
        >
          Explore templates
          <svg
            class="size-4 transition group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </RouterLink>
        <RouterLink
          :to="{ name: 'category', params: { id: 'hero' } }"
          class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white no-underline backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10"
        >
          Browse heroes
        </RouterLink>
      </div>

      <ul
        class="home-fade-up mt-10 flex flex-wrap gap-2"
        style="--home-delay: 320ms"
        aria-label="Tech stack"
      >
        <li
          v-for="tech in techStack"
          :key="tech"
          class="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-studio-200"
        >
          {{ tech }}
        </li>
      </ul>
    </div>
  </section>
</template>
