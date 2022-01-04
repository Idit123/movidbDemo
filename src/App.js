import Router from "./Routes"
import "./App.css"
import React, { useEffect } from "react"
import { toolKitStore } from "./redux-toolkit/store"
// import AllStore from "./redux/store"

// import { saveState } from "./redux/localStorage"

const App = () => {
  // Life cycle Hooks
  useEffect(() => {
    console.log("App is mounted with store data", toolKitStore.getState())
  }, [])

  return (
    <>
      <Router />
    </>
  )
}

export default App
