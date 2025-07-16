import './nft-card.scss';
import Image from 'next/image';
import ethereum from '@/assets/icons/ethereum.svg?url';
import Button from '@/components/ui/Button/Button';
import { INftCard } from '@/types/nfts/INftCard';

interface INftCardProps extends INftCard {
  big?: boolean;
}

export const NftCard = (props: INftCardProps) => {
  const { big, title, price, image } = props;
  return (
    <div className={`product-card ${big ? 'big' : ''}`}>
      <div className="product-card__picture">
        <Image
          src={image}
          alt={`${title} image`}
          fill
          sizes="(max-width: 768px) 179.86px, 252.9px"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="product-card__title">{title}</div>
      <div className="product-card__controls">
        <div className="product-card__price-text">
          <span>Current bid:</span>
          <span className="product-card__price">
            <Image src={ethereum} alt="ethereum" />
            {price}
          </span>
        </div>
        <Button className="button-primary">PLACE BID</Button>
      </div>
    </div>
  );
};

export default NftCard;
