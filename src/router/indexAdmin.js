import { createRouter, createWebHistory } from 'vue-router';
// eslint-disable-next-line import/no-unresolved
import HomeAdmin from '@/views/admin/HomeContent.vue';
// eslint-disable-next-line import/no-unresolved
import Guests from '@/views/admin/Guests.vue';
// eslint-disable-next-line import/no-unresolved
import Employees from '@/views/admin/Employees.vue';
// eslint-disable-next-line import/no-unresolved
import ReservationsAdmin from '@/views/admin/ReservationsAdmin.vue';
// eslint-disable-next-line import/no-unresolved
import LoginView from '@/views/LoginView.vue';

const routes = [
  {
    path: '/HomeAdmin',
    name: 'homeAdmin',
    component: HomeAdmin,
  },
  {
    path: '/Guests',
    name: 'guests',
    component: Guests,
  },
  {
    path: '/Employees',
    name: 'employees',
    component: Employees,
  },
  {
    path: '/ReservationsAdmin',
    name: 'reservationsAdmin',
    component: ReservationsAdmin,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
];
const routerAdmin = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default routerAdmin;
