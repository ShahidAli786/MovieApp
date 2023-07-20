import {createSlice} from '@reduxjs/toolkit';

type counterState = {
  value: number;
};

const initialState: counterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
