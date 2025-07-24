import Button from '@/components/ui/Button/Button';
import './product-detail.scss';
import ProductDetailPrice from './ProductDetailPrice/ProductDetailPrice';
import ProductDetailUser from './ProductDetailUser/ProductDetailUser';
import CardHolderIcon from '@/assets/icons/cardholder.svg';

const ProductDetail = () => {
  return (
    <div className="product-detail-card">
      <div className="product-detail-card__image">
        {/* <Image src={image} alt="Product Detail" /> */}
      </div>
      <div className="product-detail-card__content">
        <h1 className="product-detail-card__title">Project Sun-Glass</h1>
        <div className="product-detail-card__content-description">
          <p>
            A collection of 10,000 utility-enabled PFPs
            <br /> that feature a richly diverse and unique
            <br /> pool of rarity-powered traits.
          </p>
        </div>

        <div className="product-detail-card__users">
          <ProductDetailUser title="Perperzon" status="creator" />
          <ProductDetailUser title="Videz" status="owner" />
        </div>
        <ProductDetailPrice />
        <Button primary icon={<CardHolderIcon />}>
          Place Bid
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
