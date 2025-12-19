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

Landing page + interactive demo for Social Highlighter (Veo product). Built with Next.js 15 App Router.

### Routes
- `/` - Landing page with sections composed in `src/app/page.tsx`
- `/try` - Immersive 7-step interactive demo (iOS-style UI)

### Landing Page Structure
`src/app/page.tsx` composes sections in order:
1. Hero - "Early access" badge, headline, CTAs ("See How It Works" → `#demo`, "Request early access" → `#early-access`), video placeholder, floating stat cards
2. SocialProof - Example IG posts, stats bar with footnote (moved up for proof-first approach)
3. Problem - 5-step narrative showing user pain points
4. Demo (`#demo`) - Instruction line, interactive 3-step demo (timeline, face blur toggle, share simulation), "Get clips like this" CTA
5. Pricing (`#early-access`) - Two-tier CTA (Founding Member £4.99 deposit + Free Waitlist with Role dropdown)
6. FAQ - Expandable accordion with trust-focused answers
7. Footer

### Interactive Demo (`/try`)
Full-screen iOS-style demo experience at `src/app/try/`. 7-step flow:
1. Welcome - App intro with "Start Demo" CTA
2. Match Selection - Choose from 3 mock matches
3. AI Processing - Animated progress ring (4.5s)
4. Highlight Reveal - Timeline + 3 highlight cards
5. Blur Preview - Face blur toggle demonstration
6. Share Sheet - Instagram share simulation
7. Success - Confetti + £4.99 founding member CTA

**Responsive presentation:**
- Mobile: Full-screen native iOS feel
- Desktop: Wrapped in iPhone 15 Pro frame with Dynamic Island

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
- `.scrollbar-hide` - Hide scrollbar for horizontal scroll containers

### Mobile Optimization Patterns
Landing page is optimized for mobile-first viewing:

**Content compression (mobile):**
- Section descriptions hidden via `hidden md:block`
- Problem section: Headlines only, body text hidden
- Demo section: Step titles only, descriptions hidden
- Reduced spacing: `mb-8 md:mb-12`, `p-4 md:p-6` patterns

**SocialProof horizontal scroll (mobile):**
- Grid on desktop (`md:grid-cols-3`), horizontal scroll on mobile
- Cards at 70% viewport width with snap-to-center
- Uses `.scrollbar-hide` for clean appearance

**Responsive sizing:**
- Floating stat cards: Smaller on mobile (`p-2`, `w-8 h-8` icons)
- Problem icons: `w-12 h-12` mobile, `w-16 h-16` desktop
- Hero: `min-h-[85vh]` mobile, `min-h-screen` desktop

### Key Components

**Landing Page (`src/components/`):**
- `Hero.tsx` - "Early access" badge, dual CTAs with anchor scroll, video placeholder
- `SocialProof.tsx` - Example IG posts with "Examples" label, stats bar with transparency footnote
- `Demo.tsx` - Instruction line, 3-step flow with `data-event` tracking, "Get clips like this" CTA
- `Pricing.tsx` - Founding Member + Free Waitlist cards, Role dropdown (Player/Parent/Coach), `#early-access` anchor
- `FAQ.tsx` - Accordion with trust-focused answers (tightened "Is this real?", pricing/process FAQs)

**Interactive Demo (`src/components/demo/`):**
- `DemoPage.tsx` - Orchestrator managing 7-step state
- `DemoWelcome.tsx` - Welcome screen with gradient orb animation
- `MatchSelector.tsx` - 3 match cards with selection state
- `AIProcessing.tsx` - Circular progress ring with dynamic messages
- `HighlightReveal.tsx` - Timeline + staggered card reveal
- `BlurPreview.tsx` - Video placeholder with face blur toggle
- `ShareSheet.tsx` - Instagram-style share UI
- `DemoSuccess.tsx` - Confetti celebration + conversion CTAs
- `constants.ts` - Mock data for matches and highlights

**iOS Components (`src/components/ios/`):**
- `IPhoneFrame.tsx` - iPhone 15 Pro bezel wrapper (desktop only)
- `IOSStatusBar.tsx` - Time, cellular, WiFi, battery icons (desktop only, hidden on mobile to avoid duplicate with native status bar)
- `IOSNavigationBar.tsx` - Large title + back button
- `IOSHomeIndicator.tsx` - Bottom home bar

## Deployment & Analytics
- Hosted on Vercel with GitHub integration (auto-deploys on push)
- Vercel Analytics enabled via `@vercel/analytics` in `src/app/layout.tsx`

## Not Yet Implemented
- Stripe payment integration (preorder button shows alert)
- Backend/database for form submissions
- Real video assets (using placeholders)
- iOS push/pop slide transitions between demo steps
- Exit-intent modal for early demo abandonment
