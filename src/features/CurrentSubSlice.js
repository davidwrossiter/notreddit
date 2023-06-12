import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSub: {}
}

export const CurrentSubSlice = createSlice({
    name:'currentSub',
    initialState,
    reducers: {
        setCurrentSub: (state, action) => {
            state.currentSub = {
                subName: action.payload.subName,
                subInfo: action.payload.subInfo
            }
        }
    }
})

export const { setCurrentSub } = CurrentSubSlice.actions;
export const selectCurrentSub = (state) => state.currentSub.currentSub
export default CurrentSubSlice.reducer;