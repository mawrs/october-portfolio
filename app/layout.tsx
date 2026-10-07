import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Sans_Condensed } from "next/font/google";
import { Shell } from "@/components/shell";
import "./globals.css";

const lausanne = localFont({
  src: [
    { path: "./fonts/TWKLausannePan-200.woff2", weight: "200", style: "normal" },
    { path: "./fonts/TWKLausannePan-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/TWKLausannePan-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/TWKLausannePan-800.woff2", weight: "800", style: "normal" },
    { path: "./fonts/TWKLausannePan-1000.woff2", weight: "1000", style: "normal" },
  ],
  variable: "--font-lausanne",
  display: "swap",
});

const plex = IBM_Plex_Sans_Condensed({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Martin Tejeda | Product Designer",
    template: "%s · Martin Tejeda",
  },
  description:
    "Martin Tejeda is a product designer with 7 years building clear, considered interfaces. Recent work includes SouthEast Bank, Slide, Facebook, Square, Transcript Shield, and Peridot.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lausanne.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="h-full font-sans text-foreground">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
