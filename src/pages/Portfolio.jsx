import React from 'react';

function Portfolio() {
  // Define your projects here
  const projects = [
    {
      title: 'Project 1',
      imageUrl: '/path/to/project1-image.jpg',
      projectUrl: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      imageUrl: '/path/to/project2-image.jpg',
      projectUrl: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      imageUrl: '/path/to/project3-image.jpg',
      projectUrl: 'https://github.com/FirefighterMichael94/P2.git',
    },
    {
      title: 'Project 4',
      imageUrl: '/path/to/project4-image.jpg',
      projectUrl: 'https://example.com/project4',
    },
    {
      title: 'Project 5',
      imageUrl: '/path/to/project5-image.jpg',
      projectUrl: 'https://example.com/project5',
    },
    {
      title: 'Project 6',
      imageUrl: '/path/to/project6-image.jpg',
      projectUrl: 'https://example.com/project6',
    },
  ];

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
