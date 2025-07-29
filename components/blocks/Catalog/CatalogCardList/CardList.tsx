'use client';
import ProductCard from '@/components/business/NftCard/NftCard';

import ProductCardSkeleton from '@/components/business/NftCard/NftCard.skeleton';
import { useSelector } from 'react-redux';
import { selectCatalogFilter } from '@/store/reducers/filters/catalogFilterReducer';
import { useCatalog } from '@/lib/hooks/blocks/useCatalog';

const Skeletons = () => (
  <div className="catalog__cardList-cards">
    {Array.from({ length: 8 }, (_, index) => (
      <ProductCardSkeleton key={index} />
    ))}
  </div>
);

export const CardList = () => {
  const filters = useSelector(selectCatalogFilter);
  const {
    status,
    listRef,
    virtualizer,
    error,
    isFetching,
    allCardRows,
    allCards,
  } = useCatalog({
    page: 1,
    filters,
  });
  const nfts = allCards ?? [];

  return (
    <>
      <div ref={listRef} className="catalog__cardList">
        <div
          className="catalog__cardList-cards"
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {virtualizer.getVirtualItems().map((virtualItem) => {
            const isLoaderRow = virtualItem.index > allCardRows.length - 1;
            const cardRow = allCardRows[virtualItem.index];

            return (
              isLoaderRow || (
                <div
                  className="catalog__cardList-card-row"
                  key={virtualItem.index}
                  style={{
                    position: 'absolute',
                    height: `${virtualItem.size}px`,
                    transform: `translateY(${
                      virtualItem.start - virtualizer.options.scrollMargin
                    }px)`,
                  }}
                >
                  {cardRow.map((card) => (
                    <ProductCard big key={card.id} {...card} />
                  ))}
                </div>
              )
            );
          })}
        </div>
        {isFetching && nfts.length === 0 && Skeletons()}
      </div>
    </>
  );
};
