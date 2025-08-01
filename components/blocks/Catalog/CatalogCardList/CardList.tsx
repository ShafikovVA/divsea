'use client';
import ProductCard from '@/components/business/NftCard/NftCard';
import { useSelector } from 'react-redux';
import { selectCatalogFilter } from '@/store/reducers/filters/catalogFilterReducer';
import { useCatalog } from '@/lib/hooks/blocks/useCatalog';
import CardListSkeletons from './CardList.skeleton';
import NotFoundIcon from '@/assets/icons/catalog/not-found.svg';

export const CardList = () => {
  const filters = useSelector(selectCatalogFilter);
  const { listRef, virtualizer, isFetching, isFetchingNextPage, allCardRows } =
    useCatalog({
      page: 1,
      filters,
    });

  return (
    <>
      <div ref={listRef} className="catalog__cardList">
        <div
          className="catalog__cardList-cards"
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
            marginBottom: allCardRows.length ? 48 : 0,
          }}
        >
          {virtualizer.getVirtualItems().map((virtualItem) => {
            const isLoaderRow = virtualItem.index > allCardRows.length - 1;
            const cardRow = allCardRows[virtualItem.index];

            return (
              isLoaderRow || (
                <div
                  className="catalog__cardList-card-row"
                  key={virtualItem.key}
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
        {!isFetching && allCardRows.length === 0 && (
          <div className="catalog__cardList-empty">
            <NotFoundIcon />
            <p>
              No NFTs found matching your criteria.
              <br /> Try adjusting your filters or search for something else
            </p>
          </div>
        )}
        {isFetching && !isFetchingNextPage && <CardListSkeletons />}
      </div>
    </>
  );
};
