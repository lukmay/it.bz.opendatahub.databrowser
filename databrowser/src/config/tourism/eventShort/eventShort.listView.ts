import { CellComponent } from '../../../domain/cellComponents/types';
import { ListViewConfig } from '../../../domain/datasetConfig/types';
import {
  languageTableCell,
  lastChangesTableCell,
  odhActiveTableCell,
} from '../../builder/tourism';
import { DEFAULT_DATE_TIME_FORMAT } from '../../utils';

export const eventShortListView: ListViewConfig = {
  elements: [
    {
      title: 'Title',
      component: CellComponent.StringCell,
      class: 'w-48',
      fields: { text: 'EventTitle.{language}' },
    },
    {
      title: 'Date start',
      component: CellComponent.EditedDateCell,
      class: 'w-48',
      fields: { date: 'StartDate' },
      params: { format: DEFAULT_DATE_TIME_FORMAT },
    },
    {
      title: 'Date end',
      component: CellComponent.EditedDateCell,
      class: 'w-48',
      fields: { date: 'EndDate' },
      params: { format: DEFAULT_DATE_TIME_FORMAT },
    },
    {
      title: 'Rooms',
      component: CellComponent.TypeBasedCell,
      class: 'w-40',
      fields: { data: 'AnchorVenue' },
    },
    {
      title: 'Location',
      component: CellComponent.StringCell,
      class: 'w-48',
      fields: { text: 'EventLocation' },
    },
    languageTableCell(),
    lastChangesTableCell(),
    odhActiveTableCell(),
  ],
};
