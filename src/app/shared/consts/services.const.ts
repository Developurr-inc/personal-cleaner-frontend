import { ServiceModel } from '../models/service.model';
import { RouteUrlEnum } from '../enums/route-url.enum';
import { RouteNameEnum } from '../enums/route-name.enum';

export const SERVICES: ServiceModel[] = [
  {
    id: 1,
    name: 'Assistência Técnica',
    path: RouteUrlEnum.TECHNICAL_ASSISTANCE,
    image: '/assets/assistencia-tecnica.webp',
    title: RouteNameEnum.TECHNICAL_ASSISTANCE,
  },
  {
    id: 2,
    name: 'Treinamento',
    path: '/',
    image: '/assets/treinamen.webp',
    title: 'Treinamento',
  },
  {
    id: 3,
    name: 'Equipamentos',
    path: '/',
    image: '/assets/equipamentos.webp',
    title: 'Equipamentos',
  },
  {
    id: 4,
    name: 'Produtos',
    path: '/service/products',
    image: '/assets/produtos.webp',
    title: 'Produtos',
  },
];
