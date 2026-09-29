import { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import EnvelopeSequence from './components/EnvelopeSequence';
import LandingPage from './components/LandingPage';
import ResponsesPage from './components/ResponsesPage';
import './index.css';

function WeddingSite() {
  const [isOpened, setIsOpened] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/music.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    // keep the button in sync with what the audio is really doing
    const onPlay = () => setMusicPlaying(true);
    const onPause = () => setMusicPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  const playMusic = () => {
    audioRef.current?.play().catch(() => setMusicPlaying(false));
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) playMusic();
    else audio.pause();
  };

  return (
    <div className="app-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <LandingPage isOpened={isOpened} musicPlaying={musicPlaying} onToggleMusic={toggleMusic} />
      </motion.div>

      {!introDone && (
        <EnvelopeSequence
          onStart={playMusic}
          onReveal={() => setIsOpened(true)}
          onOpenComplete={() => setIntroDone(true)}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<WeddingSite />} />
      <Route path="/responses" element={<ResponsesPage />} />
    </Routes>
  );
}

export default App;

