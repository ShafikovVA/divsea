import ProductCardSkeleton from '@/components/business/NftCard/NftCard.skeleton';
import { memo } from 'react';

const CardListSkeletons = memo(() => (
  <div className="catalog__cardList-cards">
    {Array.from({ length: 12 }, (_, index) => (
      <ProductCardSkeleton key={index} big />
    ))}
  </div>
));

export default CardListSkeletons;
