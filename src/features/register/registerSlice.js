import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    // anonymous function
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { registerUser } = registerSlice.actions;

export const selectUser = (state) => state.register.users;

export default registerSlice.reducer;
