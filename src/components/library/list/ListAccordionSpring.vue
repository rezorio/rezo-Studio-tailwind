<script setup lang="ts">
import { ref } from 'vue'

/**
 * Accordion spring — expandable FAQ list with bouncy chevron rotation,
 * height reveal, and a shimmer sweep on the active panel.
 */
interface FaqItem {
  id: string
  question: string
  answer: string
}

const items: FaqItem[] = [
  {
    id: '1',
    question: 'Can I copy components into my own repo?',
    answer:
      'Yes. Every pattern is a plain Vue SFC — copy the file, adjust tokens if needed, and ship. No runtime package required.',
  },
  {
    id: '2',
    question: 'Do previews match the Code tab?',
    answer:
      'Both tabs pull from the same source file via the registry, so what you see in Preview is exactly what you copy.',
  },
  {
    id: '3',
    question: 'Is Tailwind v4 supported?',
    answer:
      'The catalog runs on Tailwind v4 with the Vite plugin. Utility classes in each component work out of the box.',
  },
  {
    id: '4',
    question: 'How do I add my own variants?',
    answer:
      'Drop a new .vue file under the library folder, register it in the central registry with a lazy load(), and it appears in the category view.',
  },
]

const openId = ref<string | null>('1')

function toggle(id: string) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <div class="mx-auto max-w-md">
      <p class="text-xs font-semibold tracking-[0.14em] text-studio-400 uppercase">
        FAQ
      </p>
      <h2 class="mt-1 font-display text-xl font-semibold tracking-tight text-studio-950">
        Common questions
      </h2>

      <ul class="mt-8 divide-y divide-studio-200 rounded-2xl border border-studio-200 bg-white shadow-[0_1px_0_rgba(20,31,28,0.04)]">
        <li v-for="item in items" :key="item.id">
          <button
            type="button"
            class="accordion-trigger flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            :aria-expanded="openId === item.id"
            @click="toggle(item.id)"
          >
            <span
              class="font-display text-sm font-semibold transition-colors duration-200"
              :class="openId === item.id ? 'text-accent' : 'text-studio-950'"
            >
              {{ item.question }}
            </span>

            <span
              class="chevron flex size-7 shrink-0 items-center justify-center rounded-full transition-colors duration-200"
              :class="openId === item.id ? 'bg-accent-muted text-accent' : 'bg-studio-100 text-studio-500'"
              aria-hidden="true"
            >
              <svg
                class="size-4 transition-transform duration-400"
                :class="{ 'rotate-180': openId === item.id }"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </button>

          <div
            class="accordion-panel grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.34,1.4,0.64,1)]"
            :class="openId === item.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <div class="overflow-hidden">
              <div
                class="panel-content relative px-5 pb-4"
                :class="{ 'panel-content--open': openId === item.id }"
              >
                <p class="text-sm leading-relaxed text-studio-500">
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.accordion-trigger:active .chevron {
  transform: scale(0.88);
}

.chevron svg {
  transition: transform 0.45s cubic-bezier(0.34, 1.4, 0.64, 1);
}

.panel-content {
  opacity: 0;
  transform: translateY(-6px);
  transition:
    opacity 0.35s ease,
    transform 0.45s cubic-bezier(0.34, 1.4, 0.64, 1);
}

.panel-content--open {
  opacity: 1;
  transform: translateY(0);
}

.panel-content--open::before {
  content: '';
  position: absolute;
  inset: -4px 1rem auto;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(26, 122, 102, 0.35) 30%,
    rgba(26, 122, 102, 0.35) 70%,
    transparent
  );
  animation: shimmer-sweep 1.8s ease-in-out;
}

@keyframes shimmer-sweep {
  0% {
    opacity: 0;
    transform: translateX(-40%);
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(40%);
  }
}

.duration-400 {
  transition-duration: 400ms;
}
</style>
