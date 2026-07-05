const slides = [
  {
    type: "hero",
    section: "Opening",
    eyebrow: "Day 2 · Master's UI Studio",
    title: "UI Design + AI-Assisted Visual Design",
    subtitle: "Designing interfaces users understand instantly",
    lede: "A postgraduate studio on hierarchy, readability, responsive systems, and evidence-based interface critique.",
    pills: ["09:00-16:00", "Active learning", "Mobile-first", "Critique-led studio"]
  },
  {
    type: "statement",
    section: "Opening",
    eyebrow: "Core Idea",
    title: "Good UI guides attention.",
    copy: "Interface design is the visible layer of decision-making. It should tell users what matters first, second, and next."
  },
  {
    type: "list",
    section: "Opening",
    eyebrow: "Recap From Day 1",
    title: "Users still behave the same way",
    items: [
      "Users scan before they read deeply.",
      "Users avoid unnecessary effort and interpretation.",
      "Users compare options and leave when clarity is weak.",
      "Users need fast answers before they trust the interface."
    ]
  },
  {
    type: "compare",
    section: "Opening",
    eyebrow: "UX vs UI",
    title: "UI makes UX visible",
    leftTitle: "UX",
    leftBody: "How the experience works: structure, flow, friction, task completion.",
    rightTitle: "UI",
    rightBody: "How the experience communicates visually: hierarchy, typography, spacing, color, emphasis."
  },
  {
    type: "compare",
    section: "Opening",
    eyebrow: "Usability Check",
    title: "Beautiful does not always mean usable",
    leftTitle: "Beautiful but confusing",
    leftBody: "Too many focal points, decorative typography, weak CTA emphasis, unclear next step.",
    rightTitle: "Simple but effective",
    rightBody: "Clear headline, restrained layout, visual rhythm, obvious action, easier scanning."
  },
  {
    type: "cards",
    section: "Opening",
    eyebrow: "UI Principles",
    title: "The interface should communicate before it decorates",
    cards: [
      ["Clarity over decoration", "Visual style should never make text harder to read, actions harder to notice, or layout harder to understand."],
      ["Consistency builds learnability", "When buttons, colors, spacing, and component patterns stay consistent, users learn once and reuse that knowledge."],
      ["Obvious clickability", "Interactive elements should look interactive through shape, contrast, hover states, underlines, or clear affordances."],
      ["Feedback matters", "UI should respond to action with visible confirmation such as hover, loading, success, error, or progress states."]
    ]
  },
  {
    type: "statement",
    section: "Opening",
    eyebrow: "Invisible Quality",
    title: "Good UI feels invisible.",
    copy: "Users focus on their goal because the interface already organized the attention for them."
  },
  {
    type: "cards",
    section: "Opening",
    eyebrow: "Seminar Standard",
    title: "Master's-level UI work requires defensible decisions",
    cards: [
      ["Rationale over taste", "Students should defend layout, type, and color decisions using hierarchy, scanning behavior, and user goals."],
      ["Audience fit", "A visual direction is only strong when it matches context, trust needs, and task difficulty."],
      ["Constraint-aware design", "Students should show what they reduced, what they emphasized, and why."],
      ["Critical use of trends", "Minimalism, depth, motion, or dark palettes only work when they improve communication."],
      ["Evidence in critique", "Feedback should identify cognitive load, hierarchy breakdowns, and CTA weakness instead of vague preference."],
      ["Reflection on AI output", "Students should explain what AI generated, what was rejected, and what human judgment improved."]
    ]
  },
  {
    type: "cards",
    section: "Opening",
    eyebrow: "AI in Design",
    title: "Where AI helps and where it does not",
    cards: [
      ["AI can generate", "Layouts, palettes, copy options, hero directions, component ideas."],
      ["AI can accelerate", "Moodboards, exploration, headline variation, critique drafts."],
      ["Humans still decide", "Hierarchy, emotional fit, usability, simplicity, and conversion logic."],
      ["Main risk", "Generic output that looks polished but lacks strategy or clarity."]
    ]
  },
  {
    type: "section",
    section: "Visual Hierarchy",
    eyebrow: "Section 2 · 09:20-10:15",
    title: "Visual hierarchy",
    subtitle: "Students should learn how to control what gets noticed first and defend that sequence."
  },
  {
    type: "metrics",
    section: "Visual Hierarchy",
    eyebrow: "Attention Order",
    title: "Users notice in this order",
    metrics: [
      ["1. Size", "Larger elements feel more important."],
      ["2. Contrast", "Higher contrast gets seen sooner."],
      ["3. Spacing", "Isolation makes content easier to notice."],
      ["4. Motion", "Movement attracts attention immediately."],
      ["5. Color emphasis", "Accent color can mark action or importance."]
    ]
  },
  {
    type: "statement",
    section: "Visual Hierarchy",
    eyebrow: "Purpose",
    title: "Hierarchy answers one question first: what should users notice now?",
    copy: "If every element competes equally, the interface stops guiding and starts demanding interpretation."
  },
  {
    type: "meme",
    section: "Visual Hierarchy",
    eyebrow: "UX/UI Meme",
    line1: "You read this first.",
    line2: "Then this.",
    line3: "And maybe, if you're interested, the rest.",
    copy: "That's not random. That's design doing its job.",
  },
  {
    type: "cards",
    section: "Visual Hierarchy",
    eyebrow: "Weak Hierarchy",
    title: "What usually goes wrong",
    cards: [
      ["Too many focal points", "Multiple bright blocks, multiple large headings, and many button styles all compete."],
      ["Poor contrast", "Important content fails to stand out from supporting content."],
      ["Unclear CTA", "Primary action does not look primary."],
      ["No visual rhythm", "Spacing and alignment fail to create a clear reading path."]
    ]
  },
  {
    type: "cards",
    section: "Visual Hierarchy",
    eyebrow: "Strong Hierarchy",
    title: "What effective interfaces do",
    cards: [
      ["Oversized headline", "A clear top-level message anchors the section immediately."],
      ["Breathing space", "Whitespace isolates meaning and increases focus."],
      ["Controlled contrast", "Contrast is distributed intentionally, not everywhere."],
      ["Single primary action", "One strong CTA receives the most emphasis."]
    ]
  },
  {
    type: "cards",
    section: "Visual Hierarchy",
    eyebrow: "Visual Weight",
    title: "Visual weight controls attention before reading begins",
    cards: [
      ["What creates weight", "Size, contrast, color intensity, density, position, and isolation all make elements feel heavier or lighter."],
      ["Why it matters", "Two elements can be the same size, but the one with stronger contrast or more isolation will still feel more important."],
      ["Design use", "If the CTA should win, it needs more visual weight than surrounding text, cards, and supporting links."],
      ["Common mistake", "Designers often add emphasis everywhere, which destroys the hierarchy they were trying to create."]
    ]
  },
  {
    type: "svg-example",
    section: "Visual Hierarchy",
    eyebrow: "Visual Example",
    title: "Visual weight should make the CTA win immediately",
    svgKind: "visual-weight"
  },
  {
    type: "list",
    section: "Visual Hierarchy",
    eyebrow: "CTA Hierarchy",
    title: "Not all actions should feel equal",
    items: [
      "Primary CTA: the main action the business wants now.",
      "Secondary CTA: a lower-risk alternative for hesitant users.",
      "Passive CTA: links or utility actions that should stay visible but quiet."
    ]
  },
  {
    type: "statement",
    section: "Visual Hierarchy",
    eyebrow: "Whitespace",
    title: "Whitespace is a usability tool.",
    copy: "It improves readability, lowers visual pressure, and makes interfaces feel more premium and easier to scan."
  },
  {
    type: "cards",
    section: "Visual Hierarchy",
    eyebrow: "Grouping",
    title: "Group related elements or users will misread the structure",
    cards: [
      ["Proximity signals meaning", "Users naturally assume elements placed near each other belong together."],
      ["What this affects", "Labels, inputs, buttons, captions, card content, and pricing details all rely on grouping to stay understandable."],
      ["Bad grouping", "When related items are too far apart, users hesitate or connect the wrong pieces of information."],
      ["Good grouping", "Tight relationships inside a group and stronger separation between groups make the structure easier to scan."]
    ]
  },
  {
    type: "svg-example",
    section: "Visual Hierarchy",
    eyebrow: "Gestalt Principles",
    title: "Humans perceive grouped elements as related",
    svgKind: "gestalt"
  },
  {
    type: "principle-diagram",
    section: "Visual Hierarchy",
    eyebrow: "Gestalt Principle",
    title: "Proximity",
    copy: "Elements placed close together are perceived as related, even before users read the labels.",
    exampleTitle: "UI example",
    exampleText: "Grouped form fields help users see which labels and inputs belong together.",
    diagramKind: "proximity"
  },
  {
    type: "principle-diagram",
    section: "Visual Hierarchy",
    eyebrow: "Gestalt Principle",
    title: "Common region",
    copy: "Elements inside the same container are perceived as one group because the boundary creates a shared region.",
    exampleTitle: "UI example",
    exampleText: "A checkout summary box feels like one decision block because totals, items, and actions sit inside one card.",
    diagramKind: "common-region"
  },
  {
    type: "principle-diagram",
    section: "Visual Hierarchy",
    eyebrow: "Gestalt Principle",
    title: "Closure",
    copy: "Users mentally complete missing shapes or incomplete visual information when the overall pattern is still clear.",
    exampleTitle: "UI example",
    exampleText: "A progress ring still reads as progress even when part of the circle is missing.",
    diagramKind: "closure"
  },
  {
    type: "principle-diagram",
    section: "Visual Hierarchy",
    eyebrow: "Gestalt Principle",
    title: "Emergence",
    copy: "Users understand the overall structure first, then notice the smaller details inside it.",
    exampleTitle: "UI example",
    exampleText: "A dashboard layout is recognized as navigation, metrics, and activity before individual data points are read.",
    diagramKind: "emergence"
  },
  {
    type: "principle-diagram",
    section: "Visual Hierarchy",
    eyebrow: "Gestalt Principle",
    title: "Similarity",
    copy: "Elements with the same color, size, shape, or style feel related because they look like one system.",
    exampleTitle: "UI example",
    exampleText: "Matching buttons and status labels feel connected even when separated by space.",
    diagramKind: "similarity"
  },
  {
    type: "principle-diagram",
    section: "Visual Hierarchy",
    eyebrow: "Gestalt Principle",
    title: "Simplicity",
    copy: "Users prefer the clearest and simplest interpretation instead of a more complex visual reading.",
    exampleTitle: "UI example",
    exampleText: "A clean product grid with one action per card is easier to understand than a crowded layout with mixed signals.",
    diagramKind: "simplicity"
  },
  {
    type: "svg-example",
    section: "Visual Hierarchy",
    eyebrow: "Visual Example",
    title: "Proximity changes how users read relationships",
    svgKind: "grouping"
  },
  {
    type: "cards",
    section: "Visual Hierarchy",
    eyebrow: "Grid Thinking",
    title: "Alignment and grid systems create trust",
    cards: [
      ["Consistent edges", "Aligned content feels deliberate and easier to read."],
      ["Predictable spacing", "Spacing systems reduce visual noise and decision fatigue."],
      ["Reusable structure", "Grids help teams scale consistency across many sections."],
      ["Fewer exceptions", "Interfaces feel calmer when elements follow the same rules."]
    ]
  },
  {
    type: "cards",
    section: "Visual Hierarchy",
    eyebrow: "Scanning Behavior",
    title: "How users actually scan interface layouts",
    cards: [
      ["Top first", "The upper viewport usually receives the first attention."],
      ["Left first", "Users often begin on the left in left-to-right reading contexts."],
      ["Large first", "Bigger shapes and headlines get processed earlier."],
      ["Different color first", "Accent color works when it is not overused."]
    ]
  },
  {
    type: "workshop",
    section: "Visual Hierarchy",
    eyebrow: "Exercise",
    title: "Simplification challenge",
    copy: "Remove 30% of unnecessary UI from a sample layout. Students must justify what stays, what loses emphasis, and what user task becomes clearer.",
    timer: "10 minutes"
  },
  {
    type: "prompt",
    section: "Visual Hierarchy",
    eyebrow: "AI Prompt",
    title: "Hierarchy improvement prompt",
    prompt: "Improve the visual hierarchy of this hero section for mobile users. Clarify the top message, reduce competing elements, and make the main CTA more obvious."
  },
  {
    type: "workshop",
    section: "Visual Hierarchy",
    eyebrow: "Workshop",
    title: "Compare good, bad, and AI-generated hierarchy",
    copy: "Students analyze three versions of a screen and explain what gets noticed first, what distracts, what should be removed, and which option best supports task completion.",
    timer: "15 minutes"
  },
  {
    type: "section",
    section: "Typography + Color",
    eyebrow: "Section 3 · 10:45-12:00",
    title: "Typography + color systems",
    subtitle: "Readable interfaces perform better because they reduce effort and increase trust."
  },
  {
    type: "statement",
    section: "Typography + Color",
    eyebrow: "Typography Is UX",
    title: "Readable typography improves usability.",
    copy: "Type choices influence scan speed, comprehension, perceived professionalism, and attention flow."
  },
  {
    type: "metrics",
    section: "Typography + Color",
    eyebrow: "Type Hierarchy",
    title: "A basic interface type scale",
    metrics: [
      ["H1", "Page or section anchor."],
      ["H2", "Secondary grouping title."],
      ["H3", "Smaller section label."],
      ["Body", "Main explanatory text."],
      ["Caption", "Quiet support text or metadata."]
    ]
  },
  {
    type: "cards",
    section: "Typography + Color",
    eyebrow: "Modern Web Type",
    title: "Characteristics of modern interface typography",
    cards: [
      ["Oversized headlines", "Great for fast messaging and premium presence."],
      ["Clean sans-serif families", "Useful for versatility across interface contexts."],
      ["Strong spacing", "Type becomes more readable when line height and paragraph spacing are intentional."],
      ["Minimal clutter", "Too many font weights or decorative styles dilute hierarchy."]
    ]
  },
  {
    type: "list",
    section: "Typography + Color",
    eyebrow: "Readability Rules",
    title: "Avoid these typography mistakes",
    items: [
      "Tiny text that forces effort on mobile.",
      "Long paragraphs with no scanning structure.",
      "Poor line height that compresses reading.",
      "Low contrast between text and background.",
      "Too many font styles competing in one screen."
    ]
  },
  {
    type: "cards",
    section: "Typography + Color",
    eyebrow: "Readable Systems",
    title: "Readable UI depends on line length, spacing, and contrast",
    cards: [
      ["Line length", "Very long lines slow reading and make scanning harder. Keep body text at a comfortable width."],
      ["Line spacing", "Tight line height creates pressure. Generous spacing improves comprehension and calmness."],
      ["Contrast hierarchy", "Important text should stand out clearly, while support text can be quieter without becoming hard to read."],
      ["Accent scarcity", "Accent color works best when it is rare. If everything is loud, nothing feels important."]
    ]
  },
  {
    type: "svg-example",
    section: "Typography + Color",
    eyebrow: "Visual Example",
    title: "Readable typography needs width, space, and contrast",
    svgKind: "typography-readability"
  },
  {
    type: "cards",
    section: "Typography + Color",
    eyebrow: "Font Direction",
    title: "Useful web-friendly font choices",
    cards: [
      ["Inter", "Neutral, highly readable, good for systems and product interfaces."],
      ["SF Pro", "Apple-like feel, clean and strong for premium UI direction."],
      ["Poppins", "Rounder personality, useful when a friendlier tone is needed."],
      ["Space Grotesk", "Sharper personality, useful for more expressive hero typography."]
    ]
  },
  {
    type: "cards",
    section: "Typography + Color",
    eyebrow: "Color Psychology",
    title: "Color influences perception before content is read",
    cards: [
      ["Trust", "Blues and cool neutrals often feel stable and reliable."],
      ["Urgency", "Warm accents can increase urgency when used sparingly."],
      ["Calmness", "Muted palettes and soft contrast lower visual stress."],
      ["Luxury", "Dark surfaces, restrained highlights, and sparse accents can feel premium."],
      ["Energy", "Brighter accents increase energy but can also create noise."]
    ]
  },
  {
    type: "metrics",
    section: "Typography + Color",
    eyebrow: "Color System",
    title: "A basic UI palette structure",
    metrics: [
      ["Primary", "Brand-led main emphasis color."],
      ["Secondary", "Support color for complementary use."],
      ["Accent", "Reserved for action or important emphasis."],
      ["Neutral", "Text, lines, surfaces, and balance."],
      ["Surface/Background", "The base environment the UI sits on."]
    ]
  },
  {
    type: "cards",
    section: "Typography + Color",
    eyebrow: "Visual Signaling",
    title: "Visual tone should match audience and trust needs",
    cards: [
      ["Dark surfaces", "They can feel premium and focused, but only when contrast stays readable."],
      ["Muted systems", "Lower-saturation palettes can reduce stress and strengthen professional tone."],
      ["Warm accents", "They can create urgency or reassurance depending on placement and intensity."],
      ["Audience fit", "Color direction should support credibility, emotional tone, and the user's decision context."]
    ]
  },
  {
    type: "statement",
    section: "Typography + Color",
    eyebrow: "Accessibility",
    title: "Readable contrast is non-negotiable.",
    copy: "If the design looks elegant but forces effort to read, the UI has failed a basic usability test."
  },
  {
    type: "prompt",
    section: "Typography + Color",
    eyebrow: "AI Prompt",
    title: "Moodboard prompt",
    prompt: "Generate a modern premium [industry or business type] landing page moodboard inspired by Apple launch events. Include typography direction, color palette, surface style, visual references, and emotional tone."
  },
  {
    type: "resources",
    section: "Typography + Color",
    eyebrow: "Mini Design System",
    title: "A basic UI system students can build in one workshop",
    layoutClass: "four-up",
    resources: [
      {
        title: "Type scale",
        body: "Use a small set of sizes with clear roles.",
        items: ["H1 for primary message", "H2 for section anchors", "Body for reading", "Caption for quiet support text"]
      },
      {
        title: "Spacing rhythm",
        body: "Repeat spacing values instead of guessing each gap.",
        items: ["Small for tight relationships", "Medium for block separation", "Large for section pacing", "Extra-large for hero breathing space"]
      },
      {
        title: "Color roles",
        body: "Give each color one job.",
        items: ["Primary brand color", "Accent for CTA emphasis", "Neutral for text and lines", "Surface/background for depth"]
      },
      {
        title: "Button states",
        body: "Buttons should communicate action and state clearly.",
        items: ["Default", "Hover / focus", "Disabled", "Loading / success feedback"]
      }
    ]
  },
  {
    type: "workshop",
    section: "Typography + Color",
    eyebrow: "Workshop",
    title: "Build a basic visual system",
    copy: "Students define a type scale, a simple palette, and a UI moodboard, then justify how those choices support audience, readability, and trust.",
    timer: "15 minutes"
  },
  {
    type: "section",
    section: "AI-Assisted UI Design",
    eyebrow: "Section 4 · 13:00-13:40",
    title: "AI-assisted UI design",
    subtitle: "AI should accelerate exploration, not replace visual judgment or design accountability."
  },
  {
    type: "list",
    section: "AI-Assisted UI Design",
    eyebrow: "Designing With AI",
    title: "The right workflow",
    items: [
      "Generate ideas and directions quickly.",
      "Evaluate the output for clarity and hierarchy.",
      "Simplify what is generic, crowded, or inconsistent.",
      "Refine manually until the interface feels intentional."
    ]
  },
  {
    type: "compare",
    section: "AI-Assisted UI Design",
    eyebrow: "Division of Labor",
    title: "AI accelerates. Humans refine.",
    leftTitle: "AI accelerates",
    leftBody: "Ideation, exploration, variation, copy options, layout starting points.",
    rightTitle: "Humans refine",
    rightBody: "Usability, hierarchy, quality, consistency, emotional fit, business logic."
  },
  {
    type: "cards",
    section: "AI-Assisted UI Design",
    eyebrow: "AI Critique",
    title: "How to spot generic AI-generated design",
    cards: [
      ["Safe but forgettable", "The layout looks polished but has no strong hierarchy, no clear emotional direction, and no real point of view."],
      ["Everything is equally important", "Headlines, cards, buttons, and sections all compete at the same visual level."],
      ["Generic content blocks", "The page includes standard features, testimonials, and CTAs without a persuasive sequence or specific user logic."],
      ["No refinement loop", "If students accept the first result without critique, the output usually stays broad, repetitive, and strategically weak."]
    ]
  },
  {
    type: "cards",
    section: "AI-Assisted UI Design",
    eyebrow: "Workflow Roles",
    title: "Where tools fit in the workflow",
    cards: [
      ["Figma", "Layout construction, component decisions, iteration, and critique-ready screens."],
      ["Framer", "Fast visual exploration when motion or pacing needs to be tested."],
      ["Canva", "Early moodboard support when teams need quick visual references, not final logic."],
      ["ChatGPT / Gemini", "Prompting, copy drafts, critique structure, and alternative hierarchy directions."]
    ]
  },
  {
    type: "cards",
    section: "AI-Assisted UI Design",
    eyebrow: "Prompt Structure",
    title: "A UI prompt should include",
    cards: [
      ["Style", "Premium, playful, editorial, technical, minimalist."],
      ["Audience", "Who the interface is for and how they behave."],
      ["Mood", "Calm, urgent, luxurious, energetic, trustworthy."],
      ["Hierarchy", "What should users notice first, then second."],
      ["CTA", "The exact primary action the screen should drive."],
      ["Responsiveness", "How the layout should adapt for mobile-first use."]
    ]
  },
  {
    type: "prompt",
    section: "AI-Assisted UI Design",
    eyebrow: "Good Prompt Example",
    title: "Detailed prompt example",
    prompt: "Create a mobile-first landing page UI for a [business type] targeting [specific audience]. The main goal is to get users to [primary conversion action]. Use Apple-style presentation hierarchy with oversized typography, restrained dark surfaces, subtle gradient highlights, clean spacing, and a premium modern feel. Include a clear hero section, supporting subheadline, one strong primary CTA, a secondary CTA for lower-commitment users, features or benefits, social proof, and a final conversion section. Make the reading order obvious, keep the navigation simple, and ensure the layout remains clean and thumb-friendly on mobile."
  },
  {
    type: "prompt",
    section: "AI-Assisted UI Design",
    eyebrow: "Bad Prompt Example",
    title: "Weak prompt example",
    prompt: "Create a nice modern website for my business. Make it look professional, use good colors, add some sections, and make it attractive for everyone."
  },
  {
    type: "compare",
    section: "AI-Assisted UI Design",
    eyebrow: "Refinement",
    title: "Generic AI output vs refined design direction",
    leftTitle: "Generic first pass",
    leftBody: "Looks modern, but the hierarchy is flat, the sections are predictable, the CTA is weak, and the page could belong to any business.",
    rightTitle: "Refined output",
    rightBody: "Hierarchy is clearer, the audience and conversion goal are visible, the CTA is stronger, and the layout has a specific point of view."
  },
  {
    type: "cards",
    section: "AI-Assisted UI Design",
    eyebrow: "Hero Anatomy",
    title: "A strong hero section usually contains",
    cards: [
      ["Headline", "The main promise or message."],
      ["Subheadline", "Support context that clarifies value."],
      ["Primary CTA", "The action users should take next."],
      ["Supporting visual", "Image, mockup, or motion that reinforces the story."],
      ["Social proof", "Signals that reduce doubt or increase trust."]
    ]
  },
  {
    type: "cards",
    section: "AI-Assisted UI Design",
    eyebrow: "Premium Characteristics",
    title: "What gives modern UI a premium feel",
    cards: [
      ["Controlled spacing", "Large gaps used with intention rather than random emptiness."],
      ["Typography-led structure", "Strong type does most of the communication work."],
      ["Cinematic visuals", "Imagery supports a singular mood or story."],
      ["Minimal clutter", "Each block earns its place."],
      ["Soft gradients", "Atmosphere without visual chaos."]
    ]
  },
  {
    type: "cards",
    section: "AI-Assisted UI Design",
    eyebrow: "Apple Event Breakdown",
    title: "Why Apple-style presentation UI feels strong",
    cards: [
      ["Black backgrounds", "Strong contrast and perceived focus."],
      ["Giant typography", "Fast message comprehension."],
      ["Isolated focal points", "Attention is directed instead of diffused."],
      ["Motion storytelling", "Transitions reinforce sequence and importance."],
      ["Dramatic restraint", "Very few competing elements on screen."]
    ]
  },
  {
    type: "split",
    section: "AI-Assisted UI Design",
    eyebrow: "Figma Demo",
    title: "Build three blocks in sequence",
    copy: "Students should see how the same visual system carries through hero, feature, and CTA sections.",
    wireframe: ["Navigation", "Hero", "Feature block", "Testimonial / proof", "CTA section", "Footer"]
  },
  {
    type: "list",
    section: "AI-Assisted UI Design",
    eyebrow: "AI Copywriting",
    title: "Where AI copy can help",
    items: [
      "Headline variation and positioning angles.",
      "CTA wording alternatives with different levels of urgency.",
      "Feature summaries and benefit statements.",
      "Microcopy for form support, trust, and onboarding clarity."
    ]
  },
  {
    type: "workshop",
    section: "AI-Assisted UI Design",
    eyebrow: "Workshop",
    title: "Build a UI direction in Figma",
    copy: "Students create a hero section, navigation, feature cards, and CTA structure using their chosen palette and type system, then explain what AI accelerated and what still required manual refinement.",
    timer: "25 minutes"
  },
  {
    type: "section",
    section: "Responsive UI",
    eyebrow: "Section 5 · 13:40-14:15",
    title: "Responsive UI + mobile first",
    subtitle: "The UI should stay clear when the screen gets smaller and more selective."
  },
  {
    type: "statement",
    section: "Responsive UI",
    eyebrow: "Mobile First",
    title: "Most users browse on mobile.",
    copy: "If the design becomes weak on mobile, the visual system is not yet disciplined enough."
  },
  {
    type: "list",
    section: "Responsive UI",
    eyebrow: "Priorities",
    title: "Mobile UI needs",
    items: [
      "Large readable typography.",
      "Clear spacing between sections.",
      "Thumb-friendly button sizes and spacing.",
      "Short scan paths and obvious CTA emphasis."
    ]
  },
  {
    type: "cards",
    section: "Responsive UI",
    eyebrow: "Common Mistakes",
    title: "Why desktop ideas fail on mobile",
    cards: [
      ["Crowded layouts", "Too many horizontal ideas are compressed into unusable stacks."],
      ["Tiny text", "Typography becomes elegant in theory but unreadable in practice."],
      ["Tiny tap areas", "Buttons and links become hard to act on confidently."],
      ["Too many sections", "The scroll becomes long without clear pacing or emphasis."]
    ]
  },
  {
    type: "cards",
    section: "Responsive UI",
    eyebrow: "Layout Systems",
    title: "Responsive structure patterns",
    cards: [
      ["Stacked layout", "Safe and clear for small screens."],
      ["Responsive grids", "Useful when cards can collapse without losing meaning."],
      ["Adaptive spacing", "Spacing should shrink carefully, not disappear."],
      ["Content prioritization", "Not every desktop detail needs equal weight on mobile."]
    ]
  },
  {
    type: "cards",
    section: "Responsive UI",
    eyebrow: "Mobile Prioritization",
    title: "Responsive design means prioritizing, not shrinking",
    cards: [
      ["Keep the core message first", "Users should still understand the purpose, value, and main action in the first mobile viewport."],
      ["Remove before stacking", "Do not keep every desktop detail by default. Some elements should be reduced, collapsed, or removed."],
      ["Touch ergonomics", "Buttons, form controls, and navigation need enough size and spacing for thumbs, not just mouse precision."],
      ["Simplify the journey", "Mobile layouts should shorten scan paths and reduce unnecessary decisions wherever possible."]
    ]
  },
  {
    type: "svg-example",
    section: "Responsive UI",
    eyebrow: "Visual Example",
    title: "Mobile-first means deciding what deserves the first screen",
    svgKind: "mobile-prioritization"
  },
  {
    type: "prompt",
    section: "Responsive UI",
    eyebrow: "AI Prompt",
    title: "Mobile critique prompt",
    prompt: "What mobile UX problems exist in this layout? Focus on readability, spacing, CTA visibility, tap targets, and visual overload."
  },
  {
    type: "workshop",
    section: "Responsive UI",
    eyebrow: "Workshop",
    title: "Redesign desktop to mobile",
    copy: "Students simplify a desktop concept into a mobile-first layout while preserving message hierarchy, CTA logic, and first-screen clarity.",
    timer: "15 minutes"
  },
  {
    type: "section",
    section: "Applied Case Study",
    eyebrow: "Case Study Handoff · 14:15-14:30",
    title: "Quitline 1600 UI workshop",
    subtitle: "Day 2 turns the Day 1 UX structure into a visual interface system under clear service constraints."
  },
  {
    type: "statement",
    section: "Applied Case Study",
    eyebrow: "Day 2 Focus",
    title: "The UX structure is already defined. Now the UI must guide attention.",
    copy:
      "Students should use hierarchy, typography, color, spacing, and responsive patterns to make the support pathway feel obvious and trustworthy."
  },
  {
    type: "cards",
    section: "Applied Case Study",
    eyebrow: "UI Priorities",
    title: "What the UI team should solve",
    cards: [
      ["Hierarchy", "Make the primary CTA visually stronger than every secondary action."],
      ["Trust", "Use layout, spacing, type, and color to make the service feel credible and supportive."],
      ["Responsive design", "Show how the interface stays readable and scannable on mobile screens."],
      ["Output", "Design the homepage, service options page, and one content page with a consistent visual system and a written rationale."]
    ]
  },
  {
    type: "list",
    section: "Applied Case Study",
    eyebrow: "UI Build Checklist",
    title: "The Quitline interface should make these actions obvious",
    items: [
      "Call 1600",
      "Add LINE OA",
      "Talk to QuitBot",
      "Start an assessment"
    ]
  },
  {
    type: "workshop",
    section: "Applied Case Study",
    eyebrow: "Deliverables",
    title: "What teams add in Day 2",
    copy:
      "Turn the Day 1 wireframes into polished UI screens with a clear homepage hierarchy, strong CTA styling, readable mobile layout, and a short rationale for the visual decisions and tradeoffs.",
    timer: "UI build handoff"
  },
  {
    type: "section",
    section: "Landing Page Workshop",
    eyebrow: "Section 6 · 14:30-15:30",
    title: "Applied studio build",
    subtitle: "Students combine UX structure and UI systems into one defended build."
  },
  {
    type: "cards",
    section: "Landing Page Workshop",
    eyebrow: "Final Build Challenge",
    title: "Students must create",
    cards: [
      ["Responsive layout", "The page should work on phone and desktop."],
      ["Premium UI hierarchy", "One message path should feel dominant and clear."],
      ["Clear CTA flow", "The primary action should stay visually obvious."],
      ["Mobile-first structure", "Sections should stack in a logical persuasive sequence."]
    ]
  },
  {
    type: "list",
    section: "Landing Page Workshop",
    eyebrow: "Required Sections",
    title: "Minimum landing page structure",
    items: [
      "Hero",
      "Features",
      "Benefits",
      "Social proof",
      "CTA",
      "Footer"
    ]
  },
  {
    type: "metrics",
    section: "Landing Page Workshop",
    eyebrow: "Evaluation Criteria",
    title: "How the work will be judged",
    metrics: [
      ["Clarity", "Is the message easy to understand quickly?"],
      ["Hierarchy", "Is the attention order controlled?"],
      ["Usability", "Do actions and content feel easy to use?"],
      ["Responsiveness", "Does mobile stay clean and readable?"],
      ["Consistency", "Do type, color, spacing, and components feel related?"],
      ["Rationale", "Can the team defend its decisions with audience, task, and trust logic?"]
    ]
  },
  {
    type: "statement",
    section: "Landing Page Workshop",
    eyebrow: "AI Reminder",
    title: "Use AI to accelerate, brainstorm, and refine. Not to replace thinking.",
    copy: "Students should be able to explain what they accepted from AI and what they changed for usability."
  },
  {
    type: "workshop",
    section: "Landing Page Workshop",
    eyebrow: "Workshop Time",
    title: "Independent build block",
    copy: "Students build the landing page direction independently while the instructor critiques hierarchy, typography, spacing, CTA clarity, and the strength of their design rationale.",
    timer: "60 minutes"
  },
  {
    type: "section",
    section: "Presentation + Critique",
    eyebrow: "Section 7 · 15:30-16:00",
    title: "Presentation + critique",
    subtitle: "Students explain and defend their design choices, not just show screens."
  },
  {
    type: "list",
    section: "Presentation + Critique",
    eyebrow: "Presentation Structure",
    title: "Each student should explain",
    items: [
      "Who the target audience is.",
      "Why the hierarchy was organized this way.",
      "How the CTA strategy supports the business goal.",
      "How mobile prioritization changed the design.",
      "How AI was used and what was manually refined."
    ]
  },
  {
    type: "list",
    section: "Presentation + Critique",
    eyebrow: "Critique Questions",
    title: "Use these questions in feedback",
    items: [
      "What stands out first?",
      "Is the CTA obvious enough?",
      "Does mobile feel clean and readable?",
      "Is anything visually distracting or unnecessary?",
      "Can the rationale be defended beyond personal taste?"
    ]
  },
  {
    type: "resources",
    section: "Presentation + Critique",
    eyebrow: "Student Resources",
    title: "Day 2 review board",
    layoutClass: "four-up",
    resources: [
      {
        title: "UI purpose",
        body: "UI should guide attention in service of UX goals.",
        items: [
          "Show importance clearly",
          "Support scanning behavior",
          "Reduce confusion visually",
          "Make action feel obvious"
        ]
      },
      {
        title: "Visual system",
        body: "Students should leave with reusable UI rules.",
        items: [
          "Type scale",
          "Spacing rhythm",
          "Palette structure",
          "Component consistency"
        ]
      },
      {
        title: "AI workflow",
        body: "Use AI as an assistant, not a substitute.",
        items: [
          "Prompt with context",
          "Generate multiple directions",
          "Critique the output",
          "Refine manually"
        ]
      },
      {
        title: "Day 3 carryover",
        body: "Tomorrow's build quality depends on today's UI discipline.",
        items: [
          "Clear section hierarchy",
          "Mobile-ready layout",
          "Consistent visual system",
          "Documented CTA strategy"
        ]
      },
      {
        title: "Class materials",
        body: "Reuse the same worksheets, UX/UI references, and prompt guide while refining hierarchy, layout, and critique decisions.",
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
      }
    ]
  },
  {
    type: "statement",
    section: "Presentation + Critique",
    eyebrow: "Final Reflection",
    title: "Good UI guides attention, reduces confusion, and supports UX goals.",
    copy: "The strongest interfaces do not just look good. They make users feel certain about where to look and what to do."
  },
  {
    type: "statement",
    section: "Presentation + Critique",
    eyebrow: "Day 3 Preview",
    title: "Website Development + Go Live",
    copy: "Tomorrow turns UX structure and UI systems into real implementation decisions."
  },
  {
    type: "quote",
    section: "Presentation + Critique",
    eyebrow: "Final Quote",
    title: "Design is intelligence made visible.",
    copy: "Visual polish matters most when it helps users understand faster and act with confidence."
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

function buildNavNote(slide) {
  if (!slide.notes) return slide.title;

  const lifeMatch = slide.notes.match(/Everyday life:\s*(.*?)\s*(?=Ask:|Watch for:|Transition:|$)/);
  return lifeMatch ? lifeMatch[1].trim() : slide.title;
}

function compactText(value, limit = 96) {
  if (!value) return "";

  const normalized = String(value).replace(/\s+/g, " ").trim();
  if (normalized.length <= limit) return normalized;
  return `${normalized.slice(0, limit - 1).trimEnd()}…`;
}

function buildNavCue(slide) {
  if (slide.navCue) return slide.navCue;
  if (slide.notes) return compactText(buildNavNote(slide));
  if (slide.type === "section" && slide.subtitle) return compactText(slide.subtitle);
  if (slide.timer) return `${slide.eyebrow || slide.section} · ${slide.timer}`;
  if (slide.eyebrow) return compactText(slide.eyebrow);
  if (slide.copy) return compactText(slide.copy);
  if (slide.prompt) return "Prompt for critique and iteration";
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

function renderSvgExample(kind) {
  const examples = {
    "visual-weight": `
      <div class="svg-example-shell">
        <p class="slide-copy">The primary action should carry more visual weight than supporting links, metadata, or secondary actions.</p>
        <svg class="svg-canvas" viewBox="0 0 860 420" role="img" aria-label="Visual weight example">
          <rect x="48" y="54" width="764" height="312" rx="28" class="svg-panel" />
          <rect x="88" y="96" width="300" height="34" rx="12" class="svg-strong" />
          <rect x="88" y="148" width="244" height="18" rx="9" class="svg-mid" />
          <rect x="88" y="178" width="212" height="18" rx="9" class="svg-mid" />
          <rect x="88" y="228" width="178" height="48" rx="24" class="svg-accent" />
          <rect x="288" y="236" width="124" height="32" rx="16" class="svg-card" />
          <rect x="560" y="100" width="180" height="180" rx="22" class="svg-card" />
          <ellipse cx="176" cy="252" rx="122" ry="42" class="svg-focus" />
          <text x="448" y="252" class="svg-label">Primary CTA wins attention</text>
          <text x="566" y="310" class="svg-label svg-label-muted">Support content stays quieter</text>
        </svg>
      </div>
    `,
    grouping: `
      <div class="svg-example-shell">
        <p class="slide-copy">Users read nearby elements as related. Good grouping clarifies which label, button, or caption belongs to which block.</p>
        <svg class="svg-canvas" viewBox="0 0 860 420" role="img" aria-label="Grouping and proximity example">
          <rect x="48" y="52" width="350" height="316" rx="28" class="svg-panel" />
          <rect x="462" y="52" width="350" height="316" rx="28" class="svg-panel" />
          <text x="86" y="92" class="svg-column-title">Weak grouping</text>
          <text x="500" y="92" class="svg-column-title">Clear grouping</text>
          <rect x="92" y="126" width="130" height="16" rx="8" class="svg-muted" />
          <rect x="92" y="186" width="200" height="42" rx="16" class="svg-card" />
          <rect x="92" y="280" width="130" height="16" rx="8" class="svg-muted" />
          <rect x="92" y="320" width="200" height="42" rx="16" class="svg-card" />
          <rect x="506" y="126" width="130" height="16" rx="8" class="svg-muted" />
          <rect x="506" y="150" width="220" height="42" rx="16" class="svg-card" />
          <rect x="506" y="234" width="130" height="16" rx="8" class="svg-muted" />
          <rect x="506" y="258" width="220" height="42" rx="16" class="svg-card" />
          <path d="M 222 134 C 286 144, 298 200, 240 208" class="svg-arrow svg-arrow-warn" />
          <text x="172" y="238" class="svg-label svg-label-muted">Harder to match</text>
          <text x="594" y="332" class="svg-label">Faster to understand</text>
        </svg>
      </div>
    `,
    gestalt: `
      <div class="svg-example-shell">
        <p class="slide-copy">Spacing creates meaning. Proximity, similarity, continuity, and closure all help users understand structure before they read everything.</p>
        <svg class="svg-canvas" viewBox="0 0 860 460" role="img" aria-label="Gestalt principles visualization">
          <rect x="44" y="40" width="772" height="380" rx="28" class="svg-panel" />
          <text x="82" y="82" class="svg-column-title">Gestalt principles in UI</text>

          <text x="84" y="122" class="svg-label">Proximity</text>
          <circle cx="112" cy="158" r="13" class="svg-dot-strong" />
          <circle cx="148" cy="158" r="13" class="svg-dot-strong" />
          <circle cx="184" cy="158" r="13" class="svg-dot-strong" />
          <circle cx="258" cy="158" r="13" class="svg-dot-soft" />
          <circle cx="294" cy="158" r="13" class="svg-dot-soft" />
          <circle cx="330" cy="158" r="13" class="svg-dot-soft" />
          <text x="84" y="190" class="svg-mini-copy">Nearby elements feel like one group.</text>

          <text x="446" y="122" class="svg-label">Similarity</text>
          <rect x="446" y="142" width="34" height="34" rx="10" class="svg-accent-soft" />
          <rect x="492" y="142" width="34" height="34" rx="10" class="svg-accent-soft" />
          <rect x="538" y="142" width="34" height="34" rx="10" class="svg-accent-soft" />
          <circle cx="636" cy="159" r="17" class="svg-dot-soft" />
          <circle cx="682" cy="159" r="17" class="svg-dot-soft" />
          <circle cx="728" cy="159" r="17" class="svg-dot-soft" />
          <text x="446" y="190" class="svg-mini-copy">Similar style suggests related meaning.</text>

          <text x="84" y="252" class="svg-label">Continuity</text>
          <path d="M 98 286 C 160 238, 220 238, 282 286 S 406 334, 468 286" class="svg-curve" />
          <circle cx="98" cy="286" r="10" class="svg-dot-strong" />
          <circle cx="190" cy="258" r="10" class="svg-dot-strong" />
          <circle cx="282" cy="286" r="10" class="svg-dot-strong" />
          <circle cx="374" cy="314" r="10" class="svg-dot-strong" />
          <circle cx="468" cy="286" r="10" class="svg-dot-strong" />
          <text x="84" y="330" class="svg-mini-copy">Eyes follow smooth paths and aligned sequences.</text>

          <text x="446" y="252" class="svg-label">Closure</text>
          <path d="M 488 276 L 560 276 M 590 276 L 662 276 M 488 276 L 488 348 M 488 378 L 488 348 M 662 276 L 662 348 M 662 378 L 662 348 M 488 378 L 560 378 M 590 378 L 662 378" class="svg-closure" />
          <text x="516" y="338" class="svg-button-text">CARD</text>
          <text x="446" y="410" class="svg-mini-copy">Users complete incomplete shapes mentally.</text>
        </svg>
      </div>
    `,
    "typography-readability": `
      <div class="svg-example-shell">
        <p class="slide-copy">Readable UI is not only about font choice. Width, spacing, and contrast determine whether text feels easy or tiring.</p>
        <svg class="svg-canvas" viewBox="0 0 860 420" role="img" aria-label="Typography readability example">
          <rect x="48" y="54" width="350" height="312" rx="28" class="svg-panel" />
          <rect x="462" y="54" width="350" height="312" rx="28" class="svg-panel" />
          <text x="86" y="92" class="svg-column-title">Harder to read</text>
          <text x="500" y="92" class="svg-column-title">Easier to read</text>
          <rect x="84" y="122" width="270" height="14" rx="7" class="svg-faint" />
          <rect x="84" y="146" width="286" height="14" rx="7" class="svg-faint" />
          <rect x="84" y="170" width="274" height="14" rx="7" class="svg-faint" />
          <rect x="84" y="194" width="288" height="14" rx="7" class="svg-faint" />
          <rect x="84" y="218" width="280" height="14" rx="7" class="svg-faint" />
          <rect x="84" y="242" width="290" height="14" rx="7" class="svg-faint" />
          <rect x="498" y="122" width="184" height="22" rx="11" class="svg-strong" />
          <rect x="498" y="164" width="210" height="12" rx="6" class="svg-mid" />
          <rect x="498" y="190" width="202" height="12" rx="6" class="svg-mid" />
          <rect x="498" y="216" width="214" height="12" rx="6" class="svg-mid" />
          <rect x="498" y="258" width="158" height="36" rx="18" class="svg-accent-soft" />
          <text x="104" y="312" class="svg-label svg-label-muted">Long, dense, low-contrast</text>
          <text x="518" y="312" class="svg-label">Shorter width, more space</text>
        </svg>
      </div>
    `,
    "mobile-prioritization": `
      <div class="svg-example-shell">
        <p class="slide-copy">A mobile-first layout should keep the value proposition and main action visible early instead of stacking every desktop idea equally.</p>
        <svg class="svg-canvas" viewBox="0 0 860 420" role="img" aria-label="Mobile prioritization comparison">
          <rect x="92" y="40" width="220" height="340" rx="28" class="svg-phone" />
          <rect x="548" y="40" width="220" height="340" rx="28" class="svg-phone" />
          <text x="118" y="76" class="svg-column-title">Shrunk desktop</text>
          <text x="574" y="76" class="svg-column-title">Prioritized mobile</text>
          <rect x="120" y="104" width="164" height="20" rx="10" class="svg-muted" />
          <rect x="120" y="138" width="164" height="18" rx="9" class="svg-faint" />
          <rect x="120" y="170" width="164" height="18" rx="9" class="svg-faint" />
          <rect x="120" y="202" width="164" height="18" rx="9" class="svg-faint" />
          <rect x="120" y="234" width="164" height="18" rx="9" class="svg-faint" />
          <rect x="120" y="266" width="164" height="18" rx="9" class="svg-faint" />
          <rect x="120" y="300" width="112" height="28" rx="14" class="svg-card" />
          <rect x="576" y="104" width="156" height="26" rx="13" class="svg-strong" />
          <rect x="576" y="144" width="148" height="14" rx="7" class="svg-mid" />
          <rect x="576" y="170" width="132" height="14" rx="7" class="svg-mid" />
          <rect x="576" y="206" width="126" height="42" rx="21" class="svg-accent" />
          <rect x="576" y="268" width="156" height="18" rx="9" class="svg-card" />
          <rect x="576" y="296" width="156" height="18" rx="9" class="svg-card" />
          <text x="116" y="352" class="svg-label svg-label-muted">Everything stacked</text>
          <text x="574" y="352" class="svg-label">Message and CTA first</text>
        </svg>
      </div>
    `
  };

  return examples[kind] ?? "";
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

function renderPrincipleDiagram(kind) {
  const diagrams = {
    proximity: `
      <div class="principle-canvas principle-proximity" aria-hidden="true">
        <div class="principle-phone">
          <div class="principle-stack">
            <div class="mini-label"></div>
            <div class="mini-field"></div>
            <div class="mini-label near"></div>
            <div class="mini-field"></div>
            <div class="mini-label far"></div>
            <div class="mini-field"></div>
          </div>
          <div class="proximity-bracket bracket-top"></div>
          <div class="proximity-bracket bracket-bottom"></div>
        </div>
      </div>
    `,
    "common-region": `
      <div class="principle-canvas principle-region" aria-hidden="true">
        <div class="region-shell">
          <div class="region-card">
            <div class="mini-heading short"></div>
            <div class="mini-row">
              <div class="mini-chip"></div>
              <div class="mini-chip"></div>
            </div>
            <div class="mini-field wide"></div>
            <div class="mini-button accent"></div>
          </div>
          <div class="region-note">Same container = same group</div>
        </div>
      </div>
    `,
    closure: `
      <div class="principle-canvas principle-closure" aria-hidden="true">
        <div class="closure-stage">
          <div class="progress-ring">
            <div class="progress-gap"></div>
            <div class="progress-core"></div>
          </div>
          <div class="mini-heading short"></div>
          <div class="mini-field medium"></div>
        </div>
      </div>
    `,
    emergence: `
      <div class="principle-canvas principle-emergence" aria-hidden="true">
        <div class="dashboard-shell">
          <div class="dashboard-nav"></div>
          <div class="dashboard-main">
            <div class="dashboard-hero"></div>
            <div class="dashboard-grid">
              <div class="dashboard-card"></div>
              <div class="dashboard-card"></div>
              <div class="dashboard-card wide"></div>
            </div>
          </div>
        </div>
      </div>
    `,
    similarity: `
      <div class="principle-canvas principle-similarity" aria-hidden="true">
        <div class="similarity-shell">
          <div class="similarity-row">
            <div class="mini-pill accent">New</div>
            <div class="mini-pill accent">New</div>
            <div class="mini-pill muted">Old</div>
          </div>
          <div class="similarity-row">
            <div class="mini-button accent"></div>
            <div class="mini-button accent"></div>
            <div class="mini-button muted"></div>
          </div>
        </div>
      </div>
    `,
    simplicity: `
      <div class="principle-canvas principle-simplicity" aria-hidden="true">
        <div class="simplicity-shell">
          <div class="product-card">
            <div class="product-thumb"></div>
            <div class="mini-heading short"></div>
            <div class="mini-field short"></div>
            <div class="mini-button accent"></div>
          </div>
          <div class="product-card">
            <div class="product-thumb"></div>
            <div class="mini-heading short"></div>
            <div class="mini-field short"></div>
            <div class="mini-button accent"></div>
          </div>
        </div>
      </div>
    `
  };

  return diagrams[kind] ?? "";
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
          <p class="footer-mark">Day 2 · Good UI Guides Attention</p>
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
    case "meme":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <p class="meme-kicker">Visual hierarchy decides what feels important before users read everything.</p>
          <div class="meme-stage">
            <h2 class="meme-line meme-line-1">${escapeHtml(slide.line1)}</h2>
            <h3 class="meme-line meme-line-2">${escapeHtml(slide.line2)}</h3>
            <p class="meme-line meme-line-3">${escapeHtml(slide.line3)}</p>
          </div>
          <div class="meme-explanation">
            <p class="meme-punchline">${escapeHtml(slide.copy)}</p>
            <p class="slide-copy">Size, contrast, spacing, and position create reading order. Good UI tells users what matters now, what matters next, and what can wait.</p>
            <div class="meme-cues" aria-label="Visual hierarchy cues">
              <span class="meme-cue"><strong>1</strong> Size</span>
              <span class="meme-cue"><strong>2</strong> Contrast</span>
              <span class="meme-cue"><strong>3</strong> Spacing</span>
              <span class="meme-cue"><strong>4</strong> Position</span>
            </div>
          </div>
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
    case "metrics":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          ${renderMetrics(slide.metrics)}
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
    case "resources":
      return `
        <div class="slide-shell">
          ${eyebrow}
          <h2 class="section-title">${escapeHtml(slide.title)}</h2>
          ${renderResources(slide.resources, slide.layoutClass)}
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
    case "principle-diagram":
      return `
        <div class="slide-shell split-layout">
          <div>
            ${eyebrow}
            <h2 class="section-title">${escapeHtml(slide.title)}</h2>
            <p class="slide-copy">${escapeHtml(slide.copy)}</p>
            <article class="principle-example-card">
              <h3>${escapeHtml(slide.exampleTitle)}</h3>
              <p class="slide-copy">${escapeHtml(slide.exampleText)}</p>
            </article>
          </div>
          <div class="principle-demo-shell">
            ${renderPrincipleDiagram(slide.diagramKind)}
          </div>
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
  const noteSummary = buildNavNote(slide);
  const cueSummary = buildNavCue(slide);
  currentSection.textContent = slide.section;
  slideCounter.textContent = `${index + 1} / ${slides.length}`;
  slideTitle.textContent = noteSummary;
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
