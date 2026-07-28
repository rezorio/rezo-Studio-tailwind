<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useMobileNav } from '@/composables/useMobileNav'

const { isOpen, close } = useMobileNav()

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape' && isOpen.value) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-30 bg-studio-950/40 backdrop-blur-[2px] lg:hidden"
      aria-hidden="true"
      @click="close"
    />
  </Transition>
</template>
