<template>
  <div v-if="icon">
    <component :is="icon" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, shallowRef } from 'vue';

const props = withDefaults(
  defineProps<{
    name: string;
  }>(),
  {
    name: '',
  }
);

// use shallowRef to remove unnecessary optimizations
const icon = shallowRef('');

import(`../svg/${props.name}.vue`).then((val) => {
  // val is a Module has default
  icon.value = val.default;
});
</script>
