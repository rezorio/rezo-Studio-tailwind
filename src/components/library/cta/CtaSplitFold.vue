<script setup lang="ts">
/**
 * Split Fold CTA — asymmetric two-panel layout with an angled seam,
 * copy on a light field and a dark action card tucked on the right.
 */
const perks = ['Vue 3 + Tailwind', 'Copy-ready source', 'Live preview']
</script>

<template>
  <section
    class="-mx-6 -my-6 overflow-hidden bg-[linear-gradient(135deg,#eef5f2_0%,#ffffff_50%,#f7fbfa_100%)] px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14"
  >
    <div
      class="relative mx-auto grid max-w-4xl items-center gap-8 sm:grid-cols-[1fr_minmax(0,17rem)] sm:gap-6 lg:grid-cols-[1fr_19rem]"
    >
      <!-- Copy panel -->
      <div class="relative z-10 sm:pr-4">
        <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
          For product teams
        </p>
        <h2
          class="mt-2 font-display text-2xl font-semibold tracking-tight text-studio-950 sm:text-3xl sm:leading-[1.15]"
        >
          Stop rebuilding the same sections every sprint.
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-studio-600 sm:text-base">
          Pull from a growing catalog of polished blocks. Adapt tokens, ship faster, and keep
          every page feeling cohesive.
        </p>

        <ul class="mt-5 flex flex-wrap gap-2">
          <li
            v-for="perk in perks"
            :key="perk"
            class="rounded-full border border-studio-200 bg-white/80 px-3 py-1 text-xs font-medium text-studio-600"
          >
            {{ perk }}
          </li>
        </ul>
      </div>

      <!-- Angled fold + dark action card -->
      <div class="relative">
        <div
          class="pointer-events-none absolute -left-6 top-1/2 hidden h-32 w-16 -translate-y-1/2 skew-x-[-12deg] bg-white/60 sm:block"
          aria-hidden="true"
        />

        <aside
          class="relative overflow-hidden rounded-2xl border border-studio-800/20 bg-studio-950 p-6 text-studio-100 shadow-[0_20px_50px_rgba(20,31,28,0.2)]"
        >
          <div
            class="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-accent/20 blur-2xl"
            aria-hidden="true"
          />

          <p class="relative text-[11px] font-semibold tracking-[0.14em] text-accent uppercase">
            Free starter
          </p>
          <p class="relative mt-2 font-display text-3xl font-semibold tracking-tight text-white">
            $0
            <span class="text-base font-normal text-studio-400">/mo</span>
          </p>
          <p class="relative mt-1 text-sm text-studio-400">
            Full catalog access for solo builders.
          </p>

          <a
            href="#"
            class="relative mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-studio-950 no-underline transition hover:bg-studio-100"
            @click.prevent
          >
            Get started
            <svg
              class="size-4 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>

          <a
            href="#"
            class="relative mt-3 block text-center text-xs font-medium text-studio-500 no-underline transition hover:text-studio-300"
            @click.prevent
          >
            Compare plans →
          </a>
        </aside>
      </div>
    </div>
  </section>
</template>
