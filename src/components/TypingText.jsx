import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const TypingText = ({ text, delay = 0, style, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    let timeout;
    let i = 0;

    const typeWriter = () => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        timeout = setTimeout(typeWriter, 30); // Speed of typing in ms
      }
    };

    // Only start typing when scrolled into view
    if (isInView) {
      const startDelay = setTimeout(() => {
        typeWriter();
      }, delay * 1000);

      return () => {
        clearTimeout(timeout);
        clearTimeout(startDelay);
      };
    }
  }, [text, delay, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay }}
      style={style}
      className={className}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{ display: 'inline-block', width: '8px', height: '1em', background: 'var(--accent-primary)', marginLeft: '4px', verticalAlign: 'middle' }}
      />
    </motion.div>
  );
};

