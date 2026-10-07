"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [track, setTrack] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const scroller = document.querySelector("[data-scroller]");
    if (!scroller) return;

    const update = () => {
      const rect = scroller.getBoundingClientRect();
      const max = scroller.scrollHeight - scroller.clientHeight;
      const next = max <= 0 ? 0 : Math.min(1, scroller.scrollTop / max);
      setTrack({ left: rect.left, width: rect.width });
      setProgress(next);
    };

    const frame = requestAnimationFrame(update);
    const observer = new ResizeObserver(update);
    observer.observe(scroller);
    scroller.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      scroller.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-16 z-50 h-[3px] bg-foreground/10"
      style={{ left: track.left, width: track.width || "100%" }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      aria-label="Reading progress"
    >
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out motion-reduce:transition-none"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
