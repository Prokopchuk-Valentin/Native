import { configureStore } from '@reduxjs/toolkit';
import type { ConfigureStoreOptions } from '@reduxjs/toolkit';
import postSlice from './postSlice';
import { SliceStateType } from '../types';


type PreloadState = {
  postSlice: SliceStateType;
};

const storeOptions: ConfigureStoreOptions<PreloadState> = {
  reducer: {
    postSlice,
  },
}

export const store = configureStore(storeOptions);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
