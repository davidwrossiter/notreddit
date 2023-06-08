import { configureStore } from '@reduxjs/toolkit';
import PostReducer from '../features/PostSlice';
import CurrentSubReducer from '../features/CurrentSubSlice';
export const store = configureStore({
  reducer: {
    post: PostReducer,
    currentSub: CurrentSubReducer,
  },
});
