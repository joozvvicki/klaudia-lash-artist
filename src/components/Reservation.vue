<template>
  <div
    class="min-h-screen bg-[#FCFAF8] pt-32 pb-20 px-6 font-sans selection:bg-[#C5A059]/20"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 space-y-4">
        <span
          class="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold"
          >Rezerwacja Online</span
        >
        <h1 class="text-5xl font-serif text-[#1A1A1A]">Zarezerwuj wizytę</h1>
        <p class="text-[#1A1A1A]/50 text-sm max-w-md mx-auto">
          Wybierz dogodny termin i usługę za pośrednictwem systemu Booksy.
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div
          class="bg-white p-12 md:p-20 shadow-2xl rounded-sm border border-[#1A1A1A]/5 relative overflow-hidden text-center space-y-10"
        >
          <!-- Subtle decorative elements -->
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 rounded-full blur-3xl -mr-32 -mt-32"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-48 h-48 bg-[#C5A059]/5 rounded-full blur-3xl -ml-24 -mb-24"
          ></div>

          <div class="relative z-10 space-y-6">
            <span
              class="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-bold"
              >System Rezerwacji</span
            >
            <h2
              class="text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight"
            >
              Twój czas jest cennym <br /><span
                class="italic text-[#C5A059] font-light"
                >symbolem piękna.</span
              >
            </h2>
            <p
              class="text-[#1A1A1A]/50 text-sm max-w-md mx-auto leading-relaxed"
            >
              Zarezerwuj wizytę w kilka sekund przez system Booksy. Wybierz
              usługę i dogodny termin, a my zajmiemy się resztą.
            </p>
          </div>

          <div class="relative z-10 pt-6">
            <a
              :href="booksyUrl"
              target="_blank"
              class="inline-block bg-[#1A1A1A] text-white px-12 py-6 hover:bg-[#C5A059] hover:-translate-y-1 transition-all duration-500 text-[11px] uppercase tracking-[0.4em] font-bold shadow-2xl shadow-[#1A1A1A]/20"
            >
              Zarezerwuj przez Booksy
            </a>
            <p
              class="mt-6 text-[10px] text-[#1A1A1A]/30 uppercase tracking-[0.2em]"
            >
              Zostaniesz przekierowana do zewnętrznego systemu
            </p>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <router-link
          to="/"
          class="text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A]/40 hover:text-[#C5A059] transition-colors"
        >
          ← Powrót do strony głównej
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const booksyUrl = ref(
  "https://booksy.com/pl-pl/288755_klaudia-lash-artist_brwi-i-rzesy_4754_pilawa#ba_s=sr_1",
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
