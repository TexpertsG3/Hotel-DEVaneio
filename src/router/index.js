/* eslint-disable prettier/prettier*/
import { createRouter, createWebHistory } from "vue-router";
import about from "@/views/AboutContent.vue";
import Gastronomy from "@/views/GastronomyContent.vue";
import Rooms from "@/views/RoomsContent.vue";
import ContactUs from "@/views/ContactUs.vue";
import ReservationsContent from "@/views/ReservationsContent.vue";
import HomeContent from "@/views/HomeContent.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/",
    name: "home",
    component: HomeContent,
  },
  {
    path: "/reservations",
    name: "reservations",
    component: ReservationsContent,
  },
  {
    path: "/contact-us",
    name: "contactus",
    component: ContactUs,
  },
  {
    path: "/gastronomy",
    name: "gastronomy",
    component: Gastronomy,
  },
  {
    path: "/rooms",
    name: "rooms",
    component: Rooms,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
