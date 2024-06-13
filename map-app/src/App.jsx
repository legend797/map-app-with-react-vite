import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';

import './App.css'
import Dashboard from './Pages/Dashboard';

function App() {
  

  return (
    <Routes>
     <Route path='/' index element={<Home />} />
    
          <Route path='/dashboard' index element={<Dashboard/>} />
        
    </Routes>
  )
}

export default App
