import { CellComponent } from '../../../domain/cellComponents/types';
import { DetailViewConfig } from '../../../domain/datasetConfig/types';

export const eventShortDetailView: DetailViewConfig = {
  elements: [
    {
      name: 'Main data',
      slug: 'main-data',
      subcategories: [
        {
          name: 'General data',
          properties: [
            {
              title: 'Shortname',
              component: CellComponent.StringCell,
              fields: { text: 'Shortname' },
            },
            {
              title: 'Event location',
              component: CellComponent.StringCell,
              fields: { text: 'EventLocation' },
            },
          ],
        },
        {
          name: 'IDs',
          properties: [
            {
              title: 'ID',
              component: CellComponent.StringCell,
              fields: { text: 'Id' },
              class: 'break-all',
            },
          ],
        },
        {
          name: 'Data states',
          properties: [
            {
              title: 'Last Changes',
              component: CellComponent.DateCell,
              fields: { date: 'LastChange' },
              params: {
                format: 'd/M/yyyy HH:mm',
              },
            },
            {
              title: 'Start date',
              component: CellComponent.DateCell,
              fields: { date: 'StartDate' },
              params: {
                format: 'd/M/yyyy HH:mm',
              },
            },
            {
              title: 'End date',
              component: CellComponent.DateCell,
              fields: { date: 'EndDate' },
              params: {
                format: 'd/M/yyyy HH:mm',
              },
            },
          ],
        },
        {
          name: 'Source',
          properties: [
            {
              title: 'Source',
              component: CellComponent.StringCell,
              fields: { text: 'Source' },
            },
          ],
        },
      ],
    },
    {
      name: 'Text information',
      slug: 'text-information',
      subcategories: [
        {
          name: 'General data',
          properties: [
            {
              title: 'Shortname',
              component: CellComponent.StringCell,
              fields: { text: 'Shortname' },
            },
          ],
        },
        {
          name: 'Description',
          properties: [
            {
              title: 'Event description',
              component: CellComponent.StringCell,
              fields: { text: 'EventDescription' },
            },
            {
              title: 'Event description DE',
              component: CellComponent.StringCell,
              fields: { text: 'EventDescriptionDE' },
            },
            {
              title: 'Event description IT',
              component: CellComponent.StringCell,
              fields: { text: 'EventDescriptionIT' },
            },
            {
              title: 'Event description EN',
              component: CellComponent.StringCell,
              fields: { text: 'EventDescriptionEN' },
            },
          ],
        },
      ],
    },
    {
      name: 'Company',
      slug: 'company',
      subcategories: [
        {
          name: 'Name and Company Data',
          properties: [
            {
              title: 'Name',
              component: CellComponent.StringCell,
              fields: { text: 'CompanyName' },
            },
            {
              title: 'Company ID',
              component: CellComponent.StringCell,
              fields: { text: 'CompanyId' },
            },
          ],
        },
        {
          name: 'Address',
          properties: [
            {
              title: 'Street and House No',
              component: CellComponent.StringCell,
              fields: { text: 'CompanyAddressLine1' },
            },
            {
              title: 'ZIP-Code',
              component: CellComponent.StringCell,
              fields: { text: 'CompanyPostalCode' },
            },
            {
              title: 'City',
              component: CellComponent.StringCell,
              fields: { text: 'CompanyCity' },
            },
            {
              title: 'Country',
              component: CellComponent.StringCell,
              fields: { text: 'CompanyCountry' },
            },
          ],
        },
        {
          name: 'Contact Details',
          properties: [
            {
              title: 'E-Mail',
              component: CellComponent.StringCell,
              fields: { text: 'CompanyMail' },
            },
            {
              title: 'Phone Number',
              component: CellComponent.StringCell,
              fields: { text: 'CompanyPhone' },
            },
            {
              title: 'Web-URL',
              component: CellComponent.StringCell,
              fields: { text: 'CompanyUrl' },
            },
          ],
        },
      ],
    },
    {
      name: 'Contact',
      slug: 'contact',
      subcategories: [
        {
          name: 'Name',
          properties: [
            {
              title: 'Name',
              component: CellComponent.StringCell,
              fields: { text: 'ContactFirstName' },
            },
            {
              title: 'Surname',
              component: CellComponent.StringCell,
              fields: { text: 'ContactLastName' },
            },
          ],
        },
        {
          name: 'Address',
          properties: [
            {
              title: 'Street and House No',
              component: CellComponent.StringCell,
              fields: { text: 'ContactAddressLine1' },
            },
            {
              title: 'ZIP-Code',
              component: CellComponent.StringCell,
              fields: { text: 'ContactPostalCode' },
            },
            {
              title: 'City',
              component: CellComponent.StringCell,
              fields: { text: 'ContactCity' },
            },
            {
              title: 'Country',
              component: CellComponent.StringCell,
              fields: { text: 'ContactCountry' },
            },
          ],
        },
        {
          name: 'Contact Details',
          properties: [
            {
              title: 'E-Mail',
              component: CellComponent.StringCell,
              fields: { text: 'ContactEmail' },
            },
            {
              title: 'Phone Number',
              component: CellComponent.StringCell,
              fields: { text: 'ContactPhone' },
            },
          ],
        },
      ],
    },
    {
      name: 'Location',
      slug: 'location',
      subcategories: [
        {
          name: 'Location',
          properties: [
            {
              title: 'Eventlocation',
              component: CellComponent.StringCell,
              fields: { text: 'EventLocation' },
            },
          ],
        },
        {
          name: 'Rooms',
          properties: [
            {
              title: 'Anchor venue room',
              component: CellComponent.StringCell,
              fields: { text: 'AnchorVenueRoomMapping' },
            },
            {
              title: 'Rooms booked',
              component: CellComponent.TypeBasedCell,
              fields: { data: 'RoomBooked' },
            },
          ],
        },
      ],
    },
  ],
};