import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="section-container" style={{
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'radial-gradient(circle at center, var(--primary-light) 0%, var(--primary-bg) 100%)'
    }}>
      {/* Subtle decorative circles */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          border: '1px solid rgba(197, 160, 89, 0.1)',
          borderRadius: '50%',
          top: '-20%',
          right: '-20%'
        }}
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          border: '1px solid rgba(197, 160, 89, 0.15)',
          borderRadius: '50%',
          bottom: '-10%',
          left: '-10%'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{ zIndex: 1 }}
      >
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
          بسم الله الرحمن الرحيم
        </p>
        <h1 style={{ fontSize: '5rem', margin: '1rem 0', lineHeight: '1.2' }}>
          MAHMOUD <br /> & <br /> SALMA
        </h1>
        <p style={{ fontSize: '1.5rem', marginTop: '1rem', color: 'var(--card-bg)' }}>
          August 8, 2026
        </p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          style={{
            marginTop: '2rem',
            fontStyle: 'italic',
            maxWidth: '600px',
            margin: '2rem auto 0',
            lineHeight: '1.8'
          }}
        >
          "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
        </motion.p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          color: 'var(--accent-gold)',
          fontSize: '2rem'
        }}
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Hero;
