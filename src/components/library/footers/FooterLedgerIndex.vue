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

    <div class="border-t border-studio-200/90 bg-white px-6 py-12 sm:px-8 sm:py-14">
      <div class="mx-auto max-w-4xl">
        <div class="grid gap-10 sm:grid-cols-[1.1fr_1fr_1fr_1fr] sm:gap-8">
          <!-- Brand column -->
          <div class="sm:pr-4">
            <a href="#" class="inline-flex no-underline" @click.prevent>
              <img
                :src="brandLogo"
                alt="Rezo Studio"
                class="h-8 w-auto rounded-md"
                width="160"
                height="36"
              />
            </a>
            <p class="mt-4 text-sm leading-relaxed text-studio-600">
              A living catalog of interface patterns — indexed, previewed, and ready to paste.
            </p>
            <p class="mt-6 font-mono text-[10px] tracking-[0.2em] text-studio-400 uppercase">
              Index · v2.4
            </p>
          </div>

          <!-- Link columns -->
          <div v-for="col in columns" :key="col.title">
            <p
              class="text-[11px] font-semibold tracking-[0.14em] text-studio-400 uppercase"
            >
              {{ col.title }}
            </p>
            <ul class="mt-4 space-y-2.5">
              <li v-for="link in col.links" :key="link.index">
                <a
                  :href="link.href"
                  class="group inline-flex items-baseline gap-2.5 text-sm no-underline"
                  @click.prevent
                >
                  <span
                    class="font-mono text-[10px] tabular-nums tracking-wider text-studio-400 transition group-hover:text-accent"
                  >
                    {{ link.index }}
                  </span>
                  <span
                    class="font-medium text-studio-700 transition group-hover:text-studio-950"
                  >
                    {{ link.label }}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Legal rail -->
        <div
          class="mt-12 flex flex-col gap-3 border-t border-studio-200/80 pt-6 text-xs text-studio-500 sm:flex-row sm:items-center sm:justify-between"
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
