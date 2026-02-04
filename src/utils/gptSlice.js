import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptShowingStatus: false,
        gptSearchMovieNames: null,
        gptSearchResult: null,
        gptPreviousSearchMovieNames: null,
        gptPreviousSearchResult: null,
    },
    reducers: {
        toggleGptShowingStatus: (state) => {
            state.gptShowingStatus = !state.gptShowingStatus;
        },
        addGptSearchResult: (state, action) => {
            state.gptSearchResult = action.payload;
        },
        addGptPreviousSearchResult: (state, action) => {
            state.gptPreviousSearchResult = action.payload;
        },
        addGptSearchMovieNames: (state, action) => {
            state.gptSearchMovieNames = action.payload;
        },
        addGptPreviousSearchMovieNames: (state, action) => {
            state.gptPreviousSearchMovieNames = action.payload;
        },
        removeGptSearchResult: (state) => {
            state.gptSearchResult = null;
        },
        removeGptSearchMovieNames: (state) => {
            state.gptSearchMovieNames = null;
        },
        swapCurrentMoviesToPreviousMovies: (state) => {
            if (state.gptSearchMovieNames !== null && state.gptSearchResult !== null) {
                state.gptPreviousSearchMovieNames = state.gptSearchMovieNames;
                state.gptPreviousSearchResult = state.gptSearchResult;
                state.gptSearchMovieNames = null;
                state.gptSearchResult = null;
            }
        }
    }
});

export const {
    toggleGptShowingStatus,
    addGptSearchResult,
    addGptPreviousSearchResult,
    addGptSearchMovieNames,
    addGptPreviousSearchMovieNames,
    swapCurrentMoviesToPreviousMovies,
    removeGptSearchResult,
    removeGptSearchMovieNames,
} = gptSlice.actions;
export default gptSlice.reducer;