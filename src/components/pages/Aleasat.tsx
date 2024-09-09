import React from 'react';
import './Aleasat.css';

const AleasatPage: React.FC = () => {
  return (
    <div className="aleasat-page">
      <header className="aleasat-header">
        <h1>ALEASAT</h1>
        <h2>To Prove Ourselves</h2>
      </header>
      <div className="aleasat-content">
        <img 
          src="https://raw.githubusercontent.com/balloon4computing/artifact/main/image1.png" 
          alt="ALEASAT Satellite" 
          className="aleasat-image"
        />
        <section className="aleasat-description">
          <h3>Going to Orbit</h3>
          <p>
            SFU Satellite Design Team has partnered with UBC Orbit to design, build, and launch a 1U (10x10x10cm) cube satellite. 
            The project started in January 2020 with plans to launch the satellite to low-earth-orbit (LEO) in the near future.
          </p>
          <p>
            We have two payloads for this satellite. The first is a camera that can take pictures of the Earth from orbit. 
            The primary attraction of this camera is any amateur radio operator (ARO) could send a signal to our satellite 
            and request a picture of their area. With SFU Aerospace we are developing a full-size human centrifuge at Aerospace 
            Physiology Laboratory at SFU BPK department. Sending a miniaturized version of this into space will allow us to see 
            the effects the centrifuge would have on a spacecraft. SFU Aerospace Physiology Laboratory is designing the first 
            completely Canadian Short-Arm Human Centrifuge which will be re-designed for long-term space missions and will be fitted 
            to successfully fly on board of commercial spacecrafts for Lunar and Martian missions.
          </p>
          <p>
            Aside from the tangible payloads, there is also the significance of sending a satellite into space at all. Once an organization 
            successfully sends something to space they gain more credibility which allows greater opportunity for sponsorship and further 
            launches in the future. If we are successful in this project we believe we will be the fourth Canadian undergrad student team 
            to launch a satellite to space.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AleasatPage;
