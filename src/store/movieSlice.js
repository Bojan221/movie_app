import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState:{
        allMovies: [],
        isLoading: false,
    },
    reducers: {
        saveAllMoviesAction: (state,action) => {
            console.log(action.payload)
            state.allMovies = action.payload;
            state.isLoading = true
        }
    }
})

export const {saveAllMoviesAction} = movieSlice.actions;
export default movieSlice.reducer