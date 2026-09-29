import React from 'react';
import { motion } from 'framer-motion';

const Details: React.FC = () => {
  return (
    <section className="section-container" style={{ position: 'relative', backgroundColor: 'var(--primary-bg)' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>تفاصيل الفرح</h2>
      
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1000px', width: '100%' }}>
        {/* Katb Ketab Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ flex: '1 1 300px', textAlign: 'center' }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>كتب الكتاب</h3>
          <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--card-bg)' }}>يوم الجمعة، ٧ أغسطس ٢٠٢٦</p>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-soft)' }}>بعد صلاة العصر</p>
          <p style={{ marginBottom: '2rem', color: 'var(--card-bg)' }}>مسجد الشرطة - التجمع الخامس</p>
          <button className="btn-primary" onClick={() => window.open('https://maps.google.com', '_blank')}>الموقع على الخريطة</button>
        </motion.div>

        {/* Wedding Party Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ flex: '1 1 300px', textAlign: 'center' }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>حفل الزفاف</h3>
          <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--card-bg)' }}>يوم السبت، ٨ أغسطس ٢٠٢٦</p>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-soft)' }}>الساعة الثامنة مساءً</p>
          <p style={{ marginBottom: '2rem', color: 'var(--card-bg)' }}>فندق كمبنسكي - التجمع الخامس</p>
          <button className="btn-primary" onClick={() => window.open('https://maps.google.com', '_blank')}>الموقع على الخريطة</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Details;
