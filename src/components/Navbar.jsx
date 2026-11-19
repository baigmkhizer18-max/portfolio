import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'showcase', label: 'Showcase', href: '#showcase' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = ['hero', 'about', 'education', 'skills', 'showcase', 'projects', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`reactbits-nav-wrapper ${isScrolled ? 'scrolled-down' : ''}`}>
      <div className="nav-capsule-row">
        {/* Left: Circular Logo Emblem Pill (Matching Reference) */}
        <a
          href="#hero"
          className="nav-logo-circle-pill"
          aria-label="Muhammad Khizer Baig Home"
          onClick={() => handleNavClick('hero')}
        >
          <div className="logo-circle-inner">
            <img
              src="/logo.png"
              alt="MKB - Mohammad Khizar Baig"
              className="nav-logo-img"
            />
          </div>
        </a>

        {/* Desktop: Capsule Container with Pill Buttons (Matching Reference) */}
        <nav className="nav-tabs-capsule" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`nav-tab-pill ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span className="nav-tab-label">{item.label}</span>
                {isActive && <span className="nav-active-dot" />}
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-pill-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Capsule */}
      <div className={`mobile-capsule-dropdown ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-dropdown-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`mobile-tab-pill ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.label}</span>
                {isActive && <span className="mobile-active-dot" />}
              </a>
            );
          })}
        </div>
      </div>

      <style>{`
        /* ==========================================================================
           REACT BITS FLOATING CAPSULE NAVBAR
           Exact reproduction of pill island navigation with active dot indicator
           ========================================================================== */

        .reactbits-nav-wrapper {
          position: fixed;
          top: 1.5rem;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1rem;
          pointer-events: none;
          transition: top 0.3s ease;
        }

        .reactbits-nav-wrapper.scrolled-down {
          top: 1rem;
        }

        .nav-capsule-row {
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          max-width: 100%;
        }

        /* Circular Logo Badge */
        .nav-logo-circle-pill {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(18, 20, 27, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.45), 0 0 16px rgba(124, 92, 252, 0.12);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .nav-logo-circle-pill:hover {
          transform: scale(1.06);
          border-color: rgba(255, 200, 0, 0.45);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 190, 0, 0.25);
        }

        .logo-circle-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: #080B12;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-logo-img {
          width: 90%;
          height: 90%;
          object-fit: contain;
          display: block;
        }

        /* Outer Capsule Container */
        .nav-tabs-capsule {
          display: flex;
          align-items: center;
          background: rgba(18, 20, 28, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: 9999px;
          padding: 4px 6px;
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08);
          gap: 3px;
        }

        /* Individual Tab Pill */
        .nav-tab-pill {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.62rem 1.25rem;
          border-radius: 9999px;
          text-decoration: none;
          color: #9CA9BA;
          font-family: var(--font-heading);
          font-size: 0.92rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          transition: all 0.2s ease;
          user-select: none;
          min-height: 40px;
        }

        .nav-tab-pill:hover {
          color: #F5F7FA;
          background: rgba(255, 255, 255, 0.05);
        }

        /* Active Pill State (Exact Match to Coffee Reference) */
        .nav-tab-pill.active {
          color: #FFFFFF;
          background: rgba(36, 40, 54, 0.95);
          font-weight: 600;
          box-shadow: 
            0 2px 10px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .nav-tab-label {
          line-height: 1;
        }

        /* The signature active dot beneath text */
        .nav-active-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #FFFFFF;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.9);
          margin-top: 3px;
          position: absolute;
          bottom: 5px;
        }

        /* Mobile Hamburger Pill */
        .mobile-pill-toggle {
          display: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(18, 20, 28, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(14px);
          color: #F5F7FA;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
        }

        /* Mobile Dropdown Capsule */
        .mobile-capsule-dropdown {
          pointer-events: auto;
          width: 90%;
          max-width: 320px;
          margin-top: 0.75rem;
          background: rgba(18, 20, 28, 0.96);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transform: translateY(-8px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
        }

        .mobile-capsule-dropdown.open {
          max-height: 380px;
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-dropdown-inner {
          padding: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .mobile-tab-pill {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.15rem;
          border-radius: 9999px;
          color: #9CA9BA;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .mobile-tab-pill:hover,
        .mobile-tab-pill.active {
          color: #FFFFFF;
          background: rgba(36, 40, 54, 0.95);
        }

        .mobile-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00D4FF;
          box-shadow: 0 0 8px #00D4FF;
        }

        @media (max-width: 860px) {
          .nav-tabs-capsule {
            display: none;
          }
          .mobile-pill-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
