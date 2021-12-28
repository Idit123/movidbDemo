import { SET_SCROLL_INDEX } from "./actionType"
import movieAction from "./movieAction"
import tvShowAction from "./tvShowAction"

const scrollIndex = (index) => {
  return {
    type: SET_SCROLL_INDEX,
    payload: {
      index,
    },
  }
}
export { movieAction, tvShowAction, scrollIndex }
