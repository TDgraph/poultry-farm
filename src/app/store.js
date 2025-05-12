import { configureStore } from '@reduxjs/toolkit';
import farmReducer from '../features/farm/farm_part.js';


// configure and export the store with the farm reducer
export const store = configureStore({
  reducer: {

    //manages farm data
    farm: farmReducer, 
  },
});