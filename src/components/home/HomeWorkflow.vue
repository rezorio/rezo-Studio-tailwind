<script setup lang="ts">
const highlights = [
  {
    step: '01',
    title: 'Preview live',
    body: 'Every component renders in the catalog with real Vue markup — no screenshots or placeholders.',
  },
  {
    step: '02',
    title: 'Copy the source',
    body: 'Switch to the Code tab and grab production-ready Vue + Tailwind, syntax-highlighted and one click away.',
  },
  {
    step: '03',
    title: 'Compose pages',
    body: 'Mix heroes, nav, cards, and footers — or start from a full template and customize from there.',
  },
] as const
</script>

<template>
  <section class="mt-14" aria-labelledby="workflow-heading">
    <div class="home-fade-up" style="--home-delay: 1100ms">
      <p class="text-xs font-semibold tracking-widest text-accent uppercase">How it works</p>
      <h2
        id="workflow-heading"
        class="mt-1 font-display text-2xl font-bold tracking-tight text-studio-950 sm:text-3xl"
      >
        Built for fast evaluation
      </h2>
    </div>

    <ol class="mt-6 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
      <li
        v-for="(item, index) in highlights"
        :key="item.step"
        class="home-fade-up home-workflow-card relative overflow-hidden rounded-2xl border border-studio-200/80 bg-surface/80 p-6"
        :style="{ '--home-delay': `${1160 + index * 80}ms` }"
      >
        <span
          class="font-display text-4xl font-bold text-studio-200/90 transition group-hover:text-accent/30"
          aria-hidden="true"
        >
          {{ item.step }}
        </span>
        <h3 class="mt-3 font-display text-base font-semibold text-studio-950">
          {{ item.title }}
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-studio-600">
          {{ item.body }}
        </p>
      </li>
    </ol>
  </section>
</template>
