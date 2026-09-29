import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCopy, FaCheck, FaGlassCheers, FaHeart } from 'react-icons/fa';

/* ─────────────────── Reusable Components ─────────────────── */
const SectionHeader: React.FC<{ num: string; title: string }> = ({ num, title }) => (
  <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
    <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#4a148c', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
      {num}
    </p>
    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#4a148c', fontWeight: 400, letterSpacing: '0.05em' }}>
      {title}
    </h2>
  </div>
);

const SectionDivider: React.FC = () => (
  <div style={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: '1px', height: '60px', backgroundColor: 'rgba(74,20,140,0.2)' }} />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   1. HERO SECTION
   ═══════════════════════════════════════════════════════════════════ */
const HeroSection: React.FC = () => (
  <div style={{
    minHeight: '100vh', display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', padding: '2rem',
    position: 'relative', backgroundColor: '#2d1b4e'
  }}>
    {/* Dense Floral Background Border using purple.png */}
    <div style={{
      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
      backgroundImage: 'url(/purple.png)', backgroundSize: 'cover', backgroundPosition: 'center',
      opacity: 0.3, zIndex: 0, pointerEvents: 'none', filter: 'blur(2px)'
    }} />

    <div style={{
      textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',
      width: '100%', maxWidth: '380px', minHeight: '580px',
      padding: '2rem', position: 'relative',
      backgroundColor: '#fdfbf7', zIndex: 1, boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
      borderRadius: '12px', overflow: 'hidden'
    }}>
      
      {/* Top Left Flower from purple.png */}
      <div style={{
        position: 'absolute', top: '-50px', left: '-50px',
        width: '200px', height: '200px',
        backgroundImage: 'url(/purple.png)', backgroundSize: 'cover',
        borderRadius: '50%', filter: 'blur(1px)',
        mixBlendMode: 'multiply', opacity: 0.7, pointerEvents: 'none', zIndex: 0
      }} />
      
      {/* Bottom Right Flower */}
      <div style={{
        position: 'absolute', bottom: '-50px', right: '-50px',
        width: '200px', height: '200px',
        backgroundImage: 'url(/purple.png)', backgroundSize: 'cover',
        borderRadius: '50%', filter: 'blur(1px)',
        mixBlendMode: 'multiply', opacity: 0.7, pointerEvents: 'none', zIndex: 0,
        transform: 'rotate(180deg)'
      }} />

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#4a148c', marginBottom: '2rem' }}>
          Welcome to the Wedding of
        </p>
        
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: '#4a148c', lineHeight: 1.1, fontWeight: 400, margin: '0 0 2rem 0' }}>
          MAHMOUD
          <br />
          <span style={{ fontSize: '1.5rem', fontStyle: 'italic', display: 'inline-block', margin: '10px 0', fontFamily: 'Playfair Display, serif' }}>&</span>
          <br />
          SALMA
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', margin: '1rem 0', width: '80%' }}>
          <div style={{ height: '1px', backgroundColor: '#4a148c', flex: 1, opacity: 0.5 }} />
          <FaHeart color="#4a148c" size={12} style={{ opacity: 0.8 }} />
          <div style={{ height: '1px', backgroundColor: '#4a148c', flex: 1, opacity: 0.5 }} />
        </div>

        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#4a148c', marginTop: '1.5rem' }}>
          August 8, 2026
        </p>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontStyle: 'italic', color: '#4a148c', marginTop: '0.5rem' }}>
          Cairo · Egypt
        </p>

        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', letterSpacing: '0.3em', color: '#4a148c', marginBottom: '1rem' }}>SCROLL</p>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <div style={{ width: '1px', height: '30px', backgroundColor: '#4a148c' }} />
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   2. COUNTDOWN
   ═══════════════════════════════════════════════════════════════════ */
const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date('2026-08-08T18:00:00');
    const tick = () => {
      const diff = weddingDate.getTime() - new Date().getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#4a148c', marginBottom: '1rem' }}>
        THE COUNTDOWN
      </p>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#4a148c', fontStyle: 'italic', marginBottom: '3rem' }}>
        Forever begins in
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {[
          { val: timeLeft.days, label: 'DAYS' },
          { val: timeLeft.hours, label: 'HOURS' },
          { val: timeLeft.minutes, label: 'MINUTES' },
          { val: timeLeft.seconds, label: 'SECONDS' },
        ].map(({ val, label }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#4a148c' }}>{String(val).padStart(2, '0')}</span>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#4a148c', marginTop: '0.5rem' }}>{label}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FaGlassCheers size={60} color="#4a148c" style={{ opacity: 0.8 }} />
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   3. LOCATION
   ═══════════════════════════════════════════════════════════════════ */
const LocationSection: React.FC = () => (
  <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
    <SectionHeader num="01" title="Location" />
    <div style={{ marginBottom: '2rem' }}>
      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em', color: '#4a148c', marginBottom: '0.5rem' }}>CEREMONY</p>
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#4a148c', marginBottom: '0.5rem' }}>The Grand Ballroom</h3>
      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', color: '#4a148c' }}>6:00 PM · Cairo, Egypt</p>
    </div>
    <div style={{ maxWidth: '500px', margin: '0 auto 2rem', border: '1px solid rgba(74,20,140,0.2)', padding: '5px' }}>
      <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.123456789!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjkiTiAzMcKwMTQnMDguNSJF!5e0!3m2!1sen!2seg!4v1234567890" width="100%" height="250" style={{ border: 0 }} loading="lazy" />
    </div>
    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', color: '#4a148c', textDecoration: 'none', borderBottom: '1px solid #4a148c', paddingBottom: '4px' }}>
      OPEN IN MAPS ↗
    </a>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   4. THE DAY (TIMELINE)
   ═══════════════════════════════════════════════════════════════════ */
const TheDaySection: React.FC = () => (
  <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
    <SectionHeader num="02" title="The Day" />
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
      {[
        { t: '17:00', title: 'Guest arrival', desc: 'Welcome drinks in the main hall' },
        { t: '18:00', title: 'The ceremony', desc: 'The ceremony will take place in the garden' },
        { t: '20:00', title: 'Dinner & celebrations', desc: 'Lakeside dinner with live music' }
      ].map((ev, i) => (
        <div key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', color: '#4a148c', fontWeight: 500, width: '50px' }}>{ev.t}</div>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#4a148c', marginBottom: '0.3rem' }}>{ev.title}</h4>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.85rem', color: 'rgba(74,20,140,0.7)', lineHeight: 1.5 }}>{ev.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   5. DRESS CODE
   ═══════════════════════════════════════════════════════════════════ */
const DressCodeSection: React.FC = () => (
  <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
    <SectionHeader num="03" title="Dress code" />
    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontStyle: 'italic', color: '#4a148c', marginBottom: '1.5rem' }}>
      Formal elegance
    </h3>
    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem', color: '#4a148c', maxWidth: '400px', margin: '0 auto', lineHeight: 1.8 }}>
      We kindly ask for evening attire.<br />Please avoid white.
    </p>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   6. GIFT LIST
   ═══════════════════════════════════════════════════════════════════ */
const GiftSection: React.FC = () => {
  const [showIban, setShowIban] = useState(false);
  const [copied, setCopied] = useState(false);
  const iban = 'EG38 0019 0005 0000 0000 0123 4567';

  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <SectionHeader num="04" title="Gift list" />
      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem', color: '#4a148c', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
        Your presence is the greatest gift. For those who wish to give us something, we've chosen to collect contributions towards our honeymoon.
      </p>
      
      {!showIban ? (
        <button onClick={() => setShowIban(true)} style={{ background: 'transparent', border: '1px solid #4a148c', color: '#4a148c', padding: '1rem 3rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', cursor: 'pointer', transition: 'all 0.3s' }}>
          SHOW IBAN
        </button>
      ) : (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ border: '1px solid rgba(74,20,140,0.2)', padding: '2rem', maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'rgba(74,20,140,0.6)', marginBottom: '0.5rem' }}>ACCOUNT HOLDER</p>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#4a148c', marginBottom: '1.5rem' }}>MAHMOUD KHALED</p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'rgba(74,20,140,0.6)', marginBottom: '0.5rem' }}>IBAN</p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.1rem', color: '#4a148c', marginBottom: '1.5rem', wordBreak: 'break-all' }}>{iban}</p>
          <button onClick={() => { navigator.clipboard.writeText(iban.replace(/\s/g, '')); setCopied(true); setTimeout(()=>setCopied(false), 2000); }} style={{ background: '#4a148c', border: 'none', color: '#fff', padding: '0.8rem 2rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', cursor: 'pointer', width: '100%' }}>
            {copied ? 'COPIED!' : 'COPY'}
          </button>
        </motion.div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   7. RSVP
   ═══════════════════════════════════════════════════════════════════ */
const RSVPSection: React.FC = () => {
  const [attending, setAttending] = useState<boolean | null>(null);

  const inputStyle: React.CSSProperties = {
    width: '100%', border: 'none', borderBottom: '1px solid rgba(74,20,140,0.3)', background: 'transparent',
    padding: '0.8rem 0', fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', color: '#4a148c', outline: 'none', marginBottom: '1.5rem'
  };

  const btnStyle = (isActive: boolean): React.CSSProperties => ({
    flex: 1, padding: '1rem', border: '1px solid #4a148c', cursor: 'pointer',
    background: isActive ? '#4a148c' : 'transparent', color: isActive ? '#fff' : '#4a148c',
    fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', letterSpacing: '0.1em', transition: 'all 0.3s'
  });

  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <SectionHeader num="05" title="RSVP" />
      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem', color: '#4a148c', marginBottom: '3rem' }}>
        LET US KNOW
        <br/><br/>
        Please let us know if you'll be there by<br/>July 1, 2026.
      </p>
      <form style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }} onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder="Guest Name" style={inputStyle} required />
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <button type="button" onClick={() => setAttending(true)} style={btnStyle(attending === true)}>YES, I'LL BE THERE</button>
          <button type="button" onClick={() => setAttending(false)} style={btnStyle(attending === false)}>CAN'T MAKE IT</button>
        </div>
        <input type="text" placeholder="Dietary requirements (Optional)" style={inputStyle} />
        <button type="submit" style={{ background: '#4a148c', border: 'none', color: '#fff', padding: '1rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', cursor: 'pointer', width: '100%', marginTop: '1rem' }}>
          SEND RSVP
        </button>
      </form>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   8. FAQ
   ═══════════════════════════════════════════════════════════════════ */
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { q: 'Can I bring a plus one?', a: 'Due to limited space, we can only accommodate those formally invited.' },
    { q: 'Where can I stay nearby?', a: 'There are several hotels within a 10-minute drive of the venue.' }
  ];

  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <SectionHeader num="06" title="Frequently Asked Questions" />
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(74,20,140,0.2)' }}>
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{ width: '100%', background: 'transparent', border: 'none', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#4a148c' }}>
              <span>{faq.q}</span>
              <span style={{ fontSize: '1.5rem', fontWeight: 300 }}>{openIndex === i ? '-' : '+'}</span>
            </button>
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }} style={{ overflow: 'hidden' }}>
              <p style={{ paddingBottom: '1.5rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', color: 'rgba(74,20,140,0.7)', lineHeight: 1.6 }}>
                {faq.a}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   MAIN WEDDING DETAILS PAGE
   ═══════════════════════════════════════════════════════════════════ */
const WeddingDetails: React.FC = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#FDFBF7', color: '#4a148c', overflowX: 'hidden' }}>
      <HeroSection />
      <SectionDivider />
      <CountdownSection />
      <SectionDivider />
      <LocationSection />
      <SectionDivider />
      <TheDaySection />
      <SectionDivider />
      <DressCodeSection />
      <SectionDivider />
      <GiftSection />
      <SectionDivider />
      <RSVPSection />
      <SectionDivider />
      <FAQSection />

      {/* FOOTER */}
      <div style={{ padding: '6rem 2rem', textAlign: 'center', backgroundColor: 'rgba(74,20,140,0.03)' }}>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontStyle: 'italic', color: '#4a148c', marginBottom: '1rem' }}>With love</p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#4a148c', letterSpacing: '0.1em', marginBottom: '2rem' }}>
          MAHMOUD & SALMA
        </h2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'rgba(74,20,140,0.6)' }}>
          AUGUST 8 · 2026
        </p>
      </div>
    </div>
  );
};

export default WeddingDetails;
