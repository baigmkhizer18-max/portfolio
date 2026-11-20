import React from 'react';
import { FolderGit2, Sparkles, Clock, PlusCircle, ArrowUpRight, Code, Terminal, Layers } from 'lucide-react';

export default function Projects() {
  const placeholderSlots = [
    {
      slotNumber: '01',
      status: 'In Development',
      badge: 'React.js + AI',
      title: 'Project Slot 01',
      description:
        'Currently architecting a modern React web application integrating intelligent features and responsive UI patterns.',
      tags: ['React.js', 'Vite', 'Modern Web'],
    },
    {
      slotNumber: '02',
      status: 'Upcoming Build',
      badge: 'Frontend Showcase',
      title: 'Project Slot 02',
      description:
        'Next planned portfolio application emphasizing interactive micro-interactions, clean CSS design system, and SEO optimization.',
      tags: ['JavaScript ES6+', 'CSS3', 'SEO'],
    },
    {
      slotNumber: '03',
      status: 'Concept Stage',
      badge: 'Aptech ACCP AI',
      title: 'Project Slot 03',
      description:
        'Hands-on AI-driven web utility being explored within the ACCP AI curriculum at Aptech.',
      tags: ['Artificial Intelligence', 'APIs', 'Python/JS'],
    },
  ];

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Project Portfolio</span>
          </div>
          <h2 className="section-title">
            Projects <span className="gradient-text">In Active Development</span>
          </h2>
          <p className="section-subtitle">
            Authenticity and real skills over fiction. As a 14-year-old developer balancing Grade 9 Computer Science with Aptech ACCP AI, my upcoming real-world projects will be published here.
          </p>
        </div>

        {/* Informative Developer Status Banner */}
        <div className="projects-status-banner">
          <div className="banner-icon-col">
            <Clock size={28} color="#00D4FF" />
          </div>
          <div className="banner-text-col">
            <h4>Ready For Real Builds — No Fake Projects</h4>
            <p>
              I believe in demonstrating authentic development achievements rather than filler placeholders. As I complete each project in React.js and AI, live links and source code repositories will be connected directly to these slots.
            </p>
          </div>
        </div>

        {/* Placeholder Grid */}
        <div className="projects-grid">
          {placeholderSlots.map((slot, index) => (
            <div key={index} className="glass-card project-placeholder-card">
              {/* Card Wireframe Graphic */}
              <div className="card-wireframe-header">
                <div className="wireframe-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="wireframe-slot-tag">{slot.badge}</span>
              </div>

              {/* Wireframe Body Preview */}
              <div className="wireframe-body">
                <div className="wireframe-blueprint-art">
                  <Terminal size={36} className="blueprint-icon" />
                  <span className="blueprint-status">{slot.status}</span>
                  <div className="blueprint-lines">
                    <span className="line line-short" />
                    <span className="line line-medium" />
                    <span className="line line-long" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="project-content">
                <div className="project-title-row">
                  <h3 className="project-title">{slot.title}</h3>
                  <span className="slot-number-pill">#{slot.slotNumber}</span>
                </div>

                <p className="project-desc">{slot.description}</p>

                {/* Tech Tags */}
                <div className="project-tags">
                  {slot.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Ready Indicator */}
                <div className="project-card-footer">
                  <div className="ready-indicator">
                    <span className="ready-dot" />
                    <span>Slot Reserved for Live Showcase</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
        }

        .projects-status-banner {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(124, 92, 252, 0.25);
          border-radius: var(--radius-lg);
          padding: 1.75rem 2rem;
          display: flex;
          gap: 1.5rem;
          align-items: center;
          margin-bottom: 3.5rem;
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        }

        .banner-icon-col {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(124, 92, 252, 0.08);
          border: 1px solid rgba(124, 92, 252, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .banner-text-col h4 {
          font-size: 1.15rem;
          color: #0F172A;
          font-weight: 700;
          margin-bottom: 0.3rem;
        }

        .banner-text-col p {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #334155;
          font-weight: 450;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-placeholder-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.85);
          border: 1px dashed rgba(15, 23, 42, 0.2);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
          transition: all 0.3s ease;
        }

        .project-placeholder-card:hover {
          border-color: rgba(124, 92, 252, 0.5);
          border-style: solid;
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(124, 92, 252, 0.12);
        }

        .card-wireframe-header {
          padding: 0.9rem 1.25rem;
          background: rgba(248, 250, 252, 0.95);
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .wireframe-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }

        .dot-red { background: #FF5F56; }
        .dot-yellow { background: #FFBD2E; }
        .dot-green { background: #27C93F; }

        .wireframe-slot-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-secondary);
        }

        .wireframe-body {
          height: 180px;
          background: radial-gradient(circle at center, #F8FAFC 0%, #E2E8F0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
        }

        .wireframe-blueprint-art {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .blueprint-icon {
          color: #7C5CFC;
          opacity: 0.8;
          filter: drop-shadow(0 0 10px rgba(124, 92, 252, 0.3));
        }

        .blueprint-status {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          color: #6D28D9;
          letter-spacing: 0.05em;
        }

        .blueprint-lines {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 80px;
          align-items: center;
          margin-top: 4px;
        }

        .line {
          height: 2px;
          background: rgba(15, 23, 42, 0.1);
          border-radius: 2px;
        }

        .line-short { width: 40px; }
        .line-medium { width: 60px; }
        .line-long { width: 75px; }

        .project-content {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0F172A;
        }

        .slot-number-pill {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #1E293B;
          font-weight: 600;
        }

        .project-desc {
          font-size: 0.88rem;
          line-height: 1.6;
          color: #334155;
          font-weight: 450;
          margin-bottom: 1.25rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.5rem;
        }

        .project-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          background: rgba(15, 23, 42, 0.04);
          color: #1E293B;
          border: 1px solid rgba(15, 23, 42, 0.1);
          font-weight: 600;
        }

        .project-card-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid rgba(15, 23, 42, 0.06);
        }

        .ready-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-secondary);
        }

        .ready-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-secondary);
        }

        @media (max-width: 768px) {
          .projects-status-banner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
