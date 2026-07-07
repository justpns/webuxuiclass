const slides = [
  {
    type: "hero",
    section: "Opening",
    eyebrow: "Day 3 · AI Workspace & Vibe Coding Lab",
    title: "AI Workspace and Vibe Coding Lab",
    subtitle: "From UX and UI decisions to an AI-ready workflow and a live website",
    lede: "A practical studio on workspace systems, markdown context, AI roles, responsive implementation, debugging, and public deployment.",
    pills: ["Master's studio", "AI-native workflow", "HTML/CSS", "GitHub Pages"]
  },
  {
    type: "statement",
    section: "Opening",
    eyebrow: "Day 3 Philosophy",
    title: "This is not a traditional coding class.",
    copy: "Students are not here to memorize syntax in one day. They are here to learn how structured thinking, AI collaboration, and rapid implementation can turn ideas into real web experiences."
  },
  {
    type: "cards",
    section: "Opening",
    eyebrow: "Core Learning Goals",
    title: "By the end of Day 3, students should be able to",
    cards: [
      ["Build an AI-ready workspace", "Organize files, rules, and context so AI can collaborate consistently instead of guessing each time."],
      ["Use markdown well", "Write clear `.md` documents that preserve decisions, prompts, and project memory."],
      ["Work with specialized AI roles", "Use separate agents for UX, content, UI, frontend, and QA instead of one vague instruction."],
      ["Implement a responsive homepage", "Translate earlier UX and UI decisions into semantic HTML and usable CSS."],
      ["Debug and deploy", "Use AI to explain issues, improve structure, and publish a real site through GitHub Pages."]
    ]
  },
  {
    type: "cards",
    section: "Opening",
    eyebrow: "Day 3 Structure",
    title: "Session map",
    cards: [
      ["1. AI-native creative workflow", "What changed with AI and why judgment matters more now."],
      ["2. Workspace thinking", "Why professionals build systems, not just chats."],
      ["3. Markdown workflow", "How `.md` files become shared memory for humans and AI."],
      ["4. AI agents and harness", "Assign roles and control behavior through rules and review loops."],
      ["5. Workspace workshop", "Set up the project structure and core context files."],
      ["6. HTML structure workshop", "Build semantic sections from the homepage plan."],
      ["7. CSS vibe coding workshop", "Turn structure into hierarchy, tone, and responsiveness."],
      ["8. AI debugging workflow", "Use AI as a tutor and fixer when code breaks."],
      ["9. GitHub Pages deployment", "Publish the site and test it on real devices."],
      ["10. Critique and reflection", "Review clarity, confusion, and what should change first."]
    ]
  },
  {
    type: "list",
    section: "Opening",
    eyebrow: "Connection To Days 1-2",
    title: "Day 3 continues the same design logic",
    items: [
      "Day 1 defined how users think, scan, and move through a page.",
      "Day 2 defined how hierarchy, type, spacing, and color make that structure visible.",
      "Day 3 turns those decisions into a working system, a coded prototype, and a live URL."
    ]
  },
  {
    type: "statement",
    section: "Opening",
    eyebrow: "Workshop Strategy",
    title: "Day 3 should feel like continuous small wins.",
    copy: "The class should feel like a creative lab, not a programming lecture. Students need visible progress every 10 to 20 minutes so confidence rises before complexity does."
  },
  {
    type: "cards",
    section: "Opening",
    eyebrow: "Energy Design",
    title: "What small wins are meant to create",
    cards: [
      ["Momentum", "Students keep moving because each step produces something visible."],
      ["Confidence", "Early success reduces intimidation, especially for non-developers."],
      ["Curiosity", "Once students see quick results, experimentation becomes safer and more natural."],
      ["Participation", "Public progress creates better group energy and more willingness to ask questions."],
      ["Capability", "The emotional outcome should be: I can build and ship things."]
    ]
  },
  {
    type: "cards",
    section: "Opening",
    eyebrow: "Small Win Flow",
    title: "The workshop should keep producing visible milestones",
    cards: [
      ["15 min", "Students create the workspace."],
      ["25 min", "Students write the first `.md` file."],
      ["35 min", "Students generate the first AI output."],
      ["50 min", "Students open the first HTML page."],
      ["60 min", "Students see the first styled section."],
      ["80 min", "Students fix the first bug."],
      ["100 min", "Students deploy the first live website."],
      ["120 min", "Students present a working URL."]
    ]
  },
  {
    type: "section",
    section: "AI-Native Workflow",
    eyebrow: "Section 1",
    title: "AI-native creative workflow",
    subtitle: "The real skill is not pushing generate. The real skill is directing, critiquing, and refining."
  },
  {
    type: "statement",
    section: "AI-Native Workflow",
    eyebrow: "Context",
    title: "AI is not actually new.",
    copy: "What feels new is not the existence of AI, but the speed, accessibility, and interface quality that made it widely usable."
  },
  {
    type: "cards",
    section: "AI-Native Workflow",
    eyebrow: "Long-Running Examples",
    title: "AI has already been shaping everyday digital behavior",
    cards: [
      ["Recommendation systems", "Netflix, TikTok, and other platforms have long used predictive systems to shape what people see next."],
      ["Automation", "Spam filters, autocomplete, and sorting systems have quietly reduced decision effort for years."],
      ["Generative assistance", "Photoshop AI tools, translation systems, and predictive writing were already normal before the current hype cycle."],
      ["What changed", "Chat interfaces, multimodal input, and lower barriers made AI feel suddenly available to everyone."]
    ]
  },
  {
    type: "list",
    section: "AI-Native Workflow",
    eyebrow: "Recent Shift",
    title: "What changed recently",
    items: [
      "Better interfaces made AI feel easier to approach.",
      "Chat-based interaction reduced the technical barrier.",
      "Multimodal tools expanded what could be generated.",
      "Public access made experimentation fast and widespread.",
      "Generation quality became fast enough to influence real workflows."
    ]
  },
  {
    type: "statement",
    section: "AI-Native Workflow",
    eyebrow: "Main Risk",
    title: "The danger is not AI use. The danger is stopping thought too early.",
    copy: "When generation is instant, people may stop researching, simplifying, questioning, and critiquing because a fast answer feels good enough."
  },
  {
    type: "compare",
    section: "AI-Native Workflow",
    eyebrow: "Thinking Quality",
    title: "Fast generation does not equal good thinking",
    leftTitle: "AI can generate",
    leftBody: "Quick drafts, endless variations, polished language, and plausible structures at very low cost.",
    rightTitle: "Humans must decide",
    rightBody: "What matters, what should be removed, what users need, and what actually creates clarity instead of confusion."
  },
  {
    type: "cards",
    section: "AI-Native Workflow",
    eyebrow: "Value Shift",
    title: "The AI era makes these human skills more valuable",
    cards: [
      ["Judgment", "Choose what should stay, change, or be rejected."],
      ["Taste", "Recognize weak, generic, or mismatched output."],
      ["Systems thinking", "Create structure so the process stays reusable and collaborative."],
      ["Critique", "Improve quality through evidence, not vague preference."],
      ["Prioritization", "Decide what matters now instead of doing everything at once."],
      ["Direction", "Set a clear goal so AI output supports the right outcome."]
    ]
  },
  {
    type: "section",
    section: "Workspace Thinking",
    eyebrow: "Section 2",
    title: "Workspace thinking",
    subtitle: "Professionals do not treat AI as a one-off chat. They build project memory, rules, and repeatable context."
  },
  {
    type: "compare",
    section: "Workspace Thinking",
    eyebrow: "Workflow Difference",
    title: "Most people use AI like a chat. Professionals use AI like a workspace.",
    leftTitle: "Chat mode",
    leftBody: "Random prompts, random outputs, copy-paste fragments, lost context, inconsistent quality.",
    rightTitle: "Workspace mode",
    rightBody: "Structured files, stored decisions, reusable prompts, project memory, assets, and implementation in one place."
  },
  {
    type: "cards",
    section: "Workspace Thinking",
    eyebrow: "Workspace Contents",
    title: "A strong workspace contains",
    cards: [
      ["Project memory", "Briefs, constraints, and goals that keep the work grounded."],
      ["Rules", "Standards for tone, hierarchy, naming, and implementation."],
      ["Decisions", "Documented UX, UI, and content choices that reduce repeated debate."],
      ["Prompts", "Reusable instructions that improve consistency across iterations."],
      ["Assets", "Files, references, and examples needed by humans and AI."],
      ["Implementation", "The actual HTML, CSS, and content that move the project toward launch."]
    ]
  },
  {
    type: "list",
    section: "Workspace Thinking",
    eyebrow: "Modern Workflow",
    title: "A practical AI-native production loop",
    items: [
      "Define the problem clearly.",
      "Create the workspace.",
      "Add structured context.",
      "Assign AI roles.",
      "Generate a draft.",
      "Critique the output.",
      "Refine the decisions.",
      "Deploy publicly and test."
    ]
  },
  {
    type: "quote",
    section: "Workspace Thinking",
    eyebrow: "Key Frame",
    title: "The workspace becomes the brain of the project.",
    copy: "When project knowledge is organized outside a chat window, collaboration becomes more stable, scalable, and reviewable."
  },
  {
    type: "section",
    section: "Markdown Workflow",
    eyebrow: "Section 3",
    title: "Markdown workflow",
    subtitle: "Markdown turns context into durable project memory that both humans and AI can read quickly."
  },
  {
    type: "statement",
    section: "Markdown Workflow",
    eyebrow: "Definition",
    title: "Markdown is lightweight structured documentation.",
    copy: "It is simple to write, easy to read, semantic enough for AI, and practical for briefs, decisions, prompts, and checklists."
  },
  {
    type: "cards",
    section: "Markdown Workflow",
    eyebrow: "Why It Matters",
    title: "Markdown is useful because it describes structure clearly",
    cards: [
      ["Headings", "Show what the main topic is and how subtopics are grouped under it."],
      ["Lists", "Break ideas into clean steps, rules, or decision points."],
      ["Short labels", "Make project facts easy to scan, like goal, user, CTA, or friction."],
      ["Readable raw text", "Even without styling, the file still makes sense to humans and AI."],
      ["Reusable context", "The same markdown file can support prompting, critique, implementation, and documentation."]
    ]
  },
  {
    type: "compare",
    section: "Markdown Workflow",
    eyebrow: "Format Difference",
    title: "Unstructured notes create confusion. Markdown creates usable context.",
    leftTitle: "Loose notes",
    leftBody: "Random sentences, mixed ideas, missing hierarchy, and unclear priorities make it harder for AI or teammates to understand what matters.",
    rightTitle: "Markdown notes",
    rightBody: "Headings, labels, and lists create a clear shape, so the project becomes easier to scan, reuse, and extend."
  },
  {
    type: "cards",
    section: "Markdown Workflow",
    eyebrow: "Why It Works",
    title: "Why markdown works well with AI",
    cards: [
      ["Lightweight", "Students can write quickly without needing complex software."],
      ["Readable", "The content stays understandable even in plain text."],
      ["Semantic", "Headings and lists give AI stronger structural cues."],
      ["Organized", "Separate files can hold briefs, decisions, prompts, and critiques."],
      ["Portable", "Markdown works well across GitHub, Cursor, Codex, and other AI-native tools."]
    ]
  },
  {
    type: "code",
    section: "Markdown Workflow",
    eyebrow: "Basic Syntax",
    title: "A simple markdown structure students can recognize quickly",
    code: `# Main Title

## Section Title

Short paragraph that explains the section.

- First point
- Second point
- Third point

### Smaller Subsection

Label:
Value`
  },
  {
    type: "code",
    section: "Markdown Workflow",
    eyebrow: "Recommended Structure",
    title: "A simple AI-ready workspace",
    code: `project-name/
├── brief.md
├── ux-decisions.md
├── ui-system.md
├── ai-prompts.md
├── index.html
├── style.css
└── assets/`
  },
  {
    type: "resources",
    section: "Markdown Workflow",
    eyebrow: "Example Structure",
    title: "What each markdown file should usually contain",
    resources: [
      {
        title: "brief.md",
        body: "Defines the project in the simplest possible way.",
        items: ["What is the project?", "Who is it for?", "What is the main goal?", "What is the primary action?"]
      },
      {
        title: "ux-decisions.md",
        body: "Records what the team believes about user behavior and structure.",
        items: ["What users need first", "Main friction", "Trust signals", "Section order", "CTA priority"]
      },
      {
        title: "ui-system.md",
        body: "Stores the visual rules that keep the interface consistent.",
        items: ["Mood", "Type direction", "Spacing rules", "Color roles", "Button behavior"]
      },
      {
        title: "ai-prompts.md",
        body: "Collects prompts that are good enough to reuse.",
        items: ["Review prompts", "Refinement prompts", "Debug prompts", "Content prompts", "QA prompts"]
      }
    ]
  },
  {
    type: "resources",
    section: "Markdown Workflow",
    eyebrow: "Example Files",
    title: "Four markdown files that make AI collaboration better",
    layoutClass: "four-up",
    resources: [
      {
        title: "brief.md",
        body: "Defines the project and keeps the whole team aligned.",
        items: ["Project name", "Goal", "Target user", "Primary CTA"]
      },
      {
        title: "ux-decisions.md",
        body: "Captures user behavior and the logic behind the page structure.",
        items: ["Main friction", "Main CTA", "Trust signals", "Scanning assumptions"]
      },
      {
        title: "ui-system.md",
        body: "Stores visual direction so future outputs stay consistent.",
        items: ["Mood", "Typography direction", "Spacing logic", "Color choices"]
      },
      {
        title: "ai-prompts.md",
        body: "Keeps useful prompts reusable instead of rewriting them each time.",
        items: ["Review prompt", "Refinement prompt", "Debug prompt", "Critique prompt"]
      }
    ]
  },
  {
    type: "code",
    section: "Markdown Workflow",
    eyebrow: "Prompt Example",
    title: "A simple review prompt can live in the workspace",
    code: `# UX Review Prompt

Act as a UX reviewer.
Review this homepage for clarity, friction, trust, and CTA hierarchy.`
  },
  {
    type: "code",
    section: "Markdown Workflow",
    eyebrow: "Full Example",
    title: "A stronger markdown brief gives AI better project memory",
    code: `# Project Brief

Project:
Quitline 1600

Goal:
Help users access support quickly.

Target User:
Adults trying to quit smoking who may feel stressed or hesitant.

Primary CTA:
Call 1600

Key UX Need:
Make the next step feel obvious and safe.

Visual Direction:
Calm, trustworthy, supportive, mobile-first.`
  },
  {
    type: "workshop",
    section: "Markdown Workflow",
    eyebrow: "Workshop",
    title: "Build the workspace first",
    copy: "Students create the project folder, add the core markdown files, and write enough context so an AI assistant can understand the project without a long explanation.",
    timer: "15 minutes"
  },
  {
    type: "cards",
    section: "Markdown Workflow",
    eyebrow: "First Wins",
    title: "The first workshop block should feel easy and real",
    cards: [
      ["Workspace win", "Students make a real project folder and immediately feel they have started a real build."],
      ["Markdown win", "Students write a short `brief.md` and realize structured context is manageable."],
      ["Emotional effect", "The reaction should be: this feels possible, not this feels technical."]
    ]
  },
  {
    type: "section",
    section: "AI Agents + Harness",
    eyebrow: "Section 4",
    title: "AI agents and harness",
    subtitle: "One vague instruction produces vague output. Clear roles and rules produce better collaboration."
  },
  {
    type: "statement",
    section: "AI Agents + Harness",
    eyebrow: "Specialization",
    title: "Different AI roles solve different problems better.",
    copy: "Instead of asking one agent to do everything, assign responsibilities so critique, content, UX, UI, and implementation can improve each other."
  },
  {
    type: "cards",
    section: "AI Agents + Harness",
    eyebrow: "Core Roles",
    title: "Example AI roles for a small website team",
    cards: [
      ["UX agent", "Checks clarity, friction, hierarchy, and CTA priority."],
      ["Content agent", "Improves headlines, supporting copy, tone, and CTA wording."],
      ["UI agent", "Handles typography, spacing, color consistency, and visual rhythm."],
      ["Frontend agent", "Builds semantic HTML and responsive CSS structure."],
      ["QA agent", "Reviews readability, mobile behavior, broken layouts, and accessibility basics."]
    ]
  },
  {
    type: "compare",
    section: "AI Agents + Harness",
    eyebrow: "Key Distinction",
    title: "Workspace and harness are related, but not the same",
    leftTitle: "Workspace",
    leftBody: "The project memory: files, briefs, decisions, prompts, assets, and implementation.",
    rightTitle: "Harness",
    rightBody: "The operating system around the AI: rules, workflows, prompt templates, review loops, and approval logic."
  },
  {
    type: "cards",
    section: "AI Agents + Harness",
    eyebrow: "Harness Elements",
    title: "A simple harness often includes",
    cards: [
      ["Rules", "What the AI should preserve or avoid."],
      ["Workflows", "The order of tasks from brief to deployment."],
      ["Prompt templates", "Reusable instructions for critique, generation, and repair."],
      ["Review loops", "Built-in checkpoints before accepting output."],
      ["Approval logic", "A final human decision before major changes or publishing."]
    ]
  },
  {
    type: "workshop",
    section: "AI Agents + Harness",
    eyebrow: "Workshop",
    title: "Assign the roles before generating",
    copy: "Students decide which agent handles UX, copy, UI, frontend, and QA, then define one rule each role must follow during the build.",
    timer: "10 minutes"
  },
  {
    type: "cards",
    section: "AI Agents + Harness",
    eyebrow: "Agent Win",
    title: "Prompting should feel like direction, not magic",
    cards: [
      ["UX agent", "Checks clarity and CTA hierarchy."],
      ["UI agent", "Checks typography, spacing, and consistency."],
      ["Frontend agent", "Helps implement structure and responsive behavior."],
      ["Small win", "Students realize AI behaves differently when the role and context are specific."]
    ]
  },
  {
    type: "section",
    section: "HTML Structure",
    eyebrow: "Section 5",
    title: "HTML structure",
    subtitle: "HTML is the structural layer. It carries meaning, hierarchy, and accessibility before visual styling begins."
  },
  {
    type: "statement",
    section: "HTML Structure",
    eyebrow: "Core Idea",
    title: "HTML is structure, not decoration.",
    copy: "A good homepage starts with meaningful sections and readable content order, not random divs or visual styling decisions."
  },
  {
    type: "list",
    section: "HTML Structure",
    eyebrow: "Semantic Basics",
    title: "Students should know these structural elements",
    items: [
      "`header` for the top identity and navigation layer.",
      "`nav` for primary movement through the site.",
      "`main` for the central page content.",
      "`section` for grouped content blocks with a clear purpose.",
      "`footer` for closing information, utility links, or contact details."
    ]
  },
  {
    type: "code",
    section: "HTML Structure",
    eyebrow: "Example Structure",
    title: "A simple homepage skeleton",
    code: `<header>
  <nav></nav>
</header>

<main>
  <section class="hero"></section>
  <section class="problem"></section>
  <section class="solution"></section>
  <section class="cta"></section>
</main>

<footer></footer>`
  },
  {
    type: "workshop",
    section: "HTML Structure",
    eyebrow: "Workshop",
    title: "Translate the wireframe into semantic HTML",
    copy: "Students use the Day 1 wireframe and Day 2 hierarchy decisions to define the main sections and content order before any heavy styling begins.",
    timer: "20 minutes"
  },
  {
    type: "code",
    section: "HTML Structure",
    eyebrow: "First HTML Win",
    title: "Celebrate the first working page",
    code: `<h1>Hello World</h1>`
  },
  {
    type: "statement",
    section: "HTML Structure",
    eyebrow: "Teaching Note",
    title: "Do not rush past the first page render.",
    copy: "For many students, opening a browser and seeing their own HTML is the first moment the class becomes real. That simple success matters more than technical sophistication."
  },
  {
    type: "section",
    section: "CSS + Vibe Coding",
    eyebrow: "Section 6",
    title: "CSS and vibe coding",
    subtitle: "CSS makes structure visible through hierarchy, spacing, contrast, and tone."
  },
  {
    type: "statement",
    section: "CSS + Vibe Coding",
    eyebrow: "Visual Logic",
    title: "CSS makes UX visible.",
    copy: "Spacing, hierarchy, and contrast influence understanding, scanning, focus, and clarity. Styling is not separate from usability."
  },
  {
    type: "cards",
    section: "CSS + Vibe Coding",
    eyebrow: "Implementation Priorities",
    title: "What students should define during styling",
    cards: [
      ["Typography hierarchy", "Differentiate headline, subheadline, body, and CTA so users know what matters first."],
      ["Whitespace", "Use spacing to reduce cognitive load and improve grouping."],
      ["Contrast", "Make text, buttons, and sections legible and obvious."],
      ["Responsive thinking", "More screen space should improve clarity, not create more clutter."]
    ]
  },
  {
    type: "compare",
    section: "CSS + Vibe Coding",
    eyebrow: "Responsive Principle",
    title: "Desktop should enhance, not complicate",
    leftTitle: "Weak responsive behavior",
    leftBody: "Extra space gets filled with more noise, more options, and more competing elements.",
    rightTitle: "Strong responsive behavior",
    rightBody: "Extra space improves rhythm, readability, and emphasis while keeping the main path obvious."
  },
  {
    type: "workshop",
    section: "CSS + Vibe Coding",
    eyebrow: "Workshop",
    title: "Build the first visual pass",
    copy: "Students style the homepage with a clear type hierarchy, a CTA that wins attention, enough whitespace to breathe, and a mobile-first responsive layout.",
    timer: "25 minutes"
  },
  {
    type: "cards",
    section: "CSS + Vibe Coding",
    eyebrow: "Visual Win",
    title: "Let students see design control quickly",
    cards: [
      ["Add only a few things first", "Background, spacing, typography, and one button are enough to create a visible upgrade."],
      ["Do not over-teach syntax early", "Let students paste, tweak, and see results before giving too much theory."],
      ["Responsive win", "Resizing the browser should make students feel the page behaves like a real product."]
    ]
  },
  {
    type: "section",
    section: "AI Debugging",
    eyebrow: "Section 7",
    title: "AI debugging workflow",
    subtitle: "Breaking code is part of learning. The point is to learn how to recover, understand, and improve."
  },
  {
    type: "list",
    section: "AI Debugging",
    eyebrow: "Vibe Coding Loop",
    title: "A realistic implementation loop",
    items: [
      "Prompt",
      "Generate",
      "Paste",
      "Break",
      "Debug",
      "Improve",
      "Ship"
    ]
  },
  {
    type: "statement",
    section: "AI Debugging",
    eyebrow: "Learning Mindset",
    title: "Students should not fear breaking code.",
    copy: "AI can help explain errors, reorganize messy structure, and suggest corrections, but students still need to inspect whether the fix actually improves the page."
  },
  {
    type: "code",
    section: "AI Debugging",
    eyebrow: "Debug Prompt",
    title: "Use AI like a tutor, not a magic button",
    code: `Act as a frontend tutor.
Explain this HTML/CSS issue simply and show the corrected version.`
  },
  {
    type: "code",
    section: "AI Debugging",
    eyebrow: "Safe Break",
    title: "Make one bug on purpose, then fix it",
    code: `</div>`
  },
  {
    type: "statement",
    section: "AI Debugging",
    eyebrow: "Confidence Rule",
    title: "Students need to learn that breaking code is normal.",
    copy: "This is a psychological milestone. Errors should feel like part of creative technology work, not proof that the student is failing."
  },
  {
    type: "section",
    section: "Deployment",
    eyebrow: "Section 8",
    title: "GitHub Pages deployment",
    subtitle: "Publishing is part of the design process because a real URL reveals what still breaks in practice."
  },
  {
    type: "cards",
    section: "Deployment",
    eyebrow: "Infrastructure",
    title: "GitHub is creative infrastructure, not only a developer tool",
    cards: [
      ["Portfolio", "A live repository and deployed site become evidence of process and output."],
      ["Collaboration", "Files, commits, and issues keep team work visible."],
      ["Documentation", "Markdown, code, and revision history stay together."],
      ["Deployment", "GitHub Pages turns static files into a real public website."],
      ["Workspace system", "The repository becomes the container for project memory and production logic."]
    ]
  },
  {
    type: "list",
    section: "Deployment",
    eyebrow: "Pages Workflow",
    title: "A simple GitHub Pages flow",
    items: [
      "Create the repository.",
      "Upload the project files.",
      "Open Settings.",
      "Open Pages.",
      "Deploy from the main branch.",
      "Open the live URL.",
      "Test on mobile."
    ]
  },
  {
    type: "statement",
    section: "Deployment",
    eyebrow: "Deployment Win",
    title: "The emotional milestone is opening a public URL.",
    copy: "That moment changes the class from practice into production. Students should feel: my idea is now live on the internet."
  },
  {
    type: "resources",
    section: "Deployment",
    eyebrow: "Team Deliverables",
    title: "Each team should submit",
    resources: [
      {
        title: "Project outputs",
        body: "The build should show both process and implementation.",
        items: ["Live URL", "GitHub repository", "Workspace files", "UX decisions", "UI system", "AI prompt log", "One improvement after critique"]
      }
    ]
  },
  {
    type: "section",
    section: "Reflection",
    eyebrow: "Closing",
    title: "Critique and reflection",
    subtitle: "The final review should improve usability and decision quality, not reward vague opinion."
  },
  {
    type: "list",
    section: "Reflection",
    eyebrow: "Critique Framework",
    title: "Ask only these three questions",
    items: [
      "What is clear?",
      "What is unclear?",
      "What should change first?"
    ]
  },
  {
    type: "quote",
    section: "Reflection",
    eyebrow: "Final Reflection",
    title: "AI does not remove the need for creativity.",
    copy: "It increases the need for direction, judgment, systems, and clarity."
  },
  {
    type: "quote",
    section: "Reflection",
    eyebrow: "Final Closing",
    title: "AI should increase human capability, not decrease human thinking.",
    copy: "The future belongs to people who can direct, critique, organize, and think clearly with AI."
  }
];

const deck = document.getElementById("deck");
const template = document.getElementById("slide-template");
const progressBar = document.getElementById("progress-bar");
const currentSection = document.getElementById("current-section");
const slideCounter = document.getElementById("slide-counter");
const slideTitle = document.getElementById("slide-title");
const slideCue = document.getElementById("slide-cue");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const fullscreenToggle = document.getElementById("fullscreen-toggle");
const bookmarkRail = document.getElementById("bookmark-rail");

let currentIndex = 0;
let touchStartY = 0;
let touchDeltaY = 0;
let slideElements = [];
let bookmarkButtons = [];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function compactText(value, limit = 96) {
  if (!value) return "";

  const normalized = String(value).replace(/\s+/g, " ").trim();
  if (normalized.length <= limit) return normalized;
  return `${normalized.slice(0, limit - 1).trimEnd()}…`;
}

function buildNavCue(slide) {
  if (slide.navCue) return slide.navCue;
  if (slide.timer) return `${slide.eyebrow || slide.section} · ${slide.timer}`;
  if (slide.subtitle) return compactText(slide.subtitle);
  if (slide.copy) return compactText(slide.copy);
  if (slide.prompt) return "Prompt for critique, generation, or debugging";
  if (slide.code) return "Code or file structure example";
  if (slide.eyebrow) return compactText(slide.eyebrow);
  return slide.section;
}

function renderResourceLinks(links = []) {
  if (!links.length) return "";

  return `<div class="resource-links">${links
    .map(({ label, href, download }) => {
      const safeHref = escapeHtml(encodeURI(href));
      const downloadAttribute = download ? " download" : "";
      return `<a class="resource-link" href="${safeHref}"${downloadAttribute}>${escapeHtml(label)}</a>`;
    })
    .join("")}</div>`;
}

function renderPills(pills = []) {
  if (!pills.length) return "";
  return `<div class="meta-row">${pills
    .map((pill) => `<span class="pill">${escapeHtml(pill)}</span>`)
    .join("")}</div>`;
}

function renderList(items = []) {
  return `<ul class="slide-list">${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function renderCards(cards = []) {
  const className = cards.length >= 5 ? "cards-grid three" : "cards-grid";
  return `<div class="${className}">${cards
    .map(
      ([title, body]) => `
        <article class="card">
          <h3>${escapeHtml(title)}</h3>
          <p class="slide-copy">${escapeHtml(body)}</p>
        </article>
      `
    )
    .join("")}</div>`;
}

function renderResources(resources = [], layoutClass = "") {
  const className = layoutClass ? `resource-grid ${layoutClass}` : "resource-grid";
  return `<div class="${className}">${resources
    .map(
      ({ title, body, items = [], links = [] }) => `
        <article class="resource-card">
          <h3>${escapeHtml(title)}</h3>
          <p class="slide-copy">${escapeHtml(body)}</p>
          <ul>
            ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
          ${renderResourceLinks(links)}
        </article>
      `
    )
    .join("")}</div>`;
}

function buildSlideMarkup(slide) {
  const eyebrow = slide.eyebrow ? `<p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>` : "";

  switch (slide.type) {
    case "hero":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="hero-title">${escapeHtml(slide.title)}</h2>
          <p class="subtitle">${escapeHtml(slide.subtitle)}</p>
          <p class="lede">${escapeHtml(slide.lede)}</p>
          ${renderPills(slide.pills)}
          <p class="footer-mark">Day 3 · AI Workspace and Vibe Coding Lab</p>
        </div>
      `;
    case "section":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          <p class="subtitle">${escapeHtml(slide.subtitle)}</p>
        </div>
      `;
    case "statement":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="statement">${escapeHtml(slide.title)}</h2>
          <p class="slide-copy">${escapeHtml(slide.copy)}</p>
        </div>
      `;
    case "list":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          ${renderList(slide.items)}
        </div>
      `;
    case "cards":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          ${renderCards(slide.cards)}
        </div>
      `;
    case "compare":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          <div class="compare-grid">
            <article class="compare-card">
              <h3>${escapeHtml(slide.leftTitle)}</h3>
              <p>${escapeHtml(slide.leftBody)}</p>
            </article>
            <article class="compare-card">
              <h3>${escapeHtml(slide.rightTitle)}</h3>
              <p>${escapeHtml(slide.rightBody)}</p>
            </article>
          </div>
        </div>
      `;
    case "resources":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          ${renderResources(slide.resources, slide.layoutClass)}
        </div>
      `;
    case "workshop":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          <p class="slide-copy">${escapeHtml(slide.copy)}</p>
          ${
            slide.timer
              ? `<div class="timer-card"><span class="timer-dot" aria-hidden="true"></span><span>${escapeHtml(slide.timer)}</span></div>`
              : ""
          }
        </div>
      `;
    case "code":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          <article class="prompt-card">
            <code>${escapeHtml(slide.code)}</code>
          </article>
        </div>
      `;
    case "quote":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <div class="quote-mark">"</div>
          <h2 class="statement">${escapeHtml(slide.title)}</h2>
          <p class="slide-copy">${escapeHtml(slide.copy)}</p>
        </div>
      `;
    default:
      return `<div class="slide-shell">${eyebrow}</div>`;
  }
}

function renderSlides() {
  const fragment = document.createDocumentFragment();

  slides.forEach((slide, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.id = `slide-${index + 1}`;
    node.dataset.index = String(index);
    node.dataset.section = slide.section;
    node.setAttribute("aria-label", `Slide ${index + 1}: ${slide.title}`);
    node.querySelector(".slide-content").innerHTML = buildSlideMarkup(slide);
    fragment.appendChild(node);
  });

  deck.appendChild(fragment);
  slideElements = Array.from(document.querySelectorAll(".slide"));
}

function getBookmarkLabel(slide) {
  const source = slide.title || slide.section || "";
  const match = source.match(/[A-Za-z]/);
  return match ? match[0].toUpperCase() : "#";
}

function renderBookmarks() {
  const fragment = document.createDocumentFragment();

  slides.forEach((slide, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "bookmark-button";
    button.dataset.index = String(index);
    button.setAttribute("aria-label", `Jump to slide ${index + 1}: ${slide.title}`);
    button.title = `${index + 1}. ${slide.title}`;
    button.innerHTML = `<span class="bookmark-letter">${escapeHtml(getBookmarkLabel(slide))}</span><span class="bookmark-number">${index + 1}</span>`;
    button.addEventListener("click", () => goToSlide(index));
    fragment.appendChild(button);
  });

  bookmarkRail.appendChild(fragment);
  bookmarkButtons = Array.from(bookmarkRail.querySelectorAll(".bookmark-button"));
}

function updateChrome(index) {
  const slide = slides[index];
  const progress = ((index + 1) / slides.length) * 100;
  const cueSummary = buildNavCue(slide);
  currentSection.textContent = slide.section;
  slideCounter.textContent = `${index + 1} / ${slides.length}`;
  slideTitle.textContent = slide.title;
  slideTitle.title = slide.title;
  slideCue.textContent = cueSummary;
  slideCue.title = cueSummary;
  progressBar.style.width = `${progress}%`;
  prevButton.disabled = index === 0;
  nextButton.disabled = index === slides.length - 1;
  bookmarkButtons.forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function goToSlide(index, behavior = "smooth") {
  const clamped = Math.max(0, Math.min(index, slideElements.length - 1));
  currentIndex = clamped;
  slideElements[clamped].scrollIntoView({ behavior, block: "start" });
  updateChrome(clamped);
  history.replaceState(null, "", `#slide-${clamped + 1}`);
}

function syncToViewport() {
  let bestIndex = currentIndex;
  let bestDistance = Number.POSITIVE_INFINITY;

  slideElements.forEach((slideEl, index) => {
    const rect = slideEl.getBoundingClientRect();
    const distance = Math.abs(rect.top);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  });

  if (bestIndex !== currentIndex) {
    currentIndex = bestIndex;
    updateChrome(currentIndex);
    history.replaceState(null, "", `#slide-${currentIndex + 1}`);
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
    return;
  }
  document.exitFullscreen?.();
}

function initHashRoute() {
  const match = window.location.hash.match(/slide-(\d+)/);
  if (!match) {
    updateChrome(0);
    return;
  }

  const index = Number(match[1]) - 1;
  requestAnimationFrame(() => goToSlide(index, "auto"));
}

renderSlides();
renderBookmarks();
initHashRoute();

prevButton.addEventListener("click", () => goToSlide(currentIndex - 1));
nextButton.addEventListener("click", () => goToSlide(currentIndex + 1));
fullscreenToggle.addEventListener("click", toggleFullscreen);

document.addEventListener("keydown", (event) => {
  if (
    event.target instanceof HTMLElement &&
    ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)
  ) {
    return;
  }

  if (event.key === "ArrowDown" || event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    goToSlide(currentIndex + 1);
  } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
    event.preventDefault();
    goToSlide(currentIndex - 1);
  } else if (event.key === "Home") {
    event.preventDefault();
    goToSlide(0);
  } else if (event.key === "End") {
    event.preventDefault();
    goToSlide(slideElements.length - 1);
  } else if (event.key.toLowerCase() === "f") {
    event.preventDefault();
    toggleFullscreen();
  }
});

document.addEventListener("scroll", syncToViewport, { passive: true });

document.addEventListener(
  "touchstart",
  (event) => {
    touchStartY = event.changedTouches[0].clientY;
    touchDeltaY = 0;
  },
  { passive: true }
);

document.addEventListener(
  "touchmove",
  (event) => {
    touchDeltaY = event.changedTouches[0].clientY - touchStartY;
  },
  { passive: true }
);

document.addEventListener(
  "touchend",
  () => {
    if (Math.abs(touchDeltaY) < 80) return;
    if (touchDeltaY < 0) {
      goToSlide(currentIndex + 1);
    } else {
      goToSlide(currentIndex - 1);
    }
  },
  { passive: true }
);

window.addEventListener("hashchange", initHashRoute);
window.addEventListener("resize", () => updateChrome(currentIndex));
