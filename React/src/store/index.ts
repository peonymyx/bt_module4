import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./slices/category.slice";
const RootReducer = combineReducers({
    categoryStore: categoryReducer
})

export type Store = ReturnType<typeof RootReducer>;

export const store = configureStore({
    reducer: RootReducer
})