import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Palette, 
  Users, 
  FileCode, 
  FileJson, 
  Globe, 
  Search, 
  Cpu, 
  Sparkles, 
  CheckCircle, 
  MessageSquare, 
  Lightbulb,
  Video,
  Layout,
  Terminal
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'web', label: 'Programming & Web' },
    { id: 'tools', label: 'Software & Creative Tools' },
    { id: 'professional', label: 'Professional Skills' },
  ];

  const webSkills = [
    {
      name: 'HTML5',
      category: 'web',
      categoryLabel: 'Web Markup',
      icon: <FileCode size={24} color="#E34F26" />,
      desc: 'Semantic page structure, modern accessibility standards, and clean DOM architecture.',
      accent: '#E34F26',
    },
    {
      name: 'CSS3',
      category: 'web',
      categoryLabel: 'Styling',
      icon: <Palette size={24} color="#1572B6" />,
      desc: 'Responsive layouts, Flexbox, CSS Grid, custom keyframe animations, and modern UI variables.',
      accent: '#1572B6',
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'web',
      categoryLabel: 'Programming',
      icon: <Code2 size={24} color="#F7DF1E" />,
      desc: 'Modern JavaScript, async/await, DOM manipulation, functional paradigms, and ES module workflows.',
      accent: '#F7DF1E',
    },
    {
      name: 'React.js',
      category: 'web',
      categoryLabel: 'Frontend Library',
      icon: <Cpu size={24} color="#00D4FF" />,
      desc: 'Component-driven UI development, React hooks, state management, and Vite tooling.',
      accent: '#00D4FF',
    },
    {
      name: 'Bootstrap',
      category: 'web',
      categoryLabel: 'CSS Framework',
      icon: <Layout size={24} color="#7952B3" />,
      desc: 'Rapid responsive prototyping, utility-first grid systems, and modular UI components.',
      accent: '#7952B3',
    },
    {
      name: 'JSON',
      category: 'web',
      categoryLabel: 'Data Interchange',
      icon: <FileJson size={24} color="#00D4FF" />,
      desc: 'Structured client-server data parsing, schema handling, and RESTful API consumption.',
      accent: '#00D4FF',
    },
    {
      name: 'XML',
      category: 'web',
      categoryLabel: 'Data Markup',
      icon: <Globe size={24} color="#F97316" />,
      desc: 'Structured document validation, data representation, and configuration format handling.',
      accent: '#F97316',
    },
    {
      name: 'SEO Fundamentals',
      category: 'web',
      categoryLabel: 'Optimization',
      icon: <Search size={24} color="#10B981" />,
      desc: 'Search engine discoverability, semantic metadata, performance optimization, and Open Graph tags.',
      accent: '#10B981',
    },
  ];

  const toolSkills = [
    {
      name: 'Visual Studio Code',
      category: 'tools',
      categoryLabel: 'Development Environment',
      icon: <Terminal size={24} color="#007ACC" />,
      desc: 'Daily code editor: debugging extensions, Git integration, snippet workflows, and Emmet shortcuts.',
      accent: '#007ACC',
    },
    {
      name: 'Adobe Photoshop',
      category: 'tools',
      categoryLabel: 'Image Editing',
      icon: <Palette size={24} color="#31A8FF" />,
      desc: 'Asset optimization, photo retouching, graphical composition, and UI mockup preparation.',
      accent: '#31A8FF',
    },
    {
      name: 'Canva',
      category: 'tools',
      categoryLabel: 'Visual Design',
      icon: <Sparkles size={24} color="#00C4CC" />,
      desc: 'Social graphics, UI design collateral, presentation drafting, and brand mood boards.',
      accent: '#00C4CC',
    },
    {
      name: 'CapCut',
      category: 'tools',
      categoryLabel: 'Video Editing',
      icon: <Video size={24} color="#F43F5E" />,
      desc: 'Dynamic video editing, visual transitions, pacing, audio synchronization, and creative content presentation.',
      accent: '#F43F5E',
    },
  ];

  const professionalSkills = [
    {
      name: 'Communication',
      category: 'professional',
      categoryLabel: 'Core Collaboration',
      icon: <MessageSquare size={24} color="#7C5CFC" />,
      desc: 'Clear verbal and written explanation of ideas, receptive feedback culture, and constructive team dialogue.',
      accent: '#7C5CFC',
    },
    {
      name: 'Problem Solving',
      category: 'professional',
      categoryLabel: 'Analytical Thinking',
      icon: <Lightbulb size={24} color="#F59E0B" />,
      desc: 'Deconstructing programming challenges, debugging systematically, and discovering creative algorithmic solutions.',
      accent: '#F59E0B',
    },
  ];

  const allSkills = [...webSkills, ...toolSkills, ...professionalSkills];

  const filteredSkills =
    activeTab === 'all'
      ? allSkills
      : allSkills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Technical Competencies</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Creative Toolset</span>
          </h2>
          <p className="section-subtitle">
            A balanced foundation of modern web technologies, creative software, and professional problem-solving abilities.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="skills-tabs-container">
          <div className="skills-tabs">
            {skillCategories.map((tab) => (
              <button
                key={tab.id}
                className={`skill-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="glass-card skill-card">
              <div
                className="skill-accent-bar"
                style={{ background: skill.accent }}
              />

              <div className="skill-card-top">
                <div
                  className="skill-icon-bubble"
                  style={{
                    backgroundColor: `${skill.accent}14`,
                    borderColor: `${skill.accent}30`,
                  }}
                >
                  {skill.icon}
                </div>
                <span className="skill-category-pill">{skill.categoryLabel}</span>
              </div>

              <div className="skill-card-body">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.desc}</p>
              </div>

              <div className="skill-card-footer">
                <span className="skill-status-tag">
                  <CheckCircle size={12} color={skill.accent} />
                  <span>Active Skill</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-tabs-container {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .skills-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.9);
          padding: 0.4rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(15, 23, 42, 0.1);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
        }

        .skill-tab-btn {
          font-family: var(--font-heading);
          font-size: 0.88rem;
          font-weight: 600;
          color: #1E293B;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .skill-tab-btn:hover {
          color: #000000;
        }

        .skill-tab-btn.active {
          background: var(--accent-gradient);
          color: #FFFFFF;
          box-shadow: 0 4px 15px rgba(124, 92, 252, 0.35);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          position: relative;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: all 0.25s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: rgba(124, 92, 252, 0.4);
        }

        .skill-accent-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          opacity: 0.8;
        }

        .skill-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.15rem;
        }

        .skill-icon-bubble {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
          transition: transform 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        }

        .skill-card:hover .skill-icon-bubble {
          transform: scale(1.08) rotate(3deg);
        }

        .skill-category-pill {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #1E293B;
          background: rgba(15, 23, 42, 0.04);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(15, 23, 42, 0.1);
          font-weight: 600;
        }

        .skill-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.45rem;
        }

        .skill-desc {
          font-size: 0.88rem;
          line-height: 1.55;
          color: #334155;
          font-weight: 450;
          margin-bottom: 1.25rem;
        }

        .skill-card-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid rgba(15, 23, 42, 0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .skill-status-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        @media (max-width: 640px) {
          .skills-tabs {
            border-radius: 16px;
          }
          .skill-tab-btn {
            font-size: 0.8rem;
            padding: 0.5rem 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
