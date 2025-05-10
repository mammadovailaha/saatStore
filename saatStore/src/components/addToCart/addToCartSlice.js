import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:0,
};

export const addToCartSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        add:(state)=>{
            state.value += 1;
        },
        remove:(state)=>{
            state.value -= 1;
        },

    },
});
export const {add, remove}=addToCartSlice.actions;
export default addToCartSlice.reducer;