// ProjectGallery.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGallery.css'; // Import your CSS file for styling

const ProjectGallery = () => {
  // Define project data
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "https://example.com/project1",
      image: "project1.jpg"
    },
    {
      title: "Project 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://example.com/project2",
      image: "project2.jpg"
    },
    {
      title: "Project 3",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://example.com/project2",
      image: "project3.jpg"
    },
  ];

  return (
    <div>
        <h2 className='projectHeader'>Projects</h2>
        <div className="project-gallery">
        <div className="gallery">
            {/* Map through project data and render ProjectCard component for each project */}
            {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
            ))}
        </div>
        </div>
    </div>
  );
}

export default ProjectGallery;
