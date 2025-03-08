import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "./Reducers/Login/userSlice";
import { thunk } from "redux-thunk";
const store = configureStore({
  reducer: {
    user: userDetailsSlice, // You can add more reducers here
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
