import './user-bid.scss';
import EthereumIcon from '@/assets/icons/ethereum.svg';
// import { IUserBid } from '@/types/nfts/IHistoryOfBid';

// { userName, date, price, image }: IUserBid
const UserBid = () => {
  return (
    <div className="user-bid">
      <div className="user-bid__image">
        {/* <Image src={image} alt={userName} /> */}
      </div>
      <div className="user-bid__info">
        <div className="user-bid__info-text">
          <h3 className="user-bid__info-name">Repo</h3>
          <p className="user-bid__info-date">May 17, 2022 at 12:08</p>
        </div>
        <div className="user-bid__info-price">
          <EthereumIcon />
          1.23
        </div>
      </div>
    </div>
  );
};

export default UserBid;
