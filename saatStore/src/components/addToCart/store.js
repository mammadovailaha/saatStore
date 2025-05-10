import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from './addToCartSlice';

 export const store=configureStore(
    {
        reducer:{
            counter:addToCartReducer,
        },
    }
);