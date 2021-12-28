import React from "react"
import { useDispatch } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import logo from "../../assets/tmdb.svg"
import { movieAction, tvShowAction } from "../../redux/actions"
import NavbarItems from "../../utils/NavbarItemsList"
import NavbarDropDown from "../DropDownNavbar"
import { NavbarStyle } from "./index.style"

const NavbarComponent = () => {
  const dispatch = useDispatch()

  const resetStore = () => {
    dispatch(movieAction.resetMovieStore())
    dispatch(tvShowAction.resetTvShowStore())
  }

  return (
    <NavbarStyle>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <ul>
            {NavbarItems.length > 0 &&
              NavbarItems.map((NavbarItems) => (
                <li key={NavbarItems.id}>
                  <Link to={NavbarItems.route}>{NavbarItems.name}</Link>
                  <NavbarDropDown
                    key={NavbarItems.children.id}
                    child={NavbarItems.children}
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className="resetbutton">
          <button onClick={resetStore}>RESET</button>
        </div>
      </div>
      <Outlet />
    </NavbarStyle>
  )
}
export default NavbarComponent
