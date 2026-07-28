<script setup lang="ts">
/**
 * Slim Dock footer — compact floating pill with brand mark and a whisper of links.
 */
import brandLogo from '@/assets/brand/logo.png'

const links = [
  { label: 'GitHub', href: '#' },
  { label: 'Status', href: '#' },
]
</script>

<template>
  <footer class="-mx-6 -my-6 sm:-mx-8 sm:-my-8">
    <div
      class="h-24 bg-[linear-gradient(180deg,#ffffff_0%,#f4f7f6_100%)] sm:h-28"
      aria-hidden="true"
    />

    <div class="bg-studio-50 px-4 py-6 sm:px-8 sm:py-8">
      <div
        class="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-studio-200/80 bg-white/90 px-4 py-3 shadow-[0_1px_3px_rgba(20,31,28,0.04)] backdrop-blur-sm sm:flex-row sm:justify-between sm:gap-4 sm:rounded-full sm:px-5 sm:py-3"
      >
        <a href="#" class="inline-flex shrink-0 items-center no-underline" @click.prevent>
          <img
            :src="brandLogo"
            alt="Rezo Studio"
            class="h-5 w-auto rounded-sm"
            width="100"
            height="24"
          />
        </a>

        <nav
          class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1"
          aria-label="Footer"
        >
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            class="text-xs font-medium text-studio-500 no-underline transition hover:text-accent"
            @click.prevent
          >
            {{ link.label }}
          </a>
        </nav>

        <p class="shrink-0 text-[11px] tabular-nums text-studio-400">
          © {{ new Date().getFullYear() }}
        </p>
      </div>

      <p class="mt-4 text-center text-[11px] text-studio-400">
        Crafted in Vue · preview, copy, ship
      </p>
    </div>
  </footer>
</template>
