import { Operations } from '../../../domain/datasetConfig/types';
import {
  extendCreateRoles,
  extendDeleteRoles,
  extendUpdateRoles,
  ROLE_READ,
} from '../roles';

export const weatherRealTimeOperations: Operations = {
  readAll: {
    rolesAllowed: ROLE_READ,
  },
  read: {
    rolesAllowed: ROLE_READ,
  },
  create: {
    rolesAllowed: extendCreateRoles([
      'WeatherRealTimeManager',
      'WeatherRealTimeCreate',
    ]),
  },
  update: {
    rolesAllowed: extendUpdateRoles([
      'WeatherRealTimeManager',
      'WeatherRealTimeUpdate',
    ]),
  },
  delete: {
    rolesAllowed: extendDeleteRoles([
      'WeatherRealTimeManager',
      'WeatherRealTimeDelete',
    ]),
  },
};
