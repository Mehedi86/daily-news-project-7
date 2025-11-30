import { getPosts } from "@/api/postsApi"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface PostsState {
    posts: any[];
    isLoading: boolean;
    isError: boolean;
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: null
};

export const fetchPosts = createAsyncThunk("posts/fetchPost", async () => {
    const posts = await getPosts();
    return posts;
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}, // optional, if you have normal reducers
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        });

        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message || "Something went wrong";
        });
    }
});


export default postsSlice.reducer;




