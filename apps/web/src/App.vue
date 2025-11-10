<script setup lang="ts">
import { ref, onMounted } from "vue";
import { formatDate, generateId } from "@bingwu-my-monorepo/shared";

const currentDate = ref("");
const uniqueId = ref("");

onMounted(() => {
  currentDate.value = formatDate(new Date());
  uniqueId.value = generateId();
});
</script>

<template>
  <div class="app">
    <h1>My Monorepo Web App</h1>
    <p>Current Date: {{ currentDate }}</p>
    <p>Unique ID: {{ uniqueId }}</p>
  </div>
</template>

<style scoped>
.app {
  padding: 2rem;
  font-family: sans-serif;
}

h1 {
  color: #42b883;
}
</style>
