import Button from '@/components/ui/Button/Button';
import './nft-card-detail.scss';
import NftCardDetailPrice from './NftCardDetailPrice/NftCardDetailPrice';
import NftCardDetailUser from './ProductDetailUser/NftCardDetailUser';
import CardHolderIcon from '@/assets/icons/cardholder.svg';
import { INftCard } from '@/types/nfts/INftCard';
import Image from 'next/image';
import NoImage from '@/components/ui/NoImage/NoImage';

const NftCardDetail = ({
  title,
  description,
  image,
  price,
  historyOfBid,
}: INftCard) => {
  return (
    <div className="product-detail-card">
      <div className="product-detail-card__image">
        {image ? <Image src={image} alt={title} fill /> : <NoImage />}
      </div>
      <div className="product-detail-card__content">
        <h1 className="product-detail-card__title" title={title}>
          {title}
        </h1>
        <div className="product-detail-card__content-description">
          <p title={description}>{description}</p>
        </div>

        {historyOfBid && (
          <div className="product-detail-card__users">
            <NftCardDetailUser
              image={historyOfBid[0].image}
              title={historyOfBid[0].userName}
              status="creator"
            />
            {historyOfBid.length > 1 &&
              historyOfBid[historyOfBid.length - 1] && (
                <NftCardDetailUser
                  image={historyOfBid[historyOfBid.length - 1].image}
                  title={historyOfBid[historyOfBid.length - 1].userName}
                  status="owner"
                />
              )}
          </div>
        )}

        <NftCardDetailPrice price={price} date={historyOfBid[0].date} />
        <Button primary icon={<CardHolderIcon />}>
          Place Bid
        </Button>
      </div>
    </div>
  );
};

export default NftCardDetail;
