import React from "react"

const card = ({ type, data }) => {
  const { title, original_name, poster_path, release_date, first_air_date } =
    data

  const defaultImagePath = "https://image.tmdb.org/t/p/original"

  return (
    <>
      {type === "movies" && (
        <div className="card">
          <a href="/">
            <img src={defaultImagePath + poster_path} alt={title} />
          </a>
          <div className="card-body">
            <h4 className="cardtitle">{title}</h4>
            <span>{release_date}</span>
          </div>
        </div>
      )}
      {type === "tvshows" && (
        <div className="card">
          <a href="/">
            <img src={defaultImagePath + poster_path} alt={title} />
          </a>
          <div className="card-body">
            <h4 className="cardtitle">{original_name}</h4>
            <span>{first_air_date}</span>
          </div>
        </div>
      )}
    </>
  )
}
export default card
