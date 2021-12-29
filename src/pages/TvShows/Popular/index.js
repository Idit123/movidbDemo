import React, { useEffect, useState } from "react"
import { getApiCall } from "../../../API/ApiCallGet"
import { tvShowsApi } from "../../../API/Constants"
import CardContainer from "../../../components/CardContainer"
import useInfiniteScroll from "../../../components/CustomInfiniteScroll"
import { tvShowAction } from "../../../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import RestoreData from "../../../components/RestoreData"

const Popular = () => {
  //states
  const [movie, setMovie] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [pageTitle, setpageTitle] = useState("")

  //get store Value
  const popularTvShow = useSelector((state) => state.tvShow?.popularTvShow)
  const scrollIndexValue = useSelector((state) => state.scrollIndex)
  //dispatch
  const dispatch = useDispatch()

  // life cycle hooks
  useEffect(() => {
    if (!popularTvShow?.data) {
      fetchMoreData()
    } else {
      setpageTitle(popularTvShow?.pagetitle)
      setMovie(popularTvShow?.data)
      setPageCount(popularTvShow?.pagecount)
    }
    setTimeout(() => {
      window.scrollTo(0, +scrollIndexValue)
    }, 100)
  }, [])

  // Api methods
  const fetchMoreData = async () => {
    const { title, Response } = await getApiCall(tvShowsApi.popular, pageCount)
    dispatch(
      tvShowAction.popularTvShowRequest(
        title,
        [...(popularTvShow?.data || []), ...Response.data.results],
        pageCount + 1
      )
    )
    setpageTitle(title)
    setMovie([...movie, ...Response.data.results])
    setPageCount(pageCount + 1)
    setIsFetching(false)
  }

  //restore scroll index
  RestoreData()

  //Custom InfiniteScroll
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreData)

  //render view
  return <CardContainer type="tvshow" pagetitle={pageTitle} data={movie} />
}

export default Popular
