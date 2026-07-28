<script setup lang="ts">
/**
 * Confirm panel — booking summary with attendee details and a confirm action.
 */
const booking = {
  service: 'Strategy session',
  date: 'Tuesday, Jul 28, 2026',
  time: '10:00 AM – 10:45 AM',
  host: 'Maya Chen',
  location: 'Video call · link sent after booking',
  price: '$120',
}

const details = [
  { label: 'Guest', value: 'Alex Rivera' },
  { label: 'Email', value: 'alex@studio.io' },
  { label: 'Notes', value: 'Launch timeline for Q3 marketing site.' },
]
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <div class="mx-auto max-w-md overflow-hidden rounded-2xl border border-studio-200 bg-white shadow-[0_1px_0_rgba(20,31,28,0.04)]">
      <div class="border-b border-studio-100 bg-accent-muted/40 px-6 py-5">
        <p class="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
          Booking summary
        </p>
        <h2 class="mt-1 font-display text-xl font-semibold tracking-tight text-studio-950">
          {{ booking.service }}
        </h2>
        <p class="mt-2 text-sm text-studio-600">{{ booking.date }}</p>
        <p class="text-sm font-medium text-studio-800">{{ booking.time }}</p>
      </div>

      <dl class="divide-y divide-studio-100 px-6">
        <div class="flex justify-between gap-4 py-3 text-sm">
          <dt class="text-studio-500">Host</dt>
          <dd class="font-medium text-studio-900">{{ booking.host }}</dd>
        </div>
        <div class="flex justify-between gap-4 py-3 text-sm">
          <dt class="text-studio-500">Location</dt>
          <dd class="text-right font-medium text-studio-900">{{ booking.location }}</dd>
        </div>
        <div class="flex justify-between gap-4 py-3 text-sm">
          <dt class="text-studio-500">Total</dt>
          <dd class="font-display text-base font-semibold text-accent">{{ booking.price }}</dd>
        </div>
      </dl>

      <div class="border-t border-studio-100 px-6 py-4">
        <p class="text-xs font-semibold tracking-[0.1em] text-studio-400 uppercase">
          Your details
        </p>
        <ul class="mt-3 space-y-2">
          <li
            v-for="item in details"
            :key="item.label"
            class="flex justify-between gap-4 text-sm"
          >
            <span class="text-studio-500">{{ item.label }}</span>
            <span class="text-right font-medium text-studio-800">{{ item.value }}</span>
          </li>
        </ul>
      </div>

      <div class="border-t border-studio-100 px-6 py-5">
        <button
          type="button"
          class="w-full rounded-full bg-accent py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover"
        >
          Confirm booking
        </button>
        <button
          type="button"
          class="mt-2 w-full py-2 text-sm font-medium text-studio-500 transition hover:text-studio-800"
        >
          Edit details
        </button>
      </div>
    </div>
  </div>
</template>
