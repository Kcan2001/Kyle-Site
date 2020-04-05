import React from "react"
import "../CSS/global.css";

import Layout from "../Layout/layout"
import SEO from "../components/seo"
import Card from '../components/Grids/card'

const NextPage = () => (
  <Layout>
    <SEO title="What's Next Page" />
    <div className="pages-container whats-next-page-grid-container">
        <Card 
            title="{ Developing } Customer Journeys " 
            description="Talk given on September 19th, 2019 (Slides provided below)"
            imageLink={"https://secure.meetupstatic.com/photos/event/d/d/1/a/highres_484976602.jpeg"}
            link="https://docs.google.com/presentation/d/1jLTzjDxUf-vMPLATp_zmASS3oE3cQjQw3FTS9Gca9P8/edit?usp=sharing"/>
        <Card 
            title="Large Scale Application Organization in React" 
            description="Talk given on March 18th, 2019 (Slides provided below)"
            imageLink={"https://secure.meetupstatic.com/photos/event/8/5/3/4/highres_479494100.jpeg"}
            link="https://docs.google.com/presentation/d/1yjv_kvkz4MQrbv-2RFaHeTFmRzE5gJMit92zvg7OXVw/edit?usp=sharing"/>
    </div>
  </Layout>
)

export default NextPage
