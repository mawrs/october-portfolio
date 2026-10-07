import Link from "next/link";
import { Cover } from "@/components/covers";
import { ReadingProgress } from "@/components/reading-progress";
import { SectionNav } from "@/components/section-nav";
import { type Block, type CoverId, type Project } from "@/lib/content";

export function CaseStudy({ project }: { project: Project }) {
  const sections = project.sections.map(({ id, label }) => ({ id, label }));
  const metaParts = project.meta.split(/\s*[·•]\s*/).filter(Boolean);

  return (
    <>
      <ReadingProgress />
      <div className="relative mx-auto w-full max-w-8xl pt-l lg:grid">
        <aside className="z-10 px-l py-s lg:sticky lg:top-[100px] lg:col-start-1 lg:row-start-1 lg:self-start">
          <Link
            href="/"
            className="inline-flex items-center gap-xxs font-mono text-body-sm font-normal text-text-secondary uppercase hover:text-text-primary"
          >
            <ArrowLeft />
            Back
          </Link>
          <div className="mt-md hidden lg:block">
            <SectionNav items={sections} />
          </div>
        </aside>

        <article className="mx-auto w-full max-w-[777px] px-l lg:col-start-1 lg:row-start-1">
          <header className="flex flex-col items-start gap-md py-s">
            <div className="flex flex-col items-start gap-xs">
              <p className="flex items-center gap-xs text-caption text-text-secondary uppercase">
                {metaParts.map((part, partIndex) => (
                  <span key={part} className="flex items-center gap-xs">
                    {partIndex > 0 && (
                      <span aria-hidden className="font-mono text-body-sm">
                        •
                      </span>
                    )}
                    {part}
                  </span>
                ))}
              </p>
              <h1 className="max-w-[624px] text-heading-lg font-normal text-text-primary">{project.title}</h1>
            </div>
            <p className="text-body text-text-secondary">{project.deck}</p>
          </header>

          <div className="flex flex-col gap-s pt-s">
            <div className="h-[352px] overflow-hidden rounded-sm border-2 border-stroke-light bg-background-extra-light">
              <Cover id={project.cover} />
            </div>
            <dl className="grid grid-cols-2 gap-s sm:grid-cols-4">
              <Meta label="Role" values={[project.role]} />
              <Meta label="Timeline" values={[project.timeline]} />
              <Meta label="Team" values={project.team} />
              <Meta label="Skills" values={project.skills} />
            </dl>
          </div>

          <div className="pt-md lg:hidden">
            <SectionNav items={sections} orientation="horizontal" />
          </div>

          <div className="mt-md flex flex-col gap-xl">
            {project.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="font-mono text-heading-sm font-medium text-text-primary uppercase">
                  {section.label}
                </h2>
                <div className="mt-md flex flex-col gap-xs">
                  {section.blocks.map((block, blockIndex) => (
                    <BlockView key={blockIndex} block={block} spaced={blockIndex > 0} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}

function BlockView({ block, spaced }: { block: Block; spaced: boolean }) {
  const group = spaced && (block.type === "h3" || block.type === "h2" || block.type === "stats");

  if (block.type === "h2" || block.type === "h3") {
    return <h3 className={`text-body font-medium text-text-primary ${group ? "mt-s" : ""}`}>{block.text}</h3>;
  }
  if (block.type === "p") {
    return <p className="text-body text-text-secondary">{block.text}</p>;
  }
  if (block.type === "ul") {
    return (
      <ul className="list-disc pl-md text-body text-text-secondary">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "stats") {
    return (
      <div className={`flex flex-col gap-md py-md sm:flex-row sm:items-stretch sm:gap-s ${group ? "mt-s" : ""}`}>
        {block.items.map((item, index) => (
          <div key={item.value + item.label} className="contents">
            {index > 0 && <div aria-hidden className="hidden w-px bg-stroke-light sm:block" />}
            <div className="flex min-w-0 flex-1 flex-col gap-xs">
              <p className="text-subheading font-medium text-text-primary">{item.value}</p>
              <p className="text-caption text-text-secondary">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (block.type === "link") {
    return (
      <a href={block.href} className="text-body text-text-brand" target="_blank" rel="noreferrer">
        {block.label}
      </a>
    );
  }
  return <Figure id={block.id} caption={block.caption} />;
}

function Figure({ id, caption }: { id: CoverId; caption?: string }) {
  return (
    <figure className="flex flex-col gap-xs">
      <div className="h-[352px] overflow-hidden rounded-sm border-2 border-stroke-light bg-background-extra-light">
        <Cover id={id} />
      </div>
      {caption && (
        <figcaption className="text-center text-body text-text-secondary leading-[1.45]">{caption}</figcaption>
      )}
    </figure>
  );
}

function Meta({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="flex flex-col gap-xs">
      <dt className="text-body-sm text-text-secondary uppercase">{label}</dt>
      <div className="flex flex-col gap-1px">
        {values.map((value) => (
          <dd key={value} className="text-body-sm text-text-primary">
            {value}
          </dd>
        ))}
      </div>
    </div>
  );
}

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M10 3.5 5.5 8 10 12.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
