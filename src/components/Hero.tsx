"use client";

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEarlyAccess = () => {
    document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-60" />

      {/* Animated gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent-primary/20 via-accent-secondary/5 to-transparent blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-bg-tertiary border border-white/10">
          <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
          <span className="text-sm font-medium text-text-secondary">
            Early access
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up">
          <span className="block">From Pitch to Post</span>
          <span className="block text-gradient">in 60 Seconds</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base md:text-xl text-text-secondary mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          We turn your best moments into shareable highlight clips—ready while you&apos;re still at the pitch.
        </p>

        {/* Veo Requirement Badge */}
        <div className="flex items-center justify-center mb-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-tertiary/80 border border-white/10">
            <svg className="w-4 h-4 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-text-secondary">Works with Veo Cam & Veo Go</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <button
            onClick={scrollToDemo}
            className="btn-primary text-base"
            data-event="cta_see_how_it_works"
          >
            See How It Works
          </button>
          <button
            onClick={scrollToEarlyAccess}
            className="btn-secondary text-base"
            data-event="cta_request_early_access"
          >
            Join the Waitlist
          </button>
        </div>

        {/* Hero Video/Image Placeholder - Clickable → /try */}
        <div className="mt-10 md:mt-24 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative max-w-4xl mx-auto">
            {/* Video frame with glow */}
            <a
              href="/try"
              className="group relative block rounded-2xl overflow-hidden bg-bg-secondary border border-white/10 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-accent-primary/30 hover:shadow-glow"
              data-event="hero_try_demo"
            >
              {/* Ambient glow */}
              <div className="absolute -inset-4 bg-gradient-radial from-accent-primary/20 to-transparent blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />

              {/* Video placeholder */}
              <div className="relative aspect-video bg-bg-tertiary flex items-center justify-center">
                {/* Placeholder content */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent-primary/20 flex items-center justify-center backdrop-blur-sm border border-accent-primary/30 group-hover:bg-accent-primary/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold mb-1 group-hover:text-accent-primary transition-colors">
                    Try Interactive Demo
                  </p>
                  <p className="text-text-muted text-sm">
                    Experience the full iOS app →
                  </p>
                </div>
              </div>
            </a>

            {/* Floating stats cards */}
            <div className="absolute right-1 md:-right-12 top-4 md:top-8 p-2 md:p-4 rounded-lg md:rounded-xl bg-bg-tertiary/90 backdrop-blur-md border border-white/10 shadow-xl animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-text-muted uppercase tracking-wider">Delivery</p>
                  <p className="text-sm md:text-lg font-bold text-white">60 sec</p>
                </div>
              </div>
            </div>

            <div className="absolute left-1 md:-left-12 bottom-4 md:bottom-8 p-2 md:p-4 rounded-lg md:rounded-xl bg-bg-tertiary/90 backdrop-blur-md border border-white/10 shadow-xl animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-energy-warm/20 flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-energy-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-text-muted uppercase tracking-wider">Progress</p>
                  <p className="text-sm md:text-lg font-bold text-white">AI Tracked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
