import React from "react"

const ProjectItem = (props) => (
    <div className="project-item-container">
        <img className="project-img" src={props.img} alt=""/>
        <div className="project-text-container">
            <a className="project-item-link" href={props.link}>
                <h2 class="project-text h2-main-style">{props.title}</h2>
            </a>
        </div>
    </div>
)

export default ProjectItem
