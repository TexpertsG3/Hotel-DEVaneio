import { createRouter, createWebHistory } from 'vue-router';
// eslint-disable-next-line import/no-unresolved
import about from '@/views/AboutContent.vue';
// eslint-disable-next-line import/no-unresolved
import Gastronomy from '@/views/GastronomyContent.vue';
// eslint-disable-next-line import/no-unresolved
import Rooms from '@/views/RoomsContent.vue';
// eslint-disable-next-line import/no-unresolved
import ContactUs from '@/views/ContactUs.vue';
// eslint-disable-next-line import/no-unresolved
import ReservationsContent from '@/views/ReservationsContent.vue';
// eslint-disable-next-line import/no-unresolved
import HomeContent from '@/views/HomeContent.vue';
// eslint-disable-next-line import/no-unresolved
import LoginView from '@/views/LoginView.vue';

const routes = [
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/',
    name: 'home',
    component: HomeContent,
  },
  {
    path: '/reservations',
    name: 'reservations',
    component: ReservationsContent,
  },
  {
    path: '/contact-us',
    name: 'contactus',
    component: ContactUs,
  },
  {
    path: '/gastronomy',
    name: 'gastronomy',
    component: Gastronomy,
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: Rooms,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
