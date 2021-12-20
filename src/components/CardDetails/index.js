import React, { useEffect, useState } from "react"
import { CardDetailsStyle } from "./index.style"
import ReactPlayer from "react-player/youtube"

import axios from "axios"

const CardDetails = ({ type, id, data }) => {
  const {
    backdrop_path,
    poster_path,
    original_title,
    release_date,
    genres,
    tagline,
    overview,
  } = data

  //states
  const [tralier, setTralier] = useState("")
  // life cycle hooks
  useEffect(() => {
    if (id) fetchDetails()
  }, [id])

  //event
  const fetchDetails = async () => {
    const url = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=2093daba66a27dc4a8b953700c36e805&language=en-US`

    try {
      await axios
        .get(url)
        .then((response) => {
          // console.log(`response`, response.data.results[0])
          if (response.data.results[0]) {
            setTralier(response.data.results[0].key)
          } else {
            console.log("tralier not found")
          }
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (e) {
      console.log("ApiCallError" + e)
    }
  }

  const defaultImagePath = "https://image.tmdb.org/t/p/original"
  const defaultVideoPath = "https://www.youtube.com/watch?v="
  const backgroundImage = {
    background: `linear-gradient(90deg, rgba(0,0,0,0.8267682072829132) 0%, rgba(0,0,0,0.8295693277310925) 100%), url(${
      defaultImagePath + backdrop_path
    })`,
  }

  //render view
  return (
    <CardDetailsStyle>
      <div
        className="container-fluid"
        style={backdrop_path ? backgroundImage : null}
      >
        <div className="card-details">
          <img
            src={poster_path ? defaultImagePath + poster_path : null}
            alt={original_title}
          />
          <div className="card-title">
            <h2 className="title">{original_title}</h2>
            <div className="facts">
              <span className="certification">UA</span>
              <span className="release">{release_date} (IN)</span>
              <span className="geners">
                {genres?.map((item, index) => {
                  if (index === genres.length - 1) {
                    return item.name
                  } else {
                    return item.name + ","
                  }
                })}
              </span>
            </div>
            <h4 className="tagline">{tagline}</h4>
            <h3 className="overview">Overview</h3>
            <p className="text">{overview} </p>
            <ReactPlayer
              url={defaultVideoPath + tralier}
              playing={true}
              loop={true}
              width="400px"
              height="200px"
            />
          </div>
        </div>
      </div>
    </CardDetailsStyle>
  )
}

export default CardDetails
