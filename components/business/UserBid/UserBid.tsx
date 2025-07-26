import './user-bid.scss';
import EthereumIcon from '@/assets/icons/ethereum.svg';
import VerifiedIcon from '@/assets/icons/veerified-check.svg';
import { IUserBid } from '@/types/nfts/IUserBid';
import userPlaceholderImage from '@/assets/images/user/image_placeholder.png';
import Image from 'next/image';
import moment from 'moment';

interface IUserBidProps extends IUserBid {
  style?: React.CSSProperties;
}

const UserBid = ({ userName, date, price, image, style }: IUserBidProps) => {
  const performedDate = moment(date).format('YYYY-MM-DD');
  return (
    <div className="user-bid" style={style}>
      <div className="user-bid__image">
        <VerifiedIcon className="user-bid__verified-icon" />
        <Image src={image || userPlaceholderImage} alt={userName} fill />
      </div>
      <div className="user-bid__info">
        <div className="user-bid__info-text">
          <h3 className="user-bid__info-name">{userName}</h3>
          <p className="user-bid__info-date">{performedDate}</p>
        </div>
        <div className="user-bid__info-price">
          <EthereumIcon />
          {price}
        </div>
      </div>
    </div>
  );
};

export default UserBid;
