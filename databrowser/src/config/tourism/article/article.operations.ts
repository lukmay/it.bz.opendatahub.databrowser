import { Operations } from '../../../domain/datasetConfig/types';
import {
  extendCreateRoles,
  extendDeleteRoles,
  extendUpdateRoles,
  ROLE_READ,
} from '../roles';

export const articleOperations: Operations = {
  readAll: {
    rolesAllowed: ROLE_READ,
  },
  read: {
    rolesAllowed: ROLE_READ,
  },
  create: {
    rolesAllowed: extendCreateRoles(['ArticleManager', 'ArticleCreate']),
  },
  update: {
    rolesAllowed: extendUpdateRoles(['ArticleManager', 'ArticleUpdate']),
  },
  delete: {
    rolesAllowed: extendDeleteRoles(['ArticleManager', 'ArticleDelete']),
  },
};
