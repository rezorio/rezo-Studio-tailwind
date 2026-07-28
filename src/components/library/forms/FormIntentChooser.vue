<script setup lang="ts">
import { computed, ref } from 'vue'

/**
 * Intent Chooser — pick a reason first; the heading and fields adapt to the selection.
 * Three illustrated intent cards set context before the user types.
 */
type IntentId = 'general' | 'sales' | 'support'

interface Intent {
  id: IntentId
  label: string
  hint: string
  heading: string
  subtext: string
}

const intents: Intent[] = [
  {
    id: 'general',
    label: 'General',
    hint: 'Questions & feedback',
    heading: 'Say hello',
    subtext: 'Share anything on your mind — we read every message.',
  },
  {
    id: 'sales',
    label: 'Sales',
    hint: 'Plans & pricing',
    heading: 'Talk to sales',
    subtext: 'Tell us about your team size and what you are building.',
  },
  {
    id: 'support',
    label: 'Support',
    hint: 'Help & troubleshooting',
    heading: 'Get support',
    subtext: 'Describe the issue and we will route you to the right person.',
  },
]

const selected = ref<IntentId>('general')

const active = computed(() => intents.find((i) => i.id === selected.value) ?? intents[0])
</script>

<template>
  <section class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-14">
    <form
      class="mx-auto max-w-lg rounded-2xl border border-studio-200 bg-white p-6 shadow-[0_1px_0_rgba(20,31,28,0.04)] sm:p-8"
      @submit.prevent
    >
      <fieldset>
        <legend class="text-xs font-semibold tracking-[0.14em] text-studio-400 uppercase">
          What brings you here?
        </legend>

        <div class="mt-3 grid grid-cols-3 gap-2">
          <label
            v-for="intent in intents"
            :key="intent.id"
            class="relative cursor-pointer"
          >
            <input
              v-model="selected"
              type="radio"
              name="intent"
              :value="intent.id"
              class="peer sr-only"
            />
            <span
              class="flex flex-col items-center rounded-xl border border-studio-200 bg-studio-50/50 px-2 py-3 text-center transition peer-checked:border-accent peer-checked:bg-accent-muted/60 peer-checked:shadow-[inset_0_0_0_1px_rgba(26,122,102,0.15)] peer-focus-visible:ring-2 peer-focus-visible:ring-accent/40"
            >
              <span
                class="flex size-8 items-center justify-center rounded-lg bg-white text-studio-500 shadow-sm transition peer-checked:text-accent"
                aria-hidden="true"
              >
                <svg
                  v-if="intent.id === 'general'"
                  class="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <svg
                  v-else-if="intent.id === 'sales'"
                  class="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <svg
                  v-else
                  class="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              </span>
              <span class="mt-2 text-xs font-semibold text-studio-800">{{ intent.label }}</span>
              <span class="mt-0.5 hidden text-[10px] leading-tight text-studio-400 sm:block">
                {{ intent.hint }}
              </span>
            </span>
          </label>
        </div>
      </fieldset>

      <div class="mt-8 border-t border-studio-100 pt-8">
        <h2 class="font-display text-xl font-semibold tracking-tight text-studio-950">
          {{ active.heading }}
        </h2>
        <p class="mt-1 text-sm text-studio-500">{{ active.subtext }}</p>

        <div class="mt-6 space-y-4">
          <div>
            <label for="intent-name" class="sr-only">Name</label>
            <input
              id="intent-name"
              type="text"
              name="name"
              placeholder="Your name"
              autocomplete="name"
              class="w-full rounded-lg border border-studio-200 bg-studio-50/50 px-4 py-2.5 text-sm text-studio-900 placeholder:text-studio-400 transition focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/15"
            />
          </div>
          <div>
            <label for="intent-email" class="sr-only">Email</label>
            <input
              id="intent-email"
              type="email"
              name="email"
              placeholder="you@company.com"
              autocomplete="email"
              class="w-full rounded-lg border border-studio-200 bg-studio-50/50 px-4 py-2.5 text-sm text-studio-900 placeholder:text-studio-400 transition focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/15"
            />
          </div>
          <div v-if="selected === 'sales'">
            <label for="intent-company" class="sr-only">Company size</label>
            <select
              id="intent-company"
              name="company-size"
              class="w-full rounded-lg border border-studio-200 bg-studio-50/50 px-4 py-2.5 text-sm text-studio-900 transition focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/15"
            >
              <option value="" disabled selected>Team size</option>
              <option value="1-10">1–10 people</option>
              <option value="11-50">11–50 people</option>
              <option value="51+">51+ people</option>
            </select>
          </div>
          <div>
            <label for="intent-message" class="sr-only">Message</label>
            <textarea
              id="intent-message"
              name="message"
              rows="3"
              :placeholder="
                selected === 'support'
                  ? 'Describe the issue…'
                  : selected === 'sales'
                    ? 'What are you looking to build?'
                    : 'Your message…'
              "
              class="w-full resize-none rounded-lg border border-studio-200 bg-studio-50/50 px-4 py-2.5 text-sm text-studio-900 placeholder:text-studio-400 transition focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/15"
            />
          </div>
        </div>

        <button
          type="submit"
          class="mt-6 w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(26,122,102,0.2)] transition hover:bg-accent-hover"
        >
          Continue
        </button>
      </div>
    </form>
  </section>
</template>
