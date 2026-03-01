<template>
  <div
    class="min-h-screen bg-[#FCFAF8] pt-32 pb-20 px-6 font-sans selection:bg-[#C5A059]/20"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 space-y-4">
        <span
          class="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold"
          >Rezerwacja Premium</span
        >
        <h1 class="text-5xl font-serif text-[#1A1A1A]">Zarezerwuj swój czas</h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-4 space-y-6 sticky top-32">
          <div
            class="bg-white p-8 border border-[#C5A059]/10 shadow-sm rounded-sm"
          >
            <h3
              class="text-xs uppercase tracking-[0.3em] font-bold text-[#1A1A1A] border-b border-[#1A1A1A]/5 pb-4 mb-6"
            >
              Twoja Wizyta
            </h3>

            <div class="space-y-6">
              <div class="flex flex-col gap-1">
                <span
                  class="text-[10px] uppercase text-[#C5A059] tracking-widest font-semibold"
                  >Usługa</span
                >
                <span class="text-lg font-serif italic">{{
                  selectedService?.name || "---"
                }}</span>
              </div>

              <div
                v-if="selectedDate"
                class="flex flex-col gap-1 pt-4 border-t border-[#1A1A1A]/5"
              >
                <span
                  class="text-[10px] uppercase text-[#1A1A1A]/40 tracking-widest"
                  >Data i godzina</span
                >
                <span class="text-sm font-medium"
                  >{{ formatDate(selectedDate) }}
                  <span v-if="selectedTime" class="text-[#C5A059]"
                    >| {{ selectedTime }}</span
                  ></span
                >
              </div>

              <div
                v-if="selectedService"
                class="pt-4 border-t border-[#1A1A1A]/5 flex justify-between items-baseline"
              >
                <span
                  class="text-[10px] uppercase text-[#1A1A1A]/40 tracking-widest"
                  >Suma</span
                >
                <span class="text-xl font-bold text-[#C5A059]"
                  >{{ selectedService.price }} zł</span
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="lg:col-span-8 bg-white p-8 lg:p-12 border border-[#1A1A1A]/5 shadow-2xl rounded-sm"
        >
          <div class="space-y-12">
            <section class="space-y-6">
              <label
                class="text-xs uppercase tracking-[0.3em] font-bold flex items-center gap-4"
              >
                <span
                  class="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-[10px]"
                  >1</span
                >
                Zabieg
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  v-for="service in availableServices"
                  :key="service.name"
                  @click="selectedService = service"
                  class="p-4 border text-left transition-all duration-300 flex justify-between items-center"
                  :class="
                    selectedService?.name === service.name
                      ? 'border-[#C5A059] bg-[#C5A059]/5'
                      : 'border-[#1A1A1A]/5 hover:border-[#C5A059]/30'
                  "
                >
                  <span class="text-sm font-medium">{{ service.name }}</span>
                  <span class="text-[10px] font-bold text-[#C5A059]"
                    >{{ service.price }} zł</span
                  >
                </button>
              </div>
            </section>

            <section class="space-y-6" v-if="selectedService">
              <label
                class="text-xs uppercase tracking-[0.3em] font-bold flex items-center gap-4"
              >
                <span
                  class="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-[10px]"
                  >2</span
                >
                Wybierz datę
              </label>

              <div
                class="border border-[#1A1A1A]/5 p-6 rounded-sm bg-[#FCFAF8]"
              >
                <div class="flex justify-between items-center mb-6 px-2">
                  <span
                    class="text-sm font-serif font-bold uppercase tracking-widest"
                    >Marzec 2026</span
                  >
                  <div class="flex gap-4 text-xs">
                    <button class="opacity-30 cursor-not-allowed">←</button>
                    <button class="opacity-30 cursor-not-allowed">→</button>
                  </div>
                </div>

                <div
                  class="grid grid-cols-7 gap-2 text-center text-[10px] uppercase tracking-tighter text-[#1A1A1A]/40 mb-4"
                >
                  <div
                    v-for="d in ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd']"
                    :key="d"
                  >
                    {{ d }}
                  </div>
                </div>
                <div class="grid grid-cols-7 gap-2">
                  <button
                    v-for="day in daysInMonth"
                    :key="day.date"
                    @click="selectDay(day)"
                    :disabled="day.isPast"
                    class="aspect-square flex items-center justify-center text-xs rounded-full transition-all"
                    :class="[
                      day.isPast
                        ? 'opacity-10 cursor-not-allowed'
                        : 'hover:bg-[#C5A059] hover:text-white',
                      selectedDate === day.date
                        ? 'bg-[#1A1A1A] text-white'
                        : '',
                    ]"
                  >
                    {{ day.dayNumber }}
                  </button>
                </div>
              </div>
            </section>

            <transition name="fade">
              <section class="space-y-6" v-if="selectedDate">
                <label
                  class="text-xs uppercase tracking-[0.3em] font-bold flex items-center gap-4"
                >
                  <span
                    class="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-[10px]"
                    >3</span
                  >
                  Dostępne godziny
                </label>
                <div
                  class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
                >
                  <button
                    v-for="time in timeSlots"
                    :key="time"
                    @click="selectTime(time)"
                    :disabled="isSlotBooked(time)"
                    class="py-3 text-[11px] border transition-all"
                    :class="[
                      isSlotBooked(time)
                        ? 'bg-gray-100 text-gray-300 cursor-not-allowed border-transparent'
                        : 'hover:border-[#C5A059] hover:text-[#C5A059]',
                      selectedTime === time
                        ? 'bg-[#C5A059] text-white border-[#C5A059]'
                        : 'border-[#1A1A1A]/10',
                    ]"
                  >
                    {{ time }}
                  </button>
                </div>
              </section>
            </transition>

            <section class="space-y-8" v-if="selectedTime">
              <label
                class="text-xs uppercase tracking-[0.3em] font-bold flex items-center gap-4"
              >
                <span
                  class="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-[10px]"
                  >4</span
                >
                Twoje dane
              </label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Imię i nazwisko"
                  class="border-b border-[#1A1A1A]/10 py-3 text-sm focus:outline-none focus:border-[#C5A059] bg-transparent"
                />
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="Numer telefonu"
                  class="border-b border-[#1A1A1A]/10 py-3 text-sm focus:outline-none focus:border-[#C5A059] bg-transparent"
                />
              </div>
              <button
                @click="confirmBooking"
                class="w-full py-5 bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] transition-all shadow-xl"
              >
                Potwierdzam rezerwację
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import services from "../data/services.json";

const route = useRoute();

// DANE
const availableServices = services;

const selectedService = ref(null);
const selectedDate = ref(null);
const selectedTime = ref(null);
const form = reactive({ name: "", phone: "" });

onMounted(() => {
  const serviceName = route.query.service;
  if (serviceName) {
    const service = availableServices.find((s) => s.name === serviceName);
    if (service) {
      selectedService.value = service;
    }
  }
});

// LOGIKA KALENDARZA (Symulacja marca 2026)
const daysInMonth = computed(() => {
  return Array.from({ length: 31 }, (_, i) => ({
    dayNumber: i + 1,
    date: `2026-03-${String(i + 1).padStart(2, "0")}`,
    isPast: i + 1 < new Date().getDate() && new Date().getMonth() === 2, // Uproszczona logika przeszłości
  }));
});

const timeSlots = [
  "09:00",
  "10:30",
  "12:00",
  "13:30",
  "15:00",
  "16:30",
  "18:00",
];

// Symulacja bazy danych zajętych terminów
const bookedSlots = {
  "2026-03-05": ["10:30", "15:00"],
  "2026-03-10": ["09:00", "12:00", "13:30"],
};

// FUNKCJE
const selectDay = (day) => {
  selectedDate.value = day.date;
  selectedTime.value = null; // Reset godziny przy zmianie dnia
};

const selectTime = (time) => {
  selectedTime.value = time;
};

const isSlotBooked = (time) => {
  if (!selectedDate.value) return false;
  return bookedSlots[selectedDate.value]?.includes(time);
};

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("pl-PL", { day: "numeric", month: "long" });
};

const confirmBooking = () => {
  if (form.name && form.phone) {
    alert(
      `Rezerwacja potwierdzona!\n${selectedService.value.name}\n${formatDate(selectedDate.value)} o godz. ${selectedTime.value}`,
    );
  } else {
    alert("Proszę uzupełnić dane kontaktowe.");
  }
};
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
