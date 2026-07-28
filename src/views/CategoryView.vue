<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getCategoryById, loadCategoryComponents } from '@/registry'
import type { LoadedComponentItem } from '@/registry/types'
import ComponentCard from '@/components/viewer/ComponentCard.vue'

const route = useRoute()

const categoryId = computed(() =>
  typeof route.params.id === 'string' ? route.params.id : '',
)

const category = computed(() => getCategoryById(categoryId.value))

const loadedComponents = ref<LoadedComponentItem[]>([])
const isLoading = ref(false)
const loadError = ref<string | null>(null)

async function scrollToComponentHash(): Promise<void> {
  const hash = route.hash.replace(/^#/, '')
  if (!hash) return
  await nextTick()
  document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

watch(
  categoryId,
  async (id) => {
    loadedComponents.value = []
    loadError.value = null

    if (!id || !getCategoryById(id)) return

    isLoading.value = true
    try {
      loadedComponents.value = await loadCategoryComponents(id)
      await scrollToComponentHash()
    } catch (error) {
      loadError.value =
        error instanceof Error ? error.message : 'Failed to load components.'
    } finally {
      isLoading.value = false
    }
  },
  { immediate: true },
)

watch(
  () => route.hash,
  () => {
    void scrollToComponentHash()
  },
)
</script>

<template>
  <div class="mx-auto max-w-5xl">
    <template v-if="category">
      <nav class="mb-6 text-sm text-studio-500" aria-label="Breadcrumb">
        <RouterLink to="/" class="text-studio-500 no-underline hover:text-accent">Home</RouterLink>
        <span class="mx-2 text-studio-300" aria-hidden="true">/</span>
        <span class="text-studio-800">{{ category.name }}</span>
      </nav>

      <header class="mb-10">
        <h2 class="font-display text-3xl font-semibold tracking-tight text-studio-950 sm:text-4xl">
          {{ category.name }}
        </h2>
        <p class="mt-3 max-w-2xl text-base leading-relaxed text-studio-600">
          {{ category.description }}
        </p>
      </header>

      <div
        v-if="isLoading"
        class="rounded-xl border border-studio-200/90 bg-surface/50 px-6 py-16 text-center"
        role="status"
        aria-live="polite"
      >
        <p class="text-sm text-studio-600">Loading components…</p>
      </div>

      <div
        v-else-if="loadError"
        class="rounded-xl border border-dashed border-studio-300 bg-surface/50 px-6 py-16 text-center"
        role="alert"
      >
        <p class="text-sm text-studio-600">{{ loadError }}</p>
      </div>

      <div v-else-if="loadedComponents.length > 0" class="space-y-8">
        <ComponentCard
          v-for="item in loadedComponents"
          :key="item.id"
          :id="item.id"
          :title="item.name"
          :description="item.description"
          :code="item.code"
          language="vue"
        >
          <component :is="item.component" />
        </ComponentCard>
      </div>

      <section
        v-else
        class="rounded-xl border border-dashed border-studio-300 bg-surface/50 px-6 py-16 text-center"
        aria-label="Component previews"
      >
        <p class="font-display text-sm font-semibold tracking-wide text-studio-500 uppercase">
          No components yet
        </p>
        <p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-studio-600">
          Add a Vue file under
          <code class="rounded bg-studio-100 px-1.5 py-0.5 text-studio-800"
            >src/components/library/{{ category.id }}/</code
          >
          and register it in
          <code class="rounded bg-studio-100 px-1.5 py-0.5 text-studio-800">src/registry/index.ts</code>.
        </p>
      </section>
    </template>

    <template v-else>
      <header class="mb-8">
        <h2 class="font-display text-3xl font-semibold tracking-tight text-studio-950">
          Category not found
        </h2>
        <p class="mt-3 text-base text-studio-600">
          No category matches
          <code class="rounded bg-studio-100 px-1.5 py-0.5 text-sm text-studio-800">{{
            categoryId
          }}</code>.
        </p>
      </header>
      <RouterLink
        to="/"
        class="inline-flex rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white no-underline transition hover:bg-accent-hover"
      >
        Back to home
      </RouterLink>
    </template>
  </div>
</template>
