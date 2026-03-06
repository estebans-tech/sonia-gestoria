<script lang="ts">
  import ChecklistCard from '$lib/components/ui/ChecklistCard.svelte'
  export let items: string[]
</script>
<section class="mx-auto w-full max-w-[28rem] px-5 mb-6">
  <ChecklistCard
    title="TRÁMITES"
    items={items}
  />
</section>

