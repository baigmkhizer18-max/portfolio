import React from 'react';
import { ArrowUp, Code2, Heart, Sparkles, MapPin, Mail } from 'lucide-react';

const LinkedinIcon = ({ size = 15, color = '#0A66C2' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="footer-logo-badge">
                <img src="/logo.png" alt="MKB Logo" style={{ width: '90%', height: '90%', objectFit: 'contain' }} />
              </div>
              <div className="footer-logo-text">
                <span className="footer-title">Muhammad Khizer Baig</span>
                <span className="footer-role">Frontend &amp; Web Developer</span>
              </div>
            </div>
            <p className="footer-about-text">
              14-year-old aspiring developer from Karachi, Pakistan. Grade 9 Computer Science student at Metropolis and ACCP AI scholar at Aptech, building modern, interactive and accessible digital experiences.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills &amp; Tools</a></li>
              <li><a href="#showcase">3D Carousel</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Connect</h4>
            <p className="footer-contact-item">
              <Mail size={15} color="#00D4FF" />
              <a href="mailto:baigmkhizer18@gmail.com">baigmkhizer18@gmail.com</a>
            </p>
            <p className="footer-contact-item">
              <LinkedinIcon size={15} color="#0A66C2" />
              <a href="https://www.linkedin.com/in/personal-work-64440944b/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </p>
            <p className="footer-contact-item">
              <MapPin size={15} color="#10B981" />
              <span>Karachi, Pakistan</span>
            </p>
            <div className="footer-status-pill">
              <Sparkles size={13} color="#7C5CFC" />
              <span>Open to Mentorship &amp; Collaborations</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {currentYear} Muhammad Khizer Baig. All rights reserved.
          </p>

          <div className="built-with-tag">
            <span>Crafted with React.js &amp; Vite</span>
          </div>

          <button
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(15, 23, 42, 0.08);
          padding: 5rem 0 2rem 0;
          position: relative;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }

        .footer-logo-badge {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #080B12;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .footer-logo-text {
          display: flex;
          flex-direction: column;
        }

        .footer-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: #0F172A;
        }

        .footer-role {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-primary);
          font-weight: 600;
        }

        .footer-about-text {
          font-size: 0.9rem;
          line-height: 1.65;
          color: #334155;
          font-weight: 450;
          max-width: 420px;
        }

        .footer-col-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 1.25rem;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links-list a {
          font-size: 0.9rem;
          color: #475569;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
          font-weight: 500;
        }

        .footer-links-list a:hover {
          color: var(--accent-primary);
          transform: translateX(3px);
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: #475569;
          margin-bottom: 0.85rem;
          font-weight: 500;
        }

        .footer-contact-item a:hover {
          color: #0F172A;
        }

        .footer-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          background: rgba(124, 92, 252, 0.08);
          border: 1px solid rgba(124, 92, 252, 0.2);
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: #6D28D9;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
          font-size: 0.85rem;
          color: #64748B;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .built-with-tag {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #64748B;
        }

        .footer-back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #475569;
          font-size: 0.85rem;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .footer-back-to-top:hover {
          color: var(--accent-primary);
        }

        @media (max-width: 900px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
