<script setup lang="ts">
/**
 * Dark hero with announcement badge, gradient headline, and feature grid.
 */
const features = [
  {
    title: 'Composable blocks',
    body: 'Swap sections in and out without rebuilding layout chrome.',
  },
  {
    title: 'Token-aware',
    body: 'Accent and surface colors stay consistent across the catalog.',
  },
  {
    title: 'Copy the source',
    body: 'Every preview ships with the exact Vue markup you see.',
  },
  {
    title: 'Responsive first',
    body: 'Breakpoints tuned for mobile, tablet, and desktop canvases.',
  },
]
</script>

<template>
  <section
    class="relative -mx-6 -my-6 overflow-hidden bg-studio-950 px-6 py-12 text-studio-100 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(26,122,102,0.35),transparent),radial-gradient(ellipse_50%_40%_at_100%_50%,rgba(82,122,112,0.15),transparent)]"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-4xl text-center">
      <a
        href="#"
        class="group inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-left text-sm no-underline backdrop-blur-sm transition hover:border-accent/40 hover:bg-white/10"
        @click.prevent
      >
        <span
          class="shrink-0 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase"
        >
          New
        </span>
        <span class="truncate text-studio-200">
          v2 catalog is live — 3 hero patterns ready to ship
        </span>
        <svg
          class="size-3.5 shrink-0 text-studio-400 transition group-hover:translate-x-0.5 group-hover:text-accent"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>

      <h2
        class="mt-8 font-display text-3xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.1]"
      >
        <span class="text-white">Craft landing pages with</span>
        <span
          class="mt-1 block bg-[linear-gradient(105deg,#7dd3c0_0%,#f0c674_55%,#5ec4ff_100%)] bg-clip-text text-transparent"
        >
          intentional motion &amp; clarity
        </span>
      </h2>
      <p class="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-studio-300 sm:text-lg">
        A darker stage for launches and product drops. Lead with a badge, own the headline, then
        prove value in a compact feature grid.
      </p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#"
          class="inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-[0_10px_30px_rgba(26,122,102,0.35)] transition hover:bg-accent-hover"
          @click.prevent
        >
          Get started free
        </a>
        <a
          href="#"
          class="inline-flex rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:border-white/25 hover:bg-white/10"
          @click.prevent
        >
          See examples
        </a>
      </div>
    </div>

    <ul
      class="relative mx-auto mt-12 grid max-w-4xl list-none grid-cols-1 gap-3 p-0 sm:mt-14 sm:grid-cols-2"
    >
      <li
        v-for="feature in features"
        :key="feature.title"
        class="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left backdrop-blur-sm transition hover:border-accent/30 hover:bg-white/[0.05]"
      >
        <div class="mb-3 flex size-9 items-center justify-center rounded-lg bg-accent/20 text-accent">
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <h3 class="font-display text-base font-semibold text-white">
          {{ feature.title }}
        </h3>
        <p class="mt-1.5 text-sm leading-relaxed text-studio-400">
          {{ feature.body }}
        </p>
      </li>
    </ul>
  </section>
</template>
