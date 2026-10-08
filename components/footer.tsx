import { profile } from "@/lib/content";

const links = [
  { href: "/martin-tejeda-resume.pdf", label: "Resume", external: true },
  { href: `mailto:${profile.email}`, label: "Email" },
  { href: profile.linkedin, label: "LinkedIn", external: true },
  { href: profile.x, label: "X", external: true },
  { href: profile.github, label: "GitHub", external: true },
];

export function Footer() {
  return (
    <footer className="mt-xxxl border-t border-stroke-light bg-background-dark">
      <nav className="mx-auto flex w-full max-w-8xl flex-wrap items-center justify-center gap-l px-l py-s md:gap-xl">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-sm px-s py-xs font-mono text-body-sm text-text-white uppercase hover:text-primary-periwinkle"
            {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
