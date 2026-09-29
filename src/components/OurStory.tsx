import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import './OurStory.css';

const OurStory: React.FC = () => {
  return (
    <section className="our-story-section">
      <div className="our-story-container">
        {/* LEFT: text */}
        <motion.div 
          className="our-story-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="our-story-eyebrow">
            <span aria-hidden="true" />
            Our Story
            <span aria-hidden="true" />
          </p>

          <h2 className="our-story-title">Two Little Hearts, One Beautiful Destiny</h2>

          <div className="our-story-divider" aria-hidden="true">
            <span />
            <FaHeart />
            <span />
          </div>

          <p className="our-story-body">
Once, they were two little souls, each living their own story. Little did they know, their paths would cross and become one beautiful forever.</p>
        </motion.div>

        {/* RIGHT: two photos */}
        <motion.div 
          className="our-story-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="our-story-photos">
            <div className="story-photo-wrapper right-wrapper">
              <img src="/m.png" alt="Bride childhood" className="story-photo right-photo" />
            </div>
            <div className="story-photo-wrapper left-wrapper">
              <img src="/s.png" alt="Groom childhood" className="story-photo left-photo" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
