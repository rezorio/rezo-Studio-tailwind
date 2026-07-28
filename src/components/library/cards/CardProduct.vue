<script setup lang="ts">
/**
 * Commerce product card: live metric strip, tier badge, and add-to-stack CTA.
 */
const product = {
  name: 'Pulse Board',
  tag: 'New',
  category: 'Analytics',
  price: '$49',
  period: '/mo',
  blurb: 'Live metrics, alerts, and shareable views in one calm dashboard.',
  metrics: [
    { label: 'Latency', value: '42ms' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Seats', value: 'Unlimited' },
  ],
  chartBars: [38, 55, 48, 72, 61, 88, 76],
}
</script>

<template>
  <div class="-mx-6 -my-6 bg-[linear-gradient(180deg,#f7fbfa_0%,#ffffff_55%)] px-6 py-10 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-12">
    <article
      class="group relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-studio-200 bg-white shadow-[0_20px_50px_rgba(20,31,28,0.1)] transition hover:border-accent/35 hover:shadow-[0_24px_56px_rgba(26,122,102,0.14)]"
    >
      <!-- Product stage -->
      <div
        class="relative overflow-hidden border-b border-studio-100 bg-[linear-gradient(155deg,#0f1a17_0%,#1a2e28_55%,#243d36_100%)] px-5 pb-5 pt-4"
      >
        <div
          class="pointer-events-none absolute -right-8 -top-10 size-36 rounded-full bg-accent/30 blur-3xl"
          aria-hidden="true"
        />
        <div class="relative flex items-start justify-between gap-3">
          <span
            class="inline-flex items-center rounded-md bg-accent-muted px-1.5 py-0.5 text-[10px] font-semibold text-accent"
          >
            {{ product.tag }}
          </span>
          <span class="text-[11px] font-medium tracking-[0.1em] text-studio-400 uppercase">
            {{ product.category }}
          </span>
        </div>

        <!-- Mini chart mock -->
        <div
          class="relative mt-6 flex h-24 items-end gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur-sm"
          aria-hidden="true"
        >
          <div
            v-for="(h, i) in product.chartBars"
            :key="i"
            class="flex-1 rounded-sm bg-[linear-gradient(180deg,#7dd3c0_0%,#1a7a66_100%)] opacity-80 transition group-hover:opacity-100"
            :style="{ height: `${h}%` }"
          />
        </div>
      </div>

      <div class="p-5">
        <div class="flex items-baseline justify-between gap-3">
          <h3 class="font-display text-lg font-semibold tracking-tight text-studio-950">
            {{ product.name }}
          </h3>
          <p class="shrink-0 font-display text-lg font-semibold text-studio-950">
            {{ product.price }}<span class="text-sm font-medium text-studio-500">{{ product.period }}</span>
          </p>
        </div>

        <p class="mt-2 text-sm leading-relaxed text-studio-600">
          {{ product.blurb }}
        </p>

        <dl class="mt-5 grid grid-cols-3 gap-2 border-t border-studio-100 pt-4">
          <div v-for="m in product.metrics" :key="m.label" class="text-center">
            <dt class="text-[10px] font-semibold tracking-[0.1em] text-studio-500 uppercase">
              {{ m.label }}
            </dt>
            <dd class="mt-1 text-sm font-semibold text-studio-900">{{ m.value }}</dd>
          </div>
        </dl>

        <a
          href="#"
          class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white no-underline shadow-[0_8px_20px_rgba(26,122,102,0.28)] transition hover:bg-accent-hover"
          @click.prevent
        >
          Add to stack
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
