import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      const response = await axios.post("/users/signup", userData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      const response = await axios.post("/users/login", userData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const response = await axios.post("/users/logout");
    console.log(response.data);
    clearAuthHeader();
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});
