import React, { useEffect, useState } from "react"
import { getApiCall } from "../../../API/ApiCallGet"
import { moviesApi } from "../../../API/Constants"
import CardContainer from "../../../components/CardContainer"
import useInfiniteScroll from "../../../components/CustomInfiniteScroll"
import { movieAction } from "../../../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import RestoreData from "../../../components/RestoreData"

const Upcoming = () => {
  //states
  const [movie, setMovie] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [pageTitle, setpageTitle] = useState("")

  //get store Value
  const upComingMovie = useSelector((state) => state.movie.upComingMovie)
  const scrollIndexValue = useSelector((state) => state.scrollIndex)
  //dispatch
  const dispatch = useDispatch()

  // life cycle hooks
  useEffect(() => {
    if (upComingMovie?.data === "") {
      fetchMoreData()
    } else {
      setpageTitle(upComingMovie?.pagetitle)
      setMovie(upComingMovie?.data)
      setPageCount(upComingMovie?.pagecount)
      setTimeout(() => {}, 1000)
    }
    setTimeout(() => {
      window.scrollTo(0, +scrollIndexValue.index)
    }, 100)
  }, [])

  // Api methods
  const fetchMoreData = async () => {
    const { title, Response } = await getApiCall(moviesApi.upcoming, pageCount)
    dispatch(
      movieAction.upComingMovieAction(
        title,
        [...(upComingMovie?.data || []), ...Response.data.results],
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
  return <CardContainer pagetitle={pageTitle} type="movie" data={movie} />
}

export default Upcoming
