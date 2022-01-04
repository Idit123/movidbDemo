import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  movie: {
    pagetitle: null,
    movieData: [],
    pagecount: null,
    errorMessage: null,
  },
}

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    movieRequest: (state, action) => {},
    movieSuccess: (state, action) => {
      state.movie.pagetitle = action.payload.title
      state.movie.movieData = action.payload.movieData
      state.movie.pagecount = action.payload.pageCount
    },
    movieFailure: (state, action) => {
      state.errorMessage = action.payload
    },
  },
})

export const { movieRequest, movieFailure, movieSuccess } = movieSlice.actions
export default movieSlice.reducer
