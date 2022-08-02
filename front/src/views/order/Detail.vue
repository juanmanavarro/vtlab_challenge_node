<template>
  <AppLayout>
    <template v-slot:title>
      <button class="btn btn-link text-decoration-none fs-2" @click="back">
        {{ "<" }}
      </button>
      <h1 class="mb-0">Order detail</h1>
    </template>
    <template v-slot:content>
      <table class="table mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </template>
  </AppLayout>
</template>

<script setup>
import { useRouter } from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";

const router = useRouter();

const back = () => router.push({ name: "orders" });
</script>
