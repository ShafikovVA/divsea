export enum ECatalogFilters {
  CATEGORY = 'category',
  COLLECTION = 'collection',
  PRICE = 'price',
}

export interface ICatalogFilters {
  [ECatalogFilters.CATEGORY]?: string;
  [ECatalogFilters.COLLECTION]?: string;
  [ECatalogFilters.PRICE]?: string;
}
