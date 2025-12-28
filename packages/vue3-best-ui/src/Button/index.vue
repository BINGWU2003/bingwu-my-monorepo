<template>
  <div class="button">
    <slot />
    <button @click="emit('click')">{{ props.text }} {{ id }} {{ date }}</button>
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps, ButtonEmits } from './types';
import { generateId, formatDate } from '@bingwu-my-monorepo/shared';
const props = withDefaults(defineProps<ButtonProps>(), {
  text: 'Button',
});
const emit = defineEmits<ButtonEmits>();
const id = generateId();
const date = formatDate(new Date());
</script>

<style scoped lang="scss">
.button {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
