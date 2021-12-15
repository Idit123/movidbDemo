import React, { useState, useEffect } from "react"
import Axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import Card from "../card/Index"
import { CardStyle } from "./Index.style"

window.onload = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export default function Index() {
  // States
  const [movie, setMovie] = useState([])
  const [pageCount, setPageCount] = useState(1)

  // life cycle hooks
  useEffect(() => {
    fetchMoreData()
  }, [])

  // Api methods
  const fetchMoreData = async () => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=2093daba66a27dc4a8b953700c36e805&language=en-US&page=${pageCount}`
    )
      .then((response) => {
        // console.log(response.data.results)

        setMovie([...movie, ...response.data.results])
        setPageCount(pageCount + 1)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // events handling

  // extra methods

  // render methods
  const renderMoviesList = () => {
    return (
      <div className="container-fluid">
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
