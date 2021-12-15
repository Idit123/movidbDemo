import React from "react"

export default function Card({ title, poster_path, release_date }) {
  const defaultImagePath = "https://image.tmdb.org/t/p/original"
  return (
    <>
      <div className="card">
        <a href="/">
          <img src={defaultImagePath + poster_path} alt={title} />
        </a>
        <div className="card-body">
          <h4 className="cardtitle">{title}</h4>
          <span>{release_date}</span>
        </div>
      </div>
    </>
  )
}
