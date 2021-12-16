import { useState, useEffect } from "react"

const useInfiniteScroll = (FetchMoreData) => {
  //state
  const [isFetching, setIsFetching] = useState(false)

  //Set Scroll at a Top in refresh Page
  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])

  //Lifecycle
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  //Fetch ApiData at scrollBottom
  useEffect(() => {
    if (!isFetching) return
    FetchMoreData()
  }, [isFetching])

  //handleScroll EventHandle
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return
    setIsFetching(true)
  }

  //return
  return [isFetching, setIsFetching]
}

export default useInfiniteScroll
