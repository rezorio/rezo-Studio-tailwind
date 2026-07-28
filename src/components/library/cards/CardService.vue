<script setup lang="ts">
/**
 * Agency service card: numbered engagement, outcome list, and Book a call CTA.
 */
const service = {
  number: '02',
  name: 'Product UI',
  desc: 'Dashboards, flows, and component kits that ship with your roadmap.',
  outcomes: [
    'Design system tokens & patterns',
    'High-fidelity flows for core jobs',
    'Handoff-ready Vue + Tailwind',
  ],
  duration: '4–6 weeks',
  format: 'Retainer or sprint',
}
</script>

<template>
  <div
    class="-mx-6 -my-6 bg-[linear-gradient(135deg,#eef5f2_0%,#ffffff_45%,#f7fbfa_100%)] px-6 py-10 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-12"
  >
    <article
      class="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-studio-200/90 bg-white/95 shadow-[0_16px_40px_rgba(20,31,28,0.1)] backdrop-blur-sm"
    >
      <!-- Accent rail -->
      <div
        class="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,#1a7a66_0%,#5ec4ff_100%)]"
        aria-hidden="true"
      />

      <div class="p-6 pl-7 sm:p-7 sm:pl-8">
        <div class="flex items-start justify-between gap-4">
          <span
            class="font-display text-4xl font-semibold leading-none tracking-tight text-accent/25 sm:text-5xl"
            aria-hidden="true"
          >
            {{ service.number }}
          </span>
          <div class="flex flex-wrap justify-end gap-2">
            <span
              class="rounded-lg border border-studio-200 bg-studio-50 px-2.5 py-1 text-[11px] font-medium text-studio-600"
            >
              {{ service.duration }}
            </span>
            <span
              class="rounded-lg border border-accent/20 bg-accent-muted/60 px-2.5 py-1 text-[11px] font-semibold text-accent"
            >
              {{ service.format }}
            </span>
          </div>
        </div>

        <h3 class="mt-4 font-display text-xl font-semibold tracking-tight text-studio-950 sm:text-2xl">
          {{ service.name }}
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-studio-600 sm:text-base">
          {{ service.desc }}
        </p>

        <ul class="mt-6 space-y-2.5 border-t border-studio-100 pt-5">
          <li
            v-for="item in service.outcomes"
            :key="item"
            class="flex items-start gap-2.5 text-sm text-studio-700"
          >
            <span
              class="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-md bg-accent-muted text-accent"
              aria-hidden="true"
            >
              <svg class="size-3" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 6.2 4.8 8.5 9.5 3.5"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            {{ item }}
          </li>
        </ul>

        <div class="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#"
            class="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white no-underline shadow-[0_6px_16px_rgba(26,122,102,0.28)] transition hover:bg-accent-hover"
            @click.prevent
          >
            Book a call
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
          <a
            href="#"
            class="text-sm font-medium text-studio-600 no-underline transition hover:text-studio-950"
            @click.prevent
          >
            View process
          </a>
        </div>
      </div>
    </article>
  </div>
</template>
