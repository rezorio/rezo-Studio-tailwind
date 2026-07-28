<script setup lang="ts">
/**
 * Agency header with services dropdown and a strong Book a call action.
 */
import { ref } from 'vue'
import brandIcon from '@/assets/brand/icon.png'

const mobileOpen = ref(false)
const servicesOpen = ref(false)

function closeMobileMenu() {
  mobileOpen.value = false
}

withDefaults(
  defineProps<{
    /** Hide the preview placeholder when stacked under a hero in a full-page template. */
    embedded?: boolean
  }>(),
  { embedded: false },
)

const services = [
  {
    name: 'Brand systems',
    desc: 'Identity, tokens, and design language',
  },
  {
    name: 'Product UI',
    desc: 'Dashboards, flows, and component kits',
  },
  {
    name: 'Launch sites',
    desc: 'Marketing pages that convert',
  },
]
</script>

<template>
  <header class="relative -mx-6 -my-6 sm:-mx-8 sm:-my-8">
    <div
      class="border-b border-studio-200/80 bg-white/95 shadow-[0_1px_0_rgba(20,31,28,0.03)] backdrop-blur-md"
    >
      <div class="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-6 sm:h-16 sm:px-8">
        <a href="#" class="flex items-center gap-2.5 no-underline" @click.prevent>
          <img
            :src="brandIcon"
            alt=""
            class="size-8 rounded-lg object-contain"
            width="32"
            height="32"
          />
          <span class="font-display text-sm font-semibold tracking-tight text-studio-950 sm:text-base">
            Rezo Studio
          </span>
        </a>

        <nav class="hidden items-center gap-0.5 md:flex" aria-label="Services navigation">
          <div
            class="relative"
            @mouseenter="servicesOpen = true"
            @mouseleave="servicesOpen = false"
          >
            <button
              type="button"
              class="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-studio-700 transition hover:bg-studio-50 hover:text-studio-950"
              :aria-expanded="servicesOpen"
              aria-haspopup="true"
              @click="servicesOpen = !servicesOpen"
            >
              Services
              <svg
                class="size-3.5 transition"
                :class="servicesOpen ? 'rotate-180' : ''"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 4.5 6 8l3.5-3.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <div
              v-show="servicesOpen"
              class="absolute top-full left-1/2 z-20 w-72 -translate-x-1/2 pt-2"
            >
              <div
                class="overflow-hidden rounded-xl border border-studio-200 bg-white py-2 shadow-[0_16px_40px_rgba(20,31,28,0.12)]"
              >
                <a
                  v-for="item in services"
                  :key="item.name"
                  href="#"
                  class="block px-4 py-2.5 no-underline transition hover:bg-studio-50"
                  @click.prevent
                >
                  <span class="block text-sm font-semibold text-studio-950">{{ item.name }}</span>
                  <span class="mt-0.5 block text-xs leading-relaxed text-studio-500">{{
                    item.desc
                  }}</span>
                </a>
              </div>
            </div>
          </div>

          <a
            href="#"
            class="rounded-lg px-3 py-2 text-sm font-medium text-studio-700 no-underline transition hover:bg-studio-50 hover:text-studio-950"
            @click.prevent
          >
            Process
          </a>
          <a
            href="#"
            class="rounded-lg px-3 py-2 text-sm font-medium text-studio-700 no-underline transition hover:bg-studio-50 hover:text-studio-950"
            @click.prevent
          >
            Case studies
          </a>
          <a
            href="#"
            class="rounded-lg px-3 py-2 text-sm font-medium text-studio-700 no-underline transition hover:bg-studio-50 hover:text-studio-950"
            @click.prevent
          >
            About
          </a>
        </nav>

        <div class="hidden items-center gap-2 md:flex">
          <a
            href="#"
            class="rounded-lg px-3 py-2 text-sm font-medium text-studio-600 no-underline transition hover:text-studio-950"
            @click.prevent
          >
            Log in
          </a>
          <a
            href="#"
            class="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white no-underline shadow-[0_6px_16px_rgba(26,122,102,0.28)] transition hover:bg-accent-hover"
            @click.prevent
          >
            Book a call
            <svg class="size-3.5" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2.5 6h7M6.5 3l3 3-3 3"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        <button
          type="button"
          class="inline-flex size-10 items-center justify-center rounded-lg text-studio-800 transition hover:bg-studio-50 md:hidden"
          :aria-expanded="mobileOpen"
          aria-controls="nav-services-mobile"
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

    <div
      v-show="mobileOpen"
      id="nav-services-mobile"
      class="border-b border-studio-200 bg-white px-6 py-4 md:hidden"
    >
      <p class="mb-2 text-[11px] font-semibold tracking-[0.12em] text-studio-500 uppercase">
        Services
      </p>
      <ul class="mb-3 space-y-1">
        <li v-for="item in services" :key="item.name">
          <a
            href="#"
            class="block rounded-lg px-2 py-2 text-sm font-medium text-studio-800 no-underline hover:bg-studio-50"
            @click.prevent="closeMobileMenu"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
      <div class="space-y-1 border-t border-studio-100 pt-3">
        <a
          href="#"
          class="block rounded-lg px-2 py-2 text-sm font-medium text-studio-800 no-underline hover:bg-studio-50"
          @click.prevent="closeMobileMenu"
        >
          Process
        </a>
        <a
          href="#"
          class="block rounded-lg px-2 py-2 text-sm font-medium text-studio-800 no-underline hover:bg-studio-50"
          @click.prevent="closeMobileMenu"
        >
          Case studies
        </a>
        <a
          href="#"
          class="block rounded-lg px-2 py-2 text-sm font-medium text-studio-800 no-underline hover:bg-studio-50"
          @click.prevent="closeMobileMenu"
        >
          About
        </a>
      </div>
      <div class="mt-4 flex flex-col gap-2 border-t border-studio-100 pt-4">
        <a
          href="#"
          class="rounded-lg px-3 py-2.5 text-center text-sm font-medium text-studio-700 no-underline hover:bg-studio-50"
          @click.prevent="closeMobileMenu"
        >
          Log in
        </a>
        <a
          href="#"
          class="rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-semibold text-white no-underline hover:bg-accent-hover"
          @click.prevent="closeMobileMenu"
        >
          Book a call
        </a>
      </div>
    </div>

    <!-- Preview context strip (hidden when embedded in a full-page template) -->
    <div
      v-if="!embedded"
      class="bg-[linear-gradient(135deg,#eef5f2_0%,#ffffff_45%,#f7fbfa_100%)] px-6 py-10 sm:px-8 sm:py-12"
      aria-hidden="true"
    >
      <div class="mx-auto max-w-lg text-center">
        <div class="mx-auto h-2.5 w-20 rounded bg-accent/20" />
        <div class="mx-auto mt-4 h-7 w-2/3 max-w-xs rounded-lg bg-studio-100" />
        <div class="mx-auto mt-3 h-3 w-full max-w-sm rounded bg-studio-100/70" />
      </div>
    </div>
  </header>
</template>
