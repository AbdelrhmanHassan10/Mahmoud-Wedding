import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set wedding date (Change this to the actual date)
    const weddingDate = new Date("2026-08-08T20:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'يوم', value: timeLeft.days },
    { label: 'ساعة', value: timeLeft.hours },
    { label: 'دقيقة', value: timeLeft.minutes },
    { label: 'ثانية', value: timeLeft.seconds }
  ];

  return (
    <section className="section-container" style={{ minHeight: '50vh', backgroundColor: 'var(--primary-light)' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass-card"
        style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {timeBlocks.map((block, index) => (
          <div key={index} style={{ textAlign: 'center', minWidth: '80px' }}>
            <div style={{
              fontSize: '3rem',
              fontFamily: 'var(--font-arabic-title)',
              color: 'var(--accent-gold)',
              marginBottom: '0.5rem'
            }}>
              {block.value < 10 ? `0${block.value}` : block.value}
            </div>
            <div style={{ fontSize: '1.2rem', color: 'var(--card-bg)' }}>{block.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Countdown;
