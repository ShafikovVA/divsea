import { configureStore } from '@reduxjs/toolkit';
import adaptiveReducer from '@/store/reducers/ui/adaptiveReducer';
import mobileMenuReducer from '@/store/reducers/ui/mobileMenuReducer';
import nftsReducer from './reducers/business/nftsReducer';
import modalReducer from './reducers/ui/modalsReduser';

export const makeStore = () => {
  return configureStore({
    reducer: {
      adaptive: adaptiveReducer,
      mobileMenu: mobileMenuReducer,
      nfts: nftsReducer,
      modal: modalReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
