// Profile.js
import React from 'react';
import './Profile.css'; // Import CSS file for styling
import profilePic from './content/profilepic.jpeg';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-pic-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <div className="contact-info">
        <h1>Israel Dyett</h1>
        <h2>Software Engineer | Data Scientist</h2>
        <p> Israeldyett@gmail.com</p>
      </div>
      <div className="bio-container">
        <p className="bio">
        I am a results-driven Tech Professional with a diverse skill set. I have expertise in full-stack development, database design, and problem-solving. I am proficiency in Java Object-Oriented Design Patterns, Spring Framework, C#, ASP.NET,  React, React Native, and SQL which equips me to efficiently manage business operations and enhance user interactions through web-based applications. With a keen eye for detail and a commitment to continuous improvement, I excel in delivering innovative solutions and driving organizational success.
        </p>
      </div>
    </div>
  );
}

export default Profile;
