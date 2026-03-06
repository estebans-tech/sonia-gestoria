<script lang="ts">
  import { whatsappUrl } from '$lib/utils/links'
  import type { HeroSectionProps } from '$lib/types/sections'
  import PrimaryCta from '$lib/components/ui/PrimaryCta.svelte'

  let {
    title,
    subtitle,
    whatsappDigits,
    whatsappPrefill = '',
    locationLine = '',
  }: HeroSectionProps = $props()

  const wa = $derived(whatsappUrl(whatsappDigits, whatsappPrefill))
</script>
<section class="pt-14 pb-14">
  <div class="mx-auto w-full max-w-[28rem] px-5">
    <header class="text-center">
      <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight text-white">{title}</h1>
      <p class="mt-3 text-base text-white/80">{subtitle}</p>

      <div class="mt-6">
        <PrimaryCta href={wa} label="Consultar por WhatsApp" />

        {#if locationLine}
          <p class="mt-2 text-sm text-white/70">{locationLine}</p>
        {/if}
      </div>
    </header>
  </div>
</section>
