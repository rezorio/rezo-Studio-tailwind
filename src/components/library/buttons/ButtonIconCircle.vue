<script setup lang="ts">
/**
 * Icon-only circular buttons — compact toolbar actions with hover states.
 */
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16">
    <div class="mx-auto max-w-md text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Toolbar</p>
      <h3 class="mt-2 font-display text-xl font-semibold tracking-tight text-studio-950">
        Icon circles
      </h3>
      <p class="mt-2 text-sm text-studio-600">
        Compact round actions for toolbars, cards, and floating controls.
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Add item"
          class="inline-flex size-10 items-center justify-center rounded-full border border-studio-200 bg-white text-studio-600 shadow-sm transition hover:border-accent/40 hover:bg-accent-muted/50 hover:text-accent"
        >
          <svg
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Play"
          class="inline-flex size-10 items-center justify-center rounded-full bg-accent text-white shadow-[0_4px_14px_rgba(26,122,102,0.3)] transition hover:bg-accent-hover"
        >
          <svg
            class="size-4 translate-x-px"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Settings"
          class="inline-flex size-10 items-center justify-center rounded-full bg-studio-950 text-white transition hover:bg-studio-800"
        >
          <svg
            class="size-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path
              d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
            />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="More options"
          class="inline-flex size-10 items-center justify-center rounded-full text-studio-500 transition hover:bg-studio-200/70 hover:text-studio-950"
        >
          <svg
            class="size-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
