import {
  SET_AIRING_TODAY_TVSHOW_DATA,
  SET_ONTV_TVSHOW_DATA,
  SET_POPULAR_TVSHOW_DATA,
  SET_RESET_STORE,
  SET_TOPRATED_TVSHOW_DATA,
} from "../actions/actionType"

// reducer with initial state
const initialState = {
  popularTvShow: { pagetitle: "", data: "", pagecount: "" },
  airingTodayTvShow: { pagetitle: "", data: "", pagecount: "" },
  onTvTvShow: { pagetitle: "", data: "", pagecount: "" },
  topRatedTvShow: { pagetitle: "", data: "", pagecount: "" },
}

export const tvShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_TVSHOW_DATA:
      return {
        ...state,
        popularTvShow: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case SET_AIRING_TODAY_TVSHOW_DATA:
      return {
        ...state,
        airingTodayTvShow: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case SET_ONTV_TVSHOW_DATA:
      return {
        ...state,
        onTvTvShow: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case SET_TOPRATED_TVSHOW_DATA:
      return {
        ...state,
        topRatedTvShow: {
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
