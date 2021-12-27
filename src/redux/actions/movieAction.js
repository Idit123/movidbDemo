import { ActionTypes } from "."

const resetMovieStore = () => {
  return {
    type: ActionTypes.SET_RESET_STORE,
  }
}

const movieApiCall = async (category, pagecount) => {
  return {
    type: ActionTypes.FETCH_API_CALL,
    payload: {
      category,
      pagecount,
    },
  }
}

const popularMovieAction = (pagetitle, data, pagecount) => {
  return {
    type: ActionTypes.SET_POPULAR_MOVIE_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}

const nowPlayingMovieAction = (pagetitle, data, pagecount) => {
  return {
    type: ActionTypes.SET_NOWPLAYING_MOVIE_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}

const upComingMovieAction = (pagetitle, data, pagecount) => {
  return {
    type: ActionTypes.SET_UPCOMING_MOVIE_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}

const topRatedMovieAction = (pagetitle, data, pagecount) => {
  return {
    type: ActionTypes.SET_TOPRATED_MOVIE_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}

export default {
  resetMovieStore,
  movieApiCall,
  popularMovieAction,
  nowPlayingMovieAction,
  upComingMovieAction,
  topRatedMovieAction,
}
