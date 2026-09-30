import React from 'react';
import { m } from 'framer-motion';
import { reveal } from '../motion';
import { FaHeart } from 'react-icons/fa';
import './OurStory.css';

const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="our-story-section">
      <div className="our-story-container">
        {/* LEFT: text */}
        <m.div
          className="our-story-left"
          {...reveal()}
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
        </m.div>

        {/* RIGHT: two photos */}
        <m.div
          className="our-story-right"
          {...reveal(0.15)}
        >
          <div className="our-story-photos">
            <div className="story-photo-wrapper">
              <img src="/m.webp" alt="Groom as a child" className="story-photo" width={756} height={1000} loading="lazy" decoding="async" />
            </div>
            <div className="story-photo-wrapper">
              <img src="/s.webp" alt="Bride as a child" className="story-photo" width={756} height={1000} loading="lazy" decoding="async" />
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default OurStory;
