<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { getPlaygroundCategories } from '@/registry/playground'
import { usePageCanvas } from '@/composables/usePageCanvas'

const { addComponent } = usePageCanvas()
const categories = getPlaygroundCategories()
const openCategoryId = ref('')
const categoryRefs = ref<Record<string, HTMLElement | null>>({})

function setCategoryRef(id: string, el: unknown): void {
  categoryRefs.value[id] = el instanceof HTMLElement ? el : null
}

async function toggleCategory(id: string): Promise<void> {
  const next = openCategoryId.value === id ? '' : id
  openCategoryId.value = next
  if (!next) return
  await nextTick()
  categoryRefs.value[next]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
}

function onAdd(categoryId: string, componentId: string): void {
  addComponent(categoryId, componentId)
}
</script>

<template>
  <div class="flex h-full min-h-0 flex-col">
    <header class="shrink-0 border-b border-studio-200/80 px-4 py-3">
      <p class="text-[11px] font-semibold tracking-wider text-studio-400 uppercase">
        Sections
      </p>
      <p class="mt-1 text-xs leading-relaxed text-studio-500">
        Click a component to append it to the page.
      </p>
    </header>

    <div class="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-2">
      <div
        v-for="category in categories"
        :key="category.id"
        :ref="(el) => setCategoryRef(category.id, el)"
        class="mb-1"
      >
        <button
          type="button"
          class="flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-sm font-medium text-studio-800 transition hover:bg-studio-100"
          :aria-expanded="openCategoryId === category.id"
          @click="toggleCategory(category.id)"
        >
          <span>{{ category.name }}</span>
          <span class="flex items-center gap-2">
            <span
              class="rounded-md bg-studio-100 px-1.5 py-0.5 text-[10px] font-semibold text-studio-600"
            >
              {{ category.components.length }}
            </span>
            <svg
              class="size-3.5 text-studio-400 transition"
              :class="openCategoryId === category.id ? 'rotate-180' : ''"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>

        <ul
          v-if="openCategoryId === category.id"
          class="m-0 mb-2 list-none space-y-0.5 p-0 pl-1"
        >
          <li v-for="item in category.components" :key="item.id">
            <button
              type="button"
              class="group flex w-full items-start gap-2 rounded-lg px-2.5 py-2 text-left transition hover:bg-accent-muted"
              :title="item.description"
              @click="onAdd(category.id, item.id)"
            >
              <span
                class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-studio-200 bg-white text-studio-400 transition group-hover:border-accent/40 group-hover:text-accent"
                aria-hidden="true"
              >
                <svg class="size-3" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 2.5v7M2.5 6h7"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              <span class="min-w-0">
                <span class="block text-sm font-medium text-studio-900 group-hover:text-accent">
                  {{ item.name }}
                </span>
                <span class="mt-0.5 block line-clamp-2 text-[11px] leading-snug text-studio-500 sm:truncate sm:leading-normal">
                  {{ item.description }}
                </span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
