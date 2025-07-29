import { useInfiniteQuery } from '@tanstack/react-query';
import { useAppSelector } from '@/store/hooks';
import { adaptiveSelector } from '@/store/reducers/ui/adaptiveReducer';
import { useEffect, useRef } from 'react';
import { useWindowVirtualizer } from '@tanstack/react-virtual';
import getCatalog, { ICatalog } from '@/lib/api/nfts';

const setRowItemParams = (
  isMobile: boolean,
  isTable: boolean,
  isDeskS: boolean,
) => {
  const rowItemParams = {
    rowItemsQuantity: 4,
    rowHeight: 405,
  };
  if (isDeskS) {
    rowItemParams.rowHeight = 283;
    rowItemParams.rowItemsQuantity = 4;
  }
  if (isTable) {
    rowItemParams.rowHeight = 283;
    rowItemParams.rowItemsQuantity = 3;
  }
  if (isMobile) {
    rowItemParams.rowItemsQuantity = 1;
    rowItemParams.rowHeight = 405;
  }
  return rowItemParams;
};

export const useCatalog = ({ page, filters, perPage = 20 }: ICatalog) => {
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['catalog', page, filters, perPage],
    queryFn: ({ pageParam }) =>
      getCatalog({ page: pageParam, filters, perPage }),
    getNextPageParam: (item) => item.nextPage,
    initialPageParam: 1,
  });

  const { isMobile, isTable, isDeskS } = useAppSelector(adaptiveSelector);
  const { rowItemsQuantity, rowHeight } = setRowItemParams(
    isMobile,
    isTable,
    isDeskS,
  );

  const allCards = data ? data.pages.flatMap((d) => d.list) : [];
  const allCardRows = Array.from(
    { length: Math.ceil(allCards.length / rowItemsQuantity) },
    (_, i) =>
      allCards.slice(
        i * rowItemsQuantity,
        i * rowItemsQuantity + rowItemsQuantity,
      ),
  );
  const listRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useWindowVirtualizer({
    count: hasNextPage ? allCardRows.length + perPage : allCardRows.length,
    estimateSize: () => rowHeight,
    scrollMargin: listRef.current?.offsetTop ?? 0,
    overscan: 2,
    gap: 48,
  });

  useEffect(() => {
    const [lastItem] = [...virtualizer.getVirtualItems()].reverse();

    if (!lastItem) {
      return;
    }

    if (
      lastItem.index >= allCardRows.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allCardRows.length,
    isFetchingNextPage,
    virtualizer.getVirtualItems(),
  ]);

  return {
    status,
    listRef,
    virtualizer,
    error,
    isFetching,
    allCards,
    allCardRows,
    hasNextPage,
  };
};
