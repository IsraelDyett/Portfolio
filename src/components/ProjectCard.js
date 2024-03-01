// ProjectCard.js
import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, url, image } = project;

  const handleClick = () => {
    window.open(url, "_blank"); // Open project URL in a new tab
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;