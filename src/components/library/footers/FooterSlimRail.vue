<script setup lang="ts">
/**
 * Slim Rail footer — one quiet row: brand, inline links, and copyright.
 */
import brandLogo from '@/assets/brand/logo.png'

const links = [
  { label: 'Docs', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Contact', href: '#' },
]
</script>

<template>
  <footer class="-mx-6 -my-6 sm:-mx-8 sm:-my-8">
    <div class="h-20 bg-white sm:h-24" aria-hidden="true" />

    <div class="border-t border-studio-200/90 bg-white px-4 py-4 sm:px-8 sm:py-5">
      <div
        class="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:gap-4 sm:text-left"
      >
        <a href="#" class="inline-flex shrink-0 items-center no-underline" @click.prevent>
          <img
            :src="brandLogo"
            alt="Rezo Studio"
            class="h-6 w-auto rounded-sm opacity-90"
            width="120"
            height="28"
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

        <p class="shrink-0 text-xs text-studio-400">
          © {{ new Date().getFullYear() }} Rezo Studio
        </p>
      </div>
    </div>
  </footer>
</template>
