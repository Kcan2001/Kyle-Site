import React from "react"
import "./grids.css"

const CardIcon = (props) => {
  const {link, imageLink, title} = props;
  
  return (
  <div className="contact-icon-container">
    <a href={link}>
      <img className="contact-img" alt={title} src={imageLink} />
    </a>
  </div>
  )};

export default CardIcon;
