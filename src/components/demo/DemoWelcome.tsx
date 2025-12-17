"use client";

interface DemoWelcomeProps {
  onStart: () => void;
}

export default function DemoWelcome({ onStart }: DemoWelcomeProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 text-center relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-radial from-[#30D158]/20 via-[#30D158]/5 to-transparent blur-3xl" />

      {/* Content */}
      <div className="relative z-10">
        {/* App icon placeholder */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-[22px] bg-gradient-to-br from-[#30D158] to-[#00D4FF] flex items-center justify-center shadow-lg">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            className="text-black"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-[34px] font-bold text-white leading-[41px] mb-4">
          Experience Your First Highlight
        </h1>

        {/* Subtext */}
        <p className="text-[17px] text-white/60 leading-[22px] mb-12 max-w-[300px]">
          See how easy it is to go from match footage to Instagram-ready clip in 60 seconds.
        </p>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="w-full max-w-[300px] h-[50px] rounded-[12px] bg-[#30D158] text-black text-[17px] font-semibold
            active:scale-[0.97] active:opacity-90 transition-all duration-100"
        >
          Start Demo
        </button>

        {/* Skip link */}
        <button
          onClick={() => window.location.href = "/"}
          className="mt-6 text-[15px] text-white/40 active:text-white/60 transition-colors"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}
