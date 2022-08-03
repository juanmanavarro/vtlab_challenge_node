<template>
  <AppLayout>
    <template v-slot:title>
      <h2 class="mb-0">Orders list</h2>
    </template>
    <template v-slot:content>
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
            <td>{{ order.when }}</td> <!-- TODO format date -->
            <td>{{ order.origin.city }}</td>
            <td>{{ order.destination.city }}</td>
            <td>{{ order.products.length }}</td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col">
          <div class="d-flex align-items-center justify-content-end">
            <span>Visible rows:&nbsp;</span>
            <select
              class="form-select w-25"
              v-model="visibleRows"
              aria-label="Default select example"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>
      </div>
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

const visibleRows = ref(10);

const orders = computed(() => store.state.order.orders);

const show = (id) => router.push({ name: "order-detail", params: { id } });

onMounted(() => {
  store.dispatch('order/fetch');
});
</script>

<style scoped>
tbody > tr {
  cursor: pointer;
}
</style>
