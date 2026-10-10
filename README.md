# Crystal Kizor Brand Ecosystem

This repo contains my code for the Studio COKA / Crystal Kizor Stage 1 Web Developer assessment.

## Live Site
- Live URL: https://crystal-kizor-cyan.vercel.app/

## Overview
The goal was to build a single-page landing page that brings Crystal Kizor's various ventures (Studio COKA, ELEvated, The Effective Architect, AKO Alliance, Alive and Free, Speaking, and Personal Research) together under one personal brand ecosystem.

The page addresses four main questions for visitors:
1. Who is Crystal Kizor?
2. What does she do?
3. What is she building?
4. Where should I go next?

## Tech Stack
- React 19
- TypeScript
- Tailwind CSS v4
- GSAP (ScrollTrigger and intro animation)
- Vite

## Key Implementation Details
- Component Architecture: Standard PascalCase components with arrow functions and typed interfaces.
- Intro Animation: GSAP monogram entrance that respects prefers-reduced-motion for accessibility.
- Visitor Routing: The "Where Next" section provides 4 direct pathways that scroll to the contact form and automatically set the appropriate inquiry dropdown option.
- Asset Optimization: Active images are compressed to WebP with explicit height and width attributes to avoid layout shifts (CLS: 0.001).
- Styling: Built strictly with standard Tailwind utility classes without arbitrary bracket values.

## Assessment Answers (Parts 2 & 3)
The written answers for Part 2 (AI Product Thinking: BuildIQ by TEA) and Part 3 (Analytics and Improvement) are available in:
- `STAGE_1_SUBMISSION_DOCUMENT.html` (formatted for browser viewing or saving to PDF via print)

## Getting Started

### Prerequisites
- Node.js 18 or newer
- npm

### Installation
```bash
git clone <repo-url>
cd Crystal_Kizor
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```
