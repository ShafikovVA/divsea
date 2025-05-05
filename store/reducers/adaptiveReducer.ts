import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAdaptiveState {
  isMobile: boolean;
  isTable: boolean;
}

const initialState: IAdaptiveState = {
  isMobile: false,
  isTable: false,
};

export const adaptiveSlice = createSlice({
  name: 'adaptive',
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isMobile: action.payload,
      };
    },
    setIsTable: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isTable: action.payload,
      };
    },
  },
  selectors: {
    adaptiveSelector: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsMobile, setIsTable } = adaptiveSlice.actions;

export const { adaptiveSelector } = adaptiveSlice.selectors;

export default adaptiveSlice.reducer;
