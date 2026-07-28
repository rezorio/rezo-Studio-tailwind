<script setup lang="ts">
import { computed } from 'vue'
import { useClipboard } from '@/composables/useClipboard'

const props = defineProps<{
  code: string
}>()

const { copied, error, copy } = useClipboard()

const label = computed(() => {
  if (error.value) return 'Copy failed'
  if (copied.value) return 'Copied!'
  return 'Copy Code'
})

async function handleCopy() {
  await copy(props.code)
}
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors"
    :class="
      copied
        ? 'border-accent/30 bg-accent-muted text-accent'
        : 'border-studio-200 bg-surface text-studio-700 hover:border-studio-300 hover:bg-studio-50 hover:text-studio-950'
    "
    :aria-label="label"
    @click="handleCopy"
  >
    <svg
      v-if="copied"
      class="size-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg
      v-else
      class="size-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
    {{ label }}
  </button>
</template>
