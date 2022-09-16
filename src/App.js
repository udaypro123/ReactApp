import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import Homecontact from './components/Homecontact';

function App() {
  return (
    <>
    <Homecontact/>
         <Navbar/>
          
          <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="about/*" element={ <About /> } />
              <Route path="contact/*" element={ <Contact /> } />
              <Route path="services/*" element={ <Services /> } />
          </Routes>
    </>
  );
}

export default App;
