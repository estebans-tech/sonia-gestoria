<script lang="ts">
  import type { PrimaryCtaProps } from '$lib/types/ui'

  let {
    href,
    label = '',
    class: className = ''
  }: PrimaryCtaProps = $props()
</script>

<a
  href={href}
  rel="noopener"
  target="_blank"
  class={`group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden
         rounded-[1rem] border border-rose-200/35 bg-rose-200/10 px-4 py-3
         text-base font-semibold text-rose-50
         shadow-[0_12px_40px_rgba(0,0,0,0.45)]
         backdrop-blur-md
         transition active:scale-[0.99]
         hover:border-rose-200/45 hover:bg-rose-200/14
         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-100/70
         ${className}`}
>
  <span
    class="pointer-events-none absolute inset-0 opacity-80 transition group-hover:opacity-100
           bg-gradient-to-b from-white/20 via-white/8 to-transparent"
    aria-hidden="true"
  />

  <span class="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/30" aria-hidden="true"></span>

  <span class="relative">{label}</span>

  <svg
    viewBox="0 0 20 20"
    class="relative h-5 w-5 translate-x-0 opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-90"
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
</a>

