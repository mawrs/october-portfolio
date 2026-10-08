import type { Project } from "@/lib/content";

export const projects: Project[] = [
  {
    slug: "facebook",
    title: "Three Pages, one account",
    headline: "Cross-profile notifications",
    meta: "Facebook · Shipped 2021",
    deck: "People running three or more Facebook Pages were losing the day to a single notification pile. The fix that shipped was smaller than a new inbox: stay in the account you already have, and switch which Page you are hearing from.",
    cover: "notifications",
    ratio: "wide",
    surfaces: ["work"],
    role: "Page switch and notification settings",
    timeline: "Apr – Sep 2021",
    team: ["Page admin product"],
    skills: ["Interaction design", "Settings", "Prototyping"],
    sections: [
      {
        id: "overview",
        label: "Overview",
        blocks: [
          {
            type: "p",
            text: "Page admins do not run one Page. The people this was for were running three or more, and every Page produced its own stream of comments, messages, and reviews. Facebook treated that as one pile attached to one account. Reading it meant either drowning, or logging out and back in as a different Page.",
          },
          {
            type: "p",
            text: "I worked on the interaction that lets an admin move between those streams without swapping the account, and on the settings where they decide which kinds of notifications are worth a ping, and from which Pages.",
          },
          {
            type: "p",
            text: "I owned the Page switch and notification settings from existing-flow mapping through prototypes and engineering handoff. The Pages PM, content design, and engineering set scope and technical constraints; I designed the interaction and its states.",
          },
          {
            type: "ul",
            items: [
              "Role: Product designer on the Page-switching interaction and notification settings.",
              "Who it was for: admins running three or more Pages.",
              "Timeline: April to September 2021.",
              "Outcome: shipped as Cross-Profile Notifications.",
            ],
          },
        ],
      },
      {
        id: "background",
        label: "Background",
        blocks: [
          {
            type: "h3",
            text: "The notification list was organized around the wrong thing",
          },
          {
            type: "p",
            text: "A comment on a shop Page and a review on a studio Page are different jobs, but Facebook showed them in one account-level list. The work happened at the Page level. As admins added Pages, the list grew but the interface did not help them separate the work.",
          },
          {
            type: "stats",
            items: [
              { value: "3+", label: "Pages was the point where the single pile stopped being manageable." },
              { value: "1", label: "Account. The useful switch did not require a second login." },
              { value: "2", label: "Surfaces I owned: the Page switch, and the settings behind it." },
            ],
          },
          {
            type: "h3",
            text: "Why we did not build a new notification inbox",
          },
          {
            type: "p",
            text: "Switching the whole Facebook account just to see another Page's notifications was too disruptive. I explored several control models with the team and chose an in-place Page switch because it changed notification context without making admins leave their account.",
          },
        ],
      },
      {
        id: "approach",
        label: "Approach",
        blocks: [
          {
            type: "p",
            text: "The design question was: what is the smallest change that lets an admin switch context? A new inbox would have created a second product. A Page switch works inside the notification list admins already use.",
          },
          {
            type: "h3",
            text: "Separate the stream from the settings",
          },
          {
            type: "p",
            text: "Switching and filtering are different jobs. Switching says which Page you are looking at right now. Settings say which types of events, from which Pages, are allowed to interrupt you at all. Putting both in one control would have made every glance into a configuration task. They shipped as a pair: a switch on the stream, and a settings model underneath it.",
          },
          {
            type: "mock",
            id: "notifications",
            caption: "Study of the Page switch. The account stays. The stream changes.",
          },
        ],
      },
      {
        id: "solution",
        label: "Solution",
        blocks: [
          {
            type: "p",
            text: "Cross-Profile Notifications is the name it shipped under. An admin stays in the account they are already using, moves between Page notification streams in place, and chooses notification types per Page.",
          },
          {
            type: "ul",
            items: [
              "A Page switch on the notification stream, so context changes without an account swap.",
              "Settings for which types of notifications arrive.",
              "Those settings scoped per Page, so a noisy Page can be quiet without silencing the others.",
              "Each notification identifies its source Page before an admin opens it.",
            ],
          },
        ],
      },
      {
        id: "outcomes",
        label: "Outcomes",
        blocks: [
          {
            type: "p",
            text: "It shipped as Cross-Profile Notifications in 2021. Admins could switch Page notification streams and manage notification settings without leaving the Facebook account they were already using.",
          },
          {
            type: "stats",
            items: [
              { value: "Shipped", label: "Cross-Profile Notifications launched in 2021." },
              { value: "1 account", label: "Admins switch Pages without swapping Facebook accounts." },
              { value: "Per Page", label: "Notification settings can be managed independently for each Page." },
            ],
          },
        ],
      },
      {
        id: "reflection",
        label: "Reflection",
        blocks: [
          {
            type: "p",
            text: "The temptation was a new notification center. The useful change was smaller. Scope the switch, not the whole product. People already knew how to be in Facebook. They needed a way to change which Page they were responsible for without starting over.",
          },
        ],
      },
    ],
  },
  {
    slug: "slide",
    title: "45% of claims, no call",
    headline: "Insurance claims intake",
    meta: "Slide · Shipped 2022",
    deck: "Slide was taking claims over the phone, about twenty minutes each. After a week in Tampa with the agents who actually triaged them, we turned that script into a web flow. Within six months, 45% of claims came in without a phone call.",
    cover: "claims",
    ratio: "wide",
    surfaces: ["work"],
    role: "Claims intake and service blueprint",
    timeline: "Jun – Oct 2022",
    team: ["Slide", "Underbelly"],
    skills: ["Research", "Service design", "Prototyping"],
    sections: [
      {
        id: "overview",
        label: "Overview",
        blocks: [
          {
            type: "p",
            text: "The phone was the product. An agent spent about twenty minutes triaging a claim, choosing what kind of loss it was, and collecting the minimum Slide needed to start. The website could not do that. Anyone who wanted to file still had to reach a person.",
          },
          {
            type: "p",
            text: "After a week with agents in Tampa, I turned their triage into an online flow: first identify the claim type, then ask only for the information Slide needed to start it. The flow shipped. Six months later, 45% of claims started without a call.",
          },
          {
            type: "p",
            text: "I owned the service blueprint, the self-serve flow, prototypes, and handoff details for the intake experience. I worked with claims agents to turn their judgment into decision rules, then partnered with Slide's product and engineering teams to separate what a customer could answer alone from what still required an adjuster.",
          },
          {
            type: "stats",
            items: [
              { value: "20 min", label: "Average time an agent spent taking one claim over the phone." },
              { value: "45%", label: "Of claims came in with no phone call, within six months of launch." },
              { value: "1 week", label: "In Tampa with agents, learning the triage before drawing the flow." },
            ],
          },
        ],
      },
      {
        id: "background",
        label: "Background",
        blocks: [
          {
            type: "h3",
            text: "The script lived with people, not in the interface",
          },
          {
            type: "p",
            text: "Agents already knew how to sort a claim. They knew which question actually changed the path, and which details could wait until a person was on it. None of that was on the site. Customers who would have finished a short form were sitting in a queue for a twenty-minute conversation that mostly collected the same few facts.",
          },
          {
            type: "p",
            text: "The business cost was the queue. The customer cost was the wait, and the feeling that you could not start until someone picked up. Both of those are the same design problem: the judgment for \"what kind of claim is this, and what do you need from me\" had never been written down as a flow.",
          },
        ],
      },
      {
        id: "approach",
        label: "Approach",
        blocks: [
          {
            type: "h3",
            text: "Learn the triage before removing the agent",
          },
          {
            type: "p",
            text: "A week in Tampa was the spec. We watched how agents decided what they were looking at, which branches were real, and where they stopped asking because Slide already had enough to open the claim. The temptation in a room like that is to transcribe the whole call. The useful edit is to find the minimum.",
          },
          {
            type: "p",
            text: "I owned that edit. Choosing the right claim online, and providing the smallest set of information for Slide to get started. Everything else could stay with a person, later, if the claim needed it.",
          },
          {
            type: "mock",
            id: "claims",
            caption: "Study of the self-serve intake: claim type first, then only the facts required to start.",
          },
        ],
      },
      {
        id: "solution",
        label: "Solution",
        blocks: [
          {
            type: "p",
            text: "The web flow keeps the first part of the phone script: identify the claim type and collect only the facts a customer can provide without an agent.",
          },
          {
            type: "ul",
            items: [
              "A first step that chooses the kind of claim, the same sort an agent made at the start of the call.",
              "A short set of questions for the minimum Slide needs to open it.",
              "A handoff that does not pretend the website replaced every later conversation, only the twenty minutes it took to begin.",
            ],
          },
        ],
      },
      {
        id: "outcomes",
        label: "Outcomes",
        blocks: [
          {
            type: "p",
            text: "Within six months, 45% of claims started online without a phone call. The phone queue was no longer the only way to begin a claim.",
          },
          {
            type: "stats",
            items: [
              { value: "45%", label: "Of claims started online without a phone call within six months." },
              { value: "1", label: "Self-serve entry point added alongside the phone queue." },
              { value: "20 min", label: "Average agent intake call replaced for eligible claims." },
            ],
          },
        ],
      },
      {
        id: "reflection",
        label: "Reflection",
        blocks: [
          {
            type: "p",
            text: "Another round of screens would have guessed at the script. The flow worked because it followed how agents actually sorted a claim, then dropped everything a customer did not need to provide up front. The number that matters is the 45%. The reason it moved is the week in Tampa, and the decision to digitize the start of the claim instead of the entire phone call.",
          },
        ],
      },
    ],
  },
  {
    slug: "southeast",
    title: "One product at a time",
    headline: "Bank account opening",
    meta: "SouthEast Bank · In market",
    deck: "Opening an account meant sitting with a branch manager who clicked through an internal tool for you. The brief was checking, savings, and CDs, all in one pass. That pass did not survive the system. What shipped, and what customers use today, is one product at a time, from the first screen through funding.",
    cover: "banking",
    ratio: "tall",
    surfaces: ["work"],
    role: "Customer-facing deposit intake",
    timeline: "Mar 2025 – Present",
    team: ["SouthEast Bank"],
    skills: ["End-to-end product design", "Flows", "Edge states"],
    sections: [
      {
        id: "overview",
        label: "Overview",
        blocks: [
          {
            type: "p",
            text: "SouthEast Bank had an account-opening tool. Customers were not allowed to touch it. A branch manager drove, and the customer watched. There was no version a person could finish alone, for checking, savings, or a CD.",
          },
          {
            type: "p",
            text: "I was hired to turn this internal intake into a customer-facing flow, including funding, identity checks, and joint owners. The original plan was to open checking, savings, and CDs in one application. The system could not support that reliably, so we changed the flow to one product per application. That is the intake customers use today.",
          },
          {
            type: "p",
            text: "I owned the end-to-end customer journey, interaction design, prototype validation, and engineering-ready specifications for desktop and mobile. I worked with product, compliance, operations, and engineering to turn core-banking rules into a flow customers could complete without branch staff.",
          },
          {
            type: "ul",
            items: [
              "Role: end-to-end product design of the deposit intake.",
              "Timeline: March 2025 to present.",
              "Outcome: one product at a time, in market, from the first screen to funding.",
            ],
          },
        ],
      },
      {
        id: "background",
        label: "Background",
        blocks: [
          {
            type: "h3",
            text: "The internal tool was the only product",
          },
          {
            type: "p",
            text: "If you wanted an account, you sat with someone who knew which screen came next. The knowledge was in the branch, not in the interface. That works until the bank wants a customer to start without an appointment, or finish on a phone after they leave.",
          },
          {
            type: "stats",
            items: [
              { value: "3", label: "Products in the original brief: checking, savings, and CDs, in one pass." },
              { value: "1", label: "Product per application, after the multi-product flow would not hold." },
              { value: "3", label: "Failure states designed in, not bolted on: funds, KYC, and joint owners." },
            ],
          },
          {
            type: "h3",
            text: "All three at once did not survive the system",
          },
          {
            type: "p",
            text: "Opening every product in one pass sounded simpler for customers, but funding, ownership, and product rules did not work reliably together. We changed the experience so customers open one product at a time.",
          },
        ],
      },
      {
        id: "approach",
        label: "Approach",
        blocks: [
          {
            type: "p",
            text: "I designed the deposit flow from the first screen to funding, on desktop and on a phone. The happy path was the smaller part of the work. The flow had to keep going when the money was short, when identity checks failed, and when a second person was on the account.",
          },
          {
            type: "h3",
            text: "Sequence the products instead of stacking them",
          },
          {
            type: "p",
            text: "Cutting the multi-product pass was the decision that made the rest designable. A customer picks checking, or savings, or a CD. They do not assemble a bundle the core system cannot open in one transaction. A second product is a second pass, not a branch in the middle of the first one.",
          },
          {
            type: "mock",
            id: "banking",
            caption: "Study of the single-product intake on desktop and on a phone.",
          },
        ],
      },
      {
        id: "solution",
        label: "Solution",
        blocks: [
          {
            type: "p",
            text: "The shipped intake is a single-product deposit flow a customer can finish without a branch manager driving the mouse.",
          },
          {
            type: "ul",
            items: [
              "Product choice up front: checking, savings, or CD, one at a time.",
              "The path from the first screen through funding.",
              "Insufficient funds, so a failed transfer is a state, not a dead end.",
              "Invalid KYC, so an identity failure explains itself and offers a next step.",
              "Joint owners, so a second person is part of the flow instead of a follow-up call.",
              "Desktop and mobile of the same flow.",
            ],
          },
        ],
      },
      {
        id: "outcomes",
        label: "Outcomes",
        blocks: [
          {
            type: "p",
            text: "The single-product flow is now the customer-facing intake. Customers can open an account without a branch manager, including when funds are insufficient, identity checks fail, or a joint owner is added.",
          },
          {
            type: "stats",
            items: [
              { value: "In market", label: "Customer-facing account opening is live." },
              { value: "1 product", label: "Each application opens checking, savings, or a CD—not all three." },
              { value: "3", label: "Edge cases designed into the live flow: funds, identity, and joint owners." },
            ],
          },
        ],
      },
      {
        id: "reflection",
        label: "Reflection",
        blocks: [
          {
            type: "p",
            text: "The brief was everything in one pass. The useful decision was to sequence the products instead of stacking them. A customer-facing bank flow is mostly the unhappy path. If funding, identity, and joint ownership are follow-up tickets, the customer is back in the branch you were trying to get them out of.",
          },
        ],
      },
    ],
  },
  {
    slug: "loans",
    title: "Both rates, before the guess",
    headline: "Loan calculator",
    meta: "SouthEast Bank · Shipped",
    deck: "Students were leaving a loan application, and the bank assumed it was the form. I talked to them. It was the rates. They were asked to choose between fixed and variable with no picture of what either would cost, so they closed the tab rather than guess.",
    cover: "calculator",
    ratio: "square",
    surfaces: ["work"],
    role: "Rate comparison research and design",
    timeline: "2025",
    team: ["SouthEast Bank"],
    skills: ["Research", "Interface design", "Decision design"],
    sections: [
      {
        id: "overview",
        label: "Overview",
        blocks: [
          {
            type: "p",
            text: "Students were leaving the loan application, so the bank first treated it as a form problem. My research showed the form was not the issue: students could fill it out, but they could not confidently choose between fixed and variable rates.",
          },
          {
            type: "p",
            text: "Students were being asked to pick fixed or variable without understanding what either would cost them over the life of the loan. Fixed sounds safe. Variable sounds like a trick. Without a picture of the movement, both are a guess, and a guess is a reason to close the tab.",
          },
          {
            type: "p",
            text: "I owned student research, the comparison model, interface design, and prototype feedback. I worked with lending product, compliance, and engineering to keep the explanation accurate and add it to the existing application instead of waiting for a full rebuild.",
          },
          {
            type: "ul",
            items: [
              "Role: research and the design of the comparison.",
              "Timeline: 2025, inside the existing loan application.",
              "Outcome: both rate types, side by side, on the screen where the decision already happened.",
            ],
          },
        ],
      },
      {
        id: "background",
        label: "Background",
        blocks: [
          {
            type: "h3",
            text: "The form was finishable. The decision was not.",
          },
          {
            type: "p",
            text: "I interviewed students who had abandoned the application to identify where and why they stopped. They were not stuck on labels, field order, or the length of the form. They could not price the choice between fixed and variable rates. That choice is only meaningful if they can see what a variable rate does over the years they would be paying.",
          },
          {
            type: "stats",
            items: [
              { value: "2", label: "Rate types on the decision: fixed and variable, previously unexplained as costs." },
              { value: "1", label: "Screen we kept. The calculator went under the options already there." },
              { value: "Months", label: "What a full rebuild of that screen would have taken. We did not have them." },
            ],
          },
          {
            type: "p",
            text: "The screen they were leaving explained the products. It did not explain the money. Rebuilding the entire application around a new decision model would have taken months the team did not have, and it would have moved the choice away from the place students were already making it.",
          },
        ],
      },
      {
        id: "approach",
        label: "Approach",
        blocks: [
          {
            type: "h3",
            text: "Repair the decision. Leave the screen alone.",
          },
          {
            type: "p",
            text: "Students were already deciding between fixed and variable rates on the existing application screen. I put the comparison on that screen because a separate calculator, new route, or full rebuild would make them leave the decision at the moment they needed help.",
          },
          {
            type: "p",
            text: "I designed the comparison to answer one question: what does variable actually mean when it moves, set next to a fixed rate that does not. Not a lecture on rate types. A side-by-side over the life of the loan.",
          },
          {
            type: "mock",
            id: "calculator",
            caption: "Study of the comparison sitting under the existing loan options.",
          },
        ],
      },
      {
        id: "solution",
        label: "Solution",
        blocks: [
          {
            type: "p",
            text: "The calculator shipped under the options students were already choosing between.",
          },
          {
            type: "ul",
            items: [
              "Fixed and variable, shown together, not as two definitions on two screens.",
              "Estimated fixed and variable costs shown side by side across the loan term.",
              "Placed under the existing loan options, so the decision stays where it already was.",
              "No rebuild of the surrounding application.",
            ],
          },
        ],
      },
      {
        id: "outcomes",
        label: "Outcomes",
        blocks: [
          {
            type: "p",
            text: "The comparison shipped under the existing rate options. Students can now see fixed and variable costs over the life of the loan before choosing. The form stayed; the missing pricing information was added without a months-long rebuild.",
          },
          {
            type: "stats",
            items: [
              { value: "Shipped", label: "The comparison was added to the live loan application." },
              { value: "2 rates", label: "Fixed and variable costs are shown side by side." },
              { value: "0", label: "Extra screens needed; the comparison sits under the existing options." },
            ],
          },
        ],
      },
      {
        id: "reflection",
        label: "Reflection",
        blocks: [
          {
            type: "p",
            text: "A choice without a consequence is a guess, and people do not like to guess with a loan. The research was short and it changed the brief: stop redrawing the form, and show the cost. Meeting students at the moment of doubt was faster than redrawing the application around it, and it was the more honest fix. The form was not what they were afraid of.",
          },
        ],
      },
    ],
  },
  {
    slug: "transcript-shield",
    title: "Correct it, then redact it",
    headline: "Transcript Shield",
    meta: "Independent · In progress",
    deck: "Interview transcripts were going into AI analysis with mistakes and personal data still in them. A wrong name does not stay in the transcript. It comes back later as a product decision that sounds sure of itself. Transcript Shield cleans the record and strips the PII before that happens.",
    cover: "shield",
    ratio: "tall",
    surfaces: ["work", "fun"],
    role: "Solo product design and development",
    timeline: "2024 – Present",
    team: ["Solo"],
    skills: ["Product design", "Research tools", "Interface"],
    sections: [
      {
        id: "overview",
        label: "Overview",
        blocks: [
          {
            type: "p",
            text: "I ran a one-person studio doing research, design, and development. I needed a faster and safer path from an interview to an interface, so I built tools for that workflow. Transcript Shield is the first step.",
          },
          {
            type: "p",
            text: "Transcript Shield corrects transcription errors, then redacts personal information before the text goes into analysis. Most research tools begin at the insight; the problem I needed to solve happened earlier, in the source material.",
          },
          {
            type: "p",
            text: "I own the product end to end: problem framing, workflow research, interaction design, front-end implementation, and researcher feedback. The key decision was order: correct the source first, then redact it. Redacting a wrong sentence does not make it a reliable research record.",
          },
          {
            type: "ul",
            items: [
              "Role: design and development, on my own.",
              "Timeline: 2024 to present.",
              "Outcome: cleaner inputs. Corrections and redaction happen before analysis, not after a bad conclusion.",
            ],
          },
        ],
      },
      {
        id: "background",
        label: "Background",
        blocks: [
          {
            type: "h3",
            text: "Bad inputs become confident outputs",
          },
          {
            type: "p",
            text: "A misheard number, a wrong name, or a piece of personal data does not stay in the transcript. Once a model summarizes it, the error picks up the tone of a finding. Teams then make product decisions on text that was never checked, and that still contains the kind of detail a research file should not be passing around.",
          },
          {
            type: "stats",
            items: [
              { value: "2", label: "Passes, in order: correct the words, then redact the personal data." },
              { value: "1", label: "Person studio. The tool exists because there is no one else to do the cleanup pass." },
              { value: "Before", label: "Analysis. The check happens on the way in, not as a review of the insight." },
            ],
          },
        ],
      },
      {
        id: "approach",
        label: "Approach",
        blocks: [
          {
            type: "p",
            text: "I was the first user. My workflow was research, then design, then development—often in the same week and for clients who never saw the transcript. Manually fixing names, then searching for phone numbers, emails, and health details did not scale.",
          },
          {
            type: "p",
            text: "The order matters. Redacting a broken sentence hides the error and keeps it. Correcting first means the redaction is applied to something you would actually quote. I tested the workflow in researcher demos, including an AIxUXR session, and used feedback to refine the correction-before-redaction sequence.",
          },
          {
            type: "mock",
            id: "shield",
            caption: "Study of a transcript with a correction and a redaction in place, before the text moves on.",
          },
        ],
      },
      {
        id: "solution",
        label: "Solution",
        blocks: [
          {
            type: "ul",
            items: [
              "A pass that flags and corrects transcription errors before anyone treats the text as a record.",
              "A redaction pass for personal information, so the file that goes into analysis is not the file that contains a phone number.",
              "The cleaned transcript as the input to whatever analysis comes next, including the tools I would rather not have reading raw interviews.",
            ],
          },
        ],
      },
      {
        id: "outcomes",
        label: "Outcomes",
        blocks: [
          {
            type: "p",
            text: "The tool is in progress and has been shown to UX researchers, including at AIxUXR. It removes the manual cleanup pass between interview and analysis: transcription errors are corrected and personal data is redacted before the transcript moves on.",
          },
          {
            type: "stats",
            items: [
              { value: "In progress", label: "Built for my studio workflow and shown to UX researchers." },
              { value: "2 passes", label: "Correct the transcript, then redact personal data." },
              { value: "Before analysis", label: "Cleanup happens before a transcript reaches an AI tool." },
            ],
          },
        ],
      },
      {
        id: "reflection",
        label: "Reflection",
        blocks: [
          {
            type: "p",
            text: "The interesting AI work, for research, was on the way in. A one-person studio only works if that path is short. Models made the path possible, and they made dirty inputs more expensive, because the output comes back sounding sure. Fix the record before you ask anything to be insightful about it.",
          },
        ],
      },
    ],
  },
  {
    slug: "peridot",
    title: "Cite the minute",
    headline: "Peridot",
    meta: "Independent · Launched 2026",
    deck: "Teams do not need another summary of their interviews. They need a way back to the sentence. Peridot turns customer interviews into searchable insights that cite the moment they came from, and that can become a Linear ticket without losing the source.",
    cover: "peridot",
    ratio: "square",
    surfaces: ["work", "fun"],
    role: "Solo 0→1 product design and development",
    timeline: "2025 – 2026",
    team: ["Solo"],
    skills: ["0→1 product", "Research", "Interface"],
    sections: [
      {
        id: "overview",
        label: "Overview",
        blocks: [
          {
            type: "p",
            text: "I spoke with hundreds of researchers, designers, and PMs while building Peridot. The same problem kept appearing: teams had highlights and summaries, but could not get back to the sentence or recording that supported them.",
          },
          {
            type: "p",
            text: "Peridot makes interviews searchable and keeps every insight connected to the moment in the call it came from. A team can then turn that cited insight into a Linear ticket without losing the source.",
          },
          {
            type: "p",
            text: "I owned the 0→1 product from discovery through public launch: user interviews, the citation model, prototypes, design, and development. The central decision was that every generated insight must link to a moment in the call. Fast output is not useful if a team cannot verify its source.",
          },
          {
            type: "link",
            href: "https://askperidot.com",
            label: "askperidot.com",
          },
        ],
      },
      {
        id: "background",
        label: "Background",
        blocks: [
          {
            type: "h3",
            text: "Synthesis was disappearing into decks",
          },
          {
            type: "p",
            text: "A finding without a citation is a claim. Teams were making more of them, faster, and could not get back to who said it or when. That is a retrieval problem dressed up as an insight problem. The models were happy to write the summary. They were not being asked to keep the timestamp.",
          },
          {
            type: "stats",
            items: [
              { value: "100s", label: "Conversations with researchers, designers, and PMs while it was being built." },
              { value: "1", label: "Click back to the moment in the call the insight came from." },
              { value: "2026", label: "Public launch, including on Product Hunt." },
            ],
          },
        ],
      },
      {
        id: "approach",
        label: "Approach",
        blocks: [
          {
            type: "p",
            text: "The line I kept coming back to: do not automate the conversation. Automate everything around it. The interview is the part a person should still do. The finding, the citation, and the handoff into the backlog are the parts that were eating the week.",
          },
          {
            type: "h3",
            text: "A memory, not a summary",
          },
          {
            type: "p",
            text: "Search is useful only if the result can be audited. An insight in Peridot points at the moment in the recording. If you cannot land on the sentence, it does not ship as a finding. That rule kept the product from becoming another generator of plausible paragraphs.",
          },
          {
            type: "mock",
            id: "peridot",
            caption: "Study of a cited insight, and the handoff from that citation into a ticket.",
          },
        ],
      },
      {
        id: "solution",
        label: "Solution",
        blocks: [
          {
            type: "ul",
            items: [
              "Interviews become searchable insights, not a folder of recordings nobody reopens.",
              "Each insight cites the moment in the call.",
              "An insight can become a Linear ticket with a summary and a goal, still tied to that moment.",
              "The conversation itself stays human. The product starts when the call ends.",
            ],
          },
        ],
      },
      {
        id: "outcomes",
        label: "Outcomes",
        blocks: [
          {
            type: "p",
            text: "Peridot launched publicly in 2026, including on Product Hunt, at askperidot.com. Users can search an interview, open the supporting sentence or moment in the call, and turn that evidence into a backlog item.",
          },
          {
            type: "stats",
            items: [
              { value: "Public launch", label: "Peridot launched in 2026, including on Product Hunt." },
              { value: "1 click", label: "Each insight links back to the sentence or moment that supports it." },
              { value: "Linear", label: "Cited insights can become backlog tickets without losing their source." },
            ],
          },
        ],
      },
      {
        id: "reflection",
        label: "Reflection",
        blocks: [
          {
            type: "p",
            text: "Observations can be found. Insights still belong to a person who was in the room, or who can get back to the sentence in one click. The hundreds of conversations did not ask for more output. They asked for a way to trust the output they already had, which means being able to check it.",
          },
        ],
      },
    ],
  },
  {
    slug: "photography",
    title: "The cyc wall",
    headline: "Photography",
    meta: "Underbelly · Personal",
    deck: "Underbelly was not a room of designers. It was four departments, and it had a cyc wall. In the gaps between projects I used it to learn photography and video. The habit that stuck is the same question an interface starts with: what is the subject, and what is allowed to fall away.",
    cover: "photo",
    ratio: "tall",
    surfaces: ["fun"],
    role: "Personal practice",
    timeline: "2021 – 2022",
    team: ["Underbelly studio"],
    skills: ["Photography", "Lighting"],
    sections: [
      {
        id: "overview",
        label: "Overview",
        blocks: [
          {
            type: "p",
            text: "I used unbooked studio time at Underbelly to build a deliberate practice in lighting, composition, and visual hierarchy. The studio's cyc wall and lighting equipment gave me a practical space to run self-directed shoots.",
          },
          {
            type: "p",
            text: "This was a self-directed practice, not a client engagement. I set the brief, art direction, lighting, shooting, and edit for each study. The goal was to build a repeatable way to direct attention: define one subject, remove visual competition, and evaluate whether the intended focus survives the final frame.",
          },
          {
            type: "mock",
            id: "photo",
            caption: "A lighting and composition study shot on Underbelly's cyc wall.",
          },
        ],
      },
      {
        id: "approach",
        label: "What it trained",
        blocks: [
          {
            type: "p",
            text: "Lighting is a decision about what someone notices first. So is a screen. Two years of that, fitted around client work, is not a photography career. It is the reason I still start a flow by removing things until the subject is obvious.",
          },
          {
            type: "stats",
            items: [
              { value: "4", label: "Departments at Underbelly: design, marketing, development, and video." },
              { value: "2021–2022", label: "At the studio, with the cyc available between client projects." },
              { value: "Self-directed", label: "Personal studies in lighting, composition, and art direction." },
            ],
          },
          {
            type: "p",
            text: "The outcome was a stronger visual decision-making habit, not a business KPI. The practice taught me to establish a clear focal point before adding visual detail; I apply that same hierarchy-first approach to product screens.",
          },
        ],
      },
    ],
  },
];
