// ProjectGallery.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGallery.css'; // Import your CSS file for styling
import jqi from "./content/jqi.png"
import bms from "./content/bms.png"
import wp from "./content/wp.png"
import zoho from "./content/zohoDiagram.png"
import chatbot from "./content/chatbotdiagram.png"
import PromoConnect from "./content/promoConnect.png"
import convo from "./content/convo_UI.png"

const ProjectGallery = () => {
  // Define project data
  const projects = [
    {
      title: "Full-Stack Multi-Platform Conversation Management System",
      description: "I developed a full-stack conversation management UI using Next.js, React, Tailwind, HTML, and CSS, backed by Google Firebase for real-time data storage. This platform consolidates customer and representative interactions across multiple channels, including websites, Facebook, Instagram, and web calls, allowing businesses to track engagements in various countries. My expertise lies in building scalable, cross-platform applications with seamless front-to-backend integration to enhance user experience and business operations.",
      url: "https://convosations-ui.vercel.app/",
      link: "https://github.com/IsraelDyett/Multi-Platform-Conversation-Management-System",
      image: convo
    },
    {
      title: "C# ASP.NET Budget Management System",
      description: "I designed a full-stack budget management application for Massy Group using C# ASP.NET Core, with a focus on intuitive frontend interfaces and seamless integration with a Microsoft SQL Server backend. Leveraging the MVC design pattern, I implemented dynamic CRUD operations and ensured a responsive user experience through effective use of object-oriented business logic. My expertise in combining frontend development with complex backend functionality highlights my ability to build scalable and user-friendly solutions.",
      url: "https://example.com/project1",
      link: "https://github.com/IsraelDyett/BudgetManager-Massy",
      image: bms
    },
    {
      title: "Promoconnet: A Comprehensive SaaS Platform Showcasing Full-Stack Development Mastery",
      description: "Promoconnet is a sophisticated SaaS application I developed using the MERN stack, showcasing my expertise in full-stack development and the MVC design pattern. The platform enables users to post images and videos, build comprehensive profiles and portfolios, and engage with company-posted events by liking, commenting, and applying. Company users can efficiently manage event applications, accepting or rejecting them as needed. This project demonstrates my expertise in developing interactive, user-centric web applications, integrating multiple functionalities, and leveraging technologies like React, Node.js, Express, and MongoDB. My experience with Promoconnet highlights my ability to create scalable, feature-rich applications that meet diverse user needs and business objectives While this project is nearing a close, I still find it necessary to continuously refine and optimize Promoconnet to ensure it meets the highest standards of performance and user experience. This ongoing process involves integrating user feedback, enhancing existing features, and exploring new technologies to keep the application relevant and competitive. My commitment to iterative development and continuous improvement underscores my dedication to delivering top-quality software solutions that align with evolving user needs and industry trends.",
      url: "https://promo-connect-client.vercel.app/",
      link: "https://github.com/IsraelDyett/PromoConnect",
      image: PromoConnect
    },
    {
      title: "Zoho Inventory Management Automation",
      description: "Transforming business efficiency through advanced automation, I engineered a seamless solution to synchronize data from Google Sheets to Zoho Inventory. Leveraging Python, I meticulously crafted a system for accurate data conversion and real-time updates. Automated email notifications to clients ensured timely updates. By integrating the Zoho Inventory API, I streamlined operations, enhancing inventory management with precision and effectiveness.",
      url: "https://github.com/IsraelDyett/Zoho-Inventory-Management-Automation",
      link: "https://github.com/IsraelDyett/Zoho-Inventory-Management-Automation",
      image: zoho
    },
    {
      title: "GooglePlatform Dialogflow Custom Integration",
      description: "I designed and deployed a sophisticated AI chatbot leveraging Dialogflow, accessible across WhatsApp, Facebook, email, and websites. By integrating seamlessly with CRM, inventory, and database systems via APIs and webhooks, I ensured efficient data flow and automation. Utilizing Google Cloud Platform and Node.js, I achieved scalable and robust performance, enhancing user engagement through intelligent automation and real-time data synchronization. This project exemplifies my ability to deliver integrated solutions that optimize business processes and drive impactful user interactions.",
      url: "https://github.com/IsraelDyett/GooglePlatform-Dialogflow-Custom-Integration",
      link: "https://github.com/IsraelDyett/GooglePlatform-Dialogflow-Custom-Integration",
      image: chatbot
    },
    {
      title: "React-Node Fullstack Email Ordering Solution",
      description: "I developed a dynamic e-commerce platform using React.js, Node.js, and TypeScript to handle order processing efficiently. The system integrates HTML/CSS for a responsive UI and sends real-time email notifications to merchants upon order completion. This project showcases my expertise in full-stack web development, leveraging modern JavaScript frameworks to deliver seamless, scalable solutions.",
      url: "https://israeldyett.github.io/JustQuackIt/",
      link: "https://github.com/IsraelDyett/JustQuackIt",
      image: jqi
    },
    {
      title: "Frontend Routing Page",
      description: "I developed a responsive frontend web page using HTML, CSS, JavaScript, and Bootstrap that provides seamless navigation to country-specific sites. This project highlights my proficiency in designing user-friendly interfaces and implementing interactive elements with modern web technologies. My focus was on creating a clean, intuitive experience for users across different regions.",
      url: "https://www.massystores.com/",
      link: "",//"https://github.com/IsraelDyett/massystoresWelcomePage",
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