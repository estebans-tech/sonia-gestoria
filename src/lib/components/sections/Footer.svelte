<script lang="ts">
  import type { FooterSectionProps } from '$lib/types/site'
  import { whatsappUrl } from '$lib/utils/links'

  let {
    personName,
    locationLine,
    instagramHandle,
    whatsappDigits,
    whatsappPrefill
  }: FooterSectionProps = $props()

  const wa =
    whatsappDigits
      ? whatsappUrl(whatsappDigits, whatsappPrefill)
      : null
</script>

<footer class="mx-auto w-full max-w-[28rem] px-5 pb-10">
  <div
    class="rounded-[2rem] border border-white/10 bg-black/25 p-6 text-center
           backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-black/20"
  >
    {#if personName}
      <div class="text-lg font-semibold text-white/90">
        {personName}
      </div>
    {/if}

    {#if locationLine}
      <div class="mt-1 text-sm text-white/65">
        {locationLine}
      </div>
    {/if}

    <div class="mt-5 flex items-center justify-center gap-6 text-sm">
      {#if wa}
        <a
          href={wa}
          target="_blank"
          rel="noopener"
          class="text-rose-100/90 hover:text-white transition"
        >
          WhatsApp
        </a>
      {/if}

      {#if instagramHandle}
        <a
          href={`https://instagram.com/${instagramHandle.replace('@','')}`}
          target="_blank"
          rel="noopener"
          class="text-rose-100/90 hover:text-white transition"
        >
          Instagram
        </a>
      {/if}
    </div>

    <div class="mt-6 text-xs text-white/40">
      © {new Date().getFullYear()}
    </div>
  </div>
</footer>
