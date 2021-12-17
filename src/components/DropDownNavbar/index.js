import React from "react"
import { Link, Outlet } from "react-router-dom"

const navbarDropDown = (props) => {
  return (
    <div className="dropdown">
      <ul>
        {props.child.length > 0 &&
          props.child.map((item) => (
            <Link key={item.id} to={item.route}>
              <li>{item.name}</li>
            </Link>
          ))}
      </ul>
      <Outlet />
    </div>
  )
}

export default navbarDropDown
