<script setup lang="ts">
/**
 * Notification cascade — activity feed where rows stagger in on load,
 * unread dots pulse, and hover slides each item with a growing accent rail.
 */
interface Notification {
  id: string
  title: string
  detail: string
  time: string
  unread: boolean
}

const notifications: Notification[] = [
  {
    id: '1',
    title: 'Deploy succeeded',
    detail: 'Staging build v2.4.1 is live and healthy.',
    time: '2m ago',
    unread: true,
  },
  {
    id: '2',
    title: 'New comment on hero',
    detail: 'Sarah left feedback on the centered variant.',
    time: '18m ago',
    unread: true,
  },
  {
    id: '3',
    title: 'Invoice paid',
    detail: 'Acme Corp — March retainer received.',
    time: '1h ago',
    unread: false,
  },
  {
    id: '4',
    title: 'Calendar invite',
    detail: 'Design review moved to Thursday at 3 PM.',
    time: '3h ago',
    unread: false,
  },
]
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <div class="mx-auto max-w-md">
      <div class="flex items-end justify-between gap-4">
        <div>
          <p class="text-xs font-semibold tracking-[0.14em] text-studio-400 uppercase">
            Activity
          </p>
          <h2 class="mt-1 font-display text-xl font-semibold tracking-tight text-studio-950">
            Recent updates
          </h2>
        </div>
        <span class="rounded-full bg-accent-muted px-2.5 py-0.5 text-xs font-semibold text-accent">
          2 new
        </span>
      </div>

      <ul class="mt-8 space-y-2">
        <li
          v-for="(item, index) in notifications"
          :key="item.id"
          class="cascade-item"
          :style="{ '--delay': `${index * 90}ms` }"
        >
          <button
            type="button"
            class="group relative flex w-full items-start gap-3 overflow-hidden rounded-xl border border-studio-200 bg-white px-4 py-3.5 text-left shadow-[0_1px_0_rgba(20,31,28,0.03)] transition-[border-color,box-shadow,transform] duration-300 hover:border-accent/30 hover:shadow-[0_8px_24px_rgba(20,31,28,0.08)]"
          >
            <span
              class="accent-rail absolute inset-y-2 left-0 w-0.5 rounded-full bg-accent"
              aria-hidden="true"
            />

            <span class="relative mt-1.5 flex size-2 shrink-0" aria-hidden="true">
              <span
                v-if="item.unread"
                class="pulse-dot absolute inset-0 rounded-full bg-accent"
              />
              <span
                class="relative size-2 rounded-full"
                :class="item.unread ? 'bg-accent' : 'bg-studio-300'"
              />
            </span>

            <span class="min-w-0 flex-1">
              <span class="flex items-baseline justify-between gap-2">
                <span
                  class="font-display text-sm font-semibold transition-colors duration-300 group-hover:text-accent"
                  :class="item.unread ? 'text-studio-950' : 'text-studio-700'"
                >
                  {{ item.title }}
                </span>
                <span class="shrink-0 text-xs text-studio-400">{{ item.time }}</span>
              </span>
              <span class="mt-0.5 block text-sm leading-relaxed text-studio-500">
                {{ item.detail }}
              </span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.cascade-item {
  opacity: 0;
  transform: translateY(16px);
  animation: cascade-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes cascade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group:hover {
  transform: translateX(4px);
}

.accent-rail {
  transform: scaleY(0);
  transform-origin: center;
  transition: transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1);
}

.group:hover .accent-rail {
  transform: scaleY(1);
}

.pulse-dot {
  animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-ring {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(2.2);
    opacity: 0;
  }
}
</style>
