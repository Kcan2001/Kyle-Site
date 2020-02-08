import React from "react"
import "./grids.css"

const Card = (props) => {
  const { title, description, link, imageLink} = props;
  
  return (
  <div className="grids-card-container">
    <h2 className="h2-main-style">{title}</h2>
    <p className="paragraph-styles-white-card">{description}</p>
    <a href={link}>
      <img alt={title} src={imageLink} />
    </a>
  </div>
  )};

export default Card
