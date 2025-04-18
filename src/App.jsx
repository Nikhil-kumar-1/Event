import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ServicesAll from './components/Service/ServiceAll';
import AboutAll from './components/About/AboutAll';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServicesAll />} />
        <Route path="/about" element={<AboutAll />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
