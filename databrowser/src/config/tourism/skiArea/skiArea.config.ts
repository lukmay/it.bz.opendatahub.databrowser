import { DatasetConfig } from '../../../domain/datasetConfig/types';
import { domains } from '../../../domain/openApi';
import { skiAreaDescription } from './skiArea.description';
import { skiAreaOperations } from './skiArea.operations';
import { skiAreaViews } from './skiArea.views';
import { skiAreaRoute } from './skiArea.route';

export const skiAreaConfig: DatasetConfig = {
  source: 'embedded',
  baseUrl: domains.tourism.baseUrl,
  route: skiAreaRoute,
  description: skiAreaDescription,
  views: skiAreaViews,
  operations: skiAreaOperations,
};
