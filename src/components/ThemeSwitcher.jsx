import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';
import { colorThemes } from '../data/themes.js';
import './ThemeSwitcher.css';

export default function ThemeSwitcher() {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="theme-switcher-wrapper" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change color theme"
        title="Color Theme"
        className="theme-switcher-btn"
      >
        <span
          className="theme-switcher-indicator"
          style={{ backgroundColor: colorThemes[currentTheme]?.previewColor || 'var(--accent)' }}
        />
        <Palette className="theme-switcher-icon" />
        <span className="theme-switcher-label">Theme</span>
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Color Palette Selector"
          className="theme-dropdown-menu"
        >
          <div className="theme-dropdown-header">
            <span className="theme-dropdown-title">
              Color Palette
            </span>
            <span className="theme-dropdown-subtitle">
              نظام الألوان والتباين
            </span>
          </div>

          <div className="theme-options-list">
            {Object.values(colorThemes).map((t) => {
              const isSelected = currentTheme === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`theme-option-btn ${isSelected ? 'is-active' : ''}`}
                >
                  <div className="theme-option-content">
                    <span
                      className="theme-option-preview"
                      style={{ backgroundColor: t.previewColor }}
                    />
                    <div className="theme-option-text">
                      <div className="theme-option-name">{t.name}</div>
                      <div className="theme-option-name-ar">{t.nameAr}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="theme-option-check" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
