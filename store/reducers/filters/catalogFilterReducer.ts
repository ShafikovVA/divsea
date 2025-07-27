import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ECatalogFilters, ICatalogFilters } from '@/types/nfts/ICatalog';

const initialState: ICatalogFilters = {
  page: '1',
};

const setFilter: (
  name: keyof ICatalogFilters,
) => CaseReducer<ICatalogFilters, PayloadAction<string>> =
  (name) => (state, action) => {
    switch (name) {
      case ECatalogFilters.PAGE:
        return {
          ...state,
          page: String(action.payload),
        };
      case ECatalogFilters.CATEGORY:
        return { ...state, category: String(action.payload), page: '1' };
      case ECatalogFilters.COLLECTION:
        return { ...state, collection: String(action.payload), page: '1' };
      case ECatalogFilters.PRICE:
        return { ...state, price: String(action.payload), page: '1' };
      default:
        return {
          ...state,
        };
    }
  };

export const catalogFilterSlice = createSlice({
  name: 'catalogFilters',
  initialState,
  reducers: {
    setPage: setFilter(ECatalogFilters.PAGE),
    setCategory: setFilter(ECatalogFilters.CATEGORY),
    setCollection: setFilter(ECatalogFilters.COLLECTION),
    setPrice: setFilter(ECatalogFilters.PRICE),
  },
  selectors: {
    selectCatalogFilter: (state) => {
      return state;
    },
  },
});

export const { setPage, setCategory, setCollection, setPrice } =
  catalogFilterSlice.actions;

export const { selectCatalogFilter } = catalogFilterSlice.selectors;

export default catalogFilterSlice.reducer;
