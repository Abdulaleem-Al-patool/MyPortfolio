import React from 'react';
import './SectionHeader.css';

export default function SectionHeader({
  number,
  title,
  subtitle,
  className = '',
}) {
  return (
    <div className={`section-header-root ${className}`}>
      {number && (
        <div className="section-header-number-wrap">
          <span>{number}</span>
          <span className="section-header-line" aria-hidden="true" />
        </div>
      )}
      <h2 className="section-header-title">
        {title}
      </h2>
      {subtitle && (
        <p className="section-header-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}
