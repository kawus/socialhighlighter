# Social Highlighter Landing Page

A high-conversion landing page for Social Highlighter—an AI-powered tool that turns your best football moments into shareable highlights instantly.

## Project Overview

This landing page was built to validate demand for Social Highlighter through:
- Interactive demo showing the product experience
- Two-tier CTA: £4.99 preorder deposit + free waitlist
- Conversion tracking to measure interest and willingness to pay

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript**
- **Tailwind CSS** with custom sports-focused design system
- **React** for interactive components

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit [http://localhost:3000](http://localhost:3000) to view the page.

## Project Structure

```
highlighter/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles + Tailwind
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main landing page
│   ├── components/
│   │   ├── Hero.tsx         # Hero section with video
│   │   ├── Problem.tsx      # Problem narrative
│   │   ├── Demo.tsx         # Interactive 3-step demo
│   │   ├── SocialProof.tsx  # Mock Instagram posts
│   │   ├── Pricing.tsx      # Preorder + waitlist CTAs
│   │   ├── FAQ.tsx          # Expandable FAQ
│   │   └── Footer.tsx       # Footer with links
│   └── lib/                 # Utilities (empty for now)
├── public/                  # Static assets
├── DESIGN_LANGUAGE.md       # Design system documentation
├── PLAN.md                  # Product strategy document
└── tailwind.config.ts       # Tailwind with custom tokens
```

## Design System

See `DESIGN_LANGUAGE.md` for the complete sports-focused design language including:
- Dark-first color palette (#0A0A0B background, #00FF87 accent)
- Gradient and glow effects (Apple Sports inspired)
- Bold typography system
- Animation patterns (shimmer, pulse, fade-up)
- Component specifications

## Features Built

### Hero Section
- Animated gradient background with glow effects
- "Coming Soon" badge with pulse animation
- Headline with gradient text effect
- Floating stat cards (60 sec delivery, Face blur)
- Video placeholder with simulated progress bar

### Problem Narrative
- 5-step visual story showing the pain of finding highlights
- Connected timeline with step numbers
- "There's a better way" transition CTA

### Interactive Demo
- 3-step tabbed interface
- Step 1: Match timeline with clickable highlight markers
- Step 2: Face blur toggle switch
- Step 3: "Share to Instagram" simulation with success state
- Auto-progression through steps

### Social Proof
- Mock Instagram posts with realistic engagement
- Stats bar: 60s delivery, 500+ beta users, 10K+ highlights
- Veo watermark on posts

### Pricing Section
- Founding Member tier: £4.99 deposit with benefits list
- Free Waitlist tier: Email signup form
- Success state after form submission
- Trust signals

### FAQ
- Expandable accordion (7 questions)
- First item open by default
- Smooth animations

## What's NOT Built Yet

### Stripe Integration
The preorder button currently shows an alert. To enable real payments:

1. Install Stripe: `npm install @stripe/stripe-js stripe`
2. Create Stripe account and get API keys
3. Set up Checkout Session API endpoint
4. Replace the `handlePreorder` function in `Pricing.tsx`

### Analytics
No analytics tracking implemented yet. Recommended:

1. Vercel Analytics (built-in, easy setup)
2. Custom event tracking for:
   - Page views
   - Demo step engagement
   - Preorder clicks
   - Waitlist signups

### Backend/Database
Form submissions currently don't persist. Options:
- Vercel KV for simple storage
- Supabase for full database
- Airtable for quick prototype

### Video Assets
Using placeholders. Need to add:
- Hero video showing before/after
- Demo clips for each highlight type
- Face blur on/off comparison clips

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Manual
```bash
npm run build
npm run start
```

## Next Steps

See PLAN.md for the full product strategy. Key next actions:

1. **Add real video assets** - Source highlight clips from Veo footage
2. **Integrate Stripe** - Enable £4.99 deposits
3. **Set up analytics** - Track demo engagement and conversions
4. **Deploy to Vercel** - Get live URL for ad campaigns
5. **Connect to backend** - Store waitlist signups
6. **Launch ads** - Drive traffic from Facebook/Instagram

## Success Metrics

| Metric | Target |
|--------|--------|
| Demo engagement | >40% of visitors |
| Demo completion | >60% of starters |
| Preorder conversion | >1% of visitors |
| Waitlist conversion | >5% of visitors |

## License

Private - Veo Technologies
