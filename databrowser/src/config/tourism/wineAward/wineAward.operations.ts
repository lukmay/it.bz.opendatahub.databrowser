import { Operations } from '../../../domain/datasetConfig/types';
import {
  extendCreateRoles,
  extendDeleteRoles,
  extendUpdateRoles,
  ROLE_READ,
} from '../roles';

export const wineAwardOperations: Operations = {
  readAll: {
    rolesAllowed: ROLE_READ,
  },
  read: {
    rolesAllowed: ROLE_READ,
  },
  create: {
    rolesAllowed: extendCreateRoles(['WineAwardManager', 'WineAwardCreate']),
  },
  update: {
    rolesAllowed: extendUpdateRoles(['WineAwardManager', 'WineAwardUpdate']),
  },
  delete: {
    rolesAllowed: extendDeleteRoles(['WineAwardManager', 'WineAwardDelete']),
  },
};
