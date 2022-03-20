import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// slices
import chefsSlice from "./chefs-slice";
import restaurantsSlice from "./restaurants-slice";
import dishesSlice from "./dishes-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    chefs: chefsSlice.reducer,
    restaurants: restaurantsSlice.reducer,
    dishes: dishesSlice.reducer,
    search: searchSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
