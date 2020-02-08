import React from "react"

import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'
import mail from '../images/mail.png'

import CardIcon from '../components/Grids/contactIcons'
import Layout from "../Layout/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
  <div className="flex-grid-contact">
    <CardIcon 
          title="LinkedIn"
          imageLink={linkedin}
          link="https://www.linkedin.com/in/kylecannon/"/>
    <CardIcon 
          title="Instagram"
          imageLink={instagram}
          link="https://www.instagram.com/kyle_a_cannon/"/>
    <CardIcon 
          title="Mail"
          imageLink={mail}
          link="mailto:kyleacannon@gmail.com"/>
  </div>
  </Layout>
)

export default ContactPage
