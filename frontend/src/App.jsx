import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';

import CenteredInput from './components/CenteredInput';
import Navbar from './components/Navbar';
import AddCard from './components/AddCard';
import Footer from './components/Footer';

function App() {
  return (
    < BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<CenteredInput />} />
        <Route path="/add-card" element={<AddCard></AddCard>} />
       
      </Routes>
      <Footer/>
    </ BrowserRouter>
   
   
  );
}

export default App;
