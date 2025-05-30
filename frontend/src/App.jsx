import React from "react";
import {Route, Routes } from "react-router-dom";
import Top from "./Components/Top";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from './Pages/About'
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div className="font-Outfit">
      <Top />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
