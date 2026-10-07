import type { CoverId } from "@/lib/content";

export function Cover({ id }: { id: CoverId }) {
  return <div data-cover={id} className="h-full w-full bg-background-light" />;
}
