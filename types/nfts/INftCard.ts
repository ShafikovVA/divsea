import { IHistoryOfBid } from './IHistoryOfBid';

export interface INftCard {
  title: string;
  price: number;
  image: string;
  id: number;
  historyOfBid: IHistoryOfBid[];
}
