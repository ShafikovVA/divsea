import { INfts } from '@/types/nfts/INfts';
import { useQuery } from '@tanstack/react-query';
import { ICatalogFilters } from '@/types/nfts/ICatalog';

export const initialData: INfts = {
  first: 0,
  prev: 0,
  next: 0,
  last: 0,
  pages: 0,
  items: 0,
  data: [],
};

export const getCatalog = async ({
  page,
  filters,
  perPage,
}: {
  page?: number;
  filters?: ICatalogFilters;
  perPage?: string;
}) => {
  const queryString = new URLSearchParams({
    ...filters,
    _page: page?.toString() || '',
    _per_page: perPage || '',
  }).toString();
  const response = await fetch(
    `/api/catalog${queryString ? '?' + queryString : ''}`,
  );
  if (!response.ok) {
    console.error('Failed to fetch catalog');
    return initialData as INfts;
  }
  const responseData: INfts = await response.json();
  return responseData;
};

export default getCatalog;

export const useCatalog = ({
  page,
  filters,
  perPage = '20',
}: {
  page?: number;
  filters?: ICatalogFilters;
  perPage?: string;
}) => {
  return useQuery<INfts>({
    queryKey: ['catalog', page, filters, perPage],
    queryFn: () => getCatalog({ page, filters, perPage }),
  });
};
