import { configureStore } from '@reduxjs/toolkit';
import webPostReducer from '../features/webPost/webPostSlice';
export const store = configureStore({
  reducer: {
    webPost: webPostReducer
  },
});
