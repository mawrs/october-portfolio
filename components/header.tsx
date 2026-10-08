"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/ai", label: "AI" },
  { href: "/about", label: "About" },
];

const aiSlugs = new Set(["peridot", "transcript-shield"]);

function isActive(pathname: string, href: string) {
  const projectSlug = pathname.startsWith("/projects/") ? pathname.split("/")[2] : "";
  if (href === "/ai") return pathname === "/ai" || aiSlugs.has(projectSlug);
  if (href === "/") return pathname === "/" || (projectSlug !== "" && !aiSlugs.has(projectSlug));
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const onProject = pathname.startsWith("/projects/");

  return (
    <header
      className={
        onProject
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
                active
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
