<script setup lang="ts">
import { ref } from 'vue'

/**
 * Task checklist — interactive list with completion states and a progress strip.
 */
interface Task {
  id: string
  label: string
  done: boolean
}

const tasks = ref<Task[]>([
  { id: '1', label: 'Review hero copy variants', done: true },
  { id: '2', label: 'Export component screenshots', done: true },
  { id: '3', label: 'Wire booking flow into staging', done: false },
  { id: '4', label: 'Send launch checklist to client', done: false },
])

const doneCount = () => tasks.value.filter((t) => t.done).length
const progress = () => Math.round((doneCount() / tasks.value.length) * 100)

function toggle(id: string) {
  const task = tasks.value.find((t) => t.id === id)
  if (task) task.done = !task.done
}
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <div class="mx-auto max-w-md rounded-2xl border border-studio-200 bg-white p-6 shadow-[0_1px_0_rgba(20,31,28,0.04)]">
      <div class="flex items-end justify-between gap-4">
        <div>
          <p class="text-xs font-semibold tracking-[0.14em] text-studio-400 uppercase">
            Launch prep
          </p>
          <h2 class="mt-1 font-display text-lg font-semibold tracking-tight text-studio-950">
            Pre-launch tasks
          </h2>
        </div>
        <p class="text-sm font-medium text-studio-500">
          {{ doneCount() }}/{{ tasks.length }} done
        </p>
      </div>

      <div class="mt-4 h-1.5 overflow-hidden rounded-full bg-studio-100">
        <div
          class="h-full rounded-full bg-accent transition-all duration-300"
          :style="{ width: `${progress()}%` }"
        />
      </div>

      <ul class="mt-6 space-y-2">
        <li v-for="task in tasks" :key="task.id">
          <label
            class="flex cursor-pointer items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition hover:border-studio-200 hover:bg-studio-50"
          >
            <input
              type="checkbox"
              class="peer sr-only"
              :checked="task.done"
              @change="toggle(task.id)"
            />
            <span
              class="flex size-5 shrink-0 items-center justify-center rounded-md border bg-white transition"
              :class="task.done ? 'border-accent bg-accent' : 'border-studio-300'"
              aria-hidden="true"
            >
              <svg
                v-if="task.done"
                class="size-3 text-white"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M2.5 6l2.5 2.5L9.5 4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span
              class="text-sm transition"
              :class="task.done ? 'text-studio-400 line-through' : 'text-studio-800'"
            >
              {{ task.label }}
            </span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
