import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IMobileMenuState {
  open: boolean;
}

const initialState: IMobileMenuState = {
  open: false,
};

export const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState,
  reducers: {
    setIsMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        open: action.payload,
      };
    },
  },
  selectors: {
    isMobileMenuOpenSelector: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsMobileMenuOpen } = mobileMenuSlice.actions;

export const { isMobileMenuOpenSelector } = mobileMenuSlice.selectors;

export default mobileMenuSlice.reducer;
