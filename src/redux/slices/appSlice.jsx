import { createSlice } from '@reduxjs/toolkit';

// Doğru yazım: 'intialState' yerine 'initialState'
const initialState = {
  loading: false,
};

// Doğru yazım: 'reducer' yerine 'reducers' ve 'extraReducer' yerine 'extraReducers'
export const appSlice = createSlice({
  name: "app",
  initialState, // Doğru başlangıç durumu
  reducers: {
    // Reducer fonksiyonları buraya eklenecek
    setLoading: (state, action) => {
      state.loading = action.payload; // loading durumunu güncellemek için örnek bir reducer
    },
  },
  extraReducers: (builder) => {
    // Ek durum işleyicileri buraya eklenebilir
  },
});

export const { setLoading } = appSlice.actions; // Eylemi dışa aktarın

export default appSlice.reducer;
