<script lang="ts">
  import type { SeoMeta } from '$lib/types/seo'

  let {
    title,
    description,
    canonical,
    robots = 'index,follow',
    ogTitle,
    ogDescription,
    ogImage,
    ogType = 'website'
  }: SeoMeta = $props()
</script>

<svelte:head>
  <title>{title}</title>

  <meta name="description" content={description} />
  <meta name="robots" content={robots} />

  {#if canonical}
    <link rel="canonical" href={canonical} />
  {/if}

  <!-- Open Graph -->
  <meta property="og:title" content={ogTitle ?? title} />
  <meta property="og:description" content={ogDescription ?? description} />
  <meta property="og:type" content={ogType} />

  {#if canonical}
    <meta property="og:url" content={canonical} />
  {/if}

  {#if ogImage}
    <meta property="og:image" content={ogImage} />
  {/if}
</svelte:head>
