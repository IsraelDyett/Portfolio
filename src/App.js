// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Make sure to import Routes from react-router-dom
import Profile from './components/Profile';
import ProjectGallery from './components/ProjectGallery';
import './App.css';
import ChatWidget from'./components/ChatWidget';

function App() {
  return (
    <Router>
      <div className="App">
        <Profile />
        <Routes> {/* Wrap your Route components in a Routes element */}
          <Route exact path="/Portfolio/" element={<ProjectGallery />} />
          
          {/* Add more routes as needed */}
        </Routes>
        <div className='footertext'>
          <p className='footertext'>
            <a href="mailto:israeldyett@gmail.com">israeldyett@gmail.com</a> |
            <a href="https://www.linkedin.com/in/israel-dyett-1ab385249/">LinkedIn</a> |
            <a href="https://github.com/IsraelDyett">GitHub</a>
          </p>
        </div>
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;