const slides = [
  {
    type: "hero",
    section: "Opening",
    eyebrow: "Day 1 · Website Design Fundamentals",
    title: "Website Design Fundamentals",
    subtitle: "UX Thinking in the AI Era",
    lede: "A full-day masterclass on clarity, structure, critique, and AI-assisted UX judgment.",
    pills: ["09:00-17:00", "Mobile-first", "Lecture + Workshop", "Fifa"],
    notes:
      "Open with the framing for the course. Tell students that the goal is not to let AI design for them, but to use AI to generate options while they make the final UX decisions."
  },
  {
    type: "statement",
    section: "Opening",
    eyebrow: "Course Philosophy",
    title: "Good UX feels invisible.",
    copy:
      "When the structure is right, users stop noticing the interface and start moving with confidence.",
    notes:
      "Stress that usability is often judged by how little friction users feel. If they can act without stopping to interpret the screen, the design is doing its job."
  },
  {
    type: "statement",
    section: "Opening",
    eyebrow: "Core Quote",
    title: "Don't make users think.",
    copy: "Clear screens beat clever screens. Obvious next steps beat novelty.",
    notes:
      "Introduce Steve Krug's principle in plain language. Mention that every decision today should reduce uncertainty and cognitive load."
  },
  {
    type: "statement",
    section: "Opening",
    eyebrow: "AI Era",
    title: "AI can generate. Designers must decide.",
    copy:
      "Speed has increased. Judgment has become more important, not less.",
    notes:
      "Use this as the recurring theme for the day. Students should leave knowing that AI helps with breadth, but UX quality still depends on human prioritization."
  },
  {
    type: "list",
    section: "Opening",
    eyebrow: "Learning Outcomes",
    title: "By the end of today, students can",
    items: [
      "Analyze a website using clarity, friction, and CTA hierarchy.",
      "Use AI to generate personas, sitemaps, flows, and critique prompts.",
      "Map a simple user journey from arrival to action.",
      "Create a low-fidelity mobile-first homepage wireframe.",
      "Give useful UX feedback instead of vague opinion."
    ],
    notes:
      "Walk through the outcomes quickly. This gives students a checklist they can measure themselves against throughout the session."
  },
  {
    type: "section",
    section: "Opening",
    eyebrow: "Agenda",
    title: "Day 1 schedule",
    subtitle: "A full lecture day with practical workshop blocks.",
    notes:
      "Set expectations early. Show that the day alternates between short lectures and hands-on application so students know they will be building, not just listening."
  },
  {
    type: "agenda",
    section: "Opening",
    eyebrow: "09:00-17:00",
    title: "Session flow",
    agenda: [
      ["09:00-09:30", "Introduction + Modern UX", "Lecture + discussion"],
      ["09:30-10:30", "Understanding Users", "Workshop"],
      ["10:45-12:00", "Information Architecture", "Lecture + activity"],
      ["13:00-14:00", "User Journey + CTAs", "Workshop"],
      ["14:00-15:00", "Wireframing Fundamentals", "Practical"],
      ["15:15-16:15", "UX Critique Workshop", "Group activity"],
      ["16:15-17:00", "Reflection + Homework", "Discussion"]
    ],
    notes:
      "Mention break and lunch timing verbally. Emphasize that each major session produces a tangible output students will use later."
  },
  {
    type: "cards",
    section: "Opening",
    eyebrow: "Course Roadmap",
    title: "Three-day journey",
    cards: [
      ["Day 1", "UX fundamentals, flow, structure, critique."],
      ["Day 2", "UI systems, hierarchy, style, visual consistency."],
      ["Day 3", "Website development, implementation, and go live."],
    ],
    notes:
      "Frame Day 1 as the foundation. Explain that weak UX structure makes later UI and development work more expensive."
  },
  {
    type: "workshop",
    section: "Opening",
    eyebrow: "Icebreaker",
    title: "What is the best website experience you remember?",
    copy:
      "Ask students what made it effective: speed, clarity, trust, navigation, or conversion confidence.",
    timer: "3-5 minutes discussion",
    notes:
      "Use this to gather language from the room. Pull their examples back to clarity and friction reduction so the icebreaker leads directly into the lesson."
  },
  {
    type: "section",
    section: "Modern UX Mindset",
    eyebrow: "Section 1",
    title: "Modern UX mindset",
    subtitle: "Users scan. Users skip. Users leave.",
    notes:
      "Transition from course setup into the core behavioral reality of the web. Students should stop imagining ideal attentive users."
  },
  {
    type: "statement",
    section: "Modern UX Mindset",
    eyebrow: "Reality Check",
    title: "Users do not read websites. They scan them.",
    copy:
      "Design for interrupted attention. Structure beats explanation.",
    notes:
      "Mention that scanning behavior changes how we write headlines, place CTAs, and group information."
  },
  {
    type: "svg-example",
    section: "Modern UX Mindset",
    eyebrow: "Visual Example",
    title: "What scanning looks like on a real page",
    svgKind: "scanning"
  },
  {
    type: "svg-example",
    section: "Modern UX Mindset",
    eyebrow: "Visual Scanning",
    title: "Common scanning patterns in real interfaces",
    svgKind: "scanning-patterns"
  },
  {
    type: "cards",
    section: "Modern UX Mindset",
    eyebrow: "Pattern Use",
    title: "When these scanning patterns usually appear",
    cards: [
      ["Z-pattern", "Often appears in simple landing pages where users move across the top, then diagonally toward the main CTA."],
      ["F-pattern", "Common in text-heavy pages, dashboards, and search results where users scan headings and the left edge first."],
      ["Gutenberg pattern", "Useful when content is balanced across the page and the final action sits near the terminal reading area."],
      ["Layer Cake", "Strong for modern marketing pages where users scan headlines, subheads, and CTA blocks before body copy."]
    ]
  },
  {
    type: "cards",
    section: "Modern UX Mindset",
    eyebrow: "Why Sites Fail",
    title: "Three common failure modes",
    cards: [
      ["Confusing", "The purpose is hard to identify quickly."],
      ["Crowded", "Too many choices compete for attention."],
      ["Unclear", "The next action is hidden or vague."]
    ],
    notes:
      "Keep this simple. Students will reuse these labels later during critique."
  },
  {
    type: "compare",
    section: "Modern UX Mindset",
    eyebrow: "UX vs UI",
    title: "Beautiful is not enough",
    leftTitle: "UX",
    leftBody: "How it works. How quickly users understand, trust, and act.",
    rightTitle: "UI",
    rightBody: "How it looks. The visual system that supports the experience.",
    notes:
      "Explain that UI is visible and easy to comment on, but UX is where the user either succeeds or stalls."
  },
  {
    type: "section",
    section: "Mini Case Study",
    eyebrow: "Real Websites",
    title: "UX is not the same as UI",
    subtitle: "Compare live websites to separate usefulness from visual style.",
    notes:
      "Use this as a short reality check. Students should see that visual polish and usability do not always rise or fall together."
  },
  {
    type: "cards",
    section: "Mini Case Study",
    eyebrow: "Good UX + Good UI",
    title: "Apple and GOV.UK solve clarity in different ways",
    cards: [
      ["Apple", "Strong visual hierarchy, clear CTA flow, premium presentation, and a controlled scanning path."],
      ["Why it works", "The interface looks polished, but the real strength is that the page still tells users what matters first."],
      ["GOV.UK", "Plain visual style, direct language, strong search, and service-first navigation."],
      ["Why it works too", "It proves strong UX does not require visual drama when the structure is task-focused and obvious."]
    ],
    notes:
      "Contrast Apple and GOV.UK on purpose. One is visually premium, the other is visually plain, but both guide users effectively."
  },
  {
    type: "cards",
    section: "Mini Case Study",
    eyebrow: "Bad UI, Good UX",
    title: "Craigslist is ugly, but still useful",
    cards: [
      ["Weak UI", "Outdated typography, minimal visual polish, and almost no premium styling."],
      ["Strong utility", "Users can scan categories quickly, browse fast, and complete common tasks with low friction."],
      ["Why users stay", "Repeat users care more about speed and familiarity than visual beauty."],
      ["Lesson", "An interface can look bad and still perform well if the path to action stays obvious."]
    ],
    notes:
      "This is the example that usually breaks students' assumptions. Ugly does not automatically mean unusable."
  },
  {
    type: "cards",
    section: "Mini Case Study",
    eyebrow: "Bad UX + Bad UI",
    title: "Berkshire Hathaway shows when both layers fail",
    cards: [
      ["Weak hierarchy", "The page gives little help with attention order or first-time understanding."],
      ["Weak UI", "The layout feels outdated and visually dense, with minimal support for scanning."],
      ["Weak UX", "Users must work harder to interpret the page, identify priorities, and know where to go next."],
      ["Lesson", "If clarity, guidance, and visual communication all break down together, the experience feels harder than it should."]
    ],
    notes:
      "Use this to show that a list of links is not the same thing as a usable information experience."
  },
  {
    type: "statement",
    section: "Modern UX Mindset",
    eyebrow: "5-Second Test",
    title: "Can users understand your page in five seconds?",
    copy:
      "If the answer is no, the design is already asking too much.",
    notes:
      "Use this as a mental model. Students should evaluate first impressions before reading detailed content."
  },
  {
    type: "cards",
    section: "Modern UX Mindset",
    eyebrow: "UX Thinking",
    title: "What UX thinking actually means",
    cards: [
      ["See the task", "Start from what the user is trying to do, not what the brand wants to say first."],
      ["Reduce effort", "Lower the number of decisions, interpretations, and clicks required to move forward."],
      ["Sequence clearly", "Put information in the order users need it: understand, trust, then act."],
      ["Design for reality", "Assume distraction, comparison, hesitation, and limited patience."]
    ],
    notes:
      "This slide makes UX thinking more concrete. Students should understand it as practical decision-making, not just empathy language."
  },
  {
    type: "cards",
    section: "Modern UX Mindset",
    eyebrow: "Core Theory",
    title: "Cognitive load is the hidden cost of bad UX",
    cards: [
      ["Mental effort", "Users already spend energy comparing, deciding, reading, and trusting. Bad UX adds extra effort on top of that."],
      ["What increases it", "Ambiguous labels, crowded layouts, unclear buttons, long forms, and too many choices all make interfaces harder to use."],
      ["What reduces it", "Clear grouping, familiar patterns, short paths, defaults, and obvious next steps lower mental pressure."],
      ["Real-world use", "If a page feels tiring, slow to interpret, or hard to choose from, cognitive load is usually the root problem."]
    ],
    notes:
      "This is one of the most reusable UX principles in real work. Students can apply it to almost every screen they design or critique."
  },
  {
    type: "svg-example",
    section: "Modern UX Mindset",
    eyebrow: "Visual Example",
    title: "Crowded screens create more mental work",
    svgKind: "cognitive-load"
  },
  {
    type: "list",
    section: "Modern UX Mindset",
    eyebrow: "Three Questions",
    title: "Every page should answer",
    items: [
      "What is this?",
      "Who is it for?",
      "What should I do next?"
    ],
    notes:
      "Tell students that if any one of these is unclear, the user starts spending mental energy interpreting instead of progressing."
  },
  {
    type: "cards",
    section: "Modern UX Mindset",
    eyebrow: "User Behavior",
    title: "Users choose the first good-enough path",
    cards: [
      ["Users satisfice", "Most users do not search for the best option. They choose the first option that feels clear, safe, and fast enough."],
      ["Recognition beats recall", "Interfaces work better when users can recognize what to do instantly instead of remembering how the system works."],
      ["Design implication", "Make the best path the most visible, the simplest, and the easiest to act on."],
      ["Common failure", "When five buttons look equally important, users hesitate, guess, or leave."]
    ],
    notes:
      "This connects behavior to layout decisions. Students should understand that clarity is not only about beauty; it changes which option gets chosen."
  },
  {
    type: "compare",
    section: "Modern UX Mindset",
    eyebrow: "Recognition > Recall",
    title: "Users should recognize what to do, not remember how it works",
    leftTitle: "Recall-heavy UI",
    leftBody: "Users must remember hidden rules, unclear icons, or unusual labels before they can continue.",
    rightTitle: "Recognition-first UI",
    rightBody: "Users instantly identify buttons, menu items, next steps, and content relationships from familiar patterns."
    ,
    notes:
      "This principle is practical and immediate. It explains why familiar navigation, visible actions, and plain language outperform clever but ambiguous interfaces."
  },
  {
    type: "workshop",
    section: "Modern UX Mindset",
    eyebrow: "Activity",
    title: "Run a 5-second homepage test",
    copy:
      "Show a homepage for five seconds, hide it, then ask students to answer the three questions from memory.",
    timer: "5 minutes",
    notes:
      "This is the first live demonstration of scanning behavior. The goal is not perfect recall, but noticing what the interface communicated first."
  },
  {
    type: "prompt",
    section: "Modern UX Mindset",
    eyebrow: "AI Prompt",
    title: "5-second homepage test prompt",
    prompt:
      "Act as a UX reviewer. Review this homepage concept using a 5-second test mindset. Answer: 1) What would users understand in 5 seconds? 2) What may still be unclear? 3) Is the target user obvious? 4) Is the main CTA obvious? 5) What should be rewritten to improve clarity? 6) What should be removed or reduced?",
    notes:
      "Use this right after the live 5-second test. It reinforces that clarity should be evaluated before detailed reading begins."
  },
  {
    type: "cards",
    section: "Modern UX Mindset",
    eyebrow: "Conventions",
    title: "Use conventions where users expect them",
    cards: [
      ["Jakob's Law", "Users spend most of their time on other websites, so they expect your interface to work in familiar ways."],
      ["What to keep familiar", "Logo placement, navigation behavior, link styling, menu patterns, cart positions, and CTA structure should not require relearning."],
      ["Why it matters", "Conventions reduce learning time and help users move with more confidence and less friction."],
      ["Good creativity", "Be original in message, brand, and visual tone. Be careful about being original in interaction patterns."]
    ],
    notes:
      "Students often try to innovate in the wrong place. This slide gives them a practical rule for when familiarity is more useful than novelty."
  },
  {
    type: "statement",
    section: "Modern UX Mindset",
    eyebrow: "AI Workflow",
    title: "Prompt. Generate. Critique. Simplify. Test. Improve.",
    copy:
      "The modern workflow is faster, but it still depends on disciplined reduction.",
    notes:
      "Use this slide to introduce the AI-assisted process that will appear throughout the rest of the deck."
  },
  {
    type: "cards",
    section: "Modern UX Mindset",
    eyebrow: "Workflow Detail",
    title: "How AI-assisted UX work should happen",
    cards: [
      ["Prompt with context", "Define the business type, target user, goal, device priority, and conversion action."],
      ["Generate options", "Ask for multiple structures, messages, or flows instead of a single final answer."],
      ["Critique the output", "Check for vagueness, overload, generic content, and missing trust or CTA logic."],
      ["Refine and test", "Shorten, reorder, remove, and then validate with peers or users."]
    ],
    notes:
      "Students need a usable process, not just a slogan. This gives them a repeatable AI workflow for the rest of the course."
  },
  {
    type: "list",
    section: "Modern UX Mindset",
    eyebrow: "What AI Can Do",
    title: "AI is useful for raw material",
    items: [
      "Generate personas, objections, FAQs, and user questions.",
      "Draft sitemap and navigation options in minutes.",
      "Suggest user flows, page structures, headlines, and section order.",
      "Create first-pass critique, comparison, and rewrite options."
    ],
    notes:
      "Position AI as an accelerator for volume and iteration, not as a source of final truth."
  },
  {
    type: "list",
    section: "Modern UX Mindset",
    eyebrow: "What Humans Must Do",
    title: "Humans decide what stays",
    items: [
      "Prioritize what matters most to the user goal.",
      "Remove noise and weak content.",
      "Judge clarity, trust, hierarchy, and strategic fit.",
      "Check whether the result matches real user behavior.",
      "Decide whether the result actually makes sense."
    ],
    notes:
      "This is where you reinforce accountability. The strongest designers remove far more than they add."
  },
  {
    type: "section",
    section: "Understanding Users",
    eyebrow: "Section 2",
    title: "Understanding users",
    subtitle: "Design for behavior, not for your own assumptions.",
    notes:
      "Introduce the shift from general UX principles into specific user-centered thinking."
  },
  {
    type: "statement",
    section: "Understanding Users",
    eyebrow: "Biggest Mistake",
    title: "Designing for yourself.",
    copy:
      "Your preferences are not reliable evidence about your users.",
    notes:
      "Push students to notice how often they assume that what feels obvious to them will feel obvious to everyone."
  },
  {
    type: "statement",
    section: "Understanding Users",
    eyebrow: "User Reality",
    title: "Users want answers, not puzzles.",
    copy:
      "They arrive with goals, questions, time pressure, and limited attention.",
    notes:
      "Tie this to real commercial behavior: people compare, hesitate, and leave quickly if basic questions remain unanswered."
  },
  {
    type: "compare",
    section: "Understanding Users",
    eyebrow: "Cognitive Load",
    title: "Reduce mental effort",
    leftTitle: "High cognitive load",
    leftBody: "Ambiguous labels, crowded pages, and hidden actions force interpretation.",
    rightTitle: "Low cognitive load",
    rightBody: "Clear grouping, plain language, and visible next steps support movement.",
    notes:
      "Define cognitive load in operational terms. It is the cost of figuring out what a screen means and what to do."
  },
  {
    type: "cards",
    section: "Understanding Users",
    eyebrow: "Research Signals",
    title: "What students should look for in user research",
    cards: [
      ["Goals", "What is the user trying to finish, buy, learn, or solve right now?"],
      ["Questions", "What does the user need answered before trusting the page enough to continue?"],
      ["Fears", "What makes the user hesitate: price, risk, quality, time, or credibility?"],
      ["Decision factors", "What finally helps the user choose one option over another?"]
    ],
    notes:
      "This slide makes AI-assisted research more concrete. Students should know exactly what signals to extract."
  },
  {
    type: "prompt",
    section: "Understanding Users",
    eyebrow: "AI Prompt",
    title: "Research prompt for target users",
    prompt:
      "Act as a UX strategist for a [business type] website. Create a quick proto-persona for the primary user. Include their goal, key questions, fears or hesitation, decision factors, device context, emotional state, and what the homepage must answer, support, and remove.",
    notes:
      "This version mirrors the cheat sheet structure and pushes students to ask for usable design signals instead of a generic persona paragraph."
  },
  {
    type: "cards",
    section: "Understanding Users",
    eyebrow: "Prompt Better",
    title: "Add context to get better research output",
    cards: [
      ["Business type", "State the industry, offer, and whether the website sells, informs, books, or captures leads."],
      ["Audience scope", "Name the likely user segment instead of asking about everyone."],
      ["Device context", "Mention mobile-first if most users arrive on phones."],
      ["Outcome", "Ask the AI to show priorities, not just a long descriptive persona."]
    ],
    notes:
      "Students often get generic outputs because their prompts are too broad. This slide improves prompt quality."
  },
  {
    type: "statement",
    section: "Understanding Users",
    eyebrow: "AI Output",
    title: "AI gives raw material. You create clarity.",
    copy:
      "Good UX research uses generated input carefully, then refines it into decisions.",
    notes:
      "Warn students against copying AI personas directly into deliverables. Their job is to extract usable insight."
  },
  {
    type: "list",
    section: "Understanding Users",
    eyebrow: "Research Workflow",
    title: "A practical AI-assisted research flow",
    items: [
      "Ask AI for likely goals, questions, fears, and decision factors.",
      "Compare the output with competitor sites, reviews, or observed behavior.",
      "Keep only the signals that affect navigation, content order, trust, or CTA copy.",
      "Convert the insight into a persona, sitemap decision, or wireframe choice."
    ],
    notes:
      "This turns research into design action. Students should see that research is useful only when it changes a decision."
  },
  {
    type: "cards",
    section: "Understanding Users",
    eyebrow: "Persona Sprint",
    title: "Workshop output",
    cards: [
      ["1 target user", "One focused audience is better than a vague average."],
      ["1 main goal", "What are they trying to accomplish immediately?"],
      ["1 frustration", "What usually blocks progress, trust, or confidence?"],
      ["1 success moment", "How will they know the website helped them?"],
      ["1 critical question", "What must the website answer before this user is ready to continue?"]
    ],
    notes:
      "Keep the exercise intentionally constrained. This prevents generic personas and makes the class prioritize."
  },
  {
    type: "statement",
    section: "Understanding Users",
    eyebrow: "Lecture Note",
    title: "UX is not guessing. UX is reducing uncertainty.",
    copy:
      "The better you understand likely user behavior, the less speculative your design becomes.",
    notes:
      "This is a good transition line into information architecture, where those user expectations start shaping the structure."
  },
  {
    type: "section",
    section: "Information Architecture",
    eyebrow: "Section 3",
    title: "Information architecture",
    subtitle: "Organize content so users do not get lost.",
    notes:
      "Shift from understanding users to shaping the environment they move through."
  },
  {
    type: "statement",
    section: "Information Architecture",
    eyebrow: "Definition",
    title: "IA is how content is grouped, labeled, and found.",
    copy:
      "If the structure is weak, even good content will feel confusing.",
    notes:
      "Define IA in practical terms instead of theory. Students should think menu, hierarchy, labels, and findability."
  },
  {
    type: "statement",
    section: "Information Architecture",
    eyebrow: "Navigation Principle",
    title: "Navigation should feel boring.",
    copy:
      "Predictable labels reduce mental work. Clever labels often hide intent.",
    notes:
      "Say explicitly that boring is a compliment in navigation design."
  },
  {
    type: "cards",
    section: "Information Architecture",
    eyebrow: "Information Scent",
    title: "Users click when the clues feel promising",
    cards: [
      ["What it means", "Information scent is the small clues users use to predict whether a click will help them."],
      ["Where it appears", "Menu labels, headlines, CTA text, thumbnails, previews, and section titles all create or weaken scent."],
      ["Weak scent", "Vague words like Discover, Explore, or Solutions often force users to guess."],
      ["Strong scent", "Specific words like Pricing, Book Consultation, Case Studies, or Course Schedule help users predict the result."]
    ],
    notes:
      "This principle is highly practical for navigation, landing pages, and CTA writing. Students can use it immediately when naming things."
  },
  {
    type: "svg-example",
    section: "Information Architecture",
    eyebrow: "Visual Example",
    title: "Specific labels create stronger click confidence",
    svgKind: "information-scent"
  },
  {
    type: "compare",
    section: "Information Architecture",
    eyebrow: "Label Quality",
    title: "Vague labels vs useful labels",
    leftTitle: "Too vague",
    leftBody: "Solutions. Experience. Discover. Explore. Resources.",
    rightTitle: "More useful",
    rightBody: "Services. Pricing. Case Studies. About. Contact.",
    notes:
      "Ask students which side makes future clicks more predictable. Precision usually wins."
  },
  {
    type: "metrics",
    section: "Information Architecture",
    eyebrow: "Hick's Law",
    title: "More choices slow decisions",
    metrics: [
      ["3 choices", "Easy to scan and compare."],
      ["12 choices", "Harder to evaluate quickly."],
      ["1 clear CTA", "Decision cost drops."],
      ["Many equal CTAs", "Attention fragments."]
    ],
    notes:
      "Keep Hick's Law practical. We are not doing behavioral science detail here; we are using it to justify simplification."
  },
  {
    type: "cards",
    section: "Information Architecture",
    eyebrow: "Progressive Disclosure",
    title: "Do not show everything at once",
    cards: [
      ["Core idea", "Show the most important information first, then reveal deeper detail only when users need it."],
      ["Why it works", "Progressive disclosure lowers overwhelm and keeps early decisions easier."],
      ["Where to use it", "Pricing details, FAQs, filters, advanced settings, onboarding steps, and forms all benefit from staged complexity."],
      ["Design rule", "Keep the first screen simple, then let users ask for more detail instead of forcing it on everyone."]
    ],
    notes:
      "This is a real-world principle students will use in product pages, dashboards, forms, and mobile layouts."
  },
  {
    type: "statement",
    section: "Information Architecture",
    eyebrow: "Simplification Challenge",
    title: "Remove 50%. Make it clearer.",
    copy:
      "Reduction is not loss when it improves understanding and action.",
    notes:
      "Use this to encourage ruthless editing. Students often need permission to remove content."
  },
  {
    type: "prompt",
    section: "Information Architecture",
    eyebrow: "AI Prompt",
    title: "Sitemap generation prompt",
    prompt:
      "Create a simple sitemap for a [business type] website. Include top-level pages, likely sub-pages, clear menu labels, and notes on what to remove, merge, or keep out of the main navigation. Prioritize clarity, conversion, and mobile-first navigation. Limit the main menu to 5 items.",
    notes:
      "The important improvement is asking for removals and merges, not just extra pages. That keeps IA aligned with simplification."
  },
  {
    type: "statement",
    section: "Information Architecture",
    eyebrow: "Human Refinement",
    title: "AI creates options. UX designers remove noise.",
    copy:
      "A smaller, sharper sitemap usually produces a stronger homepage and clearer journey.",
    notes:
      "Connect IA decisions directly to later wireframing quality."
  },
  {
    type: "workshop",
    section: "Information Architecture",
    eyebrow: "Workshop",
    title: "Sitemap sprint",
    copy:
      "Students define the main menu, page hierarchy, primary CTA, and footer links for one chosen business.",
    timer: "15 minutes",
    notes:
      "Walk the room and challenge any menu that feels generic or overloaded."
  },
  {
    type: "section",
    section: "User Flow",
    eyebrow: "Section 4",
    title: "User flow and CTA thinking",
    subtitle: "Every page should answer: what happens next?",
    notes:
      "Move from structure to movement. This section is about momentum toward action."
  },
  {
    type: "statement",
    section: "User Flow",
    eyebrow: "Flow Formula",
    title: "Landing -> Understanding -> Trust -> Action -> Success",
    copy:
      "A page does not convert because it exists. It converts because it guides.",
    notes:
      "Read the sequence slowly. The order helps students reason through conversion screens."
  },
  {
    type: "cards",
    section: "User Flow",
    eyebrow: "Decision Psychology",
    title: "People remember the peak and the ending",
    cards: [
      ["Peak-End Rule", "Users often judge an experience by its most intense moment and the way it ends, not by every moment equally."],
      ["Why it matters", "A confusing checkout, weak confirmation, or unclear thank-you state can damage the whole experience."],
      ["Design implication", "Success states, confirmation screens, and last-step feedback deserve as much care as the homepage."],
      ["Real-world use", "Clear completion messages, next steps, and positive endings improve confidence and memory."]
    ]
  },
  {
    type: "svg-example",
    section: "User Flow",
    eyebrow: "Visual Example",
    title: "User flow improves when friction is visible",
    svgKind: "user-flow"
  },
  {
    type: "statement",
    section: "User Flow",
    eyebrow: "Friction",
    title: "Friction is anything that makes users stop.",
    copy:
      "Every hesitation point is a design clue, not just a conversion problem.",
    notes:
      "Tell students to watch for small blockers: uncertainty, extra fields, weak trust, missing prices, vague buttons."
  },
  {
    type: "cards",
    section: "User Flow",
    eyebrow: "Common Friction",
    title: "Typical blockers",
    cards: [
      ["Unclear CTA", "The action is visible but not meaningful."],
      ["Too many fields", "The form asks for effort too early."],
      ["Hidden pricing", "Users cannot evaluate fit or commitment."],
      ["Weak trust", "There is not enough proof to continue."],
      ["Slow loading", "The experience feels expensive to use."]
    ],
    notes:
      "These are useful critique labels later. Encourage students to reuse the same vocabulary."
  },
  {
    type: "statement",
    section: "User Flow",
    eyebrow: "CTA Rule",
    title: "One primary action per screen.",
    copy:
      "Supporting actions can exist, but the hierarchy must stay obvious.",
    notes:
      "Clarify that having many links is not the same as having many equal actions."
  },
  {
    type: "compare",
    section: "User Flow",
    eyebrow: "CTA Copy",
    title: "Vague vs clear CTA language",
    leftTitle: "Weak",
    leftBody: "Submit. Click Here. Learn More.",
    rightTitle: "Clear",
    rightBody: "Book a Consultation. Get Course Pricing. Start Your Free Trial.",
    notes:
      "Ask which set communicates intent and outcome before the click."
  },
  {
    type: "prompt",
    section: "User Flow",
    eyebrow: "AI Prompt",
    title: "Journey mapping prompt",
    prompt:
      "Map the user flow for a [business type] landing page from landing to action. Show what users need, feel, and question at each step. Identify friction points, trust signals, the next action at each stage, and clearer CTA options.",
    notes:
      "This keeps the flow tied to user state and next-step logic instead of turning into a vague sequence diagram."
  },
  {
    type: "workshop",
    section: "User Flow",
    eyebrow: "Workshop",
    title: "Flow mapping",
    copy:
      "Map a simple path from homepage to CTA, form, and thank-you state. Highlight where trust is built and where friction may appear.",
    timer: "12 minutes",
    notes:
      "Encourage students to keep the flow short and specific. Long abstract journeys become unusable."
  },
  {
    type: "statement",
    section: "User Flow",
    eyebrow: "Peer Test",
    title: "Was the next action obvious?",
    copy:
      "If a classmate has to interpret the path, the flow is not yet clear enough.",
    notes:
      "This is the evaluation prompt for quick peer review before moving into wireframing."
  },
  {
    type: "section",
    section: "Wireframing",
    eyebrow: "Section 5",
    title: "Wireframing fundamentals",
    subtitle: "Think before decorating.",
    notes:
      "Make the transition explicit: now that the structure and flow are clearer, students can visualize it."
  },
  {
    type: "statement",
    section: "Wireframing",
    eyebrow: "Principle",
    title: "Wireframes are decisions.",
    copy:
      "They are not artboards. They are arguments about hierarchy, order, and action.",
    notes:
      "This helps students avoid jumping into visual polish too early."
  },
  {
    type: "statement",
    section: "Wireframing",
    eyebrow: "Low Fidelity",
    title: "Boxes before beauty.",
    copy:
      "If the layout fails in gray boxes, styling will not rescue it.",
    notes:
      "A good line to slow down students who want to design visually before resolving structure."
  },
  {
    type: "split",
    section: "Wireframing",
    eyebrow: "Homepage Structure",
    title: "A mobile-first homepage stack",
    copy:
      "Start with the most compressed version of the experience. Desktop should expand clarity, not complexity.",
    wireframe: [
      "Hero",
      "Problem",
      "Solution",
      "Benefits",
      "Trust",
      "CTA",
      "FAQ",
      "Footer"
    ],
    notes:
      "Walk through why this sequence works for many service or education websites. It follows the trust and action path introduced earlier."
  },
  {
    type: "list",
    section: "Wireframing",
    eyebrow: "Hero Checklist",
    title: "The hero section must answer",
    items: [
      "What is this?",
      "Who is it for?",
      "Why should I trust it?",
      "What do I do next?"
    ],
    notes:
      "Tell students that if the hero misses these questions, the rest of the page starts in a weaker position."
  },
  {
    type: "cards",
    section: "Wireframing",
    eyebrow: "Interaction & Behavior",
    title: "Wireframes should respect how people act",
    cards: [
      ["Fitts's Law", "Bigger and closer targets are easier and faster to hit. Important actions should not feel physically hard to reach."],
      ["Affordance", "Buttons, links, menus, and inputs should look interactive instead of forcing users to guess."],
      ["Mental models", "Users arrive with expectations from other products. Layouts and interactions should mostly match those expectations."],
      ["Why this matters", "A wireframe is not only content order. It also predicts how confident people will feel while interacting."]
    ]
  },
  {
    type: "cards",
    section: "Wireframing",
    eyebrow: "Applied Principles",
    title: "What interaction theory changes in real wireframes",
    cards: [
      ["Larger tap targets", "Primary actions need enough size and spacing to feel easy on mobile."],
      ["Obvious buttons", "Clickable controls should stand out through shape, contrast, or placement."],
      ["Familiar structure", "Navigation, forms, and CTAs should behave in ways users already understand."],
      ["Lower friction", "Good wireframes reduce hesitation before a user even reads the detailed content."]
    ]
  },
  {
    type: "prompt",
    section: "Wireframing",
    eyebrow: "AI Prompt",
    title: "Wireframe prompt",
    prompt:
      "Create a mobile-first homepage wireframe for a [business type]. Include the purpose and content of each section, one primary CTA, supporting information, trust signals, and a simple section order from hero to confirmation or follow-up.",
    notes:
      "Students should ask for section purpose, not only section names. That makes the AI output easier to critique and refine."
  },
  {
    type: "checklist",
    section: "Wireframing",
    eyebrow: "Review Checklist",
    title: "Before you move on",
    checklist: [
      "The message is obvious without reading deeply.",
      "The primary CTA is visible early.",
      "The section order supports trust and action.",
      "The layout is readable on mobile first.",
      "Anything unnecessary has been removed."
    ],
    notes:
      "This is a useful self-review step before peer critique. Students should not rely only on taste."
  },
  {
    type: "workshop",
    section: "Wireframing",
    eyebrow: "Workshop",
    title: "Mobile wireframe sprint",
    copy:
      "Students sketch a homepage, define the CTA, and show the first five sections in low fidelity.",
    timer: "18 minutes",
    notes:
      "Keep them focused on one screen and one user goal. Avoid letting the exercise sprawl."
  },
  {
    type: "workshop",
    section: "Wireframing",
    eyebrow: "Expansion",
    title: "Desktop should enhance, not complicate.",
    copy:
      "Expand the mobile wireframe for larger screens without breaking the same hierarchy or CTA logic.",
    timer: "10 minutes",
    notes:
      "This is where students often add too many columns or actions. Push them to preserve the intent of the mobile layout."
  },
  {
    type: "statement",
    section: "Wireframing",
    eyebrow: "Mini Presentations",
    title: "Explain your wireframe in two minutes.",
    copy:
      "If the rationale is unclear when spoken, it is usually unclear on the page too.",
    notes:
      "Use short presentation time to force clarity and prioritization."
  },
  {
    type: "section",
    section: "UX Critique",
    eyebrow: "Section 6",
    title: "UX critique workshop",
    subtitle: "Feedback should improve clarity, not just express taste.",
    notes:
      "Introduce critique as a method for decision-making rather than personal preference."
  },
  {
    type: "compare",
    section: "UX Critique",
    eyebrow: "Feedback Quality",
    title: "Bad feedback vs useful feedback",
    leftTitle: "Weak",
    leftBody: "I like it. I don't like it. Make it pop.",
    rightTitle: "Useful",
    rightBody: "I understood this first. I was confused here. I expected this button to do something else.",
    notes:
      "Explain that feedback must describe user impact, not just preference."
  },
  {
    type: "metrics",
    section: "UX Critique",
    eyebrow: "Scorecard",
    title: "Rate each design from 1 to 5",
    metrics: [
      ["Clarity", "Can I identify purpose quickly?"],
      ["Navigation", "Can I predict where things go?"],
      ["CTA", "Is the main action obvious?"],
      ["Trust", "Do I feel safe moving forward?"],
      ["Simplicity", "Has unnecessary load been removed?"]
    ],
    notes:
      "A simple framework helps students give consistent feedback without getting lost in details."
  },
  {
    type: "svg-example",
    section: "UX Critique",
    eyebrow: "Visual Example",
    title: "A critique framework should feel structured",
    svgKind: "critique-scorecard"
  },
  {
    type: "prompt",
    section: "UX Critique",
    eyebrow: "AI Prompt",
    title: "Critique prompt",
    prompt:
      "Critique this concept using 3 questions: 1) What is clear? 2) What is unclear? 3) What should change first? Then score clarity, CTA strength, trust, navigation, simplicity, and mobile usability from 1 to 5. Use Don't Make Me Think principles and explain the highest-priority fixes.",
    notes:
      "This format matches the critique scorecard and produces feedback that is easier for students to act on during review."
  },
  {
    type: "statement",
    section: "UX Critique",
    eyebrow: "Context Matters",
    title: "AI can review patterns. Humans understand context.",
    copy:
      "A strong critique combines heuristic thinking with business and audience awareness.",
    notes:
      "Reinforce why students should not outsource their conclusions."
  },
  {
    type: "workshop",
    section: "UX Critique",
    eyebrow: "Group Review",
    title: "Ask three questions during critique",
    copy:
      "What is clear? What is confusing? What should be removed first?",
    timer: "20 minutes",
    notes:
      "Keep the critique efficient. Prioritize the highest-leverage problems instead of line-by-line commentary."
  },
  {
    type: "statement",
    section: "Applied Case Study",
    eyebrow: "Next Step",
    title: "Now apply these UX principles to a real service website brief.",
    copy:
      "The challenge is not to design everything. The challenge is to simplify what matters most for users who need help quickly.",
    notes:
      "Use this as the bridge from critique theory into the assignment. It should feel like the natural practical application of Day 1."
  },
  {
    type: "hero",
    section: "Applied Case Study",
    eyebrow: "Class Assignment",
    title: "Quitline 1600 Website Redesign",
    subtitle: "Mobile-first UX workshop",
    lede: "Turn a complex public-service brief into a clear website concept that helps users understand the service and choose the right action quickly.",
    pills: ["UX side", "Mobile-first", "Case study", "Day 1"],
    notes:
      "Set the tone: this is a realistic service-access problem, not a marketing landing page exercise. Day 1 focuses on the UX foundation."
  },
  {
    type: "list",
    section: "Applied Case Study",
    eyebrow: "Project Framing",
    title: "Reduce the brief to the user-facing experience",
    items: [
      "Do not build the full platform, CMS, dashboard, or PDPA system.",
      "Focus on homepage clarity, service access, and mobile usability.",
      "Make the main support pathways obvious within one to two steps.",
      "Use the brief as a UX/UI case study, not as a production promise."
    ],
    notes:
      "This slide gives students permission to narrow the scope before they start designing."
  },
  {
    type: "cards",
    section: "Applied Case Study",
    eyebrow: "Core Actions",
    title: "The website should make these actions obvious",
    cards: [
      ["Call 1600", "Direct support for users ready to speak with a real person now."],
      ["Add LINE OA", "A familiar and lower-friction channel for continued support."],
      ["Talk to QuitBot", "Immediate guidance for users outside service hours or not ready to call."],
      ["Start assessment", "A simple entry point for readiness, screening, or the next step."]
    ],
    notes:
      "Anchor the project in action pathways so students do not drift into organization-first content."
  },
  {
    type: "cards",
    section: "Applied Case Study",
    eyebrow: "UX Side",
    title: "What the UX team should solve",
    cards: [
      ["Structure", "Decide what users must see first and what belongs on the homepage versus secondary pages."],
      ["Flow", "Map one short path from landing to support with fewer decisions and less hesitation."],
      ["Output", "Create a problem summary, target users, sitemap, and one key user journey."],
      ["Wireframes", "Sketch mobile-first wireframes with a clear hero, main CTA, and logical section order."]
    ],
    notes:
      "Push students to remove noise instead of preserving every requirement from the original brief."
  },
  {
    type: "workshop",
    section: "Applied Case Study",
    eyebrow: "Deliverables",
    title: "What each team submits",
    copy:
      "Submit a UX summary, simplified sitemap, user journey, and mobile-first wireframes that clearly show the path to support.",
    timer: "Workshop output",
    notes:
      "The UI execution continues in Day 2. Day 1 should end with a strong structural direction."
  },
  {
    type: "prompt",
    section: "Applied Case Study",
    eyebrow: "AI Prompt",
    title: "Quitline 1600 case prompt",
    prompt:
      "Act as a UX strategist for a public health service website. Project: Quitline 1600 website redesign. Help people who want to quit smoking understand support options and take the next step. Create: 1) a user snapshot, 2) a simplified sitemap, 3) a short flow map, 4) a mobile-first homepage structure, 5) primary and secondary CTAs, 6) likely friction points, 7) trust signals, and 8) what to remove or simplify. Keep the design clear, supportive, trustworthy, low-pressure, and easy to act on.",
    notes:
      "Use this when teams begin the case study so the AI output stays anchored in the actual class brief instead of generic wellness website patterns."
  },
  {
    type: "statement",
    section: "Applied Case Study",
    eyebrow: "Final Brief",
    title: "Do not design everything. Design what matters most.",
    copy:
      "Redesign the Quitline 1600 website as a mobile-first UX concept that helps users quickly understand the service and choose the right support pathway with minimal confusion.",
    notes:
      "End the assignment block by reinforcing focus and prioritization."
  },
  {
    type: "section",
    section: "AI Prompt Library",
    eyebrow: "Prompt Library",
    title: "AI prompt library",
    subtitle: "Reusable context patterns for Day 1 workshops and homework.",
    notes:
      "The section now complements the prompts already embedded in each lesson instead of repeating them."
  },
  {
    type: "prompt-grid",
    section: "AI Prompt Library",
    eyebrow: "Prompt Set",
    title: "Five context patterns to keep",
    prompts: [
      ["Before / After", "Show the current version first, then propose an improved version and explain why the new version is clearer or easier to act on."],
      ["Remove 50%", "Remove, merge, or simplify at least 50% of anything unnecessary so the strongest signals stay visible."],
      ["CTA Rewrite", "Generate multiple CTA label options that are clearer, more action-oriented, softer, or more trust-building depending on the audience."],
      ["Audience Tailoring", "Adapt the same content for different user types such as first-time visitors, returning users, hesitant users, or urgent users."],
      ["Device Adaptation", "Adapt the same concept for mobile and desktop without adding unnecessary complexity or breaking the core hierarchy."]
    ],
    notes:
      "These are the reusable prompt patterns students can layer onto any section-specific prompt from the day."
  },
  {
    type: "section",
    section: "Student Resources",
    eyebrow: "Student Resources",
    title: "Day 1 resource pack",
    subtitle: "Why this lecture matters, what students should understand, and what to carry into practice.",
    notes:
      "Frame this as the practical toolkit students should carry into homework and Day 2 preparation."
  },
  {
    type: "resources",
    section: "Student Resources",
    eyebrow: "Desktop Resource Board",
    title: "Student resources for lecture purpose, review, and homework",
    desktopHorizontal: true,
    resources: [
      {
        title: "Lecture purpose",
        body: "This lecture trains students to think like UX decision-makers, not screen decorators.",
        items: [
          "Understand why users scan, compare, and leave quickly",
          "Learn to reduce cognitive load through structure and clear labeling",
          "Connect navigation, content order, trust, and CTA hierarchy",
          "Use AI as a speed tool while keeping human judgment in control"
        ]
      },
      {
        title: "Knowledge to remember",
        body: "These are the Day 1 principles that should guide every later design choice.",
        items: [
          "UX is how the experience works; UI is how it looks",
          "Every page should answer what this is, who it is for, and what to do next",
          "Predictable navigation is stronger than clever navigation",
          "One clear primary action per screen usually improves flow"
        ]
      },
      {
        title: "Applied review checklist",
        body: "Use these questions before changing any screen, menu, or wireframe section.",
        items: [
          "Can users understand the page in 5 seconds?",
          "Does the hero answer what, who, why, and next action?",
          "Is there one clear primary CTA?",
          "Did we remove noise instead of adding more explanation?"
        ]
      },
      {
        title: "Prompt toolkit",
        body: "Use AI for fast drafts, then evaluate the output with UX reasoning.",
        items: [
          "Persona: goals, fears, questions, decision factors",
          "Sitemap: 5-item max main navigation",
          "User flow: friction points plus clearer CTA options",
          "Critique: clarity, navigation, CTA hierarchy, cognitive load"
        ]
      },
      {
        title: "Class materials",
        body: "Download the worksheet pack, UX/UI references, and prompt guide used across lecture, workshop, and review.",
        links: [
          {
            label: "Website fundamentals worksheet",
            href: "ClassMaterials/Website Design Fundamental - Worksheet.png",
            download: true
          },
          {
            label: "Sitemap sprint worksheet",
            href: "ClassMaterials/SITEMAP Sprint Worksheet.png",
            download: true
          },
          {
            label: "Web UX/UI cheat sheet",
            href: "ClassMaterials/Web UX:UI CHEAT SHEET.png",
            download: true
          },
          {
            label: "UX context engineering prompt cheat sheet",
            href: "ClassMaterials/UX Context Engineering Prompt Cheat Sheet.png",
            download: true
          },
          {
            label: "Flow mapping worksheet",
            href: "ClassMaterials/Flow Mapping Worksheet.png",
            download: true
          }
        ]
      },
      {
        title: "Homework deliverables",
        body: "Bring these into Day 2 so UI work starts from stronger UX logic.",
        items: [
          "Refined persona",
          "Clean sitemap",
          "Homepage user flow",
          "Improved mobile wireframe with critique notes"
        ]
      }
    ],
    notes:
      "On desktop this should feel like a horizontal resource board. Students can photograph it or use it as a summary slide before leaving."
  },
  {
    type: "worksheets",
    section: "Student Resources",
    eyebrow: "Worksheet 4-5",
    title: "Flow and wireframe worksheets",
    worksheets: [
      ["User Flow", ["Entry point", "Step 1", "Step 2", "CTA", "Success state", "Friction points"]],
      ["Wireframe Checklist", ["Hero message is clear", "CTA is visible", "Navigation is simple", "Sections are logical", "Mobile layout is readable", "Unnecessary content removed"]]
    ],
    notes:
      "Good for homework as well. They also create a shared language for peer review."
  },
  {
    type: "section",
    section: "Reflection",
    eyebrow: "Closing",
    title: "What we learned",
    subtitle: "Clarity wins. AI accelerates. Designers decide.",
    notes:
      "Use this section to compress the whole day back into a few lines the students can remember."
  },
  {
    type: "list",
    section: "Reflection",
    eyebrow: "Day Summary",
    title: "Key takeaways",
    items: [
      "Users scan before they read.",
      "Clear structure reduces cognitive load.",
      "Navigation should feel obvious and predictable.",
      "One strong CTA beats many competing actions.",
      "AI helps generate options, but quality comes from human judgment."
    ],
    notes:
      "Summarize without adding new theory. This is a memory consolidation moment."
  },
  {
    type: "cards",
    section: "Reflection",
    eyebrow: "Carry Forward",
    title: "Take these into Day 2",
    cards: [
      ["Clear user priorities", "Know what users must understand, trust, and do first."],
      ["Simplified structure", "Keep only the sections and navigation that support the main goal."],
      ["Stronger flow", "Use a short path with one obvious primary action."],
      ["Wireframe direction", "Bring a cleaner mobile-first layout into UI work."],
      ["Critique mindset", "Keep asking what is clear, confusing, or removable."]
    ],
    notes:
      "This avoids repeating the assignment deliverables while still giving students a practical handoff into Day 2."
  },
  {
    type: "workshop",
    section: "Reflection",
    eyebrow: "Homework",
    title: "Refine your Quitline concept using feedback and AI critique.",
    copy:
      "Prepare a cleaner homepage wireframe and stronger section hierarchy for Day 2, where visual hierarchy and interface design take over.",
    timer: "Post-class task",
    notes:
      "Tell students the homework is not to add decoration. The goal is to sharpen clarity before UI work."
  },
  {
    type: "quote",
    section: "Reflection",
    eyebrow: "Final Quote",
    title: "Don't make users think. Make them feel guided.",
    copy:
      "The best interfaces feel calm because the designer already did the hard thinking.",
    notes:
      "Close on the relationship between effort and experience: users feel ease because the design work was rigorous."
  }
];

const facilitatorNotesByTitle = {
  "Website Design Fundamentals": "Focus: Frame the day as UX decision-making before UI polish. Everyday life: People choose the easiest route in Maps, not the prettiest road. Ask: What makes a website feel easy immediately? Watch for: Students treating web design as decoration first. Transition: Move from course framing into what good UX actually feels like.",
  "Good UX feels invisible.": "Focus: Good UX removes friction so users stay on their task. Everyday life: Automatic doors work because nobody has to stop and think. Ask: Which products feel easy without explanation? Watch for: Confusing invisible with boring or plain. Transition: Define the principle that makes invisible UX possible.",
  "Don't make users think.": "Focus: Clarity beats cleverness when users are busy. Everyday life: A confusing self-checkout machine creates stress in seconds. Ask: Where have you had to think too much in daily life? Watch for: Students assuming clever labels are memorable. Transition: Connect this principle to modern AI-assisted design work.",
  "AI can generate. Designers must decide.": "Focus: AI increases speed, but human judgment still chooses what stays. Everyday life: A recipe app can suggest meals, but you still decide what to cook. Ask: Which decisions should never be outsourced? Watch for: Treating AI output as final truth. Transition: Show the concrete skills students will practice today.",
  "By the end of today, students can": "Focus: Set measurable learning outcomes so students know what success looks like. Everyday life: A workout plan feels easier when you know the exercises in advance. Ask: Which skill feels hardest right now? Watch for: Students hearing the day as theory only. Transition: Move from outcomes into the schedule.",
  "Day 1 schedule": "Focus: Show that the day alternates between explanation and application. Everyday life: A travel itinerary reduces anxiety because the route is visible. Ask: Which session are you most curious about? Watch for: Students assuming they will only listen all day. Transition: Break the agenda into concrete blocks.",
  "Session flow": "Focus: Each block should produce a usable output. Everyday life: A checklist makes a big task feel manageable. Ask: Why is it useful to alternate lecture and workshop? Watch for: Treating each section as isolated instead of cumulative. Transition: Zoom out to the three-day journey.",
  "Three-day journey": "Focus: UX comes before UI, and UI comes before development. Everyday life: You plan the house before choosing paint colors. Ask: What happens if UI starts before UX? Watch for: Students wanting to jump straight into screens. Transition: Warm up with real website experiences they already know.",
  "What is the best website experience you remember?": "Focus: Get students to describe usability in their own words. Everyday life: Think of a booking, shopping, or food delivery site that felt effortless. Ask: What made it feel easy? Watch for: Answers that mention only aesthetics. Transition: Use their examples to introduce scanning behavior.",
  "Modern UX mindset": "Focus: Reset expectations around distracted web behavior. Everyday life: People skim menus, posters, and signs before reading details. Ask: Do users really read everything on a page? Watch for: Designing for ideal patient readers. Transition: State the scanning reality directly.",
  "Users do not read websites. They scan them.": "Focus: Layout must support fast scanning, not perfect attention. Everyday life: In a food app, people check name, price, rating, and order first. Ask: What do you look at first on a page? Watch for: Believing more explanation fixes weak structure. Transition: Visualize what scanning looks like.",
  "What scanning looks like on a real page": "Focus: Show that attention lands in patterns, not evenly. Everyday life: Reading street signs while walking means grabbing only the strongest signals. Ask: Where does your eye land first? Watch for: Assuming users see every block equally. Transition: Compare common scanning patterns.",
  "Common scanning patterns in real interfaces": "Focus: Different page shapes create different eye paths. Everyday life: People read a poster differently from a long article. Ask: Which pattern fits landing pages best? Watch for: Treating one pattern as universal. Transition: Match each pattern to real interface contexts.",
  "When these scanning patterns usually appear": "Focus: Pattern choice depends on content density and layout. Everyday life: A convenience store and a supermarket organize browsing differently. Ask: Why does one pattern not fit every page? Watch for: Memorizing labels without understanding use. Transition: Show what goes wrong when scanning is ignored.",
  "Three common failure modes": "Focus: Confusing, crowded, and unclear are practical critique labels. Everyday life: A messy convenience store shelf makes even simple choices hard. Ask: Which failure mode hurts users fastest? Watch for: Calling everything bad without naming why. Transition: Separate visual beauty from actual usefulness.",
  "Beautiful is not enough": "Focus: Visual polish does not guarantee clarity or action. Everyday life: A fancy restaurant menu can still be hard to use. Ask: Would you trade beauty for clarity? Watch for: Students equating premium visuals with good UX. Transition: Make the UX versus UI distinction explicit.",
  "UX is not the same as UI": "Focus: UX is how it works and UI is how it communicates visually. Everyday life: A plain ATM can still be easier to use than a stylish kiosk. Ask: Can ugly still work well? Watch for: Using UX and UI as synonyms. Transition: Test the distinction with real website examples.",
  "Apple and GOV.UK solve clarity in different ways": "Focus: Different visual styles can both support strong UX. Everyday life: A luxury store and a government office can both have clear signage. Ask: What do these two examples do similarly? Watch for: Thinking good UX must look premium. Transition: Push the point further with Craigslist.",
  "Craigslist is ugly, but still useful": "Focus: Utility can outweigh weak visual polish. Everyday life: An old market stall can still help you find things quickly. Ask: Why do users tolerate bad visuals here? Watch for: Dismissing usefulness because it looks outdated. Transition: Show what happens when both UX and UI fail together.",
  "Berkshire Hathaway shows when both layers fail": "Focus: Weak hierarchy plus weak visual support creates extra work. Everyday life: A notice board covered in random papers feels tiring immediately. Ask: What is hard here in the first few seconds? Watch for: Vague criticism without linking it to user effort. Transition: Introduce the 5-second test as a simple clarity check.",
  "Can users understand your page in five seconds?": "Focus: First impression matters before users commit to reading. Everyday life: A storefront has seconds to tell you what the shop is and whether to enter. Ask: What must be obvious in five seconds? Watch for: Students relying on later sections to explain weak heroes. Transition: Define UX thinking in practical terms.",
  "What UX thinking actually means": "Focus: Start from the user task, then reduce effort around it. Everyday life: Helping someone find the right queue at a hospital is UX thinking. Ask: What is the user trying to do first? Watch for: Talking about empathy without changing decisions. Transition: Name the cost that weak UX creates.",
  "Cognitive load is the hidden cost of bad UX": "Focus: Bad UX creates mental work on top of the user's real task. Everyday life: A menu with 40 drinks can feel tiring before you choose anything. Ask: What makes a page feel mentally heavy? Watch for: Treating overload as only a visual problem. Transition: Visualize high and low cognitive load.",
  "Crowded screens create more mental work": "Focus: Too many competing signals raise effort and slow action. Everyday life: A cluttered desk makes even simple tasks feel slower. Ask: What would you remove first? Watch for: Adding content to fix confusion instead of cutting it. Transition: Reduce the page to three essential questions.",
  "Every page should answer": "Focus: Every page must say what it is, who it is for, and what happens next. Everyday life: A movie poster quickly signals the topic, audience, and next action. Ask: Which of these three is most often missing? Watch for: Assuming users will infer the answer. Transition: Connect clarity to how people actually choose.",
  "Users choose the first good-enough path": "Focus: Users satisfice instead of searching forever for the perfect option. Everyday life: In a supermarket, most people pick the first acceptable toothpaste. Ask: Do users optimize or settle? Watch for: Designing as if people compare every choice deeply. Transition: Explain why recognition matters more than memory.",
  "Users should recognize what to do, not remember how it works": "Focus: Familiar cues reduce effort better than hidden rules. Everyday life: A microwave with clear labels is easier than one with mystery icons. Ask: Where have hidden rules frustrated you? Watch for: Mistaking novelty for usability. Transition: Practice first-impression evaluation live.",
  "Run a 5-second homepage test": "Focus: Test clarity before detail by using very short exposure. Everyday life: A quick glance at a shopfront already shapes your decision to enter. Ask: What do you remember after five seconds? Watch for: Turning the exercise into a memory contest. Transition: Show how AI can structure the review.",
  "5-second homepage test prompt": "Focus: Use AI to capture first-impression questions in a consistent way. Everyday life: Asking a friend what they noticed first gives similar insight. Ask: Which of the six questions reveals the biggest problem? Watch for: Letting AI replace human observation. Transition: Return to conventions that support fast recognition.",
  "Use conventions where users expect them": "Focus: Familiar patterns reduce learning cost. Everyday life: Elevator buttons work because their positions are predictable. Ask: When is originality harmful? Watch for: Reinventing navigation to feel creative. Transition: Turn the mindset into a repeatable AI workflow.",
  "Prompt. Generate. Critique. Simplify. Test. Improve.": "Focus: Good AI-assisted UX work is iterative, not one-shot. Everyday life: Writing, editing, and getting feedback is stronger than posting the first draft. Ask: Which step do students usually skip? Watch for: Stopping at generate. Transition: Break the workflow into clearer steps.",
  "How AI-assisted UX work should happen": "Focus: Good prompts need context, and good outputs need critique. Everyday life: Better directions produce better route advice. Ask: Why do vague prompts fail? Watch for: Asking AI for final answers instead of options. Transition: Clarify where AI is useful.",
  "AI is useful for raw material": "Focus: AI is strongest as a source of options and first drafts. Everyday life: Brainstorming with a fast assistant can widen ideas quickly. Ask: What would you ask AI to generate first? Watch for: Expecting polished final strategy. Transition: Reinforce what humans still own.",
  "Humans decide what stays": "Focus: The designer's job is prioritization and removal. Everyday life: Packing a bag is mostly about what you leave out. Ask: Why is removal a design skill? Watch for: Keeping everything AI suggests. Transition: Move from general UX into understanding real users.",
  "Understanding users": "Focus: Design decisions should be shaped by user behavior, not your own taste. Everyday life: Buying a gift for someone else requires their preferences, not yours. Ask: Why is designing for yourself risky? Watch for: Defaulting to personal opinion. Transition: Name the most common mistake directly.",
  "Designing for yourself.": "Focus: Personal preference is not evidence about users. Everyday life: Assuming everyone likes your coffee order leads to bad recommendations. Ask: What user assumption is most often wrong? Watch for: Students defending design choices with only their own habits. Transition: Recenter on user goals and questions.",
  "Users want answers, not puzzles.": "Focus: Users arrive with limited time, attention, and patience. Everyday life: Checking clinic hours or delivery fees should not feel like detective work. Ask: What questions must a page answer immediately? Watch for: Confusing mystery with engagement. Transition: Define mental effort in user terms.",
  "Reduce mental effort": "Focus: Lowering cognitive load helps people move with confidence. Everyday life: Clear airport signs calm people because the next step is obvious. Ask: What makes navigation feel easy? Watch for: Treating mental effort as invisible and unimportant. Transition: Show what research signals matter.",
  "What students should look for in user research": "Focus: Goals, questions, fears, and decision factors drive design choices. Everyday life: Before booking a hotel, people care about price, location, trust, and convenience. Ask: Which factor changes decisions fastest? Watch for: Collecting facts that never affect the design. Transition: Use AI to build a proto-persona with that structure.",
  "Research prompt for target users": "Focus: Prompt for design-relevant context, not a generic persona paragraph. Everyday life: Giving a friend full context gets better advice than asking for general tips. Ask: What makes a persona useful for design? Watch for: Accepting fluffy AI personas. Transition: Explain how to improve prompt quality further.",
  "Add context to get better research output": "Focus: Business type, audience, device, and outcome make prompts more useful. Everyday life: A doctor gives better advice when symptoms are specific. Ask: Which context detail improves AI output most? Watch for: Broad prompts aimed at everyone. Transition: Remind them AI output still needs interpretation.",
  "AI gives raw material. You create clarity.": "Focus: Research only matters when it changes structure, content, or action. Everyday life: Ingredients are not a meal until someone cooks and edits. Ask: What should you keep from AI output? Watch for: Copy-pasting AI research into deliverables. Transition: Walk through a practical workflow.",
  "A practical AI-assisted research flow": "Focus: Research should move from signals to design decisions. Everyday life: Reading reviews only matters if it changes which restaurant you choose. Ask: How does research change a wireframe? Watch for: Ending the process at research notes. Transition: Turn this into a tight workshop output.",
  "Workshop output": "Focus: One target user and one main goal create better personas than vague averages. Everyday life: Serving one clear customer is easier than trying to serve everyone at once. Ask: What happens when the persona is too broad? Watch for: Overbuilding the persona exercise. Transition: Summarize UX as uncertainty reduction.",
  "UX is not guessing. UX is reducing uncertainty.": "Focus: Better user understanding reduces speculative design choices. Everyday life: Asking for directions is safer than wandering. Ask: How does user insight reduce guessing? Watch for: Treating UX as intuition alone. Transition: Move from users into content structure.",
  "Information architecture": "Focus: IA shapes how people find and understand content. Everyday life: A supermarket layout can save or waste time. Ask: What makes a place easy to navigate? Watch for: Thinking IA is only about menus. Transition: Define IA in practical language.",
  "IA is how content is grouped, labeled, and found.": "Focus: Good content still fails when structure is weak. Everyday life: A messy downloads folder makes useful files feel lost. Ask: What happens when categories are weak? Watch for: Separating copy quality from findability. Transition: Start with navigation labeling.",
  "Navigation should feel boring.": "Focus: Predictable labels reduce mental work. Everyday life: Emergency exit signs should be obvious, not creative. Ask: When is boring actually good? Watch for: Brand language replacing clear labels. Transition: Introduce information scent.",
  "Users click when the clues feel promising": "Focus: People follow small cues that predict the value of a click. Everyday life: A door label tells you whether entering is worth it. Ask: What labels create strong confidence? Watch for: Overvaluing vague marketing words. Transition: Show strong versus weak labels visually.",
  "Specific labels create stronger click confidence": "Focus: Specificity helps users predict results before clicking. Everyday life: Pharmacy is clearer than wellness solutions. Ask: Which label would you click first? Watch for: Assuming abstract words sound more premium. Transition: Compare vague and useful labels directly.",
  "Vague labels vs useful labels": "Focus: Useful labels lower guesswork and increase confidence. Everyday life: A store sign that says repairs is clearer than discover more. Ask: Which side makes the next click easier to predict? Watch for: Defending vague labels because they sound modern. Transition: Tie clearer IA to decision speed.",
  "More choices slow decisions": "Focus: Too many equal choices create hesitation. Everyday life: Ordering from 40 ice cream flavors takes longer than ordering from 6. Ask: How many main options feel manageable? Watch for: Treating more content as always more helpful. Transition: Show how to reveal detail gradually.",
  "Do not show everything at once": "Focus: Progressive disclosure lowers overwhelm by staging complexity. Everyday life: Phone camera apps hide advanced settings until needed. Ask: Where should detail be delayed? Watch for: Dumping every explanation on the first screen. Transition: Make simplification feel like a deliberate rule.",
  "Remove 50%. Make it clearer.": "Focus: Strong UX often comes from cutting, merging, and simplifying. Everyday life: Cleaning a crowded backpack makes the essentials easier to reach. Ask: What can we remove without harming the task? Watch for: Assuming reduction means losing value. Transition: Apply the idea to sitemap generation.",
  "Sitemap generation prompt": "Focus: Ask AI for structure plus what to merge or remove. Everyday life: Planning a mall map means choosing the main destinations, not listing everything equally. Ask: What pages do not belong in the main nav? Watch for: Using AI to create bloated sitemaps. Transition: Reinforce human editing after generation.",
  "AI creates options. UX designers remove noise.": "Focus: A smaller, sharper structure often creates a stronger page. Everyday life: Editing a long message into one clear sentence improves communication. Ask: Why is smaller often stronger? Watch for: Confusing completeness with clarity. Transition: Move into the sitemap sprint.",
  "Sitemap sprint": "Focus: Students must make real hierarchy and labeling decisions quickly. Everyday life: Planning the rooms in a small apartment forces prioritization. Ask: What must users find fastest? Watch for: Menus full of generic categories. Transition: Shift from structure into movement through the site.",
  "User flow and CTA thinking": "Focus: UX is about guiding momentum toward the next action. Everyday life: Ordering coffee works because each step is obvious. Ask: Where do users usually get stuck? Watch for: Thinking flow is only about arrows on a diagram. Transition: State the conversion sequence explicitly.",
  "Landing -> Understanding -> Trust -> Action -> Success": "Focus: Good pages guide users through a sequence, not just a layout. Everyday life: Meeting someone, trusting them, then deciding is naturally sequential. Ask: Which stage is most often skipped? Watch for: Jumping to action before trust is built. Transition: Explain why endings matter too.",
  "People remember the peak and the ending": "Focus: Success states and last steps affect the whole memory of the experience. Everyday life: A bad checkout can ruin a good shopping trip. Ask: What ending do users remember most? Watch for: Spending all energy on the homepage only. Transition: Visualize where friction enters the flow.",
  "User flow improves when friction is visible": "Focus: Mapping friction helps teams design smoother movement. Everyday life: A traffic jam reveals exactly where the route fails. Ask: What friction can we predict early? Watch for: Treating drop-off as only a metrics problem. Transition: Define friction more plainly.",
  "Friction is anything that makes users stop.": "Focus: Hesitation is a design clue, not just a conversion failure. Everyday life: A long signup form makes people reconsider immediately. Ask: What kind of friction is most common online? Watch for: Focusing only on visual polish instead of blockers. Transition: Name typical blockers students can reuse in critique.",
  "Typical blockers": "Focus: Clear labels for blockers make critique more useful. Everyday life: Hidden delivery fees or surprise costs change decisions fast. Ask: Which blocker kills trust fastest? Watch for: Calling everything friction without specificity. Transition: Narrow attention to CTA hierarchy.",
  "One primary action per screen.": "Focus: Supporting actions can exist, but one action must clearly win. Everyday life: One obvious checkout line is easier than five unclear counters. Ask: What happens when all buttons shout? Watch for: Equal visual weight on every link. Transition: Compare weak and clear CTA wording.",
  "Vague vs clear CTA language": "Focus: Good CTA copy explains the outcome before the click. Everyday life: Open account is clearer than continue. Ask: Which CTA promises a result? Watch for: Using generic verbs because they sound familiar. Transition: Map the whole journey with needs and trust in mind.",
  "Journey mapping prompt": "Focus: Ask AI for needs, feelings, trust signals, and next actions at each step. Everyday life: Going from searching for a clinic to booking an appointment involves emotional changes as well as steps. Ask: What should happen at each stage? Watch for: Creating a flow with no user state. Transition: Practice flow mapping directly.",
  "Flow mapping": "Focus: Keep the journey short, specific, and tied to one goal. Everyday life: Buying movie tickets has a clear start, choice, payment, and confirmation. Ask: Where does confusion usually appear? Watch for: Building abstract, overcomplicated journeys. Transition: End with a fast peer clarity check.",
  "Was the next action obvious?": "Focus: If peers hesitate, the flow still needs work. Everyday life: Handing your phone to a friend reveals confusion quickly. Ask: Did they know what to do next without help? Watch for: Defending unclear paths verbally. Transition: Turn flow decisions into wireframes.",
  "Wireframing fundamentals": "Focus: Wireframes test hierarchy and order before visual style. Everyday life: A floor plan comes before interior decoration. Ask: Why wireframe before styling? Watch for: Jumping into color and typography too soon. Transition: Define what a wireframe really represents.",
  "Wireframes are decisions.": "Focus: Each box represents a claim about priority and action. Everyday life: Arranging dishes on a menu board decides what people notice first. Ask: What decision does each block make? Watch for: Treating wireframes as placeholder artboards. Transition: Strip the process back to low fidelity.",
  "Boxes before beauty.": "Focus: Weak structure will stay weak even after styling. Everyday life: Bad furniture placement still feels wrong after decoration. Ask: Can visual polish rescue poor layout? Watch for: Overconfidence in UI to fix UX problems. Transition: Show a practical homepage stack.",
  "A mobile-first homepage stack": "Focus: Section order should support understanding, trust, and action. Everyday life: A story works better when the sequence is clear. Ask: What belongs first after the hero? Watch for: Adding sections without purpose. Transition: Zoom into the hero's job.",
  "The hero section must answer": "Focus: The hero must explain what, who, trust, and next step quickly. Everyday life: A storefront sign should tell you what the shop is before you walk in. Ask: What does a weak hero usually miss? Watch for: Heroes that are aspirational but unclear. Transition: Add interaction principles to the wireframe lens.",
  "Wireframes should respect how people act": "Focus: Wireframes should already account for taps, affordance, and expectations. Everyday life: A large door handle signals use better than a hidden button. Ask: What feels obviously clickable? Watch for: Treating wireframes as content order only. Transition: Turn theory into practical layout choices.",
  "What interaction theory changes in real wireframes": "Focus: Interaction theory affects target size, placement, and confidence. Everyday life: Larger mobile buttons reduce accidental taps in everyday apps. Ask: What makes a mobile interface feel easier? Watch for: Thinking these principles only matter after UI styling. Transition: Use AI to generate structural options.",
  "Wireframe prompt": "Focus: Ask AI for section purpose and CTA logic, not just section names. Everyday life: Asking for a recipe with steps is better than asking only for ingredients. Ask: What should each section do? Watch for: Accepting shallow wireframe outputs. Transition: End with a practical self-review checklist.",
  "Before you move on": "Focus: Review for clarity, CTA visibility, order, mobile readability, and reduction. Everyday life: Checking your bag before leaving prevents small mistakes later. Ask: Which checkpoint is most often missed? Watch for: Relying on taste instead of criteria. Transition: Put the checklist into a sprint.",
  "Mobile wireframe sprint": "Focus: One page and one user goal create better first drafts. Everyday life: Solving one task well is better than planning an entire system badly. Ask: What is the single goal of this page? Watch for: Trying to design everything at once. Transition: Expand the same logic to desktop carefully.",
  "Desktop should enhance, not complicate.": "Focus: Larger screens should add breathing room, not break hierarchy. Everyday life: A bigger room does not need extra random furniture. Ask: What should stay the same from mobile? Watch for: Filling desktop space with unnecessary blocks. Transition: Ask students to explain their logic out loud.",
  "Explain your wireframe in two minutes.": "Focus: If the rationale is hard to explain, the design is probably unclear too. Everyday life: If you cannot explain a route simply, it is probably too complex. Ask: Can you justify the order and CTA quickly? Watch for: Explaining with intentions the UI does not show. Transition: Shift from making to critiquing.",
  "UX critique workshop": "Focus: Critique should improve clarity and action, not express personal taste. Everyday life: Useful feedback on a group project explains the problem, not just preference. Ask: What makes feedback actually helpful? Watch for: Turning critique into opinion sharing. Transition: Contrast weak and strong feedback styles.",
  "Bad feedback vs useful feedback": "Focus: Evidence-based feedback describes user impact. Everyday life: Saying this was hard to find is more useful than saying I do not like it. Ask: Which type of feedback leads to change? Watch for: Comments with no observable reason. Transition: Add a simple scoring framework.",
  "Rate each design from 1 to 5": "Focus: A shared scorecard keeps critique focused and consistent. Everyday life: Restaurant reviews separate food, service, and value to be more useful. Ask: Why do criteria help group feedback? Watch for: Using scores without explanation. Transition: Show the structure visually.",
  "A critique framework should feel structured": "Focus: Structured critique creates repeatable evaluation habits. Everyday life: Inspectors use checklists so quality checks stay fair. Ask: What should always be evaluated? Watch for: Letting loud opinions dominate review. Transition: Pair the framework with an AI prompt.",
  "Critique prompt": "Focus: Ask AI what is clear, unclear, and highest priority to fix, then score core criteria. Everyday life: A friend reviewing your resume is more helpful with structure than with random comments. Ask: What should change first? Watch for: Treating AI critique as context-aware. Transition: State the human advantage clearly.",
  "AI can review patterns. Humans understand context.": "Focus: Humans bring audience, business, and situational context that AI lacks. Everyday life: A navigation app knows roads, but not your personal preference or urgency. Ask: What context does AI usually miss? Watch for: Outsourcing the conclusion. Transition: Keep the class critique short and high leverage.",
  "Ask three questions during critique": "Focus: Clear, confusing, and removable are enough to find strong improvements. Everyday life: Quick service feedback often works best with just a few direct questions. Ask: Which question produces the strongest fix? Watch for: Overloading critique with too many minor comments. Transition: Apply all of this to the real class brief.",
  "Now apply these UX principles to a real service website brief.": "Focus: Move from theory into a concrete public-service problem. Everyday life: Practice drills matter most when you apply them in a real game. Ask: Which UX principle matters most for this brief? Watch for: Treating the case like a generic landing page. Transition: Introduce the Quitline project clearly.",
  "Quitline 1600 Website Redesign": "Focus: This project is about helping stressed users find support quickly. Everyday life: When people need help, they want the fastest clear path, not extra explanation. Ask: What should an anxious user see first? Watch for: Designing this like a lifestyle brand site. Transition: Reduce the brief to the user-facing layer.",
  "Reduce the brief to the user-facing experience": "Focus: Narrow scope to what users actually need on the website. Everyday life: Packing only what you need for today avoids unnecessary weight. Ask: What should we ignore for now? Watch for: Trying to solve backend and policy systems on the homepage. Transition: Identify the actions the interface must surface.",
  "The website should make these actions obvious": "Focus: The homepage should foreground the most helpful support pathways. Everyday life: Emergency contact options should be easy to spot instantly. Ask: Which action feels primary and why? Watch for: Giving every pathway equal weight. Transition: Clarify what the UX team is responsible for.",
  "What the UX team should solve": "Focus: The team must decide structure, flow, output, and wireframe logic. Everyday life: Planning the route through a government service matters before styling forms. Ask: Where can confusion happen first? Watch for: Drifting into UI details too early. Transition: Define the submission clearly.",
  "What each team submits": "Focus: Deliverables should prove the team's UX reasoning. Everyday life: A rubric reduces uncertainty because everyone knows the finish line. Ask: What output best shows clear thinking? Watch for: Submitting artifacts with no rationale. Transition: Offer one AI prompt tied directly to the case.",
  "Quitline 1600 case prompt": "Focus: Rich context produces better AI outputs for the actual class project. Everyday life: A consultant gives better advice when the brief is specific. Ask: Which part of the prompt matters most? Watch for: Using generic wellness website language. Transition: End the case block with a prioritization rule.",
  "Do not design everything. Design what matters most.": "Focus: Prioritization is the core skill in a complex brief. Everyday life: Triage works because the most urgent needs come first. Ask: What must be solved on the first screen? Watch for: Trying to preserve every requirement equally. Transition: Turn the lesson into a reusable prompt toolkit.",
  "AI prompt library": "Focus: This is a reusable toolkit, not a script to copy blindly. Everyday life: Good question templates save time in many different situations. Ask: Which pattern will you reuse most? Watch for: Treating the library as fixed wording. Transition: Show the five patterns that can improve almost any prompt.",
  "Five context patterns to keep": "Focus: Simplify, rewrite, tailor, and adapt outputs instead of taking the first version. Everyday life: Editing a message for a friend, teacher, or manager changes tone and clarity. Ask: Which pattern improves weak output fastest? Watch for: Asking for more content instead of better content. Transition: Close the day with practical resources.",
  "Day 1 resource pack": "Focus: Give students a carry-forward toolkit for homework and Day 2. Everyday life: A summary sheet before an exam helps people revise the essentials. Ask: Which resource will help you most after class? Watch for: Students leaving without a practical next step. Transition: Walk through what the resource board is for.",
  "Student resources for lecture purpose, review, and homework": "Focus: The board turns the lecture into a reusable reference. Everyday life: A toolbox is only useful if you know which tool to reach for. Ask: Which card would you use first? Watch for: Seeing resources as extras instead of working tools. Transition: Finish with worksheets students can immediately use.",
  "Flow and wireframe worksheets": "Focus: Templates reduce blank-page anxiety and speed up practice. Everyday life: Recipe cards make cooking easier than starting from memory. Ask: Why do worksheets help beginners move faster? Watch for: Using templates mechanically without thinking. Transition: Shift from resources into reflection.",
  "What we learned": "Focus: Summarize the logic of the day before students leave. Everyday life: Debriefing after a trip helps people remember the important moments. Ask: What changed in how you now judge websites? Watch for: Ending the day without synthesis. Transition: Reduce the lesson into a few takeaways.",
  "Key takeaways": "Focus: Clarity, reduction, and judgment are the biggest transferable lessons. Everyday life: The best daily systems save mental effort instead of demanding more. Ask: Which takeaway will affect your work most? Watch for: Remembering the tools but not the principles. Transition: Point the class toward Day 2.",
  "Take these into Day 2": "Focus: Day 2 should build on stronger UX logic, not replace it. Everyday life: You sharpen the sketch before adding color. Ask: What must stay true when UI gets added? Watch for: Thinking UI can repair weak structure. Transition: End with a concrete homework direction.",
  "Refine your Quitline concept using feedback and AI critique.": "Focus: Homework is about sharpening clarity before visual design begins. Everyday life: Revising a draft after feedback is better than starting over randomly. Ask: What is the first thing you will improve tonight? Watch for: Adding decoration instead of simplifying. Transition: Close with the final quote.",
  "Don't make users think. Make them feel guided.": "Focus: Calm user experience comes from rigorous design thinking. Everyday life: The easiest everyday tools feel natural because someone solved the hard parts already. Ask: What makes a digital experience feel calm? Watch for: Mistaking calm for empty. Transition: End the day on guided confidence rather than style."
};

slides.forEach((slide) => {
  slide.notes = facilitatorNotesByTitle[slide.title] || slide.notes || "";
});

const deck = document.getElementById("deck");
const template = document.getElementById("slide-template");
const progressBar = document.getElementById("progress-bar");
const currentSection = document.getElementById("current-section");
const slideCounter = document.getElementById("slide-counter");
const slideTitle = document.getElementById("slide-title");
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

function buildNavNote(slide) {
  if (!slide.notes) return slide.title;

  const lifeMatch = slide.notes.match(/Everyday life:\s*(.*?)\s*(?=Ask:|Watch for:|Transition:|$)/);
  return lifeMatch ? lifeMatch[1].trim() : slide.title;
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
  const className = cards.length >= 3 ? "cards-grid three" : "cards-grid";
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

function renderMetrics(metrics = []) {
  return `<div class="metrics-grid">${metrics
    .map(
      ([title, body]) => `
        <article class="metric-card">
          <strong>${escapeHtml(title)}</strong>
          <p>${escapeHtml(body)}</p>
        </article>
      `
    )
    .join("")}</div>`;
}

function renderPromptGrid(prompts = []) {
  return `<div class="prompt-grid">${prompts
    .map(
      ([title, body]) => `
        <article class="prompt-card">
          <h3>${escapeHtml(title)}</h3>
          <code>${escapeHtml(body)}</code>
        </article>
      `
    )
    .join("")}</div>`;
}

function renderWorksheets(worksheets = []) {
  return `<div class="worksheet-grid">${worksheets
    .map(
      ([title, items]) => `
        <article class="worksheet-card">
          <h3>${escapeHtml(title)}</h3>
          <ul>
            ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("")}</div>`;
}

function renderResources(resources = [], desktopHorizontal = false) {
  const className = desktopHorizontal
    ? "resource-grid desktop-horizontal"
    : "resource-grid";

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

function renderSvgExample(kind) {
  const examples = {
    scanning: `
      <div class="svg-example-shell">
        <div class="svg-caption">
          <p class="slide-copy">Users usually catch the headline, one keyword cluster, and the main CTA before they commit to reading body copy.</p>
        </div>
        <svg class="svg-canvas" viewBox="0 0 860 420" role="img" aria-label="Scanning behavior example">
          <defs>
            <linearGradient id="scanGlow" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(41,151,255,0.45)" />
              <stop offset="100%" stop-color="rgba(168,85,247,0.3)" />
            </linearGradient>
          </defs>
          <rect x="40" y="40" width="780" height="340" rx="28" class="svg-panel" />
          <rect x="78" y="74" width="120" height="16" rx="8" class="svg-muted" />
          <rect x="78" y="118" width="330" height="34" rx="12" class="svg-strong" />
          <rect x="78" y="166" width="290" height="18" rx="9" class="svg-mid" />
          <rect x="78" y="194" width="250" height="18" rx="9" class="svg-mid" />
          <rect x="78" y="236" width="160" height="44" rx="22" class="svg-accent" />
          <rect x="78" y="302" width="520" height="12" rx="6" class="svg-faint" />
          <rect x="78" y="326" width="480" height="12" rx="6" class="svg-faint" />
          <rect x="620" y="116" width="150" height="170" rx="24" class="svg-card" />
          <ellipse cx="245" cy="136" rx="215" ry="38" class="svg-focus" />
          <ellipse cx="214" cy="250" rx="110" ry="34" class="svg-focus svg-focus-soft" />
          <path d="M 120 132 C 210 150, 250 185, 230 245" class="svg-arrow" />
          <text x="470" y="126" class="svg-label">Seen first</text>
          <text x="310" y="254" class="svg-label">Likely next</text>
          <text x="566" y="328" class="svg-label svg-label-muted">Often ignored at first glance</text>
        </svg>
      </div>
    `,
    "scanning-patterns": `
      <div class="svg-example-shell">
        <div class="svg-caption">
          <p class="slide-copy">Different layouts invite different reading paths. Students should know which pattern fits the page type instead of designing blindly.</p>
        </div>
        <svg class="svg-canvas" viewBox="0 0 860 460" role="img" aria-label="Scanning patterns overview">
          <rect x="44" y="42" width="360" height="166" rx="24" class="svg-panel" />
          <rect x="456" y="42" width="360" height="166" rx="24" class="svg-panel" />
          <rect x="44" y="250" width="360" height="166" rx="24" class="svg-panel" />
          <rect x="456" y="250" width="360" height="166" rx="24" class="svg-panel" />
          <text x="76" y="76" class="svg-column-title">Z-pattern</text>
          <text x="488" y="76" class="svg-column-title">F-pattern</text>
          <text x="76" y="284" class="svg-column-title">Gutenberg</text>
          <text x="488" y="284" class="svg-column-title">Layer Cake</text>
          <path d="M 88 104 H 344 L 120 176 H 344" class="svg-arrow" />
          <path d="M 500 104 H 726 M 500 104 V 184 M 500 144 H 650 M 500 184 H 618" class="svg-arrow" />
          <path d="M 90 320 H 206 M 280 320 H 352 M 90 388 H 206 M 280 388 H 352" class="svg-gutenberg" />
          <path d="M 518 320 H 750 M 548 350 H 718 M 576 380 H 694" class="svg-arrow" />
          <text x="86" y="198" class="svg-mini-copy">Landing pages with one clear path</text>
          <text x="498" y="198" class="svg-mini-copy">Content-heavy pages and lists</text>
          <text x="86" y="406" class="svg-mini-copy">Balanced reading fields and terminal action zones</text>
          <text x="498" y="406" class="svg-mini-copy">Headline-led marketing pages for scanners</text>
        </svg>
      </div>
    `,
    "cognitive-load": `
      <div class="svg-example-shell">
        <div class="svg-caption">
          <p class="slide-copy">The left screen forces interpretation. The right screen reduces decisions by grouping content and emphasizing one obvious next step.</p>
        </div>
        <svg class="svg-canvas" viewBox="0 0 860 420" role="img" aria-label="Cognitive load comparison">
          <rect x="42" y="54" width="340" height="304" rx="26" class="svg-panel" />
          <rect x="478" y="54" width="340" height="304" rx="26" class="svg-panel" />
          <text x="78" y="92" class="svg-column-title">High load</text>
          <text x="514" y="92" class="svg-column-title">Low load</text>
          <rect x="78" y="118" width="86" height="24" rx="12" class="svg-accent-soft" />
          <rect x="178" y="118" width="92" height="24" rx="12" class="svg-accent-soft" />
          <rect x="284" y="118" width="62" height="24" rx="12" class="svg-accent-soft" />
          <rect x="78" y="162" width="122" height="72" rx="18" class="svg-card" />
          <rect x="214" y="162" width="70" height="72" rx="18" class="svg-card" />
          <rect x="298" y="162" width="48" height="72" rx="18" class="svg-card" />
          <rect x="78" y="248" width="268" height="18" rx="9" class="svg-mid" />
          <rect x="78" y="278" width="246" height="18" rx="9" class="svg-mid" />
          <rect x="78" y="308" width="124" height="32" rx="16" class="svg-accent-soft" />
          <rect x="514" y="118" width="184" height="30" rx="12" class="svg-strong" />
          <rect x="514" y="164" width="216" height="18" rx="9" class="svg-mid" />
          <rect x="514" y="192" width="184" height="18" rx="9" class="svg-mid" />
          <rect x="514" y="230" width="146" height="42" rx="21" class="svg-accent" />
          <rect x="514" y="292" width="256" height="36" rx="18" class="svg-card" />
          <line x1="442" y1="118" x2="442" y2="340" class="svg-divider" />
          <text x="106" y="344" class="svg-label svg-label-muted">Too many equal options</text>
          <text x="584" y="344" class="svg-label">One clear path</text>
        </svg>
      </div>
    `,
    "information-scent": `
      <div class="svg-example-shell">
        <div class="svg-caption">
          <p class="slide-copy">Users click when labels predict the outcome. Specific wording creates stronger “information scent” than abstract wording.</p>
        </div>
        <svg class="svg-canvas" viewBox="0 0 860 420" role="img" aria-label="Information scent example">
          <rect x="44" y="48" width="772" height="324" rx="28" class="svg-panel" />
          <text x="86" y="94" class="svg-column-title">Weak scent</text>
          <text x="464" y="94" class="svg-column-title">Strong scent</text>
          <rect x="86" y="126" width="188" height="44" rx="22" class="svg-card" />
          <rect x="86" y="186" width="170" height="44" rx="22" class="svg-card" />
          <rect x="86" y="246" width="162" height="44" rx="22" class="svg-card" />
          <text x="122" y="154" class="svg-button-text">Explore</text>
          <text x="122" y="214" class="svg-button-text">Discover</text>
          <text x="122" y="274" class="svg-button-text">Solutions</text>
          <rect x="464" y="126" width="222" height="44" rx="22" class="svg-accent" />
          <rect x="464" y="186" width="200" height="44" rx="22" class="svg-card" />
          <rect x="464" y="246" width="230" height="44" rx="22" class="svg-card" />
          <text x="500" y="154" class="svg-button-text svg-button-text-dark">View Pricing</text>
          <text x="500" y="214" class="svg-button-text">Book Consultation</text>
          <text x="500" y="274" class="svg-button-text">Case Studies</text>
          <path d="M 276 150 C 334 150, 364 150, 412 150" class="svg-arrow" />
          <text x="292" y="138" class="svg-label svg-label-muted">Guessing</text>
          <text x="522" y="116" class="svg-label">Predictable destination</text>
        </svg>
      </div>
    `,
    "user-flow": `
      <div class="svg-example-shell">
        <div class="svg-caption">
          <p class="slide-copy">A useful flow shows both momentum and friction. Students should be able to point to where trust increases and where users may stop.</p>
        </div>
        <svg class="svg-canvas" viewBox="0 0 860 420" role="img" aria-label="User flow with friction points">
          <rect x="44" y="54" width="150" height="80" rx="22" class="svg-card" />
          <rect x="248" y="54" width="150" height="80" rx="22" class="svg-card" />
          <rect x="452" y="54" width="150" height="80" rx="22" class="svg-card" />
          <rect x="656" y="54" width="150" height="80" rx="22" class="svg-accent" />
          <text x="78" y="98" class="svg-flow-text">Landing</text>
          <text x="278" y="98" class="svg-flow-text">Understanding</text>
          <text x="500" y="98" class="svg-flow-text">Trust</text>
          <text x="707" y="98" class="svg-flow-text svg-button-text-dark">Action</text>
          <path d="M 194 94 H 248" class="svg-arrow" />
          <path d="M 398 94 H 452" class="svg-arrow" />
          <path d="M 602 94 H 656" class="svg-arrow" />
          <circle cx="322" cy="190" r="34" class="svg-friction" />
          <circle cx="562" cy="238" r="34" class="svg-friction" />
          <text x="290" y="196" class="svg-friction-text">?</text>
          <text x="530" y="244" class="svg-friction-text">!</text>
          <path d="M 322 156 V 134" class="svg-dashed" />
          <path d="M 562 204 V 134" class="svg-dashed" />
          <text x="248" y="294" class="svg-label svg-label-muted">Friction point: unclear value</text>
          <text x="486" y="328" class="svg-label svg-label-muted">Friction point: weak proof or confusing CTA</text>
          <rect x="88" y="320" width="178" height="28" rx="14" class="svg-accent-soft" />
          <text x="110" y="339" class="svg-button-text">Progress should feel obvious</text>
        </svg>
      </div>
    `,
    "critique-scorecard": `
      <div class="svg-example-shell">
        <div class="svg-caption">
          <p class="slide-copy">A critique framework works better when students can see the categories and scoring pattern instead of inventing feedback from opinion alone.</p>
        </div>
        <svg class="svg-canvas" viewBox="0 0 860 420" role="img" aria-label="Critique scorecard example">
          <rect x="56" y="54" width="748" height="310" rx="28" class="svg-panel" />
          <text x="92" y="96" class="svg-column-title">UX Critique Scorecard</text>
          <g transform="translate(92 126)">
            <text x="0" y="18" class="svg-score-label">Clarity</text>
            <text x="0" y="68" class="svg-score-label">Navigation</text>
            <text x="0" y="118" class="svg-score-label">CTA</text>
            <text x="0" y="168" class="svg-score-label">Trust</text>
            <text x="0" y="218" class="svg-score-label">Simplicity</text>
          </g>
          <g transform="translate(280 110)">
            <circle cx="0" cy="20" r="12" class="svg-score-on" />
            <circle cx="40" cy="20" r="12" class="svg-score-on" />
            <circle cx="80" cy="20" r="12" class="svg-score-on" />
            <circle cx="120" cy="20" r="12" class="svg-score-off" />
            <circle cx="160" cy="20" r="12" class="svg-score-off" />
            <circle cx="0" cy="70" r="12" class="svg-score-on" />
            <circle cx="40" cy="70" r="12" class="svg-score-on" />
            <circle cx="80" cy="70" r="12" class="svg-score-on" />
            <circle cx="120" cy="70" r="12" class="svg-score-on" />
            <circle cx="160" cy="70" r="12" class="svg-score-off" />
            <circle cx="0" cy="120" r="12" class="svg-score-on" />
            <circle cx="40" cy="120" r="12" class="svg-score-on" />
            <circle cx="80" cy="120" r="12" class="svg-score-off" />
            <circle cx="120" cy="120" r="12" class="svg-score-off" />
            <circle cx="160" cy="120" r="12" class="svg-score-off" />
            <circle cx="0" cy="170" r="12" class="svg-score-on" />
            <circle cx="40" cy="170" r="12" class="svg-score-on" />
            <circle cx="80" cy="170" r="12" class="svg-score-on" />
            <circle cx="120" cy="170" r="12" class="svg-score-off" />
            <circle cx="160" cy="170" r="12" class="svg-score-off" />
            <circle cx="0" cy="220" r="12" class="svg-score-on" />
            <circle cx="40" cy="220" r="12" class="svg-score-on" />
            <circle cx="80" cy="220" r="12" class="svg-score-on" />
            <circle cx="120" cy="220" r="12" class="svg-score-on" />
            <circle cx="160" cy="220" r="12" class="svg-score-off" />
          </g>
          <rect x="560" y="132" width="190" height="152" rx="22" class="svg-card" />
          <text x="586" y="164" class="svg-label">Strongest note</text>
          <text x="586" y="198" class="svg-mini-copy">Navigation is predictable.</text>
          <text x="586" y="236" class="svg-label svg-label-muted">Fix first</text>
          <text x="586" y="268" class="svg-mini-copy">CTA is visible but not specific enough.</text>
        </svg>
      </div>
    `
  };

  return examples[kind] ?? "";
}

function renderAgenda(agenda = []) {
  return `<div class="timeline">${agenda
    .map(
      ([time, title, format]) => `
        <article class="agenda-card">
          <strong>${escapeHtml(time)}</strong>
          <h3>${escapeHtml(title)}</h3>
          <p class="agenda-copy">${escapeHtml(format)}</p>
        </article>
      `
    )
    .join("")}</div>`;
}

function renderChecklist(checklist = []) {
  return `<div class="checklist">${checklist
    .map((item) => `<div class="checklist-item">${escapeHtml(item)}</div>`)
    .join("")}</div>`;
}

function renderWireframe(blocks = []) {
  return `
    <div class="wireframe">
      <div class="wireframe-screen">
        ${blocks
          .map((block) => `<div class="wireframe-block">${escapeHtml(block)}</div>`)
          .join("")}
      </div>
    </div>
  `;
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
          <p class="footer-mark">Day 1 UX Fundamentals</p>
        </div>
      `;
    case "section":
      return `
        <div class="slide-shell section-stack">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          <p class="subtitle">${escapeHtml(slide.subtitle)}</p>
        </div>
      `;
    case "statement":
      return `
        <div class="slide-shell statement-stack">
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
    case "agenda":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          ${renderAgenda(slide.agenda)}
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
              ? `<div class="timer-card"><span class="timer-dot" aria-hidden="true"></span><span class="timer-label">${escapeHtml(slide.timer)}</span></div>`
              : ""
          }
        </div>
      `;
    case "prompt":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          <article class="prompt-card">
            <code>${escapeHtml(slide.prompt)}</code>
          </article>
        </div>
      `;
    case "metrics":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          ${renderMetrics(slide.metrics)}
        </div>
      `;
    case "split":
      return `
        <div class="slide-shell split-layout">
          <div>
            ${eyebrow}
            <h2 class="section-title">${escapeHtml(slide.title)}</h2>
            <p class="slide-copy">${escapeHtml(slide.copy)}</p>
          </div>
          ${renderWireframe(slide.wireframe)}
        </div>
      `;
    case "checklist":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          ${renderChecklist(slide.checklist)}
        </div>
      `;
    case "prompt-grid":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          ${renderPromptGrid(slide.prompts)}
        </div>
      `;
    case "worksheets":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          ${renderWorksheets(slide.worksheets)}
        </div>
      `;
    case "resources":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          ${renderResources(slide.resources, slide.desktopHorizontal)}
        </div>
      `;
    case "svg-example":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          ${renderSvgExample(slide.svgKind)}
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
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title || "")}</h2>
        </div>
      `;
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

    const content = node.querySelector(".slide-content");
    content.innerHTML = buildSlideMarkup(slide);

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

function goToSlide(index, behavior = "smooth") {
  const clamped = Math.max(0, Math.min(index, slideElements.length - 1));
  currentIndex = clamped;
  slideElements[clamped].scrollIntoView({ behavior, block: "start" });
  updateChrome(clamped);
  history.replaceState(null, "", `#slide-${clamped + 1}`);
}

function updateChrome(index) {
  const slide = slides[index];
  const progress = ((index + 1) / slides.length) * 100;
  const noteSummary = buildNavNote(slide);
  currentSection.textContent = slide.section;
  slideCounter.textContent = `${index + 1} / ${slides.length}`;
  slideTitle.textContent = noteSummary;
  slideTitle.title = slide.notes || slide.title;
  progressBar.style.width = `${progress}%`;
  prevButton.disabled = index === 0;
  nextButton.disabled = index === slides.length - 1;
  bookmarkButtons.forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "true" : "false");
  });
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
