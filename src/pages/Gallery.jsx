import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypingText } from '../components/TypingText';
import { projectsData } from '../data/projectsData';
import '../styles/gallery.css';

// Extract all images from projects data
const allImages = projectsData.flatMap(p => p.images || []);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // If there are no images from projects, fallback to a few known ones
  const galleryImages = allImages.length > 0 ? allImages : [
    '/images/mate_rov_team/LancerLumineers2ndPlace.jpg',
    '/images/mate_rov_team/computer_vision_debug.jpg',
    '/images/project_images/BLADETeam2.jpg'
  ];

  return (
    <motion.div 
      className="content gallery-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}
    >
      <TypingText 
        text="Gallery" 
        style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', background: 'linear-gradient(90deg, #00d4ff, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }} 
      />

      <div style={{ columns: '3 250px', columnGap: '1rem' }}>
        {galleryImages.map((src, idx) => (
          <motion.div 
            key={idx} 
            style={{ marginBottom: '1rem', cursor: 'pointer', breakInside: 'avoid' }}
            whileHover={{ scale: 1.03, filter: 'brightness(1.2)' }}
            onClick={() => setSelectedImage(src)}
          >
            <img 
              src={src} 
              alt={`Gallery item ${idx}`} 
              style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(0, 212, 255, 0.2)' }} 
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(10px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <motion.img 
              src={selectedImage} 
              alt="Fullscreen"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                borderRadius: '12px',
                boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)',
                border: '1px solid rgba(0, 212, 255, 0.5)'
              }}
              onClick={(e) => e.stopPropagation()} // Prevent click away when clicking image itself
            />
            
            <button 
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '30px',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '3rem',
                cursor: 'pointer',
                textShadow: '0 0 10px rgba(0,212,255,0.8)'
              }}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
