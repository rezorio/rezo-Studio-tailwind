<script setup lang="ts">
import { ref } from 'vue'

/**
 * Slide-over panel — right-aligned drawer for detail views and settings.
 */
const open = ref(false)

const items = [
  { label: 'Appearance', value: 'Light' },
  { label: 'Density', value: 'Comfortable' },
  { label: 'Code theme', value: 'GitHub Dark' },
]

function close() {
  open.value = false
}
</script>

<template>
  <div class="relative -mx-6 -my-6 min-h-[20rem] bg-white px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16">
    <div class="mx-auto max-w-sm text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Side drawer</p>
      <h3 class="mt-2 font-display text-lg font-semibold text-studio-950">Slide panel</h3>
      <p class="mt-1.5 text-sm text-studio-600">
        A right-aligned drawer for settings and detail flows — slides in with staggered rows.
      </p>

      <button
        type="button"
        class="mt-8 inline-flex items-center justify-center gap-2 rounded-lg border border-studio-200 bg-white px-5 py-2.5 text-sm font-semibold text-studio-700 transition hover:border-accent/40 hover:text-accent"
        @click="open = true"
      >
        <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        Open settings
      </button>
    </div>

    <Transition name="slide-modal">
      <div
        v-if="open"
        class="absolute inset-0 z-20 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-slide-title"
      >
        <button
          type="button"
          class="slide-modal-backdrop absolute inset-0 bg-studio-950/30 backdrop-blur-[2px]"
          aria-label="Close panel"
          @click="close"
        />

        <aside
          class="slide-modal-panel absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-studio-200 bg-white shadow-[-8px_0_32px_rgba(20,31,28,0.12)]"
        >
          <header class="flex items-center justify-between border-b border-studio-100 px-5 py-4">
            <div>
              <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Preferences</p>
              <h3 id="modal-slide-title" class="mt-0.5 font-display text-lg font-semibold text-studio-950">
                Viewer settings
              </h3>
            </div>
            <button
              type="button"
              class="inline-flex size-8 items-center justify-center rounded-lg text-studio-400 transition hover:bg-studio-100 hover:text-studio-700"
              aria-label="Close"
              @click="close"
            >
              <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" stroke-linecap="round" />
              </svg>
            </button>
          </header>

          <ul class="flex-1 space-y-1 p-3">
            <li
              v-for="(item, index) in items"
              :key="item.label"
              class="slide-modal-item flex items-center justify-between rounded-lg px-3 py-3 transition hover:bg-studio-50"
              :style="{ '--item-delay': `${80 + index * 60}ms` }"
            >
              <span class="text-sm font-medium text-studio-700">{{ item.label }}</span>
              <span class="text-sm text-studio-500">{{ item.value }}</span>
            </li>
          </ul>

          <footer class="border-t border-studio-100 p-4">
            <button
              type="button"
              class="w-full rounded-lg bg-studio-950 py-2.5 text-sm font-semibold text-white transition hover:bg-studio-800"
              @click="close"
            >
              Done
            </button>
          </footer>
        </aside>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-modal-enter-active,
.slide-modal-leave-active {
  transition: opacity 0.3s ease;
}

.slide-modal-enter-active .slide-modal-backdrop,
.slide-modal-leave-active .slide-modal-backdrop {
  transition: opacity 0.3s ease;
}

.slide-modal-enter-active .slide-modal-panel,
.slide-modal-leave-active .slide-modal-panel {
  transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-modal-enter-from .slide-modal-backdrop,
.slide-modal-leave-to .slide-modal-backdrop {
  opacity: 0;
}

.slide-modal-enter-from .slide-modal-panel,
.slide-modal-leave-to .slide-modal-panel {
  transform: translateX(100%);
}

.slide-modal-enter-active .slide-modal-item {
  animation: slide-modal-item-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: var(--item-delay);
}

@keyframes slide-modal-item-in {
  from {
    opacity: 0;
    transform: translateX(12px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
