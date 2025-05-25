import { RouteNameEnum } from '../enums/route-name.enum';
import { RouteUrlEnum } from '../enums/route-url.enum';
import { RouteModel } from '../domain/route.model';

export const HELP_ROUTES: RouteModel[] = [
  {
    id: 1,
    name: RouteNameEnum.FAQ,
    path: RouteUrlEnum.FAQ,
    active: false,
  },
];
