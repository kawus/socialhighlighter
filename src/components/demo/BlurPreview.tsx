"use client";

import { Highlight, getHighlightIcon } from "./constants";

interface BlurPreviewProps {
  highlight: Highlight | null;
  blurEnabled: boolean;
  onToggleBlur: () => void;
  onContinue: () => void;
}

// Simulated face positions for blur circles
const facePositions = [
  { x: 25, y: 35, size: 40 },
  { x: 70, y: 40, size: 35 },
  { x: 45, y: 60, size: 30 },
];

export default function BlurPreview({
  highlight,
  blurEnabled,
  onToggleBlur,
  onContinue,
}: BlurPreviewProps) {
  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-[34px]">
      {/* Video preview area */}
      <div className="relative aspect-video rounded-[12px] bg-[#1C1C1E] overflow-hidden mb-6">
        {/* Gradient background simulating video */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a1a] via-[#1C1C1E] to-[#1a1a2a]">
          {/* Grid lines suggesting pitch */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
          </div>
        </div>

        {/* Highlight info overlay */}
        {highlight && (
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm flex items-center gap-2">
            <span className="text-lg">{getHighlightIcon(highlight.type)}</span>
            <span className="text-[13px] text-white font-medium">
              {highlight.type.charAt(0).toUpperCase() + highlight.type.slice(1)} · {highlight.time}
            </span>
          </div>
        )}

        {/* Face blur circles */}
        {facePositions.map((face, index) => (
          <div
            key={index}
            className={`absolute rounded-full transition-all duration-500 ease-out
              ${blurEnabled
                ? "bg-white/20 backdrop-blur-xl scale-100 opacity-100"
                : "bg-transparent backdrop-blur-0 scale-75 opacity-0"
              }
            `}
            style={{
              left: `${face.x}%`,
              top: `${face.y}%`,
              width: face.size,
              height: face.size,
              transform: `translate(-50%, -50%) ${blurEnabled ? "scale(1)" : "scale(0.75)"}`,
              transitionDelay: `${index * 100}ms`,
            }}
          >
            {/* Face silhouette hint */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
              ${blurEnabled ? "opacity-30" : "opacity-0"}`}>
              <svg width="60%" height="60%" viewBox="0 0 24 24" fill="white">
                <circle cx="12" cy="8" r="4" />
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              </svg>
            </div>
          </div>
        ))}

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="white">
              <path d="M0 0L24 14L0 28V0Z" />
            </svg>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div className="h-full w-1/3 bg-[#30D158]" />
        </div>
      </div>

      {/* Face Blur Toggle - iOS Style */}
      <div className="bg-[#1C1C1E] rounded-[12px] p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[17px] font-semibold text-white mb-1">
              Privacy Mode
            </h3>
            <p className="text-[13px] text-white/50">
              Everyone except you stays anonymous
            </p>
          </div>

          {/* iOS-style toggle */}
          <button
            onClick={onToggleBlur}
            className={`relative w-[51px] h-[31px] rounded-full transition-colors duration-300
              ${blurEnabled ? "bg-[#30D158]" : "bg-[#39393D]"}
            `}
          >
            <div
              className={`absolute top-[2px] w-[27px] h-[27px] rounded-full bg-white shadow-md transition-transform duration-300
                ${blurEnabled ? "left-[22px]" : "left-[2px]"}
              `}
            />
          </button>
        </div>
      </div>

      {/* Status indicator */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className={`w-2 h-2 rounded-full transition-colors duration-300
          ${blurEnabled ? "bg-[#30D158]" : "bg-[#FF453A]"}`}
        />
        <span className="text-[13px] text-white/60">
          Face blur {blurEnabled ? "enabled" : "disabled"}
        </span>
      </div>

      {/* Continue button */}
      <div className="mt-auto">
        <button
          onClick={onContinue}
          className="w-full h-[50px] rounded-[12px] bg-[#30D158] text-black text-[17px] font-semibold
            active:scale-[0.97] active:opacity-90 transition-all duration-100"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
