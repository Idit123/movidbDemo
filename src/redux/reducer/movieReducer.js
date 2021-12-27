import { ActionTypes } from "../actions"
import { getApiCall } from "../../API/ApiCallGet"

// reducer with initial state
const initialState = {
  popularMovie: { pagetitle: "", data: "", pagecount: "" },
  nowPlayingMovie: { pagetitle: "", data: "", pagecount: "" },
  upComingMovie: { pagetitle: "", data: "", pagecount: "" },
  topRatedMovie: { pagetitle: "", data: "", pagecount: "" },
}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_API_CALL:
      const response = async () => {
        console.log(`category`, action.payload.category)
        console.log(`count`, action.payload.pagecount)
        const response = await getApiCall(
          action.payload.category,
          action.payload.pagecount
        )
        console.log(`response`, response)
      }
      return {}
    case ActionTypes.SET_POPULAR_MOVIE_DATA:
      return {
        ...state,
        popularMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case ActionTypes.SET_NOWPLAYING_MOVIE_DATA:
      return {
        ...state,
        nowPlayingMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case ActionTypes.SET_UPCOMING_MOVIE_DATA:
      return {
        ...state,
        upComingMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case ActionTypes.SET_TOPRATED_MOVIE_DATA:
      return {
        ...state,
        topRatedMovie: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      }
    case ActionTypes.SET_RESET_STORE:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
