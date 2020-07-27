import Vue from "vue";
import Router from "vue-router";

const routerOptions = [
  { path: "/", component: "Landing" },
  { path: "/price", component: "price" },
  { path: "/product", component: "product" },
  { path: "/contact", component: "contact" },
  { path: "/landing", component: "Landing", meta: { requiresAuth: true } },
  { path: "*", component: "NotFound" }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../components/${route.component}.vue`)
  };
});

Vue.use(Router);

export default new Router({
  mode: "history",
  routes
});
