<template>
  <div
    class="min-h-screen bg-[#FCFAF8] text-[#1A1A1A] font-sans selection:bg-[#F2BFC6]/30 selection:text-[#1A1A1A]"
  >
    <header
      class="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      <div
        class="absolute top-0 right-0 w-1/2 h-full bg-linear-to-b from-[#F2BFC6]/5 to-transparent -z-10"
      ></div>

      <div
        class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative w-full"
      >
        <div class="lg:col-span-7 space-y-8 z-10 pt-10 lg:pt-0">
          <div class="overflow-hidden">
            <span
              class="inline-block border border-[#F2BFC6]/30 rounded-full px-4 py-1 text-[#F2BFC6] uppercase tracking-[0.4em] text-[10px] font-semibold animate-reveal-1"
            >
              Premium Beauty Experience
            </span>
          </div>

          <h1
            class="text-6xl sm:text-7xl lg:text-8xl leading-[1.1] font-serif flex flex-col"
          >
            <span class="overflow-hidden pb-2">
              <span class="inline-block animate-reveal-2">Podkreśl</span>
            </span>
            <span class="overflow-hidden pb-4">
              <span
                class="inline-block italic font-light text-[#F2BFC6] animate-reveal-3"
                >swoje piękno.</span
              >
            </span>
          </h1>

          <p
            class="max-w-lg text-[#1A1A1A]/60 text-lg leading-relaxed font-light animate-reveal-4 opacity-0 [animation-fill-mode:forwards]"
          >
            Ekskluzywna stylizacja rzęs i brwi w sercu Warszawy. Odkryj
            precyzję, która wydobywa głębię Twojego spojrzenia.
          </p>

          <div
            class="flex flex-col sm:flex-row gap-6 pt-8 animate-reveal-5 opacity-0 [animation-fill-mode:forwards]"
          >
            <router-link
              to="/rezerwacja"
              class="bg-[#1A1A1A] text-white px-10 py-5 hover:bg-[#F2BFC6] hover:-translate-y-1 transition-all duration-500 text-xs uppercase tracking-[0.3em] font-semibold shadow-xl shadow-[#1A1A1A]/10 text-center"
            >
              Umów wizytę
            </router-link>
            <a
              href="#portfolio"
              class="group border border-[#1A1A1A]/20 px-10 py-5 hover:border-[#1A1A1A] transition-all duration-500 text-xs uppercase tracking-[0.3em] font-semibold flex justify-center items-center"
            >
              Eksploruj portfolio
              <span
                class="ml-3 transition-transform duration-300 group-hover:translate-x-1"
                >→</span
              >
            </a>
          </div>
        </div>

        <div
          class="lg:col-span-5 relative group mt-10 lg:mt-0 animate-reveal-6 opacity-0 [animation-fill-mode:forwards]"
        >
          <div
            class="absolute -bottom-10 -left-10 w-72 h-72 bg-[#F2BFC6]/20 rounded-full blur-3xl z-0 animate-float"
          ></div>
          <div
            class="absolute top-10 -right-10 w-56 h-56 bg-[#F8E1E1] rounded-full blur-3xl z-0 animate-float-delayed"
          ></div>

          <div
            class="relative z-10 p-2 border border-[#F2BFC6]/30 rounded-t-[20rem] rounded-b-md bg-white/50 backdrop-blur-sm shadow-2xl"
          >
            <div
              class="relative aspect-3/4 overflow-hidden rounded-t-[20rem] rounded-b-sm"
            >
              <img
                :src="photo7"
                alt="Luxury Beauty"
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
              />
              <div
                class="absolute inset-0 bg-linear-to-t from-[#1A1A1A]/20 to-transparent mix-blend-multiply"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce-slow"
      >
        <span class="text-[9px] uppercase tracking-[0.4em] text-[#F2BFC6]"
          >Scroll</span
        >
        <div
          class="w-px h-12 bg-linear-to-b from-[#F2BFC6] to-transparent"
        ></div>
      </div>
    </header>

    <section id="o-mnie" class="py-32 bg-white overflow-hidden relative">
      <div
        class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
      >
        <div class="space-y-8 order-2 lg:order-1 relative z-10">
          <span
            class="text-[#F2BFC6] uppercase tracking-[0.4em] text-[11px] font-bold"
            >O Mnie</span
          >
          <h2
            class="text-5xl md:text-6xl font-serif leading-tight text-[#1A1A1A]"
          >
            Pasja ukryta <br />w każdym detalu.
          </h2>
          <div
            class="space-y-6 text-[#1A1A1A]/70 text-lg leading-relaxed font-light min-h-[120px]"
          >
            <transition name="page" mode="out-in">
              <p :key="activePhotoIndex">
                {{ aboutContent[activePhotoIndex].desc }}
              </p>
            </transition>
          </div>
          <div class="flex items-center gap-4 pt-4">
            <div class="w-12 h-px bg-[#F2BFC6]"></div>
            <span class="italic font-serif text-xl text-[#1A1A1A]"
              >Twoja Lash Artystka</span
            >
          </div>
        </div>

        <div
          class="relative h-[600px] flex justify-center items-center order-1 lg:order-2"
        >
          <div class="relative w-full max-w-[320px] aspect-4/5">
            <div
              v-for="(photo, index) in aboutContent"
              :key="index"
              @click="setActivePhoto(index)"
              :class="[
                'absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer origin-bottom',
                getPhotoClass(index),
              ]"
            >
              <div
                class="w-full h-full bg-white p-3 pb-20 border border-[#1A1A1A]/5 group-hover:border-[#F2BFC6]/30 transition-colors duration-500 rounded-sm"
                :class="activePhotoIndex === index ? 'shadow-2xl' : 'shadow-lg'"
              >
                <img
                  :src="photo.url"
                  class="w-full h-full object-cover transition-all duration-700 rounded-sm"
                  :class="
                    activePhotoIndex === index
                      ? 'grayscale-0'
                      : 'grayscale-60 opacity-90'
                  "
                  alt="Klaudia Portfolio"
                />
              </div>
            </div>
          </div>
          <span
            class="absolute -bottom-10 right-0 text-[140px] font-serif text-[#F2BFC6]/5 select-none pointer-events-none italic"
            >Art</span
          >
        </div>
      </div>
    </section>

    <section id="oferta" class="py-32 bg-[#FCFAF8]">
      <div class="max-w-7xl mx-auto px-6">
        <div
          class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div class="space-y-4">
            <span
              class="text-[#F2BFC6] uppercase tracking-[0.4em] text-[11px] font-bold"
              >Nasze Usługi</span
            >
            <h2 class="text-5xl md:text-6xl font-serif max-w-xl text-[#1A1A1A]">
              Rytuały piękna dostosowane do Ciebie
            </h2>
          </div>
          <p
            class="text-[#1A1A1A]/50 max-w-xs text-sm italic font-serif leading-relaxed"
          >
            Wybierz zabieg z listy, aby dokonać szybkiej rezerwacji terminu.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div class="space-y-4">
            <div
              v-for="(service, index) in prices"
              :key="index"
              @click="goToReservation(service)"
              class="group cursor-pointer p-6 border transition-all duration-500 rounded-sm relative overflow-hidden border-transparent hover:border-[#1A1A1A]/5 hover:bg-white/50"
            >
              <div
                class="flex justify-between items-center relative z-10 border-b border-[#1A1A1A]/5 pb-4 group-hover:border-transparent transition-colors"
              >
                <div class="space-y-1 pr-4">
                  <h3
                    class="text-2xl font-serif transition-colors text-[#1A1A1A] group-hover:text-[#F2BFC6]"
                  >
                    {{ service.name }}
                  </h3>
                  <p class="text-xs text-[#1A1A1A]/50 font-sans tracking-wide">
                    {{ service.desc }}
                  </p>
                </div>

                <div
                  class="text-right whitespace-nowrap relative min-w-[110px] h-20 flex flex-col justify-center items-end"
                >
                  <span
                    class="text-xl font-light text-[#F2BFC6] transition-all duration-300 absolute origin-right top-6 group-hover:top-2 group-hover:scale-90"
                  >
                    {{ service.price }} zł
                  </span>

                  <span
                    class="text-[9px] uppercase tracking-widest px-4 py-1.5 border border-[#F2BFC6] rounded-full transition-all duration-300 absolute bottom-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 text-[#F2BFC6]"
                  >
                    Wybierz
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="relative h-[600px] lg:h-auto">
            <div class="sticky top-32 aspect-4/5 w-full max-w-[450px] mx-auto">
              <div
                class="absolute inset-0 bg-white p-2 border border-[#F2BFC6]/20 rounded-sm shadow-xl"
              >
                <div
                  class="w-full h-full overflow-hidden rounded-sm relative group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop"
                    alt="Beauty ritual"
                    class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div
                    class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"
                  >
                    <router-link
                      to="/rezerwacja"
                      class="text-white text-xs uppercase tracking-[0.3em] border border-white px-6 py-3 hover:bg-white hover:text-[#1A1A1A] transition-all"
                    >
                      Umów się teraz
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio" class="py-32 bg-white">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="mb-20 space-y-4">
          <span
            class="text-[#F2BFC6] uppercase tracking-[0.4em] text-[11px] font-bold"
            >Nasze Portfolio</span
          >
          <h2
            class="text-5xl md:text-7xl font-light italic font-serif text-[#1A1A1A]"
          >
            Artystyczne spojrzenia
          </h2>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start"
        >
          <div
            v-for="(column, colIdx) in columnsGallery"
            :key="colIdx"
            class="flex flex-col gap-6"
          >
            <transition-group name="portfolio-grid">
              <div
                v-for="item in column"
                :key="item.id"
                @click="openLightboxByItem(item)"
                class="group relative overflow-hidden rounded-sm cursor-pointer shadow-sm transition-shadow duration-700 hover:shadow-2xl bg-[#1A1A1A]"
              >
                <img
                  :src="item.url"
                  :alt="item.title"
                  class="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105"
                />
              </div>
            </transition-group>
          </div>
        </div>

        <!-- Lightbox -->
        <Teleport to="body">
          <transition name="fade">
            <div
              v-if="isLightboxOpen"
              class="fixed inset-0 z-100 flex items-center justify-center bg-[#1A1A1A]/95 backdrop-blur-xl"
              @click.self="closeLightbox"
            >
              <button
                @click="closeLightbox"
                class="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-110"
              >
                <span class="text-xs uppercase tracking-[0.4em] font-light"
                  >Zamknij</span
                >
              </button>

              <div
                class="relative w-full h-full flex items-center justify-center p-6 md:p-20"
              >
                <button
                  @click="prevLightboxImage"
                  class="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center text-white/30 hover:text-white transition-all z-110"
                >
                  <span class="text-3xl font-light">←</span>
                </button>

                <div
                  class="relative max-w-5xl max-h-full overflow-hidden flex flex-col items-center"
                >
                  <transition name="page" mode="out-in">
                    <img
                      :key="activeLightboxIndex"
                      :src="allGalleryItems[activeLightboxIndex].url"
                      class="max-w-full max-h-[90vh] object-contain shadow-2xl transition-transform duration-300"
                    />
                  </transition>
                </div>

                <button
                  @click="nextLightboxImage"
                  class="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center text-white/30 hover:text-white transition-all z-110"
                >
                  <span class="text-3xl font-light">→</span>
                </button>
              </div>

              <!-- Counter -->
              <div
                class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-[10px] uppercase tracking-[0.4em]"
              >
                {{ activeLightboxIndex + 1 }} / {{ allGalleryItems.length }}
              </div>
            </div>
          </transition>
        </Teleport>

        <div
          ref="loadMoreTrigger"
          class="h-20 flex justify-center items-center"
          v-if="hasMoreImages"
        >
          <div
            class="w-6 h-6 border-2 border-[#F2BFC6]/30 border-t-[#F2BFC6] rounded-full animate-spin"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

import services from "../data/services.json";

import photo1 from "../assets/1.jpeg";
import photo2 from "../assets/2.jpeg";
import photo3 from "../assets/3.jpeg";
import photo4 from "../assets/4.jpeg";
import photo5 from "../assets/5.jpeg";
import photo6 from "../assets/6.jpeg";
import photo7 from "../assets/7.jpeg";

// Portfolio images
import port1 from "../assets/portfolio/0B5ADDEB-41F1-40C5-B855-48E571DBDC2E.jpeg";
import port2 from "../assets/portfolio/35C10A06-B05E-4472-8EEB-4E72D8BA6D8D.jpeg";
import port3 from "../assets/portfolio/67D062B7-8FCD-4BC1-AB22-A42E55AAF9FE.jpeg";
import port4 from "../assets/portfolio/80CB62C6-0FBA-40B6-8DD7-3FF073962B23.jpeg";
import port5 from "../assets/portfolio/9C6B0D30-ADE0-4655-8175-067A60F63D03.jpeg";
import port10 from "../assets/portfolio/07D8ED06-645C-4643-A742-F6A9B7F0E761.jpeg";
import port6 from "../assets/portfolio/9CB6A21C-DAF5-4510-99A5-F4CBF42B46EC.jpg";
import port7 from "../assets/portfolio/E491B092-1961-4067-90E7-D883DBEFC4D9.jpeg";
import port8 from "../assets/portfolio/E8ACA92F-C695-4E30-ABE6-533A09AB07F8.jpeg";
import port9 from "../assets/portfolio/E9678AFD-D1E5-4A14-B99A-A59D4197B76F.jpg";
import port11 from "../assets/portfolio/4077F9EA-53AE-40D1-AE0C-A29C60798B0A_1_201_a.jpeg";

/*
# Walkthrough: Image Updates & Booksy Integration

I have successfully updated the website with new images and integrated the Booksy booking system.

## Changes Made

### Hero & "O mnie" Sections
- Set static image `7.jpeg` as the hero background.
- Updated the photo stack in "O mnie" to include 7 photos (`1.jpeg` - `7.jpeg`).

### Booksy Integration
- **New Booking System**: Replaced the custom reservation form with a responsive Booksy iframe in `Reservation.vue`.
- **Global Links**: Updated all booking buttons ("Umów wizytę", "Wybierz") to point to the new reservation page.
- **Improved UX**: Added a "Powrót do strony głównej" link below the booking widget.

## Verification

### Local Code Verification
- [x] Booksy iframe implemented and responsive.
- [x] All booking buttons correctly linked to `/rezerwacja`.
- [x] Lint error for aspect ratio fixed.

### Manual Action Required
> [!IMPORTANT]
> Musisz wkleić swój link do widgetu Booksy w pliku `src/components/Reservation.vue`.
> Szukaj linii: `const booksyUrl = ref("...");`
*/

const router = useRouter();

const goToReservation = (service) => {
  router.push({
    path: "/rezerwacja",
    query: { service: service.name },
  });
};

const aboutContent = [
  {
    url: photo1,
    desc: "Precyzja to mój fundament. Każda rzęsa to dla mnie odrębna historia, którą wspólnie piszemy każdego dnia w moim studio.",
  },
  {
    url: photo2,
    desc: "Relaks i piękno idą w parze. Tworzę przestrzeń, w której możesz na chwilę zapomnieć o świecie i skupić się wyłącznie na sobie.",
  },
  {
    url: photo3,
    desc: "Naturalność przede wszystkim. Wydobywam to, co w Tobie najpiękniejsze, podkreślając spojrzenie w sposób subtelny i autentyczny.",
  },
  {
    url: photo4,
    desc: "Moja pracownia to miejsce magiczne, gdzie techniczna precyzja spotyka się z pasją i kobiecą energią, której potrzebujesz.",
  },
  {
    url: photo5,
    desc: "Ciągły rozwój to moja obietnica. Regularnie szkolę się u najlepszych ekspertów, by oferować Ci najnowsze światowe trendy.",
  },
  {
    url: photo6,
    desc: "Najwyższa jakość produktów to standard, na którym nie uznaję kompromisów. Twoje bezpieczeństwo i komfort są dla mnie priorytetem.",
  },
  {
    url: photo7,
    desc: "Twoje zadowolenie i uśmiech po spojrzeniu w lustro to moja największa nagroda. To dla tych chwil kocham to, co robię.",
  },
];

const activePhotoIndex = ref(0);
let aboutTimer = null;

const startAboutTimer = () => {
  if (aboutTimer) clearInterval(aboutTimer);
  aboutTimer = setInterval(() => {
    activePhotoIndex.value = (activePhotoIndex.value + 1) % aboutContent.length;
  }, 7000);
};

const setActivePhoto = (index) => {
  activePhotoIndex.value = index;
  startAboutTimer(); // Reset timer on manual click
};

const getPhotoClass = (index) => {
  const diff =
    (index - activePhotoIndex.value + aboutContent.length) %
    aboutContent.length;

  if (diff === 0) {
    return "z-30 scale-100 rotate-0 translate-y-0 translate-x-0";
  }
  if (diff === 1) {
    return "z-20 scale-95 rotate-6 translate-x-10 translate-y-6 hover:-translate-y-2 hover:rotate-3";
  }
  return "z-10 scale-90 -rotate-6 -translate-x-10 translate-y-10 hover:-translate-y-4 hover:-rotate-3";
};

const prices = services;

const allGalleryItems = [
  {
    id: 1,
    title: "Ekskluzywna stylizacja rzęs",
    category: "Rzęsy",
    url: port1,
  },
  {
    id: 2,
    title: "Głębokie spojrzenie",
    category: "Rzęsy",
    url: port2,
  },
  {
    id: 3,
    title: "Naturalny efekt",
    category: "Rzęsy",
    url: port3,
  },
  {
    id: 4,
    title: "Precyzyjna aplikacja",
    category: "Rzęsy",
    url: port4,
  },
  {
    id: 5,
    title: "Perfekcyjna objętość",
    category: "Rzęsy",
    url: port5,
  },
  {
    id: 6,
    title: "Lash Art Setup",
    category: "Warsztat",
    url: port6,
  },
  {
    id: 7,
    title: "Efekt Glamour",
    category: "Rzęsy",
    url: port7,
  },
  {
    id: 8,
    title: "Delikatne podkreślenie",
    category: "Rzęsy",
    url: port8,
  },
  {
    id: 9,
    title: "Profesjonalna pielęgnacja",
    category: "Akcesoria",
    url: port9,
  },
  {
    id: 10,
    title: "Artystyczne spojrzenie",
    category: "Rzęsy",
    url: port10,
  },
  {
    id: 11,
    title: "Nowoczesna stylizacja",
    category: "Rzęsy",
    url: port11,
  },
];

const visibleCount = ref(6);

const visibleGalleryItems = computed(() => {
  return allGalleryItems.slice(0, visibleCount.value);
});

const columnsGallery = computed(() => {
  const cols = [[], [], [], []];
  visibleGalleryItems.value.forEach((item, index) => {
    cols[index % 4].push(item);
  });
  return cols;
});

const hasMoreImages = computed(() => {
  return visibleCount.value < allGalleryItems.length;
});

const loadMoreImages = () => {
  if (visibleCount.value < allGalleryItems.length) {
    visibleCount.value = Math.min(
      visibleCount.value + 4,
      allGalleryItems.length,
    );
  }
};

// Lightbox logic
const isLightboxOpen = ref(false);
const activeLightboxIndex = ref(0);

// Infinite Scroll logic
const loadMoreTrigger = ref(null);
let observer = null;

const openLightbox = (index) => {
  activeLightboxIndex.value = index;
  isLightboxOpen.value = true;
  document.body.style.overflow = "hidden";
};

const openLightboxByItem = (item) => {
  const index = allGalleryItems.findIndex((i) => i.id === item.id);
  openLightbox(index);
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
  document.body.style.overflow = "";
};

const nextLightboxImage = () => {
  activeLightboxIndex.value =
    (activeLightboxIndex.value + 1) % allGalleryItems.length;
};

const prevLightboxImage = () => {
  activeLightboxIndex.value =
    (activeLightboxIndex.value - 1 + allGalleryItems.length) %
    allGalleryItems.length;
};

const handleKeydown = (e) => {
  if (!isLightboxOpen.value) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") nextLightboxImage();
  if (e.key === "ArrowLeft") prevLightboxImage();
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
  startAboutTimer();

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && hasMoreImages.value) {
        loadMoreImages();
      }
    },
    { threshold: 0.1 },
  );

  if (loadMoreTrigger.value) {
    observer.observe(loadMoreTrigger.value);
  }
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  if (observer) observer.disconnect();
  if (aboutTimer) clearInterval(aboutTimer);
});
</script>

<style scoped>
@keyframes reveal-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-reveal-1 {
  animation: reveal-up 1s cubic-bezier(0.25, 1, 0.5, 1) forwards 0.2s;
  opacity: 0;
}
.animate-reveal-2 {
  animation: reveal-up 1s cubic-bezier(0.25, 1, 0.5, 1) forwards 0.4s;
  opacity: 0;
}
.animate-reveal-3 {
  animation: reveal-up 1s cubic-bezier(0.25, 1, 0.5, 1) forwards 0.6s;
  opacity: 0;
}
.animate-reveal-4 {
  animation: reveal-up 1s cubic-bezier(0.25, 1, 0.5, 1) forwards 0.8s;
}
.animate-reveal-5 {
  animation: reveal-up 1s cubic-bezier(0.25, 1, 0.5, 1) forwards 1s;
}
.animate-reveal-6 {
  animation: reveal-up 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards 0.6s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 9s ease-in-out infinite 2s;
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(10px) translateX(-50%);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.portfolio-grid-move,
.portfolio-grid-enter-active,
.portfolio-grid-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.portfolio-grid-enter-from,
.portfolio-grid-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.portfolio-grid-leave-active {
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
