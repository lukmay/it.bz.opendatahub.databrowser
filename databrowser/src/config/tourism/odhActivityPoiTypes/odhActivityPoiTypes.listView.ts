import { ListViewConfig } from '../../../domain/datasetConfig/types';
import { CellComponent } from '../../../domain/cellComponents/types';
import { idReadOnlyCell } from '../../builder/tourism';

export const odhActivityPoiTypesListView: ListViewConfig = {
  elements: [
    idReadOnlyCell(),
    {
      title: 'Key',
      component: CellComponent.StringCell,
      class: 'w-40',
      fields: {
        text: 'Key',
      },
    },
    {
      title: 'Type',
      component: CellComponent.StringCell,
      class: 'w-40',
      fields: {
        text: 'Type',
      },
    },
    {
      title: 'TypeDesc',
      component: CellComponent.StringCell,
      class: 'w-40',
      fields: {
        text: 'TypeDesc.{language}',
      },
    },
  ],
};
