import { call, put } from "redux-saga/effects"
import { getApiCall } from "../../API/ApiCallGet"
import actionType from "../actions/actionType"

export function* getPopularTvShowData(action) {
  try {
    localStorage.setItem("PopularTvShow", JSON.stringify(action.payload))
    const localData = JSON.parse(localStorage.getItem("PopularTvShow"))
    if (localData) {
      yield put({
        type: actionType.SET_POPULAR_TVSHOW_SUCCESS,
        payload: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      })
    }
  } catch (error) {
    yield put({
      type: actionType.SET_POPULAR_TVSHOW_FAILURE,
      payload: error.message,
    })
  }
}

export function* getAiringTodayTvShowData(action) {
  try {
    localStorage.setItem("AiringTodayTvShow", JSON.stringify(action.payload))
    const localData = JSON.parse(localStorage.getItem("AiringTodayTvShow"))
    if (localData) {
      yield put({
        type: actionType.SET_AIRING_TODAY_TVSHOW_SUCCESS,
        payload: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      })
    }
  } catch (error) {
    yield put({
      type: actionType.SET_AIRING_TODAY_TVSHOW_FAILURE,
      payload: error.message,
    })
  }
}

export function* getOnTVTvShowData(action) {
  try {
    localStorage.setItem("OnTvTvShow", JSON.stringify(action.payload))
    const localData = JSON.parse(localStorage.getItem("OnTvTvShow"))
    if (localData) {
      yield put({
        type: actionType.SET_ONTV_TVSHOW_SUCCESS,
        payload: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      })
    }
  } catch (error) {
    yield put({
      type: actionType.SET_ONTV_TVSHOW_FAILURE,
      payload: error.message,
    })
  }
}

export function* getTopRatedTvShowData(action) {
  try {
    localStorage.setItem("TopRatedTvShow", JSON.stringify(action.payload))
    const localData = JSON.parse(localStorage.getItem("TopRatedTvShow"))
    if (localData) {
      yield put({
        type: actionType.SET_TOPRATED_TVSHOW_SUCCESS,
        payload: {
          pagetitle: action.payload.pagetitle,
          data: action.payload.data,
          pagecount: action.payload.pagecount,
        },
      })
    }
  } catch (error) {
    yield put({
      type: actionType.SET_TOPRATED_TVSHOW_FAILURE,
      payload: error.message,
    })
  }
}

export default {
  getPopularTvShowData,
  getAiringTodayTvShowData,
  getOnTVTvShowData,
  getTopRatedTvShowData,
}
