import { createRouter, createWebHistory } from "vue-router";
import about from "@/views/AboutContent.vue";
import Gastronomy from "@/components/GastronomyContent.vue";
import Rooms from "@/components/RoomsContent.vue";
import ContactUs from "@/components/ContactUs.vue";
import ReservationsContent from "@/components/ReservationsContent.vue";
import MainContent from "@/components/MainContent.vue";

const routes = [
  {
    path: "/about",
    name: "about",
    component:
      about
  },
  {
    path: "/",
    name: "home",
    component:
      MainContent
  },
  {
    path: "/reservations",
    name: "reservations",
    component:
      ReservationsContent
  },
  {
    path: "/contact-us",
    name: "contactus",
    component:
    ContactUs
  },
  {
    path: "/gastronomy",
    name: "gastronomy",
    component:
      Gastronomy
  },
  {
    path: "/rooms",
    name: "rooms",
    component:
      Rooms
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes

});

export default router;

