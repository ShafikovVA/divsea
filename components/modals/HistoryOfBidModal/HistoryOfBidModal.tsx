import { IUserBid } from '@/types/nfts/IHistoryOfBid';
import './history-of-bid-modal.scss';
import UserBid from '@/components/business/UserBid/UserBid';

interface IHistoryOfBidModalProps {
  data: IUserBid[];
}

const HistoryOfBidModal = ({ data }: IHistoryOfBidModalProps) => {
  // const { date, price, status } = data[0];
  return (
    <div className="history-of-bid-modal">
      <h1>History of Bid</h1>
      <div className="history-of-bid-modal__date">dasdasdasd</div>
      <div className="history-of-bid-modal__userList">
        <UserBid />
        <UserBid />
        <UserBid />
        <UserBid />
      </div>
    </div>
  );
};

export default HistoryOfBidModal;
