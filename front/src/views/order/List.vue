<template>
  <AppLayout>
    <template v-slot:title>
      <h2 class="mb-0">Orders list</h2>
    </template>
    <template v-slot:content>
      <div class="alert alert-warning" v-if="!orders?.length">
        <strong>No data</strong>
      </div>
      <template v-else>
        <div class="row">
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
              <td>#</td>
              <th>Date</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Products</th>
            </tr>
          </thead>
          <draggable v-model="orders" handle=".draggable" tag="tbody">
            <tr
              class="draggable"
              v-for="[index, order] in orders.entries()"
              :key="order._id"
              @click="show(order._id)"
            >
              <th>{{ (page - 1) * limit + index + 1 }}</th>
              <td>{{ order.when }}</td>
              <!-- TODO format date -->
              <td>{{ order.origin.city }}</td>
              <td>{{ order.destination.city }}</td>
              <td>{{ order.products.length }}</td>
            </tr>
          </draggable>
        </table>
      </template>
    </template>
  </AppLayout>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";
import { useStore } from "vuex";
import { VueDraggableNext as draggable } from "vue-draggable-next";

const router = useRouter();
const store = useStore();

const limit = ref("10");
const page = ref("1");

const orders = computed({
  get: () => store.state.order.orders,
  set: (orders) => store.dispatch("order/reorder", orders),
});
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
