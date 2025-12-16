# Social Highlighter: Demo Landing Page Strategy

## Executive Summary

Build a high-conversion landing page for Social Highlighter that overcomes the "interest without intent" gap by letting visitors **experience the product's magic** through an interactive demo using pre-recorded footage. Validate monetization with a two-tier CTA: refundable preorder deposit + free waitlist.

---

## Problem Statement

Current landing page results:
- Social Highlighter won on clicks (validated interest)
- Zero signups (failed conversion)
- Root cause: Visitors can't visualize the value—"AI finds your highlights" sounds too good to believe

**The insight:** People need to *experience* the transformation before they'll commit their email—let alone money.

---

## Strategic Approach

### Core Concept: "Try Before You Commit"

Transform the landing page from a static promise into an interactive experience where visitors:
1. **See** the problem (scrolling through 90 minutes of footage)
2. **Experience** the solution (watch AI "find" the highlight instantly)
3. **Feel** the output quality (play with editing features, see Instagram-ready result)
4. **Commit** based on belief, not hope

---

## Landing Page Structure

### Section 1: Hero
**Headline:** "From Pitch to Post in 60 Seconds"
**Subhead:** "Your goals, found by AI, privacy-protected, ready for Instagram—before you leave the pitch."

**Visual:** Split-screen video showing:
- Left: Endless scrubbing through match footage (the pain)
- Right: Highlight appearing instantly on phone (the solution)

**CTA:** "See How It Works" (scrolls to demo)

---

### Section 2: Problem Narrative
**Headline:** "Your Best Goal Deserves Better"

**Story flow (visual sequence):**
1. You score a screamer
2. You want it on Instagram NOW
3. But... footage takes days to upload
4. You scroll through 90 minutes trying to find 10 seconds
5. By the time you find it, the hype is dead
6. Your goal dies in your camera roll

**Tone:** Relatable frustration, not dramatic

---

### Section 3: Interactive Demo (The Conversion Engine)

**Headline:** "See the Magic in Action"

**Demo Experience (3-step interactive flow):**

#### Step 1: "Find Your Moment"
- Show a timeline representing 90 minutes of match footage
- Highlight markers appear at key moments (goals, saves, assists)
- User can click any marker to "jump" to that highlight
- Copy: "Our AI watches the full match so you don't have to"

#### Step 2: "Privacy Protected"
- Show the same highlight clip
- Toggle switch: "Face Blur: ON / OFF"
- When ON, all faces except the player are blurred
- Copy: "Share safely. Everyone else stays anonymous."

#### Step 3: "Ready for Instagram"
- Show the final output with:
  - Veo branding overlay
  - Optional slow-motion preview
  - Instagram Reels format (9:16 aspect ratio)
- "Share" button (simulated—shows mock Instagram post)
- Copy: "One tap. Posted before the final whistle."

**Post-demo CTA:** "Want This for Your Matches?"

---

### Section 4: Social Proof
**Headline:** "While You're Still at the Pitch"

**Visual:** Mock Instagram feed showing highlight posts with engagement:
- "847 likes in 3 hours"
- "Posted right after the match—everyone's still buzzing"
- Comment threads with fire emojis and reactions

**Alternative:** If real testimonials exist from beta users, use those instead.

---

### Section 5: Pricing & Commitment (Two-Tier CTA)

**Headline:** "Be First to Get Your Highlights"

#### Tier 1: Founding Member (Primary CTA)
**Price:** £4.99 deposit (fully refundable)

**What you get:**
- First access when we launch
- 3 months of unlimited highlights FREE
- Permanent "Founder" badge on your profile
- Direct input on features we build

**Trust signals:**
- "100% refundable if you change your mind"
- "Charged only when you reserve—refund anytime before launch"
- Stripe/PayPal logos for payment trust

**Button:** "Reserve My Spot — £4.99"

#### Tier 2: Free Waitlist (Secondary CTA)
**Copy:** "Not ready to commit? No worries."

**What you get:**
- Email notification when we launch
- Early access (after Founding Members)

**Button:** "Join Free Waitlist"

---

### Section 6: FAQ
Address key objections:

**Q: Is this real or just a concept?**
A: This is a real product in development by Veo, maker of AI-powered sports cameras used by thousands of clubs. We're building Social Highlighter based on the same technology.

**Q: What if it doesn't work as shown?**
A: Your £9.99 is fully refundable anytime before launch. If you're not satisfied with the final product, you get your money back.

**Q: When will it launch?**
A: We're aiming for [target timeframe]. Founding Members get first access.

**Q: Do I need a Veo camera?**
A: Yes, Social Highlighter works with matches recorded by Veo cameras.

---

## Technical Implementation

### Build Approach

**Standalone Next.js Application**
- Deploy to Vercel for fast, global CDN
- Can link from veo.co or use subdomain (e.g., highlights.veo.co)
- Full control over design and functionality
- Easy to iterate quickly

**Tech Stack:**
- Next.js 14+ with App Router
- TypeScript
- shadcn/ui components (customized for sports aesthetic)
- Tailwind CSS
- Stripe for payments
- Vercel Analytics + custom event tracking

**Design System:**
See `/Documents/dev/Highlighter/DESIGN_LANGUAGE.md` for the complete sports-focused design language including:
- Dark-first color palette with electric green accents
- Gradient and glow effects (Apple Sports inspired)
- Bold typography system
- Animation patterns (shimmer, pulse, fade-up)
- Component specifications (buttons, cards, video frames, timeline)

### Demo Component Architecture

The demo is the heart of the conversion experience. It should be:
- Smooth, immediate interactions (no loading spinners)
- Mobile-first (most traffic from Instagram/Facebook ads)
- Pre-loaded video assets for instant playback

**Video Assets Needed (You will provide):**
1. Sample match footage (90-second compressed timeline representation)
2. 3-4 highlight clips extracted from that match
3. Each clip in two versions: faces visible / faces blurred
4. Instagram-formatted output preview
5. Mock engagement overlay (likes, comments)

**Interactive Elements:**
1. Timeline scrubber with highlight markers
2. Face blur toggle (swaps video source)
3. "Post to Instagram" simulation

### Payment Integration

**Stripe Checkout**
- £4.99 refundable deposit
- Handles deposits naturally
- Easy refund processing
- Strong trust signals (recognized by users)

### Form Data to Capture

**Preorder:**
- Email
- First name
- Club name (optional)
- Player level (optional dropdown)
- Payment processed via Stripe

**Waitlist:**
- Email
- First name
- Club name (optional)

### Analytics Events to Track

| Event | Purpose |
|-------|---------|
| Page view | Baseline traffic |
| Demo started (Step 1) | Interest in demo |
| Demo Step 2 reached | Face blur resonates |
| Demo completed (Step 3) | Full demo engagement |
| Preorder clicked | Purchase intent |
| Preorder completed | Conversion |
| Waitlist clicked | Lower commitment intent |
| Waitlist completed | Email capture |

**Key metrics:**
- Demo engagement rate (% visitors who interact)
- Demo completion rate (% who reach Step 3)
- Preorder conversion rate
- Waitlist conversion rate
- Preorder:Waitlist ratio

---

## Success Criteria

### Validation Thresholds

| Metric | Target | Signal |
|--------|--------|--------|
| Demo engagement | >40% | Value prop is compelling |
| Demo completion | >60% of starters | Experience is smooth |
| Preorder conversion | >1% of visitors | Willingness to pay exists |
| Waitlist conversion | >5% of visitors | Strong interest |
| Preorder:Waitlist | >1:5 | Monetization viable |

### Kill Criteria (When to Pivot)

- Preorder <0.5% after 1,000 visitors → Pricing or value mismatch
- Demo engagement <20% → Demo not compelling
- Demo completion <30% → UX problems or weak payoff

---

## Post-Signup Flow

### For Preorder Customers
1. Confirmation email with receipt
2. "What we're building" update email (1 week later)
3. Monthly progress updates
4. Beta access invitation
5. Launch notification

### For Waitlist Signups
1. Confirmation email
2. "What we're building" email (1 week later)
3. Launch notification

### Feedback Survey (Both Tiers)
After signup, redirect to optional 3-question survey:
1. "What's most important to you?" (Speed / Privacy / Quality / Ease of sharing)
2. "How often do you post match content?" (Never / Rarely / Sometimes / Often)
3. "What would you pay monthly for unlimited highlights?" (£4.99 / £7.99 / £9.99 / £14.99)

---

## Scope & Phases

### Phase 1: Core Landing Page (MVP)
- Hero section with video
- Problem narrative
- Interactive demo (all 3 steps)
- Two-tier CTA (preorder + waitlist)
- Mobile-responsive design
- Stripe payment integration
- Basic analytics

### Phase 2: Optimization (Post-Launch)
- A/B test headlines
- Heatmap analysis of demo engagement
- Survey results integration
- Social proof section with real data

---

## Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Hosting | Standalone Next.js app | Full control, easy iteration, Vercel deployment |
| Price point | £4.99 | Lower barrier for initial test, can A/B test higher later |
| Video assets | Available | You will provide real Veo match footage |
| Demo approach | Pre-recorded | Simulated AI with real footage, no live processing |

---

## Open Questions to Resolve

1. **Refund policy:** Full refund anytime, or only before launch?
2. **Founder perks:** What's realistic to promise beyond early access?
3. **Domain:** Use subdomain (highlights.veo.co) or custom domain?

---

## Implementation Roadmap

### Phase 1: Foundation
1. Set up Next.js project with shadcn/ui
2. Create responsive page layout (mobile-first)
3. Build hero section with video

### Phase 2: Interactive Demo
4. Build timeline component with highlight markers
5. Create video player with face blur toggle
6. Build "Share to Instagram" simulation

### Phase 3: Conversion Flow
7. Build two-tier CTA section (preorder + waitlist)
8. Integrate Stripe Checkout for £4.99 deposits
9. Set up form handling and data storage
10. Create confirmation/thank you flow

### Phase 4: Polish & Launch
11. Set up analytics tracking (page views, demo engagement, conversions)
12. Mobile QA and performance optimization
13. Soft launch to small audience
14. Iterate based on feedback
15. Full ad campaign launch

---

## Video Assets Checklist

You will need to provide:

- [ ] Full match footage (or representative timeline clip, ~60-90 seconds)
- [ ] 3-4 highlight clips (goals, saves, assists) - 10-15 seconds each
- [ ] Same clips with face blur applied
- [ ] High-quality poster images for video loading states
- [ ] Optional: Example Instagram post mockup with engagement
