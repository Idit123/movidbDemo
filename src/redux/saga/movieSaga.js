import { call, put } from "redux-saga/effects"
import { getApiCall } from "../../API/ApiCallGet"
import actionType from "../actions/actionType"

const callApi = async (category, pagecount) => {
  const { title, Response } = await getApiCall(category, pagecount)
  return { title, Response }
}

export function* getPopularMovieData(action) {
  try {
    const result = yield call(
      callApi,
      action.payload.category,
      action.payload.pagecount
    )
    yield put({
      type: actionType.SET_POPULAR_MOVIE_SUCCESS,
      payload: {
        pagetitle: result.title,
        data: [...action.payload.data, ...result.Response.data.results],
        pagecount: action.payload.pagecount,
      },
    })
  } catch (error) {
    yield put({
      type: actionType.SET_POPULAR_MOVIE_FAILURE,
      payload: error.message,
    })
  }
}

export function* getNowPlayingMovieData(action) {
  try {
    const result = yield call(
      callApi,
      action.payload.category,
      action.payload.pagecount
    )
    yield put({
      type: actionType.SET_NOWPLAYING_MOVIE_SUCCESS,
      payload: {
        pagetitle: result.title,
        data: [...action.payload.data, ...result.Response.data.results],
        pagecount: action.payload.pagecount,
      },
    })
  } catch (error) {
    yield put({
      type: actionType.SET_NOWPLAYING_MOVIE_FAILURE,
      payload: error.message,
    })
  }
}

export function* getUpComingMovieData(action) {
  try {
    const result = yield call(
      callApi,
      action.payload.category,
      action.payload.pagecount
    )
    yield put({
      type: actionType.SET_UPCOMING_MOVIE_SUCCESS,
      payload: {
        pagetitle: result.title,
        data: [...action.payload.data, ...result.Response.data.results],
        pagecount: action.payload.pagecount,
      },
    })
  } catch (error) {
    yield put({
      type: actionType.SET_UPCOMING_MOVIE_FAILURE,
      payload: error.message,
    })
  }
}

export function* getTopRatedMovieData(action) {
  try {
    const result = yield call(
      callApi,
      action.payload.category,
      action.payload.pagecount
    )
    yield put({
      type: actionType.SET_TOPRATED_MOVIE_SUCCESS,
      payload: {
        pagetitle: result.title,
        data: [...action.payload.data, ...result.Response.data.results],
        pagecount: action.payload.pagecount,
      },
    })
  } catch (error) {
    yield put({
      type: actionType.SET_TOPRATED_MOVIE_FAILURE,
      payload: error.message,
    })
  }
}
export default {
  getPopularMovieData,
  getNowPlayingMovieData,
  getUpComingMovieData,
  getTopRatedMovieData,
}
