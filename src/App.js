import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './NavBar';
import Home from './Home';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </>
);

export default App; 