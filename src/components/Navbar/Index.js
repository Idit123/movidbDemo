import React from "react"
import logo from "../../assets/logo/tmdb.svg"
import { Navbar } from "./Index.style"

export default function Index() {
  return (
    <Navbar>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
          <ul>
            <li className="nav-item">Movies</li>
            <li className="nav-item">Tv Shows</li>
            <li className="nav-item">People</li>
            <li className="nav-item">More</li>
          </ul>
        </div>
      </div>
    </Navbar>
  )
}
