import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/auth/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/auth/LoginView.vue"),
    },
    {
      path: "/addarticlesview",
      name: "addarticlesview",
      component: () => import("../views/admin/addArticlesView.vue"),
    },
    {
      path: "/getarticles",
      name: "getarticles",
      component: () => import("../views/admin/addArticlesView.vue"),
    },
    {
      path: "/indexadmin",
      name: "indexadmin",
      component: () => import("../views/admin/IndexAdminView.vue"),
      meta: { requiresAuth: true, role: "ROLE_ADMIN" },
    },
    {
      path: "/indexuser",
      name: "indexuser",
      component: () => import("../views/user/IndexUserView.vue"),
      meta: { requiresAuth: true, role: "ROLE_USER" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
