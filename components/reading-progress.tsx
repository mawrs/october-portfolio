"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scroller = document.querySelector("[data-scroller]");
    if (!scroller) return;

    const update = () => {
      const max = scroller.scrollHeight - scroller.clientHeight;
      const next = max <= 0 ? 0 : Math.min(1, scroller.scrollTop / max);
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
      className="sticky top-0 z-30 h-[5px] w-full bg-foreground/10"
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
