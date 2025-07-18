import { IModal } from '@/types/modals/IModal';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IModal[] = [];

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<IModal>) => {
      Object.assign(state, [...state, action.payload]);
    },
    hideModal: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export default modalsSlice.reducer;

export const { showModal, hideModal } = modalsSlice.actions;
