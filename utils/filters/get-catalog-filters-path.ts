import { ICatalogFilters } from '@/types/nfts/ICatalog';

export const getCatalogFiltersPath = ({
  category,
  collection,
  price,
}: ICatalogFilters) => {
  const urlSearchParams = new URLSearchParams();

  if (category) {
    urlSearchParams.set('category', category);
  } else {
    urlSearchParams.delete('category');
  }

  if (collection) {
    urlSearchParams.set('collection', collection);
  } else {
    urlSearchParams.delete('collection');
  }

  if (price) {
    urlSearchParams.set('price', price);
  } else {
    urlSearchParams.delete('price');
  }

  return urlSearchParams;
};
