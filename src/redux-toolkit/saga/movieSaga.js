import { call, put } from "redux-saga/effects"
import { getApiCall } from "../../API/ApiCallGet"
import { movieSuccess, movieFailure } from "../slice/movieSlice"

const callApi = async (category, pagecount) => {
  const { title, Response } = await getApiCall(category, pagecount)
  return { title, Response }
}

export function* getPopularMovieData(action) {
  try {
    const { category, movie, pageCount } = action.payload
    const { title, Response } = yield call(callApi, category, pageCount)
    const movieData = [...movie, ...Response.data.results]
    yield put(movieSuccess({ title, movieData, pageCount }))
  } catch (error) {
    yield put(movieFailure(error.message))
  }
}

export default {
  getPopularMovieData,
}
