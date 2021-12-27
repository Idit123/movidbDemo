import { combineReducers } from "redux"
import { movieReducer } from "./movieReducer"
import { tvShowReducer } from "./tvShowReduser"
import { ActionTypes } from "../actions"

const scrollIndex = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.SET_SCROLL_INDEX:
      return action.payload
    default:
      return state
  }
}

const appReducer = combineReducers({
  scrollIndex: scrollIndex, //Scroll Index Data
  movie: movieReducer, // Movies Data store
  tvShow: tvShowReducer, // TvShows Data store
})

// reset the state of a redux store
const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer