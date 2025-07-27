'use client';
import ProductCard from '@/components/business/NftCard/NftCard';
import Pagination from '@/components/ui/Pagination/Pagination';

import { useCatalog } from '@/lib/api/nfts';
import { INfts } from '@/types/nfts/INfts';
import { useState } from 'react';
import ProductCardSkeleton from '@/components/business/NftCard/NftCard.skeleton';
import { useSelector } from 'react-redux';
import { selectCatalogFilter } from '@/store/reducers/filters/catalogFilterReducer';

const Skeletons = () => (
  <div className="catalog__cardList-cards">
    {Array.from({ length: 8 }, (_, index) => (
      <ProductCardSkeleton key={index} />
    ))}
  </div>
);

const emptyObj: INfts = {
  first: 0,
  prev: 0,
  next: 0,
  last: 0,
  pages: 0,
  items: 0,
  data: [],
};

export const CardList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filters = useSelector(selectCatalogFilter);
  const { data, isPending } = useCatalog({ page: currentPage, filters });
  const { data: cardItems, pages } = data ?? emptyObj;

  const onPageChange = async (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };

  return (
    <>
      <div className="catalog__cardList">
        <div className="catalog__cardList-cards">
          {isPending && cardItems.length === 0 && Skeletons()}
          {cardItems.map((card) => (
            <ProductCard key={card.id} {...card} />
          ))}
        </div>

        {pages > 1 && (
          <Pagination
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={onPageChange}
          />
        )}
      </div>
    </>
  );
};
