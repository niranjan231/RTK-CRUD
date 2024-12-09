import { createSlice } from "@reduxjs/toolkit";



// const initialState = { value: 20, array:[] };


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 20,
        array: []
    },

    reducers: {}
})
export default counterSlice.reducer;
