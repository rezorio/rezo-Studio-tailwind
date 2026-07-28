<script setup lang="ts">
/**
 * Magnetic lift button — floats upward with a soft shadow on hover.
 */
</script>

<template>
  <div class="-mx-6 -my-6 bg-white px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16">
    <div class="mx-auto max-w-lg text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Animated</p>
      <h3 class="mt-2 font-display text-xl font-semibold tracking-tight text-studio-950">
        Magnetic lift
      </h3>
      <p class="mt-2 text-sm text-studio-600">
        Buttons rise and cast a deeper shadow on hover — like they're lifting off the page.
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-5">
        <button type="button" class="btn-lift rounded-full bg-studio-950 px-6 py-2.5 text-sm font-semibold text-white">
          Start free trial
        </button>

        <button type="button" class="btn-lift rounded-xl border-2 border-accent bg-white px-6 py-2.5 text-sm font-semibold text-accent">
          Book a demo
        </button>

        <button type="button" class="btn-lift btn-lift--soft rounded-lg bg-accent-muted px-5 py-2.5 text-sm font-semibold text-accent">
          View docs
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-lift {
  box-shadow: 0 4px 14px rgba(20, 31, 28, 0.08);
  transition:
    transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1),
    box-shadow 0.35s cubic-bezier(0.34, 1.4, 0.64, 1);
}

.btn-lift:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 14px 28px rgba(20, 31, 28, 0.14);
}

.btn-lift:active {
  transform: translateY(-1px) scale(0.98);
  box-shadow: 0 6px 16px rgba(20, 31, 28, 0.1);
  transition-duration: 0.1s;
}

.btn-lift--soft:hover {
  box-shadow: 0 12px 24px rgba(26, 122, 102, 0.18);
}
</style>
