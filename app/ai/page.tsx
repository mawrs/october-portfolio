import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { getProject } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI",
  description: "AI products designed and built by Martin Tejeda.",
};

const projects: Array<{ slug: string; company: string; category: string; ratio: "long" }> = [
  { slug: "peridot", company: "Peridot", category: "AI", ratio: "long" },
  { slug: "transcript-shield", company: "Transcript Shield", category: "AI", ratio: "long" },
];

export default function AIPage() {
  return (
    <div className="mx-auto w-full max-w-8xl pt-xxxl">
      <section className="flex flex-col items-center px-l py-s">
        <h1 className="max-w-[624px] text-center text-heading-lg font-normal text-text-primary">
          Exploring the interactions we have with AI
        </h1>
      </section>

      <div className="grid grid-cols-1 items-start gap-md px-l pt-s md:grid-cols-2">
        {projects.map((item) => {
          const project = getProject(item.slug);
          if (!project) return null;
          return (
            <ProjectCard
              key={project.slug}
              href={`/projects/${project.slug}`}
              title={project.title}
              company={item.company}
              category={item.category}
              cover={project.cover}
              ratio={item.ratio}
            />
          );
        })}
      </div>
    </div>
  );
}
