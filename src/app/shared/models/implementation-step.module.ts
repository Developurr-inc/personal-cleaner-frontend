export type ImplementaionStepModel =
  {
    id: number,
    title: string,
    section:sectionModel[],
  }

type sectionModel = {
  id: number,
  subtitle:string,
  items: ItemsModule[],
}

type ItemsModule = {
  id: number,
  part:string,
}
