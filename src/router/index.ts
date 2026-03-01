import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Reservation from "../components/Reservation.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/rezerwacja",
      name: "reservation",
      component: Reservation,
    },
  ],
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
