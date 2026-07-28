<script setup lang="ts">
import { ref } from 'vue'

/**
 * Confirmation modal — destructive action with explicit cancel and confirm paths.
 */
const open = ref(false)

function close() {
  open.value = false
}

function confirm() {
  open.value = false
}
</script>

<template>
  <div class="relative -mx-6 -my-6 min-h-[20rem] bg-[linear-gradient(180deg,#f7fbfa_0%,#ffffff_100%)] px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16">
    <div class="mx-auto max-w-sm text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-red-600/80 uppercase">Destructive</p>
      <h3 class="mt-2 font-display text-lg font-semibold text-studio-950">Confirm action</h3>
      <p class="mt-1.5 text-sm text-studio-600">
        Explicit cancel and confirm paths with a warning icon — built for irreversible choices.
      </p>

      <button
        type="button"
        class="mt-8 inline-flex items-center justify-center rounded-lg border border-red-200 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-700 transition hover:border-red-300 hover:bg-red-100"
        @click="open = true"
      >
        Delete project
      </button>
    </div>

    <Transition name="confirm-modal">
      <div
        v-if="open"
        class="absolute inset-0 z-20 flex items-center justify-center p-6"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="modal-confirm-title"
        aria-describedby="modal-confirm-desc"
      >
        <button
          type="button"
          class="confirm-modal-backdrop absolute inset-0 bg-studio-950/45 backdrop-blur-sm"
          aria-label="Close dialog"
          @click="close"
        />

        <div
          class="confirm-modal-panel relative w-full max-w-sm rounded-2xl border border-studio-200 bg-white p-6 text-center shadow-[0_24px_48px_rgba(20,31,28,0.16)]"
        >
          <div
            class="confirm-modal-icon mx-auto flex size-12 items-center justify-center rounded-full bg-red-50 text-red-600"
            aria-hidden="true"
          >
            <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 9v4M12 17h.01" stroke-linecap="round" />
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <h3 id="modal-confirm-title" class="confirm-modal-title mt-4 font-display text-lg font-semibold text-studio-950">
            Delete this project?
          </h3>
          <p id="modal-confirm-desc" class="confirm-modal-desc mt-2 text-sm leading-relaxed text-studio-600">
            This removes all saved layouts and cannot be undone. Your team will lose access immediately.
          </p>

          <div class="confirm-modal-actions mt-6 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              class="flex-1 rounded-lg border border-studio-200 bg-white py-2.5 text-sm font-semibold text-studio-700 transition hover:bg-studio-50"
              @click="close"
            >
              Cancel
            </button>
            <button
              type="button"
              class="flex-1 rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
              @click="confirm"
            >
              Delete project
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.confirm-modal-enter-active,
.confirm-modal-leave-active {
  transition: opacity 0.26s ease;
}

.confirm-modal-enter-active .confirm-modal-backdrop,
.confirm-modal-leave-active .confirm-modal-backdrop {
  transition: opacity 0.26s ease;
}

.confirm-modal-enter-active .confirm-modal-panel,
.confirm-modal-leave-active .confirm-modal-panel {
  transition:
    opacity 0.28s ease,
    transform 0.34s cubic-bezier(0.34, 1.25, 0.64, 1);
}

.confirm-modal-enter-from .confirm-modal-backdrop,
.confirm-modal-leave-to .confirm-modal-backdrop {
  opacity: 0;
}

.confirm-modal-enter-from .confirm-modal-panel,
.confirm-modal-leave-to .confirm-modal-panel {
  opacity: 0;
  transform: scale(0.88);
}

.confirm-modal-enter-active .confirm-modal-icon {
  animation: confirm-icon-pop 0.5s cubic-bezier(0.34, 1.45, 0.64, 1) 0.12s both;
}

.confirm-modal-enter-active .confirm-modal-title {
  animation: confirm-content-up 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.18s both;
}

.confirm-modal-enter-active .confirm-modal-desc {
  animation: confirm-content-up 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.24s both;
}

.confirm-modal-enter-active .confirm-modal-actions {
  animation: confirm-content-up 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
}

@keyframes confirm-icon-pop {
  0% {
    opacity: 0;
    transform: scale(0.4) rotate(-8deg);
  }

  60% {
    transform: scale(1.08) rotate(2deg);
  }

  100% {
    opacity: 1;
    transform: scale(1) rotate(0);
  }
}

@keyframes confirm-content-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
