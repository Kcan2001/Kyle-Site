import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Spacer from '../Grids/spacer'
import "./header.css"

const Header = () => (
  <div className="header-nav">
        <Link activeClassName="header-nav-links--active" className="header-nav-links" to="/">{'{ KC }'}</Link>    
        <Spacer />
        <Link activeClassName="header-nav-links--active" className="header-nav-links header-whats-next" to="/next/">What's next?</Link>
        <Link activeClassName="header-nav-links--active" className="header-nav-links" to="/about/">About</Link>
        <Link activeClassName="header-nav-links--active" className="header-nav-links" to="/blog/">Blog</Link>
        <Link activeClassName="header-nav-links--active" className="header-nav-links" to="/portfolio/">Portfolio</Link>
        <Link activeClassName="header-nav-links--active" className="header-nav-links" to="/contact/">Contact</Link>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
