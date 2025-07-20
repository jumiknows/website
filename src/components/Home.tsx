// src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Home.css'; // Import the CSS file for styling

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Main Hero Section */}
      <div className="home-container">
        <div className="home-image">
          <img src="/images/hero/balloon-optimized.jpg" alt="SFU SAT team" />
        </div>
        <div className="home-content">
          <h1>Making Space Accessible.</h1>
          <p>
            Here at SFU SAT, we're building more than just a satellite. Join us today to develop your skills, 
            prepare for a future career, and build lasting personal and professional connections within our 
            extensive student and alumni network.
          </p>
          <Link to="/contact" className="home-button">JOIN US</Link>
        </div>
      </div>

      {/* Lower Sections Container */}
      <div className="home-lower-sections">
        {/* ALEASAT Section */}
        <div className="home-aleasat-section">
          <div className="aleasat-image">
            <img src="https://media.githubusercontent.com/media/balloon4computing/artifact/main/image1.png" alt="ALEASAT CubeSat" />
          </div>
          <div className="aleasat-content">
            <h2>ALEASAT</h2>
            <p>
              Our flagship CubeSat project, built in collaboration with the European Space Agency's Fly Your Satellite program.
            </p>
            <Link to="/projects" className="home-button">LEARN MORE</Link>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="home-sponsors-section">
          <h2>Our Sponsors</h2>
          <p>Help Us Continue to educate and inspire future generations.</p>
          <div className="sponsors-grid">
            <img src="/images/sponsors/sponsor/Momentus.png" alt="Momentus" />
            <img src="/images/sponsors/sponsor/mda.png" alt="MDA" />
            <img src="/images/sponsors/sponsor/agi.png" alt="AGI" />
            <img src="/images/sponsors/sponsor/DigiKey.png" alt="DigiKey" />
            <img src="/images/sponsors/sponsor/valispace.png" alt="Valispace" />
            <img src="/images/sponsors/sponsor/csa.png" alt="Canadian Space Agency" />
          </div>
          <Link to="/sponsors" className="home-button">SPONSOR US</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;