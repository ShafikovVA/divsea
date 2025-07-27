import { configureStore } from '@reduxjs/toolkit';
import adaptiveReducer from '@/store/reducers/ui/adaptiveReducer';
import mobileMenuReducer from '@/store/reducers/ui/mobileMenuReducer';
import modalReducer from './reducers/ui/modalsReduser';
import catalogFiltersReducer from './reducers/filters/catalogFilterReducer';

export const makeStore = () => {
  return configureStore({
    reducer: {
      adaptive: adaptiveReducer,
      mobileMenu: mobileMenuReducer,
      modal: modalReducer,
      catalogFilters: catalogFiltersReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
