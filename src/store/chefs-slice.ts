import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dataFetch from "../utils/dataFetch";

export const fetchChefs = createAsyncThunk("chefs/fetchChefs", async () => {
  const response = await dataFetch.get("/chefs");
  return response.data;
});
export const fetchChefRestaurants = createAsyncThunk(
  "chefs/fetchChefRestaurant",
  async (chefId: string) => {
    const response = await dataFetch.get(`/chefs/${chefId}/restaurants`);
    return response.data;
  }
);

const chefsSlice = createSlice({
  name: "chefs",
  initialState: {
    sayHi: "hello",
    chefs: [],
    cotw: {
      _id: "",
      name: "",
      image: "",
      description: "",
    },
    cotwRestaurants: [],
    isChefsLoading: false,
    isCotwLoading: false,
  },
  reducers: {
    toggle(state) {
      state.sayHi = "hello danny";
      console.log("hello");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchChefs.pending, (state, action) => {
        console.log("loading chefs fetch");
        state.isChefsLoading = true;
      })
      .addCase(fetchChefs.fulfilled, (state, action) => {
        const { chefs } = action.payload;
        const [cotw] = chefs.filter(
          (chef: { cotw: boolean }) => chef.cotw === true
        );

        state.chefs = chefs;
        state.cotw = cotw;
        state.isChefsLoading = false;
      })
      .addCase(fetchChefs.rejected, (state, action) => {
        state.isChefsLoading = false;
        console.log(action.error.message);
      })
      .addCase(fetchChefRestaurants.pending, (state, action) => {
        state.isCotwLoading = true;
      })
      .addCase(fetchChefRestaurants.fulfilled, (state, action) => {
        state.isCotwLoading = false;

        const { restaurants: cotwRestaurants } = action.payload;
        state.cotwRestaurants = cotwRestaurants;
      })
      .addCase(fetchChefRestaurants.rejected, (state, action) => {
        state.isCotwLoading = false;
        console.log(action.error.message);
      });
  },
});

export const chefsActions = chefsSlice.actions;

export default chefsSlice;
