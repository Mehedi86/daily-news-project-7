import { getComments } from "@/api/commentsApi"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface InitialState {
    comments: any[],
    isLoading: boolean,
    isError: boolean,
    error: string | null
}

const initialState: InitialState = {
    comments: [],
    isLoading: false,
    isError: false,
    error: null
}

export const fetchComments = createAsyncThunk("comment/fetch", async () => {
    const comments = await getComments();  // ✅ FIXED
    return comments;
})

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message || 'Something went wrong';
            })
    }
})

export default commentsSlice.reducer;
