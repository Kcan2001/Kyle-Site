import React, {useState} from "react"

import styled from 'styled-components'
import './Projects.css';

import data from '../../data/portfolio.json';

import ProjectItem from './ProjectItem';

// STYLES
const Spacer = styled.div`
  flex-grow: 1;
`;

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);

  .modal-grid {
  background-color: var(--light-blue);
  margin: 9% auto;
  padding: 20px 30px;
  border: 1px solid var(--black);
  width: 60%;
  display: block;
}

.portfolio-close-modal {
  color: var(--grey);
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.portfolio-modal-back-button {
  font-family: lato;
  padding: 16px 20px;
  cursor: pointer;
  background-color: var(--black);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;

  &:hover {
    background-color: white;
    color: var(--black);
    cursor: pointer;
  }
}

.modal-image-description-section {
  width: 100%;
  display: flex;


  .modal-paragraph-grid {
    width: 60%;
    padding: 0 50px 0 0; 
  }

  .modal-image-grid {
    width: 40%;
  }

}

button {
  background-color: transparent;
  border: none;
}

.modal-top-close-button-grid {
  display: flex;
  width: 100%;
}

img { width: 400px; height: auto;}

.portfolio-close-modal:hover,
.portfolio-close-modal:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
}`;

// MAIN APP 

const ProjectCards = () => {
  const [modalLoaded, setModal] = useState(false);
  const [selectedProject, setProject] = useState({});

const renderModal = () => {
  const {title, description, modalimgsrc, link} = selectedProject;

  return (
    <div className="modal-grid">
      <div className="modal-top-close-button-grid">
        <Spacer />
        <button onClick={() => setModal(false)}>
          <span className="portfolio-close-modal">X</span>
        </button>
      </div>

      <h1>{title}</h1>

      <div className="modal-image-description-section">
        <div className="modal-paragraph-grid">
            <p>{description}</p>
            <a href={link}>Click to go to {title}.</a>
        </div>
        <div className="modal-image-grid">
          <a href={link}>
            <img src={require(`../../images/${modalimgsrc}.png`)} alt={title + " photo"}/>
          </a>
        </div>
      </div>

      <button className="portfolio-modal-back-button" onClick={() => setModal(false)}>
        Back to Portfolio Grid
      </button>
    </div>
  )
} 

const onProfileCardClick = (project) => {
  setProject(project);
  setModal(true);
};

  return (
  modalLoaded ? 
    <Modal>
        {renderModal()}
    </Modal> 
    :
    <div className="protfolio-cards-container">
      {data.projects.map(project => {
        return (
          <ProjectItem key={project.title} imgsrc={project.thumbimgsrc} title={project.title} onProfileCardClick={() => onProfileCardClick(project)}/>
        )
      }
      )}
    </div>
)
};

export default ProjectCards
