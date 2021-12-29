import React, { useEffect, useState } from "react"
import { moviesApi } from "../../../API/Constants"
import CardContainer from "../../../components/CardContainer"
import useInfiniteScroll from "../../../components/CustomInfiniteScroll"
import { movieAction } from "../../../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import RestoreData from "../../../components/RestoreData"

const Popular = () => {
  //states
  const [movie, setMovie] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [pageTitle, setpageTitle] = useState("")

  //get store Value
  const popularMovie = useSelector((state) => state.movie.popularMovie)
  const scrollIndexValue = useSelector((state) => state?.scrollIndex)
  //dispatch
  const dispatch = useDispatch()

  // life cycle hooks
  useEffect(() => {
    if (!popularMovie?.data) {
      fetchMoreData()
    }
    setTimeout(() => {
      window.scrollTo(0, +scrollIndexValue)
    }, 100)
  }, [])

  // call useeffect on update variable
  useEffect(() => {
    if (popularMovie) {
      setMovie(popularMovie?.data)
      setpageTitle(popularMovie?.pagetitle)
      setPageCount(popularMovie?.pagecount + 1)
    }
  }, [popularMovie])

  // Api methods
  const fetchMoreData = () => {
    dispatch(
      movieAction.popularMovieRequest(movie, moviesApi.popular, pageCount)
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

export default Popular
