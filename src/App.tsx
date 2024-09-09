// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Your Home component
import Projects from './components/Projects'; // Other components
import Sponsors from './components/Sponsors';
import Outreach from './components/Outreach';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; // Your Navbar component
import Aleasat from './components/pages/Aleasat'; // Import the ALEASAT page

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Both / and /home route to the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="/website" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/aleasat" element={<Aleasat />} />
      </Routes>
    </Router>
  );
};

export default App;
