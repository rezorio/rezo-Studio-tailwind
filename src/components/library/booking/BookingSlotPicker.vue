<script setup lang="ts">
import { ref } from 'vue'

/**
 * Slot picker — date summary with a grid of available time slots.
 */
const slots = [
  { time: '9:00 AM', available: true },
  { time: '9:30 AM', available: false },
  { time: '10:00 AM', available: true },
  { time: '10:30 AM', available: true },
  { time: '11:00 AM', available: false },
  { time: '11:30 AM', available: true },
  { time: '1:00 PM', available: true },
  { time: '1:30 PM', available: true },
  { time: '2:00 PM', available: false },
  { time: '2:30 PM', available: true },
  { time: '3:00 PM', available: true },
  { time: '3:30 PM', available: true },
]

const selected = ref('10:00 AM')
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <div class="mx-auto max-w-md rounded-2xl border border-studio-200 bg-white p-6 shadow-[0_1px_0_rgba(20,31,28,0.04)]">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-xs font-semibold tracking-[0.14em] text-studio-400 uppercase">
            Available times
          </p>
          <h2 class="mt-1 font-display text-xl font-semibold tracking-tight text-studio-950">
            Tuesday, Jul 28
          </h2>
          <p class="mt-1 text-sm text-studio-500">30-minute consultation</p>
        </div>
        <span class="rounded-full bg-accent-muted px-2.5 py-1 text-xs font-semibold text-accent">
          8 open
        </span>
      </div>

      <div class="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-4">
        <button
          v-for="slot in slots"
          :key="slot.time"
          type="button"
          :disabled="!slot.available"
          class="rounded-lg border px-2 py-2.5 text-sm font-medium transition"
          :class="
            !slot.available
              ? 'cursor-not-allowed border-studio-100 bg-studio-50 text-studio-300'
              : selected === slot.time
                ? 'border-accent bg-accent text-white shadow-sm'
                : 'border-studio-200 bg-white text-studio-700 hover:border-accent/40 hover:bg-accent-muted/30'
          "
          :aria-pressed="selected === slot.time"
          @click="slot.available && (selected = slot.time)"
        >
          {{ slot.time }}
        </button>
      </div>

      <button
        type="button"
        class="mt-6 w-full rounded-full bg-accent py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover"
      >
        Continue with {{ selected }}
      </button>
    </div>
  </div>
</template>
