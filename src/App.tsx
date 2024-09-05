import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import Navbar from './components/Navbar';
import About from './components/About';
// import Projects from './components/Projects';
// import Sponsors from './components/Sponsors';
import Contact from './components/Contact';

const App: React.FC = () => (
  <Router>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/projects" element={<Projects />} /> */}
      {/* <Route path="/sponsors" element={<Sponsors />} /> */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
