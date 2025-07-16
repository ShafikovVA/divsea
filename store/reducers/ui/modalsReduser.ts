import { IModal, IModalProcedure } from '@/types/modals/IModal';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IModal[] = [];

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<IModal>) => {
      Object.assign(state, [...state, action.payload]);
    },
    hideModal: (state, action: PayloadAction<IModalProcedure>) => {
      Object.assign(
        state,
        state.filter((_, index) => index !== action.payload.index),
      );
    },
  },
});

export default modalsSlice.reducer;
