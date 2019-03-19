import React from "react"
import "../CSS/global.css";

import Layout from "../Layout/layout"
import SEO from "../components/seo"
import Card from '../components/Grids/card'

const NextPage = () => (
  <Layout>
    <SEO title="What's Next Page" />
    
    <div className="whats-next-page-grid-container">
        <Card 
            title="Large Scale Application Organization in React" 
            description="March 18th, 2019"
            imageLink={"https://secure.meetupstatic.com/photos/event/8/5/3/4/highres_479494100.jpeg"}
            link="https://www.meetup.com/RQ-React/events/259679933/"/>
    </div>
  </Layout>
)

export default NextPage
