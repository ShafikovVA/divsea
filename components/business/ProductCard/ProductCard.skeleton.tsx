import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IProductCardSkeletonProps {
  big?: boolean;
}

const ProductCardSkeleton = ({ big }: IProductCardSkeletonProps) => {
  return (
    <div className={`product-card ${big ? 'big' : ''}`}>
      <div className="product-card__picture">
        <Skeleton borderRadius={10} style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="product-card__title">
        <Skeleton borderRadius={10} style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="product-card__title">
        <Skeleton borderRadius={10} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
