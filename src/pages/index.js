import React from "react"

import "../components/Home/home.css";
import "../CSS/global.css";
import norway from "../images/norway.jpg"
import Layout from "../Layout/layout"
import Video from "../components/Home/video"
import SEO from "../components/seo"

const windowGlobal = typeof window !== 'undefined' && window;
class IndexPage extends React.Component {
constructor() {
  super();
  this.state = {
    width: null,
  };
}

componentDidMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
  this.setState({ width: windowGlobal.innerWidth });
}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

handleWindowSizeChange = () => {
  this.setState({ width: windowGlobal.innerWidth });
};

render() {
  const { width } = this.state;
  const isMobile = width <= 500;

  if (isMobile) {
    return (
      <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="home-intro-text-container">
        <img src={norway} alt="norway" className="home-phone-image" />
          <h1 className="h1-main-style home-intro-text-header"> 
            {'{ Kyle Cannon }'}
            </h1>
        </div>
    </Layout>
    );
  } else {
    return (
      <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Video />
        <div className="home-intro-text-container">
          <h1 className="h1-main-style home-intro-text-header"> 
            {'{ Kyle Cannon }'}
            </h1>
        </div>
    </Layout>
    );
  }
}
};

export default IndexPage
