import { IUserBid } from './IUserBid';

export interface INftCard {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string | null;
  historyOfBid: IUserBid[];
}
