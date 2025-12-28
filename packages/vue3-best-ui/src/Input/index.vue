<template>
  <div class="input">
    <input
      :placeholder="props.placeholder"
      :value="props.value"
      class="input-field"
      @input="handleInput"
    />
    <button class="input-button" @click="handleClick">Search</button>
  </div>
</template>

<script setup lang="ts">
import type { InputProps, InputEmits } from './types';

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: 'Input',
  value: '',
});
const emit = defineEmits<InputEmits>();

const handleInput = (event: Event) => {
  emit('input', (event.target as HTMLInputElement).value);
};

const handleClick = () => {
  emit('click', props.value);
};
</script>

<style scoped lang="scss">
.input {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .input-field {
    flex: 1;
    border: none;
    outline: none;
  }
  .input-button {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    outline: none;
  }
}
</style>
