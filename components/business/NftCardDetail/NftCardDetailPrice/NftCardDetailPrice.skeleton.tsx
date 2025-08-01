import './nft-card-detail-price.scss';
import Skeleton from 'react-loading-skeleton';

const NftCardDetailPriceSkeleton = () => {
  return (
    <div className="product-detail-card__content-price">
      <div className="product-detail-card__content-price-item">
        <p>Current Bid</p>
        <p>
          <Skeleton
            borderRadius={10}
            style={{ width: '100%', height: '100%' }}
          />
          <Skeleton
            borderRadius={10}
            style={{ width: '100%', height: '100%' }}
          />
        </p>
      </div>
      <div className="product-detail-card__content-price-item date">
        <p>End in</p>
        <p>
          <Skeleton
            borderRadius={10}
            style={{ width: '100%', height: '100%' }}
          />
        </p>
      </div>
    </div>
  );
};

export default NftCardDetailPriceSkeleton;
