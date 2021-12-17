import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import CardDetails from "../../components/CardDetails"

const CardDetailsPage = () => {
  //states
  const [movieDetail, setMovieDetail] = useState([])
  const { id } = useParams()
  const location = useLocation()
  const type = location.pathname.split("/")[1]

  // life cycle hooks
  useEffect(() => {
    if (id) fetchDetails()
  }, [])

  //event
  const fetchDetails = async () => {
    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=2093daba66a27dc4a8b953700c36e805&language=en-US`

    try {
      await axios
        .get(url)
        .then((response) => {
          //   console.log(`response`, response.data)
          setMovieDetail(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (e) {
      console.log("ApiCallError" + e)
    }
  }

  //render
  return <CardDetails type={type} id={movieDetail.id} data={movieDetail} />
}

export default CardDetailsPage
