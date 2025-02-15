import './prdouctCard.scss';
import Image from "next/image";
import nft1 from '@/assets/images/blocks/hero/nft-1.png';
import ethereum from '@/assets/icons/ethereum.svg';
import Button from "@/components/ui/Button/Button";

export const ProductCard = () => {

  return (
    <div className="product-card">
      <div className="product-card__picture">
        <Image src={nft1} alt="title" />
      </div>
      <div className="product-card__title">Sun-Glass</div>
      <div className="product-card__controls">
        <div className="product-card__price-text">
          <span>Current bid:</span>
          <span className="product-card__price">
            <Image src={ethereum} alt="ethereum" />
            1.75
          </span>
        </div>
        <Button className="button-primary">PLACE BID</Button>
      </div>
    </div>
  )
}

export default ProductCard;