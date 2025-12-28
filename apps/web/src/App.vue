<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { formatDate, generateId } from '@bingwu-my-monorepo/shared';
import { Button, Input } from '@bingwu-my-monorepo/vue3-best-ui';
const currentDate = ref('');
const uniqueId = ref('');

onMounted(() => {
  currentDate.value = formatDate(new Date());
  uniqueId.value = generateId();

  console.log('currentDate', currentDate.value);
});

const handleClick = () => {
  console.log('Button clicked');
};

const handleInput = (value: string) => {
  console.log('Input value:', value);
};

const handleInputClick = () => {
  console.log('Input clicked');
};
</script>

<template>
  <div class="app">
    <h1>My Monorepo Web App</h1>
    <p>Current Date: {{ currentDate }}</p>
    <p>Unique ID: {{ uniqueId }}</p>
    <Button text="Click me" @click="handleClick" />
    <Input placeholder="Input" value="Hello" @input="handleInput" @click="handleInputClick" />
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
