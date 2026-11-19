import React from 'react';
import InfiniteSpiral from './InfiniteSpiral';
import { Orbit, Sparkles, MoveVertical } from 'lucide-react';

export default function Showcase() {
  // High quality, aesthetic and professionally curated tech photographs
  const spiralItems = [
    {
      src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      text: 'Modern Web Architecture',
      subtext: 'Frontend development with clean, component-based code',
      tag: 'Frontend Dev',
      alt: 'Clean code editor displaying modern JavaScript syntax',
    },
    {
      src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
      text: 'Artificial Intelligence',
      subtext: 'Neural architectures & ACCP AI training at Aptech',
      tag: 'AI & Data',
      alt: 'Futuristic AI neural network concept visualization',
    },
    {
      src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      text: 'Developer Workspace',
      subtext: 'Focused workstation for coding and problem solving',
      tag: 'Workflow',
      alt: 'Modern minimalist developer desk with laptop and code',
    },
    {
      src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      text: 'Creative Coding',
      subtext: 'Interactive graphics, 3D visuals & responsive interfaces',
      tag: 'Creative Tech',
      alt: 'Cyberpunk inspired futuristic digital interface',
    },
    {
      src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      text: 'Computer Science',
      subtext: 'Grade 9 Computer Science foundations at Metropolis',
      tag: 'CS Theory',
      alt: 'Algorithmic binary digital rain and logic streams',
    },
    {
      src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
      text: 'Software Engineering',
      subtext: 'Continuous aspiration to build scalable systems',
      tag: 'Engineering',
      alt: 'Software engineer engineering robust digital software',
    },
    {
      src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      text: 'Futuristic Digital Spaces',
      subtext: 'Emerging tech horizons and immersive web experiences',
      tag: 'Emerging Tech',
      alt: 'Fluid abstract neon digital technological horizon',
    },
    {
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      text: 'Hardware & Systems',
      subtext: 'Deep curiosity for processor architectures and compute power',
      tag: 'Core Systems',
      alt: 'Silicon processor chip and computer circuit motherboard',
    },
    {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      text: 'Data Visualization',
      subtext: 'Dynamic interactive visual interfaces & analytics models',
      tag: 'Analytics',
      alt: 'Modern financial charts and analytics dashboard screens',
    },
    {
      src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      text: 'Responsive UX / UI',
      subtext: 'Crafting fluid motion and responsive frontend experiences',
      tag: 'Interface Tech',
      alt: 'Designer crafting interactive mobile and desktop interfaces',
    },
  ];

  return (
    <section id="showcase" className="section-wrapper showcase-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Orbit size={14} />
            <span>Interactive 3D Spiral</span>
          </div>
          <h2 className="section-title">
            Visual Showcase: <span className="gradient-text">Tech &amp; AI Horizons</span>
          </h2>
          <p className="section-subtitle">
            An interactive 3D infinite spiral helix powered by React Bits showcasing the key domains,
            technologies, and futuristic computing horizons inspiring my work.
          </p>
        </div>

        {/* 3D Infinite Spiral Gallery */}
        <div className="showcase-spiral-container">
          <div className="showcase-spiral-viewport">
            <InfiniteSpiral
              items={spiralItems}
              animationMode="all"
              speed={0.55}
              radius={190}
              cardWidth={140}
              cardHeight={175}
              verticalSpacing={68}
              perspective={1000}
              cardRadius={12}
              centerScale={1.22}
              edgeBlur={5}
              cardsPerTurn={7}
              pauseOnHover={true}
            />
          </div>

          <div className="showcase-hint">
            <MoveVertical size={14} />
            <span>Drag up/down, scroll page, or hover to pause the 3D spiral</span>
          </div>
        </div>
      </div>

      <style>{`
        .showcase-section {
          background: transparent;
          border-top: 1px solid rgba(15, 23, 42, 0.05);
          border-bottom: 1px solid rgba(15, 23, 42, 0.05);
          position: relative;
          overflow: hidden;
          padding: 5rem 0;
        }

        .showcase-spiral-container {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 1.5rem;
        }

        .showcase-spiral-viewport {
          height: 600px;
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 900px;
          border-radius: 24px;
          background: radial-gradient(
            circle at center,
            rgba(124, 92, 252, 0.04) 0%,
            rgba(0, 212, 255, 0.02) 40%,
            transparent 70%
          );
        }

        .showcase-hint {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.25rem;
          font-size: 0.8rem;
          color: #64748B;
          font-family: 'JetBrains Mono', monospace;
          background: rgba(15, 23, 42, 0.04);
          padding: 6px 16px;
          border-radius: 9999px;
          border: 1px solid rgba(15, 23, 42, 0.08);
        }
      `}</style>
    </section>
  );
}
