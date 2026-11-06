import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Showcase from './components/Showcase';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MicroSlats from './components/MicroSlats';
import { ArrowUp, Code2 } from 'lucide-react';
import './styles/global.css';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initial loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (isLoading) {
    return (
      <div className="portfolio-preloader">
        <div className="preloader-content">
          <div className="preloader-icon-box">
            <img src="/logo.png" alt="MKB Logo" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
          </div>
          <h2 className="preloader-title">Muhammad Khizer Baig</h2>
          <p className="preloader-sub">Frontend Developer &bull; ACCP AI</p>
          <div className="preloader-bar">
            <div className="preloader-progress" />
          </div>
        </div>

        <style>{`
          .portfolio-preloader {
            position: fixed;
            inset: 0;
            background: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }
          .preloader-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 2rem;
          }
          .preloader-icon-box {
            width: 84px;
            height: 84px;
            border-radius: 22px;
            background: #080B12;
            border: 2px solid rgba(255, 190, 0, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            margin-bottom: 1.5rem;
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15), 0 0 25px rgba(255, 190, 0, 0.25);
            animation: pulseIcon 1.5s infinite ease-in-out;
          }
          @keyframes pulseIcon {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.08); }
          }
          .preloader-title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.6rem;
            font-weight: 800;
            color: #0F172A;
            margin-bottom: 0.35rem;
          }
          .preloader-sub {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            color: #7C5CFC;
            font-weight: 600;
            margin-bottom: 1.75rem;
          }
          .preloader-bar {
            width: 180px;
            height: 4px;
            background: rgba(15, 23, 42, 0.1);
            border-radius: 4px;
            overflow: hidden;
            position: relative;
          }
          .preloader-progress {
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, #7C5CFC, #0284C7);
            animation: progressAnim 1s ease-in-out infinite;
          }
          @keyframes progressAnim {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="portfolio-app">
      {/* Interactive MicroSlats WebGL Background (White / Light Theme) */}
      <div className="microslats-global-bg" aria-hidden="true">
        <MicroSlats
          preset="swell"
          color="#CBD5E1"
          glintColor="#7C5CFC"
          backgroundColor="#FFFFFF"
          slatWidth={10}
          slatHeight={26}
          gap={3}
          roundness={0.75}
          interactive={true}
          cursorStrength={1.5}
          cursorSize={45}
          swirl={0.1}
          trail={1.4}
          lean={0}
          intro={true}
        />
      </div>

      {/* Floating Capsule Island Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Showcase />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back-To-Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
