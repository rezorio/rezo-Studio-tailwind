<script setup lang="ts">
/**
 * Authenticated app shell header with workspace switcher, notifications, and user menu.
 */
import { ref } from 'vue'
import brandIcon from '@/assets/brand/icon.png'

const mobileOpen = ref(false)
const workspaceOpen = ref(false)
const userOpen = ref(false)

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

const workspaces = [
  { name: 'Acme Corp', plan: 'Pro', active: true },
  { name: 'Side project', plan: 'Free', active: false },
  { name: 'Client demo', plan: 'Team', active: false },
]

const appLinks = ['Overview', 'Projects', 'Team', 'Billing']
</script>

<template>
  <header class="relative -mx-6 -my-6 sm:-mx-8 sm:-my-8">
    <div class="border-b border-studio-800/20 bg-studio-950 text-white">
      <div class="mx-auto flex h-14 items-center gap-3 px-6 sm:h-[3.75rem] sm:gap-4 sm:px-8">
        <a href="#" class="flex shrink-0 items-center gap-2 no-underline" @click.prevent>
          <img
            :src="brandIcon"
            alt=""
            class="brand-mark size-7 rounded-md object-contain"
            width="28"
            height="28"
          />
        </a>

        <div class="hidden h-5 w-px bg-studio-700 sm:block" aria-hidden="true" />

        <div
          class="relative hidden sm:block"
          @mouseenter="workspaceOpen = true"
          @mouseleave="workspaceOpen = false"
        >
          <button
            type="button"
            class="inline-flex max-w-[10rem] items-center gap-2 rounded-lg px-2 py-1.5 text-left transition hover:bg-studio-800/80 sm:max-w-none"
            :aria-expanded="workspaceOpen"
            @click="workspaceOpen = !workspaceOpen"
          >
            <span
              class="flex size-6 shrink-0 items-center justify-center rounded-md bg-accent text-[10px] font-bold text-white"
            >
              AC
            </span>
            <span class="min-w-0">
              <span class="block truncate text-sm font-semibold text-white">Acme Corp</span>
              <span class="block text-[10px] text-studio-400">Pro workspace</span>
            </span>
            <svg class="size-3.5 shrink-0 text-studio-400" viewBox="0 0 12 12" fill="none" aria-hidden="true">
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
            v-show="workspaceOpen"
            class="absolute top-full left-0 z-20 mt-1 w-64 overflow-hidden rounded-xl border border-studio-700 bg-studio-900 py-1 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          >
            <p class="px-3 py-2 text-[10px] font-semibold tracking-[0.1em] text-studio-500 uppercase">
              Workspaces
            </p>
            <button
              v-for="ws in workspaces"
              :key="ws.name"
              type="button"
              class="flex w-full items-center justify-between gap-2 px-3 py-2 text-left transition hover:bg-studio-800"
            >
              <span class="text-sm font-medium text-white">{{ ws.name }}</span>
              <span
                class="rounded px-1.5 py-0.5 text-[10px] font-medium"
                :class="ws.active ? 'bg-accent/20 text-accent' : 'text-studio-500'"
              >
                {{ ws.plan }}
              </span>
            </button>
            <div class="mt-1 border-t border-studio-800 px-3 py-2">
              <button
                type="button"
                class="text-xs font-medium text-accent transition hover:text-accent-hover"
              >
                + Create workspace
              </button>
            </div>
          </div>
        </div>

        <nav class="hidden items-center gap-1 md:flex" aria-label="App navigation">
          <a
            v-for="(link, i) in appLinks"
            :key="link"
            href="#"
            class="rounded-md px-2.5 py-1.5 text-sm font-medium no-underline transition"
            :class="
              i === 0
                ? 'bg-studio-800 text-white'
                : 'text-studio-400 hover:bg-studio-800/60 hover:text-white'
            "
            @click.prevent
          >
            {{ link }}
          </a>
        </nav>

        <div class="ml-auto flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            class="hidden items-center gap-1.5 rounded-lg border border-studio-700 bg-studio-900 px-2.5 py-1.5 text-xs text-studio-400 transition hover:border-studio-600 hover:text-studio-300 sm:inline-flex"
          >
            <svg class="size-3.5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="5.5" stroke="currentColor" stroke-width="1.5" />
              <path d="M13.5 13.5L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            Search
            <kbd class="rounded bg-studio-800 px-1 py-0.5 text-[10px]">/</kbd>
          </button>

          <button
            type="button"
            class="relative inline-flex size-9 items-center justify-center rounded-lg text-studio-400 transition hover:bg-studio-800 hover:text-white"
            aria-label="Notifications"
          >
            <svg class="size-[1.125rem]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M10 2.5a4.5 4.5 0 00-4.5 4.5v2.75l-1.25 2.5h11.5l-1.25-2.5V7a4.5 4.5 0 00-4.5-4.5z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path d="M8 15.5a2 2 0 004 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <span class="absolute top-1.5 right-1.5 size-2 rounded-full bg-accent ring-2 ring-studio-950" />
          </button>

          <div
            class="relative hidden sm:block"
            @mouseenter="userOpen = true"
            @mouseleave="userOpen = false"
          >
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-lg py-1 pr-1 pl-1 transition hover:bg-studio-800"
              :aria-expanded="userOpen"
              @click="userOpen = !userOpen"
            >
              <span
                class="flex size-8 items-center justify-center rounded-full bg-linear-to-br from-accent to-studio-600 text-xs font-bold text-white"
              >
                JD
              </span>
            </button>
            <div
              v-show="userOpen"
              class="absolute top-full right-0 z-20 mt-1 w-48 overflow-hidden rounded-xl border border-studio-700 bg-studio-900 py-1 shadow-xl"
            >
              <div class="border-b border-studio-800 px-3 py-2.5">
                <p class="text-sm font-semibold text-white">Jane Doe</p>
                <p class="text-xs text-studio-500">jane@acme.co</p>
              </div>
              <button type="button" class="block w-full px-3 py-2 text-left text-sm text-studio-300 hover:bg-studio-800">
                Profile
              </button>
              <button type="button" class="block w-full px-3 py-2 text-left text-sm text-studio-300 hover:bg-studio-800">
                Settings
              </button>
              <button type="button" class="block w-full px-3 py-2 text-left text-sm text-red-400 hover:bg-studio-800">
                Sign out
              </button>
            </div>
          </div>

          <button
            type="button"
            class="inline-flex size-9 items-center justify-center rounded-lg text-studio-300 transition hover:bg-studio-800 md:hidden"
            :aria-expanded="mobileOpen"
            aria-controls="nav-app-mobile"
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
      id="nav-app-mobile"
      class="border-b border-studio-800/30 bg-studio-900 px-6 py-4 md:hidden"
    >
      <p class="mb-2 text-[10px] font-semibold tracking-[0.1em] text-studio-500 uppercase">
        Acme Corp · Pro
      </p>
      <nav class="space-y-0.5" aria-label="Mobile app navigation">
        <a
          v-for="(link, i) in appLinks"
          :key="link"
          href="#"
          class="block rounded-lg px-2 py-2.5 text-sm font-medium no-underline"
          :class="i === 0 ? 'bg-studio-800 text-white' : 'text-studio-300 hover:bg-studio-800'"
          @click.prevent="closeMobileMenu"
        >
          {{ link }}
        </a>
      </nav>
    </div>

    <!-- Preview context strip -->
    <div
      v-if="!embedded"
      class="bg-studio-100 px-6 py-8 sm:px-8 sm:py-10"
      aria-hidden="true"
    >
      <div class="mx-auto max-w-5xl">
        <div class="mb-4 flex items-center gap-2">
          <div class="h-2 w-16 rounded bg-studio-300" />
          <div class="h-2 w-2 rounded-full bg-studio-300" />
          <div class="h-2 w-20 rounded bg-studio-200" />
        </div>
        <div class="grid gap-4 sm:grid-cols-3">
          <div class="rounded-xl border border-studio-200 bg-white p-4 shadow-sm">
            <div class="h-2 w-12 rounded bg-accent/30" />
            <div class="mt-3 h-6 w-16 rounded bg-studio-950/90" />
            <div class="mt-2 h-2 w-full rounded bg-studio-100" />
          </div>
          <div class="rounded-xl border border-studio-200 bg-white p-4 shadow-sm">
            <div class="h-2 w-12 rounded bg-studio-200" />
            <div class="mt-3 h-6 w-20 rounded bg-studio-950/90" />
            <div class="mt-2 h-2 w-full rounded bg-studio-100" />
          </div>
          <div class="rounded-xl border border-studio-200 bg-white p-4 shadow-sm sm:col-span-1">
            <div class="h-2 w-12 rounded bg-studio-200" />
            <div class="mt-3 h-6 w-14 rounded bg-studio-950/90" />
            <div class="mt-2 h-2 w-full rounded bg-studio-100" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
