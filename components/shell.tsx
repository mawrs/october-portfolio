import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh overflow-hidden">
      <div data-scroller className="min-w-0 flex-1 overflow-y-auto">
        <div className="flex min-h-full flex-col">
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
