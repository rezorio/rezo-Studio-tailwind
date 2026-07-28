<script setup lang="ts">
/**
 * Pre-launch waitlist hero — punchy headline, inline email capture, social proof stack.
 */
import { ref } from 'vue'

const email = ref('')

const waitlistAvatars = [
  { initials: 'AK', tone: 'bg-[#7dd3c0] text-studio-950' },
  { initials: 'MR', tone: 'bg-[#5ec4ff] text-studio-950' },
  { initials: 'JL', tone: 'bg-[#f0c674] text-studio-950' },
  { initials: 'TS', tone: 'bg-accent text-white' },
  { initials: 'DP', tone: 'bg-white/20 text-white' },
]

const perks = ['Early access', 'Founder pricing', 'Private beta channel']
</script>

<template>
  <section
    class="relative -mx-6 -my-6 overflow-hidden bg-studio-950 px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-20"
  >
    <!-- Animated pulse rings -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 size-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(26,122,102,0.28),transparent)]"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-2xl text-center">
      <div
        class="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-studio-300 backdrop-blur-sm"
      >
        <span class="relative flex size-2" aria-hidden="true">
          <span
            class="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60"
          />
          <span class="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        Launching spring 2026
      </div>

      <h2
        class="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.08]"
      >
        The inbox tool that
        <span class="text-[#7dd3c0]">finally</span>
        respects your focus.
      </h2>

      <p class="mx-auto mt-4 max-w-lg text-base leading-relaxed text-studio-400 sm:text-lg">
        Join the waitlist for early access. No spam — just one email when we open the doors.
      </p>

      <!-- Inline waitlist form -->
      <form
        class="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row sm:items-stretch"
        @submit.prevent
      >
        <label class="sr-only" for="hero-waitlist-email">Email address</label>
        <input
          id="hero-waitlist-email"
          v-model="email"
          type="email"
          placeholder="you@company.com"
          autocomplete="email"
          class="min-w-0 flex-1 rounded-xl border border-white/12 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-studio-500 outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/25"
        />
        <button
          type="submit"
          class="inline-flex shrink-0 items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(26,122,102,0.45)] transition hover:bg-accent-hover hover:shadow-[0_0_32px_rgba(26,122,102,0.55)]"
        >
          Join waitlist
        </button>
      </form>

      <!-- Social proof -->
      <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <div class="flex -space-x-2" aria-hidden="true">
          <span
            v-for="avatar in waitlistAvatars"
            :key="avatar.initials"
            class="inline-flex size-8 items-center justify-center rounded-full border-2 border-studio-950 text-[10px] font-bold"
            :class="avatar.tone"
          >
            {{ avatar.initials }}
          </span>
        </div>
        <p class="text-sm text-studio-400">
          <span class="font-semibold text-white">2,847</span>
          people already on the list
        </p>
      </div>

      <!-- Perk chips -->
      <ul
        class="mx-auto mt-10 flex max-w-lg list-none flex-wrap items-center justify-center gap-2 p-0"
      >
        <li
          v-for="perk in perks"
          :key="perk"
          class="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-studio-300"
        >
          <svg
            class="size-3.5 text-accent"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            aria-hidden="true"
          >
            <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {{ perk }}
        </li>
      </ul>
    </div>
  </section>
</template>
