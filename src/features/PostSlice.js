import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postInformation: {}
}

export const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPosts: (state, action) => {
            // the action payload is an array of objects returned from an API call
            state.postInformation = action.payload
        }
    }
})

export const { getPosts } = PostSlice.actions;
export const selectPosts = (state) => state.post.postInformation;
export default PostSlice.reducer;

