import { getLogin, getTestDetails } from "./action";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loginData:null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.loginData = action.payload;
      })
      .addCase(getLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getTestDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTestDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getTestDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
