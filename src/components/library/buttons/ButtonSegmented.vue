<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

/**
 * Segmented control — mutually exclusive options with a sliding accent indicator.
 */
const options = ['Monthly', 'Yearly', 'Lifetime'] as const
const selected = ref<(typeof options)[number]>('Yearly')

const trackRef = ref<HTMLElement | null>(null)
const indicator = ref({ left: 0, width: 0 })

const selectedIndex = computed(() => options.indexOf(selected.value))

function updateIndicator(): void {
  const track = trackRef.value
  if (!track) return

  const buttons = track.querySelectorAll<HTMLElement>('[data-segment]')
  const active = buttons[selectedIndex.value]
  if (!active) return

  indicator.value = {
    left: active.offsetLeft,
    width: active.offsetWidth,
  }
}

function selectOption(option: (typeof options)[number]): void {
  selected.value = option
}

let resizeObserver: ResizeObserver | undefined

onMounted(async () => {
  await nextTick()
  updateIndicator()

  if (typeof ResizeObserver !== 'undefined' && trackRef.value) {
    resizeObserver = new ResizeObserver(() => updateIndicator())
    resizeObserver.observe(trackRef.value)
  }
})

onUnmounted(() => {
  resizeObserver?.disconnect()
})

watch(selected, async () => {
  await nextTick()
  updateIndicator()
})
</script>

<template>
  <div class="-mx-6 -my-6 bg-[linear-gradient(180deg,#f7fbfa_0%,#ffffff_100%)] px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16">
    <div class="mx-auto max-w-md text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Billing</p>
      <h3 class="mt-2 font-display text-xl font-semibold tracking-tight text-studio-950">
        Segmented control
      </h3>
      <p class="mt-2 text-sm text-studio-600">Toggle between plans without leaving the page.</p>

      <div
        ref="trackRef"
        class="relative mt-8 inline-flex rounded-full border border-studio-200 bg-white p-1 shadow-[0_1px_2px_rgba(20,31,28,0.06)]"
        role="group"
        aria-label="Billing period"
      >
        <span
          class="pointer-events-none absolute top-1 bottom-1 rounded-full bg-accent shadow-[0_4px_12px_rgba(26,122,102,0.25)] transition-[left,width] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
          :style="{ left: `${indicator.left}px`, width: `${indicator.width}px` }"
          aria-hidden="true"
        />

        <button
          v-for="option in options"
          :key="option"
          type="button"
          data-segment
          class="relative z-10 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200"
          :class="selected === option ? 'text-white' : 'text-studio-600 hover:text-studio-950'"
          :aria-pressed="selected === option"
          @click="selectOption(option)"
        >
          {{ option }}
          <span
            v-if="option === 'Yearly'"
            class="ml-1.5 rounded-md px-1.5 py-0.5 text-[10px] font-bold tracking-wide uppercase transition-colors duration-200"
            :class="
              selected === option
                ? 'bg-white/20 text-white'
                : 'bg-accent-muted/80 text-accent'
            "
          >
            Save 20%
          </span>
        </button>
      </div>

      <p class="mt-6 text-sm text-studio-500">
        Selected:
        <span class="font-semibold text-studio-800">{{ selected }}</span>
      </p>
    </div>
  </div>
</template>
