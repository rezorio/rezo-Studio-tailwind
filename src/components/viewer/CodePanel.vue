<script setup lang="ts">
import { useCodeHighlight } from '@/composables/useCodeHighlight'
import type { CodeLanguage } from '@/types/component-viewer'

const props = withDefaults(
  defineProps<{
    code: string
    language?: CodeLanguage
  }>(),
  {
    language: 'vue',
  },
)

const { highlightedHtml } = useCodeHighlight(
  () => props.code,
  () => props.language,
)
</script>

<template>
  <div class="code-panel overflow-x-auto bg-studio-950">
    <pre
      class="m-0 p-5 font-mono text-[13px] leading-relaxed text-studio-100"
    ><code class="hljs language-vue" v-html="highlightedHtml" /></pre>
  </div>
</template>
