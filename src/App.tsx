import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Pilates from './pages/Pilates';
import Clothing from './pages/Clothing';
import Blog from './pages/Blog';
import Recommendations from './pages/Recommendations';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pilates" element={<Pilates />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
