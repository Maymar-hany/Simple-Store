import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import Login from "@/modules/auth/components/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "",
        component: () => import("../modules/home/index"),
        children: [
          {
            path: "",
            name: "landingPage",
            component: () => import("../modules/home/components/landing-page"),
          },
        ],
      },
      {
        path: "item/:id",
        name: "item",
        component: () => import("@/modules/item/index"),
      },
      {
        path: "products",
        name: "products",
        component: () => import("@/modules/products/index"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/modules/auth/components/profile/index"),
      },
      {
        path: "/login",
        name: "auth",
        component: Login,
        meta: {
          noLayout: true,
          authPage: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
router.beforeEach((to, from, next) => {
  if (!to.meta.authPage && !store.getters.token) next({ name: "auth" });
  if (to.meta.authPage && store.getters.token)
    next({ name: "allProductsReport" });
  else next();
});
