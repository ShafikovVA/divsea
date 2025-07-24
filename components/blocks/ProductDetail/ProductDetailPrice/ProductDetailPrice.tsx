import './product-detail-price.scss';
import ETHIcon from '@/assets/icons/ethereum-big.svg';

const ProductDetailPrice = () => {
  return (
    <div className="product-detail-card__content-price">
      <div className="product-detail-card__content-price-item">
        <p>Current Bid</p>
        <p>
          <ETHIcon />
          1.75
        </p>
      </div>
      <div className="product-detail-card__content-price-item date">
        <p>End in</p>
        <p>Jun 17, 2023 at 05:08</p>
      </div>
    </div>
  );
};

export default ProductDetailPrice;
