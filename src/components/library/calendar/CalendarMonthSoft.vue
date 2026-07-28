<script setup lang="ts">
import { computed, ref } from 'vue'

/**
 * Month soft — airy month grid with gradient panel, floating circles, and elevated selection.
 */
const today = new Date()
const viewMonth = ref(today.getMonth())
const viewYear = ref(today.getFullYear())
const selected = ref(new Date(today.getFullYear(), today.getMonth(), today.getDate()))

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const monthLabel = computed(() =>
  new Date(viewYear.value, viewMonth.value, 1).toLocaleDateString('en-US', {
    month: 'long',
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

function isWeekend(date: Date) {
  const day = date.getDay()
  return day === 0 || day === 6
}
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <div
      class="mx-auto max-w-sm rounded-3xl border border-accent/10 bg-gradient-to-br from-accent-muted via-white to-studio-50 p-5 shadow-[0_8px_32px_rgba(26,122,102,0.08)]"
    >
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            {{ viewYear }}
          </p>
          <h2 class="mt-0.5 font-display text-2xl font-semibold tracking-tight text-studio-950">
            {{ monthLabel }}
          </h2>
        </div>

        <div class="flex gap-1.5">
          <button
            type="button"
            class="inline-flex size-9 items-center justify-center rounded-full bg-white/80 text-studio-500 shadow-sm ring-1 ring-studio-200/60 transition hover:bg-white hover:text-accent"
            aria-label="Previous month"
            @click="prevMonth"
          >
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            class="inline-flex size-9 items-center justify-center rounded-full bg-white/80 text-studio-500 shadow-sm ring-1 ring-studio-200/60 transition hover:bg-white hover:text-accent"
            aria-label="Next month"
            @click="nextMonth"
          >
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-7 gap-y-1 text-center">
        <span
          v-for="(day, i) in weekdays"
          :key="`wd-${i}`"
          class="py-1 text-[0.65rem] font-semibold text-studio-400"
        >
          {{ day }}
        </span>

        <template v-for="cell in cells" :key="cell.key">
          <span v-if="!cell.date" class="flex size-10 items-center justify-center" aria-hidden="true" />
          <button
            v-else
            type="button"
            class="mx-auto flex size-10 items-center justify-center rounded-full text-sm font-medium transition duration-200"
            :class="
              isSameDay(cell.date, selected)
                ? 'bg-white text-accent shadow-[0_4px_14px_rgba(26,122,102,0.22)] ring-1 ring-accent/15 scale-105'
                : isSameDay(cell.date, today)
                  ? 'bg-accent/15 text-accent font-semibold'
                  : isWeekend(cell.date)
                    ? 'text-studio-400 hover:bg-white/70 hover:text-studio-600'
                    : 'text-studio-700 hover:bg-white/70 hover:shadow-sm'
            "
            :aria-pressed="isSameDay(cell.date, selected)"
            @click="selectDate(cell.date)"
          >
            {{ cell.date.getDate() }}
          </button>
        </template>
      </div>

      <p class="mt-5 text-center text-xs text-studio-500">
        Selected
        <span class="font-medium text-studio-800">
          {{
            selected.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'short',
              day: 'numeric',
            })
          }}
        </span>
      </p>
    </div>
  </div>
</template>
