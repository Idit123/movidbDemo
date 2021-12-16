import React, { useEffect, useState } from "react"
import { getApiCall } from "../../../API/ApiCallGet"
import { moviesApi } from "../../../API/Constants"
import CardContainer from "../../../components/CardContainer"
import useInfiniteScroll from "../../../components/CustomInfiniteScroll"

const Popular = () => {
  const [movie, setMovie] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [title, setTitle] = useState("")

  // life cycle hooks
  useEffect(() => {
    fetchMoreData()
  }, [])

  // Api methods
  const fetchMoreData = async () => {
    //API Call
    const { title, Response } = await getApiCall(moviesApi.popular, pageCount)
    setTitle(title)
    setMovie([...movie, ...Response.data.results])
    setPageCount(pageCount + 1)
    setIsFetching(false)
  }

  //Custom InfiniteScroll
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreData)

  //render view
  return <CardContainer pagetitle={title} type="movies" data={movie} />
}

export default Popular
