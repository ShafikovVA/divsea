import './users-bid-list.scss';
import UserBid from '@/components/business/UserBid/UserBid';
import { IUserBid } from '@/types/nfts/IHistoryOfBid';

interface IUsersBidList {
  usersBidList: IUserBid[];
}

const UsersBidList = ({ usersBidList }: IUsersBidList) => {
  return (
    <div className="users-bid-list">
      {usersBidList && usersBidList.length > 0 ? (
        usersBidList.map((userBid) => <UserBid key={userBid.id} {...userBid} />)
      ) : (
        <div className="users-bid-list__empty">
          <p className="users-bid-list__empty-text">No bids yet</p>
          <p className="users-bid-list__empty-text">
            <strong>Be the first</strong> to bid!
          </p>
        </div>
      )}
    </div>
  );
};

export default UsersBidList;
