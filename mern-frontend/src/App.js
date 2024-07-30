import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';  // Ajoutez d'autres pages selon vos besoins

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Ajoutez d'autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
