import {
  SET_AIRING_TODAY_TVSHOW_DATA,
  SET_ONTV_TVSHOW_DATA,
  SET_POPULAR_TVSHOW_DATA,
  SET_RESET_STORE,
  SET_TOPRATED_TVSHOW_DATA,
} from "./actionType"

const resetTvShowStore = () => {
  return {
    type: SET_RESET_STORE,
  }
}
const popularTvShowAction = (pagetitle, data, pagecount) => {
  return {
    type: SET_POPULAR_TVSHOW_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const airingTodayTvShowAction = (pagetitle, data, pagecount) => {
  return {
    type: SET_AIRING_TODAY_TVSHOW_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const onTvTvShowAction = (pagetitle, data, pagecount) => {
  return {
    type: SET_ONTV_TVSHOW_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}
const topRatedTvShowAction = (pagetitle, data, pagecount) => {
  return {
    type: SET_TOPRATED_TVSHOW_DATA,
    payload: {
      pagetitle,
      data,
      pagecount,
    },
  }
}

const tvShowAction = {
  resetTvShowStore,
  popularTvShowAction,
  airingTodayTvShowAction,
  onTvTvShowAction,
  topRatedTvShowAction,
}
export default tvShowAction
