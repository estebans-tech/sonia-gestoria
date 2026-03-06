<script lang="ts">
  export let items: string[]
</script>

<section class="mx-auto w-full max-w-[32rem] px-5 mb-6">
  <div
    class="rounded-[1rem] border border-white/10
           bg-black/20 p-6 backdrop-blur-md"
  >
    <ul class="space-y-4">
      {#each items as item}
        <li class="flex items-center gap-3 text-md text-white/80 font-semibold">
          <span class="text-rose-300">✓</span>
          {item}
        </li>
      {/each}
    </ul>
  </div>
</section>
