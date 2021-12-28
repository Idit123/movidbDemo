import { takeEvery } from "redux-saga/effects"
import actionType from "../actions/actionType"
import { getApiData } from "./movieSaga"

export default function* rootSaga() {
  // Fetch movieData
  yield takeEvery(actionType.SET_POPULAR_MOVIE_REQUEST, getApiData)
}
