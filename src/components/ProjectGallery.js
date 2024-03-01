// ProjectGallery.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGallery.css'; // Import your CSS file for styling
import jqi from "./content/jqi.png"
import bms from "./content/bms.png"
import wp from "./content/wp.png"

const ProjectGallery = () => {
  // Define project data
  const projects = [
    {
      title: "Budget Management System",
      description: "Crafted using C# ASP.NET Core, our groundbreaking project revolutionizes the management of monthly budget reports at Massy Group. This sophisticated solution boasts a comprehensive suite of features, including dynamic CRUD operations on SQL databases, innovative object-oriented business logic for user, access, and budget management, along with meticulous action log tracking for auditing purposes. Developed on the .NET Entity Framework, our application adheres to the MVC design pattern, ensuring scalability, efficiency, and an unparalleled user experience.",
      url: "https://example.com/project1",
      link: "https://github.com/IsraelDyett/BudgetManager",
      image: bms
    },
    {
      title: "Email Ordering Solution",
      description: "This project is design to be a sophisticated web-based platform that cater to the needs of the customers of the apparel brand. Leveraging the power of Firebase, React, and Node.js + TypeScript, I have created a dynamic and feature-rich online landing site that facilitates the ordering requirements of the apparel small business. Employing React.js, I have developed a highly responsive and intuitive user interface that adapts seamlessly to various screen sizes and devices, providing a consistent experience across desktops, tablets, and mobile phones.Leveraging Firebase Hosting and Cloud Functions with Node.js + TypeScript, this platform is designed for scalability, handling high traffic loads with ease while maintaining optimal performance and responsiveness.",
      url: "https://israeldyett.github.io/JustQuackIt/",
      link: "https://github.com/IsraelDyett/JustQuackIt",
      image: jqi
    },
    {
      title: "Frontend Routing Page",
      description: "Employing HTML and CSS, our frontend development endeavor delivers a captivating welcome page coupled with intelligent routing capabilities tailored to users' locations. Through meticulous styling and design, we've crafted an immersive welcome experience that sets the stage for seamless navigation. Leveraging HTML's structural prowess and CSS's aesthetic finesse, our welcome page exudes elegance and sophistication, enticing users from the moment they arrive. Our routing mechanism ingeniously guides users based on their geographical location, ensuring personalized interactions and relevant content delivery. Whether users hail from bustling metropolises or serene countrysides, our frontend seamlessly adapts, providing an intuitive and tailored browsing experience. This fusion of HTML and CSS prowess not only elevates aesthetics but also enhances functionality, setting new standards for frontend development excellence.",
      url: "https://www.massystores.com/",
      link: "https://github.com/IsraelDyett/massystoresWelcomePage",
      image: wp
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