<template>
  <div class="flex w-full justify-between bg-green-500">
    <EditFooterButton
      :class="[{ 'opacity-50': isSaving }]"
      :disabled="isSaving"
      @click="cancel"
    >
      <IconClose class="mr-2" />
      <span class="inline md:hidden">
        {{ t('datasets.editView.footer.cancelMobile') }}
      </span>
      <span class="hidden md:inline">
        {{ t('datasets.editView.footer.cancel') }}
      </span>
    </EditFooterButton>
    <EditFooterButton v-if="isSaving" :disabled="isSaving">
      <IconLoading class="mr-2 h-4" />
      {{ t('datasets.editView.footer.saving') }}
    </EditFooterButton>
    <EditFooterButton v-else @click="save">
      <IconCheck class="mr-2" />
      <span class="inline md:hidden">
        {{ t('datasets.editView.footer.saveMobile') }}
      </span>
      <span class="hidden md:inline">
        {{ t('datasets.editView.footer.save') }}
      </span>
    </EditFooterButton>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, watch } from 'vue';
import EditFooterButton from './EditFooterButton.vue';
import IconClose from '../../../components/svg/IconClose.vue';
import IconCheck from '../../../components/svg/IconCheck.vue';
import { useMagicKeys } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import IconLoading from '../../../components/svg/IconLoading.vue';

const { t } = useI18n();

const props = defineProps<{ isSaving: boolean }>();

const emit = defineEmits(['cancel', 'save']);

const { alt_s, escape } = useMagicKeys();

const cancel = () => emit('cancel');
const save = () => emit('save');

watch(escape, (key) => {
  if (key && !props.isSaving) {
    cancel();
  }
});

watch(alt_s, (key) => {
  if (key && !props.isSaving) {
    save();
  }
});
</script>
