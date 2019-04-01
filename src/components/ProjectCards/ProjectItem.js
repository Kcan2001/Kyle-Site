import React from "react"

const ProjectItem = (props) => {
    const {onProfileCardClick, title, imgsrc} = props;

    return (<div className="project-item-container">
        <img className="project-img" src={require(`../../images/${imgsrc}.png`)} alt={title}/>
        <div className="project-text-container">
            <button className="project-item-link" onClick={onProfileCardClick}>
                <h2 className="project-text h2-main-style">about</h2>
            </button>
        </div>
    </div>
    );
}

export default ProjectItem
