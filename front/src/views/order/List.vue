<template>
  <AppLayout>
    <template v-slot:title>
      <h2 class="mb-0">Orders list</h2>
    </template>
    <template v-slot:content>
      <div class="row mt-5">
        <div class="col">
          <!-- TODO improve pagination UX -->
          <div class="d-flex align-items-center justify-content-start">
            <span>Page&nbsp;</span>
            <select
              class="form-select w-25"
              aria-label="Paginator select"
              v-model="page"
              @change="ordersRequest"
            >
              <!-- TODO truncated to 10 pages  -->
              <option v-for="page in 10" :key="page" :value="page">
                {{ page }}
              </option>
            </select>
            <span>&nbsp;of {{ pages }}</span>
          </div>
        </div>
        <div class="col">
          <div class="d-flex align-items-center justify-content-end">
            <span>Visible rows:&nbsp;</span>
            <select
              class="form-select w-25"
              aria-label="Limiter select"
              v-model="limit"
              @change="ordersRequest"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>
      </div>
      <table class="table mt-4 table-hover">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Origin</th>
            <th scope="col">Destination</th>
            <th scope="col">Products</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order._id" @click="show(order._id)">
            <td>{{ order.when }}</td>
            <!-- TODO format date -->
            <td>{{ order.origin.city }}</td>
            <td>{{ order.destination.city }}</td>
            <td>{{ order.products.length }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </AppLayout>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const limit = ref("10");
const page = ref("1");

const orders = computed(() => store.state.order.orders);
const pages = computed(() => {
  const { totalResults, query } = store.state.order;
  return totalResults / query.limit;
});

const show = (id) => router.push({ name: "order-detail", params: { id } });
const ordersRequest = () => {
  store.dispatch("order/fetch", {
    limit: limit.value,
    page: page.value.toString(),
  });
};

onMounted(() => {
  limit.value = store.state.order.query.limit;
  page.value = store.state.order.query.page;
  ordersRequest();
});
</script>

<style scoped>
tbody > tr {
  cursor: pointer;
}
</style>
