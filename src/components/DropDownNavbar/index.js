import React from "react"
import { Link, Outlet } from "react-router-dom"

const navbarDropDown = (props) => {
  return (
    <div className="dropdown">
      <ul>
        {props.child.length > 0 &&
          props.child.map((item) => (
            <li key={item.id}>
              <Link to={item.route}>{item.name}</Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </div>
  )
}

export default navbarDropDown
