import Link from "next/link";
import { Cover } from "@/components/covers";
import type { CoverId } from "@/lib/content";

const ratios = {
  square: "aspect-[4/3]",
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  one: "aspect-square",
  long: "aspect-[4/5]",
};

export function ProjectCard({
  href,
  title,
  meta,
  company,
  category,
  cover,
  ratio = "square",
  centered = false,
  className = "",
}: {
  href: string;
  title: string;
  meta?: string;
  company?: string;
  category?: string;
  cover: CoverId;
  ratio?: keyof typeof ratios;
  centered?: boolean;
  className?: string;
}) {
  return (
    <Link href={href} className={`group flex flex-col gap-xs ${className}`}>
      <div
        className={`overflow-hidden rounded-sm border-2 border-stroke-light bg-background-light ${centered ? "flex aspect-[16/9] items-center justify-center" : ratios[ratio]}`}
      >
        <div
          className={`transition-transform duration-500 ease-out group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${centered ? "flex h-[74%] w-[36%] items-center justify-center overflow-hidden rounded-sm border border-stroke-light bg-background-white p-xs" : "h-full w-full"}`}
        >
          <div className={centered ? "h-full w-full overflow-hidden" : "contents"}>
            <Cover id={cover} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-s">
        <h3 className="text-body-sm text-text-primary">{title}</h3>
        {company && category ? (
          <p className="flex shrink-0 items-center gap-xs text-caption text-text-secondary uppercase">
            <span>{company}</span>
            <span className="font-mono text-body-sm" aria-hidden>
              •
            </span>
            <span>{category}</span>
          </p>
        ) : (
          <p className="shrink-0 text-caption text-text-secondary uppercase">{meta}</p>
        )}
      </div>
    </Link>
  );
}
