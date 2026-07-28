<script setup lang="ts">
/**
 * Editorial portfolio card: full-bleed project field, quiet meta, understated link.
 */
const project = {
  year: '2026',
  client: 'Northwind Labs',
  title: 'Signal — ops console',
  discipline: 'Product design · Brand',
  summary: 'A quiet interface for monitoring fleet health across distributed sites.',
}
</script>

<template>
  <div
    class="relative -mx-6 -my-6 overflow-hidden bg-[linear-gradient(160deg,#e8f0ed_0%,#f7fbfa_40%,#ffffff_100%)] px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14"
  >
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_80%_40%,rgba(26,122,102,0.12),transparent_60%)]"
      aria-hidden="true"
    />

    <article class="relative mx-auto max-w-lg">
      <!-- Visual plane -->
      <a
        href="#"
        class="group relative block aspect-[16/10] overflow-hidden no-underline outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        @click.prevent
      >
        <div
          class="absolute inset-0 bg-[linear-gradient(145deg,#141f1c_0%,#243d36_48%,#1a2e28_100%)] transition duration-500 group-hover:scale-[1.02]"
        />
        <div
          class="pointer-events-none absolute inset-0 opacity-40"
          style="
            background-image: linear-gradient(
                rgba(255, 255, 255, 0.04) 1px,
                transparent 1px
              ),
              linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
            background-size: 28px 28px;
          "
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute -left-10 top-1/4 size-40 rounded-full bg-accent/35 blur-[60px] transition duration-500 group-hover:bg-accent/45"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute bottom-0 right-0 size-48 rounded-full bg-[#5ec4ff]/15 blur-[70px]"
          aria-hidden="true"
        />

        <!-- Abstract UI silhouette -->
        <div
          class="absolute inset-x-8 bottom-8 top-10 flex flex-col gap-3 sm:inset-x-10"
          aria-hidden="true"
        >
          <div class="h-2 w-16 rounded bg-white/25" />
          <div class="h-6 w-2/3 max-w-[12rem] rounded-md bg-white/90" />
          <div class="mt-auto grid grid-cols-3 gap-2">
            <div class="h-14 rounded-md border border-white/10 bg-white/5" />
            <div class="h-14 rounded-md border border-white/10 bg-white/[0.08]" />
            <div class="h-14 rounded-md border border-white/10 bg-accent/25" />
          </div>
        </div>

        <span
          class="absolute right-5 top-5 text-[11px] font-medium tracking-[0.14em] text-white/55 uppercase"
        >
          {{ project.year }}
        </span>
      </a>

      <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div class="min-w-0">
          <p class="text-[11px] font-semibold tracking-[0.14em] text-studio-500 uppercase">
            {{ project.client }}
          </p>
          <h3 class="mt-1.5 font-display text-2xl font-semibold tracking-tight text-studio-950">
            {{ project.title }}
          </h3>
          <p class="mt-1 text-sm text-studio-500">{{ project.discipline }}</p>
          <p class="mt-3 max-w-sm text-sm leading-relaxed text-studio-600">
            {{ project.summary }}
          </p>
        </div>

        <a
          href="#"
          class="relative inline-flex shrink-0 items-center gap-2 self-start text-sm font-medium tracking-wide text-studio-800 no-underline transition after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition after:content-[''] hover:text-accent hover:after:scale-x-100 sm:self-auto"
          @click.prevent
        >
          View project
          <svg class="size-3.5" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M2.5 6h7M6.5 3l3 3-3 3"
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
