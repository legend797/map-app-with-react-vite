import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';
// import Dashboard from './Pages/Dashboard';
import './App.css'
import Dashboard2 from './Pages/Dashboard2';

function App() {
  

  return (
    <Routes>
     <Route path='/' index element={<Home />} />
    
          <Route path='/dashboard' index element={<Dashboard2/>} />
        
    </Routes>
  )
}

export default App
