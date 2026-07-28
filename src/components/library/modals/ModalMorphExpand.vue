<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref } from 'vue'

/**
 * Morph Expand — the trigger button literally expands into the dialog.
 * Shared geometry (FLIP-style) makes the open feel continuous, not layered.
 */
const open = ref(false)
const morphing = ref(false)
const triggerRef = ref<HTMLButtonElement | null>(null)
const shellRef = ref<HTMLElement | null>(null)

const morphStyle = ref<Record<string, string>>({})
let morphTimer: ReturnType<typeof setTimeout> | null = null

const PANEL = { width: 360, height: 280 }

async function openMorph() {
  if (open.value || morphing.value || !triggerRef.value || !shellRef.value) return

  const shell = shellRef.value.getBoundingClientRect()
  const btn = triggerRef.value.getBoundingClientRect()

  const start = {
    left: btn.left - shell.left,
    top: btn.top - shell.top,
    width: btn.width,
    height: btn.height,
    radius: '9999px',
  }

  const endLeft = (shell.width - PANEL.width) / 2
  const endTop = (shell.height - PANEL.height) / 2

  morphing.value = true
  morphStyle.value = {
    left: `${start.left}px`,
    top: `${start.top}px`,
    width: `${start.width}px`,
    height: `${start.height}px`,
    borderRadius: start.radius,
  }

  await nextTick()
  // Force layout so the first frame sticks before we animate out.
  void shellRef.value.offsetWidth

  morphStyle.value = {
    left: `${endLeft}px`,
    top: `${endTop}px`,
    width: `${PANEL.width}px`,
    height: `${PANEL.height}px`,
    borderRadius: '1.25rem',
  }

  if (morphTimer) clearTimeout(morphTimer)
  morphTimer = setTimeout(() => {
    open.value = true
    morphing.value = false
  }, 480)
}

function close() {
  open.value = false
  morphing.value = false
}

onBeforeUnmount(() => {
  if (morphTimer) clearTimeout(morphTimer)
})
</script>

<template>
  <div
    ref="shellRef"
    class="relative -mx-6 -my-6 min-h-[22rem] overflow-hidden bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(26,122,102,0.1),transparent_55%),linear-gradient(180deg,#f4f7f6_0%,#ffffff_100%)] px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16"
  >
    <div class="mx-auto max-w-sm text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Shared geometry</p>
      <h3 class="mt-2 font-display text-lg font-semibold text-studio-950">Morph expand</h3>
      <p class="mt-1.5 text-sm text-studio-600">
        The button becomes the modal — one continuous shape, not a fade-in card.
      </p>

      <button
        ref="triggerRef"
        type="button"
        class="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(26,122,102,0.28)] transition hover:bg-accent-hover disabled:opacity-0"
        :disabled="open || morphing"
        @click="openMorph"
      >
        Share catalog
      </button>
    </div>

    <!-- Morphing shell (button → panel) -->
    <div
      v-if="morphing"
      class="morph-shell pointer-events-none absolute z-20 overflow-hidden bg-accent shadow-[0_24px_48px_rgba(20,31,28,0.2)]"
      :style="morphStyle"
      aria-hidden="true"
    />

    <Transition name="morph-modal">
      <div
        v-if="open"
        class="absolute inset-0 z-20 flex items-center justify-center p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-morph-title"
      >
        <button
          type="button"
          class="morph-modal-backdrop absolute inset-0 bg-studio-950/35 backdrop-blur-[2px]"
          aria-label="Close dialog"
          @click="close"
        />

        <div
          class="morph-modal-panel relative w-full max-w-[360px] overflow-hidden rounded-[1.25rem] border border-studio-200 bg-white shadow-[0_24px_48px_rgba(20,31,28,0.18)]"
        >
          <div class="h-1.5 w-full bg-accent" aria-hidden="true" />

          <div class="p-6">
            <button
              type="button"
              class="absolute top-5 right-4 inline-flex size-8 items-center justify-center rounded-lg text-studio-400 transition hover:bg-studio-100 hover:text-studio-700"
              aria-label="Close"
              @click="close"
            >
              <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" stroke-linecap="round" />
              </svg>
            </button>

            <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Share</p>
            <h3 id="modal-morph-title" class="mt-2 font-display text-xl font-semibold tracking-tight text-studio-950">
              Send this layout
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-studio-600">
              Grew from the button you clicked — the panel inherits the same accent edge as a breadcrumb of origin.
            </p>

            <div class="mt-5 flex items-center gap-2 rounded-xl border border-studio-200 bg-studio-50 px-3 py-2.5">
              <code class="flex-1 truncate text-left text-xs text-studio-700">rezo.studio/share/morph-expand</code>
              <button
                type="button"
                class="shrink-0 rounded-lg bg-studio-950 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-studio-800"
                @click="close"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.morph-shell {
  transition:
    left 0.48s cubic-bezier(0.22, 1, 0.36, 1),
    top 0.48s cubic-bezier(0.22, 1, 0.36, 1),
    width 0.48s cubic-bezier(0.22, 1, 0.36, 1),
    height 0.48s cubic-bezier(0.22, 1, 0.36, 1),
    border-radius 0.48s cubic-bezier(0.22, 1, 0.36, 1);
}

.morph-modal-enter-active,
.morph-modal-leave-active {
  transition: opacity 0.28s ease;
}

.morph-modal-enter-active .morph-modal-backdrop,
.morph-modal-leave-active .morph-modal-backdrop {
  transition: opacity 0.28s ease;
}

.morph-modal-enter-active .morph-modal-panel,
.morph-modal-leave-active .morph-modal-panel {
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.morph-modal-enter-from .morph-modal-backdrop,
.morph-modal-leave-to .morph-modal-backdrop {
  opacity: 0;
}

.morph-modal-enter-from .morph-modal-panel {
  opacity: 0.85;
}

.morph-modal-leave-to .morph-modal-panel {
  opacity: 0;
  transform: scale(0.96);
}
</style>
