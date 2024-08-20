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
import confidential from "./content/confidential.png"

const ProjectGallery = () => {
  // Define project data
  const projects = [
    {
      title: "Budget Management System",
      description: "Crafted using C# ASP.NET Core, our groundbreaking project revolutionizes the management of monthly budget reports at Massy Group. This sophisticated solution boasts a comprehensive suite of features, including dynamic CRUD operations on SQL databases, innovative object-oriented business logic for user, access, and budget management, along with meticulous action log tracking for auditing purposes. Developed on the .NET Entity Framework, our application adheres to the MVC design pattern, ensuring scalability, efficiency, and an unparalleled user experience.",
      url: "https://example.com/project1",
      link: "https://github.com/IsraelDyett/BudgetManager",
      image: confidential
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
      image: confidential
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