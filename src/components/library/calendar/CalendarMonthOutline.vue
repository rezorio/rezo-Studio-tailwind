<script setup lang="ts">
import { computed, ref } from 'vue'

/**
 * Month outline — table-style month grid with a dark header, hairline cells, and ring selection.
 */
const today = new Date()
const viewMonth = ref(today.getMonth())
const viewYear = ref(today.getFullYear())
const selected = ref(new Date(today.getFullYear(), today.getMonth(), today.getDate()))

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const monthLabel = computed(() =>
  new Date(viewYear.value, viewMonth.value, 1).toLocaleDateString('en-US', {
    month: 'long',
  }),
)

const cells = computed(() => {
  const first = new Date(viewYear.value, viewMonth.value, 1)
  const daysInMonth = new Date(viewYear.value, viewMonth.value + 1, 0).getDate()
  const startPad = (first.getDay() + 6) % 7
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

function goToToday() {
  viewMonth.value = today.getMonth()
  viewYear.value = today.getFullYear()
  selected.value = new Date(today.getFullYear(), today.getMonth(), today.getDate())
}

function selectDate(date: Date) {
  selected.value = date
}

function isWeekend(date: Date) {
  const day = date.getDay()
  return day === 0 || day === 6
}
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <div class="mx-auto max-w-sm overflow-hidden rounded-2xl border border-studio-200 bg-white shadow-[0_1px_0_rgba(20,31,28,0.04)]">
      <header class="flex items-center justify-between gap-3 bg-studio-950 px-4 py-3.5 text-white">
        <button
          type="button"
          class="inline-flex size-8 items-center justify-center rounded-md text-studio-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Previous month"
          @click="prevMonth"
        >
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <div class="text-center">
          <h2 class="font-display text-base font-semibold tracking-tight">
            {{ monthLabel }}
          </h2>
          <p class="text-xs text-studio-400">{{ viewYear }}</p>
        </div>

        <button
          type="button"
          class="inline-flex size-8 items-center justify-center rounded-md text-studio-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Next month"
          @click="nextMonth"
        >
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </header>

      <div class="flex items-center justify-between border-b border-studio-200 px-4 py-2">
        <p class="text-xs text-studio-500">
          {{
            selected.toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            })
          }}
        </p>
        <button
          type="button"
          class="text-xs font-semibold text-accent transition hover:text-accent-hover"
          @click="goToToday"
        >
          Today
        </button>
      </div>

      <div class="grid grid-cols-7 border-b border-studio-200 bg-studio-50/60">
        <span
          v-for="day in weekdays"
          :key="day"
          class="border-r border-studio-200 py-2 text-center text-[0.6rem] font-semibold tracking-[0.1em] text-studio-400 uppercase last:border-r-0"
        >
          {{ day }}
        </span>
      </div>

      <div class="grid grid-cols-7">
        <template v-for="cell in cells" :key="cell.key">
          <span
            v-if="!cell.date"
            class="aspect-square border-r border-b border-studio-200 bg-studio-50/30 last:border-r-0"
            aria-hidden="true"
          />
          <button
            v-else
            type="button"
            class="relative flex aspect-square flex-col items-center justify-center border-r border-b border-studio-200 text-sm font-medium transition last:border-r-0"
            :class="
              isSameDay(cell.date, selected)
                ? 'bg-accent-muted/50 text-accent'
                : isWeekend(cell.date)
                  ? 'bg-studio-50/80 text-studio-500 hover:bg-studio-100'
                  : 'bg-white text-studio-800 hover:bg-studio-50'
            "
            :aria-pressed="isSameDay(cell.date, selected)"
            @click="selectDate(cell.date)"
          >
            <span
              class="inline-flex size-7 items-center justify-center rounded-full transition"
              :class="
                isSameDay(cell.date, selected)
                  ? 'ring-2 ring-accent ring-offset-1'
                  : isSameDay(cell.date, today)
                    ? 'font-semibold text-accent'
                    : ''
              "
            >
              {{ cell.date.getDate() }}
            </span>
            <span
              v-if="isSameDay(cell.date, today) && !isSameDay(cell.date, selected)"
              class="absolute bottom-1.5 size-1 rounded-full bg-accent"
              aria-hidden="true"
            />
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
