import React from 'react';
import '../index.css'; // If you have specific styles for this component

function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>
        <a href="/path_to_your_resume.pdf" download="Your-Name-Resume.pdf">
          Download My Resume
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </div>
  );
}

export default Resume;
