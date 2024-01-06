import { ServiceModel } from '../models/service.model';
import { RouteUrlEnum } from '../enums/route-url.enum';
import { RouteNameEnum } from '../enums/route-name.enum';

export const SERVICES: ServiceModel[] = [
  {
    id: 1,
    name: 'Assistência Técnica',
    path: RouteUrlEnum.TECHNICAL_ASSISTANCE,
    image: '/assets/services/assistencia-tecnica.webp',
    title: RouteNameEnum.TECHNICAL_ASSISTANCE,
  },
  {
    id: 2,
    name: 'Treinamento',
    path: RouteUrlEnum.TRAINING,
    image: '/assets/services/treinamento.webp',
    title: RouteNameEnum.TRAINING,
  },
  {
    id: 3,
    name: 'Equipamentos',
    path: RouteUrlEnum.EQUIPMENTS,
    image: '/assets/services/equipamentos.webp',
    title: RouteNameEnum.EQUIPMENTS,
  },
  {
    id: 4,
    name: 'Produtos',
    path: RouteUrlEnum.PRODUCTS,
    image: '/assets/services/produtos.webp',
    title: RouteNameEnum.PRODUCTS,
  },
];
