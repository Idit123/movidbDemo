import React from "react"
import Card from "../card"
import { CardStyle } from "./index.style"

const CardContainer = ({ type, pagetitle, data }) => {
  //render view
  return (
    <CardStyle>
      <div className="container-fluid">
        <h1>{pagetitle}</h1>
        {data?.map((item) => {
          return <Card key={item.id} type={type} data={item} />
        })}
      </div>
    </CardStyle>
  )
}

export default CardContainer
