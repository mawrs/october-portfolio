import Link from "next/link";
import { Cover } from "@/components/covers";
import { ReadingProgress } from "@/components/reading-progress";
import { SectionNav } from "@/components/section-nav";
import { type Block, type CoverId, type Project } from "@/lib/content";

export function CaseStudy({
  project,
  chrome = true,
  wideFigures = false,
  progress = "brand",
  back = true,
  hero,
  heroForeground,
  titleInHero = true,
  heroFullBleed = false,
}: {
  project: Project;
  chrome?: boolean;
  wideFigures?: boolean;
  progress?: "brand" | "dark";
  back?: boolean;
  hero?: string;
  heroForeground?: string;
  titleInHero?: boolean;
  heroFullBleed?: boolean;
}) {
  const sections = project.sections.map(({ id, label }) => ({ id, label }));
  const hasOverview = project.sections.some((section) => section.id === "overview");
  const metaParts = project.meta.split(/\s*[·•]\s*/).filter(Boolean);
  const facts = project.facts ?? [
    { label: "Role", values: [project.role] },
    { label: "Timeline", values: [project.timeline] },
    { label: "Team", values: project.team },
    { label: "Skills", values: project.skills },
  ];

  return (
    <>
      {chrome && (
        <div data-case-hero className="bg-background-light">
          {heroFullBleed ? (
            <HeroMedia project={project} hero={hero} heroForeground={heroForeground} />
          ) : (
            <div className={`mx-auto flex w-full flex-col items-center gap-md px-l py-xl ${wideFigures ? "" : "max-w-[777px]"}`}>
              {titleInHero && <h1 className="text-center text-heading-lg font-normal text-text-primary">{project.title}</h1>}
              <HeroMedia project={project} hero={hero} heroForeground={heroForeground} />
              {metaParts.length > 0 && (
                <div className="self-center">
                  <MetaLine parts={metaParts} />
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {chrome && <ReadingProgress tone={progress} />}
      <div className={chrome ? "relative mx-auto w-full max-w-8xl pt-l lg:grid" : "mx-auto w-full max-w-8xl pt-xxxl pb-l"}>
        {chrome && (
          <aside className="z-10 px-l py-s lg:sticky lg:top-s lg:col-start-1 lg:row-start-1 lg:self-start">
            {back && (
              <Link
                href="/"
                className="inline-flex items-center gap-xxs font-mono text-body-sm font-normal text-text-secondary uppercase hover:text-text-primary"
              >
                <ArrowLeft />
                Back
              </Link>
            )}
            <div className={`${back ? "mt-md" : ""} hidden lg:block`}>
              <SectionNav items={sections} />
            </div>
          </aside>
        )}

        <article
          className={`mx-auto w-full px-l lg:col-start-1 lg:row-start-1 ${wideFigures ? "" : "max-w-[777px]"}`}
        >
          {(!chrome || !hasOverview || !titleInHero) && (
            <header className="flex flex-col items-start gap-md py-s">
              {(!chrome || !titleInHero) && (
                <div className="flex flex-col items-start gap-xs">
                  {metaParts.length > 0 && <MetaLine parts={metaParts} />}
                  <h1 className={`text-heading-lg font-normal text-text-primary ${wideFigures ? "" : "max-w-[624px]"}`}>
                    {project.title}
                  </h1>
                </div>
              )}
              {(!hasOverview || project.lead?.length) && (
                <div className="flex flex-col gap-xs">
                  {!hasOverview && <p className="text-body text-text-secondary">{project.deck}</p>}
                  {project.lead?.map((paragraph) => (
                    <p key={paragraph} className="text-body text-text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </header>
          )}

          {!hasOverview && facts.length > 0 && <Facts facts={facts} />}

          {chrome && (
            <div className="pt-md lg:hidden">
              <SectionNav items={sections} orientation="horizontal" />
            </div>
          )}

          <div className="mt-md flex flex-col gap-xl">
            {project.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-l">
                <h2 className="font-mono text-heading-sm font-medium text-text-primary uppercase">
                  {section.label}
                </h2>
                <div className="mt-md flex flex-col gap-xs">
                  {section.blocks
                    .filter((block) => section.id !== "overview" || block.type !== "ul")
                    .map((block, blockIndex) => (
                    <BlockView key={blockIndex} block={block} spaced={blockIndex > 0} wide={wideFigures} />
                    ))}
                </div>
                {section.id === "overview" && facts.length > 0 && <Facts facts={facts} />}
              </section>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}

function HeroMedia({
  project,
  hero,
  heroForeground,
}: {
  project: Project;
  hero?: string;
  heroForeground?: string;
}) {
  return (
    <div className="relative flex aspect-[16/9] max-h-[70vh] w-full items-center justify-center overflow-hidden">
      {hero ? (
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className="flex aspect-[0.865] h-full max-w-[90%] shrink-0 items-center justify-center overflow-hidden rounded-sm border border-stroke-light bg-background-white p-xs">
          <div className="h-full w-full overflow-hidden">
            <Cover id={project.cover} />
          </div>
        </div>
      )}
      {heroForeground && (
        <img
          src={heroForeground}
          alt=""
          className="absolute bottom-0 left-1/2 z-10 w-[min(1160px,88%)] -translate-x-1/2 translate-y-1/3"
        />
      )}
    </div>
  );
}

function BlockView({ block, spaced, wide }: { block: Block; spaced: boolean; wide?: boolean }) {
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
      <div
        className={`flex flex-col gap-md rounded-sm border border-stroke-light bg-background-extra-light p-md sm:flex-row sm:items-stretch sm:gap-s ${
          group ? "mt-md" : ""
        }`}
      >
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
  return <Figure id={block.id} caption={block.caption} wide={wide} />;
}

function Figure({ id, caption, wide }: { id: CoverId; caption?: string; wide?: boolean }) {
  return (
    <figure className="flex flex-col gap-xs">
      <div
        className={
          wide
            ? "aspect-[16/9] overflow-hidden rounded-sm border-2 border-stroke-light bg-background-light"
            : "h-[352px] overflow-hidden rounded-sm border-2 border-stroke-light bg-background-extra-light"
        }
      >
        <Cover id={id} />
      </div>
      {caption && (
        <figcaption className="text-center text-body text-text-secondary leading-[1.45]">{caption}</figcaption>
      )}
    </figure>
  );
}

function MetaLine({ parts }: { parts: string[] }) {
  return (
    <p className="flex items-center gap-xs text-caption text-text-secondary uppercase">
      {parts.map((part, partIndex) => (
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
  );
}

function Facts({ facts }: { facts: Array<{ label: string; values: string[] }> }) {
  return (
    <dl className="mt-md grid grid-cols-2 gap-s rounded-sm border border-stroke-light bg-background-extra-light p-md sm:grid-cols-4">
      {facts.map((fact) => (
        <Meta key={fact.label} label={fact.label} values={fact.values} />
      ))}
    </dl>
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
