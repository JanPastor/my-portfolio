import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypingText } from '../components/TypingText';
import { projectsData } from '../data/projectsData';

const ProjectCard = ({ project }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <motion.div 
      layout
      style={{
        background: 'rgba(20, 30, 48, 0.4)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(0, 212, 255, 0.2)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ borderColor: 'rgba(0, 212, 255, 0.5)' }}
    >
      <motion.div layout="position">
        <TypingText 
          text={project.title} 
          delay={0.2}
          style={{ color: '#00d4ff', margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: 'bold' }} 
        />
        <h3 style={{ color: '#a0b0c0', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 500 }}>{project.subtitle}</h3>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1.5rem' }}>
          {project.techStack.map((tech, i) => (
            <span key={i} style={{ 
              background: 'rgba(0, 255, 136, 0.1)', 
              color: '#00ff88', 
              padding: '6px 14px', 
              borderRadius: '6px', /* more microchip-like */
              fontSize: '0.85rem', 
              border: '1px solid rgba(0, 255, 136, 0.4)',
              boxShadow: '0 0 8px rgba(0, 255, 136, 0.2)',
              fontFamily: '"IBM Plex Mono", monospace'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div layout="position" style={{ position: 'relative' }}>
        <p style={{ 
          color: '#e0e6ed', 
          lineHeight: '1.8', 
          display: readMore ? 'block' : '-webkit-box',
          WebkitLineClamp: readMore ? 'unset' : 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {project.description}
        </p>
        <button 
          onClick={() => setReadMore(!readMore)}
          style={{
            background: 'none', 
            border: 'none', 
            color: '#00d4ff', 
            cursor: 'pointer',
            padding: '0.5rem 0',
            fontWeight: 'bold',
            marginTop: '0.5rem'
          }}
        >
          {readMore ? 'Show Less' : 'Read More...'}
        </button>
      </motion.div>

      {project.link && (
        <motion.div layout="position" style={{ marginTop: '1rem' }}>
          <a href={project.link} target="_blank" rel="noreferrer" style={{ color: '#00ff88', textDecoration: 'none', borderBottom: '1px solid #00ff88' }}>
            View Repository ↗
          </a>
        </motion.div>
      )}

      {/* Media Gallery */}
      <motion.div layout="position" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {project.videos && project.videos.map((vid, idx) => (
          <div key={`vid-${idx}`} style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
            <iframe 
               src={vid} 
               style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px', border: 'none' }}
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
               title={`${project.title} Video ${idx+1}`}
            />
          </div>
        ))}
        {project.images && project.images.map((img, idx) => (
          <img 
            key={`img-${idx}`} 
            src={img} 
            alt={`${project.title} screenshot ${idx+1}`} 
            style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover', border: '1px solid rgba(255, 255, 255, 0.1)' }}
          />
        ))}
      </motion.div>

    </motion.div>
  );
};

export default function Projects() {
  return (
    <motion.div 
      className="content projects-page"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}
    >
      <TypingText 
        text="My Projects" 
        style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', background: 'linear-gradient(90deg, #00d4ff, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }} 
      />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
}
