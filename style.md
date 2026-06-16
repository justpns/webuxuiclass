# Codex Brief: Day 1 UX + AI HTML Presentation
## Style Direction: Apple Launch Event + Premium Lecture Experience

Create a mobile-first HTML presentation for **Day 1: Website Design Fundamental — UX**.
The presentation should feel like a premium Apple launch event blended with a university masterclass lecture.

The content is inspired by **Don't Make Me Think** by Steve Krug, combined with modern AI-assisted UX workflow.

---

## 1. Project Goal

Build a polished, responsive, browser-based presentation that can be used for a full-day lecture from **09:00–17:00**.

The presentation must work well on:

- Mobile phone
- Tablet
- Laptop
- Projector screen

The output should be a complete static HTML presentation using:

- `index.html`
- `style.css`
- `script.js`

No backend required.

---

## 2. Visual Style Direction

### Overall Mood

Use an **Apple keynote / Apple launch event** inspired style:

- Minimal
- Premium
- Cinematic
- Spacious
- High contrast
- Clean typography
- Big statements
- Smooth transitions
- Product-launch energy
- Lecture-ready readability

The design should feel like:

> Apple Event meets UX Masterclass.

---

## 3. Design System

### Color Palette

Use a dark premium base:

- Background: `#050505`, `#0B0B0F`, `#111217`
- Text primary: `#F5F5F7`
- Text secondary: `#A1A1A6`
- Accent blue: `#2997FF`
- Accent purple: `#A855F7`
- Soft gradient highlights: blue / purple / white glow

### Typography

Use Apple-like system fonts:

```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", "Segoe UI", sans-serif;
```

Typography should be very large and clean.

Recommended sizing:

- Hero title mobile: `42px–56px`
- Hero title desktop: `80px–120px`
- Section title mobile: `34px–44px`
- Section title desktop: `64px–88px`
- Body mobile: `17px–20px`
- Body desktop: `22px–28px`

Use short lines and high readability.

---

## 4. Layout Principles

### Mobile-first

Start with mobile layout first, then scale up.

Every slide should be readable on a phone.

Rules:

- One main idea per slide
- Maximum 1–3 key points per slide
- Large text
- Strong spacing
- Clear hierarchy
- No crowded bullet lists
- Use cards only when helpful
- Use full-screen sections

### Desktop / Projector

On larger screens:

- Center content vertically
- Use cinematic spacing
- Use large typography
- Add subtle background glow
- Use side-by-side comparison layouts
- Use speaker-note panels optionally hidden by default

---

## 5. Presentation Structure

Create a scroll-based presentation, not a classic PowerPoint clone.

Use full-screen sections with snap scrolling:

```css
section.slide {
  min-height: 100vh;
  scroll-snap-align: start;
}
```

Add keyboard navigation:

- Arrow Down / Space = next slide
- Arrow Up = previous slide
- Home = first slide
- End = last slide

Add progress indicator:

- Thin progress bar at top
- Slide number bottom-right

---

## 6. Required Interaction Features

### Navigation

Add:

- Floating next / previous buttons on mobile
- Keyboard support on desktop
- Progress bar
- Current section indicator

### Lecture Mode

Create optional lecture notes.

Each slide should support:

```html
<aside class="speaker-notes">
  Speaker note text here.
</aside>
```

Add a toggle button:

- `N` key toggles speaker notes
- Button label: `Notes`

Speaker notes should be hidden by default.

---

## 7. Animation Style

Use premium subtle animations only.

Allowed:

- Fade in
- Slide up
- Soft scale
- Gradient glow movement
- Smooth section transitions
- Parallax background glow

Avoid:

- Cartoon effects
- Too many bouncing effects
- Cheap PowerPoint-like animations
- Heavy motion that distracts from teaching

Animation feeling:

> Calm, confident, cinematic.

---

## 8. Core Lecture Theme

The entire presentation should repeatedly reinforce this message:

> AI can generate. Designers must decide.

And:

> Don’t make users think.

Students should learn that AI is a tool for speed, but UX judgment is the main skill.

---

# 9. Slide Content Plan

Create around **70–90 slides**.

Each slide should be short, visual, and lecture-friendly.

---

## Opening Sequence

### Slide 1 — Title

Title:

```text
Website Design Fundamentals
```

Subtitle:

```text
Day 1: UX Thinking in the AI Era
```

Small label:

```text
28 June · 09:00–17:00 · Fifa
```

Speaker note:

Introduce the course as a practical masterclass. Explain that students will use AI, but the goal is not to let AI think for them.

---

### Slide 2 — Big Statement

```text
Good UX feels invisible.
```

Speaker note:

When UX is good, users do not notice the design. They simply understand what to do.

---

### Slide 3 — Course Philosophy

```text
Don’t make users think.
```

Subtext:

```text
Make every screen obvious, simple, and useful.
```

---

### Slide 4 — AI Era Statement

```text
AI can generate.
Designers must decide.
```

Speaker note:

AI can create many options quickly. But quality comes from human judgment, clarity, and understanding users.

---

### Slide 5 — Today’s Learning Outcome

Students will be able to:

- Analyze a website using UX principles
- Use AI for research and structure
- Create a sitemap
- Map user flows
- Build low-fidelity wireframes
- Critique UX clearly

---

## Section 1 — Modern UX Mindset

### Slide 6 — Section Intro

```text
1. Modern UX Mindset
```

Subtitle:

```text
Users scan. Users skip. Users leave.
```

---

### Slide 7 — The Reality

```text
Users don’t read websites.
They scan them.
```

---

### Slide 8 — Why Websites Fail

Show three big words:

```text
Confusing
Crowded
Unclear
```

---

### Slide 9 — UX vs UI

Create a simple comparison:

```text
UX = How it works
UI = How it looks
```

Speaker note:

A beautiful website can still fail if users do not know what to do.

---

### Slide 10 — The 5-Second Question

```text
Can users understand your website in 5 seconds?
```

---

### Slide 11 — The Three Questions

Users ask:

```text
Where am I?
What can I do here?
Why should I care?
```

---

### Slide 12 — Activity: 5-Second Test

Instruction:

```text
Look at a homepage for 5 seconds.
Then answer: What is it? Who is it for? What should I click?
```

Add a timer visual.

---

## Section 2 — Understanding Users

### Slide 13 — Section Intro

```text
2. Understanding Users
```

Subtitle:

```text
Design for behavior, not imagination.
```

---

### Slide 14 — Biggest UX Mistake

```text
Designing for yourself.
```

---

### Slide 15 — Users Are Busy

```text
They want answers.
Not puzzles.
```

---

### Slide 16 — Cognitive Load

```text
Cognitive load = mental effort.
```

Subtext:

```text
Good UX reduces mental effort.
```

---

### Slide 17 — AI Research Prompt

Show prompt card:

```text
Analyze the target users for a [business type] website.
Identify their goals, fears, questions, and decision factors.
```

---

### Slide 18 — AI Output Is Not Final

```text
AI gives raw material.
You create clarity.
```

---

### Slide 19 — Workshop: Persona Sprint

Students create:

- 1 target user
- 1 main goal
- 1 frustration
- 1 success moment

---

### Slide 20 — Lecture Note Slide

```text
UX is not about guessing.
UX is about reducing uncertainty.
```

---

## Section 3 — Information Architecture

### Slide 21 — Section Intro

```text
3. Information Architecture
```

Subtitle:

```text
Organize information so users don’t get lost.
```

---

### Slide 22 — IA Definition

```text
Information Architecture = how content is grouped, labeled, and found.
```

---

### Slide 23 — Navigation Should Be Boring

```text
Predictable is powerful.
```

Speaker note:

Menus should not be creative if creativity makes them unclear.

---

### Slide 24 — Bad Menu Labels

Display examples:

```text
Solutions
Experience
Discover
Explore
Resources
```

Subtext:

```text
Sometimes these are too vague.
```

---

### Slide 25 — Better Menu Labels

Display examples:

```text
Services
Pricing
Case Studies
About
Contact
```

---

### Slide 26 — Hick’s Law

```text
More choices = slower decisions.
```

Use a simple visual:

- 3 choices = easy
- 12 choices = stressful

---

### Slide 27 — Simplification Challenge

```text
Remove 50%.
Make it clearer.
```

---

### Slide 28 — AI Sitemap Prompt

```text
Create a simple sitemap for a [business type] website.
Prioritize clarity, conversion, and mobile-first navigation.
Limit the main menu to 5 items.
```

---

### Slide 29 — Human Refinement

```text
AI creates options.
UX designers remove noise.
```

---

### Slide 30 — Workshop: Sitemap Sprint

Students produce:

- Main menu
- Page hierarchy
- Primary CTA
- Footer links

---

## Section 4 — User Flow & CTA Thinking

### Slide 31 — Section Intro

```text
4. User Flow
```

Subtitle:

```text
Every page should answer: What now?
```

---

### Slide 32 — User Flow Formula

```text
Landing → Understanding → Trust → Action → Success
```

---

### Slide 33 — Friction

```text
Friction is anything that makes users stop.
```

---

### Slide 34 — Common Friction Points

Use large cards:

- Unclear CTA
- Too many form fields
- Hidden pricing
- Weak trust signals
- Slow loading

---

### Slide 35 — CTA Rule

```text
One primary action per screen.
```

---

### Slide 36 — Bad CTA

```text
Submit
Click Here
Learn More
```

Subtext:

```text
Too vague.
```

---

### Slide 37 — Better CTA

```text
Book a Consultation
Get Course Pricing
Start Your Free Trial
Download the Guide
```

---

### Slide 38 — AI Flow Prompt

```text
Map the user journey for a [business type] landing page.
Identify the main friction points and suggest clearer CTAs.
```

---

### Slide 39 — Workshop: Flow Mapping

Students create:

```text
Homepage → Key Section → CTA → Form → Thank You
```

---

### Slide 40 — Peer Test

Question:

```text
Was the next action obvious?
```

---

## Section 5 — Wireframing

### Slide 41 — Section Intro

```text
5. Wireframing
```

Subtitle:

```text
Think before decorating.
```

---

### Slide 42 — Wireframes Are Not Art

```text
Wireframes are decisions.
```

---

### Slide 43 — Low Fidelity First

```text
Boxes before beauty.
```

---

### Slide 44 — Homepage Structure

Show stacked mobile-first structure:

```text
Hero
Problem
Solution
Benefits
Trust
CTA
FAQ
Footer
```

---

### Slide 45 — Hero Section Must Answer

```text
What is this?
Who is it for?
Why choose this?
What do I do next?
```

---

### Slide 46 — AI Wireframe Prompt

```text
Create a mobile-first homepage wireframe for a [business type].
Use clear UX hierarchy, one primary CTA, and simple section order.
```

---

### Slide 47 — Wireframe Review Checklist

- Is the message obvious?
- Is the CTA visible?
- Is the order logical?
- Is anything unnecessary?

---

### Slide 48 — Workshop: Mobile Wireframe

Students sketch:

- Mobile homepage
- Main CTA
- First 5 sections

---

### Slide 49 — Workshop: Desktop Expansion

Students expand mobile wireframe to desktop.

Rule:

```text
Desktop should enhance, not complicate.
```

---

### Slide 50 — Mini Presentation

Students present wireframe in 2 minutes.

---

## Section 6 — UX Critique

### Slide 51 — Section Intro

```text
6. UX Critique
```

Subtitle:

```text
Feedback should improve clarity.
```

---

### Slide 52 — Bad Feedback

```text
I like it.
I don’t like it.
Make it pop.
```

---

### Slide 53 — Good Feedback

```text
I understood this first.
I was confused by this.
I expected this button to lead to...
```

---

### Slide 54 — Critique Framework

Score each design from 1–5:

- Clarity
- Navigation
- CTA
- Trust
- Simplicity

---

### Slide 55 — AI Critique Prompt

```text
Act as a UX reviewer. Critique this wireframe using Don't Make Me Think principles. Focus on clarity, cognitive load, navigation, CTA hierarchy, and user friction.
```

---

### Slide 56 — Human Critique Still Matters

```text
AI can review patterns.
Humans understand context.
```

---

### Slide 57 — Group Review

Each group presents.
Class answers:

```text
What is clear?
What is confusing?
What should be removed?
```

---

## Closing Sequence

### Slide 58 — What We Learned

```text
Users scan.
Clarity wins.
AI accelerates.
Designers decide.
```

---

### Slide 59 — Day 1 Deliverables

Students should have:

- User persona
- Sitemap
- User flow
- Mobile wireframe
- UX critique notes

---

### Slide 60 — Homework

```text
Refine your wireframe using feedback and AI critique.
Prepare for UI design on Day 2.
```

---

### Slide 61 — Final Quote

```text
Don’t make users think.
Make them feel guided.
```

---

# 10. Lecture Flow Timing

Use this schedule in the HTML presentation as a hidden or visible agenda section.

```text
09:00–09:30 Opening + Modern UX Mindset
09:30–10:30 Understanding Users + AI Research
10:30–10:45 Break
10:45–12:00 Information Architecture + Sitemap Workshop
12:00–13:00 Lunch
13:00–14:00 User Flow + CTA Thinking
14:00–15:00 Wireframing Workshop
15:00–15:15 Break
15:15–16:15 UX Critique Workshop
16:15–17:00 Reflection + Homework
```

---

# 11. Required Components

Create reusable components in HTML/CSS:

## Slide Types

1. `hero-slide`
2. `statement-slide`
3. `section-intro-slide`
4. `comparison-slide`
5. `prompt-card-slide`
6. `workshop-slide`
7. `checklist-slide`
8. `quote-slide`
9. `agenda-slide`
10. `closing-slide`

## UI Components

- Progress bar
- Slide counter
- Navigation arrows
- Notes toggle
- Prompt card
- Activity card
- Timeline agenda
- Comparison grid
- Mobile wireframe mockup
- Glowing background orb

---

# 12. Apple Event Styling Details

## Backgrounds

Use:

- Black gradient background
- Subtle radial glow
- Floating blurred orbs
- Very soft animated gradient

Example CSS direction:

```css
body {
  background:
    radial-gradient(circle at 50% 10%, rgba(41,151,255,0.2), transparent 30%),
    radial-gradient(circle at 80% 80%, rgba(168,85,247,0.16), transparent 35%),
    #050505;
}
```

## Cards

Use glass-like cards:

```css
.card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(20px);
  border-radius: 28px;
}
```

## Buttons

Apple-style pill buttons:

```css
.button-primary {
  border-radius: 999px;
  background: #2997FF;
  color: white;
  padding: 14px 24px;
}
```

---

# 13. Content Tone

Tone should be:

- Clear
- Confident
- Premium
- Teacher-friendly
- Simple but intelligent
- Not too academic
- Not too casual

Use short sentences.
Use big statements.
Use minimal bullets.

Avoid long paragraphs on slides.
Put explanation in speaker notes instead.

---

# 14. Speaker Notes Requirement

Every major slide should include speaker notes.

Speaker notes should help the lecturer explain:

- What to say
- What question to ask students
- What activity to run
- What transition to make

Example:

```html
<aside class="speaker-notes">
  Ask students to think about a website they recently left quickly. What made them leave? Connect their answers to cognitive load and unclear navigation.
</aside>
```

---

# 15. AI Prompt Library Section

Add a dedicated slide group called:

```text
AI Prompt Library
```

Include these prompt cards:

## Prompt 1 — UX Audit

```text
Analyze this website using Don't Make Me Think principles. Focus on clarity, cognitive load, navigation, CTA visibility, and user friction.
```

## Prompt 2 — Persona

```text
Create a practical UX persona for a [business type] website. Include user goals, fears, decision factors, questions, and success criteria.
```

## Prompt 3 — Sitemap

```text
Create a simple mobile-first sitemap for a [business type] website. Limit the main navigation to 5 items and explain why each item is needed.
```

## Prompt 4 — User Flow

```text
Map a user journey from homepage arrival to successful conversion for a [business type]. Identify friction points and suggest clearer CTAs.
```

## Prompt 5 — Wireframe

```text
Create a low-fidelity mobile-first homepage wireframe structure for a [business type]. Use clear hierarchy and one primary CTA.
```

## Prompt 6 — Critique

```text
Act as a senior UX reviewer. Critique this wireframe for clarity, simplicity, navigation, CTA hierarchy, and cognitive load. Suggest what to remove first.
```

---

# 16. Practical Workshop Pages

Add printable/exportable workshop sections in the HTML.

These can appear as slides or downloadable-style cards.

## Worksheet 1 — 5-Second Test

Fields:

- Website name
- What is this website?
- Who is it for?
- What should I click first?
- What confused me?

## Worksheet 2 — Persona Sprint

Fields:

- User type
- Main goal
- Biggest frustration
- Main question
- Success moment

## Worksheet 3 — Sitemap Sprint

Fields:

- Main pages
- Primary CTA
- Pages to remove
- Footer links

## Worksheet 4 — User Flow

Fields:

- Entry point
- Step 1
- Step 2
- CTA
- Success state
- Friction points

## Worksheet 5 — Wireframe Checklist

Fields:

- Hero message is clear
- CTA is visible
- Navigation is simple
- Sections are logical
- Mobile layout is readable
- Unnecessary content removed

---

# 17. Technical Requirements

## HTML

Use semantic HTML.

Recommended structure:

```html
<main class="deck">
  <section class="slide hero-slide" id="slide-1">
    <div class="slide-content">
      <p class="eyebrow">Day 1 · UX Fundamentals</p>
      <h1>Website Design Fundamentals</h1>
      <p class="subtitle">UX Thinking in the AI Era</p>
    </div>
    <aside class="speaker-notes">...</aside>
  </section>
</main>
```

## CSS

Use:

- CSS custom properties
- Responsive clamp typography
- Scroll snap
- Smooth transitions
- Dark premium style
- Reduced motion support

Add:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

## JavaScript

Implement:

- Next / previous slide navigation
- Keyboard controls
- Progress bar update
- Current slide counter
- Notes toggle
- Optional fullscreen button

No external frameworks required.

Use vanilla JS.

---

# 18. Accessibility Requirements

- High contrast text
- Large font sizes
- Keyboard navigation
- Visible focus states
- ARIA labels for navigation buttons
- Reduced motion support
- Speaker notes must be readable when toggled
- Buttons must be at least 44px tall on mobile

---

# 19. Quality Checklist

Before final output, check:

- Works on mobile first
- Slides are not text-heavy
- Apple-style premium visual feeling
- Lecture notes included
- Activities are clear
- AI prompts are included
- Keyboard navigation works
- Progress bar works
- Notes toggle works
- Content covers 09:00–17:00
- Day 1 only

---

# 20. Final Output Expected

Generate:

```text
index.html
style.css
script.js
```

Optional:

```text
README.md
```

The final presentation should be ready to open directly in a browser.

