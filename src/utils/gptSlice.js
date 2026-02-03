import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptShowingStatus: false,
        gptSearchResult: null,
        gptPreviousSearchResult: null,
    },
    reducers:{
        toggleGptShowingStatus: (state) => {
            state.gptShowingStatus = !state.gptShowingStatus;
        },
        addGptSearchResult: (state, action) => {
            state.gptSearchResult = action.payload;
        },
        addGptPreviousSearchResult: (state, action) => {
            state.gptPreviousSearchResult = action.payload;
        },
        removeGptSearchResult: (state) => {
            state.gptSearchResult = null;
        }
    }
});

export const { 
    toggleGptShowingStatus, 
    addGptSearchResult, 
    addGptPreviousSearchResult,
    removeGptSearchResult 
} = gptSlice.actions;
export default gptSlice.reducer;