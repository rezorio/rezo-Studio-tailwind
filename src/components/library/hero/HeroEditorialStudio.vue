<script setup lang="ts">
/**
 * Editorial hero for creative studios — asymmetric layout, manifesto copy, portfolio frames.
 */
const frames = [
  {
    label: 'Brand identity',
    rotate: '-rotate-2',
    offset: 'sm:translate-x-0',
    z: 'z-30',
    gradient: 'from-[#283733] via-[#354e48] to-[#1a7a66]',
  },
  {
    label: 'Campaign site',
    rotate: 'rotate-3',
    offset: 'sm:-translate-y-6 sm:translate-x-8',
    z: 'z-20',
    gradient: 'from-[#527a70] via-[#3f6159] to-[#141f1c]',
  },
  {
    label: 'Motion reel',
    rotate: '-rotate-1',
    offset: 'sm:translate-y-4 sm:translate-x-16',
    z: 'z-10',
    gradient: 'from-[#6f978c] via-[#354e48] to-[#283733]',
  },
]

const clients = ['Northwind', 'Lumen', 'Atelier 9', 'Form & Co.']
</script>

<template>
  <section
    class="relative -mx-6 -my-6 overflow-hidden bg-[#f9f7f4] px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16"
  >
    <!-- Soft paper grain + accent wash -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_0%_0%,rgba(26,122,102,0.08),transparent),radial-gradient(ellipse_40%_35%_at_100%_100%,rgba(40,55,51,0.06),transparent)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-20 top-1/4 size-64 rounded-full bg-accent/10 blur-3xl"
      aria-hidden="true"
    />

    <div
      class="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14"
    >
      <!-- Manifesto column -->
      <div class="max-w-xl lg:max-w-none">
        <p
          class="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-studio-500 uppercase"
        >
          <span class="h-px w-8 bg-studio-400" aria-hidden="true" />
          Creative studio · Est. 2019
        </p>

        <h2
          class="font-display text-[2.125rem] font-semibold leading-[1.08] tracking-tight text-studio-950 sm:text-5xl lg:text-[3.25rem]"
        >
          We craft brands that feel
          <em class="not-italic text-accent">alive</em>
          — not assembled.
        </h2>

        <p class="mt-5 max-w-md text-base leading-relaxed text-studio-600 sm:text-lg">
          Strategy, identity, and digital experiences for teams who refuse generic. We lead with
          conviction, ship with restraint, and leave room for the work to breathe.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#"
            class="inline-flex items-center gap-2 rounded-full bg-studio-950 px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-studio-800"
            @click.prevent
          >
            Start a project
            <svg
              class="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <a
            href="#"
            class="text-sm font-semibold text-studio-700 no-underline underline-offset-4 transition hover:text-accent hover:underline"
            @click.prevent
          >
            View selected work
          </a>
        </div>

        <div class="mt-10 border-t border-studio-200/80 pt-6">
          <p class="text-[10px] font-semibold tracking-[0.18em] text-studio-400 uppercase">
            Trusted by
          </p>
          <ul class="mt-3 flex flex-wrap gap-x-5 gap-y-2 list-none p-0">
            <li
              v-for="client in clients"
              :key="client"
              class="font-display text-sm font-medium text-studio-500"
            >
              {{ client }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Stacked portfolio frames -->
      <div class="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:min-h-[22rem]">
        <div
          v-for="(frame, idx) in frames"
          :key="frame.label"
          class="relative sm:absolute sm:inset-x-0 sm:top-0"
          :class="[frame.z, frame.offset, idx > 0 ? 'mt-4 sm:mt-0' : '']"
        >
          <div
            class="overflow-hidden rounded-2xl border border-studio-200/70 bg-white shadow-[0_20px_50px_rgba(40,55,51,0.12)] transition duration-300 sm:hover:-translate-y-1"
            :class="frame.rotate"
            role="img"
            :aria-label="`${frame.label} preview`"
          >
            <div
              class="flex aspect-[4/3] flex-col justify-between bg-linear-to-br p-5 sm:aspect-[5/4]"
              :class="frame.gradient"
            >
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-semibold tracking-widest text-white/70 uppercase">
                  {{ frame.label }}
                </span>
                <span
                  class="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] text-white/80"
                >
                  0{{ idx + 1 }}
                </span>
              </div>
              <div class="space-y-2" aria-hidden="true">
                <div class="h-2 w-2/3 max-w-[10rem] rounded-full bg-white/25" />
                <div class="h-2 w-full rounded-full bg-white/15" />
                <div class="h-2 w-4/5 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>

        <!-- Floating note card -->
        <div
          class="relative z-40 mt-4 max-w-[14rem] rounded-xl border border-studio-200 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:absolute sm:bottom-0 sm:left-0 sm:mt-0"
        >
          <p class="font-display text-sm font-semibold text-studio-900">Currently booking Q3</p>
          <p class="mt-1 text-xs leading-relaxed text-studio-500">
            Two studio slots left for brand + web engagements.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
