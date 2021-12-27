import React, { useEffect, useState } from "react"
import { getApiCall } from "../../../API/ApiCallGet"
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
  const scrollIndexValue = useSelector((state) => state.scrollIndex)
  //dispatch
  const dispatch = useDispatch()

  // life cycle hooks
  useEffect(() => {
    if (popularMovie?.data === "") {
      fetchMoreData()
    } else {
      setpageTitle(popularMovie?.pagetitle)
      setMovie(popularMovie?.data)
      setPageCount(popularMovie?.pagecount)
      setTimeout(() => {}, 1000)
    }
    setTimeout(() => {
      window.scrollTo(0, +scrollIndexValue.index)
    }, 100)
  }, [])

  // Api methods
  const fetchMoreData = async () => {
    const results = await dispatch(
      movieAction.movieApiCall(moviesApi.popular, pageCount)
    )
    console.log(`results`, results)
    const { title, Response } = await getApiCall(moviesApi.popular, pageCount)
    dispatch(
      movieAction.popularMovieAction(
        title,
        [...(popularMovie?.data || []), ...Response.data.results],
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

export default Popular
