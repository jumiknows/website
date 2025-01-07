// App.tsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use HashRouter instead of BrowserRouter
import Home from './components/Home';
import Projects from './components/Projects';
import Sponsors from './components/Sponsors';
import Outreach from './components/Outreach';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
      </Routes>
      <Footer />

    </Router>
  );
};

export default App;
