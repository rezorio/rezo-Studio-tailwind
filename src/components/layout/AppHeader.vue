<script setup lang="ts">
import { ref } from 'vue'
import SearchBox from '@/components/layout/search/SearchBox.vue'
import SearchInput from '@/components/layout/SearchInput.vue'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher.vue'
import MobileMenuButton from '@/components/layout/MobileMenuButton.vue'
import brandIcon from '@/assets/brand/icon.png'

const GITHUB_URL = 'https://github.com/your-org/rezo-studio'
const mobileSearchOpen = ref(false)

function openMobileSearch(): void {
  mobileSearchOpen.value = true
}

function closeMobileSearch(): void {
  mobileSearchOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-20 border-b border-studio-200/80 bg-surface/70 backdrop-blur-md"
  >
    <div
      class="flex h-shell-header items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-10"
    >
      <div class="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
        <MobileMenuButton />

        <img
          :src="brandIcon"
          alt="rezo Studio"
          class="brand-mark size-10 shrink-0 rounded-md object-contain"
          width="40"
          height="40"
          decoding="async"
        />
      </div>

      <SearchInput
        class="hidden w-full max-w-md shrink-0 px-2 md:block lg:max-w-lg"
      />

      <div class="flex flex-1 items-center justify-end gap-3 sm:gap-4">
        <button
          type="button"
          class="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-studio-200 bg-surface text-studio-700 transition hover:border-studio-300 hover:bg-studio-50 hover:text-studio-950 md:hidden"
          :aria-expanded="mobileSearchOpen"
          aria-controls="mobile-catalog-search"
          aria-label="Search components"
          @click="openMobileSearch"
        >
          <svg
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" stroke-linecap="round" />
          </svg>
        </button>

        <ThemeSwitcher />

        <a
          :href="GITHUB_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-9 items-center gap-2 rounded-lg border border-studio-200 bg-surface px-2.5 text-sm font-medium text-studio-700 no-underline transition hover:border-studio-300 hover:bg-studio-50 hover:text-studio-950 sm:px-3"
        >
          <svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
            />
          </svg>
          <span class="hidden md:inline">GitHub</span>
        </a>
      </div>
    </div>

    <div
      v-if="mobileSearchOpen"
      id="mobile-catalog-search"
      class="border-t border-studio-200/80 px-4 py-3 md:hidden"
    >
      <SearchBox autofocus @close="closeMobileSearch" />
    </div>
  </header>
</template>
