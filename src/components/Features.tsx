"use client";

// Feature 1: Mum Gets Every Goal - iMessage mockup
function MumFeature() {
  return (
    <div className="card p-6 animate-fade-up" style={{ animationDelay: "0s" }}>
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* iMessage mockup */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-72 bg-[#1c1c1e] rounded-2xl p-4 shadow-xl">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Mum</p>
                <p className="text-text-muted text-xs">iMessage</p>
              </div>
            </div>
            {/* Message bubble */}
            <div className="flex justify-start mb-3">
              <div className="max-w-[85%]">
                <div className="bg-[#3a3a3c] rounded-2xl rounded-bl-md px-4 py-3">
                  <p className="text-white text-sm font-medium mb-2">James just scored!</p>
                  {/* Video thumbnail */}
                  <div className="relative aspect-video bg-bg-tertiary rounded-lg overflow-hidden mb-2">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl">⚽</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                        <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/60 text-[10px] text-white">
                      0:08
                    </div>
                  </div>
                  <p className="text-[#0b84fe] text-sm">Watch his goal →</p>
                </div>
                <p className="text-text-muted text-[10px] mt-1 ml-2">Just now</p>
              </div>
            </div>
            {/* Typing indicator style footer */}
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <div className="flex-1 h-8 bg-[#3a3a3c] rounded-full px-3 flex items-center">
                <span className="text-text-muted text-xs">iMessage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Mum Gets <span className="text-gradient">Every Goal</span>
          </h3>
          <p className="text-text-secondary mb-4">
            Add her number once. Every time you score, she gets a text with your clip. No app needed. No account required.
          </p>
          <div className="flex items-center gap-2 justify-center lg:justify-start text-sm text-text-muted">
            <span className="w-2 h-2 rounded-full bg-accent-primary" />
            <span>Works with WhatsApp, SMS, or email</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature 2: You're Getting Better - Progress dashboard
function ProgressFeature() {
  return (
    <div className="card p-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
      <div className="flex flex-col lg:flex-row-reverse gap-6 items-center">
        {/* Progress card mockup */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-72 bg-bg-tertiary rounded-2xl p-5 shadow-xl border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-text-muted uppercase tracking-wider">This Month</span>
              <span className="text-xs text-accent-primary font-medium">Oct 2024</span>
            </div>

            {/* Stats grid */}
            <div className="space-y-4">
              {/* Shot accuracy */}
              <div className="bg-bg-secondary rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-text-secondary">Shot Accuracy</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span className="text-accent-primary font-bold">+23%</span>
                  </div>
                </div>
                <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                  <div className="h-full w-[72%] bg-gradient-to-r from-accent-primary to-cyan-400 rounded-full" />
                </div>
              </div>

              {/* Goals */}
              <div className="flex gap-3">
                <div className="flex-1 bg-bg-secondary rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-white">5</p>
                  <p className="text-xs text-text-muted">Goals</p>
                </div>
                <div className="flex-1 bg-bg-secondary rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-xs text-text-muted">Assists</p>
                </div>
              </div>

              {/* Insight */}
              <div className="bg-accent-primary/10 border border-accent-primary/20 rounded-xl p-3">
                <div className="flex items-start gap-2">
                  <span className="text-accent-primary">✨</span>
                  <p className="text-sm text-white">
                    <span className="font-semibold">Best month yet!</span>
                    <span className="text-text-secondary"> You&apos;re becoming a set-piece specialist.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="text-gradient">You&apos;re Getting</span> Better
          </h3>
          <p className="text-text-secondary mb-4">
            AI tracks your highlights over time and tells you when you&apos;re improving. Professional-level insights, automatically.
          </p>
          <div className="flex items-center gap-2 justify-center lg:justify-start text-sm text-text-muted">
            <span className="w-2 h-2 rounded-full bg-accent-primary" />
            <span>Like having a personal analyst</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature 3: Top 1% - Moment rarity badge
function RarityFeature() {
  return (
    <div className="card p-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Highlight card with badge */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-72">
            {/* Glow effect behind card */}
            <div className="absolute -inset-4 bg-gradient-radial from-energy-warm/30 to-transparent blur-2xl" />

            <div className="relative bg-bg-tertiary rounded-2xl overflow-hidden shadow-xl border border-energy-warm/30">
              {/* Video area */}
              <div className="aspect-video bg-bg-secondary relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl">⚽</span>
                </div>
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* TOP 1% Badge */}
                <div className="absolute top-3 right-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-energy-warm blur-lg opacity-60 animate-pulse" />
                    <div className="relative px-3 py-1.5 bg-gradient-to-r from-energy-warm to-orange-500 rounded-full">
                      <span className="text-black font-black text-sm tracking-wide">TOP 1%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-white font-semibold mb-1">25-yard screamer</p>
                <p className="text-sm text-text-secondary">Only 3% of goals are scored from this distance</p>

                {/* Rarity bar */}
                <div className="mt-3">
                  <div className="h-1.5 bg-bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[99%] bg-gradient-to-r from-energy-warm via-orange-500 to-red-500 rounded-full" />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-[10px] text-text-muted">Common</span>
                    <span className="text-[10px] text-energy-warm font-medium">Exceptional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="text-energy-warm">Top 1%</span> Moments
          </h3>
          <p className="text-text-secondary mb-4">
            AI rates how special your moment was. Turn your Sunday league screamer into a shareable brag.
          </p>
          <div className="flex items-center gap-2 justify-center lg:justify-start text-sm text-text-muted">
            <span className="w-2 h-2 rounded-full bg-energy-warm" />
            <span>Makes ordinary feel extraordinary</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature 4: Your Season Story - Documentary preview
function SeasonFeature() {
  return (
    <div className="card p-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex flex-col lg:flex-row-reverse gap-6 items-center">
        {/* Video preview mockup */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-72">
            {/* Film strip effect */}
            <div className="absolute -left-2 top-0 bottom-0 w-4 bg-bg-tertiary rounded-l flex flex-col justify-around py-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-2 h-2 mx-auto bg-bg-secondary rounded-sm" />
              ))}
            </div>
            <div className="absolute -right-2 top-0 bottom-0 w-4 bg-bg-tertiary rounded-r flex flex-col justify-around py-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-2 h-2 mx-auto bg-bg-secondary rounded-sm" />
              ))}
            </div>

            <div className="relative bg-bg-tertiary rounded-xl overflow-hidden shadow-xl border border-white/10">
              {/* Video thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-bg-secondary via-bg-tertiary to-bg-secondary relative">
                {/* Title card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <p className="text-text-muted text-xs uppercase tracking-widest mb-2">2024 Season</p>
                  <p className="text-white text-xl font-bold text-center">James Thompson</p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-text-secondary">
                    <span>12 goals</span>
                    <span className="w-1 h-1 rounded-full bg-text-muted" />
                    <span>5 assists</span>
                    <span className="w-1 h-1 rounded-full bg-text-muted" />
                    <span>18 matches</span>
                  </div>
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded text-xs text-white">
                  3:24
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-1 bg-bg-secondary">
                <div className="h-full w-0 bg-accent-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Your <span className="text-gradient">Season Story</span>
          </h3>
          <p className="text-text-secondary mb-4">
            At season end, AI creates a 3-minute documentary of your year. Your best moments, stats, and growth — ready to share with family.
          </p>
          <div className="flex items-center gap-2 justify-center lg:justify-start text-sm text-text-muted">
            <span className="w-2 h-2 rounded-full bg-accent-primary" />
            <span>Like Spotify Wrapped, for football</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature 5: Coach's Notes - AI commentary
function CoachFeature() {
  return (
    <div className="card p-6 animate-fade-up lg:col-span-2" style={{ animationDelay: "0.4s" }}>
      <div className="flex flex-col lg:flex-row gap-6 items-center max-w-4xl mx-auto">
        {/* Highlight with AI bubble */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="bg-bg-tertiary rounded-2xl overflow-hidden shadow-xl border border-white/10">
              {/* Video area */}
              <div className="aspect-video bg-bg-secondary relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">⚽</span>
                </div>

                {/* Play controls */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-3">
                    <button className="text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    <div className="flex-1 h-1 bg-white/20 rounded-full">
                      <div className="h-full w-[65%] bg-white rounded-full" />
                    </div>
                    <span className="text-xs text-white/80">0:05 / 0:08</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Commentary bubble */}
            <div className="absolute -bottom-4 -right-4 lg:-right-8 max-w-[200px]">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-accent-primary/20 blur-xl" />

                <div className="relative bg-bg-secondary border border-accent-primary/30 rounded-2xl rounded-br-md p-3 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center">
                      <span className="text-accent-primary text-xs">✨</span>
                    </div>
                    <span className="text-xs text-accent-primary font-medium">AI Analysis</span>
                  </div>
                  <p className="text-sm text-white leading-snug">
                    &ldquo;Great positioning. You anticipated the through ball perfectly.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="text-gradient">Coach&apos;s Notes</span>
          </h3>
          <p className="text-text-secondary mb-4">
            AI writes professional analysis for every highlight. Understand why your moment was good — like having a Sky Sports pundit for your Sunday league.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 justify-center lg:justify-start text-sm text-text-muted">
              <span className="w-2 h-2 rounded-full bg-accent-primary" />
              <span>&ldquo;Clinical finish. Keeper had no chance.&rdquo;</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start text-sm text-text-muted">
              <span className="w-2 h-2 rounded-full bg-accent-primary" />
              <span>&ldquo;Strong header. Won the aerial duel.&rdquo;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="section-padding bg-bg-primary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-energy-warm/5 to-transparent blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            AI That <span className="text-gradient">Knows You</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            Not just clips. Insights, motivation, and sharing that happens automatically.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <MumFeature />
          <ProgressFeature />
          <RarityFeature />
          <SeasonFeature />
          <CoachFeature />
        </div>
      </div>
    </section>
  );
}
