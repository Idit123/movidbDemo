import Router from "./Routes"
import "./App.css"
import React, { useEffect } from "react"
import AllStore from "./redux/store"
// import { saveState } from "./redux/localStorage"

const App = () => {
  // Life cycle Hooks
  useEffect(() => {
    console.log("App is mounted with store data", AllStore.store.getState())
  }, [])

  // store.subscribe(() => {
  //   saveState({
  //     /* example state */
  //     scrollIndex: store.getState().scrollIndex,
  //     movie: store.getState().movie,
  //     tvShow: store.getState().tvShow,
  //   })
  // })

  return (
    <>
      <Router />
    </>
  )
}

export default App
