import React, { useState, useEffect, useRef } from 'react';
import AnimatedLetters from './AnimatedLetters';

export default function SectionTitle({ children }) {
  const isMobile = window.matchMedia('(max-width:768px)').matches;
  const [letterClass, setLetterClass] = useState('text-animate');
  const ref = useRef(null);


  useEffect(() => {
    if (!isMobile || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          setLetterClass('');
          requestAnimationFrame(() => setLetterClass('text-animate'));
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isMobile]);

  const strArray = children.split('');

  return (
    <h2 ref={ref} className="section-title">
      <AnimatedLetters letterClass={letterClass} strArray={strArray} idx={1} />
    </h2>
  );
}