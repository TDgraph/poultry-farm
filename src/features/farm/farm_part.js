//defines state and actions
import { createSlice } from '@reduxjs/toolkit';

// This state holds an array of registered farms
const initialState = {
  farms: [],
};

// creare a slice
const farmPart = createSlice({
  name: 'farm',
  initialState,
  reducers: {

    // Register a new afrm
    registerFarm: (state, action) => {
      state.farms.push(action.payload); //Adds a new farm to the array
    },
  },
});

export const { registerFarm } = farmPart.actions;
export default farmPart.reducer;
