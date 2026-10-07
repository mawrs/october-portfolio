"use client";

import { useEffect, useState } from "react";

export function SectionNav({
  items,
  orientation = "vertical",
}: {
  items: Array<{ id: string; label: string }>;
  orientation?: "vertical" | "horizontal";
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  const ids = items.map((item) => item.id).join("|");

  useEffect(() => {
    const nodes = ids
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const scroller = document.querySelector("[data-scroller]");
    if (!scroller) return;

    const mark = () => {
      const line = 160;
      let current = nodes[0].id;
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= line) current = node.id;
      }
      setActive(current);
    };

    mark();
    scroller.addEventListener("scroll", mark, { passive: true });
    return () => scroller.removeEventListener("scroll", mark);
  }, [ids]);

  return (
    <nav
      className={
        orientation === "horizontal"
          ? "flex gap-s overflow-x-auto"
          : "flex flex-col items-start gap-xs"
      }
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`shrink-0 text-body-sm hover:text-text-primary ${
            active === item.id ? "text-text-primary" : "text-text-secondary"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
