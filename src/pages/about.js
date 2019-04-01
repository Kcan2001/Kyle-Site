import React from "react"

import '../CSS/styles.css'
import '../CSS/global.css'
import aboutme from '../images/about.png'
import resume from '../images/resume.pdf'
import resumeImg from '../images/resume.png'

import Layout from "../Layout/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <div className="about-page-grid-hero">
      <div className="about-page-img-grid">
        <img className="about-me-img" src={aboutme} alt="Kyle Cannon"/>
      </div>

        <div className="about-page-inner-text-grid">
        <div className="grids-spacer"></div>
          <div>
          <h2 className="h2-main-style">[Developer, Climber, Traveler]</h2>
          </div>
          <div className="grids-spacer"></div>
        </div>
      </div>

      <div className="about-page-grid-body">
        <div >
            <h2 className="h3-main-style">
              Hi, I'm Kyle. 
            </h2>

            <p className="paragraph-styles">
              I like to program and stuff. 
              <br/>
              My primary language is JavaScript, and build almost everything nowadays in React. In addition to trying to learning as much as possible, I'm always on the lookout for exciting new advances in how we make great products.
              <br/> <br/>
              On my offtime; I love to travel, climb big mountains, and eat whatever cool food I can get my hands on. 
            </p>

            <br/> 
            <br/> 
              <a download={"Kyle Cannon Resume"} href={resume}>
                <img className="standard-image" alt="Kyle Cannon Resume" src={resumeImg}/>
              </a>
        </div>
      </div>
  </Layout>
)

export default AboutPage
