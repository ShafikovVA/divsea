import { IUserBid } from './IUserBid';

export interface INftCard {
  title: string;
  price: number;
  image: string;
  id: number;
  historyOfBid: IUserBid[];
}
