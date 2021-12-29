import { takeEvery } from "redux-saga/effects"
import actionType from "../actions/actionType"
import movieSaga from "./movieSaga"
import tvShowSaga from "./tvShowSaga"

export default function* rootSaga() {
  // Fetch movieData
  yield takeEvery(
    actionType.SET_POPULAR_MOVIE_REQUEST,
    movieSaga.getPopularMovieData
  )
  yield takeEvery(
    actionType.SET_NOWPLAYING_MOVIE_REQUEST,
    movieSaga.getNowPlayingMovieData
  )
  yield takeEvery(
    actionType.SET_UPCOMING_MOVIE_REQUEST,
    movieSaga.getUpComingMovieData
  )
  yield takeEvery(
    actionType.SET_TOPRATED_MOVIE_REQUEST,
    movieSaga.getTopRatedMovieData
  )
  yield takeEvery(
    actionType.SET_POPULAR_TVSHOW_REQUEST,
    tvShowSaga.getPopularTvShowData
  )
  yield takeEvery(
    actionType.SET_AIRING_TODAY_TVSHOW_REQUEST,
    tvShowSaga.getAiringTodayTvShowData
  )
  yield takeEvery(
    actionType.SET_ONTV_TVSHOW_REQUEST,
    tvShowSaga.getOnTVTvShowData
  )
  yield takeEvery(
    actionType.SET_TOPRATED_TVSHOW_REQUEST,
    tvShowSaga.getTopRatedTvShowData
  )
}
