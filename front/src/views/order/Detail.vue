<template>
  <AppLayout>
    <h1>Order detail</h1>
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'

const router = useRouter()

const visibleRows = ref(10);

const show = (id) => router.push({ name: 'order-detail', params: { id } })
</script>
