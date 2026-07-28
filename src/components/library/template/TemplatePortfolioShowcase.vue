<script setup lang="ts">
/**
 * Portfolio showcase — minimal nav, dark hero, project grid, contact form, ledger footer.
 */
import TemplatePageShell from '@/components/library/template/TemplatePageShell.vue'
import NavPortfolio from '@/components/library/navigation/NavPortfolio.vue'
import HeroDarkBadge from '@/components/library/hero/HeroDarkBadge.vue'
import FormOpenLetter from '@/components/library/forms/FormOpenLetter.vue'
import FooterLedgerIndex from '@/components/library/footers/FooterLedgerIndex.vue'

const projects = [
  {
    year: '2026',
    client: 'Northwind Labs',
    title: 'Signal — ops console',
    discipline: 'Product design · Brand',
  },
  {
    year: '2025',
    client: 'Meridian Co.',
    title: 'Atlas — field toolkit',
    discipline: 'UX research · UI',
  },
  {
    year: '2025',
    client: 'Studio Kite',
    title: 'Drift — editorial site',
    discipline: 'Art direction · Dev',
  },
]
</script>

<template>
  <TemplatePageShell>
    <NavPortfolio embedded />
    <HeroDarkBadge />

    <section class="bg-white px-6 py-14 sm:px-10 sm:py-20">
      <div class="mx-auto max-w-5xl">
        <header class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              Selected work
            </p>
            <h2
              class="mt-3 font-display text-3xl font-semibold tracking-tight text-studio-950 sm:text-4xl"
            >
              Recent projects
            </h2>
          </div>
          <a
            href="#"
            class="text-sm font-medium text-studio-600 no-underline transition hover:text-accent"
            @click.prevent
          >
            View all work →
          </a>
        </header>

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="project in projects" :key="project.title" class="group">
            <a
              href="#"
              class="relative block aspect-[4/3] overflow-hidden no-underline outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              @click.prevent
            >
              <div
                class="absolute inset-0 bg-[linear-gradient(145deg,#141f1c_0%,#243d36_48%,#1a2e28_100%)] transition duration-500 group-hover:scale-[1.02]"
              />
              <div
                class="pointer-events-none absolute inset-0 opacity-30"
                style="
                  background-image: linear-gradient(
                      rgba(255, 255, 255, 0.04) 1px,
                      transparent 1px
                    ),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
                  background-size: 24px 24px;
                "
                aria-hidden="true"
              />
              <span
                class="absolute right-4 top-4 text-[11px] font-medium tracking-[0.14em] text-white/55 uppercase"
              >
                {{ project.year }}
              </span>
            </a>
            <div class="mt-4">
              <p class="text-[11px] font-semibold tracking-[0.14em] text-studio-500 uppercase">
                {{ project.client }}
              </p>
              <h3
                class="mt-1 font-display text-lg font-semibold tracking-tight text-studio-950 transition group-hover:text-accent"
              >
                {{ project.title }}
              </h3>
              <p class="mt-1 text-sm text-studio-500">{{ project.discipline }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <FormOpenLetter />
    <FooterLedgerIndex />
  </TemplatePageShell>
</template>
