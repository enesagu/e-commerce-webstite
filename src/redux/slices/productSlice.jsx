import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  filteredProducts: [], // New state for filtered products
  selectedProduct: {},
  loading: false,
  maxQuantity: 50,
  searchTerm: "", // New state for the search term
};

const BASE_URL = "https://fakestoreapi.com";

// API call to get all products
export const getAllProducts = createAsyncThunk("product/getAllProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload; // Initialize filtered products
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSelectedProduct, setSearchTerm } = productSlice.actions;

export default productSlice.reducer;
