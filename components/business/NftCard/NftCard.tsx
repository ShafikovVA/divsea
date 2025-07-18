'use client';

import './nft-card.scss';
import Image from 'next/image';
import ethereum from '@/assets/icons/ethereum.svg?url';
import Button from '@/components/ui/Button/Button';
import { INftCard } from '@/types/nfts/INftCard';
import { useAppDispatch } from '@/store/hooks';
import { ModalTypes } from '@/types/modals/IModal';
import { showModal } from '@/store/reducers/ui/modalsReduser';
import Link from 'next/link';

interface INftCardProps extends INftCard {
  big?: boolean;
}

export const NftCard = (props: INftCardProps) => {
  const dispatch = useAppDispatch();
  const { big, title, price, image, historyOfBid } = props;

  const handleClick = () => {
    dispatch(
      showModal({
        type: ModalTypes.HISTORY_OF_BID,
        data: { [ModalTypes.HISTORY_OF_BID]: historyOfBid },
      }),
    );
  };

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
      <Link href="#" className="product-card__title">
        {title}
      </Link>
      <div className="product-card__controls">
        <div className="product-card__price-text">
          <span>Current bid:</span>
          <span className="product-card__price">
            <Image src={ethereum} alt="ethereum" />
            {price}
          </span>
        </div>
        <Button onClick={handleClick} className="button-primary">
          PLACE BID
        </Button>
      </div>
    </div>
  );
};

export default NftCard;
