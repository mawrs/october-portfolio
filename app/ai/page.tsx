import type { Metadata } from "next";
import { CaseStudy } from "@/components/case-study";
import type { Project } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI",
  description:
    "An agentic workflow for research, design, and development. Cursor, Figma, and Vercel, as of August 2026.",
};

const workflow: Project = {
  slug: "design-workflow",
  title: "How I'm using AI in 2026",
  headline: "How I'm using AI in 2026",
  meta: "",
  deck: "This is a process note, not one product case study. It shows how I use AI tools to take an idea from research through a tested implementation.",
  lead: [
    "I built this workflow to reduce the time between a product question and a testable answer, while keeping research evidence and design-system quality in the loop. I own the workflow from framing the opportunity through research, prototyping, testing, and documenting the decision.",
    "Previously, validating a direction required a brief, several design rounds, and engineering handoff. Now I can put a realistic prototype in front of users earlier, then invest in polish once the direction is supported by evidence.",
    "I use the workflow with product and engineering partners to frame the question, review feasibility, and align on the final direction through Figma documentation and preview feedback.",
  ],
  cover: "peridot",
  ratio: "wide",
  surfaces: ["work"],
  role: "Product designer",
  timeline: "August 2026",
  team: [],
  skills: [],
  facts: [],
  sections: [
    {
      id: "research",
      label: "Research",
      blocks: [
        {
          type: "p",
          text: "I use Claude to speed up research work. For competitor analysis, I use reusable skills to map the market around a new feature or product space.",
        },
        {
          type: "p",
          text: "I also use Claude to draft discussion guides to prepare for user interviews.",
        },
        {
          type: "p",
          text: "For research synthesis, I use Peridot, a tool I built to find user-feedback evidence and retrieve the supporting clips.",
        },
        { type: "mock", id: "notifications", caption: "Analyzing the competitive landscape in Claude" },
        { type: "mock", id: "peridot", caption: "Pulling user insights & creating a highlight reel" },
      ],
    },
    {
      id: "exploration",
      label: "Exploration",
      blocks: [
        {
          type: "p",
          text: "When I am testing a feature idea, I build a working version in Cursor. A concrete version makes the product tradeoffs easier to see than a description or wireframe alone.",
        },
        {
          type: "p",
          text: "I prototype in code when I need to test behavior or feasibility. When the direction is less defined, I use the first build as a starting point in Figma Make and generate variations to compare a broader range of visual directions.",
        },
        { type: "mock", id: "email", caption: "Generating a new design in Cursor" },
        { type: "mock", id: "photo", caption: "Creating design variations in Figma Make" },
      ],
    },
    {
      id: "refinement",
      label: "Refinement",
      blocks: [
        {
          type: "p",
          text: "Once I choose a direction, I specify the final design with the design system.",
        },
        {
          type: "p",
          text: "Using Figma's MCP, I bring that design back into Cursor and refactor the prototype into components that match our production styles.",
        },
        {
          type: "p",
          text: "I document the final design and the alternatives in Figma so the team can see what changed, why I chose the direction, and what we could revisit later.",
        },
        { type: "mock", id: "calculator", caption: "Converting designs into code with the Figma MCP" },
        { type: "mock", id: "claims", caption: "Documenting designs in Figma" },
      ],
    },
    {
      id: "user-testing",
      label: "User Testing",
      blocks: [
        {
          type: "p",
          text: "After I open a pull request, I use Macroscope to review the code and flag potential issues.",
        },
        {
          type: "p",
          text: "Each pull request has a Vercel Preview I can share with users. I use that feedback to iterate on the same working version.",
        },
        {
          type: "p",
          text: "I tested keeping a separate demo repository, but it created unnecessary maintenance because the design had to stay in sync in two places.",
        },
        { type: "mock", id: "shield", caption: "Debugging with Macroscope" },
        { type: "mock", id: "banking", caption: "Testing out the latest updates in Vercel Preview" },
      ],
    },
  ],
};

export default function AIPage() {
  return (
    <CaseStudy
      project={workflow}
      progress="dark"
      back={false}
      hero="/ai/hero.png"
      heroForeground="/ai/cursor.avif"
      titleInHero={false}
      heroFullBleed
    />
  );
}
