import React from 'react';
import profileImage from '../../public/20231007_130255.jpg'; // Adjust the path according to your file structure
import '../index.css';

function AboutMe() {
  return (
    <div className='about-me' >
      <h1>About Me</h1>
      <img src={profileImage} alt="Michael G" className="profile-image" />
      <p>Hello, My name Is Michael.
        I am a full stack web developer with a background in sales and customer service. I am a recent graduate of the University of Texas at Austin Coding Bootcamp.
        I am a quick learner and a hard worker. I have a passion for technology and am excited to continue to learn and grow in the tech industry.
        I am currently seeking a full-time position as a web developer. Please feel free to reach out to me with any opportunities or questions you may have. Thank you for visiting my page!
        I got my start in computers as a tech for office depot. There i got my first taste in using command line,and fixing viruses, as well as helping customers
        get into their computers when they forgot their passwords. I have always been interested in technology and how it works. I am excited to continue to learn and grow in the tech industry.
        As well as technology i am also a fire fighter and photographer. All Photos in this portfolio have been taken by me in the course of traveling and work.
        Hope you enjoy and cant wait to work with you!
      </p>
    </div>
  );
}

export default AboutMe;
