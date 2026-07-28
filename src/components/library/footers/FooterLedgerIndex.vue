<script setup lang="ts">
/**
 * Ledger Index footer — editorial numbered link columns with a crisp legal rail.
 */
import brandLogo from '@/assets/brand/logo.png'

const columns = [
  {
    title: 'Product',
    links: [
      { index: '01', label: 'Components', href: '#' },
      { index: '02', label: 'Templates', href: '#' },
      { index: '03', label: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { index: '04', label: 'About', href: '#' },
      { index: '05', label: 'Blog', href: '#' },
      { index: '06', label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { index: '07', label: 'Privacy', href: '#' },
      { index: '08', label: 'Terms', href: '#' },
      { index: '09', label: 'Licenses', href: '#' },
    ],
  },
]
</script>

<template>
  <footer class="-mx-6 -my-6 sm:-mx-8 sm:-my-8">
    <!-- Page stub -->
    <div class="h-24 bg-white sm:h-28" aria-hidden="true" />

    <div class="border-t border-studio-200/90 bg-white px-4 py-12 sm:px-8 sm:py-14">
      <div class="mx-auto max-w-4xl">
        <div class="flex flex-col gap-8 lg:grid lg:grid-cols-[1.1fr_1fr_1fr_1fr] lg:gap-8">
          <!-- Brand -->
          <div class="lg:pr-4">
            <a href="#" class="inline-flex no-underline" @click.prevent>
              <img
                :src="brandLogo"
                alt="Rezo Studio"
                class="h-8 w-auto rounded-md"
                width="160"
                height="36"
              />
            </a>
            <p class="mt-4 max-w-sm text-sm leading-relaxed text-studio-600">
              A living catalog of interface patterns — indexed, previewed, and ready to paste.
            </p>
            <p class="mt-6 font-mono text-[10px] tracking-[0.2em] text-studio-400 uppercase">
              Index · v2.4
            </p>
          </div>

          <!-- Link columns: side-by-side on mobile, join brand row on lg -->
          <div class="grid grid-cols-3 gap-3 sm:gap-6 lg:contents">
            <div v-for="col in columns" :key="col.title" class="min-w-0">
              <p
                class="text-[10px] font-semibold tracking-[0.14em] text-studio-400 uppercase sm:text-[11px]"
              >
                {{ col.title }}
              </p>
              <ul class="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
                <li v-for="link in col.links" :key="link.index">
                  <a
                    :href="link.href"
                    class="group inline-flex max-w-full items-baseline gap-1.5 text-sm no-underline sm:gap-2.5"
                    @click.prevent
                  >
                    <span
                      class="shrink-0 font-mono text-[10px] tabular-nums tracking-wider text-studio-400 transition group-hover:text-accent"
                    >
                      {{ link.index }}
                    </span>
                    <span
                      class="truncate font-medium text-studio-700 transition group-hover:text-studio-950"
                    >
                      {{ link.label }}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Legal rail -->
        <div
          class="mt-10 flex flex-col gap-3 border-t border-studio-200/80 pt-6 text-xs text-studio-500 sm:mt-12 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {{ new Date().getFullYear() }} Rezo Studio. All rights reserved.</p>
          <p class="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Made for builders</span>
            <span class="text-studio-300" aria-hidden="true">·</span>
            <span>Vue 3 + Tailwind</span>
            <span class="text-studio-300" aria-hidden="true">·</span>
            <span>Open source friendly</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
