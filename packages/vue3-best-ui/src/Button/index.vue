<template>
  <div class="button">
    <slot></slot>
    <button @click="emit('click')">{{ props.text }}</button>
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps, ButtonEmits } from "./types";

const props = withDefaults(defineProps<ButtonProps>(), {
  text: "Button",
});
const emit = defineEmits<ButtonEmits>();
</script>

<style scoped lang="scss">
.button {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
