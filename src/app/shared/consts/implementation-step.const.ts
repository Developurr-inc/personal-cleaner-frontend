import { ImplementaionStepModel } from "../models/implementation-step.module"

export const IMPLEMENTATION_STEP: ImplementaionStepModel[] = [
  {
    id: 1,
    title: '1 - CONHECER O CLIENTE',
    section:[
      {
        id:1,
        subtitle:'Ouvir seus objetivos e desafios',
        items:[
          {
            id: 1,
            part:'Observar os procedimentos',
          },
          {
            id: 2,
            part: 'Analizar os resultados',
          },
          {
            id: 3,
            part: 'Verificaros produtos e equipamentos',
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: '2 - FIRMAR PARCERIA',
    section:[
      {
        id:1,
        subtitle:'Para vencer seus maiores desafios',
        items:[
          {
            id: 1,
            part:'Fale com o seu Personal Cleaner',
          },
          {
            id: 2,
            part: 'Determine juntos um plano de ação',
          },
        ],
      },
    ],
  },

  {
    id:3,
    title: '3 - IMPLEMENTAR',
    section:[
      {
        id:1,
        subtitle:'Programa de higienização',
        items:[
          {
            id: 1,
            part:'Procedimentos corretos',
          },
          {
            id: 2,
            part: 'Produtos e equipamentos ideias',
          },
        ],
      },
    ],
  },

  {
    id:4,
    title: '4 - TREINAMENTO',
    section:[
      {
        id:1,
        subtitle:'Para eficiência operacional e satisfação de seu cliente',
        items:[
          {
            id: 1,
            part:'Processos eficientes usando as soluções certas',
          },
          {
            id: 2,
            part: 'Segurança no local de trabalho',
          },
          {
            id: 3,
            part: 'Minimize o despedício de químicos, água, energia e papéis',
          },
        ],
      },
    ],
  },

  {
    id:5,
    title: '5 - AVALIAÇÃO E REVISÃO',
    section:[
      {
        id:1,
        subtitle:'Progresso em relação aos planos implementados',
        items:[
          {
            id: 1,
            part:'Revisar resultados e progresso',
          },
          {
            id: 2,
            part: 'Ajustar o programa conforme necessário',
          },
        ],
      },
    ],
  },

]
