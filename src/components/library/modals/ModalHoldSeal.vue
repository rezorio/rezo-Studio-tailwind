<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

/**
 * Hold Seal — confirm by pressing and holding until a liquid seal fills.
 * Accidental clicks can’t commit; intent is measured in time, not taps.
 */
const open = ref(false)
const holding = ref(false)
const progress = ref(0)
const sealed = ref(false)

const HOLD_MS = 1400
let rafId = 0
let holdStartedAt = 0

function openModal() {
  progress.value = 0
  sealed.value = false
  holding.value = false
  open.value = true
}

function close() {
  cancelHold()
  open.value = false
  sealed.value = false
  progress.value = 0
}

function tick(now: number) {
  if (!holding.value) return
  const elapsed = now - holdStartedAt
  progress.value = Math.min(1, elapsed / HOLD_MS)

  if (progress.value >= 1) {
    holding.value = false
    sealed.value = true
    progress.value = 1
    window.setTimeout(() => {
      open.value = false
      sealed.value = false
      progress.value = 0
    }, 700)
    return
  }

  rafId = requestAnimationFrame(tick)
}

function startHold(event: PointerEvent) {
  if (sealed.value) return
  ;(event.currentTarget as HTMLElement).setPointerCapture?.(event.pointerId)
  holding.value = true
  holdStartedAt = performance.now() - progress.value * HOLD_MS
  cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(tick)
}

function cancelHold() {
  holding.value = false
  cancelAnimationFrame(rafId)
  if (!sealed.value && progress.value < 1) {
    // Soft unwind instead of snapping to empty.
    const from = progress.value
    const start = performance.now()
    const unwind = (now: number) => {
      const t = Math.min(1, (now - start) / 280)
      progress.value = from * (1 - t)
      if (t < 1 && !holding.value) {
        rafId = requestAnimationFrame(unwind)
      }
    }
    rafId = requestAnimationFrame(unwind)
  }
}

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <div
    class="relative -mx-6 -my-6 min-h-[22rem] overflow-hidden bg-[linear-gradient(180deg,#fff8f6_0%,#ffffff_55%)] px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16"
  >
    <div class="mx-auto max-w-sm text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-rose-600/80 uppercase">Intent seal</p>
      <h3 class="mt-2 font-display text-lg font-semibold text-studio-950">Hold to seal</h3>
      <p class="mt-1.5 text-sm text-studio-600">
        Destructive actions shouldn’t be a click away — fill the seal by holding.
      </p>

      <button
        type="button"
        class="mt-8 inline-flex items-center justify-center rounded-lg border border-rose-200 bg-rose-50 px-5 py-2.5 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
        @click="openModal"
      >
        Revoke API key
      </button>
    </div>

    <Transition name="seal-modal">
      <div
        v-if="open"
        class="absolute inset-0 z-20 flex items-center justify-center p-6"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="modal-seal-title"
        aria-describedby="modal-seal-desc"
      >
        <button
          type="button"
          class="seal-modal-backdrop absolute inset-0 bg-studio-950/40 backdrop-blur-sm"
          aria-label="Close dialog"
          @click="close"
        />

        <div
          class="seal-modal-panel relative w-full max-w-sm overflow-hidden rounded-2xl border border-studio-200 bg-white p-6 text-center shadow-[0_24px_48px_rgba(20,31,28,0.16)]"
        >
          <div
            class="seal-icon mx-auto flex size-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600"
            aria-hidden="true"
          >
            <svg class="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <path d="M12 3 4 7v5c0 5 3.4 8.5 8 9.5 4.6-1 8-4.5 8-9.5V7l-8-4Z" stroke-linejoin="round" />
              <path d="M9.5 12.5 11 14l3.5-3.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <h3 id="modal-seal-title" class="mt-4 font-display text-lg font-semibold text-studio-950">
            {{ sealed ? 'Key revoked' : 'Seal this revocation' }}
          </h3>
          <p id="modal-seal-desc" class="mt-2 text-sm leading-relaxed text-studio-600">
            {{
              sealed
                ? 'Integrations using this key will fail on the next request.'
                : 'Press and hold until the liquid seal fills. Release early to abort.'
            }}
          </p>

          <button
            type="button"
            class="seal-hold relative mt-6 w-full overflow-hidden rounded-xl border border-rose-200 bg-rose-50 py-3.5 text-sm font-semibold text-rose-800 select-none touch-none"
            :class="{ 'seal-hold--active': holding, 'seal-hold--done': sealed }"
            :aria-valuemin="0"
            :aria-valuemax="100"
            :aria-valuenow="Math.round(progress * 100)"
            role="progressbar"
            :disabled="sealed"
            @pointerdown="startHold"
            @pointerup="cancelHold"
            @pointerleave="cancelHold"
            @pointercancel="cancelHold"
          >
            <span
              class="seal-liquid absolute inset-y-0 left-0 bg-[linear-gradient(90deg,#fb7185_0%,#e11d48_100%)]"
              :style="{ width: `${progress * 100}%` }"
              aria-hidden="true"
            />
            <span class="relative z-10 mix-blend-normal" :class="progress > 0.45 || sealed ? 'text-white' : ''">
              {{ sealed ? 'Sealed' : holding ? 'Keep holding…' : 'Hold to revoke' }}
            </span>
          </button>

          <button
            type="button"
            class="mt-3 w-full rounded-xl py-2.5 text-sm font-semibold text-studio-500 transition hover:bg-studio-50 hover:text-studio-700"
            :disabled="sealed"
            @click="close"
          >
            Never mind
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.seal-modal-enter-active,
.seal-modal-leave-active {
  transition: opacity 0.28s ease;
}

.seal-modal-enter-active .seal-modal-backdrop,
.seal-modal-leave-active .seal-modal-backdrop {
  transition: opacity 0.28s ease;
}

.seal-modal-enter-active .seal-modal-panel,
.seal-modal-leave-active .seal-modal-panel {
  transition:
    opacity 0.3s ease,
    transform 0.38s cubic-bezier(0.34, 1.3, 0.64, 1);
}

.seal-modal-enter-from .seal-modal-backdrop,
.seal-modal-leave-to .seal-modal-backdrop {
  opacity: 0;
}

.seal-modal-enter-from .seal-modal-panel,
.seal-modal-leave-to .seal-modal-panel {
  opacity: 0;
  transform: translateY(18px) scale(0.94);
}

.seal-modal-enter-active .seal-icon {
  animation: seal-icon-in 0.5s cubic-bezier(0.34, 1.45, 0.64, 1) 0.1s both;
}

.seal-hold {
  transition: transform 0.15s ease, box-shadow 0.2s ease;
}

.seal-hold--active {
  transform: scale(0.985);
  box-shadow: inset 0 0 0 1px rgba(225, 29, 72, 0.25);
}

.seal-hold--done {
  border-color: #e11d48;
  background: #e11d48;
  color: white;
}

.seal-liquid {
  transition: none;
}

@keyframes seal-icon-in {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(-12deg);
  }

  to {
    opacity: 1;
    transform: scale(1) rotate(0);
  }
}
</style>
