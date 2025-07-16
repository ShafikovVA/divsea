'use client';
import { INfts } from '@/types/nfts/INfts';
import ProductCard from '@/components/business/NftCard/NftCard';
import ProductCardSkeleton from '@/components/business/NftCard/NftCard.skeleton';
import Pagination from '@/components/ui/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getNfts, setNfts } from '@/store/reducers/business/nftsReducer';
import { useEffect, useState } from 'react';

interface ICardListProps {
  inititalData: INfts;
}

export const CardList = ({ inititalData }: ICardListProps) => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const storedCardItems = useAppSelector((state) => state.nfts);

  const { data: cardItems, pages, pending } = storedCardItems;

  const Skeletons = () => (
    <div className="catalog__cardList-cards">
      {Array.from({ length: 8 }, (_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );

  useEffect(() => {
    dispatch(setNfts(inititalData));
  }, [inititalData]);

  const onPageChange = async (page: number) => {
    dispatch(getNfts({ page: page }));

    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="catalog__cardList">
        <div className="catalog__cardList-cards">
          {pending && cardItems.length === 0 && Skeletons()}
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
