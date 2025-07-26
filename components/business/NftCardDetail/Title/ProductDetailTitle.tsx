import ArrowLeftCircle from '@/assets/icons/arrow-left-circle.svg';
import './product-detail-back-button.scss';

const ProductDetailTitle = () => {
  return (
    <div className="product-detail-back-button__container">
      <div className="product-detail-back-button">
        <ArrowLeftCircle />
      </div>
      <p className="product-detail-back-button-text">Product Detail</p>
    </div>
  );
};

export default ProductDetailTitle;
