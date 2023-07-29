import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
    state.counter++; //# mutable but emmer does create immutable
    // return {counter: state.counter + 1, showCounter: state.showCounter}; //# Immutable
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    //   state.counter = state.counter + action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

// export default counterSlice;
export default counterSlice.reducer;

