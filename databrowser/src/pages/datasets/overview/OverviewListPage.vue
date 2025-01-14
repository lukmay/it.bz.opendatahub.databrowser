<template>
  <AppLayout>
    <HeroContainer>
      <HeroTitle>
        {{ t('overview.listPage.listOfAllDatasets') }}
      </HeroTitle>
      <router-link
        to="/links"
        class="text-green-500"
        data-test="all-endpoints-link"
      >
        {{ t('overview.listPage.showAllEndpoints') }}
      </router-link>
    </HeroContainer>

    <PageGridContent>
      <SelectWithLabel
        id="access-of-data"
        class="md:w-1/6"
        :label="t('overview.listPage.accessOfData')"
        :options="accessTypeOptions"
        :value="currentAccessType"
        @change="currentAccessType = $event"
      />
      <OverviewCardItem
        v-for="(dataset, index) in results"
        :key="index"
        :dataset="dataset"
        :data-test="`dataset-card-${dataset.id}`"
      />

      <CardDivider />

      <PartnersAndContributors />
    </PageGridContent>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '../../../layouts/AppLayout.vue';
import HeroContainer from '../../../components/hero/HeroContainer.vue';
import HeroTitle from '../../../components/hero/HeroTitle.vue';
import { computed, ref } from 'vue';
import { SelectOption } from '../../../components/select/types';
import SelectWithLabel from '../../../components/select/SelectWithLabel.vue';
import OverviewCardItem from './OverviewCardItem.vue';
import PartnersAndContributors from '../../../components/partners/PartnersAndContributors.vue';
import CardDivider from '../../../components/card/CardDivider.vue';
import PageGridContent from '../../../components/content/PageGridContent.vue';
import { useMetaDataQuery } from '../../../domain/metaDataConfig/tourism/useMetaDataQuery';
import { TourismMetaData } from '../../../domain/metaDataConfig/tourism/types';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const metaData = useMetaDataQuery();
const results = computed<TourismMetaData[]>(() => {
  const datasets = metaData.data?.value ?? [];
  if (currentAccessType.value === 'opendata') {
    return datasets.filter((dataset) => dataset.access === 'opendata');
  } else if (currentAccessType.value === 'limited') {
    return datasets.filter(
      (dataset) => dataset.access === 'limited' || dataset.access === 'closed'
    );
  }
  return datasets;
});

const currentAccessType = ref('all');

const accessTypeOptions = computed<SelectOption[]>(() => [
  {
    label: t('overview.listPage.accessTypeAll'),
    value: 'all',
  },
  {
    label: t('overview.listPage.accessTypeOpen'),
    value: 'opendata',
  },
  {
    label: t('overview.listPage.accessTypeLimited'),
    value: 'limited',
  },
]);
</script>
