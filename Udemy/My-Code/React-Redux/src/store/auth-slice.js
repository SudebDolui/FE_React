import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {isAuthenticated: false};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
    state.isAuthenticated = true; //# mutable but emmer does create immutable
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  },
});

export const authActions = authSlice.actions;

// export default authSlice;
export default authSlice.reducer;