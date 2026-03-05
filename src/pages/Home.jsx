import React from 'react';
import { motion } from 'framer-motion';
import { TypingText } from '../components/TypingText';
import InteractiveGridBackground from '../components/InteractiveGridBackground';
import '../styles/grid-bg.css';

const skills = [
  "Python", "C/C++", "C#", "SQL", "HTML", "CSS", "JavaScript", 
  "Verilog", "LaTeX", "AI & Machine Learning", "Visual Studio/VS Code", 
  "Jetbrains IDE", "GitHub", "Docker", "WSL", "SOLIDWORKS", "MATLAB", 
  "KiCAD", "LTSpice", "Altium PCB Designer", "PyTorch", "TensorFlow",
  "Circuit Analysis", "Digital Logic Design", "Digital Signal Processing",
  "Electrical Wiring", "Motors & Generators", "PLC Programming"
];

// Marquee animation variants
const marqueeVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export default function Home() {
  return (
    <motion.div 
      className="content home-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', position: 'relative' }}
    >
      <InteractiveGridBackground />

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{ marginBottom: '2rem', position: 'relative', zIndex: 10, textAlign: 'center' }}
      >
        <TypingText 
          text="Hi, 👋. I'm Jan Pastor!" 
          delay={0.5}
          style={{ 
            fontSize: '3rem', 
            marginBottom: '0.5rem', 
            fontWeight: 'bold',
            fontFamily: '"Rajdhani", sans-serif',
            background: 'linear-gradient(90deg, #00d4ff, #00ff88)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}
        />
        <br/>
        <TypingText 
          text="Electrical and Computer Engineering Major ⚡" 
          delay={1.5}
          style={{ 
            fontSize: '1.5rem', 
            color: '#a0b0c0', 
            marginTop: '0.5rem',
            fontFamily: '"Rajdhani", sans-serif',
            fontWeight: 600,
            display: 'inline-block'
          }}
        />
      </motion.div>

      {/* Glassmorphism About Me Card */}
      <motion.section 
        style={{
          background: 'rgba(20, 30, 48, 0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
          marginBottom: '3rem',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 10
        }}
        whileHover={{ boxShadow: '0 8px 32px 0 rgba(0, 212, 255, 0.15)', borderColor: 'rgba(0, 212, 255, 0.4)' }}
        transition={{ duration: 0.3 }}
      >
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '100px', height: '100px', background: 'rgba(0, 212, 255, 0.2)', filter: 'blur(40px)', borderRadius: '50%' }}></div>
        <h3 style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#00d4ff' }}>About Me</h3>
        <p style={{ lineHeight: '1.8', color: '#e0e6ed', fontSize: '1.1rem' }}>
          Aspiring Electrical & Computer Engineer from California. Currently pursuing dual B.S. degrees at Cal Poly Pomona. 
          Passionate about robotics, electronics, and bridging the gap between hardware and software. I seek to understand 
          more about electrical theory, invent useful gadgets, and collaborate on innovative projects.
        </p>
      </motion.section>

      {/* Animated Skills Marquee */}
      <section style={{ overflow: 'hidden', padding: '1rem 0', position: 'relative', zIndex: 10 }}>
        <h3 style={{ marginBottom: '1.5rem', color: '#00ff88', textAlign: 'center' }}>Technical Arsenal</h3>
        <div style={{ display: 'flex', overflow: 'hidden', width: '100%', position: 'relative', whiteSpace: 'nowrap' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '50px', background: 'linear-gradient(to right, rgba(10, 15, 26, 1), transparent)', zIndex: 2 }}></div>
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50px', background: 'linear-gradient(to left, rgba(10, 15, 26, 1), transparent)', zIndex: 2 }}></div>
          
          <motion.div 
            style={{ display: 'flex', gap: '1rem', paddingRight: '1rem' }}
            variants={marqueeVariants}
            animate="animate"
          >
            {/* Render skills twice for seamless infinite loop */}
            {[...skills, ...skills].map((skill, index) => (
              <span 
                key={index} 
                style={{
                  padding: '8px 16px',
                  background: 'rgba(0, 255, 136, 0.1)',
                  border: '1px solid rgba(0, 255, 136, 0.3)',
                  borderRadius: '20px',
                  color: '#00ff88',
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '0.9rem',
                  display: 'inline-block'
                }}
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
