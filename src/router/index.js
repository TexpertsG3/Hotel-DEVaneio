import { createRouter, createWebHistory } from 'vue-router';
// eslint-disable-next-line import/no-unresolved
import AboutContent from '@/views/AboutContent.vue';
// eslint-disable-next-line import/no-unresolved
import GastronomyContent from '@/views/GastronomyContent.vue';
// eslint-disable-next-line import/no-unresolved
import RoomsContent from '@/views/RoomsContent.vue';
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
    component: AboutContent,
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
    component: GastronomyContent,
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: RoomsContent,
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
