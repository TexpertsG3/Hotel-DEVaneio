import { createRouter, createWebHistory } from "vue-router";
import about from "../views/about.vue";
import Gastronomy from "../components/Gastronomy.vue";
import MainContent from "../components/MainContent.vue";

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
    component: MainContent
  },
  {
    path: "/Gastronomy",
    name: "gastronomy",
    component: Gastronomy
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes

});

export default router;

