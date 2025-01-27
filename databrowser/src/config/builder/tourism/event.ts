import { CellComponent } from '../../../domain/cellComponents/types';
import {
  DetailElements,
  PropertyConfig,
} from '../../../domain/datasetConfig/types';

export const eventDocumentCell = (): PropertyConfig => ({
  title: 'PDFs',
  component: CellComponent.EventDocumentCell,
  listFields: {
    attributeName: 'files',
    pathToParent: 'EventDocument',
    fields: {
      src: 'DocumentURL',
      language: 'Language',
    },
  },
});

export const eventDocumentCategory = (): DetailElements => ({
  name: 'Files',
  slug: 'files',
  subcategories: [
    {
      name: '',
      properties: [eventDocumentCell()],
    },
  ],
});
