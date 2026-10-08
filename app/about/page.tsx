import type { Metadata } from "next";
import { Stories, type StoryGroup } from "@/components/stories";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Martin Tejeda, product designer in Salt Lake City.",
};

const groups: StoryGroup[] = [
  {
    id: "health",
    label: "Health",
    frames: [
      { cover: "photo", caption: "Teaching pediatric obesity management" },
      { cover: "claims", caption: "CrossFit coach" },
      { cover: "email", caption: "Physical therapy assistant" },
    ],
  },
  {
    id: "design",
    label: "Design",
    frames: [
      { cover: "shield", caption: "General Assembly" },
      { cover: "peridot", caption: "Building a portfolio" },
      { cover: "banking", caption: "Landed at Underbelly" },
    ],
  },
  {
    id: "outside",
    label: "Outside",
    frames: [
      { cover: "snow", caption: "Snowboarding" },
      { cover: "outside", caption: "Fishing" },
      { cover: "coast", caption: "Walking my dog" },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-8xl px-l pt-xxxl pb-l">
      <Stories groups={groups}>
        <header className="flex max-w-[720px] flex-col items-start gap-md">
          <h1 className="max-w-[624px] text-heading-lg font-normal text-text-primary">
            I design to improve the qualify of life of others.
          </h1>
          <div className="flex w-full flex-col gap-[28px] text-body-lg text-text-secondary">
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
      </Stories>
    </div>
  );
}
