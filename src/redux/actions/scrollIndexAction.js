import actionType from "./actionType"

const scrollIndex = (index) => {
  return {
    type: actionType.SET_SCROLL_INDEX,
    payload: {
      index,
    },
  }
}
export default { scrollIndex }
