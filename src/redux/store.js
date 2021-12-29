import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducer"
import rootSaga from "./saga"
// import { loadState } from "./localStorage"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

// const persistedState = loadState()

//config persistStore
const persistConfig = {
  key: "root",
  storage,
}

//persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

//create sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

//create store
const store = createStore(
  persistedReducer,
  // persistedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
//create persistStore
const persistor = persistStore(store)

//run sagaMiddleware
sagaMiddleware.run(rootSaga)

export default { store, persistor }
