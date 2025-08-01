'use client';
import ArrowLeftCircle from '@/assets/icons/arrow-left-circle.svg';
import './product-detail-back-button.scss';
import { useRouter } from 'next/navigation';

const ProductDetailTitle = () => {
  const router = useRouter();
  const handleClickBack = () => {
    return router.back();
  };
  return (
    <div className="product-detail-back-button__container">
      <div onClick={handleClickBack} className="product-detail-back-button">
        <ArrowLeftCircle />
      </div>
      <p className="product-detail-back-button-text">Product Detail</p>
    </div>
  );
};

export default ProductDetailTitle;
