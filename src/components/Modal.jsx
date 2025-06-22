import React, { useRef, useLayoutEffect } from 'react';
import './Modal.css';

export default function Modal({ data, onClose, children }) {
  const contentRef = useRef(null);
  useLayoutEffect(() => {
    if (contentRef.current && data.originX !== undefined && data.originY !== undefined) {
      const rect = contentRef.current.getBoundingClientRect();
      const x = data.originX - rect.left;
      const y = data.originY - rect.top;
      contentRef.current.style.transformOrigin = `${x}px ${y}px`;
    }
  }, [data.originX, data.originY]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        ref={contentRef}
        className="modal-content"
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}