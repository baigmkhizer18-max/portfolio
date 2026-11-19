import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/CircularCarousel.css';
import { ChevronLeft, ChevronRight, Pause, Play, MoveHorizontal } from 'lucide-react';

export default function CircularCarousel({
  items = [],
  preset = 'orbit',
  intro = 'rise',
  cardWidth = 220,
  aspectRatio = 0.75,
  speed = 14,
  captions = true,
  tilt = -16,
  curve = 0,
  perspective = 1500,
}) {
  const [rotation, setRotation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [effectiveWidth, setEffectiveWidth] = useState(cardWidth);

  const containerRef = useRef(null);
  const startXRef = useRef(0);
  const startRotationRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animFrameRef = useRef(null);
  const rotationRef = useRef(0);

  // Sync ref with state
  rotationRef.current = rotation;

  // Responsive card width calculation
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 480) {
        setEffectiveWidth(Math.min(cardWidth, 170));
      } else if (windowWidth < 768) {
        setEffectiveWidth(Math.min(cardWidth, 195));
      } else {
        setEffectiveWidth(cardWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cardWidth]);

  // Intro trigger
  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const cardHeight = Math.round(effectiveWidth / aspectRatio);
  const itemCount = Math.max(items.length, 1);
  const theta = 360 / itemCount;
  // Calculate radius for cylinder/orbit so cards are spaced evenly without excessive overlap
  const calculatedRadius = Math.round((effectiveWidth / 2) / Math.tan(Math.PI / itemCount)) + 40;
  const radius = Math.max(effectiveWidth * 1.35, calculatedRadius);

  // Auto rotation loop
  useEffect(() => {
    let lastStamp = performance.now();

    const loop = (timestamp) => {
      const delta = (timestamp - lastStamp) / 1000;
      lastStamp = timestamp;

      if (isPlaying && !isDragging) {
        // speed prop: higher means faster rotation. Standard ~14 deg/sec base
        const degPerSec = speed * 1.1;
        setRotation((prev) => (prev + degPerSec * delta) % 360);
      }

      // Inertia decay if not dragging
      if (!isDragging && Math.abs(velocityRef.current) > 0.1) {
        velocityRef.current *= 0.94;
        setRotation((prev) => (prev + velocityRef.current) % 360);
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isPlaying, isDragging, speed]);

  // Mouse & Touch Drag Handlers
  const handlePointerDown = (clientX) => {
    setIsDragging(true);
    startXRef.current = clientX;
    startRotationRef.current = rotationRef.current;
    lastXRef.current = clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handlePointerMove = (clientX) => {
    if (!isDragging) return;
    const deltaX = clientX - startXRef.current;
    const now = performance.now();
    const timeDelta = Math.max(now - lastTimeRef.current, 1);
    
    // Sensitivity factor
    const sensitivity = 0.35;
    const newRotation = startRotationRef.current + deltaX * sensitivity;
    setRotation(newRotation);

    // Track velocity for inertia
    velocityRef.current = ((clientX - lastXRef.current) / timeDelta) * 5;
    lastXRef.current = clientX;
    lastTimeRef.current = now;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    handlePointerDown(e.clientX);
  };

  const onMouseMove = (e) => {
    handlePointerMove(e.clientX);
  };

  const onMouseUp = () => {
    handlePointerUp();
  };

  const onTouchStart = (e) => {
    if (e.touches.length > 0) {
      handlePointerDown(e.touches[0].clientX);
    }
  };

  const onTouchMove = (e) => {
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  const onTouchEnd = () => {
    handlePointerUp();
  };

  const rotateStep = (direction) => {
    setRotation((prev) => prev + direction * (360 / itemCount));
  };

  return (
    <div className="circular-carousel-wrapper">
      <div
        className="circular-carousel-stage"
        ref={containerRef}
        style={{
          perspective: `${perspective}px`,
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-label="3D Technology &amp; AI Circular Carousel"
      >
        <div
          className="circular-carousel-track"
          style={{
            transform: `rotateX(${tilt}deg) rotateY(${rotation}deg)`,
          }}
        >
          {items.map((item, index) => {
            const cardAngle = index * theta;
            const riseClass = intro === 'rise' && !hasLoaded ? 'intro-rise' : '';

            return (
              <div
                key={index}
                className={`circular-carousel-card ${riseClass}`}
                style={{
                  width: `${effectiveWidth}px`,
                  height: `${cardHeight}px`,
                  transform: `rotateY(${cardAngle}deg) translateZ(${radius}px) rotateZ(${curve}deg)`,
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                <div className="circular-carousel-image-container">
                  {item.tag && (
                    <span className="circular-carousel-badge">{item.tag}</span>
                  )}
                  <img
                    src={item.image}
                    alt={item.alt || item.text || `Carousel slide ${index + 1}`}
                    className="circular-carousel-image"
                    loading="lazy"
                  />
                  <div className="circular-carousel-overlay" />
                  {captions && item.text && (
                    <div className="circular-carousel-caption">
                      <h4>{item.text}</h4>
                      {item.subtext && <p>{item.subtext}</p>}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="carousel-glow-base" />
      </div>

      {/* Control bar */}
      <div className="circular-carousel-controls">
        <button
          className="carousel-btn"
          onClick={() => rotateStep(-1)}
          aria-label="Rotate previous"
          title="Previous item"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          className="carousel-btn"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause rotation' : 'Resume rotation'}
          title={isPlaying ? 'Pause rotation' : 'Resume rotation'}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <button
          className="carousel-btn"
          onClick={() => rotateStep(1)}
          aria-label="Rotate next"
          title="Next item"
        >
          <ChevronRight size={20} />
        </button>

        <div className="carousel-hint">
          <MoveHorizontal size={16} />
          <span>Drag or swipe to rotate</span>
        </div>
      </div>
    </div>
  );
}
