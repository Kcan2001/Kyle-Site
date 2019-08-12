import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Spacer from '../Grids/spacer'
import "./header.css"
import menu from '../../images/menu.png'

class Header extends React.Component {
constructor() {
  super();
  this.state = {
    width: window.innerWidth,
    isExpanded: false
  };
}

componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
};

handleMenuClick = () => {
  this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
}

render() {
  const { width, isExpanded } = this.state;
  const isMobile = width <= 500;

  if (isMobile) {
    return (
      <div className="header-mobile-nav">
        <button className="menu-icon" onClick={this.handleMenuClick}>
          <img className="menu-img" src={menu} alt="menu"/>
        </button>
        {
          isExpanded ? 
          <div>
            <Link activeClassName="header-mobile-nav-links--active" className="header-mobile-nav-links" to="/">{'{ KC }'}</Link>    
            <Spacer />
            <Link activeClassName="header-mobile-nav-links--active" className="header-mobile-nav-links header-whats-next" to="/next/">What's next?</Link>
            <Link activeClassName="header-mobile-nav-links--active" className="header-mobile-nav-links" to="/about/">About</Link>
            <Link activeClassName="header-mobile-nav-links--active" className="header-mobile-nav-links" to="/blog/">Blog</Link>
            <Link activeClassName="header-mobile-nav-links--active" className="header-mobile-nav-links" to="/portfolio/">Portfolio</Link>
            <Link activeClassName="header-mobile-nav-links--active" className="header-mobile-nav-links" to="/contact/">Contact</Link>
          </div>
          : null
        }
    </div>
    );
  } else {
    return (
      <div className="header-nav">
        <Link activeClassName="header-nav-links--active" className="header-nav-links" to="/">{'{ KC }'}</Link>    
        <Spacer />
        <Link activeClassName="header-nav-links--active" className="header-nav-links header-whats-next" to="/next/">What's next?</Link>
        <Link activeClassName="header-nav-links--active" className="header-nav-links" to="/about/">About</Link>
        <Link activeClassName="header-nav-links--active" className="header-nav-links" to="/blog/">Blog</Link>
        <Link activeClassName="header-nav-links--active" className="header-nav-links" to="/portfolio/">Portfolio</Link>
        <Link activeClassName="header-nav-links--active" className="header-nav-links" to="/contact/">Contact</Link>
    </div>
    );
  }
}
};

export default Header;
