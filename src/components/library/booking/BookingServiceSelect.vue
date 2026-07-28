<script setup lang="ts">
import { ref } from 'vue'

/**
 * Service select — pick a session type with duration, price, and a short descriptor.
 */
interface Service {
  id: string
  name: string
  duration: string
  price: string
  note: string
}

const services: Service[] = [
  {
    id: 'intro',
    name: 'Intro call',
    duration: '15 min',
    price: 'Free',
    note: 'Quick fit check and next steps.',
  },
  {
    id: 'consult',
    name: 'Strategy session',
    duration: '45 min',
    price: '$120',
    note: 'Deep dive on goals, scope, and timeline.',
  },
  {
    id: 'workshop',
    name: 'Team workshop',
    duration: '2 hr',
    price: '$480',
    note: 'Live session with your product and design team.',
  },
]

const selected = ref('consult')
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <div class="mx-auto max-w-lg">
      <p class="text-xs font-semibold tracking-[0.14em] text-studio-400 uppercase">
        Choose a session
      </p>
      <h2 class="mt-1 font-display text-xl font-semibold tracking-tight text-studio-950">
        What do you need?
      </h2>

      <ul class="mt-6 space-y-3">
        <li v-for="service in services" :key="service.id">
          <label class="block cursor-pointer">
            <input
              v-model="selected"
              type="radio"
              name="service"
              :value="service.id"
              class="peer sr-only"
            />
            <span
              class="flex items-start gap-4 rounded-xl border bg-white p-4 transition peer-checked:border-accent peer-checked:shadow-[inset_0_0_0_1px_rgba(26,122,102,0.2)] peer-focus-visible:ring-2 peer-focus-visible:ring-accent/40"
              :class="selected === service.id ? 'border-accent' : 'border-studio-200'"
            >
              <span
                class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border transition"
                :class="
                  selected === service.id
                    ? 'border-accent bg-accent'
                    : 'border-studio-300 bg-white'
                "
                aria-hidden="true"
              >
                <span
                  class="size-2 rounded-full bg-white transition"
                  :class="selected === service.id ? 'opacity-100' : 'opacity-0'"
                />
              </span>

              <span class="min-w-0 flex-1">
                <span class="flex items-center justify-between gap-3">
                  <span class="font-display text-base font-semibold text-studio-950">
                    {{ service.name }}
                  </span>
                  <span class="shrink-0 text-sm font-semibold text-accent">
                    {{ service.price }}
                  </span>
                </span>
                <span class="mt-1 block text-sm text-studio-500">
                  {{ service.duration }} · {{ service.note }}
                </span>
              </span>
            </span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
