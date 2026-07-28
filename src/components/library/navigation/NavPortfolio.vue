<script setup lang="ts">
/**
 * Creative wordmark header with centered links and a quiet contact affordance.
 */
import { ref } from 'vue'
import brandLogo from '@/assets/brand/logo.png'

const mobileOpen = ref(false)

function closeMobileMenu() {
  mobileOpen.value = false
}

withDefaults(
  defineProps<{
    /** Hide the preview placeholder when stacked under a hero in a full-page template. */
    embedded?: boolean
  }>(),
  { embedded: false },
)

const links = [
  { label: 'Work', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Journal', href: '#' },
]
</script>

<template>
  <header class="relative -mx-6 -my-6 sm:-mx-8 sm:-my-8">
    <div
      class="border-b border-studio-900/10 bg-[linear-gradient(180deg,rgba(244,247,246,0.92)_0%,rgba(255,255,255,0.88)_100%)] backdrop-blur-sm"
    >
      <div
        class="mx-auto grid h-16 max-w-5xl grid-cols-[1fr_auto] items-center gap-4 px-6 md:grid-cols-[1fr_auto_1fr] md:px-8 sm:h-[4.25rem]"
      >
        <a href="#" class="inline-flex shrink-0 items-center no-underline" @click.prevent>
          <img
            :src="brandLogo"
            alt="Rezo Studio"
            class="h-9 w-auto rounded-md sm:h-10"
            width="180"
            height="40"
          />
        </a>

        <nav
          class="hidden items-center justify-center gap-8 md:flex"
          aria-label="Portfolio navigation"
        >
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            class="relative text-sm font-medium tracking-wide text-studio-600 no-underline transition hover:text-studio-950 after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition after:content-[''] hover:after:scale-x-100"
            @click.prevent
          >
            {{ link.label }}
          </a>
        </nav>

        <div class="flex items-center justify-end gap-2">
          <a
            href="#"
            class="hidden text-sm font-medium tracking-wide text-studio-800 no-underline transition hover:text-accent md:inline"
            @click.prevent
          >
            Contact
          </a>
          <button
            type="button"
            class="inline-flex size-10 items-center justify-center rounded-md text-studio-800 transition hover:bg-studio-100/80 md:hidden"
            :aria-expanded="mobileOpen"
            aria-controls="nav-portfolio-mobile"
            aria-label="Toggle menu"
            @click="mobileOpen = !mobileOpen"
          >
            <svg v-if="!mobileOpen" class="size-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M4 6h12M4 10h12M4 14h8"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <svg v-else class="size-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M5 5l10 10M15 5 5 15"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div
      v-show="mobileOpen"
      id="nav-portfolio-mobile"
      class="border-b border-studio-200/80 bg-white/95 px-6 py-6 md:hidden"
    >
      <nav class="flex flex-col gap-1" aria-label="Mobile portfolio navigation">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="rounded-md px-2 py-3 font-display text-lg font-medium tracking-tight text-studio-900 no-underline hover:bg-studio-50"
          @click.prevent="closeMobileMenu"
        >
          {{ link.label }}
        </a>
        <a
          href="#"
          class="mt-2 rounded-md px-2 py-3 text-base font-medium text-accent no-underline hover:bg-accent-muted/50"
          @click.prevent="closeMobileMenu"
        >
          Contact
        </a>
      </nav>
    </div>

    <!-- Preview context strip (hidden when embedded in a full-page template) -->
    <div
      v-if="!embedded"
      class="relative overflow-hidden bg-[linear-gradient(160deg,#e8f0ed_0%,#f7fbfa_40%,#ffffff_100%)] px-6 py-14 sm:px-8 sm:py-16"
      aria-hidden="true"
    >
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_80%_40%,rgba(26,122,102,0.12),transparent_60%)]"
      />
      <div class="relative mx-auto max-w-md">
        <div class="h-2.5 w-16 rounded bg-studio-200/80" />
        <div class="mt-5 h-10 w-4/5 max-w-xs rounded-lg bg-studio-950/90" />
        <div class="mt-4 space-y-2">
          <div class="h-2.5 w-full rounded bg-studio-200/70" />
          <div class="h-2.5 w-5/6 rounded bg-studio-200/50" />
        </div>
      </div>
    </div>
  </header>
</template>
