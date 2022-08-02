<template>
  <main class="container d-flex align-items-center justify-content-center">
    <div class="card">
      <div class="card-header">Login</div>
      <div class="card-body">
        <form @submit.prevent="login">
          <input class="form-control mb-2" type="text" placeholder="Username" />
          <input
            class="form-control mb-2"
            type="text"
            placeholder="Password"
            v-model="password"
          />
          <button class="btn btn-primary btn-sm float-end" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const password = ref("abcaa");

const login = async () => {
  const isAuthed = await store.dispatch("auth/login", {
    password: password.value,
  });
  if (!isAuthed) return;
  router.push({ name: "orders" });
};
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
