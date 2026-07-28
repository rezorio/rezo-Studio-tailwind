<script setup lang="ts">
/**
 * Startup launch page — float nav, waitlist hero, feature list, testimonial carousel,
 * FAQ accordion, beacon CTA, and orbit footer. Composed entirely from catalog sections.
 */
import TemplatePageShell from '@/components/library/template/TemplatePageShell.vue'
import NavLandingFloat from '@/components/library/navigation/NavLandingFloat.vue'
import HeroWaitlistPulse from '@/components/library/hero/HeroWaitlistPulse.vue'
import ListFeatureBullets from '@/components/library/list/ListFeatureBullets.vue'
import CarouselTestimonial from '@/components/library/carousel/CarouselTestimonial.vue'
import ListAccordionSpring from '@/components/library/list/ListAccordionSpring.vue'
import CtaBeaconPulse from '@/components/library/cta/CtaBeaconPulse.vue'
import FooterOrbitSocial from '@/components/library/footers/FooterOrbitSocial.vue'
</script>

<template>
  <TemplatePageShell>
    <NavLandingFloat embedded />
    <HeroWaitlistPulse />
    <ListFeatureBullets />
    <CarouselTestimonial />
    <ListAccordionSpring />
    <CtaBeaconPulse />
    <FooterOrbitSocial />
  </TemplatePageShell>
</template>
