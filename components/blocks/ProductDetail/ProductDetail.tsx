import Button from '@/components/ui/Button/Button';
import './product-detail.scss';
import ProductDetailPrice from './ProductDetailPrice/ProductDetailPrice';
import ProductDetailUser from './ProductDetailUser/ProductDetailUser';
import CardHolderIcon from '@/assets/icons/cardholder.svg';
import { INftCard } from '@/types/nfts/INftCard';

const ProductDetail = ({
  title,
  description,
  image,
  price,
  historyOfBid,
}: INftCard) => {
  return (
    <div className="product-detail-card">
      <div className="product-detail-card__image">
        {/* <Image src={image} alt="Product Detail" /> */}
      </div>
      <div className="product-detail-card__content">
        <h1 className="product-detail-card__title">{title}</h1>
        <div className="product-detail-card__content-description">
          <p>{description}</p>
        </div>

        {historyOfBid && (
          <div className="product-detail-card__users">
            <ProductDetailUser
              title={historyOfBid[0].userName}
              status="creator"
            />
            {historyOfBid.at(-1) && historyOfBid.length > 1 && (
              <ProductDetailUser
                title={historyOfBid[historyOfBid.length - 1].userName}
                status="owner"
              />
            )}
          </div>
        )}

        <ProductDetailPrice
          price={price}
          date={historyOfBid[historyOfBid.length - 1].date}
        />
        <Button primary icon={<CardHolderIcon />}>
          Place Bid
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
