import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import OrderList from "../views/order/List.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/orders",
      name: "orders",
      component: OrderList,
    },
  ],
});

export default router;
