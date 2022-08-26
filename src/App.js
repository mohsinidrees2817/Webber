import React from 'react';
import './App.css';

import Header from './Components/Header';
import CaseStudies from "./Components/CaseStudies";
import Overview from "./Components/Overview";
import Faq from "./Components/Faq";
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';

import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="p-0 m-0 overflow-hidden">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="case-studies" element={<CaseStudies />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="faq" element={<Faq />} />     
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;