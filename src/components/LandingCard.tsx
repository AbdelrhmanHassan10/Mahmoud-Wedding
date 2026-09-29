import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import FallingPetals from './FallingPetals.tsx';

interface LandingCardProps {
  onOpen: () => void;
}

const FloralCorner = ({ style, flip }: { style?: React.CSSProperties, flip?: boolean }) => {
  return (
    <div style={{
      position: 'absolute',
      width: '280px',
      height: '280px',
      transform: flip ? 'rotate(180deg)' : 'none',
      pointerEvents: 'none',
      mixBlendMode: 'multiply', // Perfectly blends the watercolor texture with the card
      ...style
    }}>
      <img 
        src="/corner.png"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          // Mask to ensure soft blending
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
        }}
        alt="watercolor floral corner"
      />
    </div>
  );
};

const LandingCard: React.FC<LandingCardProps> = ({ onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100, scale: 0.95 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--primary-bg)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 50,
        padding: '1rem',
        overflow: 'hidden'
      }}
    >
      <FallingPetals />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          backgroundColor: 'var(--card-bg)',
          width: '100%',
          maxWidth: '420px',
          height: '80vh',
          maxHeight: '750px',
          borderRadius: '20px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '3.5rem 2rem',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 10
        }}
      >
        {/* Floral Corners */}
        <FloralCorner style={{ top: '-40px', left: '-40px' }} />
        <FloralCorner style={{ bottom: '-40px', right: '-40px' }} flip={true} />

        {/* Top Icon */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            width: '65px',
            height: '65px',
            flexShrink: 0,
            backgroundColor: 'var(--text-dark)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 10px 25px rgba(21, 44, 75, 0.3)',
            zIndex: 1
          }}
        >
          <FaHeart color="var(--card-bg)" size={26} />
        </motion.div>

        {/* Names & Typography */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          style={{ textAlign: 'center', zIndex: 1, marginTop: '2rem' }}
        >
          <h1 style={{ 
            fontFamily: 'var(--font-arabic-title)', 
            fontSize: '3rem', 
            color: 'var(--text-dark)', 
            lineHeight: '1.1',
            fontWeight: 600,
            letterSpacing: '2px'
          }}>
            MAHMOUD<br />
            <span style={{ fontSize: '2rem', fontStyle: 'italic', color: 'var(--accent-gold)', margin: '10px 0', display: 'inline-block' }}>&</span><br />
            SALMA
          </h1>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            margin: '2.5rem 0'
          }}>
            <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--accent-gold)' }} />
            <div style={{ color: 'var(--accent-soft)', fontSize: '1.2rem', transform: 'rotate(45deg)' }}>✦</div>
            <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--accent-gold)' }} />
          </div>

          <p style={{ 
            fontFamily: 'var(--font-arabic-title)', 
            color: 'var(--text-dark)', 
            fontSize: '1.3rem',
            marginBottom: '1rem',
            letterSpacing: '1px'
          }}>
            August 8, 2026
          </p>
          <p style={{ 
            fontFamily: 'var(--font-arabic-title)', 
            color: 'var(--accent-soft)', 
            fontSize: '1.2rem',
            fontStyle: 'italic'
          }}>
            Cordially Invites You
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LandingCard;
