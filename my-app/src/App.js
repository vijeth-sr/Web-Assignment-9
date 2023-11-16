import './App.css';
import React, { useState } from 'react';
import Login from './login'
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './Pages/Home'; 
import About from './Pages/about';
import Job from './Pages/Jobs';
import Contact from './Pages/contact';
import Footer from './component/Footer';





function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<> <Navbar /> <Home /> <Footer /> </>} />
        <Route path="/about" element={<>
              <Navbar />
              <About />
              <Footer />
            </>} />
        <Route path="/jobs" element={  <>
              <Navbar />
              <Job />
              <Footer />
            </>} />
        <Route path="/contact" element={<>
              <Navbar />
              <Contact />
              <Footer />
            </>} />
    </Routes>
  </Router>
  );
}

export default App;
