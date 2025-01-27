import { Operations } from '../../../domain/datasetConfig/types';
import {
  extendCreateRoles,
  extendDeleteRoles,
  extendUpdateRoles,
  ROLE_READ,
} from '../roles';

export const metaDataOperations: Operations = {
  readAll: {
    rolesAllowed: ROLE_READ,
  },
  read: {
    rolesAllowed: ROLE_READ,
  },
  create: {
    rolesAllowed: extendCreateRoles(['MetaDataManager', 'MetaDataCreate']),
  },
  update: {
    rolesAllowed: extendUpdateRoles(['MetaDataManager', 'MetaDataUpdate']),
  },
  delete: {
    rolesAllowed: extendDeleteRoles(['MetaDataManager', 'MetaDataDelete']),
  },
};
