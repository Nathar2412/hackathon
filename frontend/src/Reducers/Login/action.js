import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMethod } from "../../APIManager/APIMethod";

export const getLogin = createAsyncThunk(
  "data/getLogin",
  async (url, thunkAPI) => {
    // const response = await getMethod(url);
    // return response.json();
    const response = await fetch(url);
    return response.json();
  }
);

export const getTestDetails = createAsyncThunk(
  "data/getTestDetails",
  async (url, thunkAPI) => {
    // const response = await getMethod(url);
    // return response.json();
    const response = await fetch(url);
    return response.json();
  }
);
