import { createRouter, createWebHistory } from "vue-router";
import { Home, About, NotFound } from "../views";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  // redirect
  {
    path: "/home",
    redirect: "/",
  },
  // catchAll
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
