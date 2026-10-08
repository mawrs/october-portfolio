"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/ai", label: "AI" },
  { href: "/about", label: "About" },
];

function isActive(pathname: string, href: string) {
  if (pathname.startsWith("/projects/")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const onAi = pathname === "/ai";
  const onProject = pathname.startsWith("/projects/");

  return (
    <header
      className={
        onAi
          ? "absolute inset-x-0 top-0 z-40 border-b border-transparent bg-transparent"
          : onProject
            ? "border-b border-transparent bg-background-light"
            : "sticky top-0 z-40 border-b border-stroke-light bg-background-white"
      }
    >
      <nav className="mx-auto flex w-full max-w-8xl items-center justify-center gap-l px-l py-s md:gap-xl">
        {links.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-sm px-s py-xs font-mono text-body-sm uppercase ${
                onAi
                  ? active
                    ? "font-medium text-white"
                    : "font-normal text-white hover:text-white"
                  : active
                    ? "font-medium text-text-brand"
                    : "font-normal text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
