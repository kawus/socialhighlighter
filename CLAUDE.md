# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

Single-page landing page for Social Highlighter (Veo product). Built with Next.js 15 App Router.

### Page Structure
`src/app/page.tsx` composes sections in order:
1. Hero - Headline, video placeholder, floating stat cards
2. Problem - 5-step narrative showing user pain points
3. Demo - Interactive 3-step demo (timeline, face blur toggle, share simulation)
4. SocialProof - Mock Instagram posts with engagement
5. Pricing - Two-tier CTA (£4.99 preorder deposit + free waitlist)
6. FAQ - Expandable accordion
7. Footer

### Design System
Sports-focused dark theme defined in two places:

**`tailwind.config.ts`** - Custom tokens:
- Colors: `bg-primary` (#0A0A0B), `accent-primary` (#00FF87), `energy-warm` (#FFB800)
- Animations: `animate-shimmer`, `animate-fade-up`, `animate-pulse-live`
- Shadows: `shadow-glow`, `shadow-glow-warm`

**`src/app/globals.css`** - CSS variables and component classes:
- `.btn-primary`, `.btn-secondary` - Button styles with glow effects
- `.card` - Card with hover lift and border glow
- `.section-container`, `.section-padding` - Layout utilities
- `.text-gradient` - Green-to-cyan gradient text

### Key Components
- `Demo.tsx` - Stateful component with 3-step flow, highlight selection, blur toggle
- `Pricing.tsx` - Form state management, success state after submission
- `FAQ.tsx` - Accordion with single-open behavior

## Not Yet Implemented
- Stripe payment integration (preorder button shows alert)
- Backend/database for form submissions
- Real video assets (using placeholders)
- Analytics tracking
