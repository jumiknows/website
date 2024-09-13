// src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Home.css'; // Import the CSS file for styling

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-image">
        <img src="https://media.githubusercontent.com/media/balloon4computing/artifact/main/balloon.jpg" alt="SFU SAT team" />
      </div>
      <div className="home-content">
        <h1>Making Space Accessible.</h1>
        <p>
          Here at SFU SAT, we’re building more than just a satellite. Join us today to develop your skills, 
          prepare for a future career, and build lasting personal and professional connections within our 
          extensive student and alumni network.
        </p>
        <Link to="/contact" className="home-button">Join Us</Link>
      </div>
    </div>
  );
};

export default Home;
