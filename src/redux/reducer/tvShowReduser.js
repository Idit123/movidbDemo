import actionType from "../actions/actionType"

const initialState = {}
export const tvShowReducer = (state = initialState, action) => {
  switch (action.type) {
    //popularMovie
    case actionType.SET_POPULAR_TVSHOW_REQUEST:
      return {
        ...state,
      }
    case actionType.SET_POPULAR_TVSHOW_SUCCESS:
      return {
        ...state,
        popularMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case actionType.SET_POPULAR_TVSHOW_FAILURE:
      return {
        ...state,
        popularMovieError: {
          errorMessage: action.payload.error,
        },
      }
    //nowPlayingMovie
    case actionType.SET_AIRING_TODAY_TVSHOW_REQUEST:
      return {
        ...state,
      }
    case actionType.SET_AIRING_TODAY_TVSHOW_SUCCESS:
      return {
        ...state,
        popularMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case actionType.SET_AIRING_TODAY_TVSHOW_FAILURE:
      return {
        ...state,
        popularMovieError: {
          errorMessage: action.payload.error,
        },
      }
    //upComingMovie
    case actionType.SET_ONTV_TVSHOW_REQUEST:
      return {
        ...state,
      }
    case actionType.SET_ONTV_TVSHOW_SUCCESS:
      return {
        ...state,
        popularMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case actionType.SET_ONTV_TVSHOW_FAILURE:
      return {
        ...state,
        popularMovieError: {
          errorMessage: action.payload.error,
        },
      }
    //topRatedMovie
    case actionType.SET_TOPRATED_TVSHOW_REQUEST:
      return {
        ...state,
      }
    case actionType.SET_TOPRATED_TVSHOW_SUCCESS:
      return {
        ...state,
        popularMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case actionType.SET_TOPRATED_TVSHOW_FAILURE:
      return {
        ...state,
        popularMovieError: {
          errorMessage: action.payload.error,
        },
      }

    default:
      return state
  }
}
