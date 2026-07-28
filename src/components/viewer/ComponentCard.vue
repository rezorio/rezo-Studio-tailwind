<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from 'vue'
import ViewerHeader from '@/components/viewer/ViewerHeader.vue'
import PreviewPanel from '@/components/viewer/PreviewPanel.vue'
import type { CodeLanguage, ViewerMode } from '@/types/component-viewer'

const CodePanel = defineAsyncComponent(() => import('@/components/viewer/CodePanel.vue'))

const props = withDefaults(
  defineProps<{
    id?: string
    title: string
    description?: string
    code: string
    language?: CodeLanguage
    defaultMode?: ViewerMode
  }>(),
  {
    language: 'vue',
    defaultMode: 'preview',
  },
)

const mode = ref<ViewerMode>(props.defaultMode)
const codeRequested = ref(props.defaultMode === 'code')

watch(mode, (next) => {
  if (next === 'code') {
    codeRequested.value = true
  }
})
</script>

<template>
  <article
    :id="id"
    class="scroll-mt-24 overflow-hidden rounded-xl border border-studio-200/90 bg-surface shadow-[0_1px_2px_rgba(20,31,28,0.04)]"
  >
    <ViewerHeader
      :title="title"
      :description="description"
      :code="code"
      :mode="mode"
      @update:mode="mode = $event"
    />

    <PreviewPanel v-show="mode === 'preview'">
      <slot />
    </PreviewPanel>

    <CodePanel
      v-if="codeRequested"
      v-show="mode === 'code'"
      :code="code"
      :language="language"
    />
  </article>
</template>
