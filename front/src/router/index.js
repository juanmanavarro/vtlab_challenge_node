import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import OrderList from "../views/order/List.vue";
import OrderDetail from "../views/order/Detail.vue";

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
    {
      path: "/orders/:id",
      name: "order-detail",
      component: OrderDetail,
    },
  ],
});

export default router;
