import React from 'react';
import { User, Cpu, Sparkles, Compass, Target, Code, Laptop, Heart } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Laptop className="highlight-icon" color="#7C5CFC" size={24} />,
      title: 'Frontend & Web Dev',
      desc: 'Crafting responsive, pixel-perfect user interfaces with modern React, JavaScript and clean CSS architectures.',
    },
    {
      icon: <Cpu className="highlight-icon" color="#00D4FF" size={24} />,
      title: 'Artificial Intelligence',
      desc: 'Pursuing the ACCP AI curriculum at Aptech, exploring how AI algorithms reshape modern software systems.',
    },
    {
      icon: <Sparkles className="highlight-icon" color="#F59E0B" size={24} />,
      title: 'Curiosity & Dedication',
      desc: 'Balancing Grade 9 Computer Science with hands-on technical training, fueled by a genuine love for coding.',
    },
    {
      icon: <Target className="highlight-icon" color="#10B981" size={24} />,
      title: 'Long-Term Vision',
      desc: 'Driven to become an impactful Software Engineer building scalable, meaningful digital solutions that solve real problems.',
    },
  ];

  const quickFacts = [
    { label: 'Full Name', value: 'Muhammad Khizer Baig' },
    { label: 'Age', value: '14 Years Old' },
    { label: 'Location', value: 'Karachi, Pakistan' },
    { label: 'Academics', value: 'Metropolis Education (Grade 9)' },
    { label: 'Professional Tech', value: 'Aptech ACCP AI' },
    { label: 'Target Career', value: 'Software Engineer' },
  ];

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About Code, <span className="gradient-text">Driven by Purpose</span>
          </h2>
          <p className="section-subtitle">
            Get to know the mindset, educational journey, and vision behind my development path.
          </p>
        </div>

        {/* Content Layout */}
        <div className="about-grid">
          {/* Main Narrative Card */}
          <div className="glass-card about-story-card">
            <div className="story-header">
              <div className="story-badge">
                <Compass size={16} />
                <span>Professional Introduction</span>
              </div>
            </div>

            <div className="story-quote">
              <p className="story-paragraph">
                "Hi, I'm <strong>Muhammad Khizer Baig</strong>, an aspiring Frontend Developer and Web Developer passionate about creating modern, interactive and user-friendly digital experiences. I am currently studying in Grade 9 while pursuing the ACCP AI program at Aptech. My interests include Artificial Intelligence, web development and emerging technologies."
              </p>
              <p className="story-paragraph">
                "I enjoy learning new skills, exploring creative ideas and turning concepts into functional digital experiences. My passion, dedication and enthusiasm for my work motivate me to continuously improve and grow as a developer. My goal is to become a successful Software Engineer and build meaningful digital solutions."
              </p>
            </div>

            {/* Quick Facts List */}
            <div className="quick-facts-grid">
              {quickFacts.map((fact, idx) => (
                <div key={idx} className="fact-item">
                  <span className="fact-label">{fact.label}</span>
                  <span className="fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Pillars / Highlights */}
          <div className="about-pillars">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass-card pillar-card">
                <div className="pillar-icon-box">{item.icon}</div>
                <div className="pillar-info">
                  <h3 className="pillar-title">{item.title}</h3>
                  <p className="pillar-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2rem;
          align-items: stretch;
        }

        .about-story-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .story-header {
          margin-bottom: 1.5rem;
        }

        .story-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-secondary);
        }

        .story-quote {
          margin-bottom: 2rem;
        }

        .story-paragraph {
          font-size: 1.05rem;
          line-height: 1.75;
          color: #1E293B;
          margin-bottom: 1.25rem;
          font-weight: 500;
        }

        .story-paragraph strong {
          color: #0F172A;
          font-weight: 700;
        }

        .quick-facts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
        }

        .fact-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .fact-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #64748B;
          font-weight: 600;
        }

        .fact-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0F172A;
        }

        .about-pillars {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .pillar-card {
          padding: 1.5rem;
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .pillar-card:hover {
          transform: translateY(-3px);
          border-color: rgba(124, 92, 252, 0.35);
        }

        .pillar-icon-box {
          padding: 0.75rem;
          border-radius: 12px;
          background: rgba(124, 92, 252, 0.08);
          border: 1px solid rgba(124, 92, 252, 0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.35rem;
        }

        .pillar-desc {
          font-size: 0.88rem;
          line-height: 1.55;
          color: #334155;
          font-weight: 450;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-story-card {
            padding: 1.75rem;
          }
          .quick-facts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
