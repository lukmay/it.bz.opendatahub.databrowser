import { Operations } from '../../../domain/datasetConfig/types';
import {
  extendCreateRoles,
  extendDeleteRoles,
  extendUpdateRoles,
  ROLE_READ,
} from '../roles';

export const measuringPointOperations: Operations = {
  readAll: {
    rolesAllowed: ROLE_READ,
  },
  read: {
    rolesAllowed: ROLE_READ,
  },
  create: {
    rolesAllowed: extendCreateRoles([
      'MeasuringPointManager',
      'MeasuringPointCreate',
    ]),
  },
  update: {
    rolesAllowed: extendUpdateRoles([
      'MeasuringPointManager',
      'MeasuringPointUpdate',
    ]),
  },
  delete: {
    rolesAllowed: extendDeleteRoles([
      'MeasuringPointManager',
      'MeasuringPointDelete',
    ]),
  },
};
