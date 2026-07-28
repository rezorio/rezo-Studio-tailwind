<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import MobileNavBackdrop from '@/components/layout/MobileNavBackdrop.vue'
import { useMobileNavEffects } from '@/composables/useMobileNav'

useMobileNavEffects()
</script>

<template>
  <!-- h-dvh + min-h-0 so main is the scrollport (sticky children e.g. playground palette work) -->
  <div class="flex h-dvh overflow-hidden">
    <MobileNavBackdrop />
    <AppSidebar />
    <div class="flex min-h-0 min-w-0 flex-1 flex-col">
      <AppHeader />
      <main class="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
        <RouterView />
      </main>
    </div>
  </div>
</template>
