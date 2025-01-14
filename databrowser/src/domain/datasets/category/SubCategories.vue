<template>
  <div>
    <h2 v-if="category != null" class="mb-5 hidden text-xl font-bold md:block">
      {{ category.name }}
    </h2>
    <div
      v-for="subcategory in subCategoriesWithValues"
      :key="subcategory.name"
      class="mb-4"
    >
      <h3 class="font-bold">{{ subcategory.name }}</h3>
      <ContentDivider class="my-1" />
      <div class="flex flex-col text-gray-500">
        <SubCategoryItem
          v-for="property in subcategory.properties"
          :key="property.title"
          :title="property.title"
          :tooltip="property.tooltip"
          :required="property.required"
          :errors="property.errors"
          :has-empty-value="property.empty"
          :data-test="`subcategory-item-${titleToDataTest(property.title)}`"
        >
          <ComponentRenderer
            :tag-name="property.component"
            :attributes="property.value"
            :fields="property.fields"
            :list-fields="property.listFields"
            :class="property.class"
            :editable="editable"
          />
        </SubCategoryItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import ComponentRenderer from '../../../components/componentRenderer/ComponentRenderer.vue';
import SubCategoryItem from './SubCategoryItem.vue';
import { Category, SubCategory } from './types';
import ContentDivider from '../../../components/content/ContentDivider.vue';
import { usePropertyComputation } from './usePropertyComputation';

const props = defineProps<{
  data: unknown;
  subCategories: SubCategory[];
  category?: Category;
  showAll?: boolean;
  editable?: boolean;
}>();

const { computeProperties } = usePropertyComputation();

const subCategoriesWithValues = computed(() =>
  props.subCategories.map((subCategory) => ({
    name: subCategory.name,
    properties: computeProperties(
      props.data,
      subCategory.properties,
      props.showAll ?? false,
      props.editable ?? false
    ),
  }))
);

const titleToDataTest = (title: string) => {
  return title.toLowerCase().replaceAll(' ', '-');
};
</script>
