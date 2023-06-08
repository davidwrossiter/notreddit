import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSub: {}
}

export const CurrentSubSlice = createSlice({
    name:'currentSub',
    initialState,
    reducers: {
        setCurrentSub: (state, action) => {
            state.currentSub = action.payload
        }
    }
})

export const { setCurrentSub } = CurrentSubSlice.actions;
export const selectCurrentSub = (state) => state.currentSub.currentSub
export default CurrentSubSlice.reducer;