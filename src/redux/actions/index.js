import ActionTypes from "./actionType"
import movieAction from "./movieAction"
import tvShowAction from "./tvShowAction"

const scrollIndex = (index) => {
  return {
    type: ActionTypes.SET_SCROLL_INDEX,
    payload: {
      index,
    },
  }
}
export { ActionTypes, movieAction, tvShowAction, scrollIndex }
