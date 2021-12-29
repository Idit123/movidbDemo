import React, { useEffect, useState } from "react"
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
    if (!upComingMovie?.data) {
      fetchMoreData()
    }
    setTimeout(() => {
      window.scrollTo(0, +scrollIndexValue)
    }, 100)
  }, [])

  // call useeffect on update variable
  useEffect(() => {
    if (upComingMovie) {
      setMovie(upComingMovie?.data)
      setpageTitle(upComingMovie?.pagetitle)
      setPageCount(upComingMovie?.pagecount + 1)
    }
  }, [upComingMovie])

  // Api methods
  const fetchMoreData = () => {
    dispatch(
      movieAction.upComingMovieRequest(movie, moviesApi.upcoming, pageCount)
    )
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
