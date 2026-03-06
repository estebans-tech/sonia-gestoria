<script lang="ts">
  import SeoHead from '$lib/components/seo/SeoHead.svelte'
  import { homeSeo } from '$lib/content/seo'
  import Hero from '$lib/components/sections/Hero.svelte'
  import ChecklistCard from '$lib/components/ui/ChecklistCard.svelte'
  import ServicesCard from '$lib/components/sections/ServicesCard.svelte';
  import ProcessSteps from '$lib/components/sections/ProcessSteps.svelte';
  import ReassuranceCard from '$lib/components/sections/ReassuranceCard.svelte';
  import Faq from '$lib/components/sections/Faq.svelte';
  import Footer from '$lib/components/sections/Footer.svelte'
  import { site } from '$lib/content/site'
  import heroBg from '$lib/assets/hero.jpg?enhanced&w=2400;1600;1200;900;600;420&q=70'
</script>

<SeoHead {...homeSeo} />

<main class="relative min-h-dvh">
  <div class="fixed inset-0 -z-10 bg-black">
    <enhanced:img
      src={heroBg}
      alt="Gestoría / trámite"
      aria-hidden="true"
      class="h-full w-full object-cover object-center"
      sizes="100vw"
      fetchpriority="high"
      decoding="async"
      loading="eager"
    />
    <div class="absolute inset-0 bg-black/15"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
  </div>

  <Hero {...site.hero} />
  
  {#if site.services.length}
    <ServicesCard items={site.services} />
 {/if}

  <ProcessSteps {...site.process} />

  {#if site.reassurance.length}
    <ReassuranceCard items="{site.reassurance}" />
  {/if}

  <Faq {...site.faq} />

  <Footer
    personName={site.personName}
    locationLine={site.hero.locationLine}
    instagramHandle={site.instagramHandle}
    whatsappDigits={site.hero.whatsappDigits}
    whatsappPrefill={site.hero.whatsappPrefill}
  />
</main>

