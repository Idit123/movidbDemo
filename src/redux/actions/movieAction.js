import {
  FETCH_API_CALL,
  SET_NOWPLAYING_MOVIE_DATA,
  SET_POPULAR_MOVIE_DATA,
  SET_RESET_STORE,
  SET_TOPRATED_MOVIE_DATA,
  SET_UPCOMING_MOVIE_DATA,
} from "./actionType"

const resetMovieStore = () => {
  return {
    type: SET_RESET_STORE,
  }
}

const movieApiCall = async (category, pagecount) => {
  return {
    type: FETCH_API_CALL,
    payload: {
      category,
      pagecount,
    },
  }
}

const popularMovieAction = (pagetitle, data, pagecount) => {
  return {
    type: SET_POPULAR_MOVIE_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}

const nowPlayingMovieAction = (pagetitle, data, pagecount) => {
  return {
    type: SET_NOWPLAYING_MOVIE_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}

const upComingMovieAction = (pagetitle, data, pagecount) => {
  return {
    type: SET_UPCOMING_MOVIE_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}

const topRatedMovieAction = (pagetitle, data, pagecount) => {
  return {
    type: SET_TOPRATED_MOVIE_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}

const movieAction = {
  resetMovieStore,
  movieApiCall,
  popularMovieAction,
  nowPlayingMovieAction,
  upComingMovieAction,
  topRatedMovieAction,
}
export default movieAction
