import {createSlice} from '@reduxjs/toolkit';


const intialState = {
    loading : false,


}

export const appSlice = createSlice({
    name:"app",
    intialState,
    reducer:{

    },
    extraReducer : (build)=>{

    }
})

export const { } = appSlice.actions;

export default appSlice.reducer;




