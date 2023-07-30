// import { createStore } from 'redux';
// import { createStore } from '@reduxjs/toolkit';
// import { createSlice, configureStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './counter-slice';
import authSliceReducer from './auth-slice';

// const initialState = {counter: 0, showCounter: true};
// const initialCounterState = {counter: 0, showCounter: true};
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//     state.counter++; //# mutable but emmer does create immutable
//     // return {counter: state.counter + 1, showCounter: state.showCounter}; //# Immutable
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     //   state.counter = state.counter + action.payload.amount;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = {isAuthenticated: false};
// const authSlice = createSlice({
//   name: "Auth",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//     state.isAuthenticated = true; //# mutable but emmer does create immutable
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     }
//   },
// });

//---> Initial Code(Old format of redux and does not support redux toolkit. It also had the issue of having multiple reducers for bigger applications.)

// const counterReducer = (state = initialState, action ) => {
// if(action.type === 'increment') return {counter: state.counter + 1, showCounter: state.showCounter};
// if(action.type === 'decrement') return {counter: state.counter - 1, showCounter: state.showCounter};
// if(action.type === 'increase') return {counter: state.counter + action.amount, showCounter: state.showCounter};
// if(action.type === 'toggle') return {showCounter: !state.showCounter, counter: state.counter};

// switch (action.type) {
//     case 'increment':
//         return {counter: state.counter + 1, showCounter: state.showCounter};
//     case 'decrement':
//         return {counter: state.counter - 1, showCounter: state.showCounter};
//     case 'increase':
//         return {counter: state.counter + action.amount, showCounter: state.showCounter};
//     case 'toggle':
//         return {showCounter: !state.showCounter, counter: state.counter + 1};

//     default:
//         return state;
// }

// return state;
// }

// const store = createStore(counterReducer);

// counterSlice.actions.increment
const store = configureStore({
    // reducer: {counter: counterSlice.reducer}
    // reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
    reducer: {counter: counterSliceReducer, auth: authSliceReducer}
});

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
