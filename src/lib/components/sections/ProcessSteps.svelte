<script lang="ts">
  import type { ProcessSectionProps } from '$lib/types/site'; // justera importväg efter din fil

  let { title = 'Así funciona', steps }: ProcessSectionProps = $props();
</script>

<section class="mx-auto w-full max-w-[28rem] px-5 mb-6">
  <div class="rounded-[1rem] border border-white/10 bg-black/25 p-6 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-black/20">
    <h2 class="text-sm font-semibold uppercase tracking-wide text-white/75">
      {title}
    </h2>

    <ol class="mt-5 space-y-5">
      {#each steps as step, i}
        <li class="flex gap-4">
          <div class="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-rose-200/35 bg-white/5 text-sm font-semibold text-rose-50/90">
            {i + 1}
          </div>

          <div>
            <div class="text-lg font-semibold text-white/90">{step.title}</div>
            <p class="mt-1 text-sm leading-relaxed text-white/65">{step.body}</p>
          </div>
        </li>
      {/each}
    </ol>
  </div>
</section>
