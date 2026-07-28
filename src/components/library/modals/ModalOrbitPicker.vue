<script setup lang="ts">
import { computed, ref } from 'vue'

/**
 * Orbit Picker — choices float on a ring around a hub.
 * Selection highlights a node; confirm locks the choice.
 */
type OrbitOption = {
  id: string
  label: string
  hint: string
  angle: number
}

const open = ref(false)
const selected = ref<string | null>(null)

const options: OrbitOption[] = [
  { id: 'draft', label: 'Draft', hint: 'Private', angle: -90 },
  { id: 'team', label: 'Team', hint: 'Invite', angle: -18 },
  { id: 'public', label: 'Public', hint: 'Link', angle: 54 },
  { id: 'embed', label: 'Embed', hint: 'Iframe', angle: 126 },
  { id: 'archive', label: 'Archive', hint: 'Freeze', angle: 198 },
]

const selectedOption = computed(() => options.find((o) => o.id === selected.value) ?? null)

/** Orbit radius in px — kept inside the stage so nodes aren’t clipped. */
const RADIUS = 100

function openPicker() {
  selected.value = null
  open.value = true
}

function choose(id: string) {
  selected.value = id
}

function close() {
  open.value = false
  selected.value = null
}

function confirm() {
  close()
}

function nodeStyle(angle: number, index: number) {
  const rad = (angle * Math.PI) / 180
  return {
    '--ox': `${Math.cos(rad) * RADIUS}px`,
    '--oy': `${Math.sin(rad) * RADIUS}px`,
    '--node-delay': `${90 + index * 60}ms`,
  } as Record<string, string>
}
</script>

<template>
  <div
    class="relative -mx-6 -my-6 min-h-[24rem] overflow-hidden bg-[linear-gradient(165deg,#eef5f2_0%,#ffffff_45%,#f7fbfa_100%)] px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16"
  >
    <div class="mx-auto max-w-sm text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Radial choice</p>
      <h3 class="mt-2 font-display text-lg font-semibold text-studio-950">Orbit picker</h3>
      <p class="mt-1.5 text-sm text-studio-600">
        Options circle a hub — pick by pulling one out of orbit, not scanning a list.
      </p>

      <button
        type="button"
        class="mt-8 inline-flex items-center justify-center rounded-full border border-studio-200 bg-white px-6 py-2.5 text-sm font-semibold text-studio-800 shadow-sm transition hover:border-accent/40 hover:text-accent"
        @click="openPicker"
      >
        Choose visibility
      </button>
    </div>

    <Transition name="orbit-modal">
      <div
        v-if="open"
        class="absolute inset-0 z-20 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-orbit-title"
      >
        <button
          type="button"
          class="orbit-modal-backdrop absolute inset-0 bg-studio-950/30 backdrop-blur-[3px]"
          aria-label="Close picker"
          @click="close"
        />

        <div class="orbit-modal-panel relative flex w-full max-w-lg flex-col items-center">
          <p id="modal-orbit-title" class="sr-only">Choose visibility</p>

          <!-- Extra padding so orbit nodes never clip against the stage edge -->
          <div class="orbit-stage relative size-[300px] sm:size-[320px]">
            <div
              class="pointer-events-none absolute inset-[36px] rounded-full border border-dashed border-accent/30"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute inset-[68px] rounded-full border border-accent/10"
              aria-hidden="true"
            />

            <div
              class="absolute top-1/2 left-1/2 z-10 flex size-[84px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-studio-200 bg-white text-center shadow-[0_12px_32px_rgba(20,31,28,0.12)]"
            >
              <span class="text-[10px] font-semibold tracking-[0.14em] text-accent uppercase">Hub</span>
              <span class="mt-0.5 px-2 font-display text-sm font-semibold text-studio-950">
                {{ selectedOption?.label ?? 'Pick one' }}
              </span>
            </div>

            <div
              v-for="(opt, index) in options"
              :key="opt.id"
              class="orbit-slot absolute top-1/2 left-1/2 z-20"
              :style="nodeStyle(opt.angle, index)"
            >
              <button
                type="button"
                class="orbit-node flex size-16 flex-col items-center justify-center rounded-full border bg-white text-center shadow-[0_8px_20px_rgba(20,31,28,0.1)] transition duration-200"
                :class="
                  selected === opt.id
                    ? 'scale-110 border-accent bg-accent text-white'
                    : 'border-studio-200 text-studio-800 hover:scale-105 hover:border-accent/50'
                "
                @click="choose(opt.id)"
              >
                <span class="text-xs font-semibold leading-none">{{ opt.label }}</span>
                <span
                  class="mt-1 text-[10px] leading-none"
                  :class="selected === opt.id ? 'text-white/80' : 'text-studio-500'"
                >
                  {{ opt.hint }}
                </span>
              </button>
            </div>
          </div>

          <div class="orbit-actions mt-5 flex items-center gap-3">
            <button
              type="button"
              class="rounded-full px-4 py-2 text-sm font-semibold text-studio-600 transition hover:bg-white/80"
              @click="close"
            >
              Cancel
            </button>
            <button
              type="button"
              class="rounded-full bg-studio-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-studio-800 disabled:cursor-not-allowed disabled:opacity-40"
              :disabled="!selected"
              @click="confirm"
            >
              Lock {{ selectedOption?.label ?? 'choice' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.orbit-slot {
  --ox: 0px;
  --oy: 0px;
  transform: translate(calc(-50% + var(--ox)), calc(-50% + var(--oy)));
}

.orbit-modal-enter-active {
  /* Covers staggered node delays (~0.33s) + slot animation (~0.5s) */
  transition: opacity 0.85s ease;
}

.orbit-modal-leave-active {
  transition: opacity 0.18s ease;
}

.orbit-modal-enter-active .orbit-modal-backdrop {
  transition: opacity 0.28s ease;
}

.orbit-modal-leave-active .orbit-modal-backdrop {
  transition: opacity 0.16s ease;
}

.orbit-modal-enter-from .orbit-modal-backdrop,
.orbit-modal-leave-to .orbit-modal-backdrop {
  opacity: 0;
}

.orbit-modal-enter-active .orbit-modal-panel {
  transition: opacity 0.28s ease;
}

.orbit-modal-leave-active .orbit-modal-panel {
  transition: opacity 0.16s ease;
}

.orbit-modal-enter-from .orbit-modal-panel,
.orbit-modal-leave-to .orbit-modal-panel {
  opacity: 0;
}

.orbit-modal-enter-active .orbit-slot {
  animation: orbit-slot-in 0.5s cubic-bezier(0.34, 1.35, 0.64, 1) both;
  animation-delay: var(--node-delay);
}

.orbit-modal-enter-active .orbit-actions {
  animation: orbit-actions-in 0.35s ease 0.28s both;
}

@keyframes orbit-slot-in {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.15);
  }

  to {
    opacity: 1;
    transform: translate(calc(-50% + var(--ox)), calc(-50% + var(--oy))) scale(1);
  }
}

@keyframes orbit-actions-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
