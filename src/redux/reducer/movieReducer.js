import actionType from "../actions/actionType"

const initialState = {}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    //popularMovie
    case actionType.SET_POPULAR_MOVIE_REQUEST:
      return {
        ...state,
      }
    case actionType.SET_POPULAR_MOVIE_SUCCESS:
      return {
        ...state,
        popularMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case actionType.SET_POPULAR_MOVIE_FAILURE:
      return {
        ...state,
        popularMovieError: {
          errorMessage: action.payload,
        },
      }
    //nowPlayingMovie
    case actionType.SET_NOWPLAYING_MOVIE_REQUEST:
      return {
        ...state,
      }
    case actionType.SET_NOWPLAYING_MOVIE_SUCCESS:
      return {
        ...state,
        nowPlayingMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case actionType.SET_NOWPLAYING_MOVIE_FAILURE:
      return {
        ...state,
        nowPlayingMovieError: {
          errorMessage: action.payload.error,
        },
      }
    //upComingMovie
    case actionType.SET_UPCOMING_MOVIE_REQUEST:
      return {
        ...state,
      }
    case actionType.SET_UPCOMING_MOVIE_SUCCESS:
      return {
        ...state,
        upComingMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case actionType.SET_UPCOMING_MOVIE_FAILURE:
      return {
        ...state,
        upComingMovieError: {
          errorMessage: action.payload.error,
        },
      }
    //topRatedMovie
    case actionType.SET_TOPRATED_MOVIE_REQUEST:
      return {
        ...state,
      }
    case actionType.SET_TOPRATED_MOVIE_SUCCESS:
      return {
        ...state,
        topRatedMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case actionType.SET_TOPRATED_MOVIE_FAILURE:
      return {
        ...state,
        topRatedMovieError: {
          errorMessage: action.payload.error,
        },
      }

    default:
      return state
  }
}
