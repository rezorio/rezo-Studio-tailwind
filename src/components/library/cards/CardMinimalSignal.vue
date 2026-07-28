<script setup lang="ts">
/**
 * Signal status card: live pulse dot and waveform representing system health.
 */
const status = {
  label: 'Operational',
  title: 'System health',
  uptime: '99.9%',
  latency: '42ms avg',
}
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <article
      class="mx-auto max-w-xs rounded-xl border border-studio-200 bg-white px-6 py-6 shadow-[0_1px_0_rgba(20,31,28,0.04)]"
    >
      <div class="flex items-center gap-2.5">
        <span class="relative flex size-2 shrink-0" aria-hidden="true">
          <span
            class="absolute inline-flex size-full animate-ping rounded-full bg-accent/35 opacity-80"
          />
          <span class="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        <span class="text-xs font-semibold tracking-wide text-accent uppercase">
          {{ status.label }}
        </span>
      </div>

      <!-- Pulse waveform -->
      <svg
        class="mt-5 h-10 w-full text-accent/70"
        viewBox="0 0 160 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 20h28l6-12 8 24 6-16 8 20 6-14 10 22 8-18 6 12 8-8 10 16 6-10 8 14 10-22 6 8 8-4 12 8"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <h3 class="mt-4 font-display text-base font-semibold tracking-tight text-studio-950">
        {{ status.title }}
      </h3>

      <dl class="mt-3 flex items-end justify-between gap-4 border-t border-studio-100 pt-4">
        <div>
          <dt class="text-[10px] font-semibold tracking-[0.12em] text-studio-400 uppercase">
            Uptime
          </dt>
          <dd class="mt-0.5 font-display text-xl font-semibold tabular-nums text-studio-950">
            {{ status.uptime }}
          </dd>
        </div>
        <div class="text-right">
          <dt class="text-[10px] font-semibold tracking-[0.12em] text-studio-400 uppercase">
            Response
          </dt>
          <dd class="mt-0.5 text-sm font-medium tabular-nums text-studio-600">
            {{ status.latency }}
          </dd>
        </div>
      </dl>
    </article>
  </div>
</template>
