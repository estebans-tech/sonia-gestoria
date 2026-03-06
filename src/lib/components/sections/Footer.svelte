<script lang="ts">
  import PrimaryCta from '$lib/components/ui/PrimaryCta.svelte'
  import type { FooterSectionProps } from '$lib/types/site'
  import { whatsappUrl } from '$lib/utils/links'

  let {
    personName,
    locationLine,
    instagramHandle,
    whatsappDigits,
    whatsappPrefill
  }: FooterSectionProps = $props()

  const wa = $derived(whatsappUrl(whatsappDigits, whatsappPrefill))
  const instaHandle = $derived(instagramHandle.replace('@',''))
</script>

<footer class="mx-auto my-6 w-full max-w-[32rem] px-5">
  <div
    class="rounded-[1rem] border border-white/10 bg-black/25 p-6 text-center
           backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-black/20"
  >
    {#if personName}
      <div class="text-2xl font-semibold text-white/90">
        {personName}
      </div>
    {/if}

    {#if locationLine}
      <div class="mt-1 text-sm text-white/65">
        {locationLine}
      </div>
    {/if}

    <p class="mt-5 text-sm text-white/70">
      ¿Tenés dudas? Escribime y te respondo rápido.
    </p>

    {#if wa}
      <PrimaryCta href={wa} label="Consultar por WhatsApp" class="my-6" />
    {/if}

    {#if instagramHandle}
      <a
        href={`https://instagram.com/${instaHandle}`}
        target="_blank"
        rel="noopener"
        class="mt-6 inline-block text-sm text-white/40 hover:text-white transition"
      >
      {instagramHandle}
      </a>
    {/if}

    <div class="mt-1 text-xs text-white/40">
      © {new Date().getFullYear()}
    </div>
  </div>
</footer>
