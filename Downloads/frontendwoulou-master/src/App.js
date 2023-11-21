import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Authentication from './pages/Authentication';
import Inscription from './pages/Inscription';

import Contact from './pages/Contact';
import Home from './pages/Home';



function App() {
  return (
   <BrowserRouter>
   <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        
        <Route path='authentication' element={<Authentication />} />
        <Route path='inscription' element={<Inscription />} />
      
      </Routes>
   </BrowserRouter>
  );
}

export default App; 
