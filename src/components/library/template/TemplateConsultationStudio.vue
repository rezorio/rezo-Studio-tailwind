<script setup lang="ts">
/**
 * Consultation studio page — services nav, editorial hero, portfolio + service cards,
 * drift contact form, horizon CTA, and ledger footer. Mix-and-match catalog patterns.
 */
import TemplatePageShell from '@/components/library/template/TemplatePageShell.vue'
import NavServices from '@/components/library/navigation/NavServices.vue'
import HeroEditorialStudio from '@/components/library/hero/HeroEditorialStudio.vue'
import CardPortfolio from '@/components/library/cards/CardPortfolio.vue'
import CardService from '@/components/library/cards/CardService.vue'
import FormDriftContact from '@/components/library/forms/FormDriftContact.vue'
import CtaHorizonGlow from '@/components/library/cta/CtaHorizonGlow.vue'
import FooterLedgerIndex from '@/components/library/footers/FooterLedgerIndex.vue'
</script>

<template>
  <TemplatePageShell>
    <NavServices embedded />
    <HeroEditorialStudio />
    <CardPortfolio />
    <CardService />
    <FormDriftContact />
    <CtaHorizonGlow />
    <FooterLedgerIndex />
  </TemplatePageShell>
</template>
