import React, { useEffect, useState } from "react"
import { getApiCall } from "../../../API/ApiCallGet"
import { tvShowsApi } from "../../../API/Constants"
import CardContainer from "../../../components/CardContainer"
import useInfiniteScroll from "../../../components/CustomInfiniteScroll"
import RestoreData from "../../../components/RestoreData"

const OnTv = () => {
  const [movie, setMovie] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [title, setTitle] = useState("")
  //fetch localStorage data
  const restoreData = JSON.parse(localStorage.getItem("Data"))
  const restorePageCount = localStorage.getItem("PageCount")
  const scrollIndex = localStorage.getItem("ScrollIndex")

  // life cycle hooks
  useEffect(() => {
    if (restoreData === "") {
      fetchMoreData()
    } else {
      setMovie(restoreData)
      setPageCount(restorePageCount)
    }
    setTimeout(() => {
      window.scrollTo(0, +scrollIndex)
    }, 100)
  }, [])

  // Api methods
  const fetchMoreData = async () => {
    //API Call
    const { title, Response } = await getApiCall(tvShowsApi.ontv, pageCount)
    setTitle(title)
    setMovie([...movie, ...Response.data.results])
    setPageCount(pageCount + 1)
    setIsFetching(false)
  }
  //restore data
  RestoreData(movie, pageCount)
  //Custom InfiniteScroll
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreData)

  //render view
  return <CardContainer type="tvshow" pagetitle={title} data={movie} />
}

export default OnTv
