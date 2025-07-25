import React from 'react';
import './AnimatedLetters.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span style={{ whiteSpace: 'pre' }}>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;