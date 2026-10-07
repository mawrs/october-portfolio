import type { Metadata } from "next";
import Link from "next/link";
import { experience, profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume for Martin Tejeda, product designer.",
};

const roles = [
  {
    company: "SouthEast Bank",
    dates: "Mar 2025 – Present",
    title: "Product Designer",
    points: [
      "Led the customer-facing deposit intake for checking, savings, and CDs.",
      "Scoped a multi-product flow down to one product at a time so it could ship.",
      "Designed funding, insufficient funds, invalid KYC, and joint owner states.",
      "Added a loan calculator that compares fixed and variable over the life of the loan.",
    ],
  },
  {
    company: "MDSV Capital",
    dates: "Feb 2023 – Jan 2025",
    title: "Product Designer",
    points: [
      "Product design for a venture firm working with emerging managers and LPs.",
    ],
  },
  {
    company: "Underbelly",
    dates: "Mar 2021 – Nov 2022",
    title: "Product Designer",
    points: [
      "Led product design and research for venture-backed and enterprise teams.",
      "Partnered with Facebook, Square, Slide, and Vivint through discovery, prototyping, and handoff.",
    ],
  },
  {
    company: "Slide",
    dates: "Jun 2022 – Oct 2022",
    title: "Product Designer",
    points: [
      "Turned a twenty-minute phone claim into a self-serve web intake.",
      "Within six months, 45% of claims started without a phone call.",
    ],
  },
  {
    company: "Square",
    dates: "Sep 2021 – Dec 2021",
    title: "Product Designer",
    points: [
      "Built an email component library with the design system team.",
      "Grouped outgoing mail into seven thematic buckets so sellers could recognize a real Square email.",
    ],
  },
  {
    company: "Facebook",
    dates: "Apr 2021 – Sep 2021",
    title: "Product Designer",
    points: [
      "Designed Cross-Profile Notifications for people managing several Pages.",
      "Shipped Page switching and settings for which notifications arrive, and from where.",
    ],
  },
];

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-[820px] px-6 pt-16 pb-20 sm:pt-20 lg:pt-[18vh]">
      <header className="border-b border-foreground/10 pb-8">
        <h1 className="text-heading-lg font-normal text-text-primary">
          {profile.name}
        </h1>
        <p className="mt-4 text-[16px] text-foreground/70">
          Product designer · {profile.location}
        </p>
        <p className="mt-4 max-w-[62ch] text-[16px] leading-7 text-foreground/80">
          Seven years building clear, considered interfaces across fintech, insurance, and consumer
          products. I take ambiguous problems through research, flows, and interface, and I build
          the tools around that work.
        </p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
          <a className="hover:text-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="hover:text-primary" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <Link className="hover:text-primary" href="/">
            Selected work
          </Link>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="text-[12px] tracking-[0.16em] text-foreground/50 uppercase">Experience</h2>
        <div className="mt-6 space-y-8">
          {roles.map((role) => (
            <article key={`${role.company}-${role.dates}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-[18px]">
                  {role.title}, {role.company}
                </h3>
                <p className="text-[14px] text-foreground/50">{role.dates}</p>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-6 text-foreground/80">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-[12px] tracking-[0.16em] text-foreground/50 uppercase">Independent</h2>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-[15px] leading-6 text-foreground/80">
          <li>Transcript Shield — transcript cleanup and PII redaction before AI analysis.</li>
          <li>Peridot — searchable, cited interview insights, with a path into Linear. Launched 2026.</li>
        </ul>
      </section>

      <section className="mt-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-[12px] tracking-[0.16em] text-foreground/50 uppercase">Education</h2>
          <p className="mt-3 text-[15px] leading-6">
            User Experience Design
            <span className="block text-foreground/60">General Assembly</span>
          </p>
          <p className="mt-3 text-[15px] leading-6">
            B.S. Nutritional Science
            <span className="block text-foreground/60">California State University, Los Angeles</span>
          </p>
        </div>
        <div>
          <h2 className="text-[12px] tracking-[0.16em] text-foreground/50 uppercase">Also</h2>
          <p className="mt-3 text-[15px] leading-6 text-foreground/80">
            English and Spanish. Certificate of Appreciation from the City of Los Angeles for the
            Mayor&apos;s Cup.
          </p>
          <p className="mt-3 text-[14px] text-foreground/50">
            Timeline on the work page: {experience.map((job) => job.company).join(", ")}.
          </p>
        </div>
      </section>
    </div>
  );
}
