import { IUserBid } from '../nfts/IHistoryOfBid';

export interface IModal {
  type: ModalTypes;
  data: ModalTypesData;
}
export interface IModalProcedure extends IModal {
  index: number;
}

export enum ModalTypes {
  HISTORY_OF_BID = 'historyOfBid',
}

export type ModalTypesData = {
  [ModalTypes.HISTORY_OF_BID]: IUserBid[];
};
