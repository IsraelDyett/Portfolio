// ProjectCard.js
import React from 'react';
//import "./ProjectCard.css"

const ProjectCard = ({ project }) => {
  const { title, description, url, link, image } = project;

  const handleClick = () => {
    window.open(url, "_blank"); // Open project URL in a new tab
  };

  return (
    <div className="project-card" >
      <img src={image} alt={title} onClick={handleClick} className="project-image" />
      <div className="project-info">
        <h3 onClick={handleClick} >{title}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer">View project on GitHub</a>
        <p onClick={handleClick}>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;