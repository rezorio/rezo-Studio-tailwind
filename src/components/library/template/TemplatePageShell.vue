<script setup lang="ts">
/**
 * Stacks full-page sections inside the catalog preview canvas.
 * Neutralizes per-component breakout margins and hides footer preview stubs.
 */
</script>

<template>
  <div
    class="template-page relative -mx-6 -my-6 overflow-x-clip sm:-mx-8 sm:-my-8 [&>*]:mx-0 [&>*]:my-0 [&_footer>div[aria-hidden=true]:first-child]:hidden"
  >
    <slot />
  </div>
</template>
