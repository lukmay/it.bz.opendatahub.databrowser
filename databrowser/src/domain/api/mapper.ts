import { ref, Ref, toRaw, watch } from 'vue';
import {
  isWithArrayPagination,
  isWithTourismPagination,
  PaginationData,
  WithTourismPagination,
} from './types';

export const tourismPaginatedMapper = (
  data: WithTourismPagination
): PaginationData => {
  const total = data.TotalResults;

  const sizeHasDivider = total % data.TotalPages !== 0;
  const size = Math.floor(total / data.TotalPages) + (sizeHasDivider ? 1 : 0);
  const page = data.CurrentPage;

  return {
    items: data.Items,
    pagination: {
      total,
      page,
      size,
    },
  };
};

export const arrayPaginatedMapper = (
  data: unknown[],
  context: {
    defaultQueryParameters: Record<string, string>;
    queryParameters: Record<string, string>;
  }
): PaginationData => {
  const total = data.length;

  // Set default page size if not defined
  const queryParametersWithPageSize = {
    ...toRaw(context.defaultQueryParameters),
    ...toRaw(context.queryParameters),
  };

  const size = parseInt(queryParametersWithPageSize.pagesize, 10);

  const pageNumberFromFilter = parseInt(queryParametersWithPageSize.pagenumber);

  const page = pageNumberFromFilter ?? 1;

  const start = (page - 1) * size;
  const items = data.slice(page, start + size);

  return {
    items,
    pagination: {
      total,
      page,
      size,
    },
  };
};

export const useListMapper = (
  data: Ref<unknown>,
  context: {
    defaultQueryParameters: any;
    queryParameters: any;
  }
) => {
  const mappedData = ref<PaginationData>();

  watch(
    () => data.value,
    (data) => {
      if (isWithTourismPagination(data)) {
        mappedData.value = tourismPaginatedMapper(data);
      }

      if (isWithArrayPagination(data)) {
        const { queryParameters, defaultQueryParameters } = context;

        mappedData.value = arrayPaginatedMapper(data, {
          defaultQueryParameters,
          queryParameters,
        });
      }
    },
    { immediate: true }
  );

  return mappedData;
};