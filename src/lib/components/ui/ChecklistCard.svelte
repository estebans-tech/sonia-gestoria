<script lang="ts">
  import type { ChecklistCardProps } from '$lib/types/ui';

  let { title, subtitle, items, class: className = '' }: ChecklistCardProps = $props();
</script>

<section
  class={[
    'rounded-[1rem] border border-white/10 bg-black/25 p-6',
    'backdrop-blur-md shadow-sm',
    'supports-[backdrop-filter]:bg-black/20',
    className
  ].join(' ')}
>
  {#if title || subtitle}
    <header class="text-center">
      {#if title}
        <h2 class="text-2xl font-semibold uppercase tracking-wide text-white/75">{title}</h2>
      {/if}
      {#if subtitle}
        <p class="mt-1 text-sm text-white/60">{subtitle}</p>
      {/if}
    </header>
  {/if}

    <ul class={title ? 'mt-5 space-y-4' : 'space-y-4'}>
      {#each items as item}
        <li class="flex gap-4 text-md font-medium text-white/90">
          <span
            class="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-rose-200/25 bg-rose-200/10"
            aria-hidden="true"
          >
            <!-- check -->
            <svg viewBox="0 0 20 20" class="h-4 w-4" fill="none">
              <path
                d="M5 10.5l3 3L15 6.5"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-rose-100/90"
              />
            </svg>
          </span>
          <span class="leading-snug">{item}</span>
        </li>
      {/each}
    </ul>
</section>
