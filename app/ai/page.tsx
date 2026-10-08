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
  deck: "Over the last few years I've slowly decreased the hours spent in Figma in favor of a more agentic workflow that closes the loop on research, design, and development.",
  lead: [
    "My workflow revolves heavily around Cursor's IDE to make pixel-perfect design changes and Vercel for prototype testing.",
    "This workflow still works for me as of August 2026, but things change. Check out my process below, and the tools I use at each step.",
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
          text: "I use Claude for a lot of my research-related work. For competitor analysis, I have a few Claude Skills to map out the competitive landscape of a new feature or product space we are trying to enter.",
        },
        {
          type: "p",
          text: "I also use Claude to draft discussion guides to prepare for user interviews.",
        },
        {
          type: "p",
          text: "For research synthesis, I've actually built my own tool called Peridot that synthesizes user feedback and retrieves clips for me to use as evidence.",
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
          text: "If I'm testing out a new feature, I will build it directly in Cursor to understand the potential shape it can take within the product.",
        },
        {
          type: "p",
          text: "If the feature or product direction is less defined and needs further exploration, I'll take the Cursor-generated design and paste it into Figma Make to create five additional versions to explore a broader range of directions.",
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
          text: "Once I've decided on a direction, I'll spec out the final design using the design system.",
        },
        {
          type: "p",
          text: "Using Figma's MCP, I will then feed the new design back into Cursor and refactor the Cursor-generated design using proper components that match our styles.",
        },
        {
          type: "p",
          text: "The final design also gets documented in Figma for the rest of the team to see. I try to include all design iterations and the thinking that went behind choosing the final design in case we ever want to revert to an old design or go another direction.",
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
          text: "After pushing the PR to Github, I run Macroscope to review my code and flag any potential issues.",
        },
        {
          type: "p",
          text: "Each PR gets a Vercel Preview link I can send to users for testing. As feedback comes in, I iterate on that same branch.",
        },
        {
          type: "p",
          text: "I've experimented with cloning my entire repo to have a \"Demo Repo\" but it was a lot of work to maintain the exact same design on both repos.",
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
    />
  );
}
