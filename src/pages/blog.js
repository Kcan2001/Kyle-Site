import React from "react"
import { Link } from "gatsby"


import Layout from "../Layout/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => {  

const {allMarkdownRemark} = data; 

  return (
  <Layout>
    <SEO title="Blog Page" />
    <div className="pages-container">

    <h1>Blog Posts</h1>


      {allMarkdownRemark.edges.map((routes, index) => {
        return (
         <span key={`${routes.node.frontmatter.title}_${index}`} className="blog-link-style">> < Link to={routes.node.frontmatter.path}>{routes.node.frontmatter.title}</Link></span> 
        )
      })}
    </div>
  </Layout>
)};

export default BlogPage;


export const postQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          title
        }
      }
    }
  }
}`;