import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';
import { colorThemes } from '../data/themes.js';

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
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="تغيير نظام الألوان / Change color theme"
        title="تغيير الألوان (Theme Palette)"
        className="flex items-center gap-1.5 rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2.5 py-1.5 text-xs font-mono text-[var(--text-secondary)] hover:border-[var(--accent-dim)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        <span
          className="h-2.5 w-2.5 rounded-full shrink-0"
          style={{ backgroundColor: colorThemes[currentTheme]?.previewColor || 'var(--accent)' }}
        />
        <Palette className="h-3.5 w-3.5" />
        <span className="hidden lg:inline text-[11px]">الألوان</span>
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Color Palette Selector"
          className="absolute right-0 mt-2 w-56 rounded-[6px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-2 shadow-[0_8px_24px_rgba(0,0,0,0.5)] z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-2 py-1.5 border-b border-[var(--border-subtle)] mb-1">
            <span className="font-mono text-[11px] font-semibold text-[var(--text-primary)] block">
              نظام الألوان (Theme Palette)
            </span>
            <span className="text-[10px] text-[var(--text-secondary)] block">
              اختر النمط المناسب
            </span>
          </div>

          <div className="space-y-1">
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
                  className={`w-full flex items-center justify-between rounded-[4px] px-2.5 py-2 text-xs text-left transition-colors ${
                    isSelected
                      ? 'bg-[var(--bg-surface)] text-[var(--accent)] font-semibold border border-[var(--border-subtle)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <span
                      className="h-3.5 w-3.5 rounded-full border border-white/20 shrink-0"
                      style={{ backgroundColor: t.previewColor }}
                    />
                    <div className="truncate">
                      <div className="text-[12px] font-medium leading-tight">{t.name}</div>
                      <div className="text-[10px] text-[var(--text-secondary)]">{t.nameAr}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
