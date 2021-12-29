import actionType from "./actionType"

const popularTvShowRequest = (pagetitle, data, pagecount) => {
  return {
    type: actionType.SET_POPULAR_TVSHOW_REQUEST,
    payload: {
      pagetitle,
      data,
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
const airingTodayTvShowRequest = (pagetitle, data, pagecount) => {
  return {
    type: actionType.SET_AIRING_TODAY_TVSHOW_REQUEST,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}

const airingTodayTvShowSuccess = (pagetitle, data, pagecount) => {
  return {
    type: actionType.SET_AIRING_TODAY_TVSHOW_SUCCESS,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const airingTodayTvShowFailure = (error) => {
  return {
    type: actionType.SET_AIRING_TODAY_TVSHOW_FAILURE,
    payload: {
      error,
    },
  }
}
const onTvTvShowRequest = (pagetitle, data, pagecount) => {
  return {
    type: actionType.SET_ONTV_TVSHOW_REQUEST,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}

const onTvTvShowSuccess = (pagetitle, data, pagecount) => {
  return {
    type: actionType.SET_ONTV_TVSHOW_SUCCESS,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const onTvTvShowFailure = (error) => {
  return {
    type: actionType.SET_ONTV_TVSHOW_FAILURE,
    payload: {
      error,
    },
  }
}
const topRatedTvShowRequest = (pagetitle, data, pagecount) => {
  return {
    type: actionType.SET_TOPRATED_TVSHOW_REQUEST,
    payload: {
      pagetitle,
      data,
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
