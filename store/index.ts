import { configureStore } from '@reduxjs/toolkit';
import { adaptiveSlice } from '@/store/reducers/ui/adaptiveReducer';
import { mobileMenuSlice } from '@/store/reducers/ui/mobileMenuReducer';
import { nftsSlice } from './reducers/business/nftsReducer';

export const makeStore = () => {
  return configureStore({
    reducer: {
      adaptive: adaptiveSlice.reducer,
      mobileMenu: mobileMenuSlice.reducer,
      nfts: nftsSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
