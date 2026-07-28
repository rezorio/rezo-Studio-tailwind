<script setup lang="ts">
/**
 * Gradient glow button — animated border glow with a breathing pulse.
 */
</script>

<template>
  <div class="-mx-6 -my-6 bg-[#0a1210] px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16">
    <div class="mx-auto max-w-md text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Animated</p>
      <h3 class="mt-2 font-display text-xl font-semibold tracking-tight text-white">
        Gradient glow
      </h3>
      <p class="mt-2 text-sm text-studio-400">
        A rotating gradient halo pulses behind the button for premium CTAs.
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-6">
        <div class="btn-glow-wrap">
          <span class="btn-glow-wrap__halo" aria-hidden="true" />
          <button
            type="button"
            class="btn-glow-wrap__btn relative z-10 inline-flex items-center gap-2 rounded-full bg-studio-950 px-6 py-2.5 text-sm font-semibold text-white"
          >
            Launch project
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
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            </svg>
          </button>
        </div>

        <div class="btn-glow-wrap btn-glow-wrap--accent">
          <span class="btn-glow-wrap__halo" aria-hidden="true" />
          <button
            type="button"
            class="btn-glow-wrap__btn relative z-10 inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white"
          >
            Get early access
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-glow-wrap {
  position: relative;
  display: inline-flex;
  border-radius: 9999px;
  padding: 2px;
}

.btn-glow-wrap--accent {
  border-radius: 0.75rem;
}

.btn-glow-wrap__halo {
  position: absolute;
  inset: -3px;
  border-radius: inherit;
  background: conic-gradient(
    from var(--glow-angle, 0deg),
    #1a7a66,
    #2dd4bf,
    #6ee7b7,
    #1a7a66
  );
  opacity: 0.85;
  filter: blur(6px);
  animation: glow-rotate 3s linear infinite, glow-pulse 2.4s ease-in-out infinite;
}

.btn-glow-wrap--accent .btn-glow-wrap__halo {
  border-radius: 0.875rem;
}

.btn-glow-wrap__btn {
  border-radius: inherit;
}

@property --glow-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes glow-rotate {
  to {
    --glow-angle: 360deg;
  }
}

@keyframes glow-pulse {
  0%,
  100% {
    opacity: 0.65;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.04);
  }
}
</style>
