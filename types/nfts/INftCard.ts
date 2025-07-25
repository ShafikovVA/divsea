import { IUserBid } from './IUserBid';

export interface INftCard {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  image: string;
  historyOfBid: IUserBid[];
}
