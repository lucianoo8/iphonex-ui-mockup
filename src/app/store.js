import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../features/articles/articleSlice'

export default configureStore({
  reducer: {
    article: articleReducer,
  },
});