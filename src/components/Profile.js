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
          Results-driven Tech Professional with expertise in Java, C# ASP.NET, and front-end technologies like
          React. Proven ability in full-stack development, database design, and problem-solving abilities.
        </p>
      </div>
    </div>
  );
}

export default Profile;
