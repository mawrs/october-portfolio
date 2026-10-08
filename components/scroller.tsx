"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, type ReactNode } from "react";

export function Scroller({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  useLayoutEffect(() => {
    if (window.location.hash) return;
    const scroller = ref.current;
    if (!scroller) return;
    const behavior = scroller.style.scrollBehavior;
    scroller.style.scrollBehavior = "auto";
    scroller.scrollTop = 0;
    scroller.style.scrollBehavior = behavior;
  }, [pathname]);

  return (
    <div ref={ref} data-scroller className="min-w-0 flex-1 overflow-y-auto scroll-smooth">
      {children}
    </div>
  );
}
