import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/navigation.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/gallery', label: 'Gallery' }
];

export default function NavigationBar() {
  return (
    <nav className="navbar top-navbar">
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/" className="nav-link logo-link">
            <span className="nav-text logo-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00d4ff' }}>Jan Pastor</span>
            <motion.div 
              style={{ display: 'inline-block', marginLeft: '10px' }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              ⚡
            </motion.div>
          </NavLink>
        </div>
        <ul className="nav-list horizontal-list">
          {navItems.map((item) => (
            <li className="nav-item horizontal-item" key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => `nav-link horizontal-link ${isActive ? 'active' : ''}`}
              >
                <span className="nav-text horizontal-text">{item.label}</span>
              </NavLink>
            </li>
          ))}
          <li className="nav-item horizontal-item">
            <a href="https://www.linkedin.com/in/jan-pastor-781767218/" target="_blank" rel="noreferrer" className="nav-link horizontal-link linkedin-link">
              <span className="nav-text horizontal-text">LinkedIn ↗</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
