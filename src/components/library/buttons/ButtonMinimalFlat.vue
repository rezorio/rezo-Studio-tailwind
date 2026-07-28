<script setup lang="ts">
/**
 * Minimal flat buttons — understated text actions with a subtle underline reveal.
 */
</script>

<template>
  <div class="-mx-6 -my-6 bg-white px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16">
    <div class="mx-auto max-w-md text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Minimal</p>
      <h3 class="mt-2 font-display text-xl font-semibold tracking-tight text-studio-950">
        Flat &amp; quiet
      </h3>
      <p class="mt-2 text-sm text-studio-600">
        Low-visual-weight actions for secondary flows and inline toolbars.
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-6">
        <button
          type="button"
          class="group relative text-sm font-semibold text-studio-700 transition-colors hover:text-accent"
        >
          Continue
          <span
            class="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          class="group inline-flex items-center gap-1.5 text-sm font-semibold text-studio-500 transition-colors hover:text-studio-950"
        >
          Skip for now
          <svg
            class="size-3.5 opacity-50 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        <button
          type="button"
          class="rounded-md px-3 py-1.5 text-sm font-semibold text-studio-600 transition hover:bg-studio-100 hover:text-studio-950"
        >
          Dismiss
        </button>
      </div>
    </div>
  </div>
</template>
