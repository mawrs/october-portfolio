import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center px-l text-center">
      <div className="w-full min-w-0">
        <h1 className="text-heading-lg font-normal text-balance text-text-primary md:whitespace-nowrap">
          Looks like you found a dead end.
        </h1>
        <p className="mt-4 text-body text-balance text-text-secondary md:whitespace-nowrap">
          If you&apos;re looking for my recent projects, you can find those{" "}
          <Link href="/" className="text-text-primary underline decoration-stroke-light underline-offset-4 hover:text-text-brand">
            here
          </Link>.
        </p>
      </div>
    </div>
  );
}
