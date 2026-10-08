import { profile } from "@/lib/content";

const credits = ["Designed in Figma", "Coded in Cursor", "Hosted on Vercel"];

const links = [
  { href: "/martin-tejeda-resume.pdf", label: "Resume", external: true },
  { href: `mailto:${profile.email}`, label: "Email" },
  { href: profile.linkedin, label: "LinkedIn", external: true },
  { href: profile.x, label: "X", external: true },
  { href: profile.github, label: "GitHub", external: true },
];

export function Footer() {
  return (
    <footer className="mt-xxxl border-t border-stroke-light bg-background-white">
      <div className="mx-auto flex w-full max-w-8xl flex-col gap-s px-l py-s md:flex-row md:items-center md:justify-between">
        <p className="flex flex-wrap items-center gap-xs font-mono text-body-sm text-text-secondary">
          {credits.map((credit, index) => (
            <span key={credit} className="flex items-center gap-xs py-xs">
              {index > 0 && <span aria-hidden>•</span>}
              <span className="uppercase">{credit}</span>
            </span>
          ))}
        </p>
        <nav className="flex flex-wrap items-center gap-[6px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-sm px-s py-xs font-mono text-body-sm text-text-primary uppercase hover:text-text-brand"
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
