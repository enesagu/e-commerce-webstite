import {createSlice , createAsyncTunk} from '@reduxjs/toolkit';
import axios from 'axios';

const intialState = {
    product:[],
    selectedProduct : {},
    loading : false


}

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncTunk("getAllProduct",async())=>{
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
}


export const productSlice = createSlice({
    name:"product",
    intialState,
    reducer:{

    },
    extraReducer : (builder)=>{
        builder.addCase
    }
})

export const { } = productSlice.actions;

export default productSlice.reducer;




