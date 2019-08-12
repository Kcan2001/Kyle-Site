import React from "react"

import facebook from '../images/facebook.png'
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
          title="facebook"
          imageLink={facebook}
          link="https://www.facebook.com/Kfc4you"/>
    <CardIcon 
          title="instagram"
          imageLink={instagram}
          link="https://www.instagram.com/kyle_a_cannon/"/>
    <CardIcon 
          title="mail"
          imageLink={mail}
          link="mailto:kyleacannon@gmail.com"/>
  </div>
  </Layout>
)

export default ContactPage
