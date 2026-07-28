<script setup lang="ts">
/**
 * Marketing landing header — floating glass pill over a hero.
 * When `embedded`, only the pill bar remains so the real hero sits in normal place below.
 */
import { ref } from 'vue'
import brandLogo from '@/assets/brand/logo.png'

const mobileOpen = ref(false)

function closeMobileMenu() {
  mobileOpen.value = false
}

withDefaults(
  defineProps<{
    /** Drop the fake hero band — use when a real hero follows in a page stack. */
    embedded?: boolean
  }>(),
  { embedded: false },
)

const links = ['Features', 'Pricing', 'Customers', 'Blog']
</script>

<template>
  <header class="relative -mx-6 -my-6 sm:-mx-8 sm:-my-8">
    <div
      class="px-6 pt-6 sm:px-8 sm:pt-8"
      :class="
        embedded
          ? 'relative z-30 bg-studio-950 pb-4 sm:pb-5'
          : 'relative overflow-hidden bg-[linear-gradient(145deg,#0f2f2a_0%,#1a4a40_35%,#283733_70%,#141f1c_100%)] pb-16 sm:pb-20'
      "
    >
      <template v-if="!embedded">
        <div
          class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(45,212,191,0.18),transparent_55%)]"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute -right-20 -bottom-20 size-64 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />
      </template>

      <!-- Floating glass pill -->
      <div
        class="relative z-10 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/10 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl"
      >
        <div class="flex items-center justify-between gap-3 px-2 sm:px-3">
          <a href="#" class="inline-flex shrink-0 items-center no-underline" @click.prevent>
            <img
              :src="brandLogo"
              alt="Rezo Studio"
              class="brand-mark h-7 w-auto rounded sm:h-8"
              width="140"
              height="32"
            />
          </a>

          <nav class="hidden items-center gap-1 md:flex" aria-label="Landing navigation">
            <a
              v-for="link in links"
              :key="link"
              href="#"
              class="rounded-lg px-3 py-1.5 text-sm font-medium text-white/80 no-underline transition hover:bg-white/10 hover:text-white"
              @click.prevent
            >
              {{ link }}
            </a>
          </nav>

          <div class="flex items-center gap-2">
            <a
              href="#"
              class="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-white/90 no-underline transition hover:text-white sm:inline"
              @click.prevent
            >
              Log in
            </a>
            <a
              href="#"
              class="inline-flex items-center rounded-xl bg-white px-3.5 py-2 text-sm font-semibold text-studio-950 no-underline shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition hover:bg-studio-50"
              @click.prevent
            >
              Start free
            </a>
            <button
              type="button"
              class="inline-flex size-9 items-center justify-center rounded-lg text-white/90 transition hover:bg-white/10 md:hidden"
              :aria-expanded="mobileOpen"
              aria-controls="nav-landing-mobile"
              aria-label="Toggle menu"
              @click="mobileOpen = !mobileOpen"
            >
              <svg v-if="!mobileOpen" class="size-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M3 5.5h14M3 10h14M3 14.5h14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <svg v-else class="size-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M5 5l10 10M15 5 5 15"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Hero placeholder (catalog-only — nav floats over it) -->
      <div
        v-if="!embedded"
        class="relative z-0 mx-auto mt-12 max-w-2xl text-center sm:mt-16"
        aria-hidden="true"
      >
        <div
          class="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1"
        >
          <span class="size-1.5 rounded-full bg-accent" />
          <span class="h-2 w-24 rounded bg-white/30" />
        </div>
        <div class="mx-auto mt-6 h-10 w-4/5 max-w-md rounded-lg bg-white/90 sm:h-12" />
        <div class="mx-auto mt-4 space-y-2">
          <div class="mx-auto h-2.5 w-full max-w-lg rounded bg-white/25" />
          <div class="mx-auto h-2.5 w-5/6 max-w-md rounded bg-white/15" />
        </div>
        <div class="mt-8 flex items-center justify-center gap-3">
          <div class="h-10 w-28 rounded-xl bg-white shadow-lg" />
          <div class="h-10 w-28 rounded-xl border border-white/25 bg-white/5" />
        </div>
      </div>

      <!-- Mobile menu: absolute when embedded so it overlays the hero instead of pushing it down -->
      <div
        v-show="mobileOpen"
        id="nav-landing-mobile"
        class="z-20 mx-auto max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-studio-950/90 p-3 backdrop-blur-xl md:hidden"
        :class="embedded ? 'absolute inset-x-6 top-full mt-2 sm:inset-x-8' : 'relative mt-3'"
      >
        <nav class="flex flex-col gap-0.5" aria-label="Mobile landing navigation">
          <a
            v-for="link in links"
            :key="link"
            href="#"
            class="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 no-underline hover:bg-white/10"
            @click.prevent="closeMobileMenu"
          >
            {{ link }}
          </a>
          <a
            href="#"
            class="mt-1 rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 no-underline hover:bg-white/10"
            @click.prevent="closeMobileMenu"
          >
            Log in
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>
