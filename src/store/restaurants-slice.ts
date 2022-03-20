import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dataFetch from "../utils/dataFetch";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    const response = await dataFetch.get("/restaurants");
    return response.data;
  }
);

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: { sayHi: "hello", restaurants: [], isLoading: false },
  reducers: {
    toggle(state) {
      state.sayHi = "hello danny";
      console.log("hello");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRestaurants.pending, (state, action) => {
        console.log("loading restaurants fetch");
        state.isLoading = true;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;

        let { restaurants } = action.payload;
        restaurants = restaurants.slice(0, 3);
        restaurants.sort((a: { name: string }, b: { name: string }) =>
          a.name.localeCompare(b.name)
        );

        state.restaurants = restaurants;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.error.message);
      });
  },
});

export const restaurantsActions = restaurantsSlice.actions;

export default restaurantsSlice;
