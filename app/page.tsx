import { ProjectCard } from "@/components/project-card";
import { experience, getProject } from "@/lib/content";

const columns: Array<
  Array<{ slug: string; company: string; category: string; ratio: "one" | "long" }>
> = [
  [
    { slug: "southeast", company: "Southeast Bank", category: "Fintech", ratio: "one" },
    { slug: "loans", company: "Southeast Bank", category: "Fintech", ratio: "one" },
    { slug: "facebook", company: "Facebook", category: "Consumer", ratio: "one" },
  ],
  [
    { slug: "peridot", company: "Peridot", category: "AI", ratio: "long" },
    { slug: "transcript-shield", company: "Transcript Shield", category: "AI", ratio: "long" },
    { slug: "slide", company: "Slide", category: "Insurtech", ratio: "long" },
  ],
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-8xl pt-xxxl">
      <section className="flex flex-col gap-xl px-l py-s lg:flex-row lg:items-center lg:justify-between">
        <h1 className="max-w-[624px] text-heading-lg font-normal text-text-primary">
          I&apos;m Martin, a product designer who engineers
        </h1>
        <ul className="flex w-full max-w-[344px] shrink-0 flex-col gap-xs">
          {experience.map((job) => (
            <li key={`${job.company}-${job.year}`} className="flex items-center justify-between gap-md">
              <span className="flex items-center gap-md">
                <span className="text-body-sm text-text-secondary">{job.year}</span>
                {job.href ? (
                  <a
                    href={job.href}
                    className="text-body-sm text-text-primary hover:text-text-brand"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {job.company}
                  </a>
                ) : (
                  <span className="text-body-sm text-text-primary">{job.company}</span>
                )}
              </span>
              <span className="text-body-sm text-text-secondary">{job.role}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="grid grid-cols-1 items-start gap-md px-l pt-s md:grid-cols-2">
        {columns.map((column) => (
          <div key={column[0].slug} className="flex flex-col gap-l">
            {column.map((item) => {
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
        ))}
      </div>
    </div>
  );
}
