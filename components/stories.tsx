"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Cover } from "@/components/covers";
import type { CoverId } from "@/lib/content";

const DURATION = 5000;

export type StoryFrame = {
  cover: CoverId;
  caption: string;
};

export type StoryGroup = {
  id: string;
  label: string;
  frames: StoryFrame[];
};

export function Stories({ groups, children }: { groups: StoryGroup[]; children: ReactNode }) {
  const [story, setStory] = useState(0);
  const [frame, setFrame] = useState(0);
  const [seen, setSeen] = useState<string[]>([]);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [progress, setProgress] = useState(0);
  const pausedRef = useRef(false);
  const nextRef = useRef<() => void>(() => {});

  pausedRef.current = paused;

  const current = groups[story];
  const slide = current.frames[frame];

  function remember(id: string) {
    setSeen((items) => (items.includes(id) ? items : [...items, id]));
  }

  function open(index: number) {
    if (index === story) {
      setFrame(0);
      setProgress(0);
      return;
    }
    remember(groups[story].id);
    setStory(index);
    setFrame(0);
    setProgress(0);
  }

  function next() {
    if (frame < groups[story].frames.length - 1) {
      setFrame(frame + 1);
      setProgress(0);
      return;
    }
    remember(groups[story].id);
    setStory((story + 1) % groups.length);
    setFrame(0);
    setProgress(0);
  }

  function prev() {
    if (frame > 0) {
      setFrame(frame - 1);
      setProgress(0);
      return;
    }
    if (story === 0) return;
    const previous = story - 1;
    setStory(previous);
    setFrame(groups[previous].frames.length - 1);
    setProgress(0);
  }

  nextRef.current = next;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const apply = () => {
      const id = window.location.hash.replace("#", "");
      const index = groups.findIndex((group) => group.id === id);
      if (index >= 0) {
        setStory(index);
        setFrame(0);
        setProgress(0);
      }
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, [groups]);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let elapsed = 0;
    let last = performance.now();
    const tick = (now: number) => {
      if (!pausedRef.current) elapsed += now - last;
      last = now;
      const value = Math.min(1, elapsed / DURATION);
      setProgress(value);
      if (value >= 1) {
        nextRef.current();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [story, frame, reduced]);

  return (
    <div className="mx-auto grid w-full max-w-[1024px] items-start gap-xl lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-x-xxl">
      <div className="mx-auto flex w-full max-w-[320px] flex-col items-center gap-s">
        <div className="flex w-full justify-center gap-l" role="group" aria-label="Stories">
          {groups.map((group, index) => {
            const active = index === story;
            const watched = seen.includes(group.id);
            return (
              <button
                key={group.id}
                id={group.id}
                type="button"
                aria-pressed={active}
                onClick={() => open(index)}
                className="flex w-16 scroll-mt-24 flex-col items-center gap-xs"
              >
                <span
                  className={`grid size-16 place-items-center rounded-full p-[3px] ${
                    active ? "bg-text-primary" : watched ? "bg-stroke-light" : ""
                  }`}
                  style={
                    active || watched
                      ? undefined
                      : {
                          background:
                            "conic-gradient(from 210deg, #533afd, #4032c9 45%, #b7c3e6 75%, #533afd)",
                        }
                  }
                >
                  <span className="block size-full overflow-hidden rounded-full bg-background-white p-[2px]">
                    <span className="block size-full overflow-hidden rounded-full">
                      <Cover id={group.frames[0].cover} />
                    </span>
                  </span>
                </span>
                <span className="font-mono text-caption text-text-secondary uppercase">{group.label}</span>
              </button>
            );
          })}
        </div>

        <div
          className="relative aspect-[9/16] w-full overflow-hidden rounded-xl border-2 border-stroke-light bg-background-extra-light"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Cover id={slide.cover} />
          <div className="absolute inset-x-s top-s flex gap-1">
            {current.frames.map((item, index) => (
              <span key={item.caption} className="h-[3px] flex-1 overflow-hidden rounded-full bg-text-primary/15">
                <span
                  className="block h-full bg-text-primary"
                  style={{
                    width: `${index < frame ? 100 : index > frame ? 0 : reduced ? 100 : progress * 100}%`,
                  }}
                />
              </span>
            ))}
          </div>
          <button
            type="button"
            aria-label="Previous"
            onClick={prev}
            className="absolute inset-y-0 left-0 w-1/3"
          />
          <button type="button" aria-label="Next" onClick={next} className="absolute inset-y-0 right-0 w-2/3" />
        </div>
        <p className="text-center text-body-sm text-text-secondary">{slide.caption}</p>
      </div>

      <div className="lg:pt-[105px]">{children}</div>
    </div>
  );
}
