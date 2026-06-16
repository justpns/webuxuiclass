# Repository Guidelines

## Project Structure & Module Organization
This repository contains static browser-based teaching decks for website design fundamentals.

- `index.html`, `style.css`, `script.js`: Day 1 UX presentation
- `day2.html`, `day2.css`, `day2.js`: Day 2 UI presentation
- `ux-ui-meme.html`: standalone visual teaching page
- `Knowledge/`: source notes such as `ux.md`, `ui.md`, and compact theory references
- `*.md` briefs: planning documents and teaching outlines used to shape the decks

There is no build system or backend. Slides are generated from JavaScript data arrays and rendered into semantic HTML templates at runtime.

## Build, Test, and Development Commands
Open the decks directly in a browser:

- `open index.html`: preview Day 1
- `open day2.html`: preview Day 2

Sanity-check JavaScript before finishing edits:

- `node --check script.js`: validate Day 1 script syntax
- `node --check day2.js`: validate Day 2 script syntax

When editing slide data, keep hash navigation, bookmark rails, and custom slide renderers in sync.

## Coding Style & Naming Conventions
Use 2-space indentation in HTML, CSS, and JavaScript. Prefer ASCII unless the file already uses special typography.

- Slide objects use lowercase `type` names such as `cards`, `compare`, `svg-example`, `resources`
- CSS class names use kebab-case, for example `bookmark-rail`, `svg-example-shell`
- Keep slide titles sentence-style and concise

Inline SVG examples should be added through renderer functions in the corresponding `*.js` file, not as separate asset files unless reuse clearly justifies it.

## Testing Guidelines
There is no automated test framework in this repository. Minimum verification for every change:

1. Run `node --check` on the edited script file.
2. Confirm HTML references the correct CSS and JS files.
3. Manually review the deck in a browser for layout, navigation, and mobile/desktop behavior.

## Commit & Pull Request Guidelines
This workspace may not include Git metadata, so follow simple, clear commit conventions:

- Use imperative subjects, for example `Add Day 2 Gestalt visualization`
- Keep one logical change per commit when possible

For pull requests, include:

- a short summary of the teaching or UI change
- affected files
- screenshots or screen recordings for visual changes
- any manual verification performed

## Agent-Specific Notes
Preserve the static-deck architecture. Do not introduce frameworks or package tooling unless explicitly requested. When adding new slide types, update both the renderer and the matching CSS in the same change.
