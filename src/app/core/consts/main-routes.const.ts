import { RouteNameEnum } from '../enums/route-name.enum';
import { RouteUrlEnum } from '../enums/route-url.enum';
import { RouteModel } from '../../shared/models/route.model';

export const MAIN_ROUTES: RouteModel[] = [
  {
    id: 1,
    name: RouteNameEnum.HOME,
    path: RouteUrlEnum.HOME,
    active: false,
  },
  {
    id: 2,
    name: RouteNameEnum.IMPLEMENTATION,
    path: RouteUrlEnum.IMPLEMENTATION,
    active: false,
  },
  {
    id: 3,
    name: RouteNameEnum.TECHNICAL_ASSISTANCE,
    path: RouteUrlEnum.TECHNICAL_ASSISTANCE,
    active: false,
  },
  {
    id: 4,
    name: RouteNameEnum.TRAINING,
    path: RouteUrlEnum.TRAINING,
    active: false,
  },
  {
    id: 5,
    name: RouteNameEnum.EQUIPMENTS,
    path: RouteUrlEnum.EQUIPMENTS,
    active: false,
  },
  {
    id: 6,
    name: RouteNameEnum.PRODUCTS,
    path: RouteUrlEnum.PRODUCTS,
    active: false,
  },
];
