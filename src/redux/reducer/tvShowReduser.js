import actionType from "../actions/actionType"

const initialState = {}
export const tvShowReducer = (state = initialState, action) => {
  switch (action.type) {
    //popularTvShow
    case actionType.SET_POPULAR_TVSHOW_REQUEST:
      return {
        ...state,
      }
    case actionType.SET_POPULAR_TVSHOW_SUCCESS:
      return {
        ...state,
        popularTvShow: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case actionType.SET_POPULAR_TVSHOW_FAILURE:
      return {
        ...state,
        popularTvShowError: {
          errorMessage: action.payload.error,
        },
      }
    //nowPlayingTvShow
    case actionType.SET_AIRING_TODAY_TVSHOW_REQUEST:
      return {
        ...state,
      }
    case actionType.SET_AIRING_TODAY_TVSHOW_SUCCESS:
      return {
        ...state,
        airingTodayTvShow: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case actionType.SET_AIRING_TODAY_TVSHOW_FAILURE:
      return {
        ...state,
        airingTodayTvShowError: {
          errorMessage: action.payload.error,
        },
      }
    //upComingTvShow
    case actionType.SET_ONTV_TVSHOW_REQUEST:
      return {
        ...state,
      }
    case actionType.SET_ONTV_TVSHOW_SUCCESS:
      return {
        ...state,
        onTvTvShow: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case actionType.SET_ONTV_TVSHOW_FAILURE:
      return {
        ...state,
        onTvTvShowError: {
          errorMessage: action.payload.error,
        },
      }
    //topRatedTvShow
    case actionType.SET_TOPRATED_TVSHOW_REQUEST:
      return {
        ...state,
      }
    case actionType.SET_TOPRATED_TVSHOW_SUCCESS:
      return {
        ...state,
        topRatedTvShow: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case actionType.SET_TOPRATED_TVSHOW_FAILURE:
      return {
        ...state,
        topRatedTvShowError: {
          errorMessage: action.payload.error,
        },
      }

    default:
      return state
  }
}
