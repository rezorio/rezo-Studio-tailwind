<script setup lang="ts">
/**
 * Product SaaS landing — commerce nav, product hero, feature grid, split CTA, slim footer.
 */
import TemplatePageShell from '@/components/library/template/TemplatePageShell.vue'
import NavProducts from '@/components/library/navigation/NavProducts.vue'
import HeroProductFocus from '@/components/library/hero/HeroProductFocus.vue'
import CtaSplitFold from '@/components/library/cta/CtaSplitFold.vue'
import FooterSlimRail from '@/components/library/footers/FooterSlimRail.vue'

const features = [
  {
    title: 'Realtime sync',
    body: 'Changes propagate across workspaces in under 200ms — no refresh required.',
    icon: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83',
  },
  {
    title: 'Role-based access',
    body: 'Granular permissions for admins, editors, and viewers with audit trails.',
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
  {
    title: 'API-first',
    body: 'REST and webhooks so your stack stays in sync with every deployment.',
    icon: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
  },
]
</script>

<template>
  <TemplatePageShell>
    <NavProducts embedded />
    <HeroProductFocus />

    <section
      class="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfa_55%,#eef5f2_100%)] px-6 py-14 sm:px-10 sm:py-20"
    >
      <div class="mx-auto max-w-5xl">
        <header class="mx-auto mb-12 max-w-2xl text-center">
          <p class="text-xs font-semibold tracking-[0.14em] text-accent uppercase">Platform</p>
          <h2
            class="mt-3 font-display text-3xl font-semibold tracking-tight text-studio-950 sm:text-4xl"
          >
            Everything your team needs to ship
          </h2>
          <p class="mt-4 text-base leading-relaxed text-studio-600">
            Infrastructure that stays out of the way — so you can focus on the product your users
            love.
          </p>
        </header>

        <div class="grid gap-6 sm:grid-cols-3">
          <article
            v-for="feature in features"
            :key="feature.title"
            class="rounded-2xl border border-studio-200/80 bg-white/90 p-6 shadow-[0_4px_16px_rgba(20,31,28,0.05)]"
          >
            <div
              class="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent"
            >
              <svg class="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  :d="feature.icon"
                  stroke="currentColor"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3 class="mt-5 font-display text-lg font-semibold tracking-tight text-studio-950">
              {{ feature.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-studio-600">{{ feature.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <CtaSplitFold />
    <FooterSlimRail />
  </TemplatePageShell>
</template>
