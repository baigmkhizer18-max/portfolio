import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Sparkles, MapPin, GraduationCap, Code, Terminal } from 'lucide-react';
import TechText from './TechText';

export default function Hero({ currentTheme = 'gothic' }) {
  const isLight = currentTheme === 'soft-light';
  const techColor = isLight ? '#0F172A' : '#FFFFFF';
  const techAccent = currentTheme === 'gothic' 
    ? '#E11D48' 
    : currentTheme === 'emerald-matrix' 
    ? '#10B981' 
    : currentTheme === 'royal-violet' 
    ? '#A855F7' 
    : '#4F46E5';
  const titles = [
    'Frontend Developer',
    'Web Developer',
    'AI Enthusiast',
    'Aspiring Software Engineer',
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Resume notification modal/toast state
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(90);

        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, typingSpeed, titles]);

  const handleResumeClick = (e) => {
    // If resume.pdf is not placed yet in /public, provide clear friendly instruction
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          e.preventDefault();
          setShowResumeModal(true);
        }
      })
      .catch(() => {
        e.preventDefault();
        setShowResumeModal(true);
      });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge">
            <span className="badge-pulse-dot" />
            <Sparkles size={14} className="badge-icon" />
            <span>Grade 9 CS Student &bull; ACCP AI @ Aptech</span>
          </div>

          {/* Main Heading with React Bits TechText Animation */}
          <div className="hero-title-box">
            <h1 className="hero-title-prefix" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>Muhammad</h1>
            <div className="hero-tech-text-wrapper">
              <TechText
                key={currentTheme}
                text="Khizer Baig"
                fontFamily="'Space Grotesk', system-ui, sans-serif"
                fontWeight={800}
                fontSize={80}
                align="left"
                color={techColor}
                accentColor={techAccent}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={16}
                intro="assemble"
                introDuration={1.8}
                clickKick={true}
                draggable={true}
                guides={false}
              />
            </div>
          </div>

          {/* Subtitle with Animated Typing */}
          <div className="hero-subtitle-wrapper">
            <span className="subtitle-prefix">Aspiring </span>
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </div>

          {/* Introduction Paragraph */}
          <p className="hero-intro">
            Hi, I'm Muhammad Khizer Baig, an aspiring Frontend Developer and Web Developer
            passionate about creating modern, interactive and user-friendly digital experiences.
            I am currently studying in Grade 9 while pursuing the ACCP AI program at Aptech.
          </p>

          {/* Quick Info Tags */}
          <div className="hero-tags">
            <span className="hero-tag-item">
              <MapPin size={14} /> Karachi, Pakistan
            </span>
            <span className="hero-tag-item">
              <GraduationCap size={14} /> Metropolis Education System
            </span>
            <span className="hero-tag-item">
              <Code size={14} /> React.js &amp; Modern Web
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary hero-btn">
              <span>Explore My Work</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download="Muhammad_Khizer_Baig_Resume.pdf"
              className="btn btn-secondary hero-btn"
              onClick={handleResumeClick}
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Profile Area Placeholder */}
        <div className="hero-visual">
          <div className="profile-card-wrapper">
            {/* Glowing Backdrop Ring */}
            <div className="profile-glow-ring" />
            
            {/* Profile Frame */}
            <div className="profile-frame">
              {/* Photo Area */}
              <div className="profile-img-container">
                {/* 
                  Profile Image Placeholder:
                  Khizer can replace '/profile.jpg' in the public/ folder anytime with his real photo.
                */}
                {!imageError ? (
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Khizer Baig - Frontend Developer"
                    className="profile-avatar-img"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="avatar-fallback-art">
                    <div className="avatar-logo-container">
                      <img
                        src="/logo.png"
                        alt="Mohammad Khizar Baig Official Logo"
                        className="hero-brand-logo-img"
                      />
                    </div>
                    <div className="avatar-meta">
                      <span className="avatar-tag">Frontend Developer &bull; ACCP AI</span>
                    </div>
                    <div className="avatar-grid-lines" />
                  </div>
                )}
              </div>

              {/* Decorative Tech Floating Badges */}
              <div className="floating-badge badge-top-right">
                <Terminal size={14} color="#00D4FF" />
                <span>React + Vite</span>
              </div>

              <div className="floating-badge badge-bottom-left">
                <Sparkles size={14} color="#7C5CFC" />
                <span>ACCP AI @ Aptech</span>
              </div>

              {/* Profile Bottom Bar */}
              <div className="profile-card-footer">
                <div className="profile-status-indicator">
                  <span className="status-live-dot" />
                  <span>14-Year-Old Web Developer</span>
                </div>
                <span className="profile-location">Karachi, PK</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Placement Helper Modal */}
      {showResumeModal && (
        <div className="modal-backdrop" onClick={() => setShowResumeModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <Download size={24} className="modal-icon" />
              <h3>Resume Ready for Download</h3>
            </div>
            <p className="modal-desc">
              Khizer's personal resume file can be placed inside the <code>/public/resume.pdf</code> folder. 
              In the meantime, feel free to connect directly via email or view the comprehensive Education and Technical Skills sections below.
            </p>
            <div className="modal-actions">
              <a href="#contact" className="btn btn-primary" onClick={() => setShowResumeModal(false)}>
                Contact Khizer
              </a>
              <button className="btn btn-outline" onClick={() => setShowResumeModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 8rem 0 5rem 0;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }

        /* Hero Left Content */
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.45rem 1.1rem;
          border-radius: var(--radius-full);
          background: rgba(124, 92, 252, 0.08);
          border: 1px solid rgba(124, 92, 252, 0.25);
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: #6D28D9;
          font-weight: 600;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 10px rgba(124, 92, 252, 0.08);
        }

        .badge-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-secondary);
          box-shadow: 0 0 10px var(--accent-secondary);
          animation: pulseGlow 2s infinite ease-in-out;
        }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        .hero-title-box {
          width: 100%;
          margin-bottom: 0.5rem;
        }

        .hero-title-prefix {
          font-size: clamp(2.2rem, 4.2vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-main);
          margin-bottom: 0.2rem;
        }

        .hero-tech-text-wrapper {
          width: 100%;
          height: 90px;
          max-width: 580px;
        }

        .hero-subtitle-wrapper {
          font-family: var(--font-heading);
          font-size: clamp(1.25rem, 2.3vw, 1.7rem);
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          min-height: 2.2rem;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        .subtitle-prefix {
          margin-right: 0.45rem;
        }

        .typing-text {
          color: var(--accent-primary);
          font-weight: 700;
        }

        .typing-cursor {
          display: inline-block;
          color: var(--accent-secondary);
          animation: blinkCursor 0.8s infinite;
          margin-left: 2px;
          font-weight: 400;
        }

        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-intro {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-muted);
          max-width: 580px;
          margin-bottom: 1.75rem;
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2.25rem;
        }

        .hero-tag-item {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 0.95rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(15, 23, 42, 0.1);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 500;
          color: #334155;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .hero-btn {
          min-width: 175px;
        }

        /* Hero Right Profile Visual */
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .profile-card-wrapper {
          position: relative;
          width: 100%;
          max-width: 380px;
        }

        .profile-glow-ring {
          position: absolute;
          inset: -15px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(124, 92, 252, 0.4) 0%, rgba(0, 212, 255, 0.3) 100%);
          filter: blur(24px);
          opacity: 0.75;
          z-index: 0;
          animation: ambientSpin 10s ease-in-out infinite alternate;
        }

        @keyframes ambientSpin {
          0% { transform: scale(0.98); opacity: 0.6; }
          100% { transform: scale(1.03); opacity: 0.85; }
        }

        .profile-frame {
          position: relative;
          z-index: 1;
          background: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.1);
        }

        .profile-img-container {
          position: relative;
          width: 100%;
          height: 380px;
          background: #080B12;
          overflow: hidden;
        }

        .profile-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .avatar-fallback-art {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 50% 40%, #151F30 0%, #080B12 100%);
          position: relative;
          padding: 1.5rem;
        }

        .avatar-logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          z-index: 2;
          margin-bottom: 0.5rem;
        }

        .hero-brand-logo-img {
          width: 85%;
          max-width: 250px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 6px 20px rgba(255, 190, 0, 0.3));
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-brand-logo-img:hover {
          transform: scale(1.06);
        }

        .avatar-monogram {
          font-family: var(--font-heading);
          font-size: 5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #7C5CFC 0%, #0284C7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.04em;
          margin-bottom: 0.5rem;
          filter: drop-shadow(0 4px 15px rgba(124, 92, 252, 0.4));
        }

        .avatar-meta {
          text-align: center;
          z-index: 2;
        }

        .avatar-name {
          display: block;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: #FFFFFF;
        }

        .avatar-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #38BDF8;
          font-weight: 600;
        }

        .avatar-grid-lines {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        /* Floating Badges */
        .floating-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.5rem 0.95rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(15, 23, 42, 0.1);
          backdrop-filter: blur(10px);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: #0F172A;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          z-index: 3;
        }

        .badge-top-right {
          top: 16px;
          right: 16px;
        }

        .badge-bottom-left {
          bottom: 74px;
          left: 16px;
        }

        .profile-card-footer {
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.95);
          border-top: 1px solid rgba(15, 23, 42, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .profile-status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #0F172A;
        }

        .status-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 8px #10B981;
        }

        .profile-location {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #64748B;
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.5rem;
        }

        .modal-card {
          background: #FFFFFF;
          border: 1px solid rgba(124, 92, 252, 0.3);
          border-radius: var(--radius-lg);
          padding: 2rem;
          max-width: 480px;
          width: 100%;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.2);
          color: #0F172A;
        }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1rem;
        }

        .modal-icon {
          color: var(--accent-primary);
        }

        .modal-card h3 {
          font-size: 1.3rem;
          color: #0F172A;
        }

        .modal-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 1.5rem;
        }

        .modal-desc code {
          background: rgba(124, 92, 252, 0.08);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: var(--font-mono);
          color: #6D28D9;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content {
            align-items: center;
          }
          .hero-intro {
            text-align: center;
          }
          .hero-tags {
            justify-content: center;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .profile-card-wrapper {
            max-width: 320px;
          }
          .profile-img-container {
            height: 330px;
          }
        }
      `}</style>
    </section>
  );
}
