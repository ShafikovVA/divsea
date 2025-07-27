import { ICatalogFilters } from '@/types/nfts/ICatalog';
import { useEffect } from 'react';

const useCatalogFilterUrl = ({
  category,
  collection,
  price,
  page,
}: ICatalogFilters) => {
  const currentUrl = window.location.href;

  const urlSerchParams = new URLSearchParams();

  if (category) {
    urlSerchParams.set('category', category);
  } else {
    urlSerchParams.delete('category');
  }

  if (collection) {
    urlSerchParams.set('collection', collection);
  } else {
    urlSerchParams.delete('collection');
  }

  if (price) {
    urlSerchParams.set('price', price);
  } else {
    urlSerchParams.delete('price');
  }

  if (page) {
    urlSerchParams.set('page', page);
  } else {
    urlSerchParams.delete('page');
  }
  const queryString = urlSerchParams.toString();

  useEffect(() => {
    history.pushState(
      null,
      currentUrl,
      `${window.location.pathname}${queryString ? `?${queryString}` : ''}`,
    );
  }, [category, collection, price, page]);
};

export default useCatalogFilterUrl;
