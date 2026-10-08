"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

const src = "/about-me.MP4";

export function AboutVideo() {
  const previewRef = useRef<HTMLVideoElement>(null);
  const stageRef = useRef<HTMLVideoElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = previewRef.current;
    if (!video || open) return;
    if (video.error) {
      setFailed(true);
      return;
    }
    const onError = () => setFailed(true);
    video.addEventListener("error", onError);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) video.pause();
    else void video.play().catch(() => {});
    return () => video.removeEventListener("error", onError);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const stage = stageRef.current;
    const preview = previewRef.current;
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const scroller = document.querySelector("[data-scroller]");
    const previous = scroller instanceof HTMLElement ? scroller.style.overflow : "";
    if (scroller instanceof HTMLElement) scroller.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      if (scroller instanceof HTMLElement) scroller.style.overflow = previous;
    };
  }, [open]);

  function expand() {
    flushSync(() => setOpen(true));
    const stage = stageRef.current;
    const preview = previewRef.current;
    if (stage && preview) stage.currentTime = preview.currentTime;
    preview?.pause();
    if (!stage) return;
    stage.muted = false;
    stage.volume = 1;
    void stage.play().catch(() => {});
  }

  function close() {
    stageRef.current?.pause();
    setPlaying(false);
    setOpen(false);
  }

  function togglePlayback() {
    const stage = stageRef.current;
    if (!stage) return;
    if (stage.paused) {
      stage.muted = false;
      stage.volume = 1;
      void stage.play().catch(() => {});
      return;
    }
    stage.pause();
  }

  if (failed) return null;

  return (
    <>
      <button
        type="button"
        aria-label="Expand about me"
        aria-expanded={open}
        onClick={expand}
        className={`group fixed bottom-xl right-xl z-30 origin-bottom-right cursor-pointer overflow-hidden rounded-[12px] border-0 bg-transparent p-0 shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out hover:scale-110 focus-visible:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary motion-reduce:transition-none motion-reduce:hover:scale-100 ${open ? "invisible" : ""}`}
      >
        <video
          ref={previewRef}
          className="block h-[194px] w-[109px] object-cover"
          src={src}
          muted
          loop
          playsInline
          preload="auto"
          onError={() => setFailed(true)}
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
          <ExpandIcon />
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
          role="dialog"
          aria-modal="true"
          aria-label="About me"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={(event) => {
              event.stopPropagation();
              close();
            }}
            className="absolute top-l right-l z-10 cursor-pointer border-0 bg-transparent p-0 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <CloseIcon />
          </button>
          <div className="relative" onClick={(event) => event.stopPropagation()}>
            <video
              ref={stageRef}
              className="aspect-[9/16] h-[min(calc(100dvh-96px),calc(92vw*16/9))] w-auto rounded-[20px] object-cover"
              src={src}
              loop
              playsInline
              preload="auto"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />
            <button
              type="button"
              aria-label={playing ? "Pause about me" : "Play about me"}
              onClick={togglePlayback}
              className="absolute inset-0 flex cursor-pointer items-center justify-center border-0 bg-black/25 p-0 opacity-0 transition-opacity duration-200 hover:opacity-100 focus-visible:opacity-100"
            >
              {playing ? <PauseIcon /> : <PlayIcon />}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ExpandIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-8 w-8"
      fill="none"
      stroke="white"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 7h7v7" />
      <path d="M25 7 17 15" />
      <path d="M14 25H7v-7" />
      <path d="M7 25l8-8" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-20 w-20 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]" aria-hidden="true">
      <path fill="white" d="M8 5.2v13.6l12-6.8L8 5.2z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-20 w-20 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]" aria-hidden="true">
      <rect x="12" y="8" width="14" height="48" rx="4" fill="white" />
      <rect x="38" y="8" width="14" height="48" rx="4" fill="white" />
    </svg>
  );
}
