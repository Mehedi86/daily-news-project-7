import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        value: 0
    },
    {
        id: 2,
        value: 0
    }
]

const couterSlice = createSlice({
    name: "counter",
    initialState: initialState

})