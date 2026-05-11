<script setup lang="ts">
import { ref } from 'vue';
import { Button, Input } from '@bingwu-my-monorepo/vue3-best-ui';

const inputValue = ref('');
const clickMessage = ref('Waiting for interaction');

const handleInput = (value: string) => {
  inputValue.value = value;
};

const handleButtonClick = () => {
  clickMessage.value = `Button clicked with input: ${inputValue.value || 'empty'}`;
};

const handleInputClick = (value: string) => {
  clickMessage.value = `Input search clicked: ${value || 'empty'}`;
};
</script>

<template>
  <div class="package-components-demo">
    <Button text="Package Button" @click="handleButtonClick">
      <span>Slot content</span>
    </Button>

    <Input
      :value="inputValue"
      placeholder="Type something"
      @input="handleInput"
      @click="handleInputClick"
    />

    <p>{{ clickMessage }}</p>
  </div>
</template>

<style scoped>
.package-components-demo {
  display: grid;
  gap: 16px;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
</style>
