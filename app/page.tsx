import { ProjectCard } from "@/components/project-card";
import { experience, getProject, profile } from "@/lib/content";

const southeast = experience.find((item) => item.company === "SouthEast Bank");

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
      <section className="flex flex-col items-center gap-md px-l py-s">
        <h1 className="max-w-[840px] text-center text-display font-normal text-text-primary sm:text-display-lg">
          Martin is a product designer who codes
        </h1>
        <p className="max-w-[640px] text-center text-body-lg text-balance text-text-secondary">
          Current product design lead at{" "}
          <a
            className="text-text-primary underline decoration-stroke-light underline-offset-4 hover:text-text-brand"
            href={southeast?.href}
            target="_blank"
            rel="noreferrer"
          >
            SouthEast Bank
          </a>, and looking to join a startup. If you&apos;re hiring, please{" "}
          <a
            className="text-text-primary underline decoration-stroke-light underline-offset-4 hover:text-text-brand"
            href={`mailto:${profile.email}`}
          >
            reach out
          </a>.
        </p>
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
