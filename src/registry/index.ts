import type { Category, ComponentItem, LoadedComponentItem } from '@/registry/types'
import { loadLibraryComponent } from '@/registry/loadComponent'

/**
 * Central registry — single source of truth for catalog categories and variants.
 *
 * Metadata (id / name / description) is eager for shell + search.
 * Preview SFC + `?raw` source load on demand via `load()` so the initial
 * bundle stays small.
 *
 * When adding a component: drop the .vue under library/<category>/, then
 * register metadata + a `load()` that imports both the SFC and `?raw`.
 */
export const categories: Category[] = [
  {
    id: 'template',
    name: 'Templates',
    description:
      'Full one-page layouts composed from catalog sections — preview how patterns work together.',
    components: [
      {
        id: 'template-agency-landing',
        name: 'Agency Landing',
        description:
          'Services nav, centered hero, offerings grid, horizon CTA, and glow footer — agency site flow.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/template/TemplateAgencyLanding.vue'),
            () => import('@/components/library/template/TemplateAgencyLanding.vue?raw'),
          ),
      },
      {
        id: 'template-product-saas',
        name: 'Product SaaS',
        description:
          'Commerce nav, product hero, feature grid, split-fold CTA, and slim rail footer — SaaS landing.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/template/TemplateProductSaaS.vue'),
            () => import('@/components/library/template/TemplateProductSaaS.vue?raw'),
          ),
      },
      {
        id: 'template-portfolio-showcase',
        name: 'Portfolio Showcase',
        description:
          'Minimal nav, dark hero, project grid, open-letter contact, and ledger footer — creative portfolio.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/template/TemplatePortfolioShowcase.vue'),
            () => import('@/components/library/template/TemplatePortfolioShowcase.vue?raw'),
          ),
      },
      {
        id: 'template-startup-launch',
        name: 'Startup Launch',
        description:
          'Float nav, waitlist hero, feature bullets, testimonial carousel, FAQ accordion, beacon CTA, and orbit footer.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/template/TemplateStartupLaunch.vue'),
            () => import('@/components/library/template/TemplateStartupLaunch.vue?raw'),
          ),
      },
      {
        id: 'template-consultation-studio',
        name: 'Consultation Studio',
        description:
          'Services nav, editorial hero, portfolio + service cards, drift contact, horizon CTA, and ledger footer.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/template/TemplateConsultationStudio.vue'),
            () => import('@/components/library/template/TemplateConsultationStudio.vue?raw'),
          ),
      },
    ],
  },
  {
    id: 'hero',
    name: 'Hero Sections',
    description: 'Full-width landing heroes with headlines, CTAs, and visual anchors.',
    components: [
      {
        id: 'hero-simple-centered',
        name: 'Simple Centered',
        description:
          'Centered headline, dual CTAs, and a dashboard preview placeholder beneath the fold.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/hero/HeroSimpleCentered.vue'),
            () => import('@/components/library/hero/HeroSimpleCentered.vue?raw'),
          ),
      },
      {
        id: 'hero-dark-badge',
        name: 'Dark Badge',
        description: 'Dark stage with an announcement badge, gradient headline, and feature grid.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/hero/HeroDarkBadge.vue'),
            () => import('@/components/library/hero/HeroDarkBadge.vue?raw'),
          ),
      },
      {
        id: 'hero-product-focus',
        name: 'Product Focus',
        description:
          'Copy and CTA beside an interactive 3D dashboard mockup with feature badges and social proof.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/hero/HeroProductFocus.vue'),
            () => import('@/components/library/hero/HeroProductFocus.vue?raw'),
          ),
      },
      {
        id: 'hero-editorial-studio',
        name: 'Editorial Studio',
        description:
          'Asymmetric manifesto hero for creative agencies — stacked portfolio frames and client roster.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/hero/HeroEditorialStudio.vue'),
            () => import('@/components/library/hero/HeroEditorialStudio.vue?raw'),
          ),
      },
      {
        id: 'hero-waitlist-pulse',
        name: 'Waitlist Pulse',
        description:
          'Pre-launch waitlist hero with inline email capture, avatar social proof, and perk chips.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/hero/HeroWaitlistPulse.vue'),
            () => import('@/components/library/hero/HeroWaitlistPulse.vue?raw'),
          ),
      },
    ],
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Headers, nav bars, and mobile menus for site chrome.',
    components: [
      {
        id: 'nav-products',
        name: 'Products Mega Nav',
        description:
          'Commerce header with hover mega-menu, product categories, and featured tiles.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/navigation/NavProducts.vue'),
            () => import('@/components/library/navigation/NavProducts.vue?raw'),
          ),
      },
      {
        id: 'nav-services',
        name: 'Services CTA Nav',
        description:
          'Agency header with services dropdown and a strong Book a call action.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/navigation/NavServices.vue'),
            () => import('@/components/library/navigation/NavServices.vue?raw'),
          ),
      },
      {
        id: 'nav-portfolio',
        name: 'Portfolio Minimal Nav',
        description:
          'Creative wordmark header with centered links and a quiet contact affordance.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/navigation/NavPortfolio.vue'),
            () => import('@/components/library/navigation/NavPortfolio.vue?raw'),
          ),
      },
      {
        id: 'nav-docs',
        name: 'Docs Search Nav',
        description:
          'Developer documentation header with search, version picker, and API-first links.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/navigation/NavDocs.vue'),
            () => import('@/components/library/navigation/NavDocs.vue?raw'),
          ),
      },
      {
        id: 'nav-app-shell',
        name: 'App Shell Nav',
        description:
          'Authenticated dashboard bar with workspace switcher, notifications, and user menu.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/navigation/NavAppShell.vue'),
            () => import('@/components/library/navigation/NavAppShell.vue?raw'),
          ),
      },
      {
        id: 'nav-landing-float',
        name: 'Landing Float Nav',
        description:
          'Marketing hero with announcement ribbon and a floating glass pill navigation.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/navigation/NavLandingFloat.vue'),
            () => import('@/components/library/navigation/NavLandingFloat.vue?raw'),
          ),
      },
    ],
  },
  {
    id: 'cards',
    name: 'Cards',
    description: 'Content cards for features, products, and listings.',
    components: [
      {
        id: 'card-product',
        name: 'Product Commerce',
        description:
          'Commerce card with dark metric stage, tier badge, KPI strip, and add-to-stack CTA.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/cards/CardProduct.vue'),
            () => import('@/components/library/cards/CardProduct.vue?raw'),
          ),
      },
      {
        id: 'card-service',
        name: 'Service Engagement',
        description:
          'Agency service card with numbered engagement, outcomes list, and Book a call CTA.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/cards/CardService.vue'),
            () => import('@/components/library/cards/CardService.vue?raw'),
          ),
      },
      {
        id: 'card-portfolio',
        name: 'Portfolio Editorial',
        description:
          'Editorial project card with full-bleed visual field, quiet meta, and understated link.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/cards/CardPortfolio.vue'),
            () => import('@/components/library/cards/CardPortfolio.vue?raw'),
          ),
      },
      {
        id: 'card-minimal-ghost',
        name: 'Minimal Ghost',
        description:
          'Borderless product card that reveals a hairline frame and link on hover.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/cards/CardMinimalGhost.vue'),
            () => import('@/components/library/cards/CardMinimalGhost.vue?raw'),
          ),
      },
      {
        id: 'card-minimal-index',
        name: 'Minimal Index',
        description:
          'Catalog-style service entry with faded index number and a single descriptor line.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/cards/CardMinimalIndex.vue'),
            () => import('@/components/library/cards/CardMinimalIndex.vue?raw'),
          ),
      },
      {
        id: 'card-minimal-signal',
        name: 'Minimal Signal',
        description:
          'Status card with live pulse dot and waveform representing system health and uptime.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/cards/CardMinimalSignal.vue'),
            () => import('@/components/library/cards/CardMinimalSignal.vue?raw'),
          ),
      },
    ],
  },
  {
    id: 'cta',
    name: 'CTA',
    description: 'Call-to-action blocks that drive conversion.',
    components: [
      {
        id: 'cta-horizon-glow',
        name: 'Horizon Glow',
        description:
          'Luminous horizon line anchors the primary action with echo typography and a quiet trust strip.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/cta/CtaHorizonGlow.vue'),
            () => import('@/components/library/cta/CtaHorizonGlow.vue?raw'),
          ),
      },
      {
        id: 'cta-beacon-pulse',
        name: 'Beacon Pulse',
        description:
          'Dark stage with concentric rings pulsing behind a single glowing action — lighthouse energy.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/cta/CtaBeaconPulse.vue'),
            () => import('@/components/library/cta/CtaBeaconPulse.vue?raw'),
          ),
      },
      {
        id: 'cta-split-fold',
        name: 'Split Fold',
        description:
          'Asymmetric two-panel layout with an angled seam, perk chips, and a tucked pricing action card.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/cta/CtaSplitFold.vue'),
            () => import('@/components/library/cta/CtaSplitFold.vue?raw'),
          ),
      },
    ],
  },
  {
    id: 'forms',
    name: 'Forms',
    description: 'Input groups, contact forms, and auth layouts.',
    components: [
      {
        id: 'form-drift-contact',
        name: 'Drift Contact',
        description:
          'Underline inputs with floating labels and an accent stripe — calm, editorial contact flow.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/forms/FormDriftContact.vue'),
            () => import('@/components/library/forms/FormDriftContact.vue?raw'),
          ),
      },
      {
        id: 'form-intent-chooser',
        name: 'Intent Chooser',
        description:
          'Three intent cards set context first; heading, placeholder, and fields adapt to the selection.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/forms/FormIntentChooser.vue'),
            () => import('@/components/library/forms/FormIntentChooser.vue?raw'),
          ),
      },
      {
        id: 'form-open-letter',
        name: 'Open Letter',
        description:
          'A note-style contact form — message first, signature fields below, with a folded-corner accent.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/forms/FormOpenLetter.vue'),
            () => import('@/components/library/forms/FormOpenLetter.vue?raw'),
          ),
      },
    ],
  },
  {
    id: 'footers',
    name: 'Footers',
    description: 'Site footers with links, branding, and legal.',
    components: [
      {
        id: 'footer-horizon-glow',
        name: 'Horizon Glow',
        description:
          'Luminous horizon line, echo brand texture, and a centered link row on a soft mesh gradient.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/footers/FooterHorizonGlow.vue'),
            () => import('@/components/library/footers/FooterHorizonGlow.vue?raw'),
          ),
      },
      {
        id: 'footer-ledger-index',
        name: 'Ledger Index',
        description:
          'Editorial numbered link columns with monospace indices and a crisp legal rail.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/footers/FooterLedgerIndex.vue'),
            () => import('@/components/library/footers/FooterLedgerIndex.vue?raw'),
          ),
      },
      {
        id: 'footer-orbit-social',
        name: 'Orbit Social',
        description:
          'Dark footer with slowly spinning orbital rings and social icons on the path.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/footers/FooterOrbitSocial.vue'),
            () => import('@/components/library/footers/FooterOrbitSocial.vue?raw'),
          ),
      },
      {
        id: 'footer-slim-rail',
        name: 'Slim Rail',
        description:
          'Ultra-thin single row — logo, a few inline links, and copyright with minimal padding.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/footers/FooterSlimRail.vue'),
            () => import('@/components/library/footers/FooterSlimRail.vue?raw'),
          ),
      },
      {
        id: 'footer-slim-dock',
        name: 'Slim Dock',
        description:
          'Compact floating pill dock with brand mark, two links, and a quiet tagline beneath.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/footers/FooterSlimDock.vue'),
            () => import('@/components/library/footers/FooterSlimDock.vue?raw'),
          ),
      },
    ],
  },
  {
    id: 'buttons',
    name: 'Buttons',
    description: 'Primary, ghost, segmented, and animated button patterns for actions and toggles.',
    components: [
      {
        id: 'button-solid-accent',
        name: 'Solid Accent',
        description:
          'High-contrast filled buttons — accent primary, dark neutral, and soft secondary.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/buttons/ButtonSolidAccent.vue'),
            () => import('@/components/library/buttons/ButtonSolidAccent.vue?raw'),
          ),
      },
      {
        id: 'button-ghost-outline',
        name: 'Ghost & Outline',
        description:
          'Low-emphasis actions with outline, ghost, and text-link variants plus size scale.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/buttons/ButtonGhostOutline.vue'),
            () => import('@/components/library/buttons/ButtonGhostOutline.vue?raw'),
          ),
      },
      {
        id: 'button-segmented',
        name: 'Segmented Control',
        description:
          'Mutually exclusive pill toggle for billing periods or filter modes.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/buttons/ButtonSegmented.vue'),
            () => import('@/components/library/buttons/ButtonSegmented.vue?raw'),
          ),
      },
      {
        id: 'button-minimal-flat',
        name: 'Minimal Flat',
        description:
          'Understated text actions with underline reveal and quiet hover states.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/buttons/ButtonMinimalFlat.vue'),
            () => import('@/components/library/buttons/ButtonMinimalFlat.vue?raw'),
          ),
      },
      {
        id: 'button-icon-circle',
        name: 'Icon Circles',
        description:
          'Compact round icon-only buttons for toolbars and floating controls.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/buttons/ButtonIconCircle.vue'),
            () => import('@/components/library/buttons/ButtonIconCircle.vue?raw'),
          ),
      },
      {
        id: 'button-soft-pill',
        name: 'Soft Pills',
        description:
          'Muted pill chips for filters, tags, and category pickers.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/buttons/ButtonSoftPill.vue'),
            () => import('@/components/library/buttons/ButtonSoftPill.vue?raw'),
          ),
      },
      {
        id: 'button-shimmer-sweep',
        name: 'Shimmer Sweep',
        description:
          'Glossy light streak glides across the button surface on hover.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/buttons/ButtonShimmerSweep.vue'),
            () => import('@/components/library/buttons/ButtonShimmerSweep.vue?raw'),
          ),
      },
      {
        id: 'button-gradient-glow',
        name: 'Gradient Glow',
        description:
          'Rotating gradient halo with a breathing pulse behind premium CTAs.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/buttons/ButtonGradientGlow.vue'),
            () => import('@/components/library/buttons/ButtonGradientGlow.vue?raw'),
          ),
      },
      {
        id: 'button-magnetic-lift',
        name: 'Magnetic Lift',
        description:
          'Buttons rise and cast a deeper shadow on hover for tactile depth.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/buttons/ButtonMagneticLift.vue'),
            () => import('@/components/library/buttons/ButtonMagneticLift.vue?raw'),
          ),
      },
      {
        id: 'button-pop-click',
        name: 'Pop on Click',
        description:
          'Spring bounce and ripple burst give instant tactile click feedback.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/buttons/ButtonPopClick.vue'),
            () => import('@/components/library/buttons/ButtonPopClick.vue?raw'),
          ),
      },
    ],
  },
  {
    id: 'carousel',
    name: 'Carousel',
    description: 'Sliders and scroll rails for features, metrics, and testimonials.',
    components: [
      {
        id: 'carousel-fade-slides',
        name: 'Slide Peek',
        description:
          'Horizontal track with peeking neighbor slides, scale fade, and arrow controls.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/carousel/CarouselFadeSlides.vue'),
            () => import('@/components/library/carousel/CarouselFadeSlides.vue?raw'),
          ),
      },
      {
        id: 'carousel-card-rail',
        name: 'Thumb Gallery',
        description:
          'Large preview stage with a selectable thumbnail strip and caption sync.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/carousel/CarouselCardRail.vue'),
            () => import('@/components/library/carousel/CarouselCardRail.vue?raw'),
          ),
      },
      {
        id: 'carousel-testimonial',
        name: 'Testimonial',
        description:
          'Quote carousel with prev/next controls and author attribution.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/carousel/CarouselTestimonial.vue'),
            () => import('@/components/library/carousel/CarouselTestimonial.vue?raw'),
          ),
      },
    ],
  },
  {
    id: 'calendar',
    name: 'Calendar',
    description: 'Date grids and week strips for scheduling UI.',
    components: [
      {
        id: 'calendar-month-grid',
        name: 'Month Grid',
        description:
          'Full month view with prev/next navigation, today marker, and selectable dates.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/calendar/CalendarMonthGrid.vue'),
            () => import('@/components/library/calendar/CalendarMonthGrid.vue?raw'),
          ),
      },
      {
        id: 'calendar-week-strip',
        name: 'Week Strip',
        description:
          'Horizontal seven-day picker with weekday labels and a selected highlight.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/calendar/CalendarWeekStrip.vue'),
            () => import('@/components/library/calendar/CalendarWeekStrip.vue?raw'),
          ),
      },
      {
        id: 'calendar-month-outline',
        name: 'Month Outline',
        description:
          'Table-style month grid with dark header, hairline cells, ring selection, and Monday start.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/calendar/CalendarMonthOutline.vue'),
            () => import('@/components/library/calendar/CalendarMonthOutline.vue?raw'),
          ),
      },
      {
        id: 'calendar-month-soft',
        name: 'Month Soft',
        description:
          'Airy gradient panel with floating date circles, soft shadows, and elevated selection.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/calendar/CalendarMonthSoft.vue'),
            () => import('@/components/library/calendar/CalendarMonthSoft.vue?raw'),
          ),
      },
    ],
  },
  {
    id: 'booking',
    name: 'Booking',
    description: 'Time slots, service selection, and confirmation flows for appointments.',
    components: [
      {
        id: 'booking-slot-picker',
        name: 'Slot Picker',
        description:
          'Date header with a grid of available time slots and a continue action.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/booking/BookingSlotPicker.vue'),
            () => import('@/components/library/booking/BookingSlotPicker.vue?raw'),
          ),
      },
      {
        id: 'booking-service-select',
        name: 'Service Select',
        description:
          'Radio-style session cards with duration, price, and short descriptors.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/booking/BookingServiceSelect.vue'),
            () => import('@/components/library/booking/BookingServiceSelect.vue?raw'),
          ),
      },
      {
        id: 'booking-confirm-panel',
        name: 'Confirm Panel',
        description:
          'Booking summary with host, location, guest details, and confirm CTA.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/booking/BookingConfirmPanel.vue'),
            () => import('@/components/library/booking/BookingConfirmPanel.vue?raw'),
          ),
      },
    ],
  },
  {
    id: 'list',
    name: 'Lists',
    description: 'Checklists, feature bullets, and timeline activity feeds.',
    components: [
      {
        id: 'list-task-checklist',
        name: 'Task Checklist',
        description:
          'Interactive checklist with progress bar and strikethrough completed items.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/list/ListTaskChecklist.vue'),
            () => import('@/components/library/list/ListTaskChecklist.vue?raw'),
          ),
      },
      {
        id: 'list-feature-bullets',
        name: 'Feature Bullets',
        description:
          'Icon-led benefit list with accent checkmarks and supporting copy.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/list/ListFeatureBullets.vue'),
            () => import('@/components/library/list/ListFeatureBullets.vue?raw'),
          ),
      },
      {
        id: 'list-timeline-events',
        name: 'Timeline Events',
        description:
          'Vertical activity timeline with status dots and timestamped entries.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/list/ListTimelineEvents.vue'),
            () => import('@/components/library/list/ListTimelineEvents.vue?raw'),
          ),
      },
      {
        id: 'list-notification-cascade',
        name: 'Notification Cascade',
        description:
          'Activity feed with staggered entrance, pulsing unread dots, and hover slide with accent rail.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/list/ListNotificationCascade.vue'),
            () => import('@/components/library/list/ListNotificationCascade.vue?raw'),
          ),
      },
      {
        id: 'list-accordion-spring',
        name: 'Accordion Spring',
        description:
          'Expandable FAQ list with spring chevron rotation, height reveal, and shimmer on open.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/list/ListAccordionSpring.vue'),
            () => import('@/components/library/list/ListAccordionSpring.vue?raw'),
          ),
      },
    ],
  },
  {
    id: 'modals',
    name: 'Modals',
    description:
      'Dialogs, slide-overs, morph expands, fold letters, orbit pickers, and hold-to-confirm seals.',
    components: [
      {
        id: 'modal-center-dialog',
        name: 'Center Dialog',
        description:
          'Centered modal with backdrop blur, form field, and primary/cancel actions.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/modals/ModalCenterDialog.vue'),
            () => import('@/components/library/modals/ModalCenterDialog.vue?raw'),
          ),
      },
      {
        id: 'modal-slide-panel',
        name: 'Slide Panel',
        description:
          'Right-aligned drawer for settings, detail views, and secondary flows.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/modals/ModalSlidePanel.vue'),
            () => import('@/components/library/modals/ModalSlidePanel.vue?raw'),
          ),
      },
      {
        id: 'modal-confirm-action',
        name: 'Confirm Action',
        description:
          'Destructive confirmation with warning icon and explicit cancel path.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/modals/ModalConfirmAction.vue'),
            () => import('@/components/library/modals/ModalConfirmAction.vue?raw'),
          ),
      },
      {
        id: 'modal-morph-expand',
        name: 'Morph Expand',
        description:
          'Trigger button expands into the dialog — shared geometry, not a fade-in card.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/modals/ModalMorphExpand.vue'),
            () => import('@/components/library/modals/ModalMorphExpand.vue?raw'),
          ),
      },
      {
        id: 'modal-fold-letter',
        name: 'Fold Letter',
        description:
          'A single envelope flap peels back to reveal the note — light motion, stable layout.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/modals/ModalFoldLetter.vue'),
            () => import('@/components/library/modals/ModalFoldLetter.vue?raw'),
          ),
      },
      {
        id: 'modal-orbit-picker',
        name: 'Orbit Picker',
        description:
          'Radial choice ring — options orbit a hub instead of stacking in a list.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/modals/ModalOrbitPicker.vue'),
            () => import('@/components/library/modals/ModalOrbitPicker.vue?raw'),
          ),
      },
      {
        id: 'modal-hold-seal',
        name: 'Hold Seal',
        description:
          'Hold-to-confirm with a liquid seal fill — intent measured in time, not taps.',
        load: () =>
          loadLibraryComponent(
            () => import('@/components/library/modals/ModalHoldSeal.vue'),
            () => import('@/components/library/modals/ModalHoldSeal.vue?raw'),
          ),
      },
    ],
  },
]

export type { Category, ComponentItem, LoadedComponentItem }

export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id)
}

export function getComponentById(
  categoryId: string,
  componentId: string,
): ComponentItem | undefined {
  return getCategoryById(categoryId)?.components.find((item) => item.id === componentId)
}

/** Resolve Preview + Code for every variant in a category (parallel). */
export async function loadCategoryComponents(
  categoryId: string,
): Promise<LoadedComponentItem[]> {
  const category = getCategoryById(categoryId)
  if (!category) return []

  return Promise.all(
    category.components.map(async (item) => {
      const loaded = await item.load()
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        component: loaded.component,
        code: loaded.code,
      }
    }),
  )
}
