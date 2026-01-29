<script lang="ts">
  const heroImage =
    'https://images.unsplash.com/photo-1686771416282-3888ddaf249b?auto=format&fit=crop&w=2400&q=80'

  const services = [
    'Transferencias',
    'Patetamiento 0KM',
    'Venta de Formularios',
    'Verificaciones',
    'Trámites Impositivos'
  ]
</script>

<main class="relative min-h-dvh overflow-hidden bg-[#070b14]">
  <!-- Background image -->
  <div class="absolute inset-0">
    <img class="h-full w-full object-cover" src={heroImage} alt="Gestoría / trámite" />

    <!-- Darkening + brand tint -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/10 via-[#070b14]/55 to-[#070b14]"
    ></div>

    <!-- Soft rose vignette (subtle “Sonia” vibe) -->
    <div
      class="absolute inset-0 bg-[radial-gradient(1000px_circle_at_25%_15%,rgba(244,114,182,0.14),transparent_55%)]"
    ></div>
  </div>

  <!-- Content layer -->
  <div class="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col px-4 pb-6 pt-10">
    <!-- Top row -->
    <div class="flex items-start justify-between gap-4">
      <!-- Badge -->
      <div
        class="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#0b1530]/35 px-3 py-2 backdrop-blur-2xl"
      >
        <div
          class="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-extrabold tracking-widest text-white"
        >
          SF
        </div>
        <div class="leading-tight">
          <div class="text-xs font-semibold text-white/90">SONIA FERNÁNDEZ</div>
          <div class="text-[11px] text-white/65">Gestoría del automotor</div>
        </div>
      </div>

      <!-- Action rail (hidden on very small screens if you want) -->
      <div class="flex flex-col gap-2">
        <button
          class="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/20 text-white/90 backdrop-blur active:scale-[0.98]"
          aria-label="Like"
        >
          ♡
        </button>
        <button
          class="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/20 text-white/90 backdrop-blur active:scale-[0.98]"
          aria-label="Comment"
        >
          💬
        </button>
        <button
          class="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/20 text-white/90 backdrop-blur active:scale-[0.98]"
          aria-label="Share"
        >
          ↗
        </button>
      </div>
    </div>

    <div class="flex-1"></div>

    <!-- Floating card -->
    <section class="w-full">
      <div class="mx-auto w-full max-w-xl sm:ml-auto">
        <div
          class="relative rounded-3xl border border-white/10 bg-[#0b1530]/45 p-6 shadow-[0_22px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
        >
          <!-- Inner sheen -->
          <div
            class="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent"
          ></div>

          <div class="relative">
            <!-- Small kicker -->
            <div class="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/75">
              <span class="h-1.5 w-1.5 rounded-full bg-rose-300/80"></span>
              Atención personalizada • Rápido y seguro
            </div>

            <h1 class="text-3xl font-extrabold uppercase leading-[1.05] tracking-[0.06em] text-white sm:text-4xl">
              GESTORÍA DEL<br />
              AUTOMOTOR
            </h1>

            <!-- Rose underline -->
            <div class="mt-3 h-1 w-56 rounded-full bg-rose-300/60"></div>

            <ul class="mt-6 grid gap-3">
              {#each services as item}
                <li class="flex items-start gap-3 text-[16px] text-white/85">
                  <span
                    class="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-md border border-rose-200/25 bg-rose-200/10 text-[12px] font-extrabold text-rose-200"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span class="leading-snug">{item}</span>
                </li>
              {/each}
            </ul>

            <div class="mt-6 border-t border-white/10 pt-4 text-sm text-white/70">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <span class="opacity-90">@gestoriadelautomotorsonia</span>
                <span class="whitespace-nowrap opacity-90">📞 11 3467 9726</span>
              </div>

              <div class="mt-4 flex gap-3">
                <a
                  class="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 font-semibold text-white/90 ring-1 ring-white/10 hover:bg-white/15"
                  href="#"
                >
                  Consultar
                </a>
                <a
                  class="inline-flex items-center justify-center rounded-xl bg-rose-300/10 px-4 py-2 font-semibold text-rose-200 ring-1 ring-rose-200/20 hover:bg-rose-300/15"
                  href="#"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="h-[max(8px,env(safe-area-inset-bottom))]"></div>
      </div>
    </section>
  </div>
</main>
