"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links: Array<{ href: string; label: string; external?: boolean }> = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/martin-tejeda-resume.pdf", label: "Resume", external: true },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname.startsWith("/projects");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stroke-light bg-background-white">
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between px-l py-s">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="rounded-sm px-s py-xs font-mono text-body-sm font-normal text-text-primary"
        >
          MARTIN.DESIGN
        </Link>

        <nav className="hidden items-center gap-[6px] md:flex">
          {links.map((link) => {
            const active = !link.external && isActive(pathname, link.href);
            const className = `rounded-sm px-s py-xs font-mono text-body-sm uppercase ${
              active
                ? "font-medium text-text-brand"
                : "font-normal text-text-secondary hover:text-text-primary"
            }`;
            if (link.external) {
              return (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className={className}>
                  {link.label}
                </a>
              );
            }
            return (
              <Link key={link.href} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="rounded-sm p-xs md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="block h-px w-5 bg-text-primary" />
          <span className="mt-1.5 block h-px w-5 bg-text-primary" />
        </button>
      </div>
      {open && (
        <nav className="mx-auto flex w-full max-w-8xl flex-col border-t border-stroke-light px-l py-s md:hidden">
          {links.map((link) => {
            const active = !link.external && isActive(pathname, link.href);
            const className = `rounded-sm px-s py-xs font-mono text-body-sm uppercase ${
              active ? "font-medium text-text-brand" : "font-normal text-text-secondary"
            }`;
            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className={className}
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={className}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
