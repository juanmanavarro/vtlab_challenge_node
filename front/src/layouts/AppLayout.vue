<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Navbar</span>
        <a href="#" @click.prevent="logout">Logout</a>
      </div>
    </nav>
  </header>
  <main class="container pt-5">
    <div class="row">
      <div class="col d-flex align-items-center">
        <slot name="title"></slot>
      </div>
    </div>
    <slot name="content" />
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const logout = () => router.replace({ name: 'login' })
</script>
