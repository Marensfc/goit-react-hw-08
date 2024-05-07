import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://663280a5c51e14d69564a66e.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(
        "https://663280a5c51e14d69564a66e.mockapi.io/contacts"
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      console.log(contact);
      await axios.post(
        "https://663280a5c51e14d69564a66e.mockapi.io/contacts",
        contact
      );
      const response = await axios.get(
        "https://663280a5c51e14d69564a66e.mockapi.io/contacts"
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      await axios.delete(
        `https://663280a5c51e14d69564a66e.mockapi.io/contacts/${contactId}`
      );
      const response = await axios.get(
        "https://663280a5c51e14d69564a66e.mockapi.io/contacts"
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
