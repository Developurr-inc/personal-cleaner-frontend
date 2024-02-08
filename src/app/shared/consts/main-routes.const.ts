import { RouteNameEnum } from '../enums/route-name.enum';
import { RouteUrlEnum } from '../enums/route-url.enum';
import { RouteModel } from '../models/route.model';

export const MAIN_ROUTES: RouteModel[] = [
  {
    id: 1,
    name: RouteNameEnum.HOME,
    path: RouteUrlEnum.HOME,
    active: false,
  },
];
