import { INftsFilters } from '@/types/nfts/INftFilters';
import { INfts } from '@/types/nfts/INfts';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: INfts = {
  first: 0,
  prev: 0,
  next: 0,
  last: 0,
  pages: 0,
  items: 0,
  pending: true,
  data: [],
};
export const nftPerPage = '20';

const fetchNfts = () => {
  let filtersValue: INftsFilters = {};
  let pageValue: number = 1;

  return createAsyncThunk(
    'nfts/fetchCards',
    async ({ page, filters }: { page?: number; filters?: INftsFilters }) => {
      if (page) {
        pageValue = page;
      }
      if (filters) {
        filtersValue = filters;
      }
      const queryString = new URLSearchParams({
        ...filtersValue,
        _page: pageValue?.toString() || '',
        _per_page: nftPerPage,
      }).toString();
      try {
        const response = await fetch(
          `/api/catalog${queryString ? '?' + queryString : ''}`,
        );
        const responseData: INfts = await response.json();
        return responseData;
      } catch (error) {
        console.error(error);
        return initialState as INfts;
      }
    },
  );
};

export const getNfts = fetchNfts();

export const nftsSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    setNfts: (state, action: PayloadAction<INfts>) => {
      Object.assign(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNfts.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getNfts.fulfilled, (state, action) => {
      Object.assign(state, { ...action.payload, pending: false });
    });
  },
});

export const { setNfts } = nftsSlice.actions;
export default nftsSlice.reducer;
