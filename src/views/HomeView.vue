<template>
  <div
    class="min-h-screen bg-[#FCFAF8] text-[#1A1A1A] font-sans selection:bg-[#C5A059]/30 selection:text-[#1A1A1A]"
  >
    <header
      class="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      <div
        class="absolute top-0 right-0 w-1/2 h-full bg-linear-to-b from-[#C5A059]/5 to-transparent -z-10"
      ></div>

      <div
        class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative w-full"
      >
        <div class="lg:col-span-7 space-y-8 z-10 pt-10 lg:pt-0">
          <div class="overflow-hidden">
            <span
              class="inline-block border border-[#C5A059]/30 rounded-full px-4 py-1 text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-semibold animate-reveal-1"
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
                class="inline-block italic font-light text-[#C5A059] animate-reveal-3"
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
              class="bg-[#1A1A1A] text-white px-10 py-5 hover:bg-[#C5A059] hover:-translate-y-1 transition-all duration-500 text-xs uppercase tracking-[0.3em] font-semibold shadow-xl shadow-[#1A1A1A]/10 text-center"
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
            class="absolute -bottom-10 -left-10 w-72 h-72 bg-[#C5A059]/20 rounded-full blur-3xl z-0 animate-float"
          ></div>
          <div
            class="absolute top-10 -right-10 w-56 h-56 bg-[#eaddc5] rounded-full blur-3xl z-0 animate-float-delayed"
          ></div>

          <div
            class="relative z-10 p-2 border border-[#C5A059]/30 rounded-t-[20rem] rounded-b-md bg-white/50 backdrop-blur-sm shadow-2xl"
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
        <span class="text-[9px] uppercase tracking-[0.4em] text-[#C5A059]"
          >Scroll</span
        >
        <div
          class="w-px h-12 bg-linear-to-b from-[#C5A059] to-transparent"
        ></div>
      </div>
    </header>

    <section id="o-mnie" class="py-32 bg-white overflow-hidden relative">
      <div
        class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
      >
        <div class="space-y-8 order-2 lg:order-1 relative z-10">
          <span
            class="text-[#C5A059] uppercase tracking-[0.4em] text-[11px] font-bold"
            >O Mnie</span
          >
          <h2
            class="text-5xl md:text-6xl font-serif leading-tight text-[#1A1A1A]"
          >
            Pasja ukryta <br />w każdym detalu.
          </h2>
          <div
            class="space-y-6 text-[#1A1A1A]/70 text-lg leading-relaxed font-light"
          >
            <p>
              Nazywam się Klaudia i od ponad 6 lat pomagam kobietom odkrywać ich
              naturalne piękno poprzez profesjonalną stylizację oprawy oka.
            </p>
            <p>
              Moja praca to połączenie technicznej precyzji z artystyczną wizją.
              Każda aplikacja jest dla mnie jak tworzenie unikalnego dzieła
              sztuki, dostosowanego do Twoich rysów twarzy i stylu życia.
            </p>
          </div>
          <div class="flex items-center gap-4 pt-4">
            <div class="w-12 h-px bg-[#C5A059]"></div>
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
              v-for="(photo, index) in aboutPhotos"
              :key="index"
              @click="setActivePhoto(index)"
              :class="[
                'absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer origin-bottom',
                getPhotoClass(index),
              ]"
            >
              <div
                class="w-full h-full bg-white p-3 pb-20 border border-[#1A1A1A]/5 group-hover:border-[#C5A059]/30 transition-colors duration-500 rounded-sm"
                :class="activePhotoIndex === index ? 'shadow-2xl' : 'shadow-lg'"
              >
                <img
                  :src="photo"
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
            class="absolute -bottom-10 right-0 text-[140px] font-serif text-[#C5A059]/5 select-none pointer-events-none italic"
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
              class="text-[#C5A059] uppercase tracking-[0.4em] text-[11px] font-bold"
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
                    class="text-2xl font-serif transition-colors text-[#1A1A1A] group-hover:text-[#C5A059]"
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
                    class="text-xl font-light text-[#C5A059] transition-all duration-300 absolute origin-right top-6 group-hover:top-2 group-hover:scale-90"
                  >
                    {{ service.price }} zł
                  </span>

                  <span
                    class="text-[9px] uppercase tracking-widest px-4 py-1.5 border border-[#C5A059] rounded-full transition-all duration-300 absolute bottom-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 text-[#C5A059]"
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
                class="absolute inset-0 bg-white p-2 border border-[#C5A059]/20 rounded-sm shadow-xl"
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
            class="text-[#C5A059] uppercase tracking-[0.4em] text-[11px] font-bold"
            >Nasze Portfolio</span
          >
          <h2
            class="text-5xl md:text-7xl font-light italic font-serif text-[#1A1A1A]"
          >
            Artystyczne spojrzenia
          </h2>
        </div>

        <transition-group
          name="portfolio-grid"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]"
        >
          <div
            v-for="(item, index) in visibleGalleryItems"
            :key="item.id"
            :class="[
              getGridClass(index),
              'group relative overflow-hidden rounded-sm cursor-pointer shadow-sm transition-shadow duration-700 hover:shadow-2xl bg-[#1A1A1A]',
            ]"
          >
            <img
              :src="item.url"
              :alt="item.title"
              class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale-20 group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-left"
            >
              <span
                class="text-[#C5A059] text-[10px] uppercase tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >{{ item.category }}</span
              >
              <h3
                class="text-white text-xl font-serif translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75"
              >
                {{ item.title }}
              </h3>
            </div>
          </div>
        </transition-group>

        <div class="mt-20 flex justify-center" v-if="hasMoreImages">
          <button
            @click="loadMoreImages"
            class="relative group px-12 py-5 overflow-hidden border border-[#1A1A1A]/20 rounded-full"
          >
            <span
              class="relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold group-hover:text-white transition-colors duration-500 text-[#1A1A1A]"
              >Załaduj więcej prac</span
            >
            <div
              class="absolute inset-0 bg-[#1A1A1A] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom ease-out"
            ></div>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import services from "../data/services.json";

import photo1 from "../assets/1.jpeg";
import photo2 from "../assets/2.jpeg";
import photo3 from "../assets/3.jpeg";
import photo4 from "../assets/4.jpeg";
import photo5 from "../assets/5.jpeg";
import photo6 from "../assets/6.jpeg";
import photo7 from "../assets/7.jpeg";

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

const aboutPhotos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];

const activePhotoIndex = ref(0);

const setActivePhoto = (index) => {
  activePhotoIndex.value = index;
};

const getPhotoClass = (index) => {
  const diff =
    (index - activePhotoIndex.value + aboutPhotos.length) % aboutPhotos.length;

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
    title: "Classic 1:1 Perfection",
    category: "Rzęsy",
    url: "https://images.unsplash.com/photo-1582211594533-268f4f1edeb9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Light Volume Magic",
    category: "Rzęsy",
    url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Brow Lamination Art",
    category: "Brwi",
    url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Mega Volume Drama",
    category: "Rzęsy",
    url: "https://images.unsplash.com/photo-1583001838051-dc7930495679?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Artistic Lash Set",
    category: "Art",
    url: "https://images.unsplash.com/photo-1481325544412-f967116167c7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Natural Definition",
    category: "Brwi",
    url: "https://images.unsplash.com/photo-1621333104439-444754593ce8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Subtle Enhancement",
    category: "Rzęsy",
    url: "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Fluffy Brows",
    category: "Brwi",
    url: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Wet Look Effect",
    category: "Rzęsy",
    url: "https://images.unsplash.com/photo-1588513706482-665a468d601b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Perfect Arch",
    category: "Brwi",
    url: "https://images.unsplash.com/photo-1516975080661-464a4b4e1f70?q=80&w=1000&auto=format&fit=crop",
  },
];

const visibleCount = ref(6);

const visibleGalleryItems = computed(() => {
  return allGalleryItems.slice(0, visibleCount.value);
});

const hasMoreImages = computed(() => {
  return visibleCount.value < allGalleryItems.length;
});

const loadMoreImages = () => {
  visibleCount.value += 4;
};

const getGridClass = (index) => {
  const pattern = index % 6;
  switch (pattern) {
    case 0:
      return "md:col-span-2 md:row-span-2";
    case 1:
      return "md:col-span-1 md:row-span-1";
    case 2:
      return "md:col-span-1 md:row-span-2";
    case 3:
      return "md:col-span-1 md:row-span-1";
    case 4:
      return "md:col-span-2 md:row-span-1";
    case 5:
      return "md:col-span-1 md:row-span-1";
    default:
      return "col-span-1 row-span-1";
  }
};
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
  transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.portfolio-grid-enter-from,
.portfolio-grid-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
}

.portfolio-grid-leave-active {
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
