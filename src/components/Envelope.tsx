import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegCalendarAlt, FaRegEnvelope, FaHeart } from 'react-icons/fa';

interface EnvelopeProps {
  onOpenComplete: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpenComplete }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    setTimeout(() => {
      onOpenComplete();
    }, 1200);
  };

  // 100% Exact Color Match from the image
  const bgStudio = '#6B5378';
  const textDark = '#382350';
  const textLight = '#9C84B3';
  const gold = '#C5A059'; // Richer gold for the frame
  const ribbonPurple = '#4E3865';

  // Frame math for precise inverted corners
  const frameOffset = 18;
  const cornerSize = 14;
  const straightOffset = frameOffset + cornerSize;

  const CornerArc = ({ top, right, bottom, left, rotate }: any) => (
    <svg style={{
      position: 'absolute', top, right, bottom, left,
      width: cornerSize, height: cornerSize, zIndex: 2,
      transform: `rotate(${rotate}deg)`,
      filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.25))'
    }}>
      <path d="M 14 0 A 14 14 0 0 0 0 14" fill="none" stroke={gold} strokeWidth="1" />
    </svg>
  );

  return (
    <>

      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        backgroundColor: '#F9F7F1', // Solid cream color matching the card
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        zIndex: 100, overflow: 'hidden'
      }}>
        {/* Soft studio lighting effect on the background */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '100%', height: '100%',
          background: 'radial-gradient(circle at center top, rgba(255,255,255,0.4) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <AnimatePresence>
          {!isOpened && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              style={{
                position: 'relative', width: '375px', height: '620px',
                // Using the exact user-provided background image!
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                boxShadow: '25px 25px 60px rgba(0,0,0,0.3), -5px -5px 20px rgba(255,255,255,0.05)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '2rem 1rem', zIndex: 1, overflow: 'hidden'
              }}
            >
              {/* EXACT VINTAGE GOLD FRAME WITH INVERTED CORNERS */}
              {/* Straight Edges */}
              <div style={{ position: 'absolute', top: frameOffset, left: straightOffset, right: straightOffset, height: '1px', backgroundColor: gold, boxShadow: '0 1px 1px rgba(0,0,0,0.25)', zIndex: 2 }} />
              <div style={{ position: 'absolute', bottom: frameOffset, left: straightOffset, right: straightOffset, height: '1px', backgroundColor: gold, boxShadow: '0 1px 1px rgba(0,0,0,0.25)', zIndex: 2 }} />
              <div style={{ position: 'absolute', top: straightOffset, bottom: straightOffset, left: frameOffset, width: '1px', backgroundColor: gold, boxShadow: '1px 0 1px rgba(0,0,0,0.25)', zIndex: 2 }} />
              <div style={{ position: 'absolute', top: straightOffset, bottom: straightOffset, right: frameOffset, width: '1px', backgroundColor: gold, boxShadow: '1px 0 1px rgba(0,0,0,0.25)', zIndex: 2 }} />

              {/* Corner Arcs */}
              <CornerArc top={frameOffset} left={frameOffset} rotate={0} />
              <CornerArc top={frameOffset} right={frameOffset} rotate={90} />
              <CornerArc bottom={frameOffset} right={frameOffset} rotate={180} />
              <CornerArc bottom={frameOffset} left={frameOffset} rotate={270} />

              {/* TOP HANGING RIBBON & SEAL */}
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 15 }}>
                {/* Thin purple ribbon */}
                <div style={{ width: '22px', height: '45px', backgroundColor: ribbonPurple, boxShadow: 'inset 0 0 10px rgba(0,0,0,0.3), 2px 0 5px rgba(0,0,0,0.1)' }} />
                {/* Luxurious Wax Seal */}
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  backgroundColor: ribbonPurple,
                  marginTop: '-22px',
                  border: `1px solid #71558A`,
                  boxShadow: '0 8px 12px rgba(0,0,0,0.3), inset 0 2px 5px rgba(255,255,255,0.4), inset 0 -4px 10px rgba(0,0,0,0.5)',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  flexDirection: 'column', position: 'relative'
                }}>
                  {/* Inner seal ridge */}
                  <div style={{
                    position: 'absolute', top: '4px', left: '4px', right: '4px', bottom: '4px',
                    borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
                  }} />
                  <span style={{ color: gold, fontSize: '0.9rem', fontFamily: "'Cormorant Garamond', serif", letterSpacing: '1px', zIndex: 2 }}>
                    M<span style={{ fontSize: '0.55rem', verticalAlign: 'middle', margin: '0 3px' }}>♥</span>S
                  </span>
                  <span style={{ fontSize: '0.6rem', color: gold, marginTop: '2px', zIndex: 2 }}>✧</span>
                </div>
                {/* Ribbon tails */}
                <div style={{ display: 'flex', marginTop: '-6px', zIndex: -1, filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.2))' }}>
                  <div style={{ width: '11px', height: '24px', backgroundColor: ribbonPurple, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)', boxShadow: 'inset 0 0 5px rgba(0,0,0,0.2)' }} />
                  <div style={{ width: '11px', height: '24px', backgroundColor: ribbonPurple, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)', marginLeft: '1px', boxShadow: 'inset 0 0 5px rgba(0,0,0,0.2)' }} />
                </div>
              </div>

              {/* BOTTOM RIGHT DIAGONAL RIBBON */}
              <div style={{
                position: 'absolute', bottom: '28px', right: '-40px', width: '140px', height: '26px',
                backgroundColor: ribbonPurple, transform: 'rotate(-45deg)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1)',
                borderTop: `1px solid ${gold}`, borderBottom: `1px solid ${gold}`,
                zIndex: 3
              }} />

              {/* TEXT CONTENT */}
              <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%', marginTop: '80px' }}>

                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.55rem', letterSpacing: '0.22em', color: textDark, textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 500 }}>
                  Together with their families
                </p>

                <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '4.5rem', color: textDark, fontWeight: 'normal', lineHeight: 1, margin: 0, padding: '0 10px' }}>
                  Mahmoud
                </h1>

                <div style={{ position: 'relative', margin: '-10px 0', zIndex: 2 }}>
                  <span style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2.5rem', color: textDark, display: 'inline-block', lineHeight: 1, opacity: 0.7 }}>
                    &
                  </span>
                </div>

                <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '4.5rem', color: textDark, fontWeight: 'normal', lineHeight: 1, margin: 0, marginBottom: '1.2rem', padding: '0 10px' }}>
                  Salma
                </h1>

                {/* Divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 1.2rem 0', width: '35%' }}>
                  <div style={{ height: '1px', backgroundColor: textDark, flex: 1, opacity: 0.6 }} />
                  <span style={{ color: textDark, fontSize: '0.6rem', opacity: 0.8 }}>✧</span>
                  <div style={{ height: '1px', backgroundColor: textDark, flex: 1, opacity: 0.6 }} />
                </div>

                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.55rem', letterSpacing: '0.22em', color: textDark, textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 500 }}>
                  Cordially invite you to<br />celebrate their marriage
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <FaRegCalendarAlt color={textDark} size={15} style={{ marginBottom: '8px', opacity: 0.8 }} />
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: textDark, margin: '0 0 5px 0', letterSpacing: '0.12em', fontWeight: 500 }}>
                    OCTOBER 10, 2026
                  </p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.55rem', letterSpacing: '0.25em', color: textDark, textTransform: 'uppercase', opacity: 0.7, margin: 0, fontWeight: 500 }}>
                    Save the Date
                  </p>
                </div>

                {/* PREMIUM PILL BUTTON MATCHING SCREENSHOT */}
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 15px 30px rgba(0,0,0,0.4), 0 0 20px rgba(197, 160, 89, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOpen}
                  style={{
                    background: `linear-gradient(135deg, #432b57, #56396f)`,
                    color: '#FAF7F2',
                    border: `1px solid ${gold}`,
                    borderRadius: '25px',
                    padding: '12px 35px',
                    cursor: 'pointer',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.35), inset 0 2px 4px rgba(255,255,255,0.15), inset 0 -3px 8px rgba(0,0,0,0.2), 0 0 10px rgba(197, 160, 89, 0.25)',
                    display: 'flex', alignItems: 'center', gap: '12px'
                  }}
                >
                  <FaRegEnvelope size={15} color={gold} style={{ opacity: 0.9 }} />
                  <span style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.75rem',
                    letterSpacing: '0.22em',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    marginTop: '2px' // optical alignment for Cinzel
                  }}>
                    Open Invitation
                  </span>
                  <span style={{ fontSize: '1rem', marginLeft: '2px', color: '#FAF7F2', fontWeight: 300 }}>→</span>
                </motion.button>

                {/* Tiny bottom heart divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', width: '25%', opacity: 0.6, marginTop: '0.5rem' }}>
                  <div style={{ height: '1px', backgroundColor: textDark, flex: 1 }} />
                  <FaHeart color={textDark} size={10} />
                  <div style={{ height: '1px', backgroundColor: textDark, flex: 1 }} />
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Envelope;
