<script setup lang="ts">
/**
 * Beacon Pulse CTA — dark stage with concentric rings pulsing behind
 * a single glowing action, like a lighthouse signal in a quiet sea.
 */
</script>

<template>
  <section
    class="relative -mx-6 -my-6 overflow-hidden bg-studio-950 px-6 py-14 text-studio-100 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-20"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_100%,rgba(26,122,102,0.28),transparent_65%)]"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-xl text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
        Now in early access
      </p>

      <h2
        class="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-[1.12]"
      >
        Your next release deserves a better launchpad.
      </h2>

      <p class="mx-auto mt-4 max-w-sm text-base leading-relaxed text-studio-400">
        Join teams shipping polished Vue interfaces in days, not sprints.
      </p>

      <!-- Beacon focal point -->
      <div class="relative mx-auto mt-10 flex justify-center sm:mt-12">
        <div class="beacon-rings" aria-hidden="true">
          <span class="beacon-ring beacon-ring--1" />
          <span class="beacon-ring beacon-ring--2" />
          <span class="beacon-ring beacon-ring--3" />
        </div>

        <a
          href="#"
          class="relative z-10 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white no-underline shadow-[0_0_40px_rgba(26,122,102,0.45)] transition hover:bg-accent-hover"
          @click.prevent
        >
          Claim your spot
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
        </a>
      </div>

      <p class="mt-8 text-xs text-studio-500">
        No credit card · Cancel anytime · 14-day trial
      </p>
    </div>
  </section>
</template>

<style scoped>
.beacon-rings {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.beacon-ring {
  position: absolute;
  border-radius: 9999px;
  border: 1px solid rgba(45, 212, 191, 0.25);
  animation: beacon-expand 3.5s ease-out infinite;
}

.beacon-ring--1 {
  width: 5rem;
  height: 5rem;
  animation-delay: 0s;
}

.beacon-ring--2 {
  width: 5rem;
  height: 5rem;
  animation-delay: 1.15s;
}

.beacon-ring--3 {
  width: 5rem;
  height: 5rem;
  animation-delay: 2.3s;
}

@keyframes beacon-expand {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(3.2);
    opacity: 0;
  }
}
</style>
