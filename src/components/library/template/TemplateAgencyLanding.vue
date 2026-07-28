<script setup lang="ts">
/**
 * Agency landing page — services nav, centered hero, offerings grid, CTA, and footer.
 */
import TemplatePageShell from '@/components/library/template/TemplatePageShell.vue'
import NavServices from '@/components/library/navigation/NavServices.vue'
import HeroSimpleCentered from '@/components/library/hero/HeroSimpleCentered.vue'
import CtaHorizonGlow from '@/components/library/cta/CtaHorizonGlow.vue'
import FooterHorizonGlow from '@/components/library/footers/FooterHorizonGlow.vue'

const services = [
  {
    number: '01',
    name: 'Brand systems',
    desc: 'Identity, tokens, and a design language your team can extend.',
    outcomes: ['Visual identity & guidelines', 'Component token mapping', 'Figma + code parity'],
  },
  {
    number: '02',
    name: 'Product UI',
    desc: 'Dashboards, flows, and component kits that ship with your roadmap.',
    outcomes: ['Design system patterns', 'High-fidelity core flows', 'Handoff-ready Vue + Tailwind'],
  },
  {
    number: '03',
    name: 'Launch sites',
    desc: 'Marketing pages that convert — built from your catalog sections.',
    outcomes: ['Landing page architecture', 'Responsive section library', 'Performance-minded markup'],
  },
]
</script>

<template>
  <TemplatePageShell>
    <NavServices embedded />
    <HeroSimpleCentered />

    <section class="bg-white px-6 py-14 sm:px-10 sm:py-20">
      <div class="mx-auto max-w-5xl">
        <header class="mx-auto mb-12 max-w-2xl text-center">
          <p class="text-xs font-semibold tracking-[0.14em] text-accent uppercase">What we do</p>
          <h2
            class="mt-3 font-display text-3xl font-semibold tracking-tight text-studio-950 sm:text-4xl"
          >
            Engagements built around outcomes
          </h2>
          <p class="mt-4 text-base leading-relaxed text-studio-600">
            Pick a lane or combine them — each engagement ships with documentation your team can
            own.
          </p>
        </header>

        <div class="grid gap-6 lg:grid-cols-3">
          <article
            v-for="service in services"
            :key="service.number"
            class="relative overflow-hidden rounded-2xl border border-studio-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfa_100%)] p-6 shadow-[0_8px_24px_rgba(20,31,28,0.06)]"
          >
            <div
              class="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,#1a7a66_0%,#5ec4ff_100%)]"
              aria-hidden="true"
            />
            <p class="pl-3 font-mono text-xs font-medium text-studio-400">{{ service.number }}</p>
            <h3 class="mt-4 pl-3 font-display text-xl font-semibold tracking-tight text-studio-950">
              {{ service.name }}
            </h3>
            <p class="mt-2 pl-3 text-sm leading-relaxed text-studio-600">{{ service.desc }}</p>
            <ul class="mt-5 space-y-2 pl-3">
              <li
                v-for="outcome in service.outcomes"
                :key="outcome"
                class="flex items-start gap-2 text-sm text-studio-700"
              >
                <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {{ outcome }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <CtaHorizonGlow />
    <FooterHorizonGlow />
  </TemplatePageShell>
</template>
