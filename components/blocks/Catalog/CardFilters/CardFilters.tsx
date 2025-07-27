'use client';
import { useRef } from 'react';
import Input from '@/components/ui/Inputs/Input/Input';
import { useAppDispatch } from '@/store/hooks';
import { debounce } from '@/utils/debounce';
import CategoryIcon from '@/assets/icons/catalog/category.svg';
import CollectionIcon from '@/assets/icons/catalog/collection.svg';
import PriceIcon from '@/assets/icons/catalog/price.svg';
import {
  selectCatalogFilter,
  setCategory,
  setCollection,
  setPrice,
} from '@/store/reducers/filters/catalogFilterReducer';
import { useSelector } from 'react-redux';
import { ECatalogFilters } from '@/types/nfts/ICatalog';
import useCatalogFilterUrl from '@/lib/hooks/filters/useCatalogFilterUrl';

const CardFilters = () => {
  const dispatch = useAppDispatch();
  const { category, collection, price, page } =
    useSelector(selectCatalogFilter);

  const filter = (name: string, value: string) => {
    switch (name) {
      case ECatalogFilters.CATEGORY:
        debouncedApplyFilters(setCategory(value));
        break;
      case ECatalogFilters.COLLECTION:
        debouncedApplyFilters(setCollection(value));
        break;
      case ECatalogFilters.PRICE:
        debouncedApplyFilters(setPrice(value));
        break;
    }
  };

  useCatalogFilterUrl({ category, collection, price, page });

  const debouncedApplyFilters = useRef(
    debounce((func: Parameters<typeof dispatch>[0]) => {
      dispatch(func);
    }, 1000),
  ).current;

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filter(e.target.name, e.target.value);
  };

  return (
    <div className={'catalog__filters'}>
      <Input
        onChange={(e) => onFilterChange(e)}
        value={category}
        name={ECatalogFilters.CATEGORY}
        button="outline"
        placeholder="Category"
        maxLength={25}
        icon={<CategoryIcon />}
      />
      <Input
        onChange={(e) => onFilterChange(e)}
        value={collection}
        name={ECatalogFilters.COLLECTION}
        button="outline"
        placeholder="Collection"
        maxLength={25}
        icon={<CollectionIcon />}
      />
      <Input
        onChange={(e) => onFilterChange(e)}
        value={String(price)}
        name={ECatalogFilters.PRICE}
        button="outline"
        placeholder="Price"
        type="number"
        maxLength={25}
        icon={<PriceIcon />}
      />
    </div>
  );
};

export default CardFilters;
