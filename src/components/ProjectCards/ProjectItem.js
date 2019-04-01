import React, { useState } from 'react';
import * as classNames from 'classnames'

const ProjectItem = (props) => {
    const [focusState, setFocus] = useState(false);
    const {onProfileCardClick, title, imgsrc} = props;

    const projectItemContainer = classNames ({
        "project-item-container" : !focusState,
        "project-item-container--hover" :  focusState
    });

    return (
    <div className={projectItemContainer}>
        <img className="project-img" src={require(`../../images/${imgsrc}.png`)} alt={title}/>
        <div className="project-text-container">
            <button onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className="project-item-link" onClick={onProfileCardClick}>
                <h2 className="project-text h2-main-style">about</h2>
            </button>
        </div>
    </div>
    );
}

export default ProjectItem
