import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dataFetch from "../utils/dataFetch";

export const fetchDishes = createAsyncThunk("dishes/fetchDishes", async () => {
  const response = await dataFetch.get("/dishes");
  return response.data;
});

const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    sayHi: "hello",
    dishes: [],
    isLoading: false,
  },
  reducers: {
    toggle(state) {
      state.sayHi = "hello danny";
      console.log("hello");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDishes.pending, (state, action) => {
        console.log("loading dishes fetch");
        state.isLoading = true;
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.isLoading = false;

        let { dishes } = action.payload;
        dishes = dishes.slice(0, 3);
        dishes.sort((a: { name: string }, b: { name: string }) =>
          a.name.localeCompare(b.name)
        );

        state.dishes = dishes;
      })
      .addCase(fetchDishes.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.error.message);
      });
  },
});

export const dishesActions = dishesSlice.actions;

export default dishesSlice;
