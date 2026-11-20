import React from 'react';
import { GraduationCap, Award, BookOpen, Brain, Calendar, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const educationItems = [
    {
      institution: 'Metropolis Education System',
      badge: 'Grade 9 CS',
      field: 'Computer Science',
      startYear: '2025',
      grade: '85%',
      status: 'Current Status: Grade 9',
      description:
        'Focusing on fundamental Computer Science coursework, analytical reasoning, and foundational programming logic alongside core academic excellence.',
      highlights: ['Computer Science Curriculum', 'Grade: 85%', 'Enrolled: 2025'],
      accentColor: '#00D4FF',
      icon: <BookOpen size={24} color="#00D4FF" />,
    },
    {
      institution: 'Aptech Computer Education',
      badge: 'Professional Tech Program',
      field: 'ACCP AI (Advanced Career Program in AI)',
      startYear: 'Ongoing',
      grade: null,
      status: 'Currently Studying',
      description:
        'Professional technology curriculum covering modern software engineering fundamentals, Artificial Intelligence concepts, Python, and emerging tech stacks.',
      highlights: ['ACCP AI Specialization', 'Artificial Intelligence Focus', 'Hands-On Labs'],
      accentColor: '#7C5CFC',
      icon: <Brain size={24} color="#7C5CFC" />,
    },
  ];

  return (
    <section id="education" className="section-wrapper education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Learning Pathway</span>
          </h2>
          <p className="section-subtitle">
            Formal schooling and specialized career training forming a strong dual foundation in computer science and artificial intelligence.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="education-grid">
          {educationItems.map((edu, idx) => (
            <div key={idx} className="glass-card edu-card">
              <div className="edu-card-glow" style={{ background: edu.accentColor }} />
              
              <div className="edu-top-meta">
                <div className="edu-icon-wrapper" style={{ borderColor: `${edu.accentColor}40` }}>
                  {edu.icon}
                </div>
                <div className="edu-badge-tag">{edu.badge}</div>
              </div>

              <div className="edu-body">
                <h3 className="edu-institution">{edu.institution}</h3>
                <h4 className="edu-field">{edu.field}</h4>

                <div className="edu-meta-row">
                  <div className="edu-meta-pill">
                    <Calendar size={13} />
                    <span>Start: {edu.startYear}</span>
                  </div>
                  {edu.grade && (
                    <div className="edu-meta-pill grade-pill">
                      <Award size={13} />
                      <span>Score: {edu.grade}</span>
                    </div>
                  )}
                  <div className="edu-meta-pill status-pill">
                    <CheckCircle2 size={13} />
                    <span>{edu.status}</span>
                  </div>
                </div>

                <p className="edu-description">{edu.description}</p>

                <div className="edu-highlights">
                  {edu.highlights.map((h, i) => (
                    <span key={i} className="highlight-chip">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          background: transparent;
          border-top: 1px solid rgba(15, 23, 42, 0.05);
          border-bottom: 1px solid rgba(15, 23, 42, 0.05);
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .edu-card {
          position: relative;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .edu-card:hover {
          transform: translateY(-4px);
        }

        .edu-card-glow {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          opacity: 0.12;
          filter: blur(40px);
          pointer-events: none;
        }

        .edu-top-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .edu-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .edu-badge-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: #1E293B;
          background: rgba(15, 23, 42, 0.04);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(15, 23, 42, 0.1);
        }

        .edu-institution {
          font-size: 1.45rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.35rem;
        }

        .edu-field {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--accent-primary);
          margin-bottom: 1.25rem;
          font-family: var(--font-heading);
        }

        .edu-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 1.25rem;
        }

        .edu-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          background: rgba(15, 23, 42, 0.04);
          border: 1px solid rgba(15, 23, 42, 0.1);
          color: #1E293B;
          font-weight: 600;
        }

        .grade-pill {
          background: rgba(2, 132, 199, 0.08);
          border-color: rgba(2, 132, 199, 0.25);
          color: #0284C7;
          font-weight: 600;
        }

        .status-pill {
          background: rgba(16, 185, 129, 0.08);
          border-color: rgba(16, 185, 129, 0.25);
          color: #059669;
          font-weight: 600;
        }

        .edu-description {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #334155;
          font-weight: 450;
          margin-bottom: 1.5rem;
        }

        .edu-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
        }

        .highlight-chip {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #0F172A;
          background: rgba(255, 255, 255, 0.95);
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .education-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
