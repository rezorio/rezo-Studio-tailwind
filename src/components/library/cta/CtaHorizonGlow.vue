<script setup lang="ts">
/**
 * Horizon Glow CTA — a luminous horizon line anchors the primary action
 * while soft mesh gradients and echo typography add depth without clutter.
 */
const stats = [
  { value: '4.9', label: 'avg. rating' },
  { value: '12k+', label: 'teams' },
  { value: '< 2 min', label: 'to first layout' },
]
</script>

<template>
  <section
    class="relative -mx-6 -my-6 overflow-hidden bg-[linear-gradient(180deg,#f7fbfa_0%,#ffffff_42%,#eef5f2_100%)] px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-20"
  >
    <!-- Echo typography texture -->
    <p
      class="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display text-[clamp(3.5rem,14vw,9rem)] font-semibold leading-none tracking-tight text-studio-950/[0.035]"
      aria-hidden="true"
    >
      Ship faster
    </p>

    <!-- Ambient mesh -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_55%,rgba(26,122,102,0.14),transparent_70%)]"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-2xl text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
        Ready to launch
      </p>

      <h2
        class="mt-3 font-display text-3xl font-semibold tracking-tight text-studio-950 sm:text-4xl sm:leading-[1.12]"
      >
        One clear next step.<br class="hidden sm:block" />
        No noise, just momentum.
      </h2>

      <p class="mx-auto mt-4 max-w-md text-base leading-relaxed text-studio-600">
        Drop in polished sections, preview live, and ship the interface your team has been
        sketching for weeks.
      </p>

      <!-- Horizon + action focal point -->
      <div class="relative mx-auto mt-10 max-w-lg sm:mt-12">
        <div class="horizon-beam" aria-hidden="true">
          <span class="horizon-core" />
          <span class="horizon-glow" />
        </div>

        <div class="relative z-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-studio-950 px-6 py-3 text-sm font-semibold text-white no-underline shadow-[0_12px_32px_rgba(20,31,28,0.22)] ring-4 ring-white transition hover:bg-studio-800"
            @click.prevent
          >
            Start building free
            <svg
              class="size-4 text-accent"
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
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center rounded-full border border-studio-200 bg-white/80 px-5 py-3 text-sm font-semibold text-studio-700 no-underline backdrop-blur-sm transition hover:border-studio-300 hover:bg-white"
            @click.prevent
          >
            View examples
          </a>
        </div>
      </div>

      <!-- Trust strip -->
      <dl
        class="mx-auto mt-10 flex max-w-md flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-12"
      >
        <div v-for="item in stats" :key="item.label" class="text-center">
          <dt class="sr-only">{{ item.label }}</dt>
          <dd class="font-display text-lg font-semibold tracking-tight text-studio-950">
            {{ item.value }}
          </dd>
          <dd class="text-[11px] font-medium tracking-wide text-studio-500 uppercase">
            {{ item.label }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.horizon-beam {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  transform: translateY(-50%);
}

.horizon-core {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(26, 122, 102, 0.15) 20%,
    rgba(26, 122, 102, 0.55) 50%,
    rgba(26, 122, 102, 0.15) 80%,
    transparent 100%
  );
}

.horizon-glow {
  position: absolute;
  left: 50%;
  top: 50%;
  width: min(72%, 18rem);
  height: 3rem;
  transform: translate(-50%, -50%);
  border-radius: 9999px;
  background: radial-gradient(ellipse at center, rgba(26, 122, 102, 0.35), transparent 70%);
  animation: horizon-pulse 4s ease-in-out infinite;
}

@keyframes horizon-pulse {
  0%,
  100% {
    opacity: 0.55;
    transform: translate(-50%, -50%) scaleX(0.92);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scaleX(1.08);
  }
}
</style>
