<template>
  <div
    class="min-h-screen bg-[#FCFAF8] text-[#1A1A1A] font-sans selection:bg-[#F2BFC6]/30 selection:text-[#1A1A1A]"
  >
    <nav
      class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#1A1A1A]/5 transition-all duration-300"
    >
      <div
        class="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between"
      >
        <router-link to="/" class="flex items-center group cursor-pointer">
          <img
            src="/logo.png"
            alt="Klaudia Lash Artist Logo"
            class="h-12 w-auto logo-pink-filter transition-all duration-500"
          />
        </router-link>

        <div
          class="hidden lg:flex items-center space-x-12 text-[11px] uppercase tracking-[0.3em] font-medium"
        >
          <template v-for="link in navLinks" :key="link.name">
            <a
              v-if="link.href.startsWith('#')"
              :href="isHomePage ? link.href : '/' + link.href"
              @click="handleNavClick($event, link.href)"
              class="hover:text-[#F2BFC6] transition-colors duration-300 relative group"
            >
              {{ link.name }}
              <span
                class="absolute -bottom-1 left-0 w-0 h-px bg-[#F2BFC6] transition-all duration-500 group-hover:w-full"
              ></span>
            </a>
            <router-link
              v-else
              :to="link.href"
              class="hover:text-[#F2BFC6] transition-colors duration-300 relative group"
            >
              {{ link.name }}
              <span
                class="absolute -bottom-1 left-0 w-0 h-px bg-[#F2BFC6] transition-all duration-500 group-hover:w-full"
              ></span>
            </router-link>
          </template>
          <router-link
            to="/rezerwacja"
            class="bg-[#1A1A1A] text-white px-8 py-3 hover:bg-[#F2BFC6] transition-all duration-500 rounded-sm"
          >
            Rezerwacja
          </router-link>
        </div>

        <button class="lg:hidden text-2xl group">
          <span
            class="block w-6 h-px bg-[#1A1A1A] mb-1.5 transition-all group-hover:w-4"
          ></span>
          <span class="block w-6 h-px bg-[#1A1A1A] mb-1.5"></span>
          <span
            class="block w-6 h-px bg-[#1A1A1A] transition-all group-hover:w-4"
          ></span>
        </button>
      </div>
    </nav>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer
      id="kontakt"
      class="bg-[#111] text-white py-32 relative overflow-hidden"
    >
      <div
        class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F2BFC6]/5 rounded-full blur-[100px] pointer-events-none"
      ></div>

      <div
        class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10"
      >
        <div class="lg:col-span-2 space-y-10">
          <div class="flex flex-col items-start translate-x-[-15px]">
            <img
              src="/logo.png"
              alt="Klaudia Lash Artist Logo"
              class="h-20 w-auto logo-pink-filter transition-all duration-500"
            />
          </div>
          <p class="max-w-sm text-white/50 text-sm leading-relaxed font-light">
            Tworzymy piękno oparte na zaufaniu i profesjonalizmie. Zapraszam do
            świata, w którym Twoje spojrzenie jest priorytetem.
          </p>
        </div>

        <div class="space-y-8">
          <h4
            class="text-[#F2BFC6] uppercase tracking-[0.3em] text-xs font-semibold"
          >
            Kontakt
          </h4>
          <ul class="space-y-4 text-sm text-white/70 font-light">
            <li class="flex flex-col gap-1">
              <span
                class="text-[10px] uppercase tracking-widest text-[#F2BFC6]/60"
                >Telefon</span
              >
              <span
                class="hover:text-[#F2BFC6] transition-colors cursor-pointer"
                >+48 508 746 780</span
              >
            </li>
            <li class="flex flex-col gap-1 mt-4">
              <span
                class="text-[10px] uppercase tracking-widest text-[#F2BFC6]/60"
                >Adres</span
              >
              <span>ul. Marii Konopnickiej 34<br />08-440 Pilawa</span>
            </li>
          </ul>
        </div>

        <div class="space-y-8">
          <h4
            class="text-[#F2BFC6] uppercase tracking-[0.3em] text-xs font-semibold"
          >
            Obserwuj
          </h4>
          <div class="flex flex-col space-y-4 text-white/70 font-light">
            <a
              href="https://www.instagram.com/klaudia_lashartist/?hl=en"
              class="hover:text-[#F2BFC6] transition-colors inline-block w-fit"
              >Instagram</a
            >
            <a
              href="https://www.facebook.com/p/Klaudia-Lash-Artist-100086759595793/"
              class="hover:text-[#F2BFC6] transition-colors inline-block w-fit"
              >Facebook</a
            >
            <a
              href="https://www.tiktok.com/@klaudia.lash.artist"
              class="hover:text-[#F2BFC6] transition-colors inline-block w-fit"
              >TikTok</a
            >
          </div>
        </div>
      </div>

      <div
        class="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10"
      >
        <span class="text-[9px] uppercase tracking-[0.4em] text-white/30"
          >© 2026 Klaudia Lash Artist. All rights reserved.</span
        >
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const isHomePage = computed(() => route.path === "/");

const handleNavClick = (e, href) => {
  if (href.startsWith("#") && !isHomePage.value) {
    e.preventDefault();
    router.push("/" + href);
  }
};

const navLinks = [
  { name: "O Mnie", href: "#o-mnie" },
  { name: "Oferta", href: "#oferta" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Kontakt", href: "#kontakt" },
];
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap");

:root {
  --primary: #f2bfc6;
  --bg: #fcfaf8;
  --text: #1a1a1a;
}

.font-serif {
  font-family: "Playfair Display", serif;
}
.font-sans {
  font-family: "Montserrat", sans-serif;
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.logo-pink-filter {
  transition: all 0.5s ease;
  opacity: 0.9;
}

.logo-pink-filter:hover {
  /* Targeted filter for #F2BFC6 (Pastel Pink) */
  filter: invert(90%) sepia(15%) saturate(900%) hue-rotate(300deg)
    brightness(102%) contrast(95%);
  opacity: 1;
  transform: scale(1.05);
}
</style>
