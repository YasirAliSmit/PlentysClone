import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './cartSlice'
import newSlice from './newSlice'
export const store = configureStore({
  reducer: {
    counter:counterSlice ,
    new:newSlice
    
  },
})