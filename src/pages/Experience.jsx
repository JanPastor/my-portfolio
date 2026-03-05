import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypingText } from '../components/TypingText';
import { experienceData } from '../data/experienceData';

const ExperienceCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      style={{
        background: 'rgba(20, 30, 48, 0.4)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(0, 212, 255, 0.2)',
        borderRadius: '16px',
        padding: '2rem',
        cursor: 'pointer',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(0, 212, 255, 0.5)' }}
      transition={{ layout: { duration: 0.4, type: "spring" } }}
    >
      <motion.div layout="position" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <TypingText 
            text={item.title} 
            delay={0.2}
            style={{ color: '#00d4ff', margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: 'bold' }} 
          />
          <div style={{ color: '#a0b0c0', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 600 }}>
            {item.organization} | {item.date}
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {item.roles.map((role, i) => (
            <span key={i} style={{ background: 'rgba(0, 255, 136, 0.1)', color: '#00ff88', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid rgba(0, 255, 136, 0.3)' }}>
              {role}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.p layout="position" style={{ color: '#e0e6ed', margin: '1rem 0' }}>
        {item.summary}
      </motion.p>
      
      <motion.div layout="position" style={{ textAlign: 'right', color: 'rgba(0, 212, 255, 0.7)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
        {isExpanded ? "▲ Click to Collapse" : "▼ Click to View Details"}
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul style={{ color: 'var(--text-primary)', paddingLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.6' }}>
              {item.details.map((detail, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <motion.div 
      className="content experience-page"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}
    >
      <TypingText 
        text="Experience" 
        style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center', background: 'linear-gradient(90deg, #00d4ff, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }} 
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {experienceData.map(item => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
}
