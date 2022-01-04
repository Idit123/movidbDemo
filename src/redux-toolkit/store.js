import { configureStore } from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga"
import movieSlice from "./slice/movieSlice"
import scrollIndexSlice from "./slice/scrollIndexSlice"
import { combineReducers } from "redux"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  movieSlice,
  scrollIndexSlice,
})

export const toolKitStore = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  composeWithDevTools,
})

sagaMiddleware.run(rootSaga)

export default { toolKitStore }
