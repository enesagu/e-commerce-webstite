import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false,
  maxQuantity:50
};

const BASE_URL = "https://fakestoreapi.com";

// API'den tüm ürünleri almak için asenkron işlem
export const getAllProducts = createAsyncThunk("product/getAllProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {

    setSelectedProduct: (state,action)=>{
      state.selectedProduct = action.payload;
    }


  },
  extraReducers: (builder) => { 
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {setSelectedProduct} = productSlice.actions;

export default productSlice.reducer;
