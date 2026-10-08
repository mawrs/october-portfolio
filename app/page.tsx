import { ProjectCard } from "@/components/project-card";
import { getProject } from "@/lib/content";

const projects: Array<{ slug: string; company: string; category: string }> = [
  { slug: "southeast", company: "Southeast Bank", category: "Fintech" },
  { slug: "loans", company: "Southeast Bank", category: "Fintech" },
  { slug: "facebook", company: "Facebook", category: "Consumer" },
  { slug: "peridot", company: "Peridot", category: "AI" },
  { slug: "transcript-shield", company: "Transcript Shield", category: "AI" },
  { slug: "slide", company: "Slide", category: "Insurtech" },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-8xl pt-xxxl">
      <section className="flex flex-col items-center px-l py-s">
        <h1 className="max-w-[840px] text-center text-display font-normal text-text-primary sm:text-display-lg">
          Hi, I&apos;m Martin, a product designer, builder, and entrepreneur.
        </h1>
      </section>

      <div className="flex flex-col gap-l px-l pt-s">
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
              centered
            />
          );
        })}
      </div>
    </div>
  );
}
