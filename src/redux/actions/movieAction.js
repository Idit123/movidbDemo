import actionType from "./actionType"

const popularMovieRequest = (category, pagecount) => {
  return {
    type: actionType.SET_POPULAR_MOVIE_REQUEST,
    payload: {
      category,
      pagecount,
    },
  }
}

const popularMovieSuccess = (pagetitle, data, pagecount) => {
  return {
    type: actionType.SET_POPULAR_MOVIE_SUCCESS,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const popularMovieFailure = (error) => {
  return {
    type: actionType.SET_POPULAR_MOVIE_FAILURE,
    payload: {
      error,
    },
  }
}
const nowPlayingMovieRequest = (category, pagecount) => {
  return {
    type: actionType.SET_NOWPLAYING_MOVIE_REQUEST,
    payload: {
      category,
      pagecount,
    },
  }
}

const nowPlayingMovieSuccess = (pagetitle, data, pagecount) => {
  return {
    type: actionType.SET_NOWPLAYING_MOVIE_SUCCESS,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const nowPlayingMovieFailure = (error) => {
  return {
    type: actionType.SET_NOWPLAYING_MOVIE_FAILURE,
    payload: {
      error,
    },
  }
}
const upComingMovieRequest = (category, pagecount) => {
  return {
    type: actionType.SET_UPCOMING_MOVIE_REQUEST,
    payload: {
      category,
      pagecount,
    },
  }
}

const upComingMovieSuccess = (pagetitle, data, pagecount) => {
  return {
    type: actionType.SET_UPCOMING_MOVIE_SUCCESS,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const upComingMovieFailure = (error) => {
  return {
    type: actionType.SET_UPCOMING_MOVIE_FAILURE,
    payload: {
      error,
    },
  }
}
const topRatedMovieRequest = (category, pagecount) => {
  return {
    type: actionType.SET_TOPRATED_MOVIE_REQUEST,
    payload: {
      category,
      pagecount,
    },
  }
}

const topRatedMovieSuccess = (pagetitle, data, pagecount) => {
  return {
    type: actionType.SET_TOPRATED_MOVIE_SUCCESS,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const topRatedMovieFailure = (error) => {
  return {
    type: actionType.SET_TOPRATED_MOVIE_FAILURE,
    payload: {
      error,
    },
  }
}
export default {
  popularMovieRequest,
  popularMovieSuccess,
  popularMovieFailure,
  nowPlayingMovieRequest,
  nowPlayingMovieSuccess,
  nowPlayingMovieFailure,
  upComingMovieRequest,
  upComingMovieSuccess,
  upComingMovieFailure,
  topRatedMovieRequest,
  topRatedMovieSuccess,
  topRatedMovieFailure,
}
