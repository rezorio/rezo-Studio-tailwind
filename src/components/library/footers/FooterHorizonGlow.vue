<script setup lang="ts">
/**
 * Horizon Glow footer — luminous top edge, echo brand texture, and a quiet link row.
 */
import brandLogo from '@/assets/brand/logo.png'

const links = [
  { label: 'Components', href: '#' },
  { label: 'Docs', href: '#' },
  { label: 'Changelog', href: '#' },
  { label: 'GitHub', href: '#' },
]
</script>

<template>
  <footer class="relative -mx-6 -my-6 overflow-hidden sm:-mx-8 sm:-my-8">
    <!-- Page stub for preview context -->
    <div
      class="h-28 bg-[linear-gradient(180deg,#ffffff_0%,#f4f7f6_100%)] sm:h-32"
      aria-hidden="true"
    />

    <div
      class="relative bg-[linear-gradient(180deg,#eef5f2_0%,#f7fbfa_38%,#ffffff_100%)] px-6 py-12 sm:px-8 sm:py-14"
    >
      <!-- Echo texture -->
      <p
        class="pointer-events-none absolute inset-x-0 bottom-8 select-none text-center font-display text-[clamp(3rem,12vw,7rem)] font-semibold leading-none tracking-tight text-studio-950/[0.04]"
        aria-hidden="true"
      >
        rezo
      </p>

      <!-- Ambient mesh -->
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(26,122,102,0.12),transparent_65%)]"
        aria-hidden="true"
      />

      <!-- Horizon beam -->
      <div class="relative mx-auto max-w-3xl">
        <div class="horizon-beam" aria-hidden="true">
          <span class="horizon-core" />
          <span class="horizon-glow" />
        </div>
      </div>

      <div class="relative mx-auto max-w-3xl text-center">
        <a href="#" class="inline-flex items-center justify-center no-underline" @click.prevent>
          <img
            :src="brandLogo"
            alt="Rezo Studio"
            class="h-8 w-auto rounded-md sm:h-9"
            width="160"
            height="36"
          />
        </a>

        <p class="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-studio-600">
          Polished Vue sections you can preview, copy, and ship — without the layout grind.
        </p>

        <nav
          class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          aria-label="Footer"
        >
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            class="text-sm font-medium text-studio-700 no-underline transition hover:text-accent"
            @click.prevent
          >
            {{ link.label }}
          </a>
        </nav>

        <p class="mt-10 text-xs text-studio-500">
          © {{ new Date().getFullYear() }} Rezo Studio. Crafted with care.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.horizon-beam {
  position: relative;
  height: 1px;
  margin-bottom: 2.5rem;
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
  width: min(72%, 16rem);
  height: 2.5rem;
  transform: translate(-50%, -50%);
  border-radius: 9999px;
  background: radial-gradient(ellipse at center, rgba(26, 122, 102, 0.3), transparent 70%);
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
