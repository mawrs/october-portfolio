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
    role: "Product Designer",
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
            text: "I owned the end-to-end interaction design for the Page switch and notification settings: mapping the existing behavior, exploring the control model, prototyping the selected direction, and documenting states for engineering. I partnered with the Pages PM, content design, and engineering; the team set product scope and technical constraints, while I made the interaction and its states concrete.",
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
            text: "The pile did not match the work",
          },
          {
            type: "p",
            text: "A comment on a shop Page and a review on a studio Page are not the same job. They arrived as if they were. The account was the unit of the product. The Page was the unit of the work. Anyone past a couple of Pages felt that mismatch every day, because the volume scaled with the number of Pages and the interface did not.",
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
            text: "The obvious fix was the wrong size",
          },
          {
            type: "p",
            text: "Switching the entire Facebook account just to see another Page's notifications is a lot of machinery for a glance. We tested several approaches before landing on one that left the account in place and changed only the stream.",
          },
        ],
      },
      {
        id: "approach",
        label: "Approach",
        blocks: [
          {
            type: "p",
            text: "The design question was not \"how do we build a better notification center.\" It was \"what is the smallest move that lets an admin change context.\" A new inbox would have been a second product. A toggle between Pages is a control on the product they already open.",
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
              "Enough labeling that you can tell which Page a row belongs to before you open it.",
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
            text: "It shipped as Cross-Profile Notifications. Admins running several Pages could filter the noise without leaving the account they were already in. The account stayed put. The Page became the thing you switch. Replace the sample metrics below with the verified launch readout before publishing.",
          },
          {
            type: "stats",
            items: [
              { value: "Sample: +24%", label: "Increase in weekly multi-Page notification visits in the first 90 days." },
              { value: "Sample: −31%", label: "Reduction in account-switch attempts among eligible admins." },
              { value: "Shipped", label: "Cross-Profile Notifications launched in 2021." },
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
    role: "Product Designer",
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
            text: "We spent a week in Tampa sitting with those agents, then I owned the digitization: choosing the right claim online, and asking only for what Slide needed to get going. The flow shipped. Six months later, nearly half of claims were starting without a call.",
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
            text: "The web flow follows the phone script after the script has been cut to what a customer can answer alone.",
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
            text: "Within six months, 45% of claims came in without a phone call. The queue did not disappear. It stopped being the only door. Months later, Slide raised a $35M round to expand into other parts of Florida. That round is not a design metric, and I won't treat it as one. What the intake had already done, by then, was take on work the phone queue used to do. Replace the two sample service metrics below with the verified launch readout.",
          },
          {
            type: "stats",
            items: [
              { value: "45%", label: "Of claims started on the web, with no phone call, inside six months." },
              { value: "Sample: −18%", label: "Reduction in average first-contact handling time after launch." },
              { value: "Sample: 4.6/5", label: "Customer rating for starting a claim online." },
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
    role: "Product Designer",
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
            text: "I was hired to make the intake customer-facing, including the states that show up once real money and real identity checks are involved. The multi-product dream, all three in one pass, turned into a technical nightmare. We cut it to a single product flow. That flow is the intake their customers use today.",
          },
          {
            type: "p",
            text: "I owned the end-to-end customer journey, interaction patterns, prototype validation, and engineering-ready specifications for desktop and mobile. I partnered with product, compliance, operations, and engineering to translate core-banking rules into a flow that customers could complete without branch staff.",
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
            text: "Opening every product in one pass looked like a better customer experience and turned out to be a worse technical one. Funding, ownership, and product rules do not stack cleanly. We scoped down and let a customer open one of those products at a time.",
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
            text: "That single-product flow is the intake their customers use today. A customer can open an account alone, one product at a time, including the three states that used to send the application back to a person in the branch: insufficient funds, a failed identity check, and a joint owner. Replace the sample performance data below with the verified production metrics.",
          },
          {
            type: "stats",
            items: [
              { value: "Sample: 62%", label: "Increase in completed digital applications after launch." },
              { value: "Sample: −27%", label: "Reduction in branch-assisted account-opening requests." },
              { value: "3", label: "Edge states designed into the live flow: funds, KYC, and joint owners." },
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
    role: "Product Designer",
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
            text: "The drop-off sat on the loan application, so the bank read it as a form problem. Forms are a familiar place to look. They are also the wrong diagnosis when the person can fill the fields and still cannot make the choice the fields are asking for.",
          },
          {
            type: "p",
            text: "Students were being asked to pick fixed or variable without understanding what either would cost them over the life of the loan. Fixed sounds safe. Variable sounds like a trick. Without a picture of the movement, both are a guess, and a guess is a reason to close the tab.",
          },
          {
            type: "p",
            text: "I owned discovery with students, the comparison model, interface design, and prototype feedback. I worked with lending product, compliance, and engineering to keep the explanation accurate and fit the tool inside the existing application rather than delay launch for a full rebuild.",
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
            text: "I talked to students who had abandoned the application. They were not stuck on labels, field order, or the length of the form. They were stuck on a binary they could not price. Fixed versus variable is only a meaningful choice if you can see what variable does when it moves, across the years you would actually be paying.",
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
            text: "The constraint was the point. Students were deciding under the existing loan options. That is where the doubt was, so that is where the comparison had to live. A separate calculator, a new route, or a rebuilt application would have asked them to go find the answer they needed at the moment they were about to leave.",
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
              "Both read across the life of the loan, so movement is visible instead of implied.",
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
            text: "The comparison shipped on the screen students were already using. Someone who was being asked to guess between fixed and variable can see both costs, over the life of the loan, before they commit. The bank had treated a pricing problem as a form problem. The form stayed. The decision got the information it was missing, without a months-long rebuild of the application around it. Replace the sample behavior metrics below with the verified post-launch readout.",
          },
          {
            type: "stats",
            items: [
              { value: "Sample: +16%", label: "Increase in completed rate selections after the comparison launched." },
              { value: "Sample: −22%", label: "Reduction in exits from the rate-selection step." },
              { value: "0", label: "Extra screens. The comparison lives under the existing options." },
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
    role: "Design and development",
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
            text: "After two years at Underbelly I ran a one-person studio: research, design, and development. The only way that setup stays fast is if the path from an interview to an interface is short. I built tools for that path. Transcript Shield is the one that sits at the front of it.",
          },
          {
            type: "p",
            text: "It does two jobs, in that order. It corrects the transcription, and it redacts personal information before the text is handed to analysis. Most research tools start at the insight. The failure I kept seeing was upstream of that.",
          },
          {
            type: "p",
            text: "I own the product end to end: problem framing, workflow research, interaction design, front-end implementation, and feedback loops with researchers. The key product decision was sequence: correct the source first, then redact it, because a clean redaction on a wrong sentence is still a bad research record.",
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
            text: "I was the user. The workflow was research, then design, then development, often in the same week, often for a client who would never see the transcript. The manual pass, relistening to fix names and then hunting for phone numbers, emails, and health details, was the part that did not scale with a single person.",
          },
          {
            type: "p",
            text: "The order matters. Redacting a broken sentence hides the error and keeps it. Correcting first means the redaction is applied to something you would actually quote. I have shown the tool to rooms of UX researchers who were already feeling the same gap, including a demo with AIxUXR.",
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
            text: "The change in the studio is the shape of the week. The path from interview to interface no longer depends on a manual reread to fix names and pull out personal data. Researchers who have seen it, including in a room with AIxUXR, recognize the failure mode immediately: the error does not stay in the transcript, and neither does the phone number. The adoption data below is sample copy to replace with validated pilot data.",
          },
          {
            type: "stats",
            items: [
              { value: "Sample: 38%", label: "Reduction in time spent preparing a transcript for analysis." },
              { value: "Sample: 12", label: "Researchers in the initial pilot who completed an end-to-end workflow." },
              { value: "In progress", label: "Built for the studio workflow and tested with UX researchers." },
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
    role: "Design and development",
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
            text: "While building Peridot I talked with researchers, designers, and PMs, hundreds of those conversations, about what happened to an interview after the call. The pattern was consistent. Teams were producing more artifacts and losing the source. The deck got a highlight. The sentence it came from was gone.",
          },
          {
            type: "p",
            text: "Peridot is the other half of that problem, downstream of a clean transcript. Search returns the insight and the point in the call it came from. From there it can become a Linear ticket with a summary and a goal, so the research does not stop at a highlight reel.",
          },
          {
            type: "p",
            text: "I owned the 0→1 product from discovery through design and development: interviewing users, defining the citation model, building prototypes, and shipping the public product. The central decision was to make every generated insight traceable to a moment in the call; speed was useful only if a team could verify the source.",
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
            text: "Peridot launched publicly in 2026, including on Product Hunt, at askperidot.com. The loop that shipped is specific: search, land on the sentence, and if it is real, put it in the backlog without detaching it from the person who said it. The engagement figures below are sample placeholders to replace with product analytics.",
          },
          {
            type: "stats",
            items: [
              { value: "Sample: 41%", label: "Of new workspaces created a cited insight in their first week." },
              { value: "Sample: 3.2×", label: "More cited findings saved per study than in the previous workflow." },
              { value: "2026", label: "Launched publicly, including a Product Hunt post." },
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
            text: "The studio had design, marketing, development, and video production. People hear agency and picture a single room of designers. The useful accident was the cyc: a seamless wall, lights, and time that was not booked. I used it.",
          },
          {
            type: "p",
            text: "This was a self-directed practice, not a client engagement. I set the brief, art direction, lighting, shooting, and edit for each study. The goal was to build a repeatable way to direct attention: define one subject, remove visual competition, and evaluate whether the intended focus survives the final frame.",
          },
          {
            type: "mock",
            id: "photo",
            caption: "A seamless sweep. The practice was the point, not a client deliverable.",
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
              { value: "2 yrs", label: "At the studio, March 2021 to November 2022, with the cyc in the gaps." },
              { value: "Sample: 18", label: "Lighting and composition studies completed; replace with your actual archive count." },
            ],
          },
          {
            type: "p",
            text: "The outcome was a stronger visual decision-making habit, rather than a business KPI: each study gave me a quick loop from intent to critique. I now bring that same discipline to product work by making the primary task and visual hierarchy explicit before adding detail.",
          },
        ],
      },
    ],
  },
];
