<script setup lang="ts">
/**
 * Orbit Social footer — concentric rings frame the brand; social links sit on the orbit path.
 */
import brandLogo from '@/assets/brand/logo.png'

const socials = [
  {
    label: 'Twitter',
    href: '#',
    position: 'top' as const,
    icon: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  {
    label: 'GitHub',
    href: '#',
    position: 'left' as const,
    icon: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.1-.3-2.2-.9-3.3-.5-.9-1.2-1.7-2.1-2.2.6-.2 1.2-.5 1.7-.9-.5-.1-1-.2-1.5-.3 1-.6 1.7-1.6 2-2.7-1 .6-2 1-3.1 1.2C13.8 4 12.5 4 11 4c-2.2 0-4.2.7-5.7 2.1C4.2 7.5 3.5 9.5 3.5 12c0 3.5 3 5.5 6 5.5-.4.9-.6 1.9-.6 2.9V22',
  },
  {
    label: 'LinkedIn',
    href: '#',
    position: 'right' as const,
    icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  },
]

const links = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: '#' },
]

const orbitPositionClass: Record<string, string> = {
  top: 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2',
  left: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
  right: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
}
</script>

<template>
  <footer class="relative -mx-6 -my-6 overflow-hidden sm:-mx-8 sm:-my-8">
    <!-- Page stub -->
    <div
      class="h-24 bg-[linear-gradient(180deg,#ffffff_0%,#f0f5f3_100%)] sm:h-28"
      aria-hidden="true"
    />

    <div class="relative bg-studio-950 px-6 py-14 text-white sm:px-8 sm:py-16">
      <!-- Soft top curve -->
      <div
        class="pointer-events-none absolute inset-x-0 -top-px h-8 bg-[radial-gradient(ellipse_80%_100%_at_50%_0%,#f0f5f3,transparent_70%)]"
        aria-hidden="true"
      />

      <div class="relative mx-auto max-w-lg text-center">
        <!-- Orbital frame -->
        <div class="relative mx-auto mb-8 flex size-36 items-center justify-center sm:size-40">
          <span
            class="orbit-ring absolute inset-0 rounded-full border border-white/[0.08]"
            aria-hidden="true"
          />
          <span
            class="orbit-ring orbit-ring--mid absolute inset-3 rounded-full border border-accent/25"
            aria-hidden="true"
          />
          <span
            class="orbit-ring orbit-ring--inner absolute inset-7 rounded-full border border-white/[0.12]"
            aria-hidden="true"
          />

          <!-- Social nodes on orbit -->
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            class="orbit-node absolute flex size-9 items-center justify-center rounded-full bg-studio-900/80 text-studio-400 no-underline ring-1 ring-white/10 transition hover:bg-accent hover:text-white hover:ring-accent/40"
            :class="orbitPositionClass[social.position]"
            :aria-label="social.label"
            @click.prevent
          >
            <svg
              class="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path :d="social.icon" />
            </svg>
          </a>

          <a href="#" class="relative z-10 inline-flex no-underline" @click.prevent>
            <img
              :src="brandLogo"
              alt="Rezo Studio"
              class="h-9 w-auto rounded-md brightness-0 invert"
              width="160"
              height="36"
            />
          </a>
        </div>

        <p class="text-sm leading-relaxed text-studio-400">
          Interface patterns orbiting one source of truth — preview, copy, ship.
        </p>

        <nav
          class="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          aria-label="Footer"
        >
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            class="text-sm font-medium text-studio-500 no-underline transition hover:text-accent"
            @click.prevent
          >
            {{ link.label }}
          </a>
        </nav>

        <p class="mt-10 text-xs text-studio-600">
          © {{ new Date().getFullYear() }} Rezo Studio
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.orbit-ring {
  transform-origin: center;
  animation: orbit-pulse 3s ease-in-out infinite;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
}

.orbit-ring--mid {
  animation-name: orbit-pulse-accent;
  animation-delay: 0.75s;
}

.orbit-ring--inner {
  animation-delay: 1.5s;
}

@keyframes orbit-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.35;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
  50% {
    transform: scale(1.08);
    opacity: 1;
    box-shadow: 0 0 12px 2px rgba(255, 255, 255, 0.06);
  }
}

@keyframes orbit-pulse-accent {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.4;
    box-shadow: 0 0 0 0 rgba(26, 122, 102, 0);
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
    box-shadow: 0 0 16px 4px rgba(26, 122, 102, 0.35);
  }
}
</style>
