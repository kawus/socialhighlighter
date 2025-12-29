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
1. Hero - "Early access" badge, headline, **Veo camera badge** with FAQ link, CTAs ("See How It Works" primary → `#demo`, "Join the Waitlist" secondary → `#early-access`), **clickable video placeholder** (→ `/try`), floating stat cards
2. SocialProof - Example IG posts with **Unsplash grassroots football images**, **"Built on Veo" credibility card** with 50K+ cameras stat
3. Problem - 5-step narrative showing user pain points
4. Demo (`#demo`) - Interactive 3-step demo (timeline, face blur toggle, share simulation), **single CTA** ("Join the Waitlist — Free"), **secondary /try link** ("Or try the full iOS experience →")
5. Features - "AI That Knows You" section showcasing 5 AI-powered features with rich mockups
6. Pricing (`#early-access`) - Two-tier: Early Access (£4.99, active "Get Early Access" CTA) + Free Waitlist (**Recommended**, simplified email + optional role form)
7. FAQ - Accordion with trust-focused answers, **Veo requirement at #2**, **conversion CTA at end**
8. Footer

### Interactive Demo (`/try`)
Streamlined "belief demo" at `src/app/try/`. Designed for instant "wow" + clear conversion path. 4-step flow:
1. Highlight Selection - Pre-selected "Goal — 67:38", timeline + 3 moment cards, Continue button
2. Blur Preview - Face blur toggle with hint animation, **AI rarity badge** (TOP 1% etc.), rarity insight card, Continue button
3. Share Sheet - Instagram share simulation
4. Success - Confetti + "Request early access" CTA + **Explore Hub** with AI feature previews

**Explore Hub (Success screen):**
After completing the demo, users can explore AI features via tappable cards:
- **Top 1% Moments** - Explains rarity scoring system with example rankings
- **Season Story** - Cinematic preview of AI-generated season documentary
Both lead to "Request early access" with clear expectation-setting microcopy.

**Key UX patterns:**
- **Instant win**: Demo loads with best highlight already selected (no blank state)
- **User-triggered progression**: No auto-advancing; user clicks Continue to proceed
- **Instruction line**: "Click a moment → watch the clip → toggle privacy blur → share."
- **Reality signal**: "Example clip from a real amateur match." shown below instructions
- **AI validation**: Rarity badge + insight card in BlurPreview makes user feel their moment is special
- **Conversion bridge**: Success screen links to `/#early-access` with microcopy "No spam. We'll invite UK testers first."

**Analytics instrumentation** (data-event attributes for future wiring):

Landing page:
- `hero_try_demo` - Hero video placeholder click
- `demo_try_full_experience` - Secondary /try link in Demo section
- `demo_cta_get_clips` - Main waitlist CTA in Demo section
- `faq_cta_join_waitlist` - FAQ section conversion CTA

Interactive demo (/try):
- `try_demo_loaded` - Main container
- `try_demo_click_moment` - Timeline markers + highlight cards
- `try_demo_toggle_blur` - Privacy toggle
- `try_demo_rarity_viewed` - When rarity badge appears
- `try_demo_share` - Instagram share button
- `try_demo_request_early_access` - Final CTA
- `try_demo_explore_top1` - When Top 1% preview opens
- `try_demo_explore_season` - When Season Story preview opens

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
- `.animate-sheet-up`, `.animate-sheet-down` - iOS-style sheet slide animations for explore features

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
- `Hero.tsx` - "Early access" badge, **Veo camera badge** ("Works with Veo Cam & Veo Go" + FAQ link), dual CTAs (primary: "See How It Works", secondary: "Join the Waitlist"), **clickable video placeholder** (→ `/try` with hover effects)
- `SocialProof.tsx` - Example IG posts with **Unsplash grassroots football images** (lazy-loaded), "Examples" label, **"Built on Veo" credibility card**
- `Demo.tsx` - Minimal text (step title only), 3-step flow with `data-event` tracking, **single CTA** ("Join the Waitlist — Free"), **secondary /try link**
- `Features.tsx` - "AI That Knows You" section with 5 rich mockup feature cards:
  - Mum Gets Every Goal: iMessage mockup showing auto-share to family
  - You're Getting Better: Progress dashboard with stats and AI insights
  - Top 1%: Highlight card with glowing rarity badge and percentile bar
  - Your Season Story: Film-strip video preview for AI-generated season documentary
  - Coach's Notes: Highlight with AI analysis speech bubble
- `Pricing.tsx` - Two cards: Early Access (£4.99, active "Get Early Access" button) + Free Waitlist (**Recommended badge**, simplified form: email required + role optional), `#early-access` anchor
- `FAQ.tsx` - Accordion with trust-focused answers, **Veo requirement moved to #2**, **conversion CTA** ("Ready to join?") at section end

**Interactive Demo (`src/components/demo/`):**
- `DemoPage.tsx` - Orchestrator managing 4-step belief demo flow + explore feature state
- `HighlightReveal.tsx` - Timeline + highlight cards with default selection, Continue button
- `BlurPreview.tsx` - Video placeholder with face blur toggle, hint animation, rarity badge + insight card
- `ShareSheet.tsx` - Instagram-style share UI with `data-event` tracking
- `DemoSuccess.tsx` - Confetti + "Request early access" CTA + Explore Hub with feature cards
- `SeasonStoryPreview.tsx` - Cinematic season documentary preview with film-strip UI, stats, AI insight
- `Top1Preview.tsx` - Rarity system explainer with hero badge, example rankings, "how it works"
- `constants.ts` - Mock data for matches, highlights (with rarity data), and ExploreFeature type
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
- Stripe payment integration (Early Access button currently scrolls to waitlist)
- Backend/database for form submissions
- Real video assets (using placeholders)
- iOS push/pop slide transitions between demo steps
- Exit-intent modal for early demo abandonment
