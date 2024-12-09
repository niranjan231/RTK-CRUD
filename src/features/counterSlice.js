import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Post Action
export const  postUserApi = createAsyncThunk("postUserApi",async (formdata)=>{

})



export const counterSlice = createSlice({
    name: "counter",
    initialState: {
       users : [],
       loading : false,
       error : null
    },

    reducers: {}
})
export default counterSlice.reducer;
