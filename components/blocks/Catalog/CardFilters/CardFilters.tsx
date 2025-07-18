'use client';
import { useState, useRef } from 'react';
import Input from '@/components/ui/Inputs/Input/Input';
import { INftsFilters } from '@/types/nfts/INftFilters';
import { useAppDispatch } from '@/store/hooks';
import { getNfts } from '@/store/reducers/business/nftsReducer';
import { debounce } from '@/utils/debounce';
import CategoryIcon from '@/assets/icons/catalog/category.svg';
import CollectionIcon from '@/assets/icons/catalog/collection.svg';
import PriceIcon from '@/assets/icons/catalog/price.svg';

const CardFilters = () => {
  const [filters, setFilters] = useState<INftsFilters>({});
  const dispatch = useAppDispatch();

  const debouncedApplyFilters = useRef(
    debounce((filters: INftsFilters) => {
      dispatch(getNfts({ filters }));
    }, 2000),
  ).current;

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters };
    if (filters[e.target.name] && e.target.value === '') {
      newFilters[e.target.name] = e.target.value;
      delete filters[e.target.name];
      setFilters({ ...filters });
    } else {
      newFilters[e.target.name] = e.target.value;
    }

    setFilters(newFilters);
    debouncedApplyFilters(newFilters);
  };

  return (
    <div className={'catalog__filters'}>
      <Input
        onChange={(e) => onFilterChange(e)}
        name="category"
        button="outline"
        placeholder="Category"
        icon={<CategoryIcon />}
      />
      <Input
        onChange={(e) => onFilterChange(e)}
        name="collection"
        button="outline"
        placeholder="Collection"
        icon={<CollectionIcon />}
      />
      <Input
        onChange={(e) => onFilterChange(e)}
        name="price"
        button="outline"
        placeholder="Price"
        icon={<PriceIcon />}
      />
    </div>
  );
};

export default CardFilters;
