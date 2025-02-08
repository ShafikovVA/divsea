import { configureStore } from '@reduxjs/toolkit'
import {adaptiveSlice} from "@/store/reducers/adaptiveReducer";

export const makeStore = () => {
  return configureStore({
    reducer: {
      adaptive: adaptiveSlice.reducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']