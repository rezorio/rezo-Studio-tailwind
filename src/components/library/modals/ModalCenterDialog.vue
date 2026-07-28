<script setup lang="ts">
import { ref } from 'vue'

/**
 * Centered dialog — modal with backdrop blur and focus-trap-style layout.
 */
const open = ref(false)

function close() {
  open.value = false
}
</script>

<template>
  <div class="relative -mx-6 -my-6 min-h-[20rem] bg-studio-50 px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16">
    <div class="mx-auto max-w-sm text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Classic focus</p>
      <h3 class="mt-2 font-display text-lg font-semibold text-studio-950">Center dialog</h3>
      <p class="mt-1.5 text-sm text-studio-600">
        A centered panel with backdrop blur — the familiar pattern for short forms and invites.
      </p>

      <button
        type="button"
        class="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover"
        @click="open = true"
      >
        Open dialog
      </button>
    </div>

    <Transition name="center-modal">
      <div
        v-if="open"
        class="absolute inset-0 z-20 flex items-center justify-center p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-center-title"
      >
        <button
          type="button"
          class="center-modal-backdrop absolute inset-0 bg-studio-950/40 backdrop-blur-sm"
          aria-label="Close dialog"
          @click="close"
        />

        <div
          class="center-modal-panel relative w-full max-w-md rounded-2xl border border-studio-200 bg-white p-6 shadow-[0_24px_48px_rgba(20,31,28,0.18)]"
        >
          <button
            type="button"
            class="absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-lg text-studio-400 transition hover:bg-studio-100 hover:text-studio-700"
            aria-label="Close"
            @click="close"
          >
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" stroke-linecap="round" />
            </svg>
          </button>

          <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Invite team</p>
          <h3
            id="modal-center-title"
            class="mt-2 font-display text-xl font-semibold tracking-tight text-studio-950"
          >
            Add a collaborator
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-studio-600">
            Send an invite link so your teammate can preview and copy components from the catalog.
          </p>

          <label class="mt-5 block text-left">
            <span class="text-xs font-semibold text-studio-700">Email address</span>
            <input
              type="email"
              placeholder="colleague@company.com"
              class="mt-1.5 w-full rounded-lg border border-studio-200 bg-studio-50/50 px-3 py-2 text-sm text-studio-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </label>

          <div class="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-studio-600 transition hover:bg-studio-100"
              @click="close"
            >
              Cancel
            </button>
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover"
              @click="close"
            >
              Send invite
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.center-modal-enter-active,
.center-modal-leave-active {
  transition: opacity 0.28s ease;
}

.center-modal-enter-active .center-modal-backdrop,
.center-modal-leave-active .center-modal-backdrop {
  transition: opacity 0.28s ease;
}

.center-modal-enter-active .center-modal-panel,
.center-modal-leave-active .center-modal-panel {
  transition:
    opacity 0.32s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.32s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.center-modal-enter-from,
.center-modal-leave-to {
  opacity: 1;
}

.center-modal-enter-from .center-modal-backdrop,
.center-modal-leave-to .center-modal-backdrop {
  opacity: 0;
}

.center-modal-enter-from .center-modal-panel,
.center-modal-leave-to .center-modal-panel {
  opacity: 0;
  transform: scale(0.92) translateY(16px);
}
</style>
