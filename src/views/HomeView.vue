<script setup lang="ts">
import HomeHeroSection from '@/components/home/HomeHeroSection.vue'
import HomeStatsStrip from '@/components/home/HomeStatsStrip.vue'
import HomeCategoryBento from '@/components/home/HomeCategoryBento.vue'
import HomeWorkflow from '@/components/home/HomeWorkflow.vue'
import HomeMarquee from '@/components/home/HomeMarquee.vue'
</script>

<template>
  <div class="home-page mx-auto max-w-6xl pb-10">
    <HomeHeroSection />
    <HomeStatsStrip />
    <HomeCategoryBento />
    <HomeWorkflow />
    <HomeMarquee />
  </div>
</template>
