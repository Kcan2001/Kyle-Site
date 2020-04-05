import React from "react"

import ProjectCards from '../components/ProjectCards/ProjectCards';
import Layout from "../Layout/layout"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio Page" />
    <div style={{display: "flex"}} className="pages-container">
      <ProjectCards></ProjectCards>
    </div>
  </Layout>
)

export default PortfolioPage
