<template>
  <ListboxOptions
    :unmount="false"
    class="max-h-60 overflow-auto bg-white text-base focus-visible:outline-none"
  >
    <ListboxOption
      v-for="option in searchResults"
      v-slot="{ active, selected }"
      :key="option.label"
      :value="option.value"
      as="template"
    >
      <li
        :class="[
          { 'bg-green-500 bg-opacity-10': active || selected },
          { 'text-green-500': selected },
          'relative cursor-pointer select-none pl-4 pr-8 py-1',
        ]"
      >
        <span :class="[{ 'font-semibold': selected }, 'block']">
          {{ option.label }}
        </span>
      </li>
    </ListboxOption>
  </ListboxOptions>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import { SelectOption } from './types';
import { ListboxOptions, ListboxOption } from '@headlessui/vue';

defineProps<{ searchResults: SelectOption[] }>();
defineEmits(['update:modelValue']);
</script>
