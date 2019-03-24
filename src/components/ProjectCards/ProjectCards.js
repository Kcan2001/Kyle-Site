import React from "react"

import about from '../../images/about.png';
import ProjectItem from './ProjectItem';
import './Projects.css';

const ProjectCards = () => (
    <div className="protfolio-cards-container">
      <ProjectItem img={about} title="about me" link={'/next/'}/>
      <ProjectItem img={about} title="about me" link={'/next/'}/>
      <ProjectItem img={about} title="about me" link={'/next/'}/>
      <ProjectItem img={about} title="about me" link={'/next/'}/>
      <ProjectItem img={about} title="about me" link={'/next/'}/>
      <ProjectItem img={about} title="about me" link={'/next/'}/>
      <ProjectItem img={about} title="about me" link={'/next/'}/>
    </div>
)

export default ProjectCards
