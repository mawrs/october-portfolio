export type CoverId =
  | "notifications"
  | "email"
  | "claims"
  | "banking"
  | "calculator"
  | "shield"
  | "peridot"
  | "photo"
  | "outside"
  | "coast"
  | "snow";

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "stats"; items: Array<{ value: string; label: string }> }
  | { type: "mock"; id: CoverId; caption?: string }
  | { type: "link"; href: string; label: string };

export type Section = {
  id: string;
  label: string;
  blocks: Block[];
};

export type Project = {
  slug: string;
  title: string;
  headline: string;
  meta: string;
  cover: CoverId;
  ratio: "square" | "tall" | "wide";
  surfaces: Array<"work" | "fun">;
  deck: string;
  role: string;
  timeline: string;
  team: string[];
  skills: string[];
  lead?: string[];
  facts?: Array<{ label: string; values: string[] }>;
  sections: Section[];
};

export const experience: Array<{
  year: string;
  company: string;
  role: string;
  href?: string;
}> = [
  {
    year: "2025",
    company: "SouthEast Bank",
    role: "Product Design Lead",
    href: "https://www.southeastbank.com/",
  },
  {
    year: "2023",
    company: "MDSV Capital",
    role: "Sr. Product Designer",
    href: "https://www.mdsv.vc/",
  },
  {
    year: "2021",
    company: "Underbelly",
    role: "Product Designer",
    href: "https://www.underbelly.is/",
  },
];

import { projects } from "@/lib/projects";

export { projects };

export const funLinks: Array<{
  href: string;
  title: string;
  meta: string;
  cover: CoverId;
  ratio: Project["ratio"];
}> = [
  {
    href: "/projects/transcript-shield",
    title: "Correct it, then redact it",
    meta: "Transcript Shield · In progress",
    cover: "shield",
    ratio: "tall",
  },
  {
    href: "/projects/peridot",
    title: "Cite the minute",
    meta: "Peridot · Launched 2026",
    cover: "peridot",
    ratio: "square",
  },
  {
    href: "/projects/photography",
    title: "The cyc wall",
    meta: "Underbelly · Personal",
    cover: "photo",
    ratio: "square",
  },
  {
    href: "/about#outside",
    title: "Snow, rivers, and a slow second sport",
    meta: "Salt Lake City · Ongoing",
    cover: "outside",
    ratio: "tall",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function workProjects() {
  return projects.filter((project) => project.surfaces.includes("work"));
}

export const profile = {
  name: "Martin Tejeda",
  role: "Product Designer",
  email: "contact@martin.design",
  linkedin: "https://www.linkedin.com/in/mawrs",
  x: "https://x.com/mawrrs",
  github: "https://github.com/mawrs",
  location: "Salt Lake City",
  site: "https://www.martin.design",
};
