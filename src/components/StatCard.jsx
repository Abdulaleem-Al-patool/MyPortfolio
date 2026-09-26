import React from 'react';
import './StatCard.css';

export default function StatCard({ value, label, subtext, className = '' }) {
  return (
    <div className={`stat-card-root ${className}`}>
      <div className="stat-card-value">
        {value}
      </div>
      <div className="stat-card-label">
        {label}
      </div>
      {subtext && (
        <div className="stat-card-subtext">
          {subtext}
        </div>
      )}
    </div>
  );
}
