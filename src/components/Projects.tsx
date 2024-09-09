import React from 'react';
import './Projects.css';

const projects = [
  { 
    title: 'ALEASAT', 
    image: 'https://raw.githubusercontent.com/balloon4computing/artifact/main/image1.png', 
    description: 'Our most ambitious project yet. Alongside UBC Orbit, we are sending a 1U cube satellite into space. The satellite will provide research data relating to human physiology and will provide pictures of Earth for amateur radio operators.', 
    link: '/projects/aleasat' 
  },
  { 
    title: 'Balloon 3', 
    image: 'https://raw.githubusercontent.com/balloon4computing/artifact/main/image2.jpeg', 
    description: 'Repeating our tradition for our new recruits we launched our most successful balloon yet.', 
    // link: '/projects/balloon3' 
  },
  { 
    title: 'CSDC5', 
    image: 'https://github.com/balloon4computing/artifact/blob/main/image3.png?raw=true', 
    description: 'Our second time in the competition and utilizing what we learned from the previous one we continued to develop our custom hardware.', 
    // link: '/projects/csdc5' 
  },
  { 
    title: 'CCP1', 
    image: 'https://github.com/balloon4computing/artifact/blob/main/image4.jpg?raw=true', 
    description: 'Building from our success of CSDC4 we partnered with 2 other universities to build a 2U cube satellite funded from the Canadian Space Agency.', 
    // link: '/projects/ccp1' 
  },
  { 
    title: 'Balloon 2', 
    image: 'https://github.com/balloon4computing/artifact/blob/main/image5.jpg?raw=true', 
    description: 'The first balloon helped us gain invaluable experience so we did it again to help our new members. Many of the leads from this project went on to lead CSDC5 and ALEA.', 
    // link: '/projects/balloon2' 
  },
  { 
    title: 'CSDC4', 
    image: 'https://github.com/balloon4computing/artifact/blob/main/image6.jpeg?raw=true', 
    description: 'Our first competition and opportunity to prove ourselves as satellite engineers.', 
    // link: '/projects/csdc4' 
  },
  { 
    title: 'Balloon 1', 
    image: 'https://github.com/balloon4computing/artifact/blob/main/image8.jpeg?raw=true', 
    description: 'Latobius was the first High Altitude Balloon launched by SFU Satellite Design Team. This mission was used to test our integration capabilities before starting on CSDC4.', 
    // link: '/projects/balloon1' 
  }
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle"><br></br></p>
      {/* <p className="projects-subtitle">Click on an image to learn more!</p> */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
