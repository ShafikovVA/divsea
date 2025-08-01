import Skeleton from 'react-loading-skeleton';
import NftCardDetailPriceSkeleton from '@/components/business/NftCardDetail/NftCardDetailPrice/NftCardDetailPrice.skeleton';

const NftCardDetailSkeleton = () => {
  return (
    <div className="product-detail-card">
      <div className="product-detail-card__image">
        <Skeleton borderRadius={10} style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="product-detail-card__content">
        <div className="product-detail-card__title">
          <Skeleton
            borderRadius={10}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="product-detail-card__content-description">
          <p>
            <Skeleton
              borderRadius={10}
              style={{ width: '100%', height: '100%' }}
            />
          </p>
        </div>
        <div className="product-detail-card__users">
          <Skeleton
            borderRadius={10}
            style={{ width: '100%', height: '100%' }}
          />
          <Skeleton
            borderRadius={10}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <NftCardDetailPriceSkeleton />
        <Skeleton borderRadius={10} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default NftCardDetailSkeleton;
