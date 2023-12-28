import { ServiceModel } from '../models/service.model';
import { RouteUrlEnum } from '../enums/route-url.enum';
import { RouteNameEnum } from '../enums/route-name.enum';

export const SERVICES: ServiceModel[] = [
  {
    id: 1,
    name: 'Assistência Técnica',
    path: RouteUrlEnum.TECHNICAL_ASSISTANCE,
    image: '/assets/assistencia-tecnica.jpg',
    title: RouteNameEnum.TECHNICAL_ASSISTANCE,
  },
  {
    id: 2,
    name: 'Treinamento',
    path: '/',
    image: '/assets/treinamento.jpg',
    title: 'Treinamento',
  },
  {
    id: 3,
    name: 'Equipamentos',
    path: '/',
    image:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    title: 'Equipamentos',
  },
  {
    id: 4,
    name: 'Produtos',
    path: '/service/products',
    image: '/assets/produtos.jpg',
    title: 'Produtos',
  },
];
