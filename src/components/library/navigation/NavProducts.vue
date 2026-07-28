<script setup lang="ts">
/**
 * Commerce header with hover mega-menu, product categories, and featured tiles.
 */
import { ref } from 'vue'
import brandLogo from '@/assets/brand/logo.png'

const mobileOpen = ref(false)
const mobileProductsOpen = ref(false)
const productsOpen = ref(false)

function closeMobileMenu() {
  mobileOpen.value = false
  mobileProductsOpen.value = false
}

withDefaults(
  defineProps<{
    /** Hide the preview placeholder when stacked under a hero in a full-page template. */
    embedded?: boolean
  }>(),
  { embedded: false },
)

const categories = [
  { name: 'Analytics', desc: 'Dashboards and reporting' },
  { name: 'Automation', desc: 'Workflows that scale' },
  { name: 'Integrations', desc: 'Connect your stack' },
  { name: 'Security', desc: 'Access and compliance' },
]

const featured = [
  { name: 'Pulse Board', tag: 'New', blurb: 'Live metrics in one view' },
  { name: 'Flow Engine', tag: 'Popular', blurb: 'Automate handoffs end to end' },
]
</script>

<template>
  <header class="relative -mx-6 -my-6 sm:-mx-8 sm:-my-8">
    <div class="border-b border-studio-200/90 bg-white">
      <div class="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6 sm:h-16 sm:px-8">
        <a href="#" class="inline-flex shrink-0 items-center no-underline" @click.prevent>
          <img
            :src="brandLogo"
            alt="Rezo Studio"
            class="h-8 w-auto rounded-md sm:h-9"
            width="160"
            height="36"
          />
        </a>

        <nav class="hidden items-center gap-1 md:flex" aria-label="Product navigation">
          <div
            class="relative"
            @mouseenter="productsOpen = true"
            @mouseleave="productsOpen = false"
          >
            <button
              type="button"
              class="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-studio-700 transition hover:bg-studio-50 hover:text-studio-950"
              :aria-expanded="productsOpen"
              aria-haspopup="true"
              @click="productsOpen = !productsOpen"
            >
              Products
              <svg
                class="size-3.5 transition"
                :class="productsOpen ? 'rotate-180' : ''"
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
              v-show="productsOpen"
              class="absolute top-full left-0 z-20 w-[min(36rem,calc(100vw-3rem))] pt-2"
            >
              <div
                class="overflow-hidden rounded-xl border border-studio-200 bg-white shadow-[0_20px_50px_rgba(20,31,28,0.14)]"
              >
                <div class="grid sm:grid-cols-[11rem_1fr]">
                  <aside class="border-b border-studio-100 bg-studio-50/80 p-3 sm:border-r sm:border-b-0">
                    <p class="px-2 pb-2 text-[11px] font-semibold tracking-[0.12em] text-studio-500 uppercase">
                      Categories
                    </p>
                    <ul class="space-y-0.5">
                      <li v-for="cat in categories" :key="cat.name">
                        <a
                          href="#"
                          class="block rounded-lg px-2 py-2 no-underline transition hover:bg-white"
                          @click.prevent
                        >
                          <span class="block text-sm font-medium text-studio-900">{{ cat.name }}</span>
                          <span class="block text-xs text-studio-500">{{ cat.desc }}</span>
                        </a>
                      </li>
                    </ul>
                  </aside>
                  <div class="p-3 sm:p-4">
                    <p class="px-1 pb-2 text-[11px] font-semibold tracking-[0.12em] text-studio-500 uppercase">
                      Featured
                    </p>
                    <div class="grid gap-2 sm:grid-cols-2">
                      <a
                        v-for="item in featured"
                        :key="item.name"
                        href="#"
                        class="rounded-lg border border-studio-100 bg-studio-50/50 p-3 no-underline transition hover:border-accent/30 hover:bg-accent-muted/40"
                        @click.prevent
                      >
                        <div class="flex items-center justify-between gap-2">
                          <span class="text-sm font-semibold text-studio-950">{{ item.name }}</span>
                          <span
                            class="rounded bg-accent-muted px-1.5 py-0.5 text-[10px] font-semibold text-accent"
                          >
                            {{ item.tag }}
                          </span>
                        </div>
                        <p class="mt-1 text-xs leading-relaxed text-studio-600">{{ item.blurb }}</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#"
            class="rounded-lg px-3 py-2 text-sm font-medium text-studio-700 no-underline transition hover:bg-studio-50 hover:text-studio-950"
            @click.prevent
          >
            Solutions
          </a>
          <a
            href="#"
            class="rounded-lg px-3 py-2 text-sm font-medium text-studio-700 no-underline transition hover:bg-studio-50 hover:text-studio-950"
            @click.prevent
          >
            Pricing
          </a>
          <a
            href="#"
            class="rounded-lg px-3 py-2 text-sm font-medium text-studio-700 no-underline transition hover:bg-studio-50 hover:text-studio-950"
            @click.prevent
          >
            Docs
          </a>
        </nav>

        <div class="hidden items-center gap-2 md:flex">
          <a
            href="#"
            class="rounded-lg px-3 py-2 text-sm font-medium text-studio-700 no-underline transition hover:text-studio-950"
            @click.prevent
          >
            Sign in
          </a>
          <a
            href="#"
            class="inline-flex items-center rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-white no-underline transition hover:bg-accent-hover"
            @click.prevent
          >
            Start free
          </a>
        </div>

        <button
          type="button"
          class="inline-flex size-10 items-center justify-center rounded-lg text-studio-800 transition hover:bg-studio-50 md:hidden"
          :aria-expanded="mobileOpen"
          aria-controls="nav-products-mobile"
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
      id="nav-products-mobile"
      class="border-b border-studio-200 bg-white px-6 py-4 md:hidden"
    >
      <div class="mb-3">
        <button
          type="button"
          class="flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left text-sm font-medium text-studio-800 transition hover:bg-studio-50"
          :aria-expanded="mobileProductsOpen"
          @click="mobileProductsOpen = !mobileProductsOpen"
        >
          Products
          <svg
            class="size-3.5 shrink-0 transition"
            :class="mobileProductsOpen ? 'rotate-180' : ''"
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
        <ul v-show="mobileProductsOpen" class="mt-1 space-y-0.5 pl-2">
          <li v-for="cat in categories" :key="cat.name">
            <a
              href="#"
              class="block rounded-lg px-2 py-2 text-sm text-studio-700 no-underline hover:bg-studio-50"
              @click.prevent="closeMobileMenu"
            >
              <span class="font-medium text-studio-900">{{ cat.name }}</span>
              <span class="mt-0.5 block text-xs text-studio-500">{{ cat.desc }}</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="space-y-0.5 border-t border-studio-100 pt-3">
        <a
          href="#"
          class="block rounded-lg px-2 py-2.5 text-sm font-medium text-studio-800 no-underline hover:bg-studio-50"
          @click.prevent="closeMobileMenu"
        >
          Solutions
        </a>
        <a
          href="#"
          class="block rounded-lg px-2 py-2.5 text-sm font-medium text-studio-800 no-underline hover:bg-studio-50"
          @click.prevent="closeMobileMenu"
        >
          Pricing
        </a>
        <a
          href="#"
          class="block rounded-lg px-2 py-2.5 text-sm font-medium text-studio-800 no-underline hover:bg-studio-50"
          @click.prevent="closeMobileMenu"
        >
          Docs
        </a>
      </div>

      <div class="flex flex-col gap-2 border-t border-studio-100 pt-4">
        <a
          href="#"
          class="rounded-lg px-3 py-2.5 text-center text-sm font-medium text-studio-700 no-underline hover:bg-studio-50"
          @click.prevent="closeMobileMenu"
        >
          Sign in
        </a>
        <a
          href="#"
          class="rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-semibold text-white no-underline hover:bg-accent-hover"
          @click.prevent="closeMobileMenu"
        >
          Start free
        </a>
      </div>
    </div>

    <!-- Preview context strip (hidden when embedded in a full-page template) -->
    <div
      v-if="!embedded"
      class="bg-[linear-gradient(180deg,#f7fbfa_0%,#ffffff_100%)] px-6 py-10 sm:px-8 sm:py-12"
      aria-hidden="true"
    >
      <div class="mx-auto max-w-xl">
        <div class="h-3 w-24 rounded bg-accent-muted" />
        <div class="mt-4 h-8 w-3/4 max-w-sm rounded-lg bg-studio-100" />
        <div class="mt-3 h-3 w-full max-w-md rounded bg-studio-100/80" />
        <div class="mt-2 h-3 w-5/6 max-w-sm rounded bg-studio-100/60" />
      </div>
    </div>
  </header>
</template>
