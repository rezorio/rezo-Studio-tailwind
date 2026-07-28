<script setup lang="ts">
/**
 * Centered hero with dual CTAs and a dashboard preview placeholder.
 */
</script>

<template>
  <section
    class="-mx-6 -my-6 overflow-hidden bg-[linear-gradient(180deg,#f7fbfa_0%,#ffffff_55%,#eef5f2_100%)] px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16"
  >
    <div class="mx-auto max-w-3xl text-center">
      <p class="mb-4 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
        Design system
      </p>
      <h2
        class="font-display text-3xl font-semibold tracking-tight text-studio-950 sm:text-5xl sm:leading-[1.1]"
      >
        Ship polished interfaces without starting from zero
      </h2>
      <p class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-studio-600 sm:text-lg">
        Drop-in Vue sections styled with Tailwind. Preview live, copy the source, and adapt each
        pattern to your product.
      </p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#"
          class="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-[0_8px_20px_rgba(26,122,102,0.25)] transition hover:bg-accent-hover"
          @click.prevent
        >
          Start building
        </a>
        <a
          href="#"
          class="inline-flex items-center justify-center rounded-lg border border-studio-200 bg-white/90 px-5 py-2.5 text-sm font-semibold text-studio-700 no-underline transition hover:border-studio-300 hover:bg-white"
          @click.prevent
        >
          Browse components
        </a>
      </div>
    </div>

    <!-- Dashboard preview placeholder -->
    <div class="relative mx-auto mt-12 max-w-4xl sm:mt-14">
      <div
        class="pointer-events-none absolute inset-x-8 -bottom-6 top-1/2 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        class="relative overflow-hidden rounded-2xl border border-studio-200/90 bg-white shadow-[0_24px_60px_rgba(20,31,28,0.12)]"
        role="img"
        aria-label="Dashboard preview placeholder"
      >
        <div class="flex items-center gap-2 border-b border-studio-100 bg-studio-50/80 px-4 py-3">
          <span class="size-2.5 rounded-full bg-studio-300" />
          <span class="size-2.5 rounded-full bg-studio-300" />
          <span class="size-2.5 rounded-full bg-studio-300" />
          <span
            class="ml-3 hidden h-6 flex-1 rounded-md bg-white sm:block sm:max-w-xs"
            aria-hidden="true"
          />
        </div>
        <div class="grid gap-4 p-4 sm:grid-cols-[11rem_1fr] sm:p-5">
          <aside class="hidden space-y-2 sm:block" aria-hidden="true">
            <div class="h-8 rounded-lg bg-accent-muted" />
            <div class="h-7 rounded-lg bg-studio-100" />
            <div class="h-7 rounded-lg bg-studio-100" />
            <div class="h-7 rounded-lg bg-studio-100" />
            <div class="mt-6 h-24 rounded-xl bg-studio-50" />
          </aside>
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div
                v-for="i in 3"
                :key="i"
                class="rounded-xl border border-studio-100 bg-studio-50/70 p-3"
                aria-hidden="true"
              >
                <div class="h-2 w-12 rounded bg-studio-200" />
                <div class="mt-3 h-6 w-16 rounded bg-studio-900/80" />
                <div class="mt-2 h-1.5 w-full rounded bg-studio-200/80" />
              </div>
            </div>
            <div
              class="h-36 rounded-xl border border-dashed border-studio-200 bg-[linear-gradient(135deg,#f4f7f6_0%,#d8efe8_50%,#e4ece9_100%)] sm:h-44"
              aria-hidden="true"
            >
              <div class="flex h-full items-end gap-2 px-5 pb-5">
                <div
                  v-for="(h, idx) in [40, 65, 48, 78, 55, 88, 62]"
                  :key="idx"
                  class="flex-1 rounded-t-md bg-accent/70"
                  :style="{ height: `${h}%` }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
