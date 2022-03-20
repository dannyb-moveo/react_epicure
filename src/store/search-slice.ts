import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dataFetch from "../utils/dataFetch";

export const fetchSearchQuery = createAsyncThunk(
  "search/fetchSearchQuery",
  async (name: string) => {
    console.log(name);
    const response = await dataFetch.get(`/search?name=${name}`);
    return response.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: [],
    isLoading: false,
  },
  reducers: {
    toggle(state, action) {
      console.log("hello");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSearchQuery.pending, (state, action) => {
        console.log("loading dishes fetch");
        state.isLoading = true;
      })
      .addCase(fetchSearchQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        const { results } = action.payload;
        state.searchResults = results;
      })
      .addCase(fetchSearchQuery.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.error.message);
      });
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
