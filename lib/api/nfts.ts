import { INfts, INftsDto } from '@/types/nfts/INfts';
import { ICatalogFilters } from '@/types/nfts/ICatalog';
export interface ICatalog {
  page?: number;
  filters?: ICatalogFilters;
  perPage?: number;
}

export const getCatalog = async ({ page, filters, perPage = 20 }: ICatalog) => {
  const queryString = new URLSearchParams({
    _page: page?.toString() || '',
    _per_page: perPage?.toString() || '',
    ...filters,
  }).toString();
  const response = await fetch(
    `/api/catalog${queryString ? '?' + queryString : ''}`,
  );
  if (!response.ok) {
    console.error('Failed to fetch catalog');
    return {} as INfts;
  }
  const { next, data }: INftsDto = await response.json();
  const responseData: INfts = { list: data, nextPage: next };
  return responseData;
};

export default getCatalog;
