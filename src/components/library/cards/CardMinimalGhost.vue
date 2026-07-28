<script setup lang="ts">
/**
 * Ghost product card: borderless until hover, price inline, one quiet tag.
 */
const item = {
  name: 'Flow Engine',
  price: '$29',
  period: 'mo',
  tag: 'Automation',
}
</script>

<template>
  <div class="-mx-6 -my-6 bg-white px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-8 sm:py-16">
    <article
      class="group mx-auto max-w-xs rounded-xl px-6 py-8 text-center transition duration-300 hover:bg-studio-50/80 hover:shadow-[inset_0_0_0_1px_rgba(200,217,211,0.9)]"
    >
      <p class="text-[11px] font-medium tracking-[0.18em] text-studio-400 uppercase">
        {{ item.tag }}
      </p>

      <h3
        class="mt-4 font-display text-xl font-semibold tracking-tight text-studio-950 transition group-hover:text-accent"
      >
        {{ item.name }}
      </h3>

      <p class="mt-3 font-display text-3xl font-semibold tabular-nums tracking-tight text-studio-950">
        {{ item.price }}
        <span class="text-base font-medium text-studio-400">/{{ item.period }}</span>
      </p>

      <a
        href="#"
        class="mt-6 inline-block text-sm font-medium text-studio-500 no-underline opacity-0 transition duration-300 group-hover:opacity-100 hover:text-accent"
        @click.prevent
      >
        View details →
      </a>
    </article>
  </div>
</template>
