import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Scroller } from "@/components/scroller";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh overflow-hidden">
      <Scroller>
        <div className="relative flex min-h-full flex-col">
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </Scroller>
    </div>
  );
}
