import {
  SET_NOWPLAYING_MOVIE_DATA,
  SET_POPULAR_MOVIE_DATA,
  SET_RESET_STORE,
  SET_TOPRATED_MOVIE_DATA,
  SET_UPCOMING_MOVIE_DATA,
} from "../actions/actionType"

// reducer with initial state
const initialState = {
  popularMovie: { pagetitle: "", data: "", pagecount: "" },
  nowPlayingMovie: { pagetitle: "", data: "", pagecount: "" },
  upComingMovie: { pagetitle: "", data: "", pagecount: "" },
  topRatedMovie: { pagetitle: "", data: "", pagecount: "" },
}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_MOVIE_DATA:
      return {
        ...state,
        popularMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case SET_NOWPLAYING_MOVIE_DATA:
      return {
        ...state,
        nowPlayingMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case SET_UPCOMING_MOVIE_DATA:
      return {
        ...state,
        upComingMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case SET_TOPRATED_MOVIE_DATA:
      return {
        ...state,
        topRatedMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case SET_RESET_STORE:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
