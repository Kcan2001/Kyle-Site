import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../Layout/layout";

import "./posts.css";

const Posts = ({data}) => {
    const {markdownRemark} = data;
    const {html, frontmatter} = markdownRemark;
    const {title, date, featuredImage} = frontmatter;

return (
    <Layout>
        <div className="post-card-contianer">
          <Link className="post-back-button" to="/blog">Back to all posts</Link>
            <h1 className="post-card-title">{title}</h1>
            <p className="post-card-date">{date}</p>
            <div className="post-card-img-container">
              <div className="post-card-img">
                <Img fluid={featuredImage.childImageSharp.fluid} />
              </div>
            </div>

            <div className="post-html-container" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    </Layout>
)}

export default Posts;

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
        date
        featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }`;