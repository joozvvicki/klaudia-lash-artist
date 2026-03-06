<template>
  <div
    class="min-h-screen bg-[#FFF5F6] text-[#1A1A1A] font-sans selection:bg-[#F2BFC6]/30 selection:text-[#1A1A1A]"
  >
    <nav
      :class="[
        'fixed top-0 w-full z-50 transition-all duration-500 border-b',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-[#1A1A1A]/5'
          : 'bg-transparent border-transparent',
      ]"
    >
      <div
        :class="[
          'max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500',
          isScrolled ? 'h-20' : 'h-28',
        ]"
      >
        <router-link to="/" class="flex items-center group cursor-pointer">
          <div
            class="h-12 w-32 logo-icon bg-[#1A1A1A] group-hover:bg-[#F2BFC6] transition-all duration-500"
          ></div>
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

        <button
          @click="toggleMenu"
          class="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none group"
          aria-label="Toggle Menu"
        >
          <span
            :class="[
              'block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 transform',
              isMenuOpen ? 'rotate-45 translate-y-2' : '',
            ]"
          ></span>
          <span
            :class="[
              'block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300',
              isMenuOpen ? 'opacity-0' : '',
            ]"
          ></span>
          <span
            :class="[
              'block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 transform',
              isMenuOpen ? '-rotate-45 -translate-y-2' : '',
            ]"
          ></span>
        </button>
      </div>
    </nav>

    <!-- Full-screen Mobile Menu Overlay -->
    <transition name="menu">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden flex flex-col pt-32 px-12"
      >
        <div class="flex-1 flex flex-col justify-center space-y-12">
          <nav class="flex flex-col space-y-6">
            <template v-for="(link, index) in navLinks" :key="link.name">
              <div
                class="overflow-hidden"
                :style="{ transitionDelay: `${index * 100}ms` }"
              >
                <a
                  v-if="link.href.startsWith('#')"
                  :href="isHomePage ? link.href : '/' + link.href"
                  @click="handleNavClick($event, link.href)"
                  class="text-4xl font-serif italic text-[#1A1A1A] hover:text-[#F2BFC6] transition-colors duration-500 block"
                >
                  {{ link.name }}
                </a>
                <router-link
                  v-else
                  :to="link.href"
                  @click="isMenuOpen = false"
                  class="text-4xl font-serif italic text-[#1A1A1A] hover:text-[#F2BFC6] transition-colors duration-500 block"
                >
                  {{ link.name }}
                </router-link>
              </div>
            </template>
          </nav>

          <div class="pt-12 border-t border-[#1A1A1A]/5 mt-auto pb-12">
            <h4
              class="text-[10px] uppercase tracking-[0.4em] text-[#F2BFC6] font-bold mb-6"
            >
              Znajdź mnie
            </h4>
            <div class="flex flex-col space-y-4 text-lg font-light">
              <a
                href="https://www.instagram.com/klaudia_lashartist/?hl=en"
                class="text-[#1A1A1A]/60 hover:text-[#F2BFC6] transition-colors"
                >Instagram</a
              >
              <a
                href="https://www.facebook.com/p/Klaudia-Lash-Artist-100086759595793/"
                class="text-[#1A1A1A]/60 hover:text-[#F2BFC6] transition-colors"
                >Facebook</a
              >
            </div>
            <router-link
              to="/rezerwacja"
              @click="isMenuOpen = false"
              class="inline-block mt-12 bg-[#1A1A1A] text-white px-10 py-5 text-sm uppercase tracking-[0.2em] font-semibold w-full text-center"
            >
              Zarezerwuj teraz
            </router-link>
          </div>
        </div>
      </div>
    </transition>

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
        class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F2BFC6]/10 rounded-full blur-[100px] pointer-events-none"
      ></div>

      <div
        class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10"
      >
        <div class="lg:col-span-2 space-y-10">
          <div class="flex flex-col items-start translate-x-[-15px]">
            <div
              class="h-24 w-48 logo-icon bg-[#F2BFC6] transition-all duration-500 opacity-90 hover:opacity-100"
            ></div>
          </div>
          <p class="max-w-sm text-white/50 text-sm leading-relaxed font-light">
            Tworzę piękno oparte na zaufaniu i profesjonalizmie. Zapraszam do
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
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const isHomePage = computed(() => route.path === "/");

const handleNavClick = (e, href) => {
  isMenuOpen.value = false;
  document.body.style.overflow = "";

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

/* Mobile Menu Transitions */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

.menu-enter-active nav div {
  animation: menuLinkIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes menuLinkIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo-icon {
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
  mask-image: url("/logo.png");
  -webkit-mask-image: url("/logo.png");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

footer .logo-icon {
  background-position: left;
}
</style>
