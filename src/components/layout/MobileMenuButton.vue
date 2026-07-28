<script setup lang="ts">
import { useMobileNav } from '@/composables/useMobileNav'

const { isOpen, toggle } = useMobileNav()
</script>

<template>
  <button
    type="button"
    class="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-studio-200 bg-surface text-studio-700 transition hover:border-studio-300 hover:bg-studio-50 hover:text-studio-950 lg:hidden"
    :aria-expanded="isOpen"
    aria-controls="app-sidebar"
    :aria-label="isOpen ? 'Close navigation' : 'Open navigation'"
    @click="toggle"
  >
    <svg
      v-if="!isOpen"
      class="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
    <svg
      v-else
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
</template>
