import React from "react"
import norway from "../../video/norway.mp4"
import "./home.css";

const Video = () => (
    <video className="home-video" autoPlay muted loop id="homeVideo">
        <source src={norway} type="video/mp4"/>>
    </video>
)
export default Video;