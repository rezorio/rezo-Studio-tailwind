<script setup lang="ts">
/**
 * Ghost and outline buttons — low-emphasis actions with hover affordances.
 */
const sizes = ['sm', 'md', 'lg'] as const
</script>

<template>
  <div class="-mx-6 -my-6 bg-white px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16">
    <div class="mx-auto max-w-xl">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Quiet actions</p>
      <h3 class="mt-2 font-display text-xl font-semibold tracking-tight text-studio-950">
        Ghost &amp; outline
      </h3>

      <div class="mt-8 space-y-6">
        <div class="flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-lg border border-studio-200 bg-transparent px-4 py-2 text-sm font-semibold text-studio-700 transition hover:border-accent/40 hover:bg-accent-muted/40 hover:text-accent"
          >
            Outline
          </button>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-studio-600 transition hover:bg-studio-100 hover:text-studio-950"
          >
            Ghost
          </button>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-accent underline-offset-4 transition hover:underline"
          >
            Text link
          </button>
        </div>

        <div class="rounded-xl border border-studio-100 bg-studio-50/60 p-5">
          <p class="mb-4 text-xs font-semibold tracking-wide text-studio-500 uppercase">Sizes</p>
          <div class="flex flex-wrap items-end gap-3">
            <button
              v-for="size in sizes"
              :key="size"
              type="button"
              class="inline-flex items-center justify-center rounded-full border border-studio-200 bg-white font-semibold text-studio-700 transition hover:border-accent/40 hover:text-accent"
              :class="
                size === 'sm'
                  ? 'px-3 py-1.5 text-xs'
                  : size === 'md'
                    ? 'px-4 py-2 text-sm'
                    : 'px-5 py-2.5 text-base'
              "
            >
              {{ size.toUpperCase() }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
