<script setup lang="ts">
import { computed, ref } from 'vue'

/**
 * Month grid — navigable calendar with today marker and selectable dates.
 */
const today = new Date()
const viewMonth = ref(today.getMonth())
const viewYear = ref(today.getFullYear())
const selected = ref(new Date(today.getFullYear(), today.getMonth(), today.getDate()))

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const monthLabel = computed(() =>
  new Date(viewYear.value, viewMonth.value, 1).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  }),
)

const cells = computed(() => {
  const first = new Date(viewYear.value, viewMonth.value, 1)
  const startPad = first.getDay()
  const daysInMonth = new Date(viewYear.value, viewMonth.value + 1, 0).getDate()
  const result: { date: Date | null; key: string }[] = []

  for (let i = 0; i < startPad; i++) {
    result.push({ date: null, key: `pad-${i}` })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    result.push({
      date: new Date(viewYear.value, viewMonth.value, d),
      key: `day-${d}`,
    })
  }
  return result
})

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function prevMonth() {
  if (viewMonth.value === 0) {
    viewMonth.value = 11
    viewYear.value -= 1
  } else {
    viewMonth.value -= 1
  }
}

function nextMonth() {
  if (viewMonth.value === 11) {
    viewMonth.value = 0
    viewYear.value += 1
  } else {
    viewMonth.value += 1
  }
}

function selectDate(date: Date) {
  selected.value = date
}
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <div class="mx-auto max-w-sm rounded-2xl border border-studio-200 bg-white p-5 shadow-[0_1px_0_rgba(20,31,28,0.04)]">
      <div class="flex items-center justify-between gap-3">
        <button
          type="button"
          class="inline-flex size-8 items-center justify-center rounded-lg text-studio-500 transition hover:bg-studio-100 hover:text-studio-800"
          aria-label="Previous month"
          @click="prevMonth"
        >
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <h2 class="font-display text-base font-semibold tracking-tight text-studio-950">
          {{ monthLabel }}
        </h2>

        <button
          type="button"
          class="inline-flex size-8 items-center justify-center rounded-lg text-studio-500 transition hover:bg-studio-100 hover:text-studio-800"
          aria-label="Next month"
          @click="nextMonth"
        >
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <div class="mt-4 grid grid-cols-7 gap-1 text-center">
        <span
          v-for="day in weekdays"
          :key="day"
          class="py-1 text-[0.65rem] font-semibold tracking-[0.08em] text-studio-400 uppercase"
        >
          {{ day }}
        </span>

        <template v-for="cell in cells" :key="cell.key">
          <span v-if="!cell.date" class="size-9" aria-hidden="true" />
          <button
            v-else
            type="button"
            class="inline-flex size-9 items-center justify-center rounded-lg text-sm font-medium transition"
            :class="
              isSameDay(cell.date, selected)
                ? 'bg-accent text-white shadow-sm'
                : isSameDay(cell.date, today)
                  ? 'bg-accent-muted text-accent ring-1 ring-accent/25'
                  : 'text-studio-700 hover:bg-studio-100'
            "
            :aria-pressed="isSameDay(cell.date, selected)"
            @click="selectDate(cell.date)"
          >
            {{ cell.date.getDate() }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
