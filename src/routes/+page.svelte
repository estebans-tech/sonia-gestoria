<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte'
  import ChecklistCard from '$lib/components/ui/ChecklistCard.svelte'
  import ProcessSteps from '$lib/components/sections/ProcessSteps.svelte';
  import Faq from '$lib/components/sections/Faq.svelte';
  import Footer from '$lib/components/sections/Footer.svelte'
  import { site } from '$lib/content/site'
  import heroBg from '$lib/assets/hero.jpg?enhanced&w=2400;1600;1200;900;600;420&q=70'
</script>

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
    <div class="absolute inset-0 bg-black/45"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
  </div>

  <Hero {...site.hero} />
  
  {#if site.services.length}
    <section class="mx-auto w-full max-w-[28rem] px-5">
      <ChecklistCard
        title="TRÁMITES"
        items={site.services}
        class="mb-6"
      />
    </section>
  {/if}
<!-- 3: process -->
<ProcessSteps {...site.process} />
  {#if site.reassurance.length}
    <section class="mx-auto w-full max-w-[28rem] px-5">
      <ChecklistCard
        items={site.reassurance}
        class="mb-6"
      />
    </section>
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

