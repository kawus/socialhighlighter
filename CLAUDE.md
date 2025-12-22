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
5. Features - "AI That Knows You" section showcasing 5 AI-powered features with rich mockups
6. Pricing (`#early-access`) - Two-tier CTA (Founding Member £4.99 deposit + Free Waitlist with Role dropdown)
7. FAQ - Expandable accordion with trust-focused answers
8. Footer

### Interactive Demo (`/try`)
Streamlined "belief demo" at `src/app/try/`. Designed for instant "wow" + clear conversion path. 4-step flow:
1. Highlight Selection - Pre-selected "Goal — 67:38", timeline + 3 moment cards, Continue button
2. Blur Preview - Face blur toggle with hint animation, Continue button
3. Share Sheet - Instagram share simulation
4. Success - Confetti + "Request early access" CTA → `/#early-access`

**Key UX patterns:**
- **Instant win**: Demo loads with best highlight already selected (no blank state)
- **User-triggered progression**: No auto-advancing; user clicks Continue to proceed
- **Instruction line**: "Click a moment → watch the clip → toggle privacy blur → share."
- **Reality signal**: "Example clip from a real amateur match." shown below instructions
- **Conversion bridge**: Success screen links to `/#early-access` with microcopy "No spam. We'll invite UK testers first."

**Analytics instrumentation** (data-event attributes for future wiring):
- `try_demo_loaded` - Main container
- `try_demo_click_moment` - Timeline markers + highlight cards
- `try_demo_toggle_blur` - Privacy toggle
- `try_demo_share` - Instagram share button
- `try_demo_request_early_access` - Final CTA

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
- `Features.tsx` - "AI That Knows You" section with 5 rich mockup feature cards:
  - Mum Gets Every Goal: iMessage mockup showing auto-share to family
  - You're Getting Better: Progress dashboard with stats and AI insights
  - Top 1%: Highlight card with glowing rarity badge and percentile bar
  - Your Season Story: Film-strip video preview for AI-generated season documentary
  - Coach's Notes: Highlight with AI analysis speech bubble
- `Pricing.tsx` - Founding Member + Free Waitlist cards, Role dropdown (Player/Parent/Coach), `#early-access` anchor
- `FAQ.tsx` - Accordion with trust-focused answers (tightened "Is this real?", pricing/process FAQs)

**Interactive Demo (`src/components/demo/`):**
- `DemoPage.tsx` - Orchestrator managing 4-step belief demo flow
- `HighlightReveal.tsx` - Timeline + highlight cards with default selection, Continue button
- `BlurPreview.tsx` - Video placeholder with face blur toggle, hint animation
- `ShareSheet.tsx` - Instagram-style share UI with `data-event` tracking
- `DemoSuccess.tsx` - Confetti + "Request early access" CTA to `/#early-access`
- `constants.ts` - Mock data for matches and highlights
- `DemoWelcome.tsx`, `MatchSelector.tsx`, `AIProcessing.tsx` - Legacy (not used in current flow)

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
