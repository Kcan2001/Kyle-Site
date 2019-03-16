import React from "react"

import "../components/Home/home.css";
import "../components/CSS/global.css";
import Layout from "../Layout/layout"
import Video from "../components/Home/video"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Video />
      <div className="home-intro-text-container">
        <h1 className="h1-main-style home-intro-text-header"> 
          [Kyle Cannon]
          </h1>
      </div>
  </Layout>
)

export default IndexPage
