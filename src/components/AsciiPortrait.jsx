import React, { useEffect, useRef } from 'react';
import { profileData } from '../data/profile.js';
import './AsciiPortrait.css';

/* ==========================================================================
   AsciiPortrait: a card that draws your photo as coloured ASCII art.
   The photo is only downloaded when the card scrolls into view (lazy), then
   the picture "decodes" from top to bottom.
   Everything you may want to tweak is in the SETTINGS block below.
   ========================================================================== */

/* ---------- SETTINGS ---------- */
const CHARS = ' .:-=+*#%@';       // from empty to dense
const GLYPHS = '01<>/{}[]#*+=-:;'; // random symbols shown while decoding
const COLS_DESKTOP = 130;         // characters per row on wide cards
const COLS_MOBILE = 70;           // characters per row on narrow cards
const DURATION_MS = 2800;         // total reveal time
const BAND_ROWS = 6;              // rows still "decoding" under the scan line
const SCAN_COLOR = '#fbf9e3';     // colour of the scan line
const FOCUS = { x: 0.55, y: 0.56 }; // where the subject is (0 to 1), the rest fades
const RADIUS = 0.5;               // size of the focused area
const VIGNETTE = 0.92;            // 0 = no fade at the edges, 1 = strong fade
const DETAIL = 3.0;               // higher = sharper facial detail
const FLOOR = 0.16;               // minimum brightness so dark areas stay visible
const PHOTO_MIX = 0.15;           // how much of the photo's own colours to blend in
// Colour ramp from shadows to highlights. null = the site's --main_color
const RAMP = ['#12324d', null, '#5fe3c8', '#F0EDCF'];

/* ---------- image -> cells (pure functions) ---------- */
function hexToRgb(hex) {
  let h = hex.replace('#', '').trim();
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h.slice(0, 6), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rampColor(stops, t) {
  const x = Math.min(0.9999, Math.max(0, t)) * (stops.length - 1);
  const i = Math.floor(x);
  const f = x - i;
  const a = stops[i];
  const b = stops[i + 1];
  return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
}

function smoothstep(a, b, x) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function blur(src, cols, rows, rad) {
  const tmp = new Float32Array(cols * rows);
  const out = new Float32Array(cols * rows);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let sum = 0;
      let cnt = 0;
      for (let k = -rad; k <= rad; k++) {
        const cc = c + k;
        if (cc >= 0 && cc < cols) { sum += src[r * cols + cc]; cnt++; }
      }
      tmp[r * cols + c] = sum / cnt;
    }
  }
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      let sum = 0;
      let cnt = 0;
      for (let k = -rad; k <= rad; k++) {
        const rr = r + k;
        if (rr >= 0 && rr < rows) { sum += tmp[rr * cols + c]; cnt++; }
      }
      out[r * cols + c] = sum / cnt;
    }
  }
  return out;
}

function buildCells(data, cols, rows, stops) {
  const n = cols * rows;
  const lum = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const k = i * 4;
    lum[i] = (0.2126 * data[k] + 0.7152 * data[k + 1] + 0.0722 * data[k + 2]) / 255;
  }
  const local = blur(lum, cols, rows, 5);
  const tone = new Float32Array(n);
  for (let i = 0; i < n; i++) tone[i] = 0.5 + (lum[i] - local[i]) * DETAIL + (lum[i] - 0.5) * 0.45;
  const sorted = Float32Array.from(tone).sort();
  const lo = sorted[Math.floor(n * 0.03)];
  const hi = sorted[Math.floor(n * 0.97)];
  const span = Math.max(0.05, hi - lo);

  const chars = new Array(n);
  const colors = new Array(n);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      const k = i * 4;
      let t = Math.pow(Math.min(1, Math.max(0, (tone[i] - lo) / span)), 0.8);
      t = FLOOR + (1 - FLOOR) * t;
      const dx = (c + 0.5) / cols - FOCUS.x;
      const dy = (r + 0.5) / rows - FOCUS.y;
      const d = Math.min(1, Math.hypot(dx, dy) / RADIUS);
      t *= 1 - VIGNETTE * smoothstep(0.25, 1, d);
      const base = rampColor(stops, t);
      const R = base[0] * (1 - PHOTO_MIX) + data[k] * PHOTO_MIX;
      const G = base[1] * (1 - PHOTO_MIX) + data[k + 1] * PHOTO_MIX;
      const B = base[2] * (1 - PHOTO_MIX) + data[k + 2] * PHOTO_MIX;
      chars[i] = CHARS[Math.round(t * (CHARS.length - 1))];
      colors[i] = 'rgb(' + (R | 0) + ',' + (G | 0) + ',' + (B | 0) + ')';
    }
  }
  return { chars, colors };
}

/* ---------- component ---------- */
export default function AsciiPortrait() {
  const cardRef = useRef(null);
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const statusRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const status = statusRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let disposed = false;
    let started = false;
    let raf = 0;
    let resizeTimer = 0;
    let img = null;
    let cells = null;
    let layout = null;
    let shown = 0;
    let t0 = 0;
    let done = false;

    const setStatus = (text) => {
      if (status) status.textContent = text;
    };

    const prepare = () => {
      const W = Math.floor(stage.clientWidth);
      const cols = W < 520 ? COLS_MOBILE : COLS_DESKTOP;
      const rows = Math.max(1, Math.round(cols * (img.naturalHeight / img.naturalWidth) * 0.6));
      const cw = W / cols;
      const chh = cw / 0.6;
      layout = { W, cols, rows, cw, chh };

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(rows * chh * dpr);
      canvas.style.width = W + 'px';
      canvas.style.height = rows * chh + 'px';
      stage.style.height = rows * chh + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = Math.round(chh * 0.92 * 10) / 10 +
        'px "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // shrink the big photo in two steps so the colours are averaged smoothly
      const mid = document.createElement('canvas');
      mid.width = cols * 4;
      mid.height = rows * 4;
      const mctx = mid.getContext('2d');
      mctx.imageSmoothingQuality = 'high';
      mctx.drawImage(img, 0, 0, mid.width, mid.height);
      const small = document.createElement('canvas');
      small.width = cols;
      small.height = rows;
      const sctx = small.getContext('2d', { willReadFrequently: true });
      sctx.imageSmoothingQuality = 'high';
      sctx.drawImage(mid, 0, 0, cols, rows);
      const px = sctx.getImageData(0, 0, cols, rows).data;

      const css = getComputedStyle(document.documentElement).getPropertyValue('--main_color').trim() || '#40A2D8';
      const stops = RAMP.map((h) => hexToRgb(h || css));
      cells = buildCells(px, cols, rows, stops);
    };

    // q = 0 draws the final row, q = 1 draws a row of pure noise
    const drawRow = (r, q, scan) => {
      const { cols, cw, chh } = layout;
      ctx.clearRect(0, r * chh, cols * cw, chh);
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        let ch = cells.chars[i];
        if (ch === ' ') continue;
        ctx.fillStyle = scan ? SCAN_COLOR : cells.colors[i];
        if (q > 0 && Math.random() < q) ch = GLYPHS[(Math.random() * GLYPHS.length) | 0];
        ctx.fillText(ch, (c + 0.5) * cw, (r + 0.5) * chh);
      }
    };

    const finish = () => {
      while (shown < layout.rows) drawRow(shown++, 0, false);
      done = true;
      setStatus(layout.cols + 'x' + layout.rows + ' / ready');
    };

    const frame = (now) => {
      if (disposed) return;
      if (!t0) t0 = now;
      const { rows } = layout;
      const p = Math.min(1, (now - t0) / DURATION_MS);
      const eased = 1 - Math.pow(1 - p, 2);
      const front = eased * (rows + BAND_ROWS);
      const settledTo = Math.min(rows, Math.floor(front - BAND_ROWS));

      while (shown < settledTo) drawRow(shown++, 0, false);

      const last = Math.min(rows, Math.ceil(front));
      for (let r = Math.max(0, settledTo); r < last; r++) {
        const q = Math.min(1, Math.max(0, 1 - (front - r) / BAND_ROWS));
        drawRow(r, q, front - r < 1);
      }

      setStatus('decoding... ' + Math.round(p * 100) + '%');
      if (p < 1) {
        raf = requestAnimationFrame(frame);
      } else {
        finish();
      }
    };

    const start = () => {
      if (started) return;
      started = true;
      setStatus('loading image...');
      img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        if (disposed) return;
        prepare();
        stage.classList.add('is-ready');
        if (reduceMotion) {
          finish();
        } else {
          raf = requestAnimationFrame(frame);
        }
      };
      img.onerror = () => setStatus('could not load image');
      img.src = profileData.assets.photo;
    };

    // when the card is resized, redraw instantly (no replay)
    const ro = 'ResizeObserver' in window
      ? new ResizeObserver(() => {
          if (!done || disposed) return;
          if (Math.abs(stage.clientWidth - layout.W) < 3) return;
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(() => {
            prepare();
            shown = 0;
            finish();
          }, 150);
        })
      : null;
    if (ro) ro.observe(stage);

    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io.disconnect();
            start();
          }
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.15 }
      );
      io.observe(card);
    } else {
      start();
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      if (io) io.disconnect();
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <section className="ascii-section" id="portrait" aria-label="ASCII portrait">
      <div className="container">
        <div className="ascii-card" ref={cardRef}>
          <div className="ascii-bar">
            <span className="ascii-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="ascii-file">Abdulaleem</span>
            <span className="ascii-status" ref={statusRef}>waiting...</span>
          </div>
          <div className="ascii-stage" ref={stageRef}>
            <canvas
              ref={canvasRef}
              role="img"
              aria-label={'ASCII art portrait of ' + profileData.name}
            />
            <div className="ascii-placeholder" aria-hidden="true">
              <span>decoding portrait</span>
              <span className="ascii-caret" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
