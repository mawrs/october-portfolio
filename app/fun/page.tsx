import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { funLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fun",
  description: "Side projects and the practice around them.",
};

export default function FunPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-12 px-6 pt-16 pb-20 sm:pt-20 lg:gap-8 lg:pt-[26vh]">
      <div className="max-w-[18ch]">
        <h1 className="text-heading-lg font-normal text-text-primary">
          Tools for the messy middle, and the hours outside them.
        </h1>
      </div>
      <p className="max-w-[62ch] text-[16px] leading-7 text-foreground/80">
        Design is the practice. On the side I build software for the stretch between an interview
        and a decision. Before that I learned a camera on a studio cyc wall. The rest of the time
        I am trying to become a snowboarder and a fly fisherman.
      </p>
      <div className="columns-1 gap-x-6 sm:columns-2 lg:columns-3">
        {funLinks.map((item) => (
          <div key={item.href} className="mb-16">
            <ProjectCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
