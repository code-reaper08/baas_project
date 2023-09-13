import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/register/registerSlice";

export const store = configureStore({
  reducer: {
    // configuring the reducer called registerUser
    register: registerReducer,
  },
});
