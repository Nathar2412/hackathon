import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMethod } from "../../APIManager/APIMethod";

export const getLogin = createAsyncThunk(
  "data/getLogin",
  async (arg, thunkAPI) => {
    // const response = await getMethod(url);
    // return response.json();
const{url,body}= arg
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
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
