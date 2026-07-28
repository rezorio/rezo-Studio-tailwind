<script setup lang="ts">
/**
 * Shimmer sweep button — a light streak glides across on hover.
 */
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-950 px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16">
    <div class="mx-auto max-w-md text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Animated</p>
      <h3 class="mt-2 font-display text-xl font-semibold tracking-tight text-white">
        Shimmer sweep
      </h3>
      <p class="mt-2 text-sm text-studio-400">
        Hover to see a glossy light streak glide across the surface.
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button type="button" class="btn-shimmer group relative overflow-hidden rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(26,122,102,0.35)]">
          <span class="relative z-10">Upgrade plan</span>
          <span class="btn-shimmer__sweep" aria-hidden="true" />
        </button>

        <button type="button" class="btn-shimmer group relative overflow-hidden rounded-lg border border-studio-700 bg-studio-900 px-5 py-2.5 text-sm font-semibold text-studio-100">
          <span class="relative z-10">Explore features</span>
          <span class="btn-shimmer__sweep btn-shimmer__sweep--subtle" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-shimmer__sweep {
  position: absolute;
  inset: 0;
  transform: translateX(-120%) skewX(-18deg);
  background: linear-gradient(
    105deg,
    transparent 35%,
    rgba(255, 255, 255, 0.45) 50%,
    transparent 65%
  );
  transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-shimmer__sweep--subtle {
  background: linear-gradient(
    105deg,
    transparent 35%,
    rgba(255, 255, 255, 0.12) 50%,
    transparent 65%
  );
}

.btn-shimmer:hover .btn-shimmer__sweep {
  transform: translateX(120%) skewX(-18deg);
}
</style>
