import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import './ParticleBackground.css';

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const { themeData } = useTheme();
  const mainColor = themeData.variables['--main_color'] || '#40A2D8';

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const [r, g, b] = hexToRgb(mainColor);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0, h = 0, raf = 0, particles = [];
    const pointer = { x: -9999, y: -9999 };
    const LINK = 130;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(28, Math.min(80, Math.floor((w * h) / 22000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        s: Math.random() * 1.4 + 0.7,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        if (!reduce) {
          // تجاذب خفيف نحو المؤشر
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const d = Math.hypot(dx, dy);
          if (d < 160 && d > 0) {
            p.x += (dx / d) * 0.25;
            p.y += (dy / d) * 0.25;
          }
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},0.55)`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], c = particles[j];
          const d = Math.hypot(a.x - c.x, a.y - c.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${r},${g},${b},${(1 - d / LINK) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(c.x, c.y);
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduce) draw();
      else raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => { pointer.x = e.clientX; pointer.y = e.clientY; };
    const onLeave = () => { pointer.x = -9999; pointer.y = -9999; };
    const onVisibility = () => (document.hidden ? cancelAnimationFrame(raf) : start());

    resize();
    start();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [mainColor]);

  return (
    <div className="bg-fx" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}