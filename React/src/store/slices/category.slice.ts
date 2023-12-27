import { createSlice } from "@reduxjs/toolkit";

enum CategoriesStatus {
    active,
    inactive
}
export interface Categories {
    id: number;
    name: string;
    avatar: string;
    status: CategoriesStatus
}

interface InitState {
    data: null | Categories
}

const  initialState: InitState = {
    data: null
} 

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const categoryReducer = categorySlice.reducer;
export const categoryActions = categorySlice.actions;