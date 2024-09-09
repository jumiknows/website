import React from 'react';
import './About.css'; // Ensure this CSS file is properly styled

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* About Us Section */}
      <div className="about-section">
        <div className="about-content">
          <img
            src="https://github.com/balloon4computing/artifact/blob/main/team.jpg?raw=true"
            alt="SFU Satellite Design Team"
            className="about-image"
          />
          <div className="about-text">
            <h3>About Us</h3>
            <p>
              For the past several years, SFU Satellite Design Team has existed; our goal has been to provide
              education and training for future engineers interested in the space industry. The projects we have
              worked on so far have provided us with extensive knowledge of space systems. Our team allows our
              members to reach their full potential now in undergrad to prepare them for a fulfilling career in the
              Aerospace sector after graduation.
            </p>
          </div>
        </div>
      </div>

      {/* ADCS Section */}
      <div className="about-section">
        <div className="about-content about-content-right">
          <img
            src="https://github.com/balloon4computing/artifact/blob/main/adcs.png?raw=true"
            alt="ADCS"
            className="about-image"
          />
          <div className="about-text">
            <h3>Attitude Determination and Control System (ADCS)</h3>
            <p>
              Attitude Determination and Control System (ADCS) is in charge of the various sensors used to determine
              the orientation and position of the satellite, as well as re-orienting the satellite when necessary.
              With the many sensors onboard a satellite, the ADCS team is currently working on a sensor fusion and
              filtration algorithm to eliminate noise for the On-Board Computer (OBC). Additionally, the team is
              designing and building a custom test rig for the satellite actuators, which will simultaneously test
              the magnetorquers and control algorithm.
            </p>
          </div>
        </div>
      </div>

      {/* C&DH Section */}
      <div className="about-section">
        <div className="about-content">
          <img
            src="https://github.com/balloon4computing/artifact/blob/main/obc.jpg?raw=true"
            alt="Command and Data Handling"
            className="about-image"
          />
          <div className="about-text">
            <h3>Command and Data Handling (C&DH)</h3>
            <p>
              The Command and Data Handling team (C&DH) works hard to develop the onboard computer (OBC) for our
              satellites. We design custom circuit boards and create specialized firmware to meet the satellite's
              needs. We also handle the management of executing commands, storing data, and gathering telemetry.
            </p>
          </div>
        </div>
      </div>

      {/* Communications Section */}
      <div className="about-section">
        <div className="about-content about-content-right">
          <img
            src="https://github.com/balloon4computing/artifact/blob/main/comms.jpg?raw=true"
            alt="Communications"
            className="about-image"
          />
          <div className="about-text">
            <h3>Communications</h3>
            <p>
              The communications, or RF (Radio Frequency) team, ensures that the satellite can communicate with our
              ground station back on earth. This communication link will handle the downlink of satellite telemetry
              and payload data, as well as the uplink of telecommands.
            </p>
          </div>
        </div>
      </div>

      {/* EPS Section */}
      <div className="about-section">
        <div className="about-content">
          <img
            src="https://github.com/balloon4computing/artifact/blob/main/eps.jpg?raw=true"
            alt="Electrical Power System"
            className="about-image"
          />
          <div className="about-text">
            <h3>Electrical Power System (EPS)</h3>
            <p>
              The EPS team oversees generation, charging, storage, and budgeting of energy in the satellite. This can
              go from running models using code and simulation software to researching, designing and testing printable
              circuit boards (PCBs). Batteries can be highly sensitive, so our job in a nutshell is to make sure the
              satellite does not run out of power or have any exploding parts.
            </p>
          </div>
        </div>
      </div>

      {/* Payload Section */}
      <div className="about-section">
        <div className="about-content about-content-right">
          <img
            src="https://github.com/balloon4computing/artifact/blob/main/payload.jpg?raw=true"
            alt="Payload"
            className="about-image"
          />
          <div className="about-text">
            <h3>Payload</h3>
            <p>
              Every project has a payload or reason for existing, and the payload team is in charge of building that.
              What we do specifically changes from project to project: Previous examples are atmospheric sensors, cameras,
              and calibration equipment for ground systems. For ALEASAT we are developing a centrifuge payload, which is
              an adapted reaction wheel. The team has already designed and manufactured a small prototype and is currently
              building a test rig to verify different operating modes.
            </p>
          </div>
        </div>
      </div>

      {/* Structure Section */}
      <div className="about-section">
        <div className="about-content">
          <img
            src="https://github.com/balloon4computing/artifact/blob/main/structure.png?raw=true"
            alt="Structure"
            className="about-image"
          />
          <div className="about-text">
            <h3>Structure</h3>
            <p>
              The structure team is responsible for holding the satellite together under extreme conditions. The team
              ensures all components are securely mounted within the satellite to survive extreme temperatures and
              vibrations during launch. They also develop the antenna deployment systems, and perform extensive simulation
              analyses to ensure the satellite will survive in orbit.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Operations Section */}
      <div className="about-section">
        <div className="about-content about-content-right">
          <img
            src="https://github.com/balloon4computing/artifact/blob/main/mops.png?raw=true"
            alt="Mission Operations"
            className="about-image"
          />
          <div className="about-text">
            <h3>Mission Operations (Mops)</h3>
            <p>
              The Mission Operations team (Mops) is responsible for operating the satellite after it launch, this include
              assigning mission for the satellite, sending the command to the satellite, accept image request from general
              public and capture image for them. We build and operate our control center, Barbour’s Cut which aids our
              operation and allows for public request image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
