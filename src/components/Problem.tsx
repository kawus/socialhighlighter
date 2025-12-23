"use client";

const steps = [
  {
    icon: "⚽",
    title: "You score a screamer",
    description: "Top bins. Your best goal all season.",
  },
  {
    icon: "📱",
    title: "You want it on Instagram",
    description: "Right now. While everyone's still buzzing.",
  },
  {
    icon: "⏳",
    title: "But the footage takes days",
    description: "90 minutes of video. Somewhere in there is your 10 seconds.",
  },
  {
    icon: "😤",
    title: "You scroll. And scroll.",
    description: "Where is it? This is taking forever.",
  },
  {
    icon: "💀",
    title: "The hype dies",
    description: "Your goal dies in your camera roll. Nobody sees it.",
  },
];

export default function Problem() {
  return (
    <section className="section-padding bg-bg-secondary relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-6">
            Your Best Goal{" "}
            <span className="text-energy-hot">Deserves Better</span>
          </h2>
          <p className="hidden md:block max-w-2xl mx-auto text-lg text-text-secondary">
            Sound familiar? Here&apos;s what happens every time you score something worth sharing.
          </p>
        </div>

        {/* Problem steps - visual story */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex items-start gap-4 md:gap-6 mb-4 md:mb-6 last:mb-0"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 md:left-7 top-10 md:top-14 w-0.5 h-full bg-gradient-to-b from-white/20 to-transparent" />
              )}

              {/* Icon */}
              <div
                className={`flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-lg md:text-xl
                  ${index === steps.length - 1 ? "bg-energy-hot/20" : "bg-bg-tertiary"}
                  border border-white/10`}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-xl md:text-2xl font-bold md:mb-2">
                  {step.title}
                </h3>
                <p className="hidden md:block text-text-secondary">{step.description}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Transition to solution */}
        <div className="mt-10 md:mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-primary/10 border border-accent-primary/20">
            <span className="text-accent-primary font-semibold">
              There&apos;s a better way
            </span>
            <svg
              className="w-4 h-4 text-accent-primary animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
