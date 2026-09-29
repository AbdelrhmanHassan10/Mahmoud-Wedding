import React from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--primary-color)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>
          M & A
        </h1>
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "150px" }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        style={{
          height: '2px',
          backgroundColor: 'var(--secondary-color)',
          marginTop: '1rem'
        }}
      />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          marginTop: '1.5rem',
          fontFamily: 'var(--font-arabic-text)',
          color: 'var(--accent-color)',
          letterSpacing: '2px'
        }}
      >
        جاري التجهيز...
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
