<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { categories } from '@/registry'
import { useMobileNav } from '@/composables/useMobileNav'
import brandLogo from '@/assets/brand/logo.png'

const route = useRoute()
const { isOpen, isDesktop, close } = useMobileNav()

function isActive(id: string): boolean {
  return route.name === 'category' && route.params.id === id
}

function isDrawerHidden(): boolean {
  return !isDesktop.value && !isOpen.value
}
</script>

<template>
  <aside
    id="app-sidebar"
    class="fixed inset-y-0 left-0 z-40 flex h-dvh w-72 max-w-[85vw] shrink-0 flex-col border-r border-studio-200/80 bg-surface/95 backdrop-blur-md transition-transform duration-200 ease-out lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:max-w-none lg:translate-x-0 lg:pointer-events-auto lg:bg-surface/70"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none lg:translate-x-0'"
    :aria-hidden="isDrawerHidden() || undefined"
    :inert="isDrawerHidden() || undefined"
  >
    <div
      class="flex h-shell-header shrink-0 items-center justify-between gap-3 px-5"
    >
      <RouterLink
        to="/"
        class="group flex min-w-0 items-center no-underline"
        @click="close"
      >
        <img
          :src="brandLogo"
          alt="Rezo Studio"
          class="brand-mark h-8 w-auto rounded-md transition group-hover:opacity-90"
          width="142"
          height="32"
          decoding="async"
        />
      </RouterLink>

      <button
        type="button"
        class="inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-studio-600 transition hover:bg-studio-100 hover:text-studio-950 lg:hidden"
        aria-label="Close navigation"
        @click="close"
      >
        <svg
          class="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <nav class="flex-1 overflow-y-auto px-3 py-4" aria-label="Component categories">
      <p class="mb-2 px-2 text-[11px] font-semibold tracking-wider text-studio-400 uppercase">
        Tools
      </p>
      <ul class="m-0 mb-5 flex list-none flex-col gap-0.5 p-0">
        <li>
          <RouterLink
            :to="{ name: 'playground' }"
            class="block rounded-lg px-3 py-2 text-sm font-medium no-underline transition-colors"
            :class="
              route.name === 'playground'
                ? 'bg-accent-muted text-accent'
                : 'text-studio-700 hover:bg-studio-100 hover:text-studio-950'
            "
            @click="close"
          >
            Page canvas
          </RouterLink>
        </li>
      </ul>

      <p class="mb-2 px-2 text-[11px] font-semibold tracking-wider text-studio-400 uppercase">
        Categories
      </p>
      <ul class="m-0 flex list-none flex-col gap-0.5 p-0">
        <li v-for="category in categories" :key="category.id">
          <RouterLink
            :to="{ name: 'category', params: { id: category.id } }"
            class="block rounded-lg px-3 py-2 text-sm font-medium no-underline transition-colors"
            :class="
              isActive(category.id)
                ? 'bg-accent-muted text-accent'
                : 'text-studio-700 hover:bg-studio-100 hover:text-studio-950'
            "
            @click="close"
          >
            <span class="flex items-center justify-between gap-2">
              <span>{{ category.name }}</span>
              <span
                v-if="category.components.length > 0"
                class="rounded-md bg-studio-100 px-1.5 py-0.5 text-[10px] font-semibold text-studio-600"
              >
                {{ category.components.length }}
              </span>
            </span>
          </RouterLink>
        </li>
      </ul>
    </nav>

    <div class="border-t border-studio-200/80 px-5 py-4">
      <p class="text-xs text-studio-400">Registry-driven catalog</p>
    </div>
  </aside>
</template>
