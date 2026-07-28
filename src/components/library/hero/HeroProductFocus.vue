<script setup lang="ts">
/**
 * Product-focused hero: copy + CTA beside a large interactive dashboard mockup.
 */
import { ref } from 'vue'

const activePanel = ref<'overview' | 'insights' | 'team'>('overview')

const panels = [
  { id: 'overview' as const, label: 'Overview' },
  { id: 'insights' as const, label: 'Insights' },
  { id: 'team' as const, label: 'Team' },
]

const badges = [
  { label: 'Realtime sync', offset: 'left-2 top-8 sm:-left-4 sm:top-12' },
  { label: '99.9% uptime', offset: 'right-2 top-16 sm:-right-6 sm:top-20' },
  { label: 'SOC 2 ready', offset: 'bottom-10 left-4 sm:bottom-16 sm:-left-2' },
]

const stats = [
  { value: '10k+', label: 'Active users' },
  { value: '4.9★', label: 'Average rating' },
  { value: '2.4M', label: 'Tasks shipped' },
]

const chartBars = [42, 68, 55, 82, 61, 94, 73]
</script>

<template>
  <section
    class="relative -mx-6 -my-6 overflow-hidden bg-[linear-gradient(165deg,#0f1a17_0%,#141f1c_45%,#1a2e28_100%)] px-6 py-12 text-studio-100 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16"
  >
    <!-- Ambient glow layers -->
    <div
      class="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-accent/25 blur-[100px]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-[#5ec4ff]/15 blur-[110px]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute left-1/2 top-1/3 size-64 -translate-x-1/2 rounded-full bg-accent/10 blur-[90px]"
      aria-hidden="true"
    />

    <div
      class="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-12"
    >
      <!-- Copy column -->
      <div class="max-w-xl lg:max-w-none">
        <div class="flex flex-wrap gap-2">
          <span
            class="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/15 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#7dd3c0] uppercase"
          >
            <span class="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Product launch
          </span>
          <span
            class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-studio-300"
          >
            Vue · Tailwind
          </span>
        </div>

        <h2
          class="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-[1.12] lg:text-[2.75rem]"
        >
          Turn product moments into
          <span class="bg-[linear-gradient(105deg,#7dd3c0_0%,#a8d8cc_50%,#5ec4ff_100%)] bg-clip-text text-transparent">
            conversion engines
          </span>
        </h2>

        <p class="mt-4 text-base leading-relaxed text-studio-300 sm:text-lg">
          Showcase your dashboard as the hero. Pair a sharp headline with a live-feeling product
          frame so visitors see value before they scroll.
        </p>

        <div class="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#"
            class="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-[0_12px_32px_rgba(26,122,102,0.4)] transition hover:bg-accent-hover"
            @click.prevent
          >
            Start free trial
          </a>
          <a
            href="#"
            class="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:border-white/25 hover:bg-white/10"
            @click.prevent
          >
            <svg
              class="size-4 text-studio-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
            Watch demo
          </a>
        </div>

        <dl class="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:gap-6">
          <div v-for="stat in stats" :key="stat.label">
            <dt class="sr-only">{{ stat.label }}</dt>
            <dd class="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {{ stat.value }}
            </dd>
            <p class="mt-0.5 text-[11px] text-studio-400 sm:text-xs">{{ stat.label }}</p>
          </div>
        </dl>
      </div>

      <!-- Interactive product mockup -->
      <div class="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
        <div
          v-for="badge in badges"
          :key="badge.label"
          class="absolute z-20 hidden rounded-full border border-white/15 bg-studio-950/80 px-3 py-1.5 text-[11px] font-medium text-studio-100 shadow-lg backdrop-blur-md sm:inline-flex"
          :class="badge.offset"
        >
          <span class="mr-1.5 size-1.5 self-center rounded-full bg-accent" aria-hidden="true" />
          {{ badge.label }}
        </div>

        <div
          class="group relative [perspective:1400px]"
          role="img"
          aria-label="Interactive product dashboard mockup"
        >
          <div
            class="pointer-events-none absolute inset-x-6 -bottom-4 top-1/2 rounded-full bg-accent/30 blur-3xl transition duration-500 group-hover:bg-accent/40"
            aria-hidden="true"
          />

          <div
            class="relative overflow-hidden rounded-2xl border border-white/12 bg-[#182521] shadow-[0_28px_80px_rgba(0,0,0,0.45)] transition duration-500 ease-out [transform-style:preserve-3d] sm:group-hover:rotate-y-[-4deg] sm:group-hover:rotate-x-[3deg] sm:group-hover:scale-[1.02]"
          >
            <!-- Window chrome -->
            <div class="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-4 py-3">
              <span class="size-2.5 rounded-full bg-[#ff5f57]" />
              <span class="size-2.5 rounded-full bg-[#febc2e]" />
              <span class="size-2.5 rounded-full bg-[#28c840]" />
              <div
                class="ml-3 flex flex-1 items-center gap-2 rounded-md border border-white/8 bg-black/20 px-3 py-1.5"
              >
                <span class="size-2 rounded-full bg-accent" aria-hidden="true" />
                <span class="truncate text-[11px] text-studio-400">app.rezo.studio / dashboard</span>
              </div>
            </div>

            <!-- Panel tabs (interactive) -->
            <div class="flex gap-1 border-b border-white/8 px-3 pt-3 sm:px-4" role="tablist">
              <button
                v-for="panel in panels"
                :key="panel.id"
                type="button"
                role="tab"
                :aria-selected="activePanel === panel.id"
                class="rounded-t-lg px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm"
                :class="
                  activePanel === panel.id
                    ? 'bg-white/[0.06] text-white'
                    : 'text-studio-400 hover:text-studio-200'
                "
                @click="activePanel = panel.id"
              >
                {{ panel.label }}
              </button>
            </div>

            <div class="grid gap-3 p-3 sm:grid-cols-[9.5rem_1fr] sm:gap-4 sm:p-4">
              <aside class="hidden space-y-2 sm:block" aria-hidden="true">
                <div class="h-8 rounded-lg bg-accent/25" />
                <div class="h-7 rounded-lg bg-white/5" />
                <div class="h-7 rounded-lg bg-white/5" />
                <div class="h-7 rounded-lg bg-white/[0.03]" />
                <div class="mt-5 rounded-xl border border-white/8 bg-white/[0.03] p-3">
                  <div class="h-1.5 w-10 rounded bg-studio-500" />
                  <div class="mt-2 h-5 w-14 rounded bg-white/20" />
                </div>
              </aside>

              <div class="min-w-0 space-y-3">
                <div class="grid grid-cols-3 gap-2 sm:gap-3">
                  <div
                    v-for="i in 3"
                    :key="i"
                    class="rounded-xl border border-white/8 bg-white/[0.04] p-2.5 sm:p-3"
                    aria-hidden="true"
                  >
                    <div class="h-1.5 w-8 rounded bg-studio-500/80 sm:w-10" />
                    <div class="mt-2 h-5 w-10 rounded bg-white/25 sm:h-6 sm:w-12" />
                    <div class="mt-2 h-1 w-full rounded bg-white/10" />
                  </div>
                </div>

                <!-- Panel body swaps with tab selection -->
                <div
                  class="relative h-40 overflow-hidden rounded-xl border border-white/8 bg-[linear-gradient(145deg,#1c332c_0%,#152420_55%,#1a2a36_100%)] sm:h-48"
                >
                  <template v-if="activePanel === 'overview'">
                    <div class="flex h-full items-end gap-1.5 px-4 pb-4 sm:gap-2 sm:px-5 sm:pb-5">
                      <div
                        v-for="(h, idx) in chartBars"
                        :key="idx"
                        class="flex-1 rounded-t-md bg-accent/80 transition duration-300"
                        :class="idx === 5 ? 'bg-[#7dd3c0]' : ''"
                        :style="{ height: `${h}%` }"
                      />
                    </div>
                  </template>
                  <template v-else-if="activePanel === 'insights'">
                    <div class="flex h-full flex-col justify-center gap-3 px-5" aria-hidden="true">
                      <div class="h-2 w-3/4 max-w-[12rem] rounded bg-white/15" />
                      <div class="h-2 w-full rounded bg-white/10" />
                      <div class="h-2 w-5/6 rounded bg-white/10" />
                      <div class="mt-2 flex gap-2">
                        <div class="h-16 flex-1 rounded-lg border border-accent/30 bg-accent/20" />
                        <div class="h-16 flex-1 rounded-lg border border-white/10 bg-white/5" />
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="flex h-full flex-col justify-center gap-2.5 px-5" aria-hidden="true">
                      <div
                        v-for="n in 4"
                        :key="n"
                        class="flex items-center gap-3"
                      >
                        <span class="size-7 shrink-0 rounded-full bg-white/10" />
                        <div class="h-2 flex-1 rounded bg-white/10" />
                        <div class="h-5 w-12 rounded-md bg-accent/25" />
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile feature chips (badges hidden on small screens) -->
        <div class="mt-4 flex flex-wrap justify-center gap-2 sm:hidden">
          <span
            v-for="badge in badges"
            :key="`m-${badge.label}`"
            class="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-[11px] text-studio-200"
          >
            {{ badge.label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
