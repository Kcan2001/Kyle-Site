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
            description="Talk given on March 18th, 2019 (Slides provided below)"
            imageLink={"https://secure.meetupstatic.com/photos/event/8/5/3/4/highres_479494100.jpeg"}
            link="https://docs.google.com/presentation/d/1yjv_kvkz4MQrbv-2RFaHeTFmRzE5gJMit92zvg7OXVw/edit?usp=sharing"/>
    </div>
  </Layout>
)

export default NextPage
