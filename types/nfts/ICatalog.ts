export enum ECatalogFilters {
  PAGE = 'page',
  CATEGORY = 'category',
  COLLECTION = 'collection',
  PRICE = 'price',
}

export interface ICatalogFilters {
  [ECatalogFilters.PAGE]?: string;
  [ECatalogFilters.CATEGORY]?: string;
  [ECatalogFilters.COLLECTION]?: string;
  [ECatalogFilters.PRICE]?: string;
}
