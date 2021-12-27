import Router from "./Routes"
import "./App.css"
import React, { useEffect } from "react"
import store from "./redux/store"

const App = (props) => {
  // Life cycle Hooks
  useEffect(() => {
    console.log("App is mounted with store data", store.getState())
  }, [])

  return (
    <>
      <Router />
    </>
  )
}

export default App
