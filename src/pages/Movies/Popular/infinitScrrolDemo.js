import React, { useState, useEffect } from "react"
import Axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import Card from "../../../components/card"
import { CardStyle } from "../../../components/Popular/index.style"
import { moviesApi } from "../../../API/Constants"
import { getApiCall } from "../../../API/ApiCallGet"

const CustomInfiniteScroll = () => {
  // States
  const [movie, setMovie] = useState([])
  const [pageCount, setPageCount] = useState(1)

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

  // events handling

  // extra methods

  // render methods
  const renderMoviesList = () => {
    return (
      <div className="container-fluid">
        <h1>{title}</h1>
        {movie.length > 0 &&
          movie.map((movie) => <Card key={movie.id} {...movie} />)}
      </div>
    )
  }
  return (
    <CardStyle>
      <InfiniteScroll
        dataLength={movie.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {renderMoviesList()}
      </InfiniteScroll>
    </CardStyle>
  )
}
export default CustomInfiniteScroll
