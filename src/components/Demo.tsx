"use client";

import { useState } from "react";

type DemoStep = 1 | 2 | 3;

interface Highlight {
  id: string;
  type: "goal" | "assist" | "save";
  time: string;
  position: number; // percentage along timeline
}

const highlights: Highlight[] = [
  { id: "1", type: "goal", time: "23:14", position: 25 },
  { id: "2", type: "assist", time: "41:02", position: 45 },
  { id: "3", type: "goal", time: "67:38", position: 75 },
];

const stepInfo = {
  1: {
    title: "Find Your Moment",
    description: "AI watches the full match so you don't have to. Click any highlight to jump straight to your best moments.",
  },
  2: {
    title: "Privacy Protected",
    description: "Everyone else stays anonymous. Toggle face blur to share safely on social media.",
  },
  3: {
    title: "Ready for Instagram",
    description: "One tap. Posted before the final whistle. Your goal gets the recognition it deserves.",
  },
};

export default function Demo() {
  const [currentStep, setCurrentStep] = useState<DemoStep>(1);
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(highlights[0]);
  const [faceBlurEnabled, setFaceBlurEnabled] = useState(true);
  const [isSharing, setIsSharing] = useState(false);

  const handleHighlightClick = (highlight: Highlight) => {
    setSelectedHighlight(highlight);
    // Auto-advance to step 2 after selecting
    if (currentStep === 1) {
      setTimeout(() => setCurrentStep(2), 500);
    }
  };

  const handleShare = () => {
    setIsSharing(true);
    setTimeout(() => {
      setIsSharing(false);
    }, 2000);
  };

  const getHighlightIcon = (type: Highlight["type"]) => {
    switch (type) {
      case "goal":
        return "⚽";
      case "assist":
        return "🎯";
      case "save":
        return "🧤";
    }
  };

  const getHighlightColor = (type: Highlight["type"]) => {
    switch (type) {
      case "goal":
        return "bg-energy-warm";
      case "assist":
        return "bg-accent-primary";
      case "save":
        return "bg-energy-cool";
    }
  };

  return (
    <section id="demo" className="section-padding bg-bg-primary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-radial from-accent-primary/10 to-transparent blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-6">
            See the <span className="text-gradient">Magic</span> in Action
          </h2>
          <p className="hidden md:block max-w-2xl mx-auto text-lg text-text-secondary">
            Try it yourself. This is exactly how it works.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {[1, 2, 3].map((step) => (
            <button
              key={step}
              onClick={() => setCurrentStep(step as DemoStep)}
              className={`flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300
                ${currentStep === step
                  ? "bg-accent-primary text-black font-bold"
                  : "bg-bg-tertiary text-text-secondary hover:bg-bg-tertiary/80"
                }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold
                ${currentStep === step ? "bg-black/20" : "bg-white/10"}`}>
                {step}
              </span>
              <span className="hidden md:inline">{stepInfo[step as DemoStep].title}</span>
            </button>
          ))}
        </div>

        {/* Demo container */}
        <div className="max-w-5xl mx-auto">
          {/* Current step info */}
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-3xl font-bold md:mb-3">
              {stepInfo[currentStep].title}
            </h3>
            <p className="hidden md:block text-text-secondary max-w-xl mx-auto">
              {stepInfo[currentStep].description}
            </p>
          </div>

          {/* Interactive demo area */}
          <div className="relative rounded-2xl overflow-hidden bg-bg-secondary border border-white/10">
            {/* Ambient glow */}
            <div className="absolute -inset-4 bg-gradient-radial from-accent-primary/10 to-transparent blur-2xl opacity-50" />

            <div className="relative">
              {/* Video area */}
              <div className="aspect-video bg-bg-tertiary relative">
                {/* Placeholder for actual video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {currentStep === 3 && isSharing ? (
                    // Sharing animation
                    <div className="text-center animate-fade-up">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent-primary/20 flex items-center justify-center">
                        <svg className="w-10 h-10 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-xl font-bold text-white">Posted to Instagram!</p>
                      <p className="text-text-secondary mt-2">Likes are already rolling in...</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-6xl mb-4">{selectedHighlight ? getHighlightIcon(selectedHighlight.type) : "🎬"}</p>
                      <p className="text-text-secondary">
                        {selectedHighlight
                          ? `${selectedHighlight.type.charAt(0).toUpperCase() + selectedHighlight.type.slice(1)} at ${selectedHighlight.time}`
                          : "Select a highlight below"}
                      </p>
                      {currentStep === 2 && (
                        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10">
                          <span className={`w-3 h-3 rounded-full ${faceBlurEnabled ? "bg-accent-primary" : "bg-energy-hot"}`} />
                          <span className="text-sm">Face blur {faceBlurEnabled ? "ON" : "OFF"}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Face blur toggle overlay - Step 2 */}
                {currentStep === 2 && (
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setFaceBlurEnabled(!faceBlurEnabled)}
                      className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300
                        ${faceBlurEnabled ? "bg-accent-primary text-black" : "bg-bg-tertiary text-white border border-white/20"}`}
                    >
                      <span className="font-semibold text-sm">Face Blur</span>
                      <div className={`w-10 h-6 rounded-full relative transition-colors duration-300
                        ${faceBlurEnabled ? "bg-black/20" : "bg-white/20"}`}>
                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300
                          ${faceBlurEnabled ? "left-5" : "left-1"}`} />
                      </div>
                    </button>
                  </div>
                )}

                {/* Share button - Step 3 */}
                {currentStep === 3 && !isSharing && (
                  <div className="absolute bottom-4 right-4">
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold transition-transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      </svg>
                      Share to Instagram
                    </button>
                  </div>
                )}
              </div>

              {/* Timeline - Step 1 */}
              <div className="p-4 md:p-6 border-t border-white/10">
                <div className="flex items-center gap-4 mb-3 md:mb-4">
                  <span className="text-xs text-text-muted uppercase tracking-wider">Match Timeline</span>
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-xs text-text-muted font-mono">90:00</span>
                </div>

                {/* Timeline bar */}
                <div className="relative h-3 bg-bg-tertiary rounded-full overflow-visible">
                  {/* Progress fill */}
                  <div className="absolute inset-y-0 left-0 w-full bg-white/5 rounded-full" />

                  {/* Highlight markers */}
                  {highlights.map((highlight) => (
                    <button
                      key={highlight.id}
                      onClick={() => handleHighlightClick(highlight)}
                      className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full transition-all duration-300 cursor-pointer
                        ${getHighlightColor(highlight.type)}
                        ${selectedHighlight?.id === highlight.id
                          ? "scale-150 shadow-glow-warm ring-2 ring-white/50"
                          : "hover:scale-125"
                        }`}
                      style={{ left: `${highlight.position}%` }}
                      title={`${highlight.type} at ${highlight.time}`}
                    />
                  ))}
                </div>

                {/* Highlight legend */}
                <div className="flex items-center justify-center gap-4 md:gap-6 mt-4 md:mt-6">
                  {[
                    { type: "goal", label: "Goals", color: "bg-energy-warm" },
                    { type: "assist", label: "Assists", color: "bg-accent-primary" },
                    { type: "save", label: "Saves", color: "bg-energy-cool" },
                  ].map((item) => (
                    <div key={item.type} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-sm text-text-secondary">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Next step prompt */}
          {currentStep < 3 && (
            <div className="mt-6 md:mt-8 text-center">
              <button
                onClick={() => setCurrentStep((currentStep + 1) as DemoStep)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bg-tertiary text-white font-semibold hover:bg-bg-tertiary/80 transition-colors"
              >
                Next: {stepInfo[(currentStep + 1) as DemoStep].title}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {/* Always visible CTA */}
          <div className="mt-8 md:mt-12 text-center">
            <p className="hidden md:block text-lg text-text-secondary mb-4">Want the full experience?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/try"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-white/90 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Try Interactive Demo
              </a>
              <a href="#pricing" className="btn-secondary text-lg">
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
