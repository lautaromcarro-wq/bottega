import React, { useEffect, useState } from 'react';

/**
 * Editorial motion primitives for La Bottega.
 * Each one is filtered through .agent/skills/motion-filter.md —
 * no spring, no 3D, no mouse tricks. Quiet, measured, intentional.
 */

/* ========================================
   WordRotator — cross-fade word cycle
   Replaces a single token in a sentence.
   Uses inline-grid so container sizes to
   widest word, no layout shift per swap.
   ======================================== */

export function WordRotator({ words, interval = 4500 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words, interval]);

  return (
    <span className="word-rotator">
      {words.map((w, i) => (
        <span
          key={w}
          className={`word-rotator-item ${i === index ? 'is-active' : ''}`}
          aria-hidden={i !== index}
        >
          {w}
        </span>
      ))}
    </span>
  );
}

/* ========================================
   ReadingProgress — thin gold line at top.
   Width scales 0 → 100% as user scrolls
   through the whole document.
   ======================================== */

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="reading-progress" aria-hidden="true">
      <div
        className="reading-progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
