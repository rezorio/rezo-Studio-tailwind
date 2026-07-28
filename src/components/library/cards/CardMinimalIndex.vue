<script setup lang="ts">
/**
 * Index service card: catalog entry with faded number and a single descriptor line.
 */
const entry = {
  index: '03',
  name: 'Launch sites',
  note: 'Marketing pages that convert without noise.',
}
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <article class="group mx-auto max-w-md border-b border-studio-200 pb-6">
      <div class="flex items-baseline gap-5">
        <span
          class="font-display text-4xl font-semibold leading-none tracking-tight text-studio-200 transition group-hover:text-accent/30"
          aria-hidden="true"
        >
          {{ entry.index }}
        </span>

        <div class="min-w-0 flex-1">
          <h3 class="font-display text-lg font-semibold tracking-tight text-studio-950">
            {{ entry.name }}
          </h3>
          <p class="mt-1.5 text-sm leading-relaxed text-studio-500">
            {{ entry.note }}
          </p>
        </div>

        <a
          href="#"
          class="shrink-0 text-studio-300 no-underline transition group-hover:text-accent"
          aria-label="Open {{ entry.name }}"
          @click.prevent
        >
          <svg class="size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M4 12 12 4M6 4h6v6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </article>
  </div>
</template>
