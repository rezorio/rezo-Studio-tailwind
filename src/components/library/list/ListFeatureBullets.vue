<script setup lang="ts">
/**
 * Feature bullets — icon-led benefit list with accent checkmarks.
 */
const features = [
  {
    title: 'Ship faster',
    description: 'Pre-built sections drop into any Vue stack without rework.',
  },
  {
    title: 'Stay consistent',
    description: 'Shared tokens and spacing keep every page feeling cohesive.',
  },
  {
    title: 'Preview live',
    description: 'See components in context before you copy source into prod.',
  },
  {
    title: 'Own the code',
    description: 'No runtime dependency — copy, tweak, and deploy.',
  },
]
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <div class="mx-auto max-w-md">
      <p class="text-xs font-semibold tracking-[0.14em] text-studio-400 uppercase">
        Why teams pick rezo
      </p>
      <h2 class="mt-1 font-display text-xl font-semibold tracking-tight text-studio-950">
        Built for product velocity
      </h2>

      <ul class="mt-8 space-y-5">
        <li v-for="feature in features" :key="feature.title" class="flex gap-4">
          <span
            class="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-muted text-accent"
            aria-hidden="true"
          >
            <svg class="size-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2.5 6l2.5 2.5L9.5 4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <div>
            <h3 class="font-display text-base font-semibold text-studio-950">
              {{ feature.title }}
            </h3>
            <p class="mt-1 text-sm leading-relaxed text-studio-500">
              {{ feature.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
