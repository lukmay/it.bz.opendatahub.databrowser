<template>
  <QuickViewCardOverview
    :title="t('datasets.quickView.textInformation')"
    :sections="textInformationSections"
  />
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';
import { useI18n } from 'vue-i18n';

import { getTextValue } from './QuickViewUtils';

import QuickViewCardOverview from './QuickViewCardOverview.vue';

const { t } = useI18n();

const props = withDefaults(
  defineProps<{
    header?: string;
    subHeader?: string;
    introText?: string;
  }>(),
  {
    header: '',
    subHeader: '',
    introText: '',
  }
);

const textInformationSections = computed(() => {
  return [
    {
      content: [
        {
          title: 'Header',
          text: getTextValue(props.header),
        },
        {
          title: 'Subheader',
          text: getTextValue(props.subHeader),
        },
        {
          title: 'Introtext',
          text: getTextValue(props.introText),
        },
      ],
    },
  ];
});
</script>
