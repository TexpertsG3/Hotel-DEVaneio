/* eslint-disable prettier/prettier*/
import { createRouter, createWebHistory } from "vue-router";
import HomeAdmin from "@/views/admin/HomeContent.vue";
import Guests from "@/views/admin/Guests.vue";
import Employees from "@/views/admin/Employees.vue";
import ReservationsAdmin from "@/views/admin/ReservationsAdmin.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/HomeAdmin",
    name: "homeAdmin",
    component: HomeAdmin,
  },
  {
    path: "/Guests",
    name: "guests",
    component: Guests,
  },
  {
    path: "/Employees",
    name: "employees",
    component: Employees,
  },
  {
    path: "/ReservationsAdmin",
    name: "reservationsAdmin",
    component: ReservationsAdmin,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];
const routerAdmin = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default routerAdmin;
