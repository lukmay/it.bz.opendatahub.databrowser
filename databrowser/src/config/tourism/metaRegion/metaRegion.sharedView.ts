import { CellComponent } from '../../../domain/cellComponents/types';
import {
  DetailViewConfig,
  EditViewConfig,
} from '../../../domain/datasetConfig/types';
import {
  dataStatesSubCategory,
  gpsDataCategory,
  idAndCustomIdCells,
  imageGalleryCategory,
  mainImageCell,
  odhTagCategory,
  shortnameCell,
  sourceSubCategory,
  textInfoCategory,
} from '../../builder/tourism';

export const metaRegionSharedView = (): DetailViewConfig | EditViewConfig => ({
  elements: [
    {
      name: 'Main data',
      slug: 'main-data',
      subcategories: [
        {
          name: 'General data',
          properties: [shortnameCell(), mainImageCell()],
        },
        {
          name: 'IDs',
          properties: [
            ...idAndCustomIdCells(),
            {
              title: 'Tourismverein ID',
              component: CellComponent.ArrayCell,
              class: 'w-40',
              fields: {
                items: 'TourismvereinIds',
              },
              params: {
                separator: ', ',
              },
            },
            {
              title: 'Region Ids',
              component: CellComponent.ArrayCell,
              fields: {
                items: 'RegionIds',
              },
              params: {
                separator: ', ',
              },
            },
            {
              title: 'District Ids',
              component: CellComponent.ArrayCell,
              fields: {
                items: 'DistrictIds',
              },
              params: {
                separator: ', ',
              },
            },
          ],
        },
        dataStatesSubCategory({ hasVisibleInSearch: true }),
        sourceSubCategory(),
      ],
    },
    textInfoCategory(),
    imageGalleryCategory(),
    gpsDataCategory(),
    odhTagCategory(),
  ],
});
