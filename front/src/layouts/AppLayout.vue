<template>
  <header>
    <nav :class="`navbar navbar-${theme ? 'dark' : 'light'} bg-${theme ? 'dark' : 'light'}`">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Vtlab Challenge Node Frontend <span v-if="theme">😉</span></span>
        <div class="d-flex align-items-center justify-content-end">
          <a class="me-2" href="#" @click.prevent="logout">Logout</a>
          <div class="form-check form-switch d-inline mb-0">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              v-model="theme"
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main class="container pt-5">
    <div class="row mb-5">
      <div class="col d-flex align-items-center">
        <slot name="title"></slot>
      </div>
    </div>
    <slot name="content" />
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const theme = ref(false);

const logout = () => {
  store.dispatch("auth/logout");
  router.replace({ name: "login" });
};

onMounted(() => {
  if (
    !store.state.auth.isAuthed
    && !localStorage.getItem("isAuthed") === "true"
  ) {
    router.replace({ name: "login" });
  } else {
    store.commit(
      "auth/setIsAuthed",
      localStorage.getItem("isAuthed") === "true"
    );
  }
});
</script>
