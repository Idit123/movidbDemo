import actionType from "./actionType"

const popularTvShowRequest = (category, pagecount) => {
  return {
    type: actionType.SET_POPULAR_TVSHOW_REQUEST,
    payload: {
      category,
      pagecount,
    },
  }
}

const popularTvShowSuccess = (pagetitle, data, pagecount) => {
  return {
    type: actionType.SET_POPULAR_TVSHOW_SUCCESS,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const popularTvShowFailure = (error) => {
  return {
    type: actionType.SET_POPULAR_TVSHOW_FAILURE,
    payload: {
      error,
    },
  }
}
const airingTodayTvShowRequest = (category, pagecount) => {
  return {
    type: actionType.SET_NOWPLAYING_TVSHOW_REQUEST,
    payload: {
      category,
      pagecount,
    },
  }
}

const airingTodayTvShowSuccess = (pagetitle, data, pagecount) => {
  return {
    type: actionType.SET_NOWPLAYING_TVSHOW_SUCCESS,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const airingTodayTvShowFailure = (error) => {
  return {
    type: actionType.SET_NOWPLAYING_TVSHOW_FAILURE,
    payload: {
      error,
    },
  }
}
const onTvTvShowRequest = (category, pagecount) => {
  return {
    type: actionType.SET_UPCOMING_TVSHOW_REQUEST,
    payload: {
      category,
      pagecount,
    },
  }
}

const onTvTvShowSuccess = (pagetitle, data, pagecount) => {
  return {
    type: actionType.SET_UPCOMING_TVSHOW_SUCCESS,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const onTvTvShowFailure = (error) => {
  return {
    type: actionType.SET_UPCOMING_TVSHOW_FAILURE,
    payload: {
      error,
    },
  }
}
const topRatedTvShowRequest = (category, pagecount) => {
  return {
    type: actionType.SET_TOPRATED_TVSHOW_REQUEST,
    payload: {
      category,
      pagecount,
    },
  }
}

const topRatedTvShowSuccess = (pagetitle, data, pagecount) => {
  return {
    type: actionType.SET_TOPRATED_TVSHOW_SUCCESS,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const topRatedTvShowFailure = (error) => {
  return {
    type: actionType.SET_TOPRATED_TVSHOW_FAILURE,
    payload: {
      error,
    },
  }
}
export default {
  popularTvShowRequest,
  popularTvShowSuccess,
  popularTvShowFailure,
  airingTodayTvShowRequest,
  airingTodayTvShowSuccess,
  airingTodayTvShowFailure,
  onTvTvShowRequest,
  onTvTvShowSuccess,
  onTvTvShowFailure,
  topRatedTvShowRequest,
  topRatedTvShowSuccess,
  topRatedTvShowFailure,
}
