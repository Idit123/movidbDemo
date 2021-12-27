import { ActionTypes } from "."

const resetTvShowStore = () => {
  return {
    type: ActionTypes.SET_RESET_STORE,
  }
}
const popularTvShowAction = (pagetitle, data, pagecount) => {
  return {
    type: ActionTypes.SET_POPULAR_TVSHOW_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const airingTodayTvShowAction = (pagetitle, data, pagecount) => {
  return {
    type: ActionTypes.SET_AIRING_TODAY_TVSHOW_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const onTvTvShowAction = (pagetitle, data, pagecount) => {
  return {
    type: ActionTypes.SET_ONTV_TVSHOW_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const topRatedTvShowAction = (pagetitle, data, pagecount) => {
  return {
    type: ActionTypes.SET_TOPRATED_TVSHOW_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}

export default {
  resetTvShowStore,
  popularTvShowAction,
  airingTodayTvShowAction,
  onTvTvShowAction,
  topRatedTvShowAction,
}
