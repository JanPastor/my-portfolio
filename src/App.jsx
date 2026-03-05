import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import CyberBackground from './components/CyberBackground';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';

function App() {
  return (
    <Router>
      <CyberBackground />
      <div className="container">
        <header>
          <NavigationBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
