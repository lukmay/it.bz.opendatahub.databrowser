import { ListViewConfig } from '../../../domain/datasetConfig/types';
import { CellComponent } from '../../../domain/cellComponents/types';
import { DEFAULT_DATE_FORMAT } from '../../utils';

export const weatherDistrictListView: ListViewConfig = {
  elements: [
    {
      title: 'Image',
      component: CellComponent.ImageCell,
      class: 'w-40',
      fields: {
        src: 'BezirksForecast.0.WeatherImgUrl',
      },
    },
    {
      title: 'Date',
      component: CellComponent.DateCell,
      class: 'w-48',
      params: {
        format: DEFAULT_DATE_FORMAT,
      },
      fields: {
        date: 'BezirksForecast.0.date',
      },
    },
    {
      title: 'District name',
      component: CellComponent.StringCell,
      class: 'w-48',
      fields: {
        text: 'DistrictName',
      },
    },
    {
      title: 'Weather description',
      component: CellComponent.StringCell,
      class: 'w-48',
      fields: {
        text: 'BezirksForecast.0.WeatherDesc',
      },
    },
    {
      title: 'Max Temperature',
      component: CellComponent.StringCell,
      class: 'w-36',
      fields: {
        text: 'BezirksForecast.0.MaxTemp',
      },
    },
    {
      title: 'Min Temperature',
      component: CellComponent.StringCell,
      class: 'w-36',
      fields: {
        text: 'BezirksForecast.0.MinTemp',
      },
    },
    {
      title: 'Last updated',
      component: CellComponent.EditedDateCell,
      class: 'w-40',
      fields: {
        date: 'date',
      },
      params: {
        format: DEFAULT_DATE_FORMAT,
      },
    },
    {
      title: 'Source',
      component: CellComponent.UrlCell,
      class: 'w-36',
      fields: {
        text: 'LicenseInfo.LicenseHolder',
      },
    },
  ],
};
