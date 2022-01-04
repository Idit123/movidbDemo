import { takeEvery } from "redux-saga/effects"
import { movieRequest } from "../slice/movieSlice"
import movieSaga from "./movieSaga"

export default function* rootSaga() {
  // Fetch movieData
  yield takeEvery(movieRequest, movieSaga.getPopularMovieData)
}
