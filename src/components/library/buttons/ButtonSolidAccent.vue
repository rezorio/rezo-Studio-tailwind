<script setup lang="ts">
/**
 * Primary solid buttons — accent fill, dark neutral, and soft secondary variants.
 */
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16">
    <div class="mx-auto max-w-lg text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Actions</p>
      <h3 class="mt-2 font-display text-xl font-semibold tracking-tight text-studio-950">
        Solid emphasis
      </h3>
      <p class="mt-2 text-sm text-studio-600">
        High-contrast fills for primary flows — pair with quieter secondary actions.
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          class="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(26,122,102,0.28)] transition hover:bg-accent-hover"
        >
          Get started
          <svg
            class="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>

        <button
          type="button"
          class="inline-flex items-center justify-center rounded-full bg-studio-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-studio-800"
        >
          View pricing
        </button>

        <button
          type="button"
          class="inline-flex items-center justify-center rounded-full border border-studio-200 bg-white px-5 py-2.5 text-sm font-semibold text-studio-700 transition hover:border-studio-300 hover:bg-studio-50"
        >
          Learn more
        </button>
      </div>
    </div>
  </div>
</template>
