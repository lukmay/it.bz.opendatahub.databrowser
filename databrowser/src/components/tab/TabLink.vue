<template>
  <ButtonLink variant="ghost" size="sm" :class="classes" :to="to">
    {{ label }}
  </ButtonLink>
</template>

<script lang="ts" setup>
import { defineProps, toRefs } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import ButtonLink from '../button/ButtonLink.vue';
import { useTabClasses } from './useTabClasses';

const props = defineProps<{
  label: string;
  to: RouteLocationRaw;
  active?: boolean;
}>();

const { active } = toRefs(props);

const classes = useTabClasses(active);
</script>

<style scoped>
@import './styles.css';
</style>
