import { ICatalogFilters } from '@/types/nfts/ICatalog';
import { useEffect } from 'react';
import { getCatalogFiltersPath } from '@/utils/filters/get-catalog-filters-path';

const useCatalogFilterUrl = ({
  category,
  collection,
  price,
}: ICatalogFilters) => {
  const currentUrl = window.location.href;

  const urlSearchParams = getCatalogFiltersPath({
    category,
    collection,
    price,
  });

  const queryString = urlSearchParams.toString();

  useEffect(() => {
    history.pushState(
      null,
      currentUrl,
      `${window.location.pathname}${queryString ? `?${queryString}` : ''}`,
    );
  }, [category, collection, price]);
};

export default useCatalogFilterUrl;
