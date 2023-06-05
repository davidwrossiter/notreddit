import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardInfo: [],
}

export const webPostSlice = createSlice({
    name: 'webPost',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.cardInfo = [...state.cardInfo, action.payload]
        }
    }
})

export const { addPost } = webPostSlice.actions
export const selectCardInfo = (state) => state.webPost.cardInfo
export default webPostSlice.reducer