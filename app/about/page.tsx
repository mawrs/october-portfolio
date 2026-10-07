import type { Metadata } from "next";
import { Cover } from "@/components/covers";
import { profile, type CoverId } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Martin Tejeda, product designer in Salt Lake City.",
};

const groups: Array<{
  id?: string;
  label: string;
  frames: Array<{ cover: CoverId; caption: string }>;
}> = [
  {
    label: "01. Designer",
    frames: [
      { cover: "photo", caption: "Underbelly" },
      { cover: "claims", caption: "Slide" },
      { cover: "email", caption: "Square" },
    ],
  },
  {
    label: "02. Builder",
    frames: [
      { cover: "shield", caption: "Transcript Shield" },
      { cover: "peridot", caption: "Peridot" },
      { cover: "banking", caption: "SouthEast Bank" },
    ],
  },
  {
    id: "outside",
    label: "03. Outside",
    frames: [
      { cover: "outside", caption: "Fly fishing in Montana" },
      { cover: "snow", caption: "Learning to snowboard" },
    ],
  },
  {
    label: "04. Home",
    frames: [
      { cover: "coast", caption: "San Diego" },
      { cover: "snow", caption: "Salt Lake City" },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-8xl pt-xxxl">
      <header className="flex flex-col items-start gap-md px-l py-s">
        <h1 className="max-w-[624px] text-heading-lg font-normal text-text-primary">
          I design to improve the qualify of life of others.
        </h1>
        <div className="flex w-full max-w-[852px] flex-col gap-[28px] text-body-lg text-text-secondary">
          <p>
            I think deeply about people, and how they might interpret my work. Before transitioning
            into design, I had a career as a healthcare professional and personal trainer. I believe
            my background set the foundation for building a better future those of us who hang out
            online.
          </p>
          <p>
            I&apos;m currently exploring the possibilities of AI; more specifically, the interactions
            we have with AI.
          </p>
          <p>
            Feel free to reach out on{" "}
            <a
              className="text-text-primary underline decoration-stroke-light underline-offset-4 hover:text-text-brand"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              className="text-text-primary underline decoration-stroke-light underline-offset-4 hover:text-text-brand"
              href={profile.x}
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
            , or via{" "}
            <a
              className="text-text-primary underline decoration-stroke-light underline-offset-4 hover:text-text-brand"
              href={`mailto:${profile.email}`}
            >
              email
            </a>
            .
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-md px-l pt-s">
        {groups.map((group) => (
          <section key={group.label} id={group.id} className="flex scroll-mt-24 flex-col gap-xs">
            <h2 className="text-caption text-text-secondary uppercase">{group.label}</h2>
            <div className="grid grid-cols-1 gap-xs sm:grid-cols-3">
              {group.frames.map((frame) => (
                <figure key={frame.caption} className="min-w-0">
                  <div className="h-[352px] overflow-hidden rounded-sm border-2 border-stroke-light bg-background-extra-light">
                    <Cover id={frame.cover} />
                  </div>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
