import { configureStore } from '@reduxjs/toolkit';
import { adaptiveSlice } from '@/store/reducers/adaptiveReducer';
import { mobileMenuSlice } from '@/store/reducers/mobileMenuReducer';

export const makeStore = () => {
  return configureStore({
    reducer: {
      adaptive: adaptiveSlice.reducer,
      mobileMenu: mobileMenuSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
