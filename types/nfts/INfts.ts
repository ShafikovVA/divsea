import { INftCard } from './INftCard';

export interface INftsDto {
  first: number;
  prev: number;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: INftCard[];
}

export interface INfts {
  list: INftCard[];
  nextPage: number;
}
