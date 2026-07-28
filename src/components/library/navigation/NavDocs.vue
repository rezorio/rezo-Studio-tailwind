<script setup lang="ts">
/**
 * Documentation header with search, version badge, and API-first link structure.
 */
import { ref } from 'vue'
import brandIcon from '@/assets/brand/icon.png'

const mobileOpen = ref(false)
const versionOpen = ref(false)

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

const versions = ['v2.4 (latest)', 'v2.3', 'v2.2', 'v1.x']

const navLinks = [
  { label: 'Docs', active: true },
  { label: 'API', active: false },
  { label: 'Guides', active: false },
  { label: 'Examples', active: false },
  { label: 'Changelog', active: false },
]
</script>

<template>
  <header class="relative -mx-6 -my-6 sm:-mx-8 sm:-my-8">
    <div class="border-b border-studio-200 bg-white">
      <div class="mx-auto flex h-14 max-w-6xl items-center gap-4 px-6 sm:h-[3.75rem] sm:px-8">
        <a href="#" class="flex shrink-0 items-center gap-2 no-underline" @click.prevent>
          <img
            :src="brandIcon"
            alt=""
            class="size-7 rounded-md object-contain"
            width="28"
            height="28"
          />
          <span class="hidden font-display text-sm font-semibold text-studio-950 sm:inline">
            Rezo Docs
          </span>
        </a>

        <div
          class="relative hidden lg:block"
          @mouseenter="versionOpen = true"
          @mouseleave="versionOpen = false"
        >
          <button
            type="button"
            class="inline-flex items-center gap-1 rounded-md border border-studio-200 bg-studio-50/80 px-2 py-1 text-[11px] font-semibold tracking-wide text-studio-600 uppercase transition hover:border-studio-300"
            :aria-expanded="versionOpen"
            @click="versionOpen = !versionOpen"
          >
            v2.4
            <svg class="size-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2.5 4.5 6 8l3.5-3.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div
            v-show="versionOpen"
            class="absolute top-full left-0 z-20 mt-1 w-40 overflow-hidden rounded-lg border border-studio-200 bg-white py-1 shadow-lg"
          >
            <button
              v-for="ver in versions"
              :key="ver"
              type="button"
              class="block w-full px-3 py-1.5 text-left text-xs text-studio-700 transition hover:bg-studio-50"
            >
              {{ ver }}
            </button>
          </div>
        </div>

        <div class="relative hidden min-w-0 flex-1 md:block">
          <label class="sr-only" for="nav-docs-search">Search documentation</label>
          <svg
            class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-studio-400"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="9" cy="9" r="5.5" stroke="currentColor" stroke-width="1.5" />
            <path d="M13.5 13.5L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
          <input
            id="nav-docs-search"
            type="search"
            placeholder="Search docs…"
            class="w-full max-w-sm rounded-lg border border-studio-200 bg-studio-50/60 py-2 pr-16 pl-9 text-sm text-studio-900 placeholder:text-studio-400 transition focus:border-accent/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
          <kbd
            class="pointer-events-none absolute top-1/2 right-3 hidden -translate-y-1/2 rounded border border-studio-200 bg-white px-1.5 py-0.5 font-sans text-[10px] font-medium text-studio-400 sm:inline"
          >
            ⌘K
          </kbd>
        </div>

        <nav class="hidden items-center gap-0.5 lg:flex" aria-label="Documentation navigation">
          <a
            v-for="link in navLinks"
            :key="link.label"
            href="#"
            class="rounded-md px-2.5 py-1.5 text-sm font-medium no-underline transition"
            :class="
              link.active
                ? 'bg-accent-muted text-accent'
                : 'text-studio-600 hover:bg-studio-50 hover:text-studio-950'
            "
            @click.prevent
          >
            {{ link.label }}
          </a>
        </nav>

        <div class="ml-auto flex items-center gap-1 sm:gap-2">
          <a
            href="#"
            class="hidden items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium text-studio-600 no-underline transition hover:bg-studio-50 hover:text-studio-950 sm:inline-flex"
            @click.prevent
          >
            <svg class="size-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clip-rule="evenodd"
              />
            </svg>
            GitHub
          </a>
          <a
            href="#"
            class="hidden rounded-lg bg-studio-950 px-3 py-2 text-sm font-semibold text-white no-underline transition hover:bg-studio-800 sm:inline-flex"
            @click.prevent
          >
            Get started
          </a>
          <button
            type="button"
            class="inline-flex size-10 items-center justify-center rounded-lg text-studio-800 transition hover:bg-studio-50 lg:hidden"
            :aria-expanded="mobileOpen"
            aria-controls="nav-docs-mobile"
            aria-label="Toggle menu"
            @click="mobileOpen = !mobileOpen"
          >
            <svg v-if="!mobileOpen" class="size-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M3 5.5h14M3 10h14M3 14.5h14"
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
      id="nav-docs-mobile"
      class="border-b border-studio-200 bg-white px-6 py-4 lg:hidden"
    >
      <label class="sr-only" for="nav-docs-search-mobile">Search documentation</label>
      <input
        id="nav-docs-search-mobile"
        type="search"
        placeholder="Search docs…"
        class="mb-4 w-full rounded-lg border border-studio-200 bg-studio-50/60 px-3 py-2.5 text-sm placeholder:text-studio-400 focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
      <nav class="space-y-0.5" aria-label="Mobile documentation navigation">
        <a
          v-for="link in navLinks"
          :key="link.label"
          href="#"
          class="block rounded-lg px-2 py-2.5 text-sm font-medium no-underline"
          :class="
            link.active
              ? 'bg-accent-muted text-accent'
              : 'text-studio-800 hover:bg-studio-50'
          "
          @click.prevent="closeMobileMenu"
        >
          {{ link.label }}
        </a>
      </nav>
      <div class="mt-4 flex flex-col gap-2 border-t border-studio-100 pt-4">
        <a
          href="#"
          class="rounded-lg px-3 py-2.5 text-center text-sm font-medium text-studio-700 no-underline hover:bg-studio-50"
          @click.prevent="closeMobileMenu"
        >
          GitHub
        </a>
        <a
          href="#"
          class="rounded-lg bg-studio-950 px-3 py-2.5 text-center text-sm font-semibold text-white no-underline"
          @click.prevent="closeMobileMenu"
        >
          Get started
        </a>
      </div>
    </div>

    <!-- Preview context strip -->
    <div
      v-if="!embedded"
      class="bg-studio-50 px-6 py-8 sm:px-8 sm:py-10"
      aria-hidden="true"
    >
      <div class="mx-auto flex max-w-6xl gap-8">
        <aside class="hidden w-44 shrink-0 space-y-2 sm:block">
          <div class="h-2.5 w-20 rounded bg-studio-200" />
          <div class="h-2 w-full rounded bg-studio-100" />
          <div class="h-2 w-4/5 rounded bg-studio-100/80" />
          <div class="h-2 w-full rounded bg-studio-100/60" />
          <div class="h-2 w-3/4 rounded bg-studio-100/60" />
        </aside>
        <div class="min-w-0 flex-1">
          <div class="h-2.5 w-16 rounded bg-accent/25" />
          <div class="mt-4 h-7 w-2/3 max-w-xs rounded-lg bg-studio-200" />
          <div class="mt-4 space-y-2">
            <div class="h-2 w-full rounded bg-studio-100" />
            <div class="h-2 w-full rounded bg-studio-100/80" />
            <div class="h-2 w-5/6 rounded bg-studio-100/60" />
          </div>
          <div class="mt-6 rounded-lg border border-studio-200 bg-white p-3">
            <div class="h-2 w-24 rounded bg-studio-950/80" />
            <div class="mt-2 h-2 w-full rounded bg-studio-100" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
