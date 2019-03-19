import React from "react"
import "./grids.css"

const Card = (props) => {
  const { title, description, link, imageLink} = props;
  
  return (
  <div className="grids-card-container">
    <h1 className="grids-title">{title}</h1>
    <p className="grids-description" >{description}</p>
    <a href={link}>
      <img src={imageLink} />
    </a>
  </div>
  )};

export default Card
