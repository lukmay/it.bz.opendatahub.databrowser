import { Ref, watch } from 'vue';
import { useEditStore } from './store/editStore';
import { EditData } from './store/initialState';

export const useEditStoreSync = (
  data: Ref<any>,
  isMutateSuccess: Ref<boolean>,
  mutate: (data?: unknown) => unknown
) => {
  const editStore = useEditStore();

  watch(
    () => data.value as EditData,
    (dataValue) => {
      editStore.setInitial({ ...(dataValue ?? {}) });
      editStore.setCurrent({ ...(dataValue ?? {}) });
    },
    { immediate: true }
  );

  watch(
    () => isMutateSuccess.value,
    (isSuccessValue) => {
      if (isSuccessValue === true) {
        editStore.setInitial(editStore.current);
      }
    }
  );

  const mutateData = () => mutate(editStore.current);
  const resetData = () => editStore.setCurrent(editStore.initial);

  return { mutate: mutateData, reset: resetData };
};
