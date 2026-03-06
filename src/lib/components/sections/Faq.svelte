<script lang="ts">
  import type { FaqSectionProps } from '$lib/types/site';

  let { title = 'Preguntas frecuentes', items }: FaqSectionProps = $props();
</script>

<section class="mx-auto w-full max-w-[28rem] px-5">
  <div class="rounded-[1rem] border border-white/10 bg-black/25 p-6 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-black/20">
    <h2 class="text-sm font-semibold uppercase tracking-wide text-white/75">{title}</h2>

    <div class="mt-5 divide-y divide-white/10">
      {#each items as item, i (item.q)}
        <details class="group py-3">
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4
                   text-base font-semibold text-white/90
                   marker:content-['']"
          >
            <span>{item.q}</span>

            <svg
              viewBox="0 0 20 20"
              class="faq-chevron h-5 w-5 shrink-0 text-white/70 transition"
              aria-hidden="true"
            >
              <path
                d="M7 4l6 6-6 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </summary>

          <div class="mt-2 pr-6 text-sm leading-relaxed text-white/65">
            {item.a}
          </div>
        </details>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Rotera pilen när details är open (utan att kräva tailwind group-open) */
  details[open] .faq-chevron {
    transform: rotate(90deg);
  }
</style>
