<script setup lang="ts">
/**
 * Timeline events — vertical activity feed with status dots and timestamps.
 */
interface Event {
  id: string
  time: string
  title: string
  detail: string
  status: 'done' | 'active' | 'upcoming'
}

const events: Event[] = [
  {
    id: '1',
    time: '9:00 AM',
    title: 'Kickoff synced',
    detail: 'Scope and milestones confirmed with the client.',
    status: 'done',
  },
  {
    id: '2',
    time: '11:30 AM',
    title: 'Design review',
    detail: 'Hero and navigation variants presented live.',
    status: 'active',
  },
  {
    id: '3',
    time: '2:00 PM',
    title: 'Dev handoff',
    detail: 'Component specs and tokens shared with engineering.',
    status: 'upcoming',
  },
  {
    id: '4',
    time: '4:30 PM',
    title: 'Staging QA',
    detail: 'Final pass on responsive breakpoints and forms.',
    status: 'upcoming',
  },
]
</script>

<template>
  <div class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-14">
    <div class="mx-auto max-w-md">
      <p class="text-xs font-semibold tracking-[0.14em] text-studio-400 uppercase">
        Today
      </p>
      <h2 class="mt-1 font-display text-xl font-semibold tracking-tight text-studio-950">
        Project timeline
      </h2>

      <ol class="relative mt-8 space-y-0">
        <li
          v-for="(event, index) in events"
          :key="event.id"
          class="relative flex gap-4 pb-8 last:pb-0"
        >
          <div class="flex flex-col items-center">
            <span
              class="relative z-10 flex size-3 shrink-0 rounded-full ring-4 ring-white"
              :class="
                event.status === 'done'
                  ? 'bg-accent'
                  : event.status === 'active'
                    ? 'bg-accent ring-accent-muted'
                    : 'bg-studio-300'
              "
              aria-hidden="true"
            />
            <span
              v-if="index < events.length - 1"
              class="mt-1 w-px grow bg-studio-200"
              aria-hidden="true"
            />
          </div>

          <div class="min-w-0 flex-1 -mt-0.5">
            <p class="text-xs font-semibold tracking-wide text-studio-400">
              {{ event.time }}
            </p>
            <h3
              class="mt-0.5 font-display text-base font-semibold"
              :class="event.status === 'upcoming' ? 'text-studio-500' : 'text-studio-950'"
            >
              {{ event.title }}
            </h3>
            <p class="mt-1 text-sm leading-relaxed text-studio-500">
              {{ event.detail }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>
