import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './bannerSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    
  },
});

export default store;
