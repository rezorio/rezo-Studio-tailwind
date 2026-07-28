<script setup lang="ts">
import { computed, ref } from 'vue'

/**
 * Week strip — horizontal day picker with weekday labels and a selected highlight.
 */
const today = new Date()
const selectedOffset = ref(2)

const weekDays = computed(() => {
  const start = new Date(today)
  start.setDate(today.getDate() - today.getDay())

  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(start)
    date.setDate(start.getDate() + i)
    return {
      date,
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNum: date.getDate(),
      isToday:
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate(),
    }
  })
})

const selectedDay = computed(() => weekDays.value[selectedOffset.value])
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <div class="mx-auto max-w-md">
      <p class="text-center text-xs font-semibold tracking-[0.14em] text-studio-400 uppercase">
        Pick a day
      </p>
      <p class="mt-1 text-center font-display text-lg font-semibold tracking-tight text-studio-950">
        {{ selectedDay.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) }}
      </p>

      <div class="mt-6 grid grid-cols-7 gap-2">
        <button
          v-for="(day, index) in weekDays"
          :key="day.date.toISOString()"
          type="button"
          class="flex flex-col items-center rounded-xl border px-1 py-2.5 transition"
          :class="
            index === selectedOffset
              ? 'border-accent bg-accent text-white shadow-sm'
              : day.isToday
                ? 'border-accent/30 bg-accent-muted/50 text-studio-800'
                : 'border-studio-200 bg-white text-studio-600 hover:border-studio-300 hover:bg-studio-50'
          "
          :aria-pressed="index === selectedOffset"
          @click="selectedOffset = index"
        >
          <span class="text-[0.65rem] font-semibold tracking-wide uppercase opacity-80">
            {{ day.weekday }}
          </span>
          <span class="mt-1 font-display text-lg font-semibold leading-none">
            {{ day.dayNum }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
