import React from "react"

import { ResponsiveBubbleCanvas } from '@nivo/circle-packing';
import data from '../data/bubbleChartData.json';
import styled from "@emotion/styled"
import "../CSS/global.css";
import norway from "../images/norway.jpg"
import Layout from "../Layout/layout"
import SEO from "../components/seo"

const HomeLayout = styled.div`
margin: 10% 0;

  @media (min-width: 420px) {
    padding: 0 20%;
  }
`

const BubbleChartContainer = styled.div`
  display: none;

  @media (min-width: 420px) {
    display: block;
    height: 300px;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: none;

  @media (min-width: 420px) {
    margin: 50px 0; 
    display: flex;
    justify-content: space-around;
  }
`;

const BubbleButton = styled.button`
  display: none;

  @media (min-width: 420px) {
    color: var(--black);
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    padding: 16px 20px;
    cursor: pointer;
    font-weight: 600;
    font-family: Bahnschrift;
    background-color: var(--white);
    border: 4px solid var(--black);
    display: inline-block;
    transition: all 0.4s ease 0s;
  }

  &:hover {
  color: var(--white);
  background-color: var(--black);
  transition: all 0.4s ease 0s;
}`;

const BubbleColorSelect = styled.select`
      font-weight: 600;
      font-family: Bahnschrift;
      text-transform: uppercase;
      padding: 0px 2px;
      border: 4px solid var(--black);
`;


const windowGlobal = typeof window !== 'undefined' && window;
class IndexPage extends React.Component {
constructor() {
  super();
  this.state = {
    width: null,
    isWhirly: false,
    bubbleColor: "blues",
    bubbleSize: 'tiny',
    bubbleBorderWidth: 0
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

setBubbleColor = (e) => {
  this.setState({ bubbleColor: e.target.value });
}

setBubbleSize = (e) => {
  this.setState({ bubbleSize: e.target.value });
}

getBubbleSize = () => {
  const { bubbleSize } = this.state;

  const newData = {...data};

  if(bubbleSize === "xlarge") {
    return ({
      name: "root",
      children: data.children.slice(0,5)
    })
  } else if(bubbleSize === "large") {
    return ({
      name: "root",
      children: data.children.slice(0,10)
    })
  } else if (bubbleSize === "medium") {
    return ({
      name: "root",
      children: data.children.slice(0,300)
    })
  } else {
    return newData;
  }
}

startWhirly = () => {
    this.setState({
      isOn: true,
    })
    this.timer = setInterval(() => this.setState((prevState) => ({
      bubbleBorderWidth: prevState.bubbleBorderWidth + 1
    })), .5);
}

stopWhirly = () => {
  this.setState({isOn: false})
  clearInterval(this.timer)
}

resetWhirly = () => {
  this.setState({bubbleBorderWidth: 0, isOn: false})
}


render() {
  const { width, bubbleColor, bubbleSize, bubbleBorderWidth } = this.state;
  const isMobile = width <= 500;
  const newData = this.getBubbleSize();

    return (
      <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HomeLayout>
          <h1 style={{textAlign: 'center'}}>Hi, I'm Kyle!</h1>
          <p>
              I like to program and such. 
              <br/>
              My primary language is JavaScript, and build almost everything nowadays in React. In addition to trying to learning as much as possible, I'm always on the lookout for exciting new advances in how we make great products.
              <br/> <br/>
              On my offtime; I love to travel, climb mountains, and eat whatever great food I can get my hands on. 
              <br/> <br/>
              {isMobile ? null : 'Wanna play with some Bubbles?'}
            </p>

{isMobile ? null : 
<React.Fragment>
        <BubbleChartContainer>
          <ResponsiveBubbleCanvas
              root={newData}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              identity="name"
              value="value"
              colors={{ scheme: bubbleColor }}
              colorBy="name"
              leavesOnly={true}
              enableLabel={false}
              label="name"
              labelSkipRadius={10}
              labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
              borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
              animate={true}
              motionStiffness={90}
              borderWidth={bubbleBorderWidth}
              motionDamping={12}
          />
        </BubbleChartContainer>

        <ButtonContainer>

        <BubbleColorSelect onChange={this.setBubbleColor} value={bubbleColor}>
          <option value="blues">Blues</option>
          <option value="reds">Reds</option>
          <option value="dark2">Darks</option>
          <option value="brown_blueGreen">Brownish</option>
          <option value="pink_yellowGreen">Pinkish</option>
          <option value="category10">Rainbow</option>
        </BubbleColorSelect>

        <BubbleColorSelect onChange={this.setBubbleSize} value={bubbleSize}>
          <option value="tiny">Tiny</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="xlarge">X-Large</option>
        </BubbleColorSelect>

        <BubbleButton onClick={this.resetWhirly}>
            Reset Whirly
          </BubbleButton>

          <BubbleButton onClick={this.stopWhirly}>
            Stop Whirly
          </BubbleButton>

          <BubbleButton onClick={this.startWhirly}>
            Start Whirly!
          </BubbleButton>

        </ButtonContainer>
  </React.Fragment>
}

        </HomeLayout>
    </Layout>
    );
}
};

export default IndexPage
