<template>
  <AppLayout>
    <template v-slot:title>
      <a href="#" class="text-decoration-none fs-3 me-2" @click.prevent="back">&lt;</a>
      <h2 class="mb-0">Order detail</h2>
    </template>
    <template v-slot:content>
      <Loading v-if="!order" />
      <table v-else class="table mt-4 w-50">
        <tbody>
          <tr>
            <th>Date</th>
            <td class="text-end">{{ order.when }}</td>
          </tr>
          <tr>
            <th>Origin</th>
            <td class="text-end">{{ order.origin.city }}</td>
          </tr>
          <tr>
            <th>Destination</th>
            <td class="text-end">{{ order.destination.city }}</td>
          </tr>
          <tr>
            <th>Products</th>
            <td class="text-end">{{ order.products.length }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </AppLayout>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";
import Loading from "@/components/Loading.vue";

const store = useStore();
const router = useRouter();
const route = useRoute();

const order = computed(() => store.state.order.order);

const back = () => router.push({ name: "orders" });

onMounted(() => {
  store.dispatch('order/get', route.params.id);
});
</script>
