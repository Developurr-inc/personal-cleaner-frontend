export type ImplementaionStepModel = {
  id: number;
  title: string;
  section: sectionModel[];
};

type sectionModel = {
  id: number;
  subtitle: string;
  items: ItemsModel[];
};

type ItemsModel = {
  id: number;
  part: string;
};
