import React, { useEffect, useState } from "react"
import { getApiCall } from "../../../API/ApiCallGet"
import { moviesApi } from "../../../API/Constants"
import CardContainer from "../../../components/CardContainer"
import useInfiniteScroll from "../../../components/CustomInfiniteScroll"
import { movieAction } from "../../../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import RestoreData from "../../../components/RestoreData"

const NowPlaying = () => {
  //states
  const [movie, setMovie] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [pageTitle, setpageTitle] = useState("")

  //get store Value
  const nowPlayingMovie = useSelector((state) => state.movie.nowPlayingMovie)
  const scrollIndexValue = useSelector((state) => state.scrollIndex)
  //dispatch
  const dispatch = useDispatch()

  // life cycle hooks
  useEffect(() => {
    if (nowPlayingMovie?.data === "") {
      fetchMoreData()
    } else {
      setpageTitle(nowPlayingMovie?.pagetitle)
      setMovie(nowPlayingMovie?.data)
      setPageCount(nowPlayingMovie?.pagecount)
      setTimeout(() => {}, 1000)
    }
    setTimeout(() => {
      window.scrollTo(0, +scrollIndexValue.index)
    }, 100)
  }, [])

  // Api methods
  const fetchMoreData = async () => {
    const { title, Response } = await getApiCall(
      moviesApi.nowplaying,
      pageCount
    )
    dispatch(
      movieAction.nowPlayingMovieAction(
        title,
        [...(nowPlayingMovie?.data || []), ...Response.data.results],
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

export default NowPlaying
