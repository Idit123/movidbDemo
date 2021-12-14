import React, { useState, useEffect } from "react"
import Axios from "axios"
import Card from "../card/Index"
import { CardStyle } from "./Index.style"

export default function Index() {
  const [movie, setMovie] = useState([])
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=2093daba66a27dc4a8b953700c36e805&language=en-US"

  useEffect(() => {
    apicall()
  }, [])

  const apicall = () => {
    try {
      Axios.get(url)
        .then((response) => {
          console.log(response.data.results)
          setMovie(response.data.results)
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <CardStyle>
      <div className="container-fluid">
        {movie.length > 0 &&
          movie.map((movie) => <Card key={movie.id} {...movie} />)}
      </div>
    </CardStyle>
  )
}
