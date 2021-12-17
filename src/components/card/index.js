import React from "react"
import { Link, Outlet } from "react-router-dom"
import RestoreData from "../RestoreData"

const Card = ({ type, data, page }) => {
  const defaultImagePath = "https://image.tmdb.org/t/p/original"

  const renderMoviesList = (data) => {
    const { id, title, poster_path, release_date } = data
    return (
      <div className="card">
        {/* <Link to={RestoreData("", data, page)}></Link> */}
        <Link to={`../${id}`}>
          <img src={defaultImagePath + poster_path} alt={title} />
        </Link>
        <div className="card-body">
          <h4 className="cardtitle">{title}</h4>
          <span>{release_date}</span>
        </div>
        <Outlet />
      </div>
    )
  }
  const renderTVShowsList = (data) => {
    const { id, title, original_name, poster_path, first_air_date } = data
    return (
      <div className="card">
        <Link to={`../${id}`}>
          <img src={defaultImagePath + poster_path} alt={title} />
        </Link>
        <div className="card-body">
          <h4 className="cardtitle">{original_name}</h4>
          <span>{first_air_date}</span>
        </div>
        <Outlet />
      </div>
    )
  }
  const renderPersonsList = (data) => {
    const { id, title, name, profile_path, known_for_department } = data
    console.log(`data`, data)
    return (
      <div className="card">
        <img src={defaultImagePath + profile_path} alt={title} />
        <div className="card-body">
          <h4 className="cardtitle">{name}</h4>
          <span>{known_for_department}</span>
        </div>
        <Outlet />
      </div>
    )
  }

  // Main Render
  const renderCardList = (type, data) => {
    switch (type) {
      case "movie":
        return renderMoviesList(data)
      case "tvshow":
        return renderTVShowsList(data)
      case "people":
        return renderPersonsList(data)
      default:
        return
    }
  }

  return <>{renderCardList(type, data)}</>
}
export default Card
