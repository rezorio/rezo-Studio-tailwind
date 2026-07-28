<script setup lang="ts">
import { ref } from 'vue'

/**
 * Fold Letter — a single flap peels back to reveal the note.
 * Light motion only — no multi-axis 3D that fights the preview layout.
 */
const open = ref(false)

function close() {
  open.value = false
}
</script>

<template>
  <div
    class="relative -mx-6 -my-6 min-h-[22rem] overflow-hidden bg-[linear-gradient(160deg,#f0f5f3_0%,#ffffff_50%,#e8f0ed_100%)] px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16"
  >
    <div class="mx-auto max-w-sm text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Paper fold</p>
      <h3 class="mt-2 font-display text-lg font-semibold text-studio-950">Fold letter</h3>
      <p class="mt-1.5 text-sm text-studio-600">
        A single flap peels back to reveal the note — quiet motion, no layout thrash.
      </p>

      <button
        type="button"
        class="mt-8 inline-flex items-center justify-center gap-2 rounded-lg border border-studio-200 bg-white px-5 py-2.5 text-sm font-semibold text-studio-800 shadow-sm transition hover:border-accent/40 hover:text-accent"
        @click="open = true"
      >
        <svg class="size-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="m4 6 8 6 8-6" stroke-linecap="round" stroke-linejoin="round" />
          <rect x="3" y="5" width="18" height="14" rx="2" />
        </svg>
        Open letter
      </button>
    </div>

    <Transition name="fold-modal">
      <div
        v-if="open"
        class="absolute inset-0 z-20 flex items-center justify-center p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-fold-title"
      >
        <button
          type="button"
          class="fold-modal-backdrop absolute inset-0 bg-studio-950/35 backdrop-blur-[2px]"
          aria-label="Close letter"
          @click="close"
        />

        <div
          class="fold-modal-panel relative w-full max-w-sm overflow-hidden rounded-2xl border border-studio-200 bg-white shadow-[0_20px_40px_rgba(20,31,28,0.16)]"
          @click.stop
        >
          <!-- Envelope header / flap cue -->
          <div class="relative bg-accent px-5 pt-5 pb-8 text-white">
            <div
              class="fold-flap pointer-events-none absolute inset-x-0 bottom-0 h-8 origin-top bg-accent"
              aria-hidden="true"
              style="clip-path: polygon(0 0, 50% 100%, 100% 0)"
            />
            <p class="text-[10px] font-semibold tracking-[0.16em] text-white/70 uppercase">From the studio</p>
            <p class="mt-1 font-display text-sm font-semibold">Shared component pack</p>
          </div>

          <div class="relative -mt-3 rounded-t-2xl bg-white px-5 pt-5 pb-5">
            <button
              type="button"
              class="absolute top-3 right-3 inline-flex size-7 items-center justify-center rounded-md text-studio-400 transition hover:bg-studio-100 hover:text-studio-700"
              aria-label="Close"
              @click="close"
            >
              <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" stroke-linecap="round" />
              </svg>
            </button>

            <h3 id="modal-fold-title" class="font-display text-lg font-semibold tracking-tight text-studio-950">
              You’ve got a layout
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-studio-600">
              Someone shared a component pack with you. Preview the set, then pin it to your library.
            </p>

            <div class="mt-5 flex gap-2">
              <button
                type="button"
                class="flex-1 rounded-lg border border-studio-200 py-2 text-sm font-semibold text-studio-600 transition hover:bg-studio-50"
                @click="close"
              >
                Later
              </button>
              <button
                type="button"
                class="flex-1 rounded-lg bg-accent py-2 text-sm font-semibold text-white transition hover:bg-accent-hover"
                @click="close"
              >
                Open pack
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fold-modal-enter-active,
.fold-modal-leave-active {
  transition: opacity 0.22s ease;
}

.fold-modal-enter-active .fold-modal-backdrop,
.fold-modal-leave-active .fold-modal-backdrop {
  transition: opacity 0.22s ease;
}

.fold-modal-enter-active .fold-modal-panel,
.fold-modal-leave-active .fold-modal-panel {
  transition:
    opacity 0.26s ease,
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.fold-modal-enter-active .fold-flap {
  animation: fold-flap-tip 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.08s both;
}

.fold-modal-enter-from .fold-modal-backdrop,
.fold-modal-leave-to .fold-modal-backdrop {
  opacity: 0;
}

.fold-modal-enter-from .fold-modal-panel,
.fold-modal-leave-to .fold-modal-panel {
  opacity: 0;
  transform: translateY(12px) scale(0.97);
}

@keyframes fold-flap-tip {
  from {
    transform: rotateX(0deg);
  }

  to {
    transform: rotateX(-28deg);
  }
}
</style>
